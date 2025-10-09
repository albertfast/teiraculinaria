// Helper to prepend Vite base (GitHub Pages subpath) to a relative asset path
export function withBase(p: string): string {
  const clean = (p || '').replace(/^[\/]/, '');
  const base = (import.meta as any).env.BASE_URL || '/';
  return new URL(clean, base).toString();
}
