'use client';

import { useState } from 'react';
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
  CpuChipIcon
} from '@heroicons/react/24/outline';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)]">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--background)] flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-[var(--border)]">
          <div className="w-8 h-8 rounded bg-[var(--primary)] mr-3 flex items-center justify-center">
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
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
              >
                <ChartBarIcon className="w-5 h-5 mr-3" /> Visión General
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">Herramientas SEO</p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('serpxray')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'serpxray' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
              >
                <BoltIcon className="w-5 h-5 mr-3" /> SERP & AEO X-Ray
              </button>
              <button 
                onClick={() => setActiveTab('planner')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'planner' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
              >
                <RectangleStackIcon className="w-5 h-5 mr-3" /> Keyword Planner
              </button>
              <button 
                onClick={() => setActiveTab('competitors')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'competitors' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
              >
                <UsersIcon className="w-5 h-5 mr-3" /> Radar Competencia
              </button>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">Sistema</p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('apihub')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'apihub' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
              >
                <CpuChipIcon className="w-5 h-5 mr-3" /> API Hub
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
              >
                <Cog6ToothIcon className="w-5 h-5 mr-3" /> Ajustes
              </button>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-[var(--border)]">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[var(--primary)] to-yellow-500 mr-3"></div>
            <div>
              <p className="text-sm font-medium">Román García</p>
              <p className="text-xs text-[var(--muted-foreground)]">Agencia Pro</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 border-b border-[var(--border)] flex items-center justify-between px-8 bg-[var(--background)]/80 backdrop-blur-md z-10">
          <div className="flex items-center text-sm font-medium text-[var(--muted-foreground)]">
            <span>Workspace</span>
            <span className="mx-2">/</span>
            <span className="text-white capitalize">{activeTab.replace('serpxray', 'SERP X-Ray').replace('apihub', 'API Hub')}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-[var(--muted-foreground)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Ctrl + K para buscar..." 
                className="bg-[var(--card)] border border-[var(--border)] rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors w-64"
              />
            </div>
            <button className="relative p-2 text-[var(--muted-foreground)] hover:text-white transition-colors">
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
                {/* Same as before... Keeping it brief for space, but functionally intact */}
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Visión General</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Resumen de rendimiento de los últimos 30 días.</p>
                  </div>
                  <button className="bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors">
                    Exportar Reporte
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 border-t-2 border-t-[var(--primary)]">
                    <p className="text-sm text-[var(--muted-foreground)] font-medium mb-2">Tráfico Orgánico</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-semibold">124.5K</p>
                      <p className="text-green-500 text-sm font-medium flex items-center">+14.2%</p>
                    </div>
                  </div>
                  <div className="glass-card p-6">
                    <p className="text-sm text-[var(--muted-foreground)] font-medium mb-2">CTR Promedio</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-semibold">4.8%</p>
                      <p className="text-green-500 text-sm font-medium flex items-center">+0.2%</p>
                    </div>
                  </div>
                  <div className="glass-card p-6">
                    <p className="text-sm text-[var(--muted-foreground)] font-medium mb-2">Gasto en Ads</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-semibold">$3,240</p>
                      <p className="text-red-500 text-sm font-medium flex items-center">-12.1%</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SERP & AEO X-RAY TAB */}
            {activeTab === 'serpxray' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">SERP & AEO X-Ray</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Análisis topológico con Llama 3.1 para destruir al top 10.</p>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="glass-card p-4 flex gap-4">
                  <input 
                    type="text" 
                    defaultValue="mejor software crm para agencias"
                    className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-lg"
                  />
                  <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)]">
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
                    <p className="text-sm leading-relaxed text-gray-300 mb-4">
                      El top 10 actual está muy enfocado en "precio", pero ignoran la "integración con IA". 
                      <strong className="text-white"> Tienes una brecha de contenido masiva.</strong> Para posicionar en Answer Box (Perplexity/ChatGPT), debes responder directamente: <em className="text-[var(--primary)]">"¿Cuál es el CRM más fácil de implementar?"</em>.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-[var(--primary)]/20 border border-[var(--primary)]/50 text-[var(--primary)] text-xs font-bold rounded-full">Falta: Automatización de correos</span>
                      <span className="px-3 py-1 bg-[var(--primary)]/20 border border-[var(--primary)]/50 text-[var(--primary)] text-xs font-bold rounded-full">Falta: Casos de uso B2B</span>
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <h3 className="text-sm font-bold text-[var(--muted-foreground)] mb-4 uppercase tracking-wider">Promedios Top 10</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1"><span>Extensión de Palabras</span> <span className="font-bold">1,850</span></div>
                        <div className="w-full bg-[var(--background)] rounded-full h-2"><div className="bg-white h-2 rounded-full" style={{width: '60%'}}></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1"><span>Domain Authority (Avg)</span> <span className="font-bold">64</span></div>
                        <div className="w-full bg-[var(--background)] rounded-full h-2"><div className="bg-yellow-500 h-2 rounded-full" style={{width: '64%'}}></div></div>
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
                    <h3 className="font-medium">Top 10 Resultados Actuales</h3>
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
                          <td className="px-6 py-4 font-medium text-blue-400 hover:underline cursor-pointer">{row.url}</td>
                          <td className="px-6 py-4">{row.da}</td>
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
                    <h2 className="text-2xl font-semibold mb-1">API Hub & Integraciones</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Gestiona tus cuotas, llaves y webhooks.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* API Card 1 */}
                  <div className="glass-card p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-xl">G</span>
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
                        <span className="font-mono">1,240 / 2,000</span>
                      </div>
                      <div className="w-full bg-[var(--background)] rounded-full h-1.5"><div className="bg-white h-1.5 rounded-full" style={{width: '62%'}}></div></div>
                    </div>
                  </div>

                  {/* API Card 2 */}
                  <div className="glass-card p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
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
                        <span className="font-mono">840K / 1M</span>
                      </div>
                      <div className="w-full bg-[var(--background)] rounded-full h-1.5"><div className="bg-[var(--primary)] h-1.5 rounded-full" style={{width: '84%'}}></div></div>
                    </div>
                  </div>

                  {/* API Card 3 */}
                  <div className="glass-card p-6 flex flex-col opacity-60">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">M</span>
                      </div>
                      <span className="flex items-center text-xs font-bold text-gray-400 bg-gray-500/10 px-2 py-1 rounded">
                        INACTIVO
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">Meta Graph API</h3>
                    <p className="text-sm text-[var(--muted-foreground)] mb-4">Importación de costos y ROAS de Facebook Ads.</p>
                    <button className="mt-auto w-full border border-[var(--border)] rounded py-2 text-sm hover:bg-[var(--muted)] transition-colors">
                      Conectar Cuenta
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PROFILE TAB (Briefly restored) */}
            {activeTab === 'profile' && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-2xl font-semibold">Perfil</h2>
                <div className="glass-card p-6"><p className="text-[var(--muted-foreground)]">Sección de ajustes generales y seguridad...</p></div>
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
                  <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)]">
                    + Trackear Nuevo Dominio
                  </button>
                </div>

                {/* ROW 1: Amenazas Principales (Trending Now) */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-red-500 rounded mr-2"></span> Amenaza Crítica (Top 3)
                  </h3>
                  <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                    {/* Competitor 1 */}
                    <div className="min-w-[300px] glass-card group cursor-pointer hover:border-[var(--primary)] transition-all relative overflow-hidden">
                      <div className="h-32 bg-gradient-to-br from-gray-800 to-black p-4 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <span className="bg-black/50 backdrop-blur text-white text-xs px-2 py-1 rounded border border-gray-600">SaaS B2B</span>
                          <span className="text-red-500 font-bold text-sm bg-red-500/10 px-2 py-0.5 rounded">98% Match</span>
                        </div>
                        <h4 className="text-2xl font-black text-white">AcmeCorp</h4>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[var(--muted-foreground)]">Brecha de Keywords</span>
                          <span className="font-bold text-red-400">-4,200</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-[var(--muted-foreground)]">Domain Authority</span>
                          <span className="font-bold">78 <span className="text-xs text-gray-500">vs tu 45</span></span>
                        </div>
                        <button className="w-full bg-[var(--card)] border border-[var(--border)] py-2 rounded text-sm hover:bg-[var(--muted)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                          Ver Análisis Profundo
                        </button>
                      </div>
                    </div>

                    {/* Competitor 2 */}
                    <div className="min-w-[300px] glass-card group cursor-pointer hover:border-[var(--primary)] transition-all relative overflow-hidden">
                      <div className="h-32 bg-gradient-to-br from-blue-900 to-black p-4 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <span className="bg-black/50 backdrop-blur text-white text-xs px-2 py-1 rounded border border-gray-600">Agencia</span>
                          <span className="text-yellow-500 font-bold text-sm bg-yellow-500/10 px-2 py-0.5 rounded">75% Match</span>
                        </div>
                        <h4 className="text-2xl font-black text-white">GlobalTech</h4>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[var(--muted-foreground)]">Brecha de Keywords</span>
                          <span className="font-bold text-yellow-400">-1,150</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-[var(--muted-foreground)]">Domain Authority</span>
                          <span className="font-bold">62 <span className="text-xs text-gray-500">vs tu 45</span></span>
                        </div>
                        <button className="w-full bg-[var(--card)] border border-[var(--border)] py-2 rounded text-sm hover:bg-[var(--muted)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                          Ver Análisis Profundo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROW 2: Ganando Terreno (New Releases) */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-green-500 rounded mr-2"></span> A los que les estás ganando
                  </h3>
                  <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide opacity-80 hover:opacity-100 transition-opacity">
                    <div className="min-w-[250px] glass-card p-4 flex items-center border-l-4 border-l-green-500">
                      <div className="w-10 h-10 bg-gray-800 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-bold">StartupLocal</h4>
                        <p className="text-xs text-green-400">Los superaste ayer</p>
                      </div>
                    </div>
                    <div className="min-w-[250px] glass-card p-4 flex items-center border-l-4 border-l-green-500">
                      <div className="w-10 h-10 bg-gray-800 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-bold">OldAgency PR</h4>
                        <p className="text-xs text-green-400">Tráfico en picada (-20%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* KEYWORD PLANNER TAB */}
            {activeTab === 'planner' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Keyword Planner Pro</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Descubrimiento y clusterización de contenido conectado vía API.</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors flex items-center">
                       Exportar CSV
                    </button>
                    <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)]">
                      Crear Campaña
                    </button>
                  </div>
                </div>

                <div className="glass-card p-4 flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Semilla (ej. 'agencia de marketing')"
                    className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                  <select className="bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-white focus:outline-none">
                    <option>México</option>
                    <option>España</option>
                    <option>Estados Unidos</option>
                  </select>
                  <button className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors">
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
                          <td className="px-6 py-4 font-medium text-white">{row.kw}</td>
                          <td className="px-6 py-4 font-mono">{row.vol}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${row.kd > 60 ? 'bg-red-500/20 text-red-500' : row.kd > 30 ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}`}>
                                {row.kd}
                              </div>
                              <span className="ml-2 text-xs text-gray-500">{row.kd > 60 ? 'Hard' : 'Easy'}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-mono text-[var(--muted-foreground)]">{row.cpc}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`px-2 py-1 rounded text-xs border ${row.intent === 'Informativa' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-purple-500/10 border-purple-500/30 text-purple-400'}`}>
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
