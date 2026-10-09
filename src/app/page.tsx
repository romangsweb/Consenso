'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !url.startsWith('http')) return;
    
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (!res.ok) {
        const errorMsg = data.details ? `${data.error} Detalle: ${data.details}` : data.error;
        throw new Error(errorMsg || 'Server error. Check your .env setup or logs.');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 sm:p-8 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-5xl mb-12 border-b-4 border-[var(--border)] pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl sm:text-6xl tracking-tighter mb-2">AEO_ARCHITECT<span className="text-[var(--primary)]">.</span></h1>
          <p className="font-mono text-sm uppercase tracking-widest text-[var(--muted-foreground)]">Answer Engine Optimization Module v1.0</p>
        </div>
        <div className="hidden sm:block">
          <div className="lcd-text text-xs">STATUS: {loading ? 'PROCESSING' : 'READY'}</div>
        </div>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Control Panel */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 te-border te-shadow">
            <h2 className="text-xl mb-4 border-b-2 border-black pb-2">INPUT_URL</h2>
            <form onSubmit={handleAnalyze} className="flex flex-col gap-4">
              <input
                type="url"
                placeholder="https://competitor.com/article"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="te-input p-3 w-full"
                required
              />
              <button 
                type="submit" 
                disabled={loading}
                className={`te-button p-3 w-full ${loading ? 'opacity-50 cursor-wait' : ''}`}
              >
                {loading ? 'ANALYZING...' : 'EXTRACT & AUDIT'}
              </button>
            </form>
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-900 border-2 border-red-900 font-mono text-sm">
                [ERR] {error}
              </div>
            )}
          </div>

          <div className="bg-[var(--muted)] p-6 te-border te-shadow text-sm">
            <h3 className="mb-2">SYSTEM_LOGS</h3>
            <div className="font-mono text-[var(--muted-foreground)] leading-relaxed">
              <p>{'>'} AWAITING TARGET URL</p>
              {loading && <p className="text-[var(--primary)] animate-pulse">{'>'} SCRAPING HTML DOM...</p>}
              {loading && <p className="text-[var(--primary)] animate-pulse">{'>'} INJECTING LLAMA-3 INSTRUCT...</p>}
              {result && <p className="text-green-600">{'>'} AUDIT COMPLETE.</p>}
            </div>
          </div>
        </div>

        {/* Output Display */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {!result && !loading && (
            <div className="h-full border-4 border-dashed border-[var(--muted-foreground)] flex items-center justify-center p-12 text-center opacity-50">
              <p className="font-mono uppercase">Target URL required to initiate audit sequence.</p>
            </div>
          )}

          {loading && (
            <div className="h-full flex items-center justify-center p-12">
              <div className="w-16 h-16 border-4 border-black border-t-[var(--primary)] rounded-full animate-spin"></div>
            </div>
          )}

          {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col gap-8">
              
              {/* Content Gaps */}
              <section className="bg-white p-6 te-border te-shadow-hover">
                <h2 className="text-2xl mb-4 bg-black text-white inline-block px-2 py-1">CONTENT_GAPS</h2>
                <div className="flex flex-wrap gap-2">
                  {result.data.resultsJson.missingKeywords?.map((kw: string, i: number) => (
                    <span key={i} className="font-mono text-sm bg-[var(--accent)] text-black border-2 border-black px-3 py-1 font-bold">
                      {kw}
                    </span>
                  ))}
                </div>
              </section>

              {/* AEO FAQs */}
              <section className="bg-[var(--primary)] text-white p-6 te-border te-shadow-hover">
                <h2 className="text-2xl mb-4 border-b-2 border-white pb-2">AEO_FAQs (For Perplexity/AI)</h2>
                <div className="flex flex-col gap-4">
                  {result.data.resultsJson.aeoFaqs?.map((faq: any, i: number) => (
                    <div key={i} className="bg-white text-black p-4 border-2 border-black">
                      <h4 className="font-bold mb-2">Q: {faq.q}</h4>
                      <p className="font-mono text-sm text-gray-800">A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* SEO Structure */}
                <section className="bg-white p-6 te-border te-shadow-hover">
                  <h2 className="text-xl mb-4 border-b-2 border-black pb-2">OPTIMAL_STRUCTURE</h2>
                  <ul className="flex flex-col gap-2 font-mono text-sm">
                    {result.data.resultsJson.seoStructure?.map((node: any, i: number) => (
                      <li key={i} className="flex gap-3">
                        <span className={`font-bold ${node.tag === 'H1' ? 'text-[var(--primary)]' : node.tag === 'H2' ? 'text-black' : 'text-gray-500'}`}>
                          {node.tag}
                        </span>
                        <span>{node.text}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Draft Intro */}
                <section className="bg-black text-white p-6 te-border te-shadow-hover">
                  <h2 className="text-xl mb-4 border-b-2 border-white pb-2 text-[var(--accent)]">DRAFT_INTRO</h2>
                  <p className="font-serif leading-relaxed text-gray-200">
                    {result.data.resultsJson.draftIntro}
                  </p>
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
