import { PageSection } from "./adminTypes";

// GitHub API endpoints
const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'albertfast'; 
const REPO_NAME = 'teiraculinaria';

// Function to update files in GitHub
export async function commitToGitHub(
  sections: PageSection[],
  token: string,
  message: string = 'Update site content via admin panel'
): Promise<boolean> {
  try {
    // Get the current commit SHA
    const branch = 'main';
    const branchData = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/branches/${branch}`,
      {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    ).then(res => res.json());

    const currentCommitSha = branchData.commit.sha;
    
    // Convert sections to file updates
    const fileUpdates = await generateFileUpdates(sections);
    
    // Create tree objects
    const treeItems = await Promise.all(
      fileUpdates.map(async file => {
        // Get the current file blob to calculate changes
        const fileContent = await fetch(
          `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${file.path}?ref=${branch}`,
          {
            headers: {
              'Authorization': `token ${token}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        ).then(res => res.json())
          .catch(() => null); // File might not exist yet

        // Create a new blob for the file content
        const blobResponse = await fetch(
          `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/git/blobs`,
          {
            method: 'POST',
            headers: {
              'Authorization': `token ${token}`,
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: btoa(unescape(encodeURIComponent(file.content))),
              encoding: 'base64'
            })
          }
        ).then(res => res.json());

        return {
          path: file.path,
          mode: '100644', // Normal file mode
          type: 'blob',
          sha: blobResponse.sha
        };
      })
    );

    // Create a new tree
    const newTreeResponse = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/git/trees`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          base_tree: currentCommitSha,
          tree: treeItems
        })
      }
    ).then(res => res.json());

    // Create a new commit
    const newCommitResponse = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/git/commits`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
          tree: newTreeResponse.sha,
          parents: [currentCommitSha]
        })
      }
    ).then(res => res.json());

    // Update branch reference
    await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/${branch}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sha: newCommitResponse.sha,
          force: false
        })
      }
    );

    return true;
  } catch (error) {
    console.error('Error committing to GitHub:', error);
    return false;
  }
}

// Generate file updates from sections
async function generateFileUpdates(sections: PageSection[]): Promise<Array<{ path: string; content: string }>> {
  // This is a simplified implementation
  // In a real-world scenario, you would transform section data into component updates
  
  // Store the content JSON for reference
  const contentJson = {
    lastUpdated: new Date().toISOString(),
    sections
  };
  
  return [
    {
      path: 'docs/content/site-content.json',
      content: JSON.stringify(contentJson, null, 2)
    }
  ];
}

// Upload an image to GitHub repository
export async function uploadImageToGitHub(
  file: File,
  token: string
): Promise<string> {
  try {
    // Convert file to base64
    const base64Content = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Extract the base64 part if it's a data URL
        const base64 = result.includes('base64,') 
          ? result.split('base64,')[1] 
          : result;
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    
    // Generate a unique filename
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueFilename = `uploads/${timestamp}-${safeName}`;
    
    // Create/update the file in GitHub
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${uniqueFilename}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Upload image: ${safeName}`,
          content: base64Content,
          branch: 'main'
        })
      }
    ).then(res => res.json());
    
    // Return the URL to the uploaded file
    return response.content.download_url || '';
  } catch (error) {
    console.error('Error uploading image to GitHub:', error);
    throw new Error('Failed to upload image');
  }
}