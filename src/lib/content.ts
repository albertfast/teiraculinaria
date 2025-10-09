import type { Content } from '../types';

export async function fetchContent(): Promise<Content> {
  const url = new URL('content.json', (import.meta as any).env.BASE_URL || '/').toString();
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('content.json not found');
  return (await res.json()) as Content;
}

export function downloadJSON(filename: string, obj: unknown) {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(obj, null, 2));
  const a = document.createElement('a');
  a.href = dataStr;
  a.download = filename;
  a.click();
}
