'use client';

import { useState, useEffect } from 'react';
import { 
  ChartBarIcon, 
  UsersIcon, 
  Cog6ToothIcon, 
  ArrowTrendingUpIcon, 
  MagnifyingGlassIcon,
  BellIcon,
  GlobeAltIcon,
  BoltIcon,
  RectangleStackIcon,
  CpuChipIcon,
  DocumentTextIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('overview');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('mkt_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('mkt_theme', nextTheme);
  };

  return (
    <div data-theme={theme} className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--background)] flex flex-col hidden md:flex transition-colors duration-200">
        <div className="h-16 flex items-center px-6 border-b border-[var(--border)]">
          <div className="w-8 h-8 rounded bg-[var(--primary)] mr-3 flex items-center justify-center shadow-[0_0_12px_rgba(255,90,0,0.35)]">
            <GlobeAltIcon className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-bold text-lg tracking-wide">MKT<span className="text-[var(--primary)]">NEXUS</span></h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
          {/* Section 1 */}
          <div>
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">Dashboards</p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'overview' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <ChartBarIcon className="w-5 h-5 mr-3" /> Visión General
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">Herramientas SEO & IA</p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('serpxray')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'serpxray' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <BoltIcon className="w-5 h-5 mr-3" /> SERP & AEO X-Ray
              </button>
              <button 
                onClick={() => setActiveTab('planner')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'planner' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <RectangleStackIcon className="w-5 h-5 mr-3" /> Keyword Planner
              </button>
              <button 
                onClick={() => setActiveTab('competitors')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'competitors' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <UsersIcon className="w-5 h-5 mr-3" /> Radar Competencia
              </button>
              <button 
                onClick={() => setActiveTab('rag')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'rag' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <DocumentTextIcon className="w-5 h-5 mr-3" /> RAG Vector Extractor
              </button>
              <button 
                onClick={() => setActiveTab('contentDecay')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'contentDecay' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <ChartBarIcon className="w-5 h-5 mr-3" /> Auditoría GSC (Decay)
              </button>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">Sistema</p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('apihub')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'apihub' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <CpuChipIcon className="w-5 h-5 mr-3" /> API Hub
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'profile' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <Cog6ToothIcon className="w-5 h-5 mr-3" /> Ajustes
              </button>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[var(--primary)] to-amber-400 mr-3 shadow-sm flex items-center justify-center font-bold text-white text-xs">
              RG
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Román García</p>
              <p className="text-xs text-[var(--muted-foreground)]">Agencia Pro</p>
            </div>
          </div>
          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)] text-[var(--foreground)] transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Modo Día' : 'Modo Noche'}
          >
            {theme === 'dark' ? <SunIcon className="w-4 h-4 text-amber-400" /> : <MoonIcon className="w-4 h-4 text-indigo-500" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 border-b border-[var(--border)] flex items-center justify-between px-8 bg-[var(--background)]/80 backdrop-blur-md z-10 transition-colors duration-200">
          <div className="flex items-center text-sm font-medium text-[var(--muted-foreground)]">
            <span>Workspace</span>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)] font-semibold capitalize">
              {activeTab
                .replace('serpxray', 'SERP & AEO X-Ray')
                .replace('apihub', 'API Hub')
                .replace('contentDecay', 'Auditoría GSC')
                .replace('rag', 'RAG Extractor')
                .replace('planner', 'Keyword Planner')
                .replace('competitors', 'Radar Competencia')
              }
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <MagnifyingGlassIcon className="w-4 h-4 text-[var(--muted-foreground)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Ctrl + K para buscar..." 
                className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded-full pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-[var(--primary)] transition-colors w-52 sm:w-64"
              />
            </div>

            {/* Day / Night Theme Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)] transition-all text-xs font-semibold shadow-sm cursor-pointer"
              title={theme === 'dark' ? 'Cambiar a Modo Día' : 'Cambiar a Modo Noche'}
            >
              {theme === 'dark' ? (
                <>
                  <SunIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-[var(--foreground)] hidden sm:inline">Modo Día</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-4 h-4 text-indigo-500" />
                  <span className="text-[var(--foreground)] hidden sm:inline">Modo Noche</span>
                </>
              )}
            </button>

            <button className="relative p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--primary)] rounded-full border border-[var(--background)]"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto animate-fade-in">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Visión General</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Resumen de rendimiento y salud de posicionamiento.</p>
                  </div>
                  <button className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors cursor-pointer shadow-sm">
                    Exportar Reporte
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 border-t-2 border-t-[var(--primary)]">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2">Visibilidad Global</p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">84.2%</span>
                      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded flex items-center">
                        <ArrowTrendingUpIcon className="w-3 h-3 mr-1" /> +12.4%
                      </span>
                    </div>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-blue-500">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2">Keywords en Top 3</p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">342</span>
                      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded flex items-center">
                        <ArrowTrendingUpIcon className="w-3 h-3 mr-1" /> +8
                      </span>
                    </div>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-purple-500">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2">AEO Score (IA Citations)</p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">91/100</span>
                      <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                        Óptimo
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Activity Chart Mockup */}
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Evolución de Tráfico Orgánico vs Competencia</h3>
                  <div className="h-64 flex items-end space-x-2 pt-8">
                    {[45, 52, 49, 60, 72, 68, 85, 94, 88, 102, 115, 128].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                        <div 
                          className="w-full bg-[var(--muted)] group-hover:bg-[var(--primary)] rounded-t transition-all relative"
                          style={{ height: `${h * 1.6}px` }}
                        >
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] text-[10px] py-1 px-1.5 rounded shadow whitespace-nowrap transition-opacity">
                            {h * 120} visitas
                          </div>
                        </div>
                        <span className="text-[10px] text-[var(--muted-foreground)]">M{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SERP & AEO X-RAY TAB */}
            {activeTab === 'serpxray' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">SERP & AEO X-Ray</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Inspección de competidores en tiempo real y diagnóstico para motores de IA.</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-xs bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1.5 rounded-lg flex items-center font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span> Llama 3.1 Conectado
                    </span>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="glass-card p-4 flex gap-4">
                  <input 
                    type="text" 
                    defaultValue="mejor software crm para agencias"
                    className="flex-1 bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors text-base"
                  />
                  <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)] cursor-pointer">
                    Analizar SERP
                  </button>
                </div>

                {/* AI Briefing */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 glass-card p-6 border-l-4 border-l-[var(--primary)]">
                    <div className="flex items-center mb-4">
                      <CpuChipIcon className="w-6 h-6 text-[var(--primary)] mr-2" />
                      <h3 className="text-lg font-bold">Diagnóstico AEO (IA)</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--foreground)] opacity-90 mb-4">
                      El top 10 actual está muy enfocado en "precio", pero ignoran la "integración con IA". 
                      <strong className="text-[var(--foreground)] font-bold"> Tienes una brecha de contenido masiva.</strong> Para posicionar en Answer Box (Perplexity/ChatGPT), debes responder directamente: <em className="text-[var(--primary)] font-semibold">"¿Cuál es el CRM más fácil de implementar?"</em>.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold rounded-full">Falta: Automatización de correos</span>
                      <span className="px-3 py-1 bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold rounded-full">Falta: Casos de uso B2B</span>
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <h3 className="text-xs font-bold text-[var(--muted-foreground)] mb-4 uppercase tracking-wider">Promedios Top 10</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1"><span>Extensión de Palabras</span> <span className="font-bold">1,850</span></div>
                        <div className="w-full bg-[var(--muted)] rounded-full h-2"><div className="bg-[var(--primary)] h-2 rounded-full" style={{width: '60%'}}></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1"><span>Domain Authority (Avg)</span> <span className="font-bold">64</span></div>
                        <div className="w-full bg-[var(--muted)] rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{width: '64%'}}></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1"><span>Intención de Búsqueda</span> <span className="text-[var(--primary)] font-bold">Comercial / Review</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top 10 Table */}
                <div className="glass-card overflow-hidden">
                  <div className="px-6 py-4 border-b border-[var(--border)]">
                    <h3 className="font-semibold text-sm">Top 10 Resultados Actuales</h3>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--card)] text-[var(--muted-foreground)]">
                      <tr>
                        <th className="px-6 py-3 font-medium">#</th>
                        <th className="px-6 py-3 font-medium">URL Competidor</th>
                        <th className="px-6 py-3 font-medium">DA</th>
                        <th className="px-6 py-3 font-medium text-right">Words</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {[
                        { pos: 1, url: "hubspot.com/es/crm/agencies", da: 92, words: "2,100" },
                        { pos: 2, url: "salesforce.com/mx/smb/crm", da: 90, words: "1,540" },
                        { pos: 3, url: "blog.acmecorp.com/mejores-crms-2026", da: 55, words: "3,200" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-[var(--muted)]/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-[var(--primary)]">{row.pos}</td>
                          <td className="px-6 py-4 font-medium text-blue-500 hover:underline cursor-pointer">{row.url}</td>
                          <td className="px-6 py-4 font-semibold">{row.da}</td>
                          <td className="px-6 py-4 text-right font-mono">{row.words}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* API HUB TAB */}
            {activeTab === 'apihub' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">API Hub & Integraciones</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Gestiona tus cuotas, llaves y webhooks de marketing.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* API Card 1 */}
                  <div className="glass-card p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-blue-600 font-black text-xl">G</span>
                      </div>
                      <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span> ONLINE
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">Search Console API</h3>
                    <p className="text-sm text-[var(--muted-foreground)] mb-4">Sincronización diaria de impresiones y posiciones.</p>
                    <div className="mt-auto border-t border-[var(--border)] pt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Cuota (Día)</span>
                        <span className="font-mono font-semibold">1,240 / 2,000</span>
                      </div>
                      <div className="w-full bg-[var(--muted)] rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '62%'}}></div></div>
                    </div>
                  </div>

                  {/* API Card 2 */}
                  <div className="glass-card p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-xl">CF</span>
                      </div>
                      <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span> ONLINE
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">Cloudflare Workers AI</h3>
                    <p className="text-sm text-[var(--muted-foreground)] mb-4">Motor de Llama 3.1 para análisis de texto y AEO.</p>
                    <div className="mt-auto border-t border-[var(--border)] pt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Tokens (Mes)</span>
                        <span className="font-mono font-semibold">840K / 1M</span>
                      </div>
                      <div className="w-full bg-[var(--muted)] rounded-full h-1.5"><div className="bg-[var(--primary)] h-1.5 rounded-full" style={{width: '84%'}}></div></div>
                    </div>
                  </div>

                  {/* API Card 3 */}
                  <div className="glass-card p-6 flex flex-col opacity-75">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-xl">M</span>
                      </div>
                      <span className="flex items-center text-xs font-bold text-gray-400 bg-gray-500/10 px-2 py-1 rounded">
                        INACTIVO
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">Meta Graph API</h3>
                    <p className="text-sm text-[var(--muted-foreground)] mb-4">Importación de costos y ROAS de Facebook Ads.</p>
                    <button className="mt-auto w-full border border-[var(--border)] bg-[var(--card)] rounded py-2 text-sm hover:bg-[var(--muted)] text-[var(--foreground)] transition-colors cursor-pointer">
                      Conectar Cuenta
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-2xl font-bold">Ajustes & Perfil</h2>
                <div className="glass-card p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--primary)] to-amber-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                      RG
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Román García</h3>
                      <p className="text-sm text-[var(--muted-foreground)]">Plan Agencia Pro • Miembro desde 2026</p>
                    </div>
                  </div>
                  <div className="border-t border-[var(--border)] pt-4">
                    <p className="text-sm text-[var(--muted-foreground)]">Gestiona tus preferencias de apariencia, integraciones maestras y tokens de acceso.</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* RADAR COMPETENCIA (NETFLIX STYLE) */}
            {activeTab === 'competitors' && (
              <div className="space-y-10 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-3xl font-bold mb-1 tracking-tight">Tus Rivales</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Monitoreo visual estilo inteligencia competitiva.</p>
                  </div>
                  <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)] cursor-pointer">
                    + Trackear Nuevo Dominio
                  </button>
                </div>

                {/* ROW 1: Amenazas Principales */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-red-500 rounded mr-2"></span> Amenaza Crítica (Top 3)
                  </h3>
                  <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                    {/* Competitor 1 */}
                    <div className="min-w-[300px] glass-card group cursor-pointer hover:border-[var(--primary)] transition-all relative overflow-hidden">
                      <div className="h-32 bg-gradient-to-br from-slate-900 to-black p-4 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <span className="bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded border border-gray-700">SaaS B2B</span>
                          <span className="text-red-400 font-bold text-sm bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30">98% Match</span>
                        </div>
                        <h4 className="text-2xl font-black text-white">AcmeCorp</h4>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[var(--muted-foreground)]">Brecha de Keywords</span>
                          <span className="font-bold text-red-500">-4,200</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-[var(--muted-foreground)]">Domain Authority</span>
                          <span className="font-bold">78 <span className="text-xs text-[var(--muted-foreground)]">vs tu 45</span></span>
                        </div>
                        <button className="w-full bg-[var(--card)] border border-[var(--border)] py-2 rounded text-sm hover:bg-[var(--muted)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors cursor-pointer">
                          Ver Análisis Profundo
                        </button>
                      </div>
                    </div>

                    {/* Competitor 2 */}
                    <div className="min-w-[300px] glass-card group cursor-pointer hover:border-[var(--primary)] transition-all relative overflow-hidden">
                      <div className="h-32 bg-gradient-to-br from-blue-950 to-slate-900 p-4 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <span className="bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded border border-gray-700">Agencia</span>
                          <span className="text-amber-400 font-bold text-sm bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">75% Match</span>
                        </div>
                        <h4 className="text-2xl font-black text-white">GlobalTech</h4>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[var(--muted-foreground)]">Brecha de Keywords</span>
                          <span className="font-bold text-amber-500">-1,150</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-[var(--muted-foreground)]">Domain Authority</span>
                          <span className="font-bold">62 <span className="text-xs text-[var(--muted-foreground)]">vs tu 45</span></span>
                        </div>
                        <button className="w-full bg-[var(--card)] border border-[var(--border)] py-2 rounded text-sm hover:bg-[var(--muted)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors cursor-pointer">
                          Ver Análisis Profundo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROW 2: Ganando Terreno */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-emerald-500 rounded mr-2"></span> A los que les estás ganando
                  </h3>
                  <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="min-w-[250px] glass-card p-4 flex items-center border-l-4 border-l-emerald-500">
                      <div className="w-10 h-10 bg-[var(--muted)] rounded-full mr-4 flex items-center justify-center font-bold text-xs">SL</div>
                      <div>
                        <h4 className="font-bold">StartupLocal</h4>
                        <p className="text-xs text-emerald-500 font-semibold">Los superaste ayer</p>
                      </div>
                    </div>
                    <div className="min-w-[250px] glass-card p-4 flex items-center border-l-4 border-l-emerald-500">
                      <div className="w-10 h-10 bg-[var(--muted)] rounded-full mr-4 flex items-center justify-center font-bold text-xs">OA</div>
                      <div>
                        <h4 className="font-bold">OldAgency PR</h4>
                        <p className="text-xs text-emerald-500 font-semibold">Tráfico en picada (-20%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* RAG VECTOR EXTRACTOR TAB */}
            {activeTab === 'rag' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">RAG Vector Extractor</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Scrapea, limpia y formatea contenido web para alimentar Modelos LLM (RAG).</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors flex items-center cursor-pointer shadow-sm">
                       Exportar .JSONL
                    </button>
                    <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)] cursor-pointer">
                      Enviar a Pinecone
                    </button>
                  </div>
                </div>

                <div className="glass-card p-4 flex gap-4">
                  <input 
                    type="text" 
                    placeholder="URL o Sitemap (ej. 'https://acmecorp.com/blog')"
                    className="flex-1 bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                  <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded-lg px-4 py-2 focus:outline-none">
                    <option>Chunk Size: 512</option>
                    <option>Chunk Size: 1024</option>
                    <option>Chunk Size: 2048</option>
                  </select>
                  <button className="bg-[var(--foreground)] text-[var(--background)] px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity cursor-pointer">
                    Extraer & Limpiar
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 space-y-4">
                    <div className="glass-card p-4">
                      <h4 className="font-bold text-sm mb-4">Pipeline de Limpieza</h4>
                      <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                        <li className="flex justify-between"><span>Remover Nav/Footer</span> <span className="text-emerald-500 font-bold">✓</span></li>
                        <li className="flex justify-between"><span>Extraer Tablas a Markdown</span> <span className="text-emerald-500 font-bold">✓</span></li>
                        <li className="flex justify-between"><span>Remover Boilerplate</span> <span className="text-emerald-500 font-bold">✓</span></li>
                        <li className="flex justify-between"><span>Generar Metadata IA</span> <span className="text-emerald-500 font-bold">✓</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:col-span-2 glass-card p-6">
                    <h4 className="font-bold text-sm mb-4">Vista Previa de Chunks (Formato Vectorial)</h4>
                    <pre className="bg-slate-950 p-4 rounded text-xs text-emerald-400 overflow-x-auto border border-slate-800 font-mono">
{`{
  "id": "vec_8f92a1",
  "metadata": {
    "source_url": "https://acmecorp.com/guide",
    "title": "Guía Definitiva B2B",
    "author": "Equipo de Contenido",
    "chunk_index": 1,
    "intent": "informational"
  },
  "text": "# Introducción al B2B\\nEl marketing B2B moderno requiere...",
  "tokens": 482
}`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* CONTENT DECAY (GSC) TAB */}
            {activeTab === 'contentDecay' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Auditoría GSC (Content Decay)</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Detecta contenido que está perdiendo tráfico de forma pasiva en Google.</p>
                  </div>
                  <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)] cursor-pointer">
                    Generar Reporte de Actualización
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="glass-card p-6 border-t-4 border-t-red-500">
                    <h3 className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2">Páginas Muriendo</h3>
                    <p className="text-4xl font-bold">14 <span className="text-xs text-red-500 font-semibold bg-red-500/10 px-2 py-0.5 rounded">-20% Tráfico</span></p>
                  </div>
                  <div className="glass-card p-6 border-t-4 border-t-amber-500">
                    <h3 className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2">Canibalización Detectada</h3>
                    <p className="text-4xl font-bold">3 <span className="text-xs text-amber-500 font-semibold bg-amber-500/10 px-2 py-0.5 rounded">Clusters</span></p>
                  </div>
                  <div className="glass-card p-6 border-t-4 border-t-emerald-500">
                    <h3 className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2">Oportunidades Quick Win</h3>
                    <p className="text-4xl font-bold">28 <span className="text-xs text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">Posiciones 11-20</span></p>
                  </div>
                </div>

                <div className="glass-card overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--card)] text-[var(--muted-foreground)]">
                      <tr>
                        <th className="px-6 py-3 font-medium">URL Afectada</th>
                        <th className="px-6 py-3 font-medium">Tráfico (Mes Anterior)</th>
                        <th className="px-6 py-3 font-medium">Tráfico (Actual)</th>
                        <th className="px-6 py-3 font-medium">Pérdida</th>
                        <th className="px-6 py-3 font-medium text-right">Acción IA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {[
                        { url: "/blog/que-es-el-marketing", old: "14,500", new: "9,200", loss: "-36%" },
                        { url: "/servicios/seo-local", old: "8,100", new: "6,500", loss: "-19%" },
                        { url: "/blog/tendencias-2023", old: "5,200", new: "1,100", loss: "-78%" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-[var(--muted)]/50 transition-colors group">
                          <td className="px-6 py-4 text-[var(--foreground)] text-xs truncate max-w-[200px] font-medium">{row.url}</td>
                          <td className="px-6 py-4 font-mono">{row.old}</td>
                          <td className="px-6 py-4 font-mono text-red-500 font-semibold">{row.new}</td>
                          <td className="px-6 py-4 font-bold text-red-500">{row.loss}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-xs bg-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer">
                              Reescribir con IA
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* KEYWORD PLANNER TAB */}
            {activeTab === 'planner' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Keyword Planner Pro</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Descubrimiento y clusterización de contenido conectado vía API.</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors flex items-center cursor-pointer shadow-sm">
                       Exportar CSV
                    </button>
                    <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)] cursor-pointer">
                      Crear Campaña
                    </button>
                  </div>
                </div>

                <div className="glass-card p-4 flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Semilla (ej. 'agencia de marketing')"
                    className="flex-1 bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                  <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded-lg px-4 py-2 focus:outline-none">
                    <option>México</option>
                    <option>España</option>
                    <option>Estados Unidos</option>
                  </select>
                  <button className="bg-[var(--foreground)] text-[var(--background)] px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity cursor-pointer">
                    Buscar
                  </button>
                </div>

                {/* Keywords Table */}
                <div className="glass-card overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--card)] text-[var(--muted-foreground)]">
                      <tr>
                        <th className="px-6 py-3 font-medium">Keyword</th>
                        <th className="px-6 py-3 font-medium">Volumen (Mes)</th>
                        <th className="px-6 py-3 font-medium">Keyword Difficulty (KD)</th>
                        <th className="px-6 py-3 font-medium">CPC</th>
                        <th className="px-6 py-3 font-medium text-right">Intención</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {[
                        { kw: "agencia de marketing digital", vol: "22,000", kd: 78, cpc: "$4.50", intent: "Comercial" },
                        { kw: "como hacer marketing para pymes", vol: "5,400", kd: 22, cpc: "$1.20", intent: "Informativa" },
                        { kw: "mejores agencias seo en cdmx", vol: "1,200", kd: 45, cpc: "$8.90", intent: "Transaccional" },
                        { kw: "servicios de posicionamiento web", vol: "8,100", kd: 60, cpc: "$5.30", intent: "Comercial" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-[var(--muted)]/50 transition-colors group">
                          <td className="px-6 py-4 font-semibold text-[var(--foreground)]">{row.kw}</td>
                          <td className="px-6 py-4 font-mono">{row.vol}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${row.kd > 60 ? 'bg-red-500/20 text-red-500' : row.kd > 30 ? 'bg-amber-500/20 text-amber-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                                {row.kd}
                              </div>
                              <span className="ml-2 text-xs text-[var(--muted-foreground)]">{row.kd > 60 ? 'Hard' : 'Easy'}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-mono text-[var(--muted-foreground)]">{row.cpc}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`px-2 py-1 rounded text-xs border font-medium ${row.intent === 'Informativa' ? 'bg-blue-500/10 border-blue-500/30 text-blue-500' : 'bg-purple-500/10 border-purple-500/30 text-purple-500'}`}>
                              {row.intent}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
