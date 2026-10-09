'use client';

import { useState } from 'react';

export default function Home() {
  const [topic, setTopic] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const analyzeTopic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim().length < 3) {
      setError('Enter a valid topic to search.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Server error. Check your .env setup or logs.');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      
      {/* Minimalist Top Navigation */}
      <header className="border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[var(--foreground)] flex items-center justify-center font-bold text-[var(--background)] text-xs">
              C.
            </div>
            <h1 className="text-sm font-semibold tracking-wide text-[var(--foreground)]">
              Consenso
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 text-xs tracking-wider uppercase text-[var(--muted-foreground)]">
            <a href="#" className="text-[var(--foreground)]">Overview</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">History</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Settings</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Sober Search Bar */}
        <div className="max-w-xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-[var(--foreground)]">
            Analyze the <span className="font-semibold text-[var(--muted-foreground)]">narrative.</span>
          </h2>
          
          <form onSubmit={analyzeTopic} className="relative group">
            <div className="flex items-center bg-[var(--muted)] border border-[var(--border)] rounded-lg overflow-hidden focus-within:border-[var(--foreground)] transition-colors duration-300">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="flex-1 bg-transparent border-none px-6 py-4 text-base focus:outline-none focus:ring-0 text-[var(--foreground)] placeholder-[var(--muted-foreground)] font-light"
                placeholder="Enter a geopolitical topic, event, or entity..."
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[var(--foreground)] text-[var(--background)] text-sm font-medium px-6 py-4 hover:bg-[var(--accent)] disabled:opacity-50 transition-colors"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--background)] rounded-full animate-ping"></span>
                    Running
                  </span>
                ) : 'Search'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-4 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}
        </div>

        {/* Minimalist Dashboard */}
        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-[var(--border)] pb-6">
              <div>
                <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-widest mb-2">Topic Analysis</p>
                <h2 className="text-3xl font-semibold text-[var(--foreground)] capitalize tracking-tight">{result.data.topic}</h2>
              </div>
              <button className="mt-4 md:mt-0 border border-[var(--border)] px-4 py-2 rounded text-xs text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors flex items-center gap-2 font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                Save Snapshot
              </button>
            </div>

            {/* High-end metrics grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              
              {/* Neutrality Index */}
              <div className="bg-[var(--card)] border border-[var(--border)] p-8 flex flex-col justify-between">
                <h3 className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-8">Neutrality Index</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-light tracking-tighter">{result.data.neutralityScore}</span>
                  <span className="text-[var(--muted-foreground)]">/ 100</span>
                </div>
                <div className="w-full bg-[var(--muted)] h-1 mt-6 rounded-full overflow-hidden">
                  <div 
                    className="bg-[var(--foreground)] h-full transition-all duration-1000 ease-out"
                    style={{ width: `${result.data.neutralityScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Political Leaning */}
              <div className="bg-[var(--card)] border border-[var(--border)] p-8 flex flex-col justify-between">
                <h3 className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-8">Political Leaning</h3>
                <div className="text-3xl font-medium tracking-tight">
                  {result.data.resultsJson.politicalLeaning || 'Center'}
                </div>
                <p className="text-sm text-[var(--muted-foreground)] mt-6">
                  Calculated based on adjective density and framing.
                </p>
              </div>

              {/* Key Mentions / Entities */}
              <div className="bg-[var(--card)] border border-[var(--border)] p-8 flex flex-col">
                <h3 className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-6">Key Entities</h3>
                <div className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
                  {Object.entries(result.data.resultsJson.keyMentions || {})
                    .sort(([, a]: any, [, b]: any) => b - a)
                    .slice(0, 4)
                    .map(([word, count]: [string, any], i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-2">
                      <span className="font-medium text-[var(--foreground)]">{word}</span>
                      <span className="text-[var(--muted-foreground)] font-mono text-xs">{count} mentions</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Articles Grid */}
            <div className="pt-12">
              <h3 className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-6">Source Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {result.texts?.map((text: string, idx: number) => {
                  const url = result.data.urls[idx];
                  const domain = url ? url.replace(/^https?:\/\//, '').split('/')[0].replace('www.', '') : `Source ${idx + 1}`;
                  const biases = result.data.resultsJson.bias?.[url] || [];
                  const imageUrl = result.images?.[idx];

                  return (
                    <article key={idx} className="group flex flex-col border border-[var(--border)] bg-[var(--card)] overflow-hidden">
                      {/* Subdued Image */}
                      {imageUrl && (
                        <div className="h-48 w-full relative overflow-hidden border-b border-[var(--border)]">
                          <img 
                            src={imageUrl} 
                            alt="" 
                            className="w-full h-full object-cover filter grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
                          />
                        </div>
                      )}
                      
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex justify-between items-center mb-6">
                          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)]">
                            {domain}
                          </div>
                          <a href={url} target="_blank" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          </a>
                        </div>
                        
                        <div className="flex-1">
                          <p className="text-[var(--muted-foreground)] leading-relaxed text-sm line-clamp-4 font-light">
                            {text.substring(0, 600)}...
                          </p>
                        </div>

                        {biases.length > 0 && (
                          <div className="mt-8 pt-6 border-t border-[var(--border)]">
                            <h4 className="text-[10px] font-bold text-[var(--foreground)] uppercase tracking-widest mb-3 opacity-50">Detected Narrative Bias</h4>
                            <div className="flex flex-col gap-2">
                              {biases.map((b: string, i: number) => (
                                <span key={i} className="text-xs text-[var(--muted-foreground)] pl-3 border-l border-[var(--border)]">
                                  {b}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
