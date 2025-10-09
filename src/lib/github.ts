export type RepoInfo = { owner: string; repo: string; branch?: string };
export type CommitResult = { content?: { path: string; sha: string; download_url?: string }; commit?: { sha: string; message: string } };
const API = 'https://api.github.com';

async function gh<T>(path: string, method: string, token: string, body?: any): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }
  return (await res.json()) as T;
}

export async function getFileSHA(repo: RepoInfo, token: string, path: string): Promise<string | null> {
  try {
    const data: any = await gh(`/repos/${repo.owner}/${repo.repo}/contents/${encodeURIComponent(path)}?ref=${repo.branch ?? 'main'}`, 'GET', token);
    return data.sha || null;
  } catch (e: any) {
    if (String(e.message).startsWith('404')) return null;
    throw e;
  }
}

export async function listDir(repo: RepoInfo, token: string, dir: string): Promise<Array<{name:string, path:string, sha:string, download_url?:string}>> {
  try {
    const data: any[] = await gh(`/repos/${repo.owner}/${repo.repo}/contents/${encodeURIComponent(dir)}?ref=${repo.branch ?? 'main'}`, 'GET', token);
    return data.filter(x => x.type === 'file').map(x => ({ name: x.name, path: x.path, sha: x.sha, download_url: x.download_url }));
  } catch (e: any) {
    if (String(e.message).startsWith('404')) return [];
    throw e;
  }
}

export async function putFile(repo: RepoInfo, token: string, path: string, base64: string, message: string): Promise<CommitResult> {
  const sha = await getFileSHA(repo, token, path);
  const body: any = { message, content: base64, branch: repo.branch ?? 'main' };
  if (sha) body.sha = sha;
  return await gh<CommitResult>(`/repos/${repo.owner}/${repo.repo}/contents/${encodeURIComponent(path)}`, 'PUT', token, body);
}

export async function deleteFile(repo: RepoInfo, token: string, path: string, message: string): Promise<any> {
  const sha = await getFileSHA(repo, token, path);
  if (!sha) throw new Error('File not found');
  return await gh(`/repos/${repo.owner}/${repo.repo}/contents/${encodeURIComponent(path)}`, 'DELETE', token, { message, sha, branch: repo.branch ?? 'main' });
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
      const s = String(r.result);
      const base64 = s.includes(',') ? s.split(',')[1] : s;
      resolve(base64);
    };
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}