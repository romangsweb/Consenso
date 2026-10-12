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
  MoonIcon,
  SparklesIcon,
  ShareIcon,
  RocketLaunchIcon,
  ArrowPathRoundedSquareIcon,
  CheckCircleIcon
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
          <h1 className="font-bold text-base tracking-wide">BUILDATIONS <span className="text-[var(--primary)] font-black">STUDIO</span></h1>
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
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">Motores & Lanzadores</p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('engineLauncher')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'engineLauncher' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <RocketLaunchIcon className="w-5 h-5 mr-3 text-amber-400" /> Lanzador SEO / AEO
              </button>
              <button 
                onClick={() => setActiveTab('revopsHubspot')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'revopsHubspot' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <ArrowPathRoundedSquareIcon className="w-5 h-5 mr-3 text-orange-400" /> Motor RevOps & HubSpot
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">Herramientas SEO & IA</p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('aiShareOfVoice')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'aiShareOfVoice' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <SparklesIcon className="w-5 h-5 mr-3" /> AEO Share of Voice
              </button>
              <button 
                onClick={() => setActiveTab('clusterMap')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'clusterMap' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <ShareIcon className="w-5 h-5 mr-3" /> Topic Clusters & Silos
              </button>
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
                .replace('engineLauncher', 'Lanzador y Configurador de Motor SEO/AEO')
                .replace('revopsHubspot', 'Motor RevOps & Conexión HubSpot')
                .replace('aiShareOfVoice', 'AEO / GEO Share of Voice')
                .replace('clusterMap', 'Clusters & Silos de Contenido')
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

            {/* TAB: LANZADOR Y CONFIGURADOR DE MOTORES SEO / AEO */}
            {activeTab === 'engineLauncher' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1 flex items-center">
                      <RocketLaunchIcon className="w-7 h-7 text-amber-500 mr-2" />
                      Lanzador & Configurador de Motor Generativo (SEO / AEO)
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-sm">
                      Configura el agente autónomo que se conectará a tu sitio web para planificar, redactar y publicar contenido optimizado para Google y Motores de IA.
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors cursor-pointer shadow-sm">
                      Pausar Motor
                    </button>
                    <button className="bg-[var(--primary)] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.35)] cursor-pointer flex items-center">
                      <RocketLaunchIcon className="w-4 h-4 mr-2" /> Desplegar Motor en Mi Sitio
                    </button>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="glass-card p-4 flex flex-wrap items-center justify-between gap-4 border-l-4 border-l-emerald-500">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                    <div>
                      <p className="text-sm font-bold flex items-center gap-2">
                        Estado del Motor: <span className="text-emerald-500">ACTIVO Y RASTREANDO</span>
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">Sitio vinculado: <span className="font-mono text-[var(--foreground)]">https://soyroman.com</span> (Conector Webhook v2.4)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="bg-[var(--muted)] px-3 py-1.5 rounded border border-[var(--border)]">Ritmo: 3 Artículos / Semana</span>
                    <span className="bg-[var(--muted)] px-3 py-1.5 rounded border border-[var(--border)]">Tokens Usados: 142k / 500k</span>
                    <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded border border-emerald-500/20 font-bold">Próximo Despliegue: Mañana 08:00 AM</span>
                  </div>
                </div>

                {/* Grid de Configuración Gráfica del Motor */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Columna 1 & 2: Ajustes de Comportamiento del Motor */}
                  <div className="lg:col-span-2 space-y-6">
                    
                    {/* Tarjeta 1: Selección del Tipo de Agente */}
                    <div className="glass-card p-6 space-y-4">
                      <h3 className="font-bold text-base flex items-center">
                        <span className="w-2 h-5 bg-[var(--primary)] rounded mr-2"></span>
                        1. Selecciona el Tipo de Agente Generativo
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Define la personalidad, profundidad de investigación y estilo de optimización del agente que operará en tu blog.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div className="p-4 rounded-xl border-2 border-[var(--primary)] bg-[var(--primary)]/5 cursor-pointer hover:border-[var(--primary)] transition-all">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold uppercase text-[var(--primary)]">Híbrido Recomendado</span>
                            <CheckCircleIcon className="w-5 h-5 text-[var(--primary)]" />
                          </div>
                          <h4 className="font-bold text-sm mb-1">Agente AEO Máximo</h4>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Optimizado para Perplexity y ChatGPT. Redacta en formato de respuesta directa, listas estructuradas y tablas comparativas.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] cursor-pointer hover:border-[var(--primary)] transition-all">
                          <span className="text-xs font-bold uppercase text-[var(--muted-foreground)] block mb-2">SEO Clásico</span>
                          <h4 className="font-bold text-sm mb-1">Agente Long-Form Pilar</h4>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Guías completas de 3,000+ palabras con densidad semántica natural, encabezados H2/H3 y optimización tradicional de PageRank.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] cursor-pointer hover:border-[var(--primary)] transition-all">
                          <span className="text-xs font-bold uppercase text-[var(--muted-foreground)] block mb-2">Noticioso / Viral</span>
                          <h4 className="font-bold text-sm mb-1">Agente Newsjacking</h4>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Detecta tendencias y publica artículos de 800 palabras en menos de 15 minutos para indexar en Google Discover.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tarjeta 2: Tópicos y Mapa de Contenido a Armar */}
                    <div className="glass-card p-6 space-y-4">
                      <h3 className="font-bold text-base flex items-center">
                        <span className="w-2 h-5 bg-amber-500 rounded mr-2"></span>
                        2. Tópicos y Mapa de Contenido a Desarrollar
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Ingresa los silos temáticos que el motor debe ir cubriendo automáticamente hasta completar la cobertura de autoridad.
                      </p>

                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            defaultValue="Automatizaciones RevOps, Inteligencia Artificial B2B, Arquitectura AEO, CRM HubSpot"
                            className="flex-1 bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                          />
                          <button className="bg-[var(--card)] border border-[var(--border)] px-4 py-2 text-xs font-bold rounded-lg hover:bg-[var(--muted)]">
                            + Añadir Tópico
                          </button>
                        </div>

                        {/* Tópicos Activos Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          <span className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-xs rounded-full flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Silo 1: RevOps & HubSpot (12 de 15 completados)
                          </span>
                          <span className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-xs rounded-full flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Silo 2: AEO & Answer Engines (4 de 10 en progreso)
                          </span>
                          <span className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-xs rounded-full flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Silo 3: Casos de Éxito y Comparativas (Pendiente)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tarjeta 3: Pipeline de Producción y Revisión */}
                    <div className="glass-card p-6 space-y-4">
                      <h3 className="font-bold text-base flex items-center">
                        <span className="w-2 h-5 bg-emerald-500 rounded mr-2"></span>
                        3. Pipeline de Lanzamiento y Aprobación
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                          <h4 className="font-bold text-xs uppercase text-[var(--muted-foreground)] mb-2">Modo de Publicación</h4>
                          <label className="flex items-center space-x-2 text-sm cursor-pointer mb-2">
                            <input type="radio" name="publish_mode" defaultChecked className="accent-[var(--primary)]" />
                            <span>Crear como Borrador en CMS (Requiere Aprobación)</span>
                          </label>
                          <label className="flex items-center space-x-2 text-sm cursor-pointer">
                            <input type="radio" name="publish_mode" className="accent-[var(--primary)]" />
                            <span>Publicación 100% Autónoma (Autopiloto)</span>
                          </label>
                        </div>

                        <div className="p-4 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                          <h4 className="font-bold text-xs uppercase text-[var(--muted-foreground)] mb-2">Enriquecimiento con IA</h4>
                          <div className="space-y-1.5 text-xs text-[var(--muted-foreground)]">
                            <label className="flex items-center space-x-2">
                              <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                              <span>Generar Schema JSON-LD (FAQPage + Article)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                              <span>Autogenerar imágenes destacadas vía IA</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                              <span>Inyectar enlaces internos a páginas comerciales</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Columna 3: Conector del Sitio Web (Snippet / Webhook) */}
                  <div className="space-y-6">
                    <div className="glass-card p-6 space-y-4 border-t-4 border-t-[var(--primary)]">
                      <h3 className="font-bold text-base">Conexión con tu Sitio Web</h3>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Selecciona cómo el motor inyectará los artículos generados en tu plataforma web.
                      </p>

                      <div className="space-y-3">
                        <label className="block text-xs font-semibold text-[var(--muted-foreground)]">Plataforma CMS</label>
                        <select className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg p-2.5 text-sm text-[var(--foreground)]">
                          <option>WordPress (REST API / Plugin)</option>
                          <option>Webflow (Collection Webhooks)</option>
                          <option>Shopify (Blog Articles API)</option>
                          <option>Next.js / Headless (Webhook Endpoint)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-[var(--muted-foreground)]">URL del Webhook de Publicación</label>
                        <input 
                          type="text" 
                          defaultValue="https://soyroman.com/api/mkt-engine/hook" 
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs font-mono text-[var(--foreground)]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-[var(--muted-foreground)]">Token de Autenticación (Bearer)</label>
                        <input 
                          type="password" 
                          defaultValue="mkt_live_98a7sd8f97a8sd7f89asdf" 
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs font-mono text-[var(--foreground)]"
                        />
                      </div>

                      <button className="w-full bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] py-2.5 rounded-lg text-xs font-bold hover:bg-[var(--muted)] transition-colors cursor-pointer">
                        Probar Conexión (Ping Test)
                      </button>
                    </div>

                    {/* Resumen del Próximo Artículo en Cola */}
                    <div className="glass-card p-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-amber-500 uppercase">En Cola de Redacción</span>
                        <span className="text-[10px] text-[var(--muted-foreground)] font-mono">ID: #ART-892</span>
                      </div>
                      <h4 className="font-bold text-sm">"Cómo alinear Marketing y Ventas en HubSpot para reducir el ciclo de cierre"</h4>
                      <div className="text-xs space-y-1 text-[var(--muted-foreground)]">
                        <p>• Silo: <strong className="text-[var(--foreground)]">RevOps & CRM</strong></p>
                        <p>• Intención: <strong className="text-[var(--foreground)]">Comercial / B2B</strong></p>
                        <p>• Longitud: <strong className="text-[var(--foreground)]">2,200 palabras</strong></p>
                      </div>
                      <div className="pt-2">
                        <button className="w-full bg-[var(--muted)] text-[var(--foreground)] py-2 rounded text-xs hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer font-medium">
                          Previsualizar Borrador IA
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB: MOTOR DE REVOPS & CONEXIÓN HUBSPOT */}
            {activeTab === 'revopsHubspot' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1 flex items-center">
                      <ArrowPathRoundedSquareIcon className="w-7 h-7 text-orange-500 mr-2" />
                      Motor de RevOps & Atribución HubSpot
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-sm">
                      Conecta las visitas y contenidos generados por el motor SEO/AEO con leads, deals y ventas reales cerradas en HubSpot CRM.
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors cursor-pointer shadow-sm">
                      Sincronizar Propiedades
                    </button>
                    <button className="bg-[#ff7a59] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#e66a4b] transition-colors shadow-[0_0_15px_rgba(255,122,89,0.35)] cursor-pointer flex items-center">
                      Re-conectar HubSpot OAuth
                    </button>
                  </div>
                </div>

                {/* KPI Cards RevOps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="glass-card p-6 border-t-2 border-t-[#ff7a59]">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-1">MQLs Generados por Contenido</p>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-3xl font-bold">148</span>
                      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                        +24% este mes
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-3">Registrados directamente en HubSpot</p>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-blue-500">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-1">Pipeline Atribuido (Deals)</p>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-3xl font-bold">$42,500</span>
                      <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                        18 Oportunidades
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-3">Origen: Artículos del Motor AEO</p>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-emerald-500">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-1">Ventas Cerradas Ganadas</p>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-3xl font-bold">$16,200</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        ROAS: 8.4x
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-3">Negocios ganados en HubSpot</p>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-purple-500">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-1">Tasa Lead-to-SQL</p>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-3xl font-bold">22.4%</span>
                      <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                        Alta Calidad
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-3">Filtrados con formulario inteligente</p>
                  </div>
                </div>

                {/* Sección 2: Configuración del Pipeline de RevOps con HubSpot */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Reglas de Atribución */}
                  <div className="lg:col-span-2 glass-card p-6 space-y-4">
                    <h3 className="font-bold text-base flex items-center">
                      <span className="w-2 h-5 bg-[#ff7a59] rounded mr-2"></span>
                      Mapeo de Atribución y Propiedades de Contacto
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Cuando un usuario lee un artículo del motor y llena un formulario, el motor inyecta automáticamente estos campos en la ficha del contacto de HubSpot.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xs">
                        <div>
                          <p className="font-bold">Original Search Term (AEO/SEO)</p>
                          <p className="text-[var(--muted-foreground)]">Término exacto con el que llegó el prospecto</p>
                        </div>
                        <span className="font-mono text-[#ff7a59] font-bold">→ hs_analytics_first_touch_converting_campaign</span>
                      </div>

                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xs">
                        <div>
                          <p className="font-bold">Topic Cluster Influencer</p>
                          <p className="text-[var(--muted-foreground)]">Silo de contenido que educó al lead</p>
                        </div>
                        <span className="font-mono text-[#ff7a59] font-bold">→ custom_topic_cluster_tag</span>
                      </div>

                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xs">
                        <div>
                          <p className="font-bold">Lead Scoring IA</p>
                          <p className="text-[var(--muted-foreground)]">Puntuación estimada de compra calculada por IA</p>
                        </div>
                        <span className="font-mono text-[#ff7a59] font-bold">→ hubspot_score (+15 pts)</span>
                      </div>
                    </div>
                  </div>

                  {/* Estado de la Integración HubSpot */}
                  <div className="glass-card p-6 space-y-4 border-t-4 border-t-[#ff7a59]">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-base">Estado de Cuenta HubSpot</h3>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <p className="flex justify-between"><span className="text-[var(--muted-foreground)]">Portal ID:</span> <span className="font-mono font-bold">24981290</span></p>
                      <p className="flex justify-between"><span className="text-[var(--muted-foreground)]">Plan:</span> <span className="font-bold">Marketing & Sales Hub Pro</span></p>
                      <p className="flex justify-between"><span className="text-[var(--muted-foreground)]">Último Sync:</span> <span>Hace 6 minutos</span></p>
                      <p className="flex justify-between"><span className="text-[var(--muted-foreground)]">Workflows Vinculados:</span> <span className="text-emerald-500 font-bold">4 Activos</span></p>
                    </div>

                    <div className="pt-2 border-t border-[var(--border)]">
                      <p className="text-[11px] text-[var(--muted-foreground)] mb-3">
                        Disparador activo: Si un lead lee 2+ artículos del cluster RevOps, crear Deal automático en etapa <em>"Diagnóstico Solicitado"</em>.
                      </p>
                      <button className="w-full bg-[var(--card)] border border-[var(--border)] py-2 rounded text-xs font-bold hover:bg-[var(--muted)] transition-colors cursor-pointer">
                        Ver Workflows en HubSpot ↗
                      </button>
                    </div>
                  </div>

                </div>

                {/* Tabla de Deals Cerrados por Contenido Generativo */}
                <div className="glass-card overflow-hidden">
                  <div className="px-6 py-4 border-b border-[var(--border)] flex justify-between items-center">
                    <h3 className="font-semibold text-sm">Últimos Deals de HubSpot Atribuidos al Motor de Contenido</h3>
                    <span className="text-xs text-[var(--muted-foreground)]">Atribución de Primer Toque y Multi-Touch</span>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--card)] text-[var(--muted-foreground)]">
                      <tr>
                        <th className="px-6 py-3 font-medium">Deal en HubSpot</th>
                        <th className="px-6 py-3 font-medium">Empresa</th>
                        <th className="px-6 py-3 font-medium">Artículo Convertidor</th>
                        <th className="px-6 py-3 font-medium">Monto</th>
                        <th className="px-6 py-3 font-medium text-right">Etapa Actual</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {[
                        { deal: "Implementación CRM Enterprise", company: "FinTech MX", article: "/blog/kpis-content-marketing", amount: "$8,500 USD", stage: "Closed Won" },
                        { deal: "Auditoría RevOps Trimestral", company: "Logística Global", article: "/guia-marketing-contenidos-b2b", amount: "$3,200 USD", stage: "Closed Won" },
                        { deal: "Suscripción Agencia Pro", company: "SaaS Analytics", article: "/blog/calendario-editorial-b2b", amount: "$4,500 USD", stage: "Closed Won" },
                        { deal: "Consultoría de AEO para ChatGPT", company: "Tech Retail", article: "/blog/herramientas-ia-redaccion-b2b", amount: "$6,000 USD", stage: "En Negociación" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-[var(--muted)]/50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-[var(--foreground)]">{row.deal}</td>
                          <td className="px-6 py-4 text-xs font-mono">{row.company}</td>
                          <td className="px-6 py-4 text-xs font-mono text-[var(--primary)]">{row.article}</td>
                          <td className="px-6 py-4 font-bold text-emerald-500">{row.amount}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${row.stage.includes('Won') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                              {row.stage}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

            {/* TAB 1: AEO / GEO SHARE OF VOICE (MOTOR DE CITACIONES EN IAS) */}
            {activeTab === 'aiShareOfVoice' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1 flex items-center">
                      <SparklesIcon className="w-6 h-6 text-[var(--primary)] mr-2" />
                      AEO & GEO Share of Voice (Visibilidad en IAs)
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Monitorea en tiempo real qué porcentaje de veces tu marca es citada por ChatGPT, Perplexity y Claude.</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors cursor-pointer shadow-sm">
                      Programar Sondeo Diario
                    </button>
                    <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)] cursor-pointer">
                      + Ejecutar Sondeo (25 Consultas)
                    </button>
                  </div>
                </div>

                {/* KPI Cards AI Engine */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="glass-card p-6 border-t-2 border-t-[var(--primary)]">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-1">AI Share of Voice Total</p>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-3xl font-bold">42.8%</span>
                      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                        #1 en el nicho
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-3">Superando a AcmeCorp (28.4%)</p>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-cyan-500">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-1">Perplexity Pro</p>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-3xl font-bold">68%</span>
                      <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                        17 de 25
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-3">Citado como fuente recomendada</p>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-emerald-500">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-1">ChatGPT Plus (Search)</p>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-3xl font-bold">36%</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        9 de 25
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-3">Citado en respuestas de comparativas</p>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-amber-500">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-1">Claude 3.5 Sonnet</p>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-3xl font-bold">24%</span>
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                        6 de 25
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-3">Oportunidad de optimización en guías</p>
                  </div>
                </div>

                {/* Comparativa Tú vs Competencia en IAs */}
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Presencia de Marca en Motores LLM (Tú vs Rivales)</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold text-[var(--primary)]">Tu Marca (Agencia Román)</span>
                        <span className="font-bold">42.8%</span>
                      </div>
                      <div className="w-full bg-[var(--muted)] rounded-full h-3">
                        <div className="bg-[var(--primary)] h-3 rounded-full" style={{ width: '42.8%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold">AcmeCorp</span>
                        <span className="font-bold text-[var(--muted-foreground)]">28.4%</span>
                      </div>
                      <div className="w-full bg-[var(--muted)] rounded-full h-3">
                        <div className="bg-slate-500 h-3 rounded-full" style={{ width: '28.4%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold">GlobalTech</span>
                        <span className="font-bold text-[var(--muted-foreground)]">16.1%</span>
                      </div>
                      <div className="w-full bg-[var(--muted)] rounded-full h-3">
                        <div className="bg-slate-500 h-3 rounded-full" style={{ width: '16.1%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live AI Prompts Audit Table */}
                <div className="glass-card overflow-hidden">
                  <div className="px-6 py-4 border-b border-[var(--border)] flex justify-between items-center">
                    <h3 className="font-semibold text-sm">Consultas de Usuarios Reales Simuladas en IAs</h3>
                    <span className="text-xs text-[var(--muted-foreground)]">Última auditoría: Hoy a las 09:30 AM</span>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--card)] text-[var(--muted-foreground)]">
                      <tr>
                        <th className="px-6 py-3 font-medium">Prompt del Usuario en la IA</th>
                        <th className="px-6 py-3 font-medium">Motor</th>
                        <th className="px-6 py-3 font-medium">Mención Obtenida</th>
                        <th className="px-6 py-3 font-medium">Fuentes Citadas</th>
                        <th className="px-6 py-3 font-medium text-right">Sentimiento</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {[
                        { 
                          prompt: "¿Qué agencia en CDMX es especialista en SEO para empresas B2B?", 
                          engine: "Perplexity", 
                          mention: "Citado en Posición #1", 
                          source: "soyroman.com/casos", 
                          sentiment: "98% Positivo" 
                        },
                        { 
                          prompt: "Comparativa de las mejores empresas de marketing para SaaS en 2026", 
                          engine: "ChatGPT", 
                          mention: "Incluido en Top 3", 
                          source: "LinkedIn + Clutch", 
                          sentiment: "92% Positivo" 
                        },
                        { 
                          prompt: "Especialistas en arquitectura AEO y optimización de Answer Engine", 
                          engine: "Claude", 
                          mention: "Mención Destacada", 
                          source: "soyroman.com/aeo", 
                          sentiment: "95% Positivo" 
                        },
                        { 
                          prompt: "¿Cuánto cobra en promedio una agencia de performance marketing en México?", 
                          engine: "Perplexity", 
                          mention: "No Citado", 
                          source: "blog.acmecorp.com", 
                          sentiment: "Oportunidad" 
                        },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-[var(--muted)]/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-[var(--foreground)]">{row.prompt}</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded text-xs border border-[var(--border)] bg-[var(--muted)] font-semibold">
                              {row.engine}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${row.mention.includes('#1') ? 'bg-emerald-500/10 text-emerald-500' : row.mention.includes('No') ? 'bg-red-500/10 text-red-500' : 'bg-cyan-500/10 text-cyan-400'}`}>
                              {row.mention}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs font-mono text-[var(--muted-foreground)]">{row.source}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`text-xs font-semibold ${row.sentiment.includes('Oportunidad') ? 'text-amber-500' : 'text-emerald-500'}`}>
                              {row.sentiment}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 2: TOPIC CLUSTERS & SILOS DE CONTENIDO */}
            {activeTab === 'clusterMap' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1 flex items-center">
                      <ShareIcon className="w-6 h-6 text-[var(--primary)] mr-2" />
                      Topic Clusters & Silos de Contenido
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Diseña arquitecturas semánticas con una página pilar central y artículos satélite interconectados.</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors cursor-pointer shadow-sm">
                      Exportar Mapa a CSV
                    </button>
                    <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)] cursor-pointer">
                      Sincronizar a WordPress / Webflow
                    </button>
                  </div>
                </div>

                {/* Generator Bar */}
                <div className="glass-card p-4 flex gap-4">
                  <input 
                    type="text" 
                    defaultValue="Marketing de Contenidos para B2B"
                    placeholder="Palabra Clave Pilar o Tema Central..."
                    className="flex-1 bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors text-base"
                  />
                  <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded-lg px-4 py-2 focus:outline-none">
                    <option>Arquitectura: Silo Estricto (Pilar + 6 Satélites)</option>
                    <option>Arquitectura: Web Semántica Radial</option>
                  </select>
                  <button className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors cursor-pointer shadow-sm">
                    Generar Silo con IA
                  </button>
                </div>

                {/* PILLAR PAGE CARD (CENTRAL NODE) */}
                <div className="glass-card p-6 border-l-8 border-l-[var(--primary)] relative overflow-hidden">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold px-3 py-1 rounded-full border border-[var(--primary)]/30">
                      NODO PILAR PRINCIPAL (PÁGINA MAESTRA)
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)] font-mono">Volumen Acumulado del Silo: 18,400 / mes</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Guía Definitiva de Marketing de Contenidos B2B (2026)</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    Página extensa (3,500 palabras) orientada a la intención de búsqueda general. Todos los satélites enlazan a este nodo con anchors optimizados.
                  </p>
                  <div className="flex gap-4 text-xs font-mono">
                    <span className="bg-[var(--muted)] px-3 py-1.5 rounded border border-[var(--border)]">URL: /guia-marketing-contenidos-b2b</span>
                    <span className="bg-[var(--muted)] px-3 py-1.5 rounded border border-[var(--border)]">Word Count Objetivo: 3,500</span>
                    <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded border border-emerald-500/30 font-bold">Estado: Publicado (Rank #4)</span>
                  </div>
                </div>

                {/* SATELLITES (CLUSTER NODES GRID) */}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <span className="w-2 h-6 bg-[var(--primary)] rounded mr-2"></span>
                    Satélites Especializados Conectados (6 Artículos Secundarios)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Cómo crear un calendario editorial B2B",
                        url: "/blog/calendario-editorial-b2b",
                        anchor: "estrategia de marketing de contenidos",
                        kd: 18,
                        vol: "1,400",
                        intent: "Informativa"
                      },
                      {
                        title: "Métricas y KPIs de content marketing para directores",
                        url: "/blog/kpis-content-marketing",
                        anchor: "medición de marketing de contenidos",
                        kd: 24,
                        vol: "2,100",
                        intent: "Transaccional"
                      },
                      {
                        title: "Estrategias de distribución multicanal: de blog a LinkedIn",
                        url: "/blog/distribucion-multicanal-b2b",
                        anchor: "distribución de contenidos B2B",
                        kd: 32,
                        vol: "920",
                        intent: "Comercial"
                      },
                      {
                        title: "Auditoría de contenidos paso a paso (Plantilla gratuita)",
                        url: "/blog/auditoria-de-contenidos",
                        anchor: "optimización de contenido pilar",
                        kd: 21,
                        vol: "1,800",
                        intent: "Guía Práctica"
                      },
                      {
                        title: "Storytelling y casos de éxito en ventas complejas",
                        url: "/blog/storytelling-b2b-ventas",
                        anchor: "narrativas en marketing de contenidos",
                        kd: 14,
                        vol: "650",
                        intent: "Inspiracional"
                      },
                      {
                        title: "Herramientas de IA y RAG para equipos editoriales",
                        url: "/blog/herramientas-ia-redaccion-b2b",
                        anchor: "producción asistida por IA",
                        kd: 41,
                        vol: "3,400",
                        intent: "Comercial"
                      },
                    ].map((sat, i) => (
                      <div key={i} className="glass-card p-5 flex flex-col justify-between hover:border-[var(--primary)] transition-all group">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] uppercase font-bold text-[var(--muted-foreground)] bg-[var(--muted)] px-2 py-0.5 rounded border border-[var(--border)]">
                              Satélite #{i+1}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${sat.kd > 30 ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                              KD {sat.kd}
                            </span>
                          </div>
                          <h4 className="font-bold text-base mb-2 group-hover:text-[var(--primary)] transition-colors">{sat.title}</h4>
                          <p className="text-xs font-mono text-[var(--muted-foreground)] mb-3">{sat.url}</p>
                        </div>

                        <div className="border-t border-[var(--border)] pt-3 space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-[var(--muted-foreground)]">Volumen:</span>
                            <span className="font-mono font-semibold">{sat.vol} / mes</span>
                          </div>
                          <div className="bg-[var(--card)] p-2 rounded border border-[var(--border)]">
                            <span className="text-[10px] text-[var(--muted-foreground)] block">Anchor Text Hacia el Pilar:</span>
                            <span className="font-semibold text-[var(--primary)]">"{sat.anchor}"</span>
                          </div>
                          <button className="w-full mt-2 bg-[var(--muted)] hover:bg-[var(--primary)] hover:text-white py-1.5 rounded transition-colors text-xs font-medium cursor-pointer">
                            Generar Esquema con IA
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* INTERNAL LINKING RULES */}
                <div className="glass-card p-6 border-t-2 border-t-emerald-500">
                  <h4 className="font-bold text-sm mb-2 text-emerald-500">Reglas Automatizadas de Interlinking para este Silo</h4>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    1. Cada satélite transfiere autoridad al <strong>Nodo Pilar</strong> mediante exactamente 1 enlace contextual en los primeros 3 párrafos.<br />
                    2. Los satélites tienen enlaces cruzados a exactamente 2 satélites hermanos del mismo silo temático.<br />
                    3. Ningún satélite enlaza hacia satélites de otros temas para evitar fugas de PageRank y preservar la relevancia semántica pura.
                  </p>
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
