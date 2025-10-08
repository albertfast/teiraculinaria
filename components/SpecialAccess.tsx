import React, { useEffect, useState } from 'react';

const SpecialAccess: React.FC = () => {
  const [password, setPassword] = useState('');
  const [granted, setGranted] = useState(false);
  const [error, setError] = useState('');

  const check = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === 'deniz123') {
      setGranted(true);
      setError('');
    } else {
      setError('Access denied');
      setGranted(false);
    }
  };

  // Simple content editor state for friend-only page
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState<string[]>([]); // data URLs for preview/export

  useEffect(() => {
    if (!granted) return;
    const draft = localStorage.getItem('specialAccessDraft');
    if (draft) {
      try {
        const data = JSON.parse(draft);
        setTitle(data.title || '');
        setSubtitle(data.subtitle || '');
        setBody(data.body || '');
        setImages(Array.isArray(data.images) ? data.images : []);
      } catch {}
    }
  }, [granted]);

  const onPickImages = async (files: FileList | null) => {
    if (!files) return;
    const next: string[] = [];
    for (const file of Array.from(files)) {
      const dataUrl = await fileToDataUrl(file);
      next.push(dataUrl);
    }
    setImages((prev) => [...prev, ...next]);
  };

  const fileToDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const saveDraft = () => {
    const payload = { title, subtitle, body, images };
    localStorage.setItem('specialAccessDraft', JSON.stringify(payload));
  };

  const clearDraft = () => {
    localStorage.removeItem('specialAccessDraft');
    setTitle('');
    setSubtitle('');
    setBody('');
    setImages([]);
  };

  const exportJson = () => {
    const data = { title, subtitle, body, images, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'special-access-content.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = async (file: File | null) => {
    if (!file) return;
    const text = await file.text();
    try {
      const data = JSON.parse(text);
      setTitle(data.title || '');
      setSubtitle(data.subtitle || '');
      setBody(data.body || '');
      setImages(Array.isArray(data.images) ? data.images : []);
    } catch {
      setError('Invalid JSON file');
    }
  };

  if (granted) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
        <div className="mx-auto w-full max-w-4xl bg-slate-900/80 ring-1 ring-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-serif mb-1 text-white">Special Access</h1>
          <p className="text-slate-300 mb-6">Write your content and add images. You can save as draft (this browser) and export JSON to share.</p>

          <div className="grid gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Subtitle</label>
              <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Body</label>
              <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={8} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Write here..." />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Images</label>
              <input type="file" accept="image/*" multiple onChange={(e) => onPickImages(e.target.files)} className="block w-full text-sm file:mr-4 file:rounded file:border-0 file:bg-amber-600 file:px-4 file:py-2 file:text-white hover:file:bg-amber-500" />
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {images.map((src, i) => (
                    <div key={i} className="relative">
                      <img src={src} alt={`uploaded-${i}`} className="w-full h-36 object-cover rounded-lg border border-slate-700" />
                      <button type="button" onClick={() => setImages(images.filter((_, j) => j !== i))} className="absolute top-1 right-1 bg-black/60 text-white rounded px-2 py-0.5 text-xs">✕</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button type="button" onClick={saveDraft} className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg">Save draft</button>
              <button type="button" onClick={exportJson} className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg">Export JSON</button>
              <label className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-600 text-white px-4 py-2 rounded-lg cursor-pointer">
                <span>Import JSON</span>
                <input type="file" accept="application/json" className="hidden" onChange={(e) => importJson(e.target.files?.[0] ?? null)} />
              </label>
              <button type="button" onClick={clearDraft} className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg">Clear</button>
            </div>

            <div className="mt-6 rounded-lg border border-white/10 p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">How to share</p>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Click “Export JSON” and send the file to the site owner.</li>
                <li>Images are embedded as data URLs for convenience; the owner can import them into the site gallery.</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <form onSubmit={check} className="w-full max-w-md bg-slate-900/80 ring-1 ring-white/10 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-serif text-white mb-4">Friend Access</h1>
        <label htmlFor="pwd" className="block text-sm text-slate-300 mb-2">Enter password</label>
        <input
          id="pwd"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="••••••••"
        />
        {error && <div className="mt-3 text-sm text-red-400">{error}</div>}
        <button type="submit" className="mt-6 w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold py-2.5 rounded-lg">Unlock</button>
      </form>
    </main>
  );
};

export default SpecialAccess;
