'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden font-sans selection:bg-[#ff5a00] selection:text-white">
      {/* Background Industrial Grids & Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff5a00]/10 blur-[130px] rounded-full pointer-events-none"></div>
      
      {/* Subtle corner hazard strip lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff5a00] to-transparent opacity-80"></div>
      <div className="absolute top-4 left-6 flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest pointer-events-none">
        <span className="inline-block w-2 h-2 rounded-full bg-[#ff5a00] animate-ping"></span>
        <span>SYS.ERR // CODE_404_CLUSTER_UNRESOLVED</span>
      </div>

      {/* Header Bar */}
      <header className="relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/60 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(255,90,0,0.25)] group-hover:border-[#ff5a00] transition-colors">
            <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
              <rect x="3" y="3" width="13" height="13" rx="2.5" fill="#ff5a00" />
              <rect x="20" y="3" width="13" height="13" rx="2.5" fill="#27272a" stroke="#ff5a00" strokeWidth="1.5" />
              <rect x="3" y="20" width="13" height="13" rx="2.5" fill="#18181b" stroke="#ff5a00" strokeWidth="1.5" strokeDasharray="2 2" />
              <rect x="20" y="20" width="13" height="13" rx="2.5" fill="#ff5a00" />
              <circle cx="9.5" cy="9.5" r="2" fill="#ffffff" />
              <circle cx="26.5" cy="26.5" r="2" fill="#ffffff" />
            </svg>
          </div>
          <span className="font-bold text-sm tracking-widest text-zinc-200">
            BUILDATIONS <span className="text-[#ff5a00] font-black">STUDIO</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
          <span className="px-2.5 py-1 rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">
            TELEMETRY: OFFLINE
          </span>
        </div>
      </header>

      {/* Hero 404 Section */}
      <main className="relative z-10 my-auto py-12 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Industrial Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-950/20 text-[#ff5a00] text-xs font-mono font-semibold tracking-wider uppercase mb-8 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00]"></span>
          Nodo Desconectado del Grafo Semántico
        </div>

        {/* Industrial Graphic & 404 Display */}
        <div className="relative mb-6">
          <div className="text-[120px] sm:text-[180px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 via-zinc-600 to-zinc-900 leading-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            404
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#ff5a00] to-transparent shadow-[0_0_12px_#ff5a00] animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
          La coordenada requerida no existe o fue desindexada
        </h1>
        
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
          El crawler de <strong className="text-zinc-200 font-semibold">BUILDATIONS STUDIO</strong> exploró los grafos de contenido, clusters temáticos y conectores CMS, pero esta ruta no responde a ningún nodo registrado en la topología.
        </p>

        {/* Industrial Diagnostic Box */}
        <div className="w-full max-w-md bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 text-left font-mono text-xs text-zinc-400 mb-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-800/80 text-[11px] text-zinc-500">
            <span>DIAGNOSTIC TRACE</span>
            <span className="text-orange-400">FAILED_LOOKUP</span>
          </div>
          <div className="space-y-1.5">
            <p className="text-zinc-300">
              <span className="text-zinc-500">&gt;</span> ROUTE_TARGET: <span className="text-orange-400/90 underline decoration-zinc-700">undefined_endpoint</span>
            </p>
            <p>
              <span className="text-zinc-500">&gt;</span> HUB_SYNC_STATUS: <span className="text-emerald-400">HUB_ID #982104 READY</span>
            </p>
            <p>
              <span className="text-zinc-500">&gt;</span> AGENT_VERA_RECOVERY: <span className="text-zinc-300">Reroute recommended to Core Dashboard</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff5a00] hover:bg-[#e04e00] text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,90,0,0.35)] hover:shadow-[0_0_28px_rgba(255,90,0,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Volver a la Consola Principal
          </Link>
          
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back();
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Regresar a la Vista Anterior
          </button>
        </div>
      </main>

      {/* Footer Industrial Coordinates */}
      <footer className="relative z-10 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
          <span>BUILDATIONS KERNEL v2.4 // LATENCY: 24ms</span>
        </div>
        <div>
          <span>REVOPS ARCHITECTURE &bull; ISO-SEO-AEO COMPLIANT</span>
        </div>
      </footer>
    </div>
  );
}
