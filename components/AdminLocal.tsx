import React, { useEffect, useState, useRef } from 'react';
import AdminGitHubModal from './AdminGitHubModal';

// Generate unique IDs
const generateId = () => crypto?.randomUUID?.() || `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Type definitions
interface SectionImage {
  id: string;
  src: string;
  alt: string;
  order?: number;
}

interface SectionContent {
  title?: string;
  subtitle?: string;
  body?: string[];
  images?: SectionImage[];
  settings?: Record<string, any>;
}

interface PageSection {
  id: string;
  pageName: string;
  sectionName: string;
  displayName: string;
  component: string;
  editable: boolean;
  contentType: 'text' | 'image' | 'gallery' | 'mixed';
  content: SectionContent;
}

// Mock data and service functions
async function getSiteStructure(): Promise<PageSection[]> {
  // This would typically fetch from an API or backend
  return [
    {
      id: 'home-hero',
      pageName: 'home',
      sectionName: 'hero',
      displayName: 'Hero Section',
      component: 'Hero',
      editable: true,
      contentType: 'mixed',
      content: {
        title: 'Deniz Sezer — Michelin-Trained Chef',
        subtitle: 'Intimate, multi-course private dining and bespoke culinary experiences.',
        body: [
          'Chef Deniz blends Anatolian roots with haute cuisine techniques to craft memorable evenings for exclusive guests.'
        ],
        images: [
          {
            id: 'hero-bg',
            src: './imggallery/146036331_2570005219790657_2835741437971567938_n.jpg',
            alt: 'Chef background'
          }
        ]
      }
    },
    {
      id: 'home-gallery',
      pageName: 'home',
      sectionName: 'gallery',
      displayName: 'Gallery Section',
      component: 'ImageGallery',
      editable: true,
      contentType: 'gallery',
      content: {
        title: 'Gallery',
        subtitle: 'A curated selection of moments from private dinners, pop-ups and exclusive events.',
        images: [
          { id: 'gal-1', src: './imggallery/denizsezeridea.jpeg', alt: 'Gallery 1' },
          { id: 'gal-2', src: './imggallery/316119619_6422508417765998_6768193420321574199_n.jpg', alt: 'Gallery 2' },
          { id: 'gal-3', src: './imggallery/324544066_152195107605724_1918904625421334616_n.jpg', alt: 'Gallery 3' },
          { id: 'gal-4', src: './imggallery/340490753_536729521725498_7803232779063458043_n.jpg', alt: 'Gallery 4' }
        ]
      }
    }
  ];
}

async function saveContent(sections: PageSection[]): Promise<boolean> {
  localStorage.setItem('site-content', JSON.stringify(sections));
  return true;
}

async function publishToGitHub(): Promise<boolean> {
  // This is a placeholder that will be overridden by the actual implementation
  // in the AdminLocal component using the AdminGitHubModal
  return true;
}

async function uploadImage(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

export default function AdminLocal() {
  // Admin state
  const [sections, setSections] = useState<PageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSection, setCurrentSection] = useState('');
  const [editingSection, setEditingSection] = useState<PageSection | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);
  const [publishResult, setPublishResult] = useState<{ success: boolean; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const base = String((import.meta as any).env.BASE_URL || '/');

  // Pages structure derived from sections
  const pages = React.useMemo(() => {
    const uniquePages = Array.from(new Set(sections.map(s => s.pageName)));
    return uniquePages.map(name => ({
      name,
      displayName: typeof name === 'string' ? name.charAt(0).toUpperCase() + name.slice(1) : name,
      sections: sections.filter(s => s.pageName === name)
    }));
  }, [sections]);

  // Load initial site structure
  useEffect(() => {
    const loadSiteStructure = async () => {
      setLoading(true);
      try {
        // First check localStorage for any saved changes
        const savedContent = localStorage.getItem('site-content');
        if (savedContent) {
          const parsedContent = JSON.parse(savedContent);
          setSections(parsedContent);
          setHasUnsavedChanges(true);
        } else {
          // Otherwise load default structure
          const structure = await getSiteStructure();
          setSections(structure);
        }
        
        // Set default current section if none selected
        if (!currentSection && sections.length > 0) {
          setCurrentSection(sections[0].id);
        }
      } catch (error) {
        console.error('Error loading site structure:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadSiteStructure();
  }, []);
  
  // Helper to get the full path to an image
  const getImagePath = (path: string) => {
    if (!path) return '';
    if (path.startsWith('data:')) return path; // Data URLs
    return path.startsWith('http') ? path : (base + path.replace(/^\.\//, ''));
  };

  // Handlers
  const handleSaveChanges = async () => {
    setSaving(true);
    try {
      await saveContent(sections);
      setHasUnsavedChanges(false);
      alert('Changes saved successfully to local storage');
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Error saving changes');
    } finally {
      setSaving(false);
    }
  };

  const handlePublishToGitHub = async () => {
    if (hasUnsavedChanges) {
      const confirmSave = window.confirm('You have unsaved changes. Save before publishing?');
      if (confirmSave) {
        await handleSaveChanges();
      }
    }
    
    // Open GitHub publish modal
    setIsGitHubModalOpen(true);
  };
  
  const handleGitHubPublishResult = (result: { success: boolean; message: string }) => {
    setPublishResult(result);
    
    if (result.success) {
      // Show success message
      alert('Changes published successfully to GitHub');
    } else {
      // Show error message
      alert(`Error: ${result.message}`);
    }
    
    // Clear the result after 5 seconds
    setTimeout(() => setPublishResult(null), 5000);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, sectionId: string, imageId?: string) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    try {
      const imageUrl = await uploadImage(file);
      
      setSections(prev => prev.map(section => {
        if (section.id !== sectionId) return section;
        
        const updatedContent = { ...section.content };
        
        if (!updatedContent.images) {
          updatedContent.images = [];
        }
        
        if (imageId) {
          // Update existing image
          updatedContent.images = updatedContent.images.map(img => 
            img.id === imageId ? { ...img, src: imageUrl } : img
          );
        } else {
          // Add new image
          const newImage: SectionImage = {
            id: generateId(),
            src: imageUrl,
            alt: file.name.replace(/\.[^/.]+$/, "") || 'Uploaded image',
            order: updatedContent.images.length
          };
          updatedContent.images.push(newImage);
        }
        
        return { ...section, content: updatedContent };
      }));
      
      setHasUnsavedChanges(true);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
  };

  const handleDeleteImage = (sectionId: string, imageId: string) => {
    setSections(prev => prev.map(section => {
      if (section.id !== sectionId) return section;
      
      const updatedContent = { ...section.content };
      
      if (updatedContent.images) {
        updatedContent.images = updatedContent.images.filter(img => img.id !== imageId);
      }
      
      return { ...section, content: updatedContent };
    }));
    
    setHasUnsavedChanges(true);
  };

  const handleUpdateText = (sectionId: string, field: keyof SectionContent, value: string | string[], index?: number) => {
    setSections(prev => prev.map(section => {
      if (section.id !== sectionId) return section;
      
      const updatedContent = { ...section.content };
      
      if (field === 'body' && Array.isArray(updatedContent.body) && typeof index === 'number') {
        // Update specific paragraph in body array
        const newBody = [...updatedContent.body];
        newBody[index] = value as string;
        updatedContent.body = newBody;
      } else if (field === 'body' && !Array.isArray(updatedContent.body)) {
        // Create body array if it doesn't exist
        updatedContent.body = [value as string];
      } else if (field === 'title' || field === 'subtitle') {
        // Update title or subtitle
        updatedContent[field] = value as string;
      }
      
      return { ...section, content: updatedContent };
    }));
    
    setHasUnsavedChanges(true);
  };

  // Render section editor
  const renderSectionEditor = (section: PageSection) => {
    const content = section.content;
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Editing: {section.displayName}</h3>
        
        {/* Title/Subtitle fields */}
        <div className="mb-6">
          <label className="block mb-2">
            <span className="font-medium">Title</span>
            <input 
              type="text" 
              value={content.title || ''} 
              onChange={e => handleUpdateText(section.id, 'title', e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </label>
          
          <label className="block mb-2">
            <span className="font-medium">Subtitle</span>
            <input 
              type="text" 
              value={content.subtitle || ''} 
              onChange={e => handleUpdateText(section.id, 'subtitle', e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </label>
        </div>
        
        {/* Body text fields */}
        {Array.isArray(content.body) && (
          <div className="mb-6">
            <h4 className="font-medium mb-2">Body Text</h4>
            {content.body.map((paragraph, idx) => (
              <div key={idx} className="mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-500">Paragraph {idx + 1}</span>
                </div>
                <textarea
                  value={paragraph}
                  onChange={e => handleUpdateText(section.id, 'body', e.target.value, idx)}
                  className="w-full p-2 border rounded h-32"
                />
              </div>
            ))}
            <button 
              className="text-sm bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => handleUpdateText(section.id, 'body', '', (content.body as string[]).length)}
            >
              Add Paragraph
            </button>
          </div>
        )}
        
        {/* Images section */}
        {section.contentType === 'image' || section.contentType === 'gallery' || section.contentType === 'mixed' ? (
          <div className="mb-6">
            <h4 className="font-medium mb-2">Images</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.images?.map(image => (
                <div key={image.id} className="border rounded p-2">
                  <img 
                    src={getImagePath(image.src)} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover mb-2" 
                  />
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={image.alt || ''}
                      onChange={e => {
                        setSections(prev => prev.map(s => {
                          if (s.id !== section.id) return s;
                          return {
                            ...s,
                            content: {
                              ...s.content,
                              images: s.content.images?.map(img => 
                                img.id === image.id ? {...img, alt: e.target.value} : img
                              )
                            }
                          };
                        }));
                        setHasUnsavedChanges(true);
                      }}
                      placeholder="Alt text"
                      className="w-full p-1 border rounded text-sm"
                    />
                    <div className="flex justify-between">
                      <label className="bg-blue-500 text-white text-sm px-2 py-1 rounded cursor-pointer">
                        Replace
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={e => handleImageUpload(e, section.id, image.id)}
                        />
                      </label>
                      <button 
                        className="bg-red-500 text-white text-sm px-2 py-1 rounded"
                        onClick={() => handleDeleteImage(section.id, image.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add new image button */}
              <div className="border rounded p-2 flex items-center justify-center">
                <label className="flex flex-col items-center justify-center gap-2 cursor-pointer w-full h-full">
                  <span className="text-3xl">+</span>
                  <span>Add Image</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={e => handleImageUpload(e, section.id)}
                  />
                </label>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  // Main render
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Site Content Admin</h1>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`px-4 py-2 rounded-lg font-medium ${
                previewMode ? 'bg-slate-700 text-white' : 'bg-slate-200'
              }`}
            >
              {previewMode ? 'Exit Preview' : 'Preview'}
            </button>
            
            <button
              onClick={handleSaveChanges}
              disabled={!hasUnsavedChanges || saving}
              className={`px-4 py-2 rounded-lg font-medium ${
                !hasUnsavedChanges || saving
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            
            <button
              onClick={handlePublishToGitHub}
              disabled={publishing}
              className={`px-4 py-2 rounded-lg font-medium ${
                publishing
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {publishing ? 'Publishing...' : 'Publish to GitHub'}
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">Loading site content...</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {/* Left sidebar - page navigation */}
            <div className="bg-white rounded-lg shadow-lg p-4 h-fit">
              <h2 className="font-bold text-lg mb-4 text-slate-700">Pages</h2>
              <ul className="space-y-1">
                {pages.map(page => (
                  <li key={page.name}>
                    <button
                      onClick={() => {
                        setCurrentPage(page.name);
                        setCurrentSection('');
                        setEditingSection(null);
                      }}
                      className={`w-full text-left px-3 py-2 rounded ${
                        currentPage === page.name
                          ? 'bg-blue-100 text-blue-800'
                          : 'hover:bg-slate-100'
                      }`}
                    >
                      {page.displayName}
                    </button>
                    
                    {currentPage === page.name && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {page.sections.map(section => (
                          <li key={section.id}>
                            <button
                              onClick={() => {
                                setCurrentSection(section.id);
                                setEditingSection(section);
                              }}
                              className={`w-full text-left px-3 py-1 rounded text-sm ${
                                currentSection === section.id
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'hover:bg-slate-100'
                              }`}
                            >
                              {section.displayName}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Main content area */}
            <div className="col-span-3">
              {previewMode ? (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Preview Mode</h2>
                  <div className="bg-slate-800 text-white p-4 rounded">
                    <p>Preview mode would show a rendered version of your website here.</p>
                    <p className="text-slate-400 mt-2">
                      In a full implementation, this would render the actual components with the updated content.
                    </p>
                  </div>
                </div>
              ) : editingSection ? (
                renderSectionEditor(editingSection)
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Site Content Management</h2>
                  <p className="text-slate-600">
                    Select a page and section from the sidebar to edit content.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        
        <input 
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
        />
        
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>Changes are stored in browser localStorage until published.</p>
          <p>Publishing will commit changes to the GitHub repository and trigger a site update.</p>
        </div>
      </div>
      
      {/* GitHub Publish Modal */}
      <AdminGitHubModal 
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
        onPublish={handleGitHubPublishResult}
        content={JSON.stringify({ version: 1, sections: sections })}
      />
      
      {/* Publish Result Toast */}
      {publishResult && (
        <div 
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white ${
            publishResult.success ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {publishResult.message}
        </div>
      )}
    </main>
  );
}
