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
  CheckCircleIcon,
  CommandLineIcon,
  EyeIcon,
  ChevronDownIcon,
  XMarkIcon,
  PencilSquareIcon,
  PlusIcon,
  MapPinIcon,
  PlayIcon,
  PauseIcon,
  ArrowTopRightOnSquareIcon,
  AdjustmentsHorizontalIcon,
  CheckIcon,
  ShieldCheckIcon,
  PresentationChartLineIcon,
  BriefcaseIcon,
  ServerStackIcon,
  ArrowDownTrayIcon,
  LinkIcon,
  KeyIcon,
  FunnelIcon,
  TableCellsIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('overview');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentWorkspace, setCurrentWorkspace] = useState('soyroman.com');
  const [isWorkspaceDropdownOpen, setIsWorkspaceDropdownOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCanvasModalOpen, setIsCanvasModalOpen] = useState(false);
  const [selectedArticleTitle, setSelectedArticleTitle] = useState('Cómo alinear Marketing y Ventas en HubSpot para reducir el ciclo de cierre');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Nuevas capacidades UX/UI de alto impacto
  const [engineViewMode, setEngineViewMode] = useState<'form' | 'flowCanvas'>('flowCanvas');
  const [selectedFlowStep, setSelectedFlowStep] = useState<string | null>('synthesizer');
  const [selectedAgent, setSelectedAgent] = useState<'sophia' | 'jax' | 'vera' | null>(null);
  const [isExecutiveMode, setIsExecutiveMode] = useState(false);
  const [activeGeoRegion, setActiveGeoRegion] = useState<'cdmx' | 'mty' | 'gdl' | 'bogota' | 'madrid' | 'miami'>('cdmx');
  const [editorMode, setEditorMode] = useState<'visual' | 'markdown'>('visual');
  const [aiSimTab, setAiSimTab] = useState<'perplexity' | 'chatgpt' | 'google'>('perplexity');
  const [isQuickScanModalOpen, setIsQuickScanModalOpen] = useState(false);
  const [quickScanInput, setQuickScanInput] = useState('');
  const [isScanningUrl, setIsScanningUrl] = useState(false);
  const [quickScanReport, setQuickScanReport] = useState<{ url: string; score: number; aeo: string; issues: string[] } | null>(null);

  // Estados para Conectores CMS Oficiales (Payload & WordPress)
  const [cmsTab, setCmsTab] = useState<'payload' | 'wordpress'>('payload');
  const [payloadVersion, setPayloadVersion] = useState<'v3' | 'v2'>('v3');
  const [wpMode, setWpMode] = useState<'plugin' | 'rest'>('plugin');
  const [isTestingPayload, setIsTestingPayload] = useState(false);
  const [payloadTestResult, setPayloadTestResult] = useState<{ status: string; latency: string; collections: string[]; message: string } | null>(null);
  const [isTestingWp, setIsTestingWp] = useState(false);
  const [wpTestResult, setWpTestResult] = useState<{ status: string; latency: string; user: string; seoPlugin: string; message: string } | null>(null);

  // Estados para Data Enrichment & HubSpot Hygiene Studio
  const [enrichmentView, setEnrichmentView] = useState<'results' | 'cleanseRules' | 'upload'>('results');
  const [isEnrichingActive, setIsEnrichingActive] = useState(false);
  const [filterLeadStatus, setFilterLeadStatus] = useState<'all' | 'clean' | 'enriched' | 'duplicate'>('all');
  const [enableWebScraping, setEnableWebScraping] = useState(true);
  const [enableHubspotHygiene, setEnableHubspotHygiene] = useState(true);
  const [enableDeduplication, setEnableDeduplication] = useState(true);
  const [leadsData, setLeadsData] = useState([
    {
      id: 1,
      rawName: 'JUAN CARLOS PEREZ',
      cleanName: 'Juan Carlos Pérez',
      email: 'j.perez@conektamx.com',
      companyRaw: 'conekta sa de cv',
      companyClean: 'Conekta',
      domain: 'conekta.com',
      industry: 'Fintech & Pasarelas de Pago',
      employees: '201-500 empleados',
      hq: 'Ciudad de México, MX',
      techStack: ['HubSpot CRM', 'Stripe', 'Next.js', 'PostgreSQL'],
      status: 'clean',
      qualityScore: 98,
      hubspotSync: 'Listo para Exportar'
    },
    {
      id: 2,
      rawName: 'mariana l.',
      cleanName: 'Mariana López',
      email: 'mariana.lopez@kavak.com',
      companyRaw: 'KAVAK.COM/',
      companyClean: 'Kavak',
      domain: 'kavak.com',
      industry: 'E-commerce Automotriz & Retail Tech',
      employees: '1,000+ empleados',
      hq: 'Guadalajara / CDMX',
      techStack: ['HubSpot Enterprise', 'Segment', 'AWS', 'Salesforce'],
      status: 'clean',
      qualityScore: 99,
      hubspotSync: 'Listo para Exportar'
    },
    {
      id: 3,
      rawName: 'CARLOS SILVA!!!',
      cleanName: 'Carlos Silva',
      email: 'carlos@acme-logistica.mx',
      companyRaw: 'http://www.acme-logistica.mx',
      companyClean: 'Acme Logística',
      domain: 'acme-logistica.mx',
      industry: 'Logística & Cadena de Suministro',
      employees: '51-200 empleados',
      hq: 'Monterrey, NL',
      techStack: ['WordPress', 'Google Analytics 4', 'WooCommerce'],
      status: 'enriched',
      qualityScore: 92,
      hubspotSync: 'Enriquecido con Web Scraping'
    },
    {
      id: 4,
      rawName: 'ventas@logistica-norte.com',
      cleanName: 'Contacto Corporativo',
      email: 'ventas@logistica-norte.com',
      companyRaw: 'LOGISTICA NORTE',
      companyClean: 'Logística Norte',
      domain: 'logistica-norte.com',
      industry: 'Transporte de Carga Pesada',
      employees: '11-50 empleados',
      hq: 'Querétaro, MX',
      techStack: ['Shopify', 'Klaviyo'],
      status: 'duplicate',
      qualityScore: 81,
      hubspotSync: 'Fusionado por Dominio Idéntico'
    },
    {
      id: 5,
      rawName: 'DRA. SOFIA MENDEZ',
      cleanName: 'Sofía Méndez',
      email: 'sofia.m@healthtech-latam.io',
      companyRaw: 'HealthTech Latam SAPI',
      companyClean: 'HealthTech Latam',
      domain: 'healthtech-latam.io',
      industry: 'Salud Digital & Telemedicina',
      employees: '11-50 empleados',
      hq: 'Bogotá / CDMX',
      techStack: ['HubSpot Growth Suite', 'Supabase', 'Vercel'],
      status: 'clean',
      qualityScore: 97,
      hubspotSync: 'Listo para Exportar'
    }
  ]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('mkt_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
        setIsCanvasModalOpen(false);
        setIsNotificationsOpen(false);
        setIsWorkspaceDropdownOpen(false);
        setSelectedAgent(null);
        setIsQuickScanModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleQuickScan = () => {
    if (!quickScanInput) return;
    setIsScanningUrl(true);
    setQuickScanReport(null);
    setTimeout(() => {
      setIsScanningUrl(false);
      setQuickScanReport({
        url: quickScanInput,
        score: 88,
        aeo: 'Alta Citabilidad en Perplexity & ChatGPT',
        issues: [
          'Estructura de respuesta directa presente (Párrafo 1)',
          'Falta marcado FAQPage Schema JSON-LD',
          '2 competidores (hubspot.es, forbes.com) superan en citas para este cluster'
        ]
      });
    }, 1200);
  };

  const handleTestPayload = () => {
    setIsTestingPayload(true);
    setPayloadTestResult(null);
    setTimeout(() => {
      setIsTestingPayload(false);
      setPayloadTestResult({
        status: '200 OK - Conectado',
        latency: '84ms',
        collections: ['posts (Activo)', 'media', 'categories', 'users'],
        message: 'Handshake exitoso. Payload CMS aceptará borradores generados por Agente Vera.'
      });
    }, 900);
  };

  const handleTestWp = () => {
    setIsTestingWp(true);
    setWpTestResult(null);
    setTimeout(() => {
      setIsTestingWp(false);
      setWpTestResult({
        status: '200 OK - Vinculado',
        latency: '115ms',
        user: 'Buildations Engine (Rol: Editor / Author)',
        seoPlugin: 'Rank Math SEO detectado y mapeado',
        message: 'Plugin oficial emparejado. Los artículos se publicarán automáticamente como borradores pendientes.'
      });
    }, 900);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('mkt_theme', nextTheme);
  };

  return (
    <div data-theme={theme} className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--background)] flex flex-col hidden md:flex transition-colors duration-200">
        {/* Brand Header with Industrial Logo */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-[var(--border)] relative overflow-hidden bg-gradient-to-r from-transparent via-[var(--primary)]/5 to-transparent">
          {/* Subtle industrial laser sweep line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60"></div>
          
          <div className="flex items-center gap-3">
            {/* Custom Industrial Geometric Monogram Logo */}
            <div className="relative w-9 h-9 rounded-lg bg-[var(--card)] border border-[var(--border)] p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(255,90,0,0.25)] group hover:border-[var(--primary)] transition-all">
              <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
                {/* Industrial Hex/Block Grid Nodes */}
                <rect x="3" y="3" width="13" height="13" rx="2.5" fill="#ff5a00" className="transition-transform group-hover:scale-95 origin-top-left" />
                <rect x="20" y="3" width="13" height="13" rx="2.5" fill="currentColor" fillOpacity="0.15" stroke="#ff5a00" strokeWidth="1.5" />
                <rect x="3" y="20" width="13" height="13" rx="2.5" fill="currentColor" fillOpacity="0.08" stroke="#ff5a00" strokeWidth="1.5" strokeDasharray="2 2" />
                <rect x="20" y="20" width="13" height="13" rx="2.5" fill="#ff5a00" className="transition-transform group-hover:scale-95 origin-bottom-right" />
                <circle cx="9.5" cy="9.5" r="2" fill="#ffffff" />
                <circle cx="26.5" cy="26.5" r="2" fill="#ffffff" />
                {/* Connecting Micro-Traces */}
                <path d="M16 9.5H20M9.5 16V20M26.5 16V20M16 26.5H20" stroke="#ff5a00" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-[var(--card)] animate-pulse"></span>
            </div>

            <div>
              <h1 className="font-extrabold text-sm tracking-wider leading-none">
                BUILDATIONS
              </h1>
              <span className="text-[10px] font-mono tracking-widest text-[var(--primary)] font-black uppercase flex items-center gap-1 mt-0.5">
                STUDIO <span className="text-[8px] px-1 py-0.2 rounded bg-[var(--primary)]/15 border border-[var(--primary)]/30 font-bold">CORE</span>
              </span>
            </div>
          </div>

          <div className="w-2 h-2 rounded-full bg-[var(--primary)]/30 animate-pulse-glow" title="Industrial Telemetry: Operational"></div>
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
              <button 
                onClick={() => setActiveTab('cmsConnectors')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'cmsConnectors' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <ServerStackIcon className="w-5 h-5 mr-3 text-cyan-400" /> Conectores CMS (Payload/WP)
              </button>
              <button 
                onClick={() => setActiveTab('dataEnrichment')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'dataEnrichment' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <FunnelIcon className="w-5 h-5 mr-3 text-emerald-400" /> Enriquecedor &amp; Limpieza B2B
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Ingeniería Semántica &amp; Búsqueda</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('aiShareOfVoice')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'aiShareOfVoice' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <SparklesIcon className="w-5 h-5 mr-3" /> Radar de Citación &amp; Semáforo AEO
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

          {/* Industrial Status Widget */}
          <div className="mx-2 p-3 rounded-xl bg-gradient-to-b from-[var(--card)] to-[var(--background)] border border-[var(--border)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary)]/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                KERNEL ONLINE
              </span>
              <span className="text-[9px] font-mono text-[var(--primary)] font-bold">99.98%</span>
            </div>
            <div className="w-full bg-[var(--muted)] h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--primary)] to-amber-400 h-full w-[94%] rounded-full animate-pulse"></div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-[var(--border)] flex items-center justify-between text-[10px] text-[var(--muted-foreground)]">
              <span>Cluster Mesh</span>
              <a 
                href="/ruta-no-existente-test-404" 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] font-mono text-[var(--primary)] hover:underline flex items-center gap-0.5"
                title="Probar pantalla 404 de diseño industrial"
              >
                Test 404 ↗
              </a>
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
        <header className="h-16 border-b border-[var(--border)] flex items-center justify-between px-8 bg-[var(--background)]/80 backdrop-blur-md z-20 transition-colors duration-200">
          <div className="flex items-center text-sm font-medium text-[var(--muted-foreground)]">
            
            {/* Workspace Selector Dropdown */}
            <div className="relative mr-4">
              <button 
                onClick={() => setIsWorkspaceDropdownOpen(!isWorkspaceDropdownOpen)}
                className="flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--foreground)] px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Workspace: <strong className="text-[var(--foreground)]">{currentWorkspace}</strong></span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
              </button>

              {isWorkspaceDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-2xl p-2 z-50 animate-fade-in">
                  <p className="px-2 py-1 text-[10px] font-bold uppercase text-[var(--muted-foreground)]">Tus Proyectos Activos</p>
                  {['soyroman.com', 'fintechmx.io', 'agencia-growth.com'].map((ws) => (
                    <button 
                      key={ws}
                      onClick={() => {
                        setCurrentWorkspace(ws);
                        setIsWorkspaceDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${currentWorkspace === ws ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-bold' : 'hover:bg-[var(--muted)] text-[var(--foreground)]'}`}
                    >
                      <span>{ws}</span>
                      {currentWorkspace === ws && <span className="text-xs">✓</span>}
                    </button>
                  ))}
                  <div className="border-t border-[var(--border)] mt-1 pt-1">
                    <button 
                      onClick={() => {
                        alert('Formulario para conectar nuevo dominio o CMS.');
                        setIsWorkspaceDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-[var(--primary)] font-bold hover:bg-[var(--muted)] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <PlusIcon className="w-3.5 h-3.5" /> + Vincular Nuevo Sitio
                    </button>
                  </div>
                </div>
              )}
            </div>

            <span className="text-[var(--border)] hidden sm:inline">|</span>
            <span className="mx-2 hidden sm:inline">Sección:</span>
            <span className="text-[var(--foreground)] font-semibold capitalize hidden sm:inline">
              {activeTab
                .replace('engineLauncher', 'Lanzador y Configurador de Motor SEO/AEO')
                .replace('revopsHubspot', 'Motor RevOps & Conexión HubSpot')
                .replace('cmsConnectors', 'Conectores CMS Oficiales (Payload & WordPress)')
                .replace('dataEnrichment', 'Enriquecedor de Datos & Limpieza B2B (HubSpot Best Practices)')
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
          
          <div className="flex items-center space-x-2.5">
            {/* Semáforos de Procesos Sinergizados con la Marca */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)]/80 backdrop-blur-md border border-[var(--border)] shadow-sm">
              <span className="text-[10px] font-mono font-bold uppercase text-[var(--muted-foreground)] mr-0.5">Semáforo:</span>
              <button 
                onClick={() => setSelectedAgent('sophia')}
                className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold cursor-pointer transition-all ${selectedAgent === 'sophia' ? 'bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/40 shadow-[0_0_10px_rgba(255,90,0,0.25)]' : 'hover:bg-[var(--muted)] text-[var(--foreground)] border border-transparent'}`}
                title="Rastreo SERP: Calibrado y Operativo"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(255,90,0,0.8)]"></span>
                <span>Crawler SERP</span>
                <span className="text-[8px] px-1 rounded bg-[var(--primary)]/20 text-[var(--primary)] font-bold">ACTIVO</span>
              </button>
              <button 
                onClick={() => setSelectedAgent('jax')}
                className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold cursor-pointer transition-all ${selectedAgent === 'jax' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'hover:bg-[var(--muted)] text-[var(--foreground)] border border-transparent'}`}
                title="Sync RevOps HubSpot: Sincronizado"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                <span>Sync HubSpot</span>
                <span className="text-[8px] px-1 rounded bg-amber-500/20 text-amber-300 font-bold">VINCULADO</span>
              </button>
              <button 
                onClick={() => setSelectedAgent('vera')}
                className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold cursor-pointer transition-all ${selectedAgent === 'vera' ? 'bg-orange-500/15 text-orange-400 border border-orange-500/40 shadow-[0_0_10px_rgba(251,146,60,0.2)]' : 'hover:bg-[var(--muted)] text-[var(--foreground)] border border-transparent'}`}
                title="Motor Editorial AEO: En Proceso de Síntesis"
              >
                <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)] animate-pulse"></span>
                <span>Motor AEO</span>
                <span className="text-[8px] px-1 rounded bg-orange-500/20 text-orange-300 font-bold">COMPILANDO</span>
              </button>
            </div>

            {/* Executive vs Technical View Switch */}
            <button
              onClick={() => setIsExecutiveMode(!isExecutiveMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-sm transition-all cursor-pointer ${isExecutiveMode ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] font-bold' : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--foreground)] text-[var(--muted-foreground)]'}`}
              title="Cambiar entre Vista Técnica y Portal Ejecutivo para Clientes"
            >
              <PresentationChartLineIcon className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{isExecutiveMode ? 'Vista Ejecutiva C-Level' : 'Vista Técnica'}</span>
            </button>

            <button 
              onClick={() => setIsCommandPaletteOpen(true)}
              className="hidden md:flex items-center justify-between bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-full pl-3 pr-2 py-1.5 text-xs transition-all w-48 sm:w-56 cursor-pointer shadow-sm group"
            >
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon className="w-3.5 h-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]" />
                <span className="truncate">Buscar acción o silo...</span>
              </div>
              <kbd className="bg-[var(--muted)] text-[10px] font-mono px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted-foreground)]">⌘K</kbd>
            </button>

            {/* Consola Kernel Monitor Button */}
            <button
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-sm cursor-pointer transition-all ${isTerminalOpen ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-[var(--border)] bg-[var(--card)] hover:border-emerald-500 text-[var(--foreground)]'}`}
              title="Abrir Consola Kernel de Procesos"
            >
              <CommandLineIcon className="w-4 h-4 text-emerald-500" />
              <span className="hidden lg:inline font-mono">Consola Kernel</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            </button>

            {/* Day / Night Theme Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)] transition-all text-xs font-semibold shadow-sm cursor-pointer"
              title={theme === 'dark' ? 'Cambiar a Modo Día' : 'Cambiar a Modo Noche'}
            >
              {theme === 'dark' ? (
                <>
                  <SunIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-[var(--foreground)] hidden sm:inline">Día</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-4 h-4 text-indigo-500" />
                  <span className="text-[var(--foreground)] hidden sm:inline">Noche</span>
                </>
              )}
            </button>

            {/* Notification Center Trigger */}
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-colors cursor-pointer"
                title="Notificaciones y Alertas Autónomas"
              >
                <BellIcon className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--primary)] rounded-full border border-[var(--background)] animate-pulse"></span>
              </button>

              {/* Notification Center Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xl p-4 z-50 animate-fade-in text-xs space-y-3">
                  <div className="flex justify-between items-center border-b border-[var(--border)] pb-2">
                    <span className="font-bold text-sm">Centro de Alertas Autónomas</span>
                    <span className="text-[10px] bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded font-bold">3 Nuevas</span>
                  </div>

                  <div className="space-y-2.5 max-h-72 overflow-y-auto">
                    <div className="p-3 rounded-xl bg-[var(--background)]/70 backdrop-blur-md border border-[var(--primary)]/30 space-y-1 hover:border-[var(--primary)]/50 transition-colors shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[var(--primary)] text-[11px] flex items-center gap-1.5 font-mono">
                          <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_6px_rgba(255,90,0,0.6)]"></span> Borrador Editorial Compilado
                        </span>
                        <span className="text-[10px] text-[var(--muted-foreground)]">Hace 12 min</span>
                      </div>
                      <p className="text-[var(--foreground)]">El motor sintetizó el contenido: <strong>"Cómo alinear MQLs en HubSpot"</strong>.</p>
                      <button 
                        onClick={() => {
                          setIsNotificationsOpen(false);
                          setIsCanvasModalOpen(true);
                        }}
                        className="text-[10px] font-bold text-[var(--primary)] hover:underline pt-1 block"
                      >
                        Abrir en Editor Canvas →
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--background)]/70 backdrop-blur-md border border-amber-500/25 space-y-1 hover:border-amber-500/40 transition-colors shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-amber-400 text-[11px] flex items-center gap-1.5 font-mono">
                          <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.6)]"></span> Disparador de Citación AEO
                        </span>
                        <span className="text-[10px] text-[var(--muted-foreground)]">Hace 1 hora</span>
                      </div>
                      <p className="text-[var(--foreground)]">Consultas sobre <em>"auditoría revops cdmx"</em> detectadas en motores de respuesta. Te sugerimos publicar un satélite.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--background)]/70 backdrop-blur-md border border-[var(--border)] space-y-1 hover:border-zinc-700 transition-colors shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-zinc-300 text-[11px] flex items-center gap-1.5 font-mono">
                          <span className="w-2 h-2 rounded-full bg-zinc-400 shadow-[0_0_6px_rgba(255,255,255,0.4)]"></span> Sincronización HubSpot OK
                        </span>
                        <span className="text-[10px] text-[var(--muted-foreground)]">Hace 3 horas</span>
                      </div>
                      <p className="text-[var(--foreground)]">Nuevo MQL registrado desde el cluster de Marketing de Contenidos.</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[var(--border)] text-center">
                    <button 
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-[11px] font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    >
                      Marcar todas como leídas
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto animate-fade-in space-y-6">
            
            {/* MODO EJECUTIVO CLIENT PORTAL (WHITE-LABEL C-LEVEL) */}
            {isExecutiveMode && (
              <div className="glass-card p-6 border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--card)] via-[var(--background)] to-[var(--card)] space-y-6 shadow-2xl animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,90,0,0.4)]">
                      <BriefcaseIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded border border-[var(--primary)]/20">
                          WHITE-LABEL CLIENT PORTAL
                        </span>
                        <span className="text-xs text-[var(--muted-foreground)]">Reporte de Desempeño Ejecutivo</span>
                      </div>
                      <h2 className="text-xl font-black text-[var(--foreground)]">
                        Impacto Comercial &amp; Revenue de Contenido: <span className="text-[var(--primary)]">{currentWorkspace}</span>
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => alert('Generando informe ejecutivo PDF formal para el cliente con sellos y métricas...')}
                      className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_12px_rgba(255,90,0,0.35)] cursor-pointer flex items-center gap-1.5"
                    >
                      <DocumentTextIcon className="w-4 h-4" /> Exportar Informe PDF (C-Level)
                    </button>
                    <button 
                      onClick={() => setIsExecutiveMode(false)}
                      className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-3 py-2 rounded-lg text-xs font-semibold hover:bg-[var(--muted)] transition-colors cursor-pointer"
                    >
                      Salir de Vista Ejecutiva
                    </button>
                  </div>
                </div>

                {/* 4 Executive KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[var(--muted-foreground)]">Pipeline Generado (HubSpot)</span>
                    <p className="text-2xl font-black text-emerald-500">$148,200 USD</p>
                    <span className="text-[11px] text-[var(--muted-foreground)]">12 deals comerciales calificados</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[var(--muted-foreground)]">Tráfico Orgánico &amp; AEO</span>
                    <p className="text-2xl font-black text-[var(--foreground)]">42,850 / mes</p>
                    <span className="text-[11px] text-emerald-500 font-bold">↑ +142% vs trimestre anterior</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[var(--muted-foreground)]">Dominio de Citación IA</span>
                    <p className="text-2xl font-black text-purple-400">64.2% Share</p>
                    <span className="text-[11px] text-[var(--muted-foreground)]">Top 1 en ChatGPT y Perplexity</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[var(--muted-foreground)]">Ahorro en Pauta (Google Ads)</span>
                    <p className="text-2xl font-black text-cyan-400">$31,400 USD</p>
                    <span className="text-[11px] text-[var(--muted-foreground)]">Equivalente a 14,000 clics PPC</span>
                  </div>
                </div>

                {/* Top Converting Articles Summary */}
                <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                    Top 3 Artículos con Mayor Impacto Comercial &amp; Cierre de Ventas
                  </h4>
                  <div className="divide-y divide-[var(--border)] text-xs">
                    <div className="py-2.5 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[var(--foreground)]">Cómo alinear Marketing y Ventas en HubSpot CRM</p>
                        <p className="text-[11px] text-[var(--muted-foreground)]">Silo: RevOps &amp; CRM • 6 deals originados</p>
                      </div>
                      <span className="font-bold text-emerald-500 font-mono">$64,000 USD Pipeline</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[var(--foreground)]">Estrategias de Optimización AEO para B2B en México</p>
                        <p className="text-[11px] text-[var(--muted-foreground)]">Silo: AEO &amp; AI Search • 4 deals originados</p>
                      </div>
                      <span className="font-bold text-emerald-500 font-mono">$52,200 USD Pipeline</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[var(--foreground)]">Automatización de SLAs Comerciales para Equipos de Ventas</p>
                        <p className="text-[11px] text-[var(--muted-foreground)]">Silo: Ventas &amp; Productividad • 2 deals originados</p>
                      </div>
                      <span className="font-bold text-emerald-500 font-mono">$32,000 USD Pipeline</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                {/* Industrial Status Header & Engine Telemetry Banner */}
                <div className="relative rounded-2xl border border-[var(--border)] bg-gradient-to-r from-[var(--card)] via-[var(--background)] to-[var(--card)] p-5 overflow-hidden shadow-xl">
                  {/* Subtle Industrial Grid Pattern */}
                  <div className="absolute inset-0 bg-industrial-grid pointer-events-none opacity-40"></div>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Active Spinning Reactor / Core Graphic */}
                      <div className="relative w-12 h-12 rounded-xl bg-black/40 border border-[var(--border)] flex items-center justify-center p-2.5 shadow-inner">
                        <div className="absolute inset-0 rounded-xl border border-[var(--primary)]/30 animate-pulse"></div>
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[var(--primary)]">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: '8s' }} />
                          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded border border-[var(--primary)]/20">
                            BUILDATIONS ENGINE v2.4 // TELEMETRÍA INDUSTRIAL
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> ONLINE
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[var(--foreground)]">
                          Centro de Comando de Posicionamiento &amp; RevOps
                        </h2>
                        <p className="text-[var(--muted-foreground)] text-xs sm:text-sm mt-0.5">
                          Monitoreo de clusters semánticos, agentes sintéticos y atribución de deals en HubSpot.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-[var(--background)]/80 border border-[var(--border)] text-xs font-mono">
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[var(--muted-foreground)]">Latencia Mesh</p>
                          <p className="font-bold text-emerald-400">18ms (OK)</p>
                        </div>
                        <div className="h-6 w-[1px] bg-[var(--border)]"></div>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[var(--muted-foreground)]">HubSpot Sync</p>
                          <p className="font-bold text-zinc-300">Hub #982104</p>
                        </div>
                        <div className="h-6 w-[1px] bg-[var(--border)]"></div>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[var(--muted-foreground)]">Crawlers Activos</p>
                          <p className="font-bold text-[var(--primary)]">3 Agentes</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => setIsTerminalOpen(true)}
                        className="px-3.5 py-2 rounded-xl bg-[var(--card)] hover:bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                      >
                        <CommandLineIcon className="w-4 h-4 text-emerald-400" />
                        <span>Ver Traza</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-lg font-bold">Métricas Clave de Rendimiento</h3>
                    <p className="text-[var(--muted-foreground)] text-xs">Visibilidad orgánica, distribución en el Top 3 y tracción en motores generativos (AEO).</p>
                  </div>
                  <button className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[var(--muted)] transition-colors cursor-pointer shadow-sm">
                    Exportar Reporte
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 border-t-2 border-t-[var(--primary)]">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2">Visibilidad Global</p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">84.2%</span>
                      <span className="text-xs font-mono font-bold text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20 px-2 py-0.5 rounded flex items-center">
                        <ArrowTrendingUpIcon className="w-3 h-3 mr-1" /> +12.4%
                      </span>
                    </div>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-amber-500/80">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2">Keywords en Top 3</p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">342</span>
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded flex items-center">
                        <ArrowTrendingUpIcon className="w-3 h-3 mr-1" /> +8
                      </span>
                    </div>
                  </div>

                  <div className="glass-card p-6 border-t-2 border-t-[var(--primary)]">
                    <p className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider font-semibold mb-2 flex items-center justify-between">
                      <span>Semáforo de Citabilidad &amp; AEO</span>
                      <span className="flex items-center gap-1 font-mono text-[10px] text-[var(--primary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_6px_rgba(255,90,0,0.8)]"></span> Calibrado
                      </span>
                    </p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">91/100</span>
                      <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded">
                        Grado A+ (Top 1)
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
                <div className="flex flex-wrap justify-between items-end gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-2xl font-bold flex items-center">
                        <RocketLaunchIcon className="w-7 h-7 text-amber-500 mr-2" />
                        Lanzador & Configurador de Motor Generativo (SEO / AEO)
                      </h2>
                      <span className="text-xs bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                        V2.4 Autopiloto
                      </span>
                    </div>
                    <p className="text-[var(--muted-foreground)] text-sm">
                      Configura el agente autónomo que se conectará a tu sitio web para planificar, redactar y publicar contenido optimizado para Google y Motores de IA.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* View Switcher: Flow Canvas vs Form */}
                    <div className="flex items-center gap-1 bg-[var(--card)] p-1 rounded-xl border border-[var(--border)] shadow-sm">
                      <button 
                        onClick={() => setEngineViewMode('flowCanvas')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${engineViewMode === 'flowCanvas' ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.35)]' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                      >
                        <ShareIcon className="w-3.5 h-3.5" /> Pipeline Visual (Nodos)
                      </button>
                      <button 
                        onClick={() => setEngineViewMode('form')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${engineViewMode === 'form' ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.35)]' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                      >
                        <AdjustmentsHorizontalIcon className="w-3.5 h-3.5" /> Parámetros & Formulario
                      </button>
                    </div>

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

                {/* MODO 1: MOTOR FLOW CANVAS (PIPELINE VISUAL DE NODOS) */}
                {engineViewMode === 'flowCanvas' && (
                  <div className="space-y-6">
                    <div className="glass-card p-6 space-y-6 border border-[var(--border)]">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                        <div>
                          <h3 className="text-lg font-bold flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            Lienzo Visual del Pipeline Autónomo (Flow Canvas)
                          </h3>
                          <p className="text-xs text-[var(--muted-foreground)]">
                            Haz clic en cualquier nodo para inspeccionar sus parámetros en tiempo real, calibrar modelos de IA y ver la telemetría.
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => alert('Simulando ejecución manual de prueba del pipeline completo...')}
                            className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <PlayIcon className="w-3.5 h-3.5" /> Forzar Ciclo de Prueba
                          </button>
                          <span className="text-xs bg-[var(--muted)] text-[var(--muted-foreground)] px-3 py-1.5 rounded-lg font-mono border border-[var(--border)]">
                            Latencia: 420ms
                          </span>
                        </div>
                      </div>

                      {/* Canvas Interactivo con Nodos y Cables SVG */}
                      <div className="relative rounded-2xl p-8 bg-slate-950 border border-slate-800 overflow-x-auto min-h-[380px]">
                        {/* Dot Grid Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(#ff5a00_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>

                        {/* SVG Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minWidth: '900px' }}>
                          {/* Cable 1 -> 2 */}
                          <path 
                            d="M 230 180 C 270 180, 290 180, 330 180" 
                            stroke="#ff5a00" 
                            strokeWidth="2.5" 
                            fill="none" 
                            className="animate-flow-cable"
                          />
                          {/* Cable 2 -> 3 */}
                          <path 
                            d="M 540 180 C 580 180, 600 180, 640 180" 
                            stroke="#a855f7" 
                            strokeWidth="2.5" 
                            fill="none" 
                            className="animate-flow-cable"
                          />
                          {/* Cable 3 -> 4 */}
                          <path 
                            d="M 850 180 C 890 180, 910 180, 950 180" 
                            stroke="#10b981" 
                            strokeWidth="2.5" 
                            fill="none" 
                            className="animate-flow-cable"
                          />
                        </svg>

                        {/* Nodos Interactivos Horizontalmente Distribuidos */}
                        <div className="relative z-10 flex items-center justify-between gap-8 min-w-[950px] py-6">
                          
                          {/* NODO 1: INGESTA & SERP SCOUT */}
                          <div 
                            onClick={() => setSelectedFlowStep('scout')}
                            className={`w-56 p-4 rounded-xl cursor-pointer transition-all border ${selectedFlowStep === 'scout' ? 'bg-slate-900 border-[var(--primary)] shadow-[0_0_25px_rgba(255,90,0,0.35)] scale-105' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'}`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-bold uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                01. Ingesta
                              </span>
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            </div>
                            <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                              <MagnifyingGlassIcon className="w-4 h-4 text-amber-400" /> SERP & Decay Scout
                            </h4>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                              Monitorea 250 keywords y 14 competidores en Google.
                            </p>
                            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                              <span>GSC + Serper API</span>
                              <span className="text-emerald-400 font-bold">250 KW</span>
                            </div>
                          </div>

                          {/* NODO 2: SYNTHESIZER AEO */}
                          <div 
                            onClick={() => setSelectedFlowStep('synthesizer')}
                            className={`w-56 p-4 rounded-xl cursor-pointer transition-all border ${selectedFlowStep === 'synthesizer' ? 'bg-slate-900 border-[var(--primary)] shadow-[0_0_25px_rgba(255,90,0,0.35)] scale-105' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'}`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-bold uppercase text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded border border-[var(--primary)]/30">
                                02. Redacción IA
                              </span>
                              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            </div>
                            <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                              <CpuChipIcon className="w-4 h-4 text-[var(--primary)]" /> AEO Synthesizer
                            </h4>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                              Llama 3.1 8B + Pinecone RAG con Schema JSON-LD.
                            </p>
                            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                              <span>Cloudflare AI</span>
                              <span className="text-[var(--primary)] font-bold">Score 96%</span>
                            </div>
                          </div>

                          {/* NODO 3: ENRIQUECEDOR REVOPS HUBSPOT */}
                          <div 
                            onClick={() => setSelectedFlowStep('revops')}
                            className={`w-56 p-4 rounded-xl cursor-pointer transition-all border ${selectedFlowStep === 'revops' ? 'bg-slate-900 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.35)] scale-105' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'}`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-bold uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                                03. Atribución
                              </span>
                              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                            </div>
                            <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                              <ArrowPathRoundedSquareIcon className="w-4 h-4 text-purple-400" /> RevOps & HubSpot
                            </h4>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                              Inyección de CTAs de alta conversión y UTMs para deals.
                            </p>
                            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                              <span>HubSpot CRM</span>
                              <span className="text-purple-400 font-bold">$38.5k Pipe</span>
                            </div>
                          </div>

                          {/* NODO 4: PUBLICADOR WEBHOOK CMS */}
                          <div 
                            onClick={() => setSelectedFlowStep('publisher')}
                            className={`w-56 p-4 rounded-xl cursor-pointer transition-all border ${selectedFlowStep === 'publisher' ? 'bg-slate-900 border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.35)] scale-105' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'}`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-bold uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                04. Despliegue
                              </span>
                              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            </div>
                            <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                              <RocketLaunchIcon className="w-4 h-4 text-emerald-400" /> Webhook Publisher
                            </h4>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                              Publicación como borrador o live en WordPress / Next.js.
                            </p>
                            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                              <span>REST Webhook</span>
                              <span className="text-emerald-400 font-bold">200 OK</span>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Drawer / Panel de Inspección del Nodo Seleccionado */}
                      <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] transition-all">
                        {selectedFlowStep === 'scout' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                                <MagnifyingGlassIcon className="w-4 h-4 text-amber-500" />
                                Configuración de Ingesta: SERP & Decay Scout
                              </h4>
                              <span className="text-xs bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded font-bold">Frecuencia: Cada 24 Horas</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Umbral de Decadencia GSC</label>
                                <select className="w-full bg-[var(--card)] border border-[var(--border)] rounded p-2 text-[var(--foreground)]">
                                  <option>Caída &gt; 15% en Clics (Últimos 30 días)</option>
                                  <option>Caída &gt; 25% en Impresiones</option>
                                  <option>Pérdida de Posición 1-3 a Posición 4-10</option>
                                </select>
                              </div>
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Competidores a Rastrear</label>
                                <input type="text" defaultValue="forbes.com, hubspot.es, rockcontent.com" className="w-full bg-[var(--card)] border border-[var(--border)] rounded p-2 text-[var(--foreground)]" />
                              </div>
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Acción al Detectar Oportunidad</label>
                                <span className="text-emerald-500 font-bold">Disparar borrador automático en Nodo 02</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedFlowStep === 'synthesizer' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                                <CpuChipIcon className="w-4 h-4 text-[var(--primary)]" />
                                Calibración de Modelo IA: AEO Synthesizer
                              </h4>
                              <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded font-bold">Motor: Llama 3.1 8B Instruct</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Temperatura de Creatividad</label>
                                <div className="flex items-center gap-2">
                                  <input type="range" min="0.1" max="1.0" step="0.1" defaultValue="0.4" className="w-full accent-[var(--primary)]" />
                                  <span className="font-mono font-bold text-[var(--foreground)]">0.4</span>
                                </div>
                                <span className="text-[10px] text-[var(--muted-foreground)] mt-1 block">Precisión alta y hechos contrastados</span>
                              </div>
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Estructura AEO Forzada</label>
                                <div className="space-y-1 text-[11px] text-[var(--foreground)]">
                                  <label className="flex items-center gap-1.5"><input type="checkbox" defaultChecked className="accent-[var(--primary)]" /> Párrafo 1 Respuesta Directa</label>
                                  <label className="flex items-center gap-1.5"><input type="checkbox" defaultChecked className="accent-[var(--primary)]" /> Tabla Comparativa Obligatoria</label>
                                </div>
                              </div>
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Base de Conocimiento (RAG)</label>
                                <p className="text-[11px] text-[var(--muted-foreground)]">Pinecone Index: <strong className="text-[var(--foreground)]">buildations-knowledge</strong> (3,800 vectores)</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedFlowStep === 'revops' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                                <ArrowPathRoundedSquareIcon className="w-4 h-4 text-purple-400" />
                                Parámetros de Atribución RevOps & HubSpot CRM
                              </h4>
                              <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded font-bold">Cuenta: Hub ID #982104</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Pipeline Destino de Deals</label>
                                <select className="w-full bg-[var(--card)] border border-[var(--border)] rounded p-2 text-[var(--foreground)]">
                                  <option>Sales Pipeline (B2B SaaS Deals)</option>
                                  <option>Consulting & Services</option>
                                </select>
                              </div>
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Inyección de CTAs Contextuales</label>
                                <input type="text" defaultValue="Calculadora ROI HubSpot & Demo en Vivo" className="w-full bg-[var(--card)] border border-[var(--border)] rounded p-2 text-[var(--foreground)]" />
                              </div>
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Parámetros UTM Forzados</label>
                                <p className="font-mono text-[10px] text-[var(--foreground)]">utm_source=buildations_aeo&amp;utm_medium=organic_ai</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedFlowStep === 'publisher' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                                <RocketLaunchIcon className="w-4 h-4 text-emerald-400" />
                                Despliegue en Vivo: Webhook Publisher
                              </h4>
                              <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold">Estado: Conectado</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Destino CMS</label>
                                <p className="font-bold text-[var(--foreground)]">WordPress REST API (v2) / Headless</p>
                                <span className="text-[10px] text-[var(--muted-foreground)]">https://soyroman.com/wp-json/wp/v2/posts</span>
                              </div>
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Estado al Publicar</label>
                                <select className="w-full bg-[var(--card)] border border-[var(--border)] rounded p-2 text-[var(--foreground)]">
                                  <option>Borrador (Requiere un click para aprobar)</option>
                                  <option>Publicado Inmediato (100% Autopiloto)</option>
                                </select>
                              </div>
                              <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                                <label className="font-bold text-[var(--muted-foreground)] block mb-1">Respaldo Automático</label>
                                <span className="text-emerald-500 font-bold">Copia sincronizada en GitHub Repo &amp; Supabase</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* MODO 2: FORMULARIO ESTÁNDAR Y AJUSTES */}
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${engineViewMode === 'flowCanvas' ? 'hidden' : ''}`}>
                  
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
                        <button 
                          onClick={() => {
                            setSelectedArticleTitle("Cómo alinear Marketing y Ventas en HubSpot para reducir el ciclo de cierre");
                            setIsCanvasModalOpen(true);
                          }}
                          className="w-full bg-[var(--primary)] text-white py-2 rounded text-xs hover:bg-[var(--primary-hover)] transition-colors cursor-pointer font-bold shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <EyeIcon className="w-4 h-4" /> Previsualizar & Editar Borrador IA
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECCIÓN VISUAL PROFUNDA 1: GRAFO DE CONOCIMIENTO (KNOWLEDGE GRAPH) Y RED DE ENTIDADES */}
                <div className="glass-card p-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                    <div>
                      <h3 className="text-lg font-bold flex items-center">
                        <ShareIcon className="w-5 h-5 text-[var(--primary)] mr-2" />
                        Grafo de Conocimiento & Nodos de Entidades Generadas
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Visualización viva de cómo el motor AEO conecta los conceptos, marcas y términos que la IA inyecta para dominar el Knowledge Graph de Google y Perplexity.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                        36 Nodos Interconectados
                      </span>
                      <span className="text-xs bg-[var(--muted)] px-3 py-1 rounded-full font-mono text-[var(--muted-foreground)]">
                        Densidad Semántica: 94%
                      </span>
                    </div>
                  </div>

                  {/* Lienzo Visual Interactivo del Grafo */}
                  <div className="relative rounded-2xl p-6 bg-slate-950/80 border border-slate-800 overflow-hidden min-h-[340px] flex items-center justify-center">
                    
                    {/* Background Grid Accent */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ff5a00_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>

                    {/* Nodo Central Maestro */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[var(--primary)] to-amber-500 p-1 shadow-[0_0_35px_rgba(255,90,0,0.5)] flex items-center justify-center text-center animate-pulse">
                        <div className="w-full h-full rounded-full bg-black/90 flex flex-col items-center justify-center p-2 text-white">
                          <span className="text-[10px] uppercase font-bold text-amber-400">CORE ENTITY</span>
                          <span className="text-xs font-black">soyroman.com</span>
                        </div>
                      </div>
                      <span className="mt-2 text-xs font-bold text-amber-400 bg-black/80 px-2 py-0.5 rounded border border-amber-500/30">
                        Autoridad AEO #1
                      </span>
                    </div>

                    {/* Nodos Satélites Nivel 1 (Alrededor) */}
                    <div className="absolute top-8 left-12 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-lg text-xs text-white max-w-[190px] animate-fade-in hover:border-cyan-400 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-cyan-400 font-bold uppercase">Entidad AEO</span>
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      </div>
                      <p className="font-bold">Answer Engine Opt.</p>
                      <p className="text-[10px] text-slate-400 mt-1">Conectado a Perplexity & ChatGPT</p>
                    </div>

                    <div className="absolute top-8 right-12 p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-lg text-xs text-white max-w-[190px] animate-fade-in hover:border-emerald-400 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-emerald-400 font-bold uppercase">Silo RevOps</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      </div>
                      <p className="font-bold">HubSpot CRM Integration</p>
                      <p className="text-[10px] text-slate-400 mt-1">12 Artículos enlazados</p>
                    </div>

                    <div className="absolute bottom-8 left-16 p-3 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-lg text-xs text-white max-w-[190px] animate-fade-in hover:border-purple-400 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-purple-400 font-bold uppercase">Schema Entity</span>
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      </div>
                      <p className="font-bold">FAQPage &amp; HowTo Data</p>
                      <p className="text-[10px] text-slate-400 mt-1">100% Rich Snippets</p>
                    </div>

                    <div className="absolute bottom-8 right-16 p-3 rounded-xl bg-slate-900/90 border border-amber-500/40 shadow-lg text-xs text-white max-w-[190px] animate-fade-in hover:border-amber-400 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-amber-400 font-bold uppercase">Lead Magnet</span>
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      </div>
                      <p className="font-bold">Plantillas de Workflows</p>
                      <p className="text-[10px] text-slate-400 mt-1">Generador de SQLs</p>
                    </div>
                  </div>

                  {/* Resumen de Métricas del Grafo */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                      <span className="text-[10px] text-[var(--muted-foreground)] uppercase block">Entidades Primarias</span>
                      <span className="text-xl font-bold">14 Conceptos</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                      <span className="text-[10px] text-[var(--muted-foreground)] uppercase block">Relaciones Cruzadas</span>
                      <span className="text-xl font-bold text-cyan-400">82 Enlaces</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                      <span className="text-[10px] text-[var(--muted-foreground)] uppercase block">Score de Relevancia</span>
                      <span className="text-xl font-bold text-emerald-500">98.2 / 100</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                      <span className="text-[10px] text-[var(--muted-foreground)] uppercase block">Cobertura de Búsqueda</span>
                      <span className="text-xl font-bold text-[var(--primary)]">Top 3 Nacional</span>
                    </div>
                  </div>
                </div>

                {/* SECCIÓN VISUAL PROFUNDA 2: RADAR GEO-TARGETING & MAPA DE COBERTURA REGIONAL */}
                <div className="glass-card p-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                    <div>
                      <h3 className="text-lg font-bold flex items-center">
                        <MapPinIcon className="w-5 h-5 text-emerald-500 mr-2" />
                        Radar GEO-Targeting &amp; Mapa de Cobertura Regional
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Configura en qué países, estados o ciudades el motor enfocará la redacción para rankear localmente y capturar búsquedas transaccionales por zona.
                      </p>
                    </div>
                    <button className="bg-[var(--card)] border border-[var(--border)] text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-[var(--muted)] transition-colors">
                      + Añadir Nueva Región GEO
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Visual de Regiones Activas & Mapa Vectorial */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                          Mapa Vectorial Interactivo &amp; Concentración de Demanda Local
                        </h4>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-mono font-bold">
                          Radar Activo: {activeGeoRegion.toUpperCase()}
                        </span>
                      </div>

                      {/* Mapa SVG Interactivo con Ondas de Radar y Nodos Clicables */}
                      <div className="relative rounded-2xl p-6 bg-slate-950 border border-slate-800 overflow-hidden min-h-[300px]">
                        {/* Dot Grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
                        
                        <svg className="w-full h-64" viewBox="0 0 800 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Radar Grid Circles */}
                          <circle cx="400" cy="140" r="120" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
                          <circle cx="400" cy="140" r="70" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                          <line x1="400" y1="20" x2="400" y2="260" stroke="#10b981" strokeWidth="1" opacity="0.15" />
                          <line x1="280" y1="140" x2="520" y2="140" stroke="#10b981" strokeWidth="1" opacity="0.15" />

                          {/* Connections */}
                          <line x1="220" y1="180" x2="260" y2="90" stroke="#ff5a00" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                          <line x1="220" y1="180" x2="160" y2="170" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                          <line x1="220" y1="180" x2="430" y2="230" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                          <line x1="220" y1="180" x2="520" y2="110" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                          <line x1="520" y1="110" x2="710" y2="80" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />

                          {/* NODE: CDMX */}
                          <g className="cursor-pointer" onClick={() => setActiveGeoRegion('cdmx')}>
                            <circle cx="220" cy="180" r="16" fill="#ff5a00" fillOpacity={activeGeoRegion === 'cdmx' ? "0.35" : "0.15"} className="animate-ping" />
                            <circle cx="220" cy="180" r="8" fill="#ff5a00" stroke="#ffffff" strokeWidth="2" />
                            <text x="220" y="208" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">CDMX (Santa Fe)</text>
                            <text x="220" y="222" textAnchor="middle" fill="#ff5a00" fontSize="9" fontWeight="bold">64% Share AEO</text>
                          </g>

                          {/* NODE: MONTERREY */}
                          <g className="cursor-pointer" onClick={() => setActiveGeoRegion('mty')}>
                            <circle cx="260" cy="90" r="14" fill="#06b6d4" fillOpacity={activeGeoRegion === 'mty' ? "0.35" : "0.15"} />
                            <circle cx="260" cy="90" r="7" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" />
                            <text x="260" y="74" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Monterrey (San Pedro)</text>
                            <text x="260" y="60" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="bold">52% Share</text>
                          </g>

                          {/* NODE: GUADALAJARA */}
                          <g className="cursor-pointer" onClick={() => setActiveGeoRegion('gdl')}>
                            <circle cx="160" cy="170" r="12" fill="#10b981" fillOpacity={activeGeoRegion === 'gdl' ? "0.35" : "0.15"} />
                            <circle cx="160" cy="170" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                            <text x="160" y="150" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Guadalajara</text>
                          </g>

                          {/* NODE: BOGOTÁ */}
                          <g className="cursor-pointer" onClick={() => setActiveGeoRegion('bogota')}>
                            <circle cx="430" cy="230" r="12" fill="#a855f7" fillOpacity={activeGeoRegion === 'bogota' ? "0.35" : "0.15"} />
                            <circle cx="430" cy="230" r="6" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
                            <text x="430" y="254" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Bogotá (Colombia)</text>
                          </g>

                          {/* NODE: MIAMI */}
                          <g className="cursor-pointer" onClick={() => setActiveGeoRegion('miami')}>
                            <circle cx="520" cy="110" r="12" fill="#eab308" fillOpacity={activeGeoRegion === 'miami' ? "0.35" : "0.15"} />
                            <circle cx="520" cy="110" r="6" fill="#eab308" stroke="#ffffff" strokeWidth="2" />
                            <text x="520" y="94" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Miami (B2B Latam)</text>
                          </g>

                          {/* NODE: MADRID */}
                          <g className="cursor-pointer" onClick={() => setActiveGeoRegion('madrid')}>
                            <circle cx="710" cy="80" r="12" fill="#3b82f6" fillOpacity={activeGeoRegion === 'madrid' ? "0.35" : "0.15"} />
                            <circle cx="710" cy="80" r="6" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                            <text x="710" y="104" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Madrid (España)</text>
                          </g>
                        </svg>

                        <div className="text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-3">
                          <span>💡 Haz clic en cualquier nodo para inspeccionar y calibrar la inyección regional del motor</span>
                          <span className="font-mono text-emerald-400">Pings Geográficos: 6 Regiones Conectadas</span>
                        </div>
                      </div>

                      {/* Tarjetas de Selección Rápida de Región */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          { id: 'cdmx', name: "CDMX", intent: "Agencias & Enterprise", share: "64% Share", color: "border-[var(--primary)] text-[var(--primary)]" },
                          { id: 'mty', name: "Monterrey", intent: "Manufactura & Tech", share: "52% Share", color: "border-cyan-500 text-cyan-400" },
                          { id: 'gdl', name: "Guadalajara", intent: "Startups & Software", share: "48% Share", color: "border-emerald-500 text-emerald-400" },
                          { id: 'bogota', name: "Bogotá", intent: "RevOps Regional", share: "35% Share", color: "border-purple-500 text-purple-400" },
                          { id: 'miami', name: "Miami B2B", intent: "Cross-border Latam", share: "41% Share", color: "border-amber-500 text-amber-400" },
                          { id: 'madrid', name: "Madrid", intent: "Mercado Ibérico", share: "30% Share", color: "border-blue-500 text-blue-400" },
                        ].map((geo) => (
                          <div 
                            key={geo.id} 
                            onClick={() => setActiveGeoRegion(geo.id as any)}
                            className={`p-3 rounded-xl bg-[var(--card)] border cursor-pointer transition-all ${activeGeoRegion === geo.id ? 'border-[var(--primary)] bg-[var(--primary)]/5 shadow-md scale-102' : 'border-[var(--border)] hover:border-slate-500'}`}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-bold text-[var(--foreground)]">{geo.name}</span>
                              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded bg-[var(--muted)] border ${geo.color}`}>
                                {geo.share}
                              </span>
                            </div>
                            <p className="text-[10px] text-[var(--muted-foreground)] truncate">{geo.intent}</p>
                          </div>
                        ))}
                      </div>

                      {/* Simulador de Consulta GEO en Vivo Dinámico */}
                      <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2 text-xs">
                        <span className="text-[10px] font-bold uppercase text-emerald-500 block">
                          Ejemplo de Inyección GEO Generada ({activeGeoRegion.toUpperCase()}):
                        </span>
                        <p className="text-[var(--muted-foreground)] italic leading-relaxed">
                          {activeGeoRegion === 'cdmx' && '"Para empresas con operaciones en CDMX (Polanco, Reforma o Santa Fe) que requieren facturación electrónica CFDI 4.0 y sincronización directa con HubSpot Deals en MXN, configurar este flujo reduce hasta 20 horas de conciliación mensual..."'}
                          {activeGeoRegion === 'mty' && '"En el clúster industrial de Monterrey y San Pedro Garza García, las compañías que integran procesos de manufactura y distribución B2B aprovechan los workflows de HubSpot para gestionar contratos en USD y pesos..."'}
                          {activeGeoRegion === 'gdl' && '"Para el ecosistema de startups y empresas de software en Guadalajara (el Silicon Valley de México), automatizar el ciclo de prospección inbound hacia demo en HubSpot es vital para escalar el equipo de ventas..."'}
                          {activeGeoRegion === 'bogota' && '"Las compañías en Bogotá y Medellín que expanden sus servicios de tecnología a nivel regional requieren un stack de RevOps unificado que conecte sus canales de inbound con ejecutivos comerciales en tiempo récord..."'}
                          {activeGeoRegion === 'miami' && '"Para compañías que operan desde Miami atendiendo cuentas empresariales en América Latina, la integración bilingüe de HubSpot con scoring transfronterizo maximiza la tasa de cierre en dólares..."'}
                          {activeGeoRegion === 'madrid' && '"En el mercado corporativo de Madrid y Barcelona, las organizaciones que implementan metodologías de Revenue Operations alinean sus equipos de desarrollo de negocio con SLAs comerciales estrictos..."'}
                        </p>
                      </div>
                    </div>

                    {/* Parámetros de Configuración GEO */}
                    <div className="space-y-4">
                      <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                        <h4 className="font-bold text-sm">Ajustes del Algoritmo GEO</h4>
                        
                        <div>
                          <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Idioma y Modismos</label>
                          <select className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)]">
                            <option>Español México (Términos Comerciales MX)</option>
                            <option>Español Neutro Internacional</option>
                            <option>Español España (Términos Ibéricos)</option>
                            <option>Inglés US (Spanglish B2B)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Nivel de Densidad Local</label>
                          <input type="range" min="1" max="5" defaultValue="4" className="w-full accent-[var(--primary)]" />
                          <div className="flex justify-between text-[10px] text-[var(--muted-foreground)] mt-1">
                            <span>Sutil</span>
                            <span className="font-bold text-[var(--primary)]">Nivel 4 (Alta Relevancia Local)</span>
                            <span>Agresivo</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[var(--border)] space-y-2 text-xs">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                            <span>Inyectar Schema LocalBusiness cuando aplique</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                            <span>Mapear competidores geográficos por estado</span>
                          </label>
                        </div>
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

            {/* TAB: CONECTORES CMS OFICIALES (PAYLOAD CMS & WORDPRESS) */}
            {activeTab === 'cmsConnectors' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex flex-wrap justify-between items-end gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-2xl font-bold flex items-center">
                        <ServerStackIcon className="w-7 h-7 text-cyan-400 mr-2" />
                        Conectores CMS Oficiales (Payload &amp; WordPress)
                      </h2>
                      <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-bold">
                        Multi-CMS Hub
                      </span>
                    </div>
                    <p className="text-[var(--muted-foreground)] text-sm">
                      Vincula tu plataforma de gestión de contenido para que los agentes autónomos despachen borradores, sincronicen metadatos AEO y asignen autores virtuales.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-[var(--card)] p-1 rounded-xl border border-[var(--border)] shadow-sm">
                    <button 
                      onClick={() => setCmsTab('payload')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${cmsTab === 'payload' ? 'bg-[var(--primary)] text-white shadow-md' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                    >
                      <span className="font-mono text-sm">🖤</span> Payload CMS (Headless)
                    </button>
                    <button 
                      onClick={() => setCmsTab('wordpress')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${cmsTab === 'wordpress' ? 'bg-[var(--primary)] text-white shadow-md' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                    >
                      <span className="font-mono text-sm">🌐</span> WordPress (Plugin &amp; REST)
                    </button>
                  </div>
                </div>

                {/* 1. SECCIÓN PAYLOAD CMS */}
                {cmsTab === 'payload' && (
                  <div className="space-y-6 animate-fade-in">
                    
                    {/* Status Card Payload */}
                    <div className="glass-card p-6 border-l-4 border-l-cyan-500 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-black text-xl text-white shadow-md">
                          P
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-base text-[var(--foreground)]">Payload CMS Native REST Connector</h3>
                            <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded font-mono font-bold">
                              Compatible con Payload 2.x &amp; 3.x
                            </span>
                          </div>
                          <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                            Conexión directa vía REST API sin necesidad de plugins externos. Soporta colecciones nativas y campos Lexical / Slate.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button 
                          onClick={handleTestPayload}
                          disabled={isTestingPayload}
                          className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                          <BoltIcon className="w-4 h-4" />
                          {isTestingPayload ? 'Probando Handshake...' : 'Probar Conexión (Ping Test)'}
                        </button>
                      </div>
                    </div>

                    {/* Handshake Result Box */}
                    {payloadTestResult && (
                      <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/40 space-y-2 text-xs animate-fade-in font-mono">
                        <div className="flex justify-between items-center text-cyan-400 font-bold">
                          <span>Handshake Status: {payloadTestResult.status}</span>
                          <span className="text-emerald-400">Latencia: {payloadTestResult.latency}</span>
                        </div>
                        <p className="text-slate-300">{payloadTestResult.message}</p>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                          <span>Colecciones detectadas:</span>
                          {payloadTestResult.collections.map((col, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-700">{col}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Payload Settings Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      
                      {/* Column 1 & 2: Connection Parameters */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="glass-card p-6 space-y-5">
                          <h4 className="font-bold text-sm flex items-center gap-2">
                            <KeyIcon className="w-4 h-4 text-cyan-400" />
                            Parámetros del Endpoint de Payload
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Versión de Payload CMS</label>
                              <div className="flex gap-2">
                                <button 
                                  onClick={() => setPayloadVersion('v3')}
                                  className={`flex-1 py-2 rounded-lg text-xs font-bold border cursor-pointer transition-all ${payloadVersion === 'v3' ? 'border-cyan-400 bg-cyan-500/10 text-cyan-400' : 'border-[var(--border)] text-[var(--muted-foreground)]'}`}
                                >
                                  Payload 3.x (App Router)
                                </button>
                                <button 
                                  onClick={() => setPayloadVersion('v2')}
                                  className={`flex-1 py-2 rounded-lg text-xs font-bold border cursor-pointer transition-all ${payloadVersion === 'v2' ? 'border-cyan-400 bg-cyan-500/10 text-cyan-400' : 'border-[var(--border)] text-[var(--muted-foreground)]'}`}
                                >
                                  Payload 2.x
                                </button>
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Colección Destino</label>
                              <input 
                                type="text" 
                                defaultValue="posts" 
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs font-mono text-[var(--foreground)]"
                                placeholder="posts, articles, blog..."
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">URL Base del API de Payload</label>
                            <div className="flex gap-2">
                              <input 
                                type="text" 
                                defaultValue="https://soyroman.com/api" 
                                className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs font-mono text-[var(--foreground)]"
                              />
                              <span className="flex items-center px-3 rounded-lg bg-[var(--muted)] text-[11px] font-mono text-[var(--muted-foreground)] border border-[var(--border)]">
                                /api/posts
                              </span>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">API Key de Usuario / Service Token (useAPIKey)</label>
                            <div className="flex gap-2">
                              <input 
                                type="password" 
                                defaultValue="payload_live_sec_98a7sd8f97a8sd7f89asdf" 
                                className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs font-mono text-[var(--foreground)]"
                              />
                              <button 
                                onClick={() => alert('API Key copiada.')}
                                className="bg-[var(--card)] border border-[var(--border)] px-3 py-2 rounded-lg text-xs hover:bg-[var(--muted)] transition-colors"
                              >
                                Copiar
                              </button>
                            </div>
                            <span className="text-[10px] text-[var(--muted-foreground)] mt-1 block">
                              En Payload, habilita <code>useAPIKey: true</code> en tu colección de usuarios o crea una cuenta técnica 'Buildations Agent'.
                            </span>
                          </div>

                          <div className="pt-2 border-t border-[var(--border)]">
                            <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Estado de Publicación al Despachar</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                              <label className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payload_status" defaultChecked className="accent-[var(--primary)]" />
                                <div>
                                  <span className="font-bold block text-[var(--foreground)]">_status: 'draft' (Recomendado)</span>
                                  <span className="text-[10px] text-[var(--muted-foreground)]">Permite que tu equipo editorial revise antes de publicar.</span>
                                </div>
                              </label>
                              <label className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payload_status" className="accent-[var(--primary)]" />
                                <div>
                                  <span className="font-bold block text-[var(--foreground)]">_status: 'published'</span>
                                  <span className="text-[10px] text-[var(--muted-foreground)]">Publicación inmediata 100% autónoma.</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Mapeo de Campos de Colección */}
                        <div className="glass-card p-6 space-y-4">
                          <h4 className="font-bold text-sm flex items-center gap-2">
                            <LinkIcon className="w-4 h-4 text-cyan-400" />
                            Mapeo Inteligente de Campos (Schema Field Mapping)
                          </h4>
                          <p className="text-xs text-[var(--muted-foreground)]">
                            Configura cómo Buildations inyecta cada propiedad en la colección de Payload:
                          </p>

                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border border-[var(--border)] rounded-lg">
                              <thead className="bg-[var(--muted)] text-[var(--muted-foreground)]">
                                <tr>
                                  <th className="p-2.5">Propiedad de Buildations</th>
                                  <th className="p-2.5">Campo en tu Payload CMS</th>
                                  <th className="p-2.5">Tipo de Dato</th>
                                  <th className="p-2.5">Estado</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[var(--border)] font-mono text-[11px]">
                                <tr>
                                  <td className="p-2.5 font-sans font-bold">Título de Artículo</td>
                                  <td className="p-2.5 text-cyan-400">title</td>
                                  <td className="p-2.5 text-[var(--muted-foreground)]">text</td>
                                  <td className="p-2.5 text-emerald-500 font-bold">✓ Mapeado</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 font-sans font-bold">Cuerpo Enriquecido</td>
                                  <td className="p-2.5 text-cyan-400">content</td>
                                  <td className="p-2.5 text-[var(--muted-foreground)]">richText / lexical</td>
                                  <td className="p-2.5 text-emerald-500 font-bold">✓ Mapeado</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 font-sans font-bold">Meta Title &amp; Description</td>
                                  <td className="p-2.5 text-cyan-400">meta.title, meta.description</td>
                                  <td className="p-2.5 text-[var(--muted-foreground)]">group (SEO)</td>
                                  <td className="p-2.5 text-emerald-500 font-bold">✓ Mapeado</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 font-sans font-bold">Schema JSON-LD</td>
                                  <td className="p-2.5 text-cyan-400">schemaJsonLd</td>
                                  <td className="p-2.5 text-[var(--muted-foreground)]">json / code</td>
                                  <td className="p-2.5 text-emerald-500 font-bold">✓ Mapeado</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 font-sans font-bold">Autor Virtual</td>
                                  <td className="p-2.5 text-cyan-400">author</td>
                                  <td className="p-2.5 text-[var(--muted-foreground)]">relationship (users)</td>
                                  <td className="p-2.5 text-emerald-500 font-bold">✓ Agente Vera</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Column 3: Payload Quick Code Snippet & Info */}
                      <div className="space-y-6">
                        <div className="glass-card p-6 space-y-4">
                          <h4 className="font-bold text-sm">Ejemplo de Payload Payload Config</h4>
                          <p className="text-xs text-[var(--muted-foreground)]">
                            Así de simple es tu colección en Payload CMS para recibir los artículos:
                          </p>

                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1 overflow-x-auto leading-relaxed">
                            <p className="text-purple-400">// Posts.ts en Payload</p>
                            <p><span className="text-cyan-400">export const</span> Posts: CollectionConfig = &#123;</p>
                            <p className="pl-3">slug: <span className="text-emerald-400">'posts'</span>,</p>
                            <p className="pl-3">admin: &#123; useAsTitle: <span className="text-emerald-400">'title'</span> &#125;,</p>
                            <p className="pl-3">versions: &#123; drafts: <span className="text-amber-400">true</span> &#125;,</p>
                            <p className="pl-3">fields: [</p>
                            <p className="pl-6">&#123; name: <span className="text-emerald-400">'title'</span>, type: <span className="text-emerald-400">'text'</span> &#125;,</p>
                            <p className="pl-6">&#123; name: <span className="text-emerald-400">'content'</span>, type: <span className="text-emerald-400">'richText'</span> &#125;,</p>
                            <p className="pl-6">&#123; name: <span className="text-emerald-400">'schemaJsonLd'</span>, type: <span className="text-emerald-400">'json'</span> &#125;,</p>
                            <p className="pl-3">],</p>
                            <p>&#125;</p>
                          </div>

                          <div className="p-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-xs space-y-1">
                            <span className="font-bold text-emerald-500 block">✓ Cero dependencias adicionales</span>
                            <p className="text-[var(--muted-foreground)]">Buildations se autentica con el endpoint REST nativo sin instalar librerías pesadas.</p>
                          </div>
                        </div>

                        <div className="glass-card p-6 space-y-3">
                          <h4 className="font-bold text-sm">Despacho Automático</h4>
                          <p className="text-xs text-[var(--muted-foreground)]">
                            Cada vez que el motor AEO apruebe un artículo o cumpla su ciclo semanal, se creará un nuevo borrador en Payload instantáneamente.
                          </p>
                          <button 
                            onClick={() => alert('Simulando despacho de prueba a Payload CMS en /api/posts...')}
                            className="w-full bg-[var(--primary)] text-white py-2 rounded-lg text-xs font-bold hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-sm"
                          >
                            Disparar Artículo de Prueba a Payload
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 2. SECCIÓN WORDPRESS */}
                {cmsTab === 'wordpress' && (
                  <div className="space-y-6 animate-fade-in">
                    
                    {/* Status Card WordPress */}
                    <div className="glass-card p-6 border-l-4 border-l-blue-500 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-black text-xl text-white shadow-md">
                          W
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-base text-[var(--foreground)]">Conector Oficial de WordPress</h3>
                            <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-mono font-bold">
                              Plugin Oficial v1.2 &amp; REST API
                            </span>
                          </div>
                          <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                            Conecta tu WordPress vía Plugin dedicado con emparejamiento por token, o usa la REST API nativa con Application Passwords.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button 
                          onClick={handleTestWp}
                          disabled={isTestingWp}
                          className="bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                          <BoltIcon className="w-4 h-4" />
                          {isTestingWp ? 'Verificando WordPress...' : 'Probar Conexión con WordPress'}
                        </button>
                      </div>
                    </div>

                    {/* WordPress Test Result Box */}
                    {wpTestResult && (
                      <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/40 space-y-2 text-xs animate-fade-in font-mono">
                        <div className="flex justify-between items-center text-blue-400 font-bold">
                          <span>Estado: {wpTestResult.status}</span>
                          <span className="text-emerald-400">Latencia: {wpTestResult.latency}</span>
                        </div>
                        <p className="text-slate-300">{wpTestResult.message}</p>
                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                          <span>Usuario Vinculado: <strong className="text-white">{wpTestResult.user}</strong></span>
                          <span>•</span>
                          <span>Plugin SEO: <strong className="text-emerald-400">{wpTestResult.seoPlugin}</strong></span>
                        </div>
                      </div>
                    )}

                    {/* WordPress Mode Switcher */}
                    <div className="flex items-center gap-2 bg-[var(--card)] p-1 rounded-xl border border-[var(--border)] max-w-md">
                      <button 
                        onClick={() => setWpMode('plugin')}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${wpMode === 'plugin' ? 'bg-[var(--primary)] text-white shadow' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                      >
                        <ArrowDownTrayIcon className="w-3.5 h-3.5" /> 1. Plugin Oficial Buildations (.zip)
                      </button>
                      <button 
                        onClick={() => setWpMode('rest')}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${wpMode === 'rest' ? 'bg-[var(--primary)] text-white shadow' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                      >
                        <LinkIcon className="w-3.5 h-3.5" /> 2. REST API Nativa (Sin Plugin)
                      </button>
                    </div>

                    {/* MODO A: PLUGIN OFICIAL DE WORDPRESS */}
                    {wpMode === 'plugin' && (
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        <div className="lg:col-span-2 space-y-6">
                          {/* Descarga del Plugin */}
                          <div className="glass-card p-6 space-y-4 border-2 border-dashed border-[var(--primary)]/40 bg-[var(--primary)]/5">
                            <div className="flex flex-wrap justify-between items-center gap-4">
                              <div>
                                <h4 className="font-bold text-base text-[var(--foreground)] flex items-center gap-2">
                                  <ArrowDownTrayIcon className="w-5 h-5 text-[var(--primary)]" />
                                  Paso 1: Descarga el Plugin Oficial para WordPress
                                </h4>
                                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                  Archivo liviano (38 KB). Compatible con WordPress 6.0+, multisitio, Yoast SEO y Rank Math.
                                </p>
                              </div>
                              <button 
                                onClick={() => alert('Descargando buildations-studio-connector-v1.2.zip...')}
                                className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_15px_rgba(255,90,0,0.4)] cursor-pointer flex items-center gap-2"
                              >
                                <ArrowDownTrayIcon className="w-4 h-4" /> Descargar buildations-connector.zip
                              </button>
                            </div>
                          </div>

                          {/* Token de Emparejamiento */}
                          <div className="glass-card p-6 space-y-4">
                            <h4 className="font-bold text-sm flex items-center gap-2">
                              <KeyIcon className="w-4 h-4 text-blue-400" />
                              Paso 2: Token Secreto de Emparejamiento (Pairing Key)
                            </h4>
                            <p className="text-xs text-[var(--muted-foreground)]">
                              Una vez instalado el plugin en tu WordPress, ve a <strong>Ajustes &gt; Buildations Studio</strong> y pega esta clave de emparejamiento para enlazar la terminal de agentes:
                            </p>

                            <div className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-between gap-3">
                              <span className="font-mono text-xs text-[var(--foreground)] truncate">
                                bld_wp_pair_8a9df7a6sd5f89as6df8_soyroman
                              </span>
                              <button 
                                onClick={() => alert('Token copiado al portapapeles.')}
                                className="bg-[var(--card)] border border-[var(--border)] px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[var(--muted)] transition-colors cursor-pointer"
                              >
                                Copiar Clave
                              </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                              <div>
                                <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Asignar Autor Virtual en WordPress</label>
                                <select className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)]">
                                  <option>Agente Vera (Especialista AEO &amp; Contenido)</option>
                                  <option>Agente Sophia (SERP Scout &amp; Datos)</option>
                                  <option>Román García (Administrador / Autor Principal)</option>
                                  <option>Crear usuario 'Buildations AI' automáticamente</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Mapeo de Categorías</label>
                                <select className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)]">
                                  <option>Detectar categoría por Silo temático</option>
                                  <option>Categoría única: Blog General</option>
                                  <option>Crear nueva categoría automáticamente</option>
                                </select>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-[var(--border)] space-y-2 text-xs">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                                <span>Inyectar Meta Tags directamente en <strong>Rank Math SEO</strong> o <strong>Yoast SEO</strong></span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                                <span>Sincronización Bidireccional: Avisar a Buildations cuando un editor humano publique el borrador</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Columna Lateral Beneficios Plugin */}
                        <div className="space-y-6">
                          <div className="glass-card p-6 space-y-4 border-t-4 border-t-blue-500">
                            <h4 className="font-bold text-sm">¿Por qué usar el Plugin Oficial?</h4>
                            
                            <div className="space-y-3 text-xs text-[var(--muted-foreground)]">
                              <div className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <p><strong className="text-[var(--foreground)]">Cero configuración de contraseñas:</strong> Se empareja con un token seguro cifrado HMAC-SHA256.</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <p><strong className="text-[var(--foreground)]">SEO automático:</strong> Rellena el snippet de Google, canonicals y Schema FAQ sin tocar código PHP.</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <p><strong className="text-[var(--foreground)]">Telemetría en tiempo real:</strong> Buildations sabe en qué segundo se publicó el artículo en WordPress.</p>
                              </div>
                            </div>

                            <button 
                              onClick={() => alert('Simulando envío de borrador vía Plugin a WordPress...')}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                            >
                              Enviar Post de Prueba a WordPress
                            </button>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* MODO B: REST API NATIVA DE WORDPRESS */}
                    {wpMode === 'rest' && (
                      <div className="glass-card p-6 space-y-4 max-w-2xl">
                        <h4 className="font-bold text-sm">Conexión vía WordPress REST API Nativa</h4>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Ideal si no puedes instalar plugins adicionales en el servidor. Utiliza las contraseñas de aplicación nativas de WordPress.
                        </p>

                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Endpoint de Posts</label>
                            <input 
                              type="text" 
                              defaultValue="https://soyroman.com/wp-json/wp/v2/posts" 
                              className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs font-mono text-[var(--foreground)]"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Usuario de WordPress</label>
                              <input 
                                type="text" 
                                defaultValue="roman.garcia" 
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)]"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1">Application Password (4x4 caracteres)</label>
                              <input 
                                type="password" 
                                defaultValue="abcd 1234 efgh 5678" 
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs font-mono text-[var(--foreground)]"
                              />
                            </div>
                          </div>

                          <span className="text-[10px] text-[var(--muted-foreground)] block">
                            Genera tu contraseña de aplicación en tu panel de WordPress: <strong>Usuarios &gt; Tu Perfil &gt; Contraseñas de aplicación</strong>.
                          </span>

                          <button 
                            onClick={handleTestWp}
                            className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-lg text-xs font-bold hover:bg-[var(--muted)] transition-colors cursor-pointer"
                          >
                            Validar Credenciales REST
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* HISTORIAL DE DESPACHOS Y SINCRONIZACIONES CMS */}
                <div className="glass-card p-6 space-y-4">
                  <div className="flex justify-between items-center border-b border-[var(--border)] pb-3">
                    <h3 className="font-bold text-sm">Registro de Despachos &amp; Sincronizaciones Recientes</h3>
                    <span className="text-xs text-[var(--muted-foreground)] font-mono">3 Artículos enviados</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-[var(--border)] rounded-lg">
                      <thead className="bg-[var(--muted)] text-[var(--muted-foreground)]">
                        <tr>
                          <th className="p-3">Destino CMS</th>
                          <th className="p-3">Título del Artículo</th>
                          <th className="p-3">Colección / Categoría</th>
                          <th className="p-3">Estado</th>
                          <th className="p-3">Agente Autor</th>
                          <th className="p-3 text-right">Fecha</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border)]">
                        <tr>
                          <td className="p-3 font-bold flex items-center gap-1.5 text-cyan-400">
                            <span>🖤</span> Payload CMS
                          </td>
                          <td className="p-3 font-semibold text-[var(--foreground)]">Cómo alinear Marketing y Ventas en HubSpot para reducir el ciclo de cierre</td>
                          <td className="p-3 font-mono text-[var(--muted-foreground)]">posts (Colección)</td>
                          <td className="p-3">
                            <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-bold">
                              _status: 'draft'
                            </span>
                          </td>
                          <td className="p-3 font-bold text-emerald-400">Agente Vera</td>
                          <td className="p-3 text-right text-[var(--muted-foreground)]">Hace 2 horas</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold flex items-center gap-1.5 text-blue-400">
                            <span>🌐</span> WordPress
                          </td>
                          <td className="p-3 font-semibold text-[var(--foreground)]">Estrategias de Optimización AEO para B2B en México</td>
                          <td className="p-3 font-mono text-[var(--muted-foreground)]">Estrategia AEO</td>
                          <td className="p-3">
                            <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold">
                              Publicado Live
                            </span>
                          </td>
                          <td className="p-3 font-bold text-cyan-400">Agente Sophia</td>
                          <td className="p-3 text-right text-[var(--muted-foreground)]">Ayer 18:30</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold flex items-center gap-1.5 text-cyan-400">
                            <span>🖤</span> Payload CMS
                          </td>
                          <td className="p-3 font-semibold text-[var(--foreground)]">Automatización de SLAs Comerciales para Equipos de Ventas</td>
                          <td className="p-3 font-mono text-[var(--muted-foreground)]">posts (Colección)</td>
                          <td className="p-3">
                            <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-bold">
                              _status: 'draft'
                            </span>
                          </td>
                          <td className="p-3 font-bold text-orange-400">Agente Jax</td>
                          <td className="p-3 text-right text-[var(--muted-foreground)]">Hace 3 días</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* TAB: DATA ENRICHMENT & HUBSPOT HYGIENE STUDIO */}
            {activeTab === 'dataEnrichment' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-end gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-2xl font-bold flex items-center">
                        <FunnelIcon className="w-7 h-7 text-emerald-400 mr-2" />
                        Data Enrichment &amp; Limpieza B2B (HubSpot Quality Cleanse)
                      </h2>
                      <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                        RevOps Engine v3.1
                      </span>
                    </div>
                    <p className="text-[var(--muted-foreground)] text-sm">
                      Nutre tu base de prospectos con web scraping en vivo (industria, colaboradores, tech stack) y limpia automáticamente según las mejores prácticas de HubSpot CRM.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => {
                        setIsEnrichingActive(true);
                        setTimeout(() => {
                          setIsEnrichingActive(false);
                          alert('¡Enriquecimiento y Limpieza completados! 5 registros procesados con 98.2% de Calidad Enterprise.');
                        }, 1400);
                      }}
                      disabled={isEnrichingActive}
                      className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_15px_rgba(255,90,0,0.35)] cursor-pointer flex items-center gap-2 disabled:opacity-50"
                    >
                      <ArrowPathIcon className={`w-4 h-4 ${isEnrichingActive ? 'animate-spin' : ''}`} />
                      {isEnrichingActive ? 'Rastreando & Limpiando...' : 'Ejecutar Enriquecimiento & Limpieza'}
                    </button>
                    <button 
                      onClick={() => alert('Exportando base depurada en formato CSV listo para importar en HubSpot CRM...')}
                      className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-[var(--muted)] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" /> Exportar CSV para HubSpot
                    </button>
                  </div>
                </div>

                {/* Score & KPI Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="glass-card p-5 border-l-4 border-l-[var(--primary)] space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase text-[var(--muted-foreground)]">Score de Calidad de Base</span>
                      <span className="text-xs font-mono font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded border border-[var(--primary)]/20">+56% Mejora</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-[var(--foreground)]">97.4%</span>
                      <span className="text-xs font-mono text-[var(--primary)]">Enterprise Clean</span>
                    </div>
                    <p className="text-[11px] text-[var(--muted-foreground)]">0 inconsistencias de mayúsculas o caracteres</p>
                  </div>

                  <div className="glass-card p-5 border-l-4 border-l-amber-500 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase text-[var(--muted-foreground)]">Campos Nutridos vía Web Scraping</span>
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">100% Cobertura</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-[var(--foreground)]">20 / 20</span>
                      <span className="text-xs text-[var(--muted-foreground)]">Atributos</span>
                    </div>
                    <p className="text-[11px] text-[var(--muted-foreground)]">Industria, tamaño de equipo y tech stack agregados</p>
                  </div>

                  <div className="glass-card p-5 border-l-4 border-l-orange-400 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase text-[var(--muted-foreground)]">Duplicados Fusionados</span>
                      <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">Deduplicado</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-[var(--foreground)]">1 Lead</span>
                      <span className="text-xs text-[var(--muted-foreground)]">Consolidado</span>
                    </div>
                    <p className="text-[11px] text-[var(--muted-foreground)]">Identificado por dominio web idéntico</p>
                  </div>

                  <div className="glass-card p-5 border-l-4 border-l-zinc-500 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase text-[var(--muted-foreground)]">Compatibilidad HubSpot CRM</span>
                      <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Hub ID #982104</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-purple-400">100%</span>
                      <span className="text-xs text-[var(--muted-foreground)]">Compatible</span>
                    </div>
                    <p className="text-[11px] text-[var(--muted-foreground)]">Propiedades estándar alineadas para sync API</p>
                  </div>
                </div>

                {/* Sub-Tabs: Vista de Resultados vs Reglas de Limpieza */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setEnrichmentView('results')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${enrichmentView === 'results' ? 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                    >
                      <TableCellsIcon className="w-4 h-4 inline mr-1.5 text-emerald-400" />
                      Tabla Interactiva (Antes vs Después Limpio)
                    </button>
                    <button 
                      onClick={() => setEnrichmentView('cleanseRules')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${enrichmentView === 'cleanseRules' ? 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                    >
                      <AdjustmentsHorizontalIcon className="w-4 h-4 inline mr-1.5 text-cyan-400" />
                      Reglas de Higiene HubSpot &amp; Web Scraping
                    </button>
                  </div>

                  {/* Filter Status Badges */}
                  {enrichmentView === 'results' && (
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-[10px] font-mono font-bold uppercase text-[var(--muted-foreground)] mr-1">Filtro:</span>
                      <button 
                        onClick={() => setFilterLeadStatus('all')}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold cursor-pointer transition-all ${filterLeadStatus === 'all' ? 'bg-[var(--primary)] text-white shadow-md' : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                      >
                        Total (5)
                      </button>
                      <button 
                        onClick={() => setFilterLeadStatus('clean')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold cursor-pointer transition-all ${filterLeadStatus === 'clean' ? 'bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/40 shadow-sm' : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_6px_rgba(255,90,0,0.8)]"></span>
                        Óptimos (3)
                      </button>
                      <button 
                        onClick={() => setFilterLeadStatus('enriched')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold cursor-pointer transition-all ${filterLeadStatus === 'enriched' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/40 shadow-sm' : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]"></span>
                        Enriquecidos (1)
                      </button>
                      <button 
                        onClick={() => setFilterLeadStatus('duplicate')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold cursor-pointer transition-all ${filterLeadStatus === 'duplicate' ? 'bg-zinc-500/20 text-zinc-300 border border-zinc-500/40 shadow-sm' : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                        Fusionados (1)
                      </button>
                    </div>
                  )}
                </div>

                {/* VISTA 1: TABLA ANTES VS DESPUÉS */}
                {enrichmentView === 'results' && (
                  <div className="glass-card overflow-hidden border border-[var(--border)] shadow-xl space-y-4">
                    <div className="p-4 bg-[var(--background)]/60 border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="font-bold text-[var(--foreground)]">Base de Leads B2B: México &amp; Expansión Latam</span>
                        <span className="text-[10px] text-[var(--muted-foreground)] font-mono">• 5 contactos cargados</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-emerald-400 font-bold">✓ Capitalización HubSpot aplicada</span>
                        <span className="text-[var(--border)]">|</span>
                        <span className="text-cyan-400 font-bold">✓ Scraping de dominio ejecutado</span>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[var(--muted)] text-[var(--muted-foreground)] uppercase text-[10px] tracking-wider font-bold">
                          <tr>
                            <th className="p-3.5">Contacto (Limpio vs Raw)</th>
                            <th className="p-3.5">Empresa &amp; Dominio</th>
                            <th className="p-3.5">Industria Enriquecida</th>
                            <th className="p-3.5">Colaboradores</th>
                            <th className="p-3.5">Tech Stack Detectado</th>
                            <th className="p-3.5">Semáforo de Higiene</th>
                            <th className="p-3.5 text-right">Estatus HubSpot CRM</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border)] text-xs">
                          {leadsData
                            .filter(lead => filterLeadStatus === 'all' || lead.status === filterLeadStatus)
                            .map((lead) => (
                              <tr key={lead.id} className="hover:bg-[var(--muted)]/50 transition-colors">
                                {/* Contacto */}
                                <td className="p-3.5">
                                  <div>
                                    <span className="font-bold text-[var(--foreground)] text-sm flex items-center gap-1.5">
                                      {lead.cleanName}
                                      {lead.qualityScore >= 95 ? (
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" title="Semáforo: Verificado y Óptimo"></span>
                                      ) : lead.qualityScore >= 85 ? (
                                        <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" title="Semáforo: Requiere Revisión Menor"></span>
                                      ) : (
                                        <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_#f43f5e]" title="Semáforo: Fusión o Corrección Requerida"></span>
                                      )}
                                    </span>
                                    <span className="font-mono text-[11px] text-[var(--primary)] block">{lead.email}</span>
                                    <span className="text-[10px] text-[var(--muted-foreground)] line-through block mt-0.5">
                                      Raw: {lead.rawName}
                                    </span>
                                  </div>
                                </td>

                                {/* Empresa */}
                                <td className="p-3.5">
                                  <div>
                                    <span className="font-bold text-[var(--foreground)]">{lead.companyClean}</span>
                                    <span className="font-mono text-[11px] text-cyan-400 block">{lead.domain}</span>
                                    <span className="text-[10px] text-[var(--muted-foreground)]">Sede: {lead.hq}</span>
                                  </div>
                                </td>

                                {/* Industria */}
                                <td className="p-3.5">
                                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-block font-mono">
                                    {lead.industry}
                                  </span>
                                </td>

                                {/* Colaboradores */}
                                <td className="p-3.5">
                                  <span className="font-semibold text-[var(--foreground)]">{lead.employees}</span>
                                </td>

                                {/* Tech Stack */}
                                <td className="p-3.5">
                                  <div className="flex flex-wrap gap-1 max-w-[200px]">
                                    {lead.techStack.map((tech, i) => (
                                      <span key={i} className="px-1.5 py-0.5 rounded bg-[var(--background)] border border-[var(--border)] text-[9px] font-mono text-slate-300">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </td>

                                {/* Semáforo de Higiene */}
                                <td className="p-3.5">
                                  <div className="flex items-center gap-2">
                                    {lead.qualityScore >= 95 ? (
                                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] font-mono text-[11px] font-bold shadow-[0_0_12px_rgba(255,90,0,0.15)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_6px_rgba(255,90,0,0.8)]"></span>
                                        <span>ÓPTIMO ({lead.qualityScore}%)</span>
                                      </div>
                                    ) : lead.qualityScore >= 85 ? (
                                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-bold shadow-[0_0_12px_rgba(245,158,11,0.15)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]"></span>
                                        <span>ENRIQUECIDO ({lead.qualityScore}%)</span>
                                      </div>
                                    ) : (
                                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-500/10 border border-zinc-500/30 text-zinc-300 font-mono text-[11px] font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                                        <span>FUSIONADO ({lead.qualityScore}%)</span>
                                      </div>
                                    )}
                                  </div>
                                </td>

                                {/* Acción */}
                                <td className="p-3.5 text-right">
                                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]">
                                    {lead.hubspotSync}
                                  </span>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 bg-[var(--background)] border-t border-[var(--border)] flex flex-wrap justify-between items-center gap-3 text-xs">
                      <span className="text-[var(--muted-foreground)]">
                        Mostrando <strong>{leadsData.length} registros</strong> listos con el formato estándar de HubSpot CRM.
                      </span>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => alert('Sincronizando 5 leads a HubSpot CRM... Contactos y Empresas vinculadas exitosamente.')}
                          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                        >
                          <ArrowPathIcon className="w-3.5 h-3.5" /> Sincronizar Directo a HubSpot (Hub ID #982104)
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* VISTA 2: REGLAS DE HIGIENE Y SCRAPING */}
                {enrichmentView === 'cleanseRules' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
                    
                    {/* Reglas de Higiene HubSpot */}
                    <div className="glass-card p-6 space-y-5">
                      <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
                        <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
                        <h4 className="font-bold text-base text-[var(--foreground)]">Reglas de Higiene de Base (HubSpot Best Practices)</h4>
                      </div>

                      <div className="space-y-4 text-xs">
                        <label className="flex items-start gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={enableHubspotHygiene} 
                            onChange={(e) => setEnableHubspotHygiene(e.target.checked)} 
                            className="accent-[var(--primary)] mt-0.5" 
                          />
                          <div>
                            <span className="font-bold block text-[var(--foreground)]">Normalización de Nombres (Title Case Inteligente)</span>
                            <span className="text-[var(--muted-foreground)]">
                              Convierte <code>JUAN CARLOS</code> o <code>juan carlos</code> a <code>Juan Carlos</code>. Elimina títulos redundantes (Lic., Dr., Ing.) del campo de nombre.
                            </span>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={enableDeduplication} 
                            onChange={(e) => setEnableDeduplication(e.target.checked)} 
                            className="accent-[var(--primary)] mt-0.5" 
                          />
                          <div>
                            <span className="font-bold block text-[var(--foreground)]">Deduplicación &amp; Limpieza de Dominios Web</span>
                            <span className="text-[var(--muted-foreground)]">
                              Remueve <code>http://</code>, <code>https://</code>, <code>www.</code> y parámetros UTM. Si existen dos contactos con el mismo dominio empresarial, los consolida.
                            </span>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-pointer">
                          <input type="checkbox" defaultChecked className="accent-[var(--primary)] mt-0.5" />
                          <div>
                            <span className="font-bold block text-[var(--foreground)]">Filtrado de Emails Genéricos vs Corporativos</span>
                            <span className="text-[var(--muted-foreground)]">
                              Detecta si el email es <code>info@</code>, <code>contacto@</code> o <code>ventas@</code> y lo clasifica como Lead Institucional en HubSpot.
                            </span>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-pointer">
                          <input type="checkbox" defaultChecked className="accent-[var(--primary)] mt-0.5" />
                          <div>
                            <span className="font-bold block text-[var(--foreground)]">Validación de Sintaxis RFC 5322 &amp; MX Records</span>
                            <span className="text-[var(--muted-foreground)]">
                              Verifica que el dominio del correo tenga servidores MX activos para evitar rebotes (&gt;99% deliverability).
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Parámetros de Web Scraping & Enriquecimiento de Datos */}
                    <div className="glass-card p-6 space-y-5">
                      <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
                        <CpuChipIcon className="w-5 h-5 text-cyan-400" />
                        <h4 className="font-bold text-base text-[var(--foreground)]">Parámetros de Rastreo Web &amp; Extracción B2B</h4>
                      </div>

                      <div className="space-y-4 text-xs">
                        <label className="flex items-start gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={enableWebScraping} 
                            onChange={(e) => setEnableWebScraping(e.target.checked)} 
                            className="accent-[var(--primary)] mt-0.5" 
                          />
                          <div>
                            <span className="font-bold block text-[var(--foreground)]">Scraping de Industria Estandarizada HubSpot</span>
                            <span className="text-[var(--muted-foreground)]">
                              Visita el sitio web de la empresa y clasifica el giro en una de las 42 categorías oficiales de HubSpot (ej. <em>Fintech, Software, Logística, Salud</em>).
                            </span>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-pointer">
                          <input type="checkbox" defaultChecked className="accent-[var(--primary)] mt-0.5" />
                          <div>
                            <span className="font-bold block text-[var(--foreground)]">Estimación de Headcount / Rango de Empleados</span>
                            <span className="text-[var(--muted-foreground)]">
                              Inyecta el bracket de colaboradores oficial: <code>1-10</code>, <code>11-50</code>, <code>51-200</code>, <code>201-500</code> o <code>500+</code>.
                            </span>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-pointer">
                          <input type="checkbox" defaultChecked className="accent-[var(--primary)] mt-0.5" />
                          <div>
                            <span className="font-bold block text-[var(--foreground)]">Detección de Stack Tecnológico (DNS &amp; Scripts)</span>
                            <span className="text-[var(--muted-foreground)]">
                              Escanea etiquetas para identificar si usan HubSpot, Shopify, Stripe, WordPress, Segment o Google Analytics.
                            </span>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-pointer">
                          <input type="checkbox" defaultChecked className="accent-[var(--primary)] mt-0.5" />
                          <div>
                            <span className="font-bold block text-[var(--foreground)]">Geolocalización de Casa Matriz / HQ</span>
                            <span className="text-[var(--muted-foreground)]">
                              Extrae la ciudad y país principal para asociarlo a las propiedades <code>City</code> y <code>Country</code> de HubSpot.
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            )}

            {/* TAB 1: AEO / GEO SHARE OF VOICE (MOTOR DE CITACIONES EN IAS) */}
            {activeTab === 'aiShareOfVoice' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-bold mb-1 flex items-center">
                      <SparklesIcon className="w-6 h-6 text-[var(--primary)] mr-2" />
                      Radar de Citación &amp; Cuota de Búsqueda Sintética (AEO / GEO)
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Monitorea la frecuencia y relevancia con la que los motores generativos (ChatGPT, Perplexity, Gemini) citan tu marca frente a competidores.</p>
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

      {/* MODAL 1: LIVE SIDE-BY-SIDE AEO ARTICLE STUDIO */}
      {isCanvasModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-3.5 border-b border-[var(--border)] flex flex-wrap justify-between items-center gap-3 bg-[var(--background)]">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] shadow-sm">
                  <PencilSquareIcon className="w-5 h-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base leading-tight">Side-by-Side AEO Studio &amp; Simulador CMS</h3>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                      AEO Score: 96/100
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)]">Edita el borrador y observa en tiempo real cómo respondería Perplexity y ChatGPT citando tu dominio.</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Editor Mode Selector */}
                <div className="flex items-center bg-[var(--card)] p-1 rounded-lg border border-[var(--border)] text-xs">
                  <button 
                    onClick={() => setEditorMode('visual')}
                    className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${editorMode === 'visual' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                  >
                    Visual
                  </button>
                  <button 
                    onClick={() => setEditorMode('markdown')}
                    className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${editorMode === 'markdown' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                  >
                    Markdown
                  </button>
                </div>

                <button 
                  onClick={() => {
                    alert('¡Artículo aprobado y publicado con éxito vía Webhook en WordPress/Next.js!');
                    setIsCanvasModalOpen(false);
                  }}
                  className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_12px_rgba(255,90,0,0.35)] cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircleIcon className="w-4 h-4" /> Aprobar &amp; Enviar a CMS
                </button>
                <button 
                  onClick={() => setIsCanvasModalOpen(false)}
                  className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors cursor-pointer"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Split-Screen Layout */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              
              {/* Left Column: Editor View */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 border-r border-[var(--border)] bg-[var(--card)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase bg-[var(--primary)]/10 text-[var(--primary)] px-2.5 py-1 rounded font-bold">
                    Silo: RevOps &amp; HubSpot • 2,200 Palabras
                  </span>
                  <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)] font-mono">
                    <span>⏱️ Lectura: 6 min</span>
                    <span>🏷️ 14 Entidades</span>
                  </div>
                </div>

                {editorMode === 'visual' ? (
                  <>
                    <h1 className="text-2xl sm:text-3xl font-black leading-snug text-[var(--foreground)]">
                      {selectedArticleTitle}
                    </h1>
                    <p className="text-xs text-[var(--muted-foreground)] font-mono">
                      Slug sugerido: <span className="text-[var(--primary)]">/blog/alinear-marketing-ventas-hubspot-revops</span>
                    </p>

                    <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs space-y-2">
                      <strong className="text-[var(--foreground)] flex items-center gap-2">
                        <SparklesIcon className="w-4 h-4 text-amber-500" /> Extracto / Direct Answer para Perplexity &amp; ChatGPT:
                      </strong>
                      <p className="text-[var(--muted-foreground)] leading-relaxed italic">
                        "Alinear Marketing y Ventas en HubSpot requiere definir un SLA (Acuerdo de Nivel de Servicio) basado en Lead Scoring, sincronizar propiedades de ciclo de vida automáticas y activar notificaciones instantáneas para el equipo comercial ante prospectos calificados."
                      </p>
                    </div>

                    <div className="prose prose-sm max-w-none text-[var(--foreground)] space-y-4 text-xs sm:text-sm leading-relaxed">
                      <h2 className="text-lg font-bold border-b border-[var(--border)] pb-2">1. El Verdadero Costo de la Fricción entre Marketing y Ventas</h2>
                      <p className="text-[var(--muted-foreground)]">
                        En las empresas B2B tradicionales, hasta el 70% de los leads generados por campañas publicitarias nunca son contactados por los ejecutivos comerciales. Esto ocurre porque no existe un criterio unificado de lo que constituye un <em>Marketing Qualified Lead (MQL)</em> vs un <em>Sales Qualified Lead (SQL)</em>.
                      </p>

                      <h2 className="text-lg font-bold border-b border-[var(--border)] pb-2">2. Tabla Comparativa de Criterios de Calificación</h2>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border border-[var(--border)] rounded-lg">
                          <thead className="bg-[var(--muted)] text-[var(--muted-foreground)]">
                            <tr>
                              <th className="p-2.5">Etapa</th>
                              <th className="p-2.5">Criterio en HubSpot</th>
                              <th className="p-2.5">Acción Automatizada</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--border)]">
                            <tr>
                              <td className="p-2.5 font-bold">MQL</td>
                              <td className="p-2.5">Score &gt; 50 pts + Descarga Guía</td>
                              <td className="p-2.5">Nutrición por email</td>
                            </tr>
                            <tr>
                              <td className="p-2.5 font-bold text-[var(--primary)]">SQL</td>
                              <td className="p-2.5">Solicitud de Demo + Tamaño Empresa &gt; 20</td>
                              <td className="p-2.5 font-bold text-emerald-500">Asignar SDR en 5 min</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h2 className="text-lg font-bold border-b border-[var(--border)] pb-2">3. Implementación Paso a Paso del Workflow</h2>
                      <p className="text-[var(--muted-foreground)]">
                        Al utilizar las propiedades calculadas de HubSpot CRM combinadas con triggers de interacción de contenido, el ciclo comercial promedio disminuye de 45 a 18 días.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <textarea 
                      rows={18}
                      defaultValue={`# ${selectedArticleTitle}\n\n> **Respuesta Rápida AEO:** Alinear Marketing y Ventas en HubSpot requiere definir un SLA basado en Lead Scoring...\n\n## 1. El Verdadero Costo de la Fricción\nEn las empresas B2B tradicionales...\n\n## 2. Matriz de Conversión HubSpot\n| Etapa | Criterio HubSpot | Acción |\n|---|---|---|\n| MQL | Score > 50 pts | Nutrición Email |\n| SQL | Demo Request | Asignar SDR en 5m |\n\n\`\`\`json\n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "${selectedArticleTitle}"\n}\n\`\`\``}
                      className="w-full font-mono text-xs bg-[var(--background)] border border-[var(--border)] rounded-xl p-4 text-[var(--foreground)] focus:outline-none leading-relaxed"
                    />
                    <p className="text-[10px] text-[var(--muted-foreground)] font-mono">Modo Markdown en vivo. Los cambios se sincronizan en el simulador AEO de la derecha.</p>
                  </div>
                )}
              </div>

              {/* Right Column: Live AEO Citation Inspector */}
              <div className="w-full lg:w-96 bg-[var(--background)] p-6 space-y-6 overflow-y-auto border-t lg:border-t-0 border-[var(--border)]">
                
                {/* AI Simulation Tabs */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--muted-foreground)]">Simulador de Citación AEO</h4>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">● Simulación en Vivo</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 bg-[var(--card)] p-1 rounded-lg border border-[var(--border)] text-xs">
                    <button 
                      onClick={() => setAiSimTab('perplexity')}
                      className={`py-1 rounded font-bold text-center cursor-pointer transition-all ${aiSimTab === 'perplexity' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'text-[var(--muted-foreground)]'}`}
                    >
                      Perplexity
                    </button>
                    <button 
                      onClick={() => setAiSimTab('chatgpt')}
                      className={`py-1 rounded font-bold text-center cursor-pointer transition-all ${aiSimTab === 'chatgpt' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'text-[var(--muted-foreground)]'}`}
                    >
                      ChatGPT
                    </button>
                    <button 
                      onClick={() => setAiSimTab('google')}
                      className={`py-1 rounded font-bold text-center cursor-pointer transition-all ${aiSimTab === 'google' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'text-[var(--muted-foreground)]'}`}
                    >
                      Google AI
                    </button>
                  </div>
                </div>

                {/* Simulated AI Answer Bubble */}
                <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold flex items-center gap-1.5 text-[var(--foreground)]">
                      {aiSimTab === 'perplexity' && '🔮 Perplexity AI Answer'}
                      {aiSimTab === 'chatgpt' && '⚡ ChatGPT Search Result'}
                      {aiSimTab === 'google' && '🌐 Google AI Overview'}
                    </span>
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded font-bold">
                      Citando Tu Dominio [1]
                    </span>
                  </div>

                  <p className="text-[var(--muted-foreground)] leading-relaxed italic text-[11px]">
                    {aiSimTab === 'perplexity' && '"Según la guía técnica de RevOps en soyroman.com [1], la clave para sincronizar marketing y ventas radica en un SLA automatizado con Lead Scoring que activa alertas a SDRs en menos de 5 minutos..."'}
                    {aiSimTab === 'chatgpt' && '"Para empresas B2B, fuentes especializadas como soyroman.com destacan que calificar leads por tamaño y solicitud directa reduce el ciclo de ventas comercial de 45 a 18 días."'}
                    {aiSimTab === 'google' && '"Resumen de IA: La alineación en HubSpot CRM requiere definir etapas claras de MQL a SQL y crear flujos de trabajo de nutrición condicional (Fuente: soyroman.com)."'}
                  </p>

                  <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[10px]">
                    <span className="text-[var(--primary)] font-bold">Fuente Primaria: soyroman.com [1]</span>
                    <span className="text-emerald-500 font-bold">Probabilidad: 98%</span>
                  </div>
                </div>

                {/* Scorecard */}
                <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--foreground)]">Probabilidad de Citación</span>
                    <span className="text-2xl font-black text-emerald-500">96%</span>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[var(--muted-foreground)]">Respuesta Directa Párrafo 1</span>
                      <span className="text-emerald-500 font-bold">✓ Óptimo</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[var(--muted-foreground)]">Densidad de Entidades</span>
                      <span className="text-emerald-500 font-bold">✓ 94%</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[var(--muted-foreground)]">Marcado Schema JSON-LD</span>
                      <span className="text-emerald-500 font-bold">✓ Article + FAQ</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[var(--muted-foreground)]">Enlace Interno a Pilar</span>
                      <span className="text-emerald-500 font-bold">✓ 1 Enlace Activo</span>
                    </div>
                  </div>
                </div>

                {/* Meta Fields */}
                <div className="space-y-3 text-xs border-t border-[var(--border)] pt-4">
                  <p className="font-bold uppercase text-[10px] text-[var(--muted-foreground)] tracking-wider">Meta Etiquetas SEO</p>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--muted-foreground)] block mb-1">Meta Title</label>
                    <input 
                      type="text" 
                      defaultValue="Cómo alinear Marketing y Ventas en HubSpot | Guía RevOps 2026"
                      className="w-full bg-[var(--card)] border border-[var(--border)] rounded p-2 text-xs text-[var(--foreground)]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--muted-foreground)] block mb-1">Meta Description</label>
                    <textarea 
                      rows={2}
                      defaultValue="Aprende a integrar marketing y ventas en HubSpot CRM con workflows automatizados y SLAs para reducir el ciclo comercial hasta un 40%."
                      className="w-full bg-[var(--card)] border border-[var(--border)] rounded p-2 text-xs text-[var(--foreground)] leading-relaxed"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: COMMAND PALETTE GLOBAL (CMD + K) */}
      {isCommandPaletteOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-[var(--border)] flex items-center gap-3 bg-[var(--background)]">
              <MagnifyingGlassIcon className="w-5 h-5 text-[var(--primary)]" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Escribe un comando o busca una herramienta (ej. 'lanzador', 'hubspot', 'palabras')..."
                className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none"
                autoFocus
              />
              <kbd className="bg-[var(--muted)] text-[10px] font-mono px-2 py-1 rounded border border-[var(--border)] text-[var(--muted-foreground)]">ESC</kbd>
            </div>

            <div className="p-2 max-h-80 overflow-y-auto space-y-1 text-xs">
              <p className="px-3 py-1.5 text-[10px] font-bold uppercase text-[var(--muted-foreground)] tracking-wider">Acciones Rápidas</p>
              
              {[
                { name: "Ir al Lanzador & Configurador SEO/AEO", tab: "engineLauncher", icon: "🚀", desc: "Configura el agente generativo para tu web" },
                { name: "Ver Motor RevOps & Conexión HubSpot", tab: "revopsHubspot", icon: "🔄", desc: "Atribución de ingresos y deals cerrados" },
                { name: "Conectar CMS (Payload & WordPress)", tab: "cmsConnectors", icon: "🔌", desc: "Configura REST API o Plugin para despacho de artículos" },
                { name: "Consultar AEO / GEO Share of Voice", tab: "aiShareOfVoice", icon: "✨", desc: "Monitorea citaciones en ChatGPT y Perplexity" },
                { name: "Abrir Editor Canvas de Artículos", action: "canvas", icon: "📝", desc: "Previsualiza y aprueba borradores antes de publicar" },
                { name: "Abrir Terminal de Agentes Autónomos", action: "terminal", icon: "💻", desc: "Logs en vivo del motor de IA en segundo plano" },
                { name: "Explorar Topic Clusters & Silos", tab: "clusterMap", icon: "🕸️", desc: "Diseña la arquitectura semántica del sitio" },
                { name: "Inspeccionar SERP & AEO X-Ray", tab: "serpxray", icon: "⚡", desc: "Analiza el Top 10 de Google con Llama 3.1" },
                { name: "Alternar Modo Día / Modo Noche", action: "theme", icon: "🌓", desc: "Cambia el tema de color del estudio" },
              ]
                .filter(item => !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      if (item.tab) setActiveTab(item.tab);
                      if (item.action === 'canvas') setIsCanvasModalOpen(true);
                      if (item.action === 'terminal') setIsTerminalOpen(true);
                      if (item.action === 'theme') toggleTheme();
                      setIsCommandPaletteOpen(false);
                      setSearchQuery('');
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-[var(--muted)] flex items-center justify-between transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{item.icon}</span>
                      <div>
                        <p className="font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">{item.name}</p>
                        <p className="text-[11px] text-[var(--muted-foreground)]">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">Seleccionar ↵</span>
                  </button>
                ))}
            </div>

            <div className="p-3 bg-[var(--background)] border-t border-[var(--border)] flex justify-between items-center text-[10px] text-[var(--muted-foreground)]">
              <span>Usa <strong>↑ ↓</strong> para navegar y <strong>Enter</strong> para ejecutar</span>
              <span>Buildations Studio OS</span>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: DRAWER DE SUBSISTEMAS Y SEMÁFOROS KERNEL */}
      {selectedAgent && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-[var(--card)] border-l border-[var(--border)] h-full flex flex-col shadow-2xl p-6 space-y-6 overflow-y-auto">
            <div className="flex justify-between items-start border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-white shadow-md ${selectedAgent === 'sophia' ? 'bg-emerald-600' : selectedAgent === 'jax' ? 'bg-cyan-600' : 'bg-amber-600'}`}>
                  {selectedAgent === 'sophia' ? 'SC' : selectedAgent === 'jax' ? 'HS' : 'AEO'}
                </div>
                <div>
                  <h3 className="font-bold text-base capitalize flex items-center gap-2">
                    {selectedAgent === 'sophia' ? 'Subsistema Crawler SERP' : selectedAgent === 'jax' ? 'Subsistema RevOps HubSpot' : 'Subsistema Editorial AEO'}
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      SEMÁFORO: OPERATIVO
                    </span>
                    <span className="text-[10px] text-[var(--muted-foreground)]">Kernel PID #4892</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedAgent(null)}
                className="p-1.5 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] cursor-pointer"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Agent Live Reasoning & Thought Stream */}
            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold uppercase text-[10px] text-[var(--muted-foreground)] tracking-wider">Flujo de Razonamiento en Vivo</span>
                <span className="font-mono text-emerald-400 text-[10px]">Pings activos cada 4s</span>
              </div>

              <div className="space-y-2 font-mono text-[11px] bg-[var(--background)] p-4 rounded-xl border border-[var(--border)]">
                {selectedAgent === 'sophia' && (
                  <>
                    <p className="text-slate-400">&gt; Invocando tool: <span className="text-cyan-400">gsc_decay_audit()</span></p>
                    <p className="text-slate-400">&gt; Analizando 250 consultas en México y Latam...</p>
                    <p className="text-emerald-400">&gt; [OK] Detectada oportunidad en keyword: "revops hubspot cdmx"</p>
                    <p className="text-slate-400">&gt; Notificando a Agente Vera para generar borrador.</p>
                  </>
                )}
                {selectedAgent === 'jax' && (
                  <>
                    <p className="text-slate-400">&gt; Invocando tool: <span className="text-orange-400">hubspot_deal_sync()</span></p>
                    <p className="text-slate-400">&gt; Mapeando cookies de primer contacto con Deals de HubSpot...</p>
                    <p className="text-emerald-400">&gt; [OK] Atribuido deal #8942 ($18,000 USD) al artículo #ART-892</p>
                    <p className="text-slate-400">&gt; Actualizando métrica de ROI en tiempo real.</p>
                  </>
                )}
                {selectedAgent === 'vera' && (
                  <>
                    <p className="text-slate-400">&gt; Invocando tool: <span className="text-emerald-400">cloudflare_llama_synthesize()</span></p>
                    <p className="text-slate-400">&gt; Recuperando 4 fragmentos de Pinecone RAG...</p>
                    <p className="text-emerald-400">&gt; [OK] Redactando borrador con densidad AEO del 96%</p>
                    <p className="text-slate-400">&gt; Lista para enviar a webhook de WordPress en soyroman.com</p>
                  </>
                )}
              </div>

              {/* Controles de Agente */}
              <div className="pt-4 border-t border-[var(--border)] space-y-2">
                <button 
                  onClick={() => alert(`Se envió instrucción prioritaria al Agente ${selectedAgent}`)}
                  className="w-full bg-[var(--primary)] text-white py-2 rounded-lg text-xs font-bold hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-sm"
                >
                  Asignar Tarea Prioritaria a este Agente
                </button>
                <button 
                  onClick={() => alert(`Agente ${selectedAgent} pausado temporalmente.`)}
                  className="w-full bg-[var(--card)] border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-2 rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Pausar Agente Temporalmente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: QUICK URL AUDIT SCANNER */}
      {isQuickScanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl w-full max-w-lg shadow-2xl p-6 space-y-5">
            <div className="flex justify-between items-center border-b border-[var(--border)] pb-3">
              <h3 className="font-bold text-base flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-amber-500" /> Auditoría Instantánea de URL (Quick Scan)
              </h3>
              <button onClick={() => setIsQuickScanModalOpen(false)} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-[var(--muted-foreground)] block">Ingresa cualquier URL para evaluar su compatibilidad AEO en 5 segundos:</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={quickScanInput}
                  onChange={(e) => setQuickScanInput(e.target.value)}
                  placeholder="https://soyroman.com/blog/articulo"
                  className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                />
                <button 
                  onClick={handleQuickScan}
                  disabled={isScanningUrl || !quickScanInput}
                  className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[var(--primary-hover)] disabled:opacity-50 transition-all cursor-pointer shadow-sm"
                >
                  {isScanningUrl ? 'Escaneando...' : 'Escanear'}
                </button>
              </div>
            </div>

            {quickScanReport && (
              <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-3 text-xs animate-fade-in">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[var(--foreground)]">Resultado para: {quickScanReport.url}</span>
                  <span className="text-emerald-500 font-bold text-base">{quickScanReport.score}/100</span>
                </div>
                <p className="text-xs text-emerald-400 font-semibold">{quickScanReport.aeo}</p>
                <div className="space-y-1 text-[11px] text-[var(--muted-foreground)]">
                  {quickScanReport.issues.map((iss: string, idx: number) => (
                    <p key={idx}>• {iss}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FLOATING ACTION BAR (COMMAND DOCK INFERIOR ESTILO MACOS / RAYCAST) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-[var(--card)]/90 backdrop-blur-xl border border-[var(--border)] px-4 py-2 rounded-full shadow-2xl transition-all hover:scale-102">
        <button 
          onClick={() => {
            setQuickScanInput('https://' + currentWorkspace + '/blog');
            setIsQuickScanModalOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-[var(--muted)] text-[var(--foreground)] transition-colors cursor-pointer"
          title="Escanear cualquier URL al instante"
        >
          <BoltIcon className="w-4 h-4 text-amber-500" />
          <span>Quick Scan</span>
        </button>

        <span className="w-px h-4 bg-[var(--border)]"></span>

        <button 
          onClick={() => {
            setSelectedArticleTitle("Estrategias de Optimización AEO para B2B");
            setIsCanvasModalOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-[var(--muted)] text-[var(--foreground)] transition-colors cursor-pointer"
          title="Probar simulación de prompt en Perplexity y ChatGPT"
        >
          <SparklesIcon className="w-4 h-4 text-cyan-400" />
          <span>Simular AEO</span>
        </button>

        <span className="w-px h-4 bg-[var(--border)]"></span>

        <button 
          onClick={() => {
            alert('¡Ciclo forzado disparado! El motor autónomo está analizando nuevas oportunidades...');
            setIsTerminalOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-[0_0_12px_rgba(255,90,0,0.4)]"
          title="Forzar un ciclo de generación inmediata"
        >
          <RocketLaunchIcon className="w-3.5 h-3.5" />
          <span>Disparar Motor</span>
        </button>
      </div>

    </div>
  );
}
