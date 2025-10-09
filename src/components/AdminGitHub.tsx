import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Card, Content } from '../types';
import { downloadJSON, fetchContent } from '../lib/content';
import { fileToBase64, listDir, putFile, deleteFile, type RepoInfo } from '../lib/github';

// === Sections you want to manage ===
const SECTIONS = ['gallery', 'services', 'about']; // add more here

type Creds = RepoInfo & { token: string };
const defaults = { owner: '', repo: '', branch: 'main', token: '' };

function useCreds() {
  const [creds, setCreds] = useState<Creds>(() => {
    const raw = localStorage.getItem('gh-creds');
    return raw ? JSON.parse(raw) : defaults;
  });
  const [remember, setRemember] = useState<boolean>(() => !!localStorage.getItem('gh-creds'));
  useEffect(() => { if (remember) localStorage.setItem('gh-creds', JSON.stringify(creds)); else localStorage.removeItem('gh-creds'); }, [creds, remember]);
  return { creds, setCreds, remember, setRemember };
}

// Simple array move
function move<T>(arr: T[], from: number, to: number): T[] {
  const a = arr.slice();
  const item = a.splice(from, 1)[0];
  a.splice(to, 0, item);
  return a;
}

export default function AdminGitHub() {
  const { creds, setCreds, remember, setRemember } = useCreds();
  const [section, setSection] = useState<string>(SECTIONS[0]);
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [images, setImages] = useState<Array<{name:string, path:string, sha:string, download_url?:string}>>([]);
  const [cards, setCards] = useState<Card[]>([]);

  const folder = `public/uploads/${section}`;
  const base = String((import.meta as any).env.BASE_URL || '/');
  const toUrl = (p: string) => (/^https?:\/\//.test(p) ? p : (base + p.replace(/^\//, '')));

  // Load existing JSON
  useEffect(() => { fetchContent().then(c => setCards(c.cards || [])).catch(()=>setCards([])); }, []);

  // List repo images for selected section
  const loadList = async () => {
    if (!creds.owner || !creds.repo || !creds.token) return;
    try {
      const list = await listDir({ owner: creds.owner, repo: creds.repo, branch: creds.branch }, creds.token, folder);
      setImages(list);
    } catch (e: any) {
      console.error('Failed to load images:', e);
      setImages([]);
    }
  };
  useEffect(() => { loadList(); }, [section, creds.owner, creds.repo, creds.branch, creds.token]);

  // Drag & drop upload
  const handleFileDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const fs = Array.from(e.dataTransfer.files || []).filter((f: File) => 
      f.type.startsWith('image/')
    );
    if (fs.length) setFiles(prev => [...prev, ...fs]);
  };
  const onPick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const fs = Array.from(e.target.files || []).filter((f: File) => 
      f.type.startsWith('image/')
    );
    if (fs.length) setFiles(prev => [...prev, ...fs]);
  };

  const uploadAll = async () => {
    if (!creds.owner || !creds.repo || !creds.token) { alert('Fill owner/repo/token'); return; }
    if (!files.length) return;
    setBusy(true);
    try {
      for (const f of files) {
        const base64 = await fileToBase64(f);
        const safeName = f.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const filename = `${Date.now()}_${safeName}`;
        const path = `${folder}/${filename}`;
        await putFile({ owner: creds.owner, repo: creds.repo, branch: creds.branch }, creds.token, path, base64, `chore: add ${section} image ${safeName}`);

        // Auto-create a card for this upload
        const nextOrder = (cards.filter(c => c.section===section).reduce((m,c)=>Math.max(m, c.order_index ?? 0), 0) || 0) + 1;
        const card: Card = {
          id: crypto.randomUUID(),
          section,
          title: '',
          subtitle: '',
          body: '',
          font_family: 'serif',
          font_size: 18,
          font_weight: '500',
          text_color: '#eae6d6',
          text_align: 'left',
          x: 4, y: 8, width_pct: 60,
          image_url: `uploads/${section}/${filename}`,
          image_alt: safeName,
          order_index: nextOrder
        };
        setCards(prev => [...prev, card]);
      }
      setFiles([]);
      await loadList();
      alert('Uploaded and cards created.');
    } catch (e: any) {
      alert(e.message);
    } finally { setBusy(false); }
  };

  // Bulk create cards for images in folder that don't have cards yet
  const bulkCreateCards = () => {
    const sectionCards = cards.filter(c => c.section === section);
    const existingPaths = new Set(sectionCards.map(c => c.image_url));
    const newOnes = images
      .map(img => `uploads/${section}/${img.name}`)
      .filter(p => !existingPaths.has(p));
    if (!newOnes.length) { alert('No new images to add as cards.'); return; }
    let order = (sectionCards.reduce((m,c)=>Math.max(m, c.order_index ?? 0), 0) || 0);
    const add: Card[] = newOnes.map(p => {
      order += 1;
      return {
        id: crypto.randomUUID(),
        section,
        title: '',
        subtitle: '',
        body: '',
        font_family: 'serif',
        font_size: 18,
        font_weight: '500',
        text_color: '#eae6d6',
        text_align: 'left',
        x: 4, y: 8, width_pct: 60,
        image_url: p,
        image_alt: p.split('/').pop() || '',
        order_index: order
      };
    });
    setCards(prev => [...prev, ...add]);
  };

  // Delete image (and remove any card referencing it)
  const removeImage = async (p: string) => {
    if (!confirm('Delete from repo and unlink cards?')) return;
    setBusy(true);
    try {
      await deleteFile({ owner: creds.owner, repo: creds.repo, branch: creds.branch }, creds.token, p, 'chore: remove image');
      setCards(prev => prev.filter(c => `public/${c.image_url}` !== p)); // p includes 'public/...'
      await loadList();
    } catch (e:any) {
      alert(e.message);
    } finally { setBusy(false); }
  };

  // === Sortable card list (current section) ===
  const sectionCards = useMemo(
    () => cards.filter(c => c.section === section).sort((a,b) => (a.order_index ?? 0) - (b.order_index ?? 0)),
    [cards, section]
  );

  const dragIndex = useRef<number | null>(null);
  const onDragStart = (i: number) => (e: React.DragEvent) => { dragIndex.current = i; };
  const onDragOver: React.DragEventHandler<HTMLDivElement> = (e) => { e.preventDefault(); };
  const onDragLeave: React.DragEventHandler<HTMLDivElement> = (e) => { /* Optional: Add visual feedback */ };
  const handleCardDrop = (i: number) => (e: React.DragEvent) => {
    e.preventDefault();
    const from = dragIndex.current;
    if (from == null || from === i) return;
    const reordered = move(sectionCards, from, i);
    // write back into global cards with new order_index
    const idOrder = reordered.map((c: Card, idx) => ({ id: c.id as string, order: idx+1 }));
    setCards(prev => prev.map(c => {
      const m = idOrder.find(x => x.id === c.id);
      return m ? { ...c, order_index: m.order } : c;
    }));
    dragIndex.current = null;
  };

  const commitJSON = async () => {
    if (!creds.owner || !creds.repo || !creds.token) { alert('Fill owner/repo/token'); return; }
    setBusy(true);
    try {
      const content: Content = { version: 1, cards };
      const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 2))));
      await putFile({ owner: creds.owner, repo: creds.repo, branch: creds.branch }, creds.token, 'public/content.json', base64, 'content: update content.json');
      alert('Committed content.json');
    } catch (e: any) { alert(e.message); } finally { setBusy(false); }
  };

  const downloadLocal = () => downloadJSON('content.json', { version: 1, cards } as Content);

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto', color: '#e2e8f0', fontFamily:'system-ui, sans-serif' }}>
      <h2 style={{marginTop:0}}>Admin – GitHub (Upload + Auto Cards + DnD)</h2>

      {/* Creds */}
      <div style={{ display:'grid', gap:8, gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', marginBottom:12 }}>
        <label>Owner <input value={creds.owner} onChange={e=>setCreds({...creds, owner:e.target.value})} /></label>
        <label>Repo <input value={creds.repo} onChange={e=>setCreds({...creds, repo:e.target.value})} /></label>
        <label>Branch <input value={creds.branch ?? 'main'} onChange={e=>setCreds({...creds, branch:e.target.value})} /></label>
        <label>Token <input type="password" value={creds.token} onChange={e=>setCreds({...creds, token:e.target.value})} placeholder="fine‑grained PAT (contents:rw)" /></label>
        <label style={{display:'flex',alignItems:'center',gap:8}}>
          <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} />
          Remember in localStorage
        </label>
      </div>

      {/* Section selector */}
      <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:8 }}>
        <strong>Section:</strong>
        <select value={section} onChange={e=>setSection(e.target.value)}>
          {SECTIONS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <em style={{opacity:.7, marginLeft:8}}>Folder: public/uploads/{section}</em>
        <button onClick={bulkCreateCards} style={{marginLeft:8}}>Create cards for all images</button>
      </div>

      {/* Upload area */}
      <div onDragOver={e=>e.preventDefault()} onDrop={handleFileDrop} style={{ border:'2px dashed #555', borderRadius:8, padding:16, textAlign:'center', marginBottom:8 }}>
        <p>Drag &amp; drop images here</p>
        <div style={{marginTop:8}}><input type="file" accept="image/*" multiple onChange={onPick} /></div>
      </div>
      {files.length>0 && (
        <div style={{margin:'8px 0'}}>
          <strong>To upload:</strong> {files.map(f=>f.name).join(', ')}
          <div><button disabled={busy} onClick={uploadAll}>{busy?'Uploading…':'Upload to GitHub'}</button></div>
        </div>
      )}

      {/* Images list in repo */}
      <h3 style={{marginTop:16}}>Images in public/uploads/{section}</h3>
      <div style={{ display:'grid', gap:10, gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))' }}>
        {images.map(img => (
          <div key={img.sha} style={{border:'1px solid #333', borderRadius:8, padding:8}}>
            <div style={{height:110, background:'#111', borderRadius:6, overflow:'hidden', marginBottom:6}}>
              <img src={img.download_url || ''} style={{width:'100%', height:'100%', objectFit:'cover'}} alt={img.name} />
            </div>
            <div style={{fontSize:12, wordBreak:'break-all'}}>{img.name}</div>
            <button style={{marginTop:6, color:'#f55'}} disabled={busy} onClick={()=>removeImage(img.path)}>Delete</button>
          </div>
        ))}
      </div>

      <hr style={{margin:'20px 0', opacity:.3}} />

      {/* Sortable cards for this section */}
      <h3>Cards in "{section}" (drag rows to reorder)</h3>
      <div style={{ display:'grid', gap:8 }}>
        {sectionCards.map((c, i) => (
          <div key={c.id}
               draggable
               onDragStart={onDragStart(i)}
               onDragOver={onDragOver}
               onDrop={handleCardDrop(i)}
               style={{ border:'1px solid #333', borderRadius:8, padding:10, background:'#0f1117' }}>
            <div style={{ display:'grid', gridTemplateColumns:'60px 1fr 140px', gap:10, alignItems:'center' }}>
              <div style={{height:50, background:'#111', borderRadius:6, overflow:'hidden'}}>
                {c.image_url && <img src={toUrl(c.image_url)} style={{width:'100%', height:'100%', objectFit:'cover'}} alt={c.image_alt || ''} />}
              </div>
              <div>
                <input placeholder="Title" defaultValue={c.title || ''} onBlur={e=>{ const v=e.target.value; setCards(prev=>prev.map(x=>x.id===c.id?{...x,title:v}:x)); }} />
                <input placeholder="Subtitle" defaultValue={c.subtitle || ''} onBlur={e=>{ const v=e.target.value; setCards(prev=>prev.map(x=>x.id===c.id?{...x,subtitle:v}:x)); }} />
              </div>
              <div style={{ display:'flex', gap:6, justifyContent:'flex-end' }}>
                <span style={{opacity:.6, alignSelf:'center'}}>#{c.order_index}</span>
                <button style={{ color:'#f55' }} onClick={()=>setCards(prev=>prev.filter(x=>x.id!==c.id))}>Remove card</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:14}}>
        <button onClick={downloadLocal}>Download content.json</button>
        <button disabled={busy} onClick={commitJSON}>{busy?'Committing…':'Commit content.json to GitHub'}</button>
      </div>
    </div>
  );
}