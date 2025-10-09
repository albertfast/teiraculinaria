import React, { useState } from 'react';
import type { RepoInfo } from '../src/lib/github';
import { putFile } from '../src/lib/github';

// Default credentials
const defaults = { owner: '', repo: '', branch: 'main', token: '' };

interface AdminGitHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (result: { success: boolean; message: string }) => void;
  content: string; // JSON content to be published
}

export default function AdminGitHubModal({ isOpen, onClose, onPublish, content }: AdminGitHubModalProps) {
  const [creds, setCreds] = useState<RepoInfo & { token: string }>(() => {
    const raw = localStorage.getItem('gh-creds');
    return raw ? JSON.parse(raw) : defaults;
  });
  const [remember, setRemember] = useState<boolean>(() => !!localStorage.getItem('gh-creds'));
  const [publishing, setPublishing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!creds.owner || !creds.repo || !creds.token) {
      onPublish({ success: false, message: 'Please fill in all GitHub credentials' });
      return;
    }
    
    // Save credentials if remember is checked
    if (remember) {
      localStorage.setItem('gh-creds', JSON.stringify(creds));
    } else {
      localStorage.removeItem('gh-creds');
    }
    
    setPublishing(true);
    try {
      // Convert content to base64
      const base64 = btoa(unescape(encodeURIComponent(content)));
      
      // Publish to GitHub
      await putFile(
        { owner: creds.owner, repo: creds.repo, branch: creds.branch }, 
        creds.token, 
        'public/content.json', 
        base64, 
        'content: update content.json'
      );
      
      onPublish({ success: true, message: 'Successfully published to GitHub' });
      onClose();
    } catch (error: any) {
      onPublish({ success: false, message: `GitHub API Error: ${error.message}` });
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg shadow-lg max-w-lg w-full p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Publish to GitHub</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <label className="block">
              <span className="text-white">Repository Owner</span>
              <input 
                type="text" 
                className="w-full mt-1 p-2 rounded bg-slate-700 text-white border border-slate-600"
                value={creds.owner}
                onChange={e => setCreds({...creds, owner: e.target.value})}
                required
              />
            </label>
            
            <label className="block">
              <span className="text-white">Repository Name</span>
              <input 
                type="text" 
                className="w-full mt-1 p-2 rounded bg-slate-700 text-white border border-slate-600"
                value={creds.repo}
                onChange={e => setCreds({...creds, repo: e.target.value})}
                required
              />
            </label>
            
            <label className="block">
              <span className="text-white">Branch</span>
              <input 
                type="text" 
                className="w-full mt-1 p-2 rounded bg-slate-700 text-white border border-slate-600"
                value={creds.branch}
                onChange={e => setCreds({...creds, branch: e.target.value})}
                required
              />
            </label>
            
            <label className="block">
              <span className="text-white">GitHub Token (with write access)</span>
              <input 
                type="password" 
                className="w-full mt-1 p-2 rounded bg-slate-700 text-white border border-slate-600"
                value={creds.token}
                onChange={e => setCreds({...creds, token: e.target.value})}
                placeholder="Fine-grained PAT with 'contents:write' permission"
                required
              />
            </label>
            
            <label className="flex items-center gap-2">
              <input 
                type="checkbox"
                className="rounded"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
              />
              <span className="text-white">Remember credentials</span>
            </label>
          </div>
          
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600"
              disabled={publishing}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              disabled={publishing}
            >
              {publishing ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}