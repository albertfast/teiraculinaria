import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Card, Content } from '../src/types';
import { downloadJSON, fetchContent } from '../src/lib/content';

const mkId = () => (crypto && 'randomUUID' in crypto ? crypto.randomUUID() : String(Date.now() + Math.random()));

const blank: Card = {
	id: mkId(),
	section: 'gallery',
	title: '',
	subtitle: '',
	body: '',
	font_family: 'serif',
	font_size: 18,
	font_weight: '500',
	text_color: '#eae6d6',
	text_align: 'left',
	x: 4, y: 8, width_pct: 60,
	image_url: '',
	image_alt: '',
	order_index: 0
};

export default function AdminLocal() {
	const [cards, setCards] = useState<Card[]>([]);
	const [form, setForm] = useState<Card>(blank);
	const fileRef = useRef<HTMLInputElement | null>(null);
	const base = String((import.meta as any).env.BASE_URL || '/');
	const toUrl = (p: string) => (/^https?:\/\//.test(p) ? p : (base + p.replace(/^\//, '')));

	// load from localStorage
	useEffect(() => {
		const raw = localStorage.getItem('cards-local');
		if (raw) {
			try { setCards(JSON.parse(raw)); } catch {}
		}
	}, []);
	// persist to localStorage
	useEffect(() => {
		localStorage.setItem('cards-local', JSON.stringify(cards));
	}, [cards]);

	const add = () => {
		setCards(prev => [{ ...form }, ...prev]);
		setForm({ ...blank, id: mkId(), order_index: (form.order_index ?? 0) + 1 });
	};
	const del = (id: string) => setCards(prev => prev.filter(c => c.id !== id));
	const upd = (id: string, patch: Partial<Card>) => setCards(prev => prev.map(c => (c.id === id ? { ...c, ...patch } : c)));

	const content: Content = useMemo(() => ({ version: 1, cards }), [cards]);
	const download = () => downloadJSON('content.json', content);
		const clearAll = () => { setCards([]); localStorage.removeItem('cards-local'); };

		const importFromFile = async (file?: File | null) => {
			try {
				const f = file ?? fileRef.current?.files?.[0];
				if (!f) return;
				const text = await f.text();
				const parsed = JSON.parse(text) as Content;
				if (parsed && Array.isArray(parsed.cards)) {
					setCards(parsed.cards);
				}
			} catch (e) {
				alert('JSON dosyası okunamadı: ' + (e as Error).message);
			} finally {
				if (fileRef.current) fileRef.current.value = '';
			}
		};

		const loadFromPublic = async () => {
			try {
				const data = await fetchContent();
				setCards(Array.isArray(data.cards) ? data.cards : []);
			} catch (e) {
				alert('public/content.json yüklenemedi. Yapılandırmayı kontrol edin.');
			}
		};

	return (
		<div style={{ padding: 24, maxWidth: 1100, margin: '0 auto', color: '#e2e8f0', fontFamily:'system-ui, sans-serif' }}>
			<h2 style={{marginTop:0}}>Admin (Local, Backendless)</h2>
			<p style={{opacity:.8, lineHeight:1.4}}>Bu sayfa sadece yerel cihazınızda çalışır. Kartları ekleyip <strong>Download content.json</strong> ile dosyayı indirin; sonra projedeki <code>public/content.json</code> dosyasını değiştirip commit/push yapınca canlıya çıkar.</p>

					<div style={{ border: '1px solid #334155', borderRadius: 8, padding: 12, margin: '12px 0', background:'#0f172a' }}>
				<h3 style={{marginTop:0}}>Yeni Kart</h3>
				<div style={{ display:'grid', gap:8, gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))' }}>
					<label>Section <input value={form.section} onChange={e => setForm({ ...form, section: e.target.value })} /></label>
					<label>Title <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></label>
					<label>Subtitle <input value={form.subtitle} onChange={e => setForm({ ...form, subtitle: e.target.value })} /></label>
					<label style={{gridColumn:'1/-1'}}>Body <textarea value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} rows={3} /></label>
					<label>Image URL <input placeholder="uploads/dish.jpg or https://…" value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} /></label>
					<label>Alt <input value={form.image_alt} onChange={e => setForm({ ...form, image_alt: e.target.value })} /></label>
					<label>Order <input type="number" value={form.order_index ?? 0} onChange={e => setForm({ ...form, order_index: Number(e.target.value) })} /></label>
					<label>Font family <input value={form.font_family} onChange={e => setForm({ ...form, font_family: e.target.value })} /></label>
					<label>Font size <input type="number" value={form.font_size ?? 16} onChange={e => setForm({ ...form, font_size: Number(e.target.value) })} /></label>
					<label>Weight <input value={form.font_weight ?? '400'} onChange={e => setForm({ ...form, font_weight: e.target.value })} /></label>
					<label>Color <input type="color" value={form.text_color ?? '#eae6d6'} onChange={e => setForm({ ...form, text_color: e.target.value })} /></label>
					<label>Align
						<select value={form.text_align} onChange={e => setForm({ ...form, text_align: e.target.value as any })}>
							<option>left</option><option>center</option><option>right</option>
						</select>
					</label>
					<label>X% <input type="number" value={form.x ?? 0} onChange={e => setForm({ ...form, x: Number(e.target.value) })} /></label>
					<label>Y% <input type="number" value={form.y ?? 0} onChange={e => setForm({ ...form, y: Number(e.target.value) })} /></label>
					<label>Width% <input type="number" value={form.width_pct ?? 100} onChange={e => setForm({ ...form, width_pct: Number(e.target.value) })} /></label>
				</div>
						<div style={{ marginTop: 10, display:'flex', gap:8, flexWrap:'wrap' }}>
							<button onClick={add}>Add Card</button>
							<button onClick={download}>Download content.json</button>
							<button onClick={loadFromPublic}>Load current public/content.json</button>
							<input ref={fileRef} type="file" accept="application/json" style={{ display:'none' }} onChange={e => importFromFile(e.target.files?.[0] ?? null)} />
							<button onClick={() => fileRef.current?.click()}>Import content.json (file)</button>
							<button onClick={clearAll} style={{ color:'#f87171' }}>Clear all (local)</button>
						</div>
			</div>

			<div style={{ display:'grid', gap:10 }}>
				{cards.map(c => (
					<div key={c.id} style={{ border:'1px solid #1e293b', borderRadius:8, padding:10, background:'#0f172a' }}>
						<div style={{ display:'flex', gap:12, alignItems:'center' }}>
											{c.image_url && <div style={{ width:120, height:80, borderRadius:6, overflow:'hidden', background:'#111' }}>
												<img src={toUrl(c.image_url)} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
							</div>}
							<div style={{ flex:1 }}>
								<strong>{c.title || '(untitled)'}</strong> <small style={{opacity:.65}}>#{c.order_index} • {c.section}</small>
							</div>
							<button onClick={() => del(c.id)} style={{ color:'#f87171' }}>Delete</button>
						</div>
						<div style={{ display:'grid', gap:6, gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', marginTop:8 }}>
							<label>Order <input type="number" defaultValue={c.order_index ?? 0} onBlur={e => upd(c.id, { order_index: Number(e.target.value) })} /></label>
							<label>Font size <input type="number" defaultValue={c.font_size ?? 16} onBlur={e => upd(c.id, { font_size: Number(e.target.value) })} /></label>
							<label>Weight <input defaultValue={c.font_weight ?? '400'} onBlur={e => upd(c.id, { font_weight: e.target.value })} /></label>
							<label>Color <input type="color" defaultValue={c.text_color ?? '#eae6d6'} onBlur={e => upd(c.id, { text_color: e.target.value })} /></label>
							<label>X% <input type="number" defaultValue={c.x ?? 0} onBlur={e => upd(c.id, { x: Number(e.target.value) })} /></label>
							<label>Y% <input type="number" defaultValue={c.y ?? 0} onBlur={e => upd(c.id, { y: Number(e.target.value) })} /></label>
							<label>Width% <input type="number" defaultValue={c.width_pct ?? 100} onBlur={e => upd(c.id, { width_pct: Number(e.target.value) })} /></label>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

