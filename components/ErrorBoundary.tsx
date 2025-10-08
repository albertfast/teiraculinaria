import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: any };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    // Optionally report
    console.error('App crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-slate-900/80 ring-1 ring-white/10 rounded-2xl p-6">
            <h1 className="text-xl font-semibold text-white">Something went wrong</h1>
            <p className="mt-2 text-slate-300">The page failed to render. Please refresh the page. If the problem persists, share the error below with the maintainer.</p>
            {this.state.error && (
              <pre className="mt-3 text-xs bg-black/40 p-3 rounded overflow-auto">
                {String(this.state.error)}
              </pre>
            )}
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
