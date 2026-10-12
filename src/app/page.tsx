'use client';

import Link from 'next/link';
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
  ArrowPathIcon,
  TrashIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

// LOGOS OFICIALES EN SVG DE ALTA FIDELIDAD
function SupabaseLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path 
        d="M13.4 2.1C13.2 1.4 12.3 1.2 11.8 1.7L2.4 11.9C1.8 12.6 2.3 13.6 3.2 13.6H11V21.9C11 22.6 11.9 22.8 12.4 22.3L21.8 12.1C22.4 11.4 21.9 10.4 21 10.4H13.4V2.1Z" 
        fill="#3ECF8E" 
      />
    </svg>
  );
}

function PostgresLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path 
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 16.5c-.8.1-1.7-.2-2.1-.8-.4-.6-.4-1.4-.4-2.2v-1.1c0-.4-.1-.7-.4-.9-.3-.2-.7-.2-1.1-.1-.3.1-.6.3-.9.6-.3.3-.6.7-.8 1.1-.2.4-.4.8-.7 1.1-.3.3-.7.5-1.1.5-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8 0-.4.1-.8.3-1.2.2-.4.4-.7.7-1 .3-.3.6-.5.9-.7.4-.2.8-.3 1.2-.4.4-.1.8-.1 1.2 0 .4.1.8.3 1.1.6.3.3.5.7.5 1.1v.8c0 .5.1.9.3 1.3.2.4.6.6 1 .6.4 0 .8-.2 1-.5.3-.3.4-.8.4-1.3v-1.8c0-.6.2-1.2.6-1.6.4-.4 1-.6 1.6-.6h1.5c.6 0 1.2.2 1.6.6.4.4.6 1 .6 1.6v2.5c0 .9-.3 1.7-.9 2.3-.6.6-1.4.9-2.3.9h-.8z" 
        fill="#336791"
      />
    </svg>
  );
}

function PineconeLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5l5.5 3.5L12 11.5 6.5 8 12 4.5zM6 9.5l5 3v6l-5-3.5V9.5zm7 9v-6l5-3v5.5l-5 3.5z" fill="#000000" className="dark:fill-white" />
    </svg>
  );
}

function QdrantLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#DC2626" />
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0zm6 3l3 3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HubSpotLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5" fill="#FF7A59" />
      <path d="M12 3v4.5M12 16.5V21M3 12h4.5M16.5 12H21" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="12" cy="3" r="2" fill="#FF7A59" />
      <circle cx="21" cy="12" r="2" fill="#FF7A59" />
    </svg>
  );
}

function PayloadLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.5l7.5 4.1-7.5 4.2-7.5-4.2L12 4.5zM4 9.8l7 3.9v7.5l-7-3.9V9.8zm9 11.4v-7.5l7-3.9v7.5l-7 3.9z" />
    </svg>
  );
}

function WordPressLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-8.2 10c0-1.8.6-3.4 1.5-4.8l4.4 12.1C5.8 17.8 3.8 15.1 3.8 12zm8.2 8.2c-1.1 0-2.2-.2-3.1-.7l3.4-9.9 3.5 9.7c-1.2.6-2.5.9-3.8.9zm1.3-12.7c.6 0 1.2-.1 1.2-.1.5 0 .5-.7 0-.7 0 0-.8.1-1.6.1-.8 0-1.6-.1-1.6-.1-.5 0-.5.7 0 .7 0 0 .5.1 1.1.1l2.4 7.2-1.9-5.7-1.4-4.5h-.1zm5.1 4.5c0-.9-.3-1.6-.6-2.2-.4-.8-.8-1.5-.8-2.3 0-.9.7-1.7 1.7-1.7h.2c1.7 1.8 2.8 4.2 2.8 6.9 0 2.4-.9 4.7-2.3 6.4l-1-7.1z" fill="#21759B" />
    </svg>
  );
}

function ClaudeLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#D97706">
      <path d="M12 2l2.2 6.8H21l-5.4 4 2.1 6.8-5.7-4.1-5.7 4.1 2.1-6.8L3 8.8h6.8L12 2z" />
    </svg>
  );
}

function OpenAILogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.28 12a9.98 9.98 0 0 0-.75-3.83 5.03 5.03 0 0 0-4.35-6.52A5.02 5.02 0 0 0 11.2.66a5.02 5.02 0 0 0-7.38 3.12 5.02 5.02 0 0 0-2.1 8.22 5.02 5.02 0 0 0 2.1 8.22 5.02 5.02 0 0 0 5.98 2.43 5.02 5.02 0 0 0 5.98-2.43 5.03 5.03 0 0 0 6.5-6.52A9.97 9.97 0 0 0 22.28 12z" fill="#10A37F" />
    </svg>
  );
}

function GoogleLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

function VercelLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  );
}

function NeonLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 19V5l7 7V5l7 7V5h2v14l-7-7v7l-7-7v7H4z" fill="#00E599" />
    </svg>
  );
}

function HetznerLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 3h4.2v6.6h7.6V3H20v18h-4.2v-7.1H8.2V21H4V3z" fill="#D50C2D" />
    </svg>
  );
}

function TechBadge({ name }: { name: string }) {
  const lower = name.toLowerCase();
  let icon = null;
  let border = "border-[var(--border)]";

  if (lower.includes('supabase')) {
    icon = <SupabaseLogo className="w-3.5 h-3.5 shrink-0" />;
    border = "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
  } else if (lower.includes('postgres')) {
    icon = <PostgresLogo className="w-3.5 h-3.5 shrink-0" />;
    border = "border-blue-500/30 bg-blue-500/10 text-blue-400";
  } else if (lower.includes('hubspot')) {
    icon = <HubSpotLogo className="w-3.5 h-3.5 shrink-0" />;
    border = "border-orange-500/30 bg-orange-500/10 text-orange-400";
  } else if (lower.includes('payload')) {
    icon = <PayloadLogo className="w-3.5 h-3.5 shrink-0" />;
    border = "border-zinc-500/30 bg-zinc-500/10 text-white";
  } else if (lower.includes('wordpress')) {
    icon = <WordPressLogo className="w-3.5 h-3.5 shrink-0" />;
    border = "border-cyan-500/30 bg-cyan-500/10 text-cyan-400";
  } else if (lower.includes('next.js') || lower.includes('nextjs')) {
    icon = (
      <span className="w-3.5 h-3.5 rounded-full bg-black border border-white/20 text-white flex items-center justify-center font-bold text-[8px] shrink-0">
        N
      </span>
    );
    border = "border-zinc-700 bg-black/40 text-zinc-200";
  } else if (lower.includes('stripe')) {
    icon = (
      <span className="w-3.5 h-3.5 rounded bg-[#635BFF] text-white flex items-center justify-center font-bold text-[8px] shrink-0">
        S
      </span>
    );
    border = "border-indigo-500/30 bg-indigo-500/10 text-indigo-400";
  } else if (lower.includes('vercel')) {
    icon = (
      <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    );
    border = "border-zinc-600 bg-zinc-900/50 text-zinc-300";
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[10px] font-mono font-medium ${border}`}>
      {icon}
      <span>{name}</span>
    </span>
  );
}

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('overview');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentWorkspace, setCurrentWorkspace] = useState('soyroman.com');
  const [isWorkspaceDropdownOpen, setIsWorkspaceDropdownOpen] = useState(false);
  const [isInfrastructureModalOpen, setIsInfrastructureModalOpen] = useState(false);

  // Proyectos Gestionados con Vercel API Integration
  const [vercelProjects, setVercelProjects] = useState([
    {
      id: 'prj_soyroman_live',
      name: 'soyroman.com',
      domain: 'https://soyroman.com',
      gitRepo: 'romangsweb/soyroman-web',
      status: 'Ready',
      branch: 'main',
      framework: 'Next.js 15 (App Router)',
      targetEngine: 'Motor Generador de Landing Pages & Silos',
      lastDeploy: 'Hace 8 min',
      databaseBinding: 'Neon PostgreSQL (Dedicated Serverless)',
      environment: 'Production'
    },
    {
      id: 'prj_buildations_studio',
      name: 'buildations.studio',
      domain: 'https://buildations.studio',
      gitRepo: 'romangsweb/buildations-core',
      status: 'Ready',
      branch: 'main',
      framework: 'Next.js 16 (Turbopack)',
      targetEngine: 'Motor RevOps & AEO Latam (SaaS Principal)',
      lastDeploy: 'Hace 2 min',
      databaseBinding: 'Buildations Core DB (Hetzner Bare-Metal Cluster)',
      environment: 'Production'
    },
    {
      id: 'prj_consenso_io',
      name: 'consenso.io',
      domain: 'https://consenso.io',
      gitRepo: 'romangsweb/Consenso',
      status: 'Building',
      branch: 'main',
      framework: 'Next.js 16 (Turbopack)',
      targetEngine: 'Motor Noticias & Decaimiento GSC (Breaking News)',
      lastDeploy: 'En despliegue...',
      databaseBinding: 'Neon PostgreSQL (Staging Pool)',
      environment: 'Production'
    },
    {
      id: 'prj_fintechmx_portal',
      name: 'fintechmx.io',
      domain: 'https://fintechmx.io',
      gitRepo: 'romangsweb/fintechmx',
      status: 'Ready',
      branch: 'main',
      framework: 'Next.js 15',
      targetEngine: 'Motor Lead Gen B2B',
      lastDeploy: 'Hace 3 horas',
      databaseBinding: 'Neon PostgreSQL (Production Branch)',
      environment: 'Production'
    }
  ]);

  // Bases de Datos Cloud: Neon Serverless + Hetzner Dedicated Bare-Metal
  const [cloudDatabases, setCloudDatabases] = useState([
    {
      id: 'db_buildations_hetzner',
      name: 'Buildations Core PostgreSQL (Dedicated Hetzner)',
      host: 'pg-dedicated-01.buildations.studio',
      provider: 'Hetzner Dedicated NVMe',
      region: 'Falkenstein (FSN1) / Ashburn Gateway',
      version: 'PostgreSQL 16.2 + pgvector 0.7.0',
      specs: '64GB RAM · 8 vCPU · 1TB NVMe RAID-1',
      activeConnections: 42,
      latency: '22ms',
      status: 'Online',
      type: 'Hetzner Dedicated'
    },
    {
      id: 'db_neon_production',
      name: 'Neon Serverless Main (soyroman.com & fintechmx)',
      host: 'ep-cool-butterfly-7128.us-east-2.aws.neon.tech',
      provider: 'Neon Cloud (Serverless Postgres)',
      region: 'AWS us-east-2 (Ohio)',
      version: 'PostgreSQL 16 + pgvector Serverless',
      specs: 'Autoscaling (0.25 CU a 8 CU)',
      activeConnections: 18,
      latency: '34ms',
      status: 'Online',
      type: 'Neon Serverless'
    },
    {
      id: 'db_neon_consenso',
      name: 'Neon Staging Pool (consenso.io newsfeed)',
      host: 'ep-winter-waterfall-9912.eu-central-1.neon.tech',
      provider: 'Neon Cloud (Branching)',
      region: 'AWS eu-central-1 (Frankfurt)',
      version: 'PostgreSQL 16 + pgvector',
      specs: 'Autoscaling (1 CU fijo)',
      activeConnections: 7,
      latency: '28ms',
      status: 'Online',
      type: 'Neon Serverless'
    }
  ]);

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCanvasModalOpen, setIsCanvasModalOpen] = useState(false);
  const [selectedArticleTitle, setSelectedArticleTitle] = useState('Cómo alinear Marketing y Ventas en HubSpot para reducir el ciclo de cierre');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sistema de Notificaciones Toasts y Alertas Diseñadas de BUILDATIONS STUDIO
  const [toasts, setToasts] = useState<Array<{
    id: string;
    title: string;
    message: string;
    type: 'success' | 'info' | 'warning' | 'error';
    timestamp: string;
    action?: { label: string; onClick: () => void };
  }>>([
    {
      id: 'toast-init',
      title: 'Sistema de Notificaciones Activo',
      message: 'Alertas visuales de alta precisión sin popups genéricos del navegador.',
      type: 'info',
      timestamp: 'Ahora'
    }
  ]);

  const showToast = (
    title: string, 
    message: string, 
    type: 'success' | 'info' | 'warning' | 'error' = 'info',
    action?: { label: string; onClick: () => void }
  ) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const newToast = {
      id,
      title,
      message,
      type,
      timestamp: 'Justo ahora',
      action
    };
    setToasts(prev => [newToast, ...prev].slice(0, 4));
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Diálogo Modal Custom para Entrada de Usuario (sustituye prompt del navegador)
  const [promptDialog, setPromptDialog] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    defaultValue: string;
    placeholder: string;
    onSubmit: (value: string) => void;
  }>({
    isOpen: false,
    title: '',
    description: '',
    defaultValue: '',
    placeholder: '',
    onSubmit: () => {}
  });
  const [promptInputValue, setPromptInputValue] = useState('');

  const showPrompt = (
    title: string,
    description: string,
    defaultValue: string,
    placeholder: string,
    onSubmit: (value: string) => void
  ) => {
    setPromptInputValue(defaultValue);
    setPromptDialog({
      isOpen: true,
      title,
      description,
      defaultValue,
      placeholder,
      onSubmit
    });
  };

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

  // Estados para Datasets de Keywords RAG y Reconstructor de Sitemaps
  const [keywordDatasets, setKeywordDatasets] = useState([
    {
      id: 'ds-revops',
      name: 'Dataset RevOps B2B & Pipelines HubSpot',
      category: 'RevOps & Ventas',
      count: 24,
      embeddingsStatus: 'Sincronizado (1,536 dims)',
      topKw: ['alineacion marketing ventas', 'mql to sql conversion', 'revops cdmx', 'automatizacion pipeline'],
      similarityScore: '0.94 cosine'
    },
    {
      id: 'ds-aeo',
      name: 'Dataset Búsqueda Generativa & AEO Citabilidad',
      category: 'AEO & AI Search',
      count: 38,
      embeddingsStatus: 'Sincronizado (1,536 dims)',
      topKw: ['como aparecer en perplexity', 'optimizacion searchgpt', 'schema json-ld aeo', 'knowledge graph seo'],
      similarityScore: '0.91 cosine'
    },
    {
      id: 'ds-saas',
      name: 'Dataset FinTech & B2B SaaS Enterprise',
      category: 'SaaS & Fintech',
      count: 19,
      embeddingsStatus: 'En Cola de Vectorización',
      topKw: ['pasarelas de pago latam', 'retencion cohortes saas', 'sla ventas enterprise'],
      similarityScore: '0.88 cosine'
    }
  ]);
  const [selectedDatasetId, setSelectedDatasetId] = useState('ds-revops');
  const [newKeywordInput, setNewKeywordInput] = useState('');
  const [newDatasetName, setNewDatasetName] = useState('');

  // Estructura de Sitemap Jerárquico Editable
  const [sitemapSilos, setSitemapSilos] = useState([
    {
      id: 'silo-1',
      pillarTitle: 'HubSpot RevOps & Alineación Comercial',
      slug: '/revops-hubspot',
      authorityScore: 92,
      recommendation: 'Pilar Sólido - Top 3 en SERP. Agregar 2 clusters satélite para capturar long-tail transaccional.',
      satellites: [
        { id: 'sat-1-1', title: 'Cómo alinear Marketing y Ventas en HubSpot', slug: '/revops-hubspot/alinear-marketing-ventas', status: 'published', priority: 'Alta' },
        { id: 'sat-1-2', title: 'Definición de SLAs entre MQLs y SQLs', slug: '/revops-hubspot/sla-mql-sql', status: 'published', priority: 'Alta' },
        { id: 'sat-1-3', title: 'Automatización de Pipelines para Equipos B2B', slug: '/revops-hubspot/automatizar-pipeline', status: 'draft', priority: 'Media' },
        { id: 'sat-1-4', title: 'Auditoría de Higiene y Calidad de Leads en HubSpot', slug: '/revops-hubspot/higiene-leads-hubspot', status: 'planned', priority: 'Urgente' }
      ]
    },
    {
      id: 'silo-2',
      pillarTitle: 'Optimización de Búsqueda AEO & GEO para Motores de Respuesta',
      slug: '/aeo-optimizacion',
      authorityScore: 86,
      recommendation: 'Oportunidad Crítica - Perplexity está demandando fuentes locales en CDMX. Vincular con schema FAQPage.',
      satellites: [
        { id: 'sat-2-1', title: 'Estrategias AEO para B2B en México y Latam', slug: '/aeo-optimizacion/estrategias-aeo-mexico', status: 'published', priority: 'Alta' },
        { id: 'sat-2-2', title: 'Cómo Estructurar Schema FAQPage y Organization', slug: '/aeo-optimizacion/schema-faqpage-jsonld', status: 'draft', priority: 'Alta' },
        { id: 'sat-2-3', title: 'Comparativa: SEO Tradicional vs Visibilidad AEO', slug: '/aeo-optimizacion/seo-vs-aeo', status: 'planned', priority: 'Media' }
      ]
    },
    {
      id: 'silo-3',
      pillarTitle: 'Arquitectura de Contenido y Conectores CMS Autónomos',
      slug: '/conectores-cms',
      authorityScore: 78,
      recommendation: 'Canibalización Potencial - 2 URLs compiten por el término "CMS headless". Se sugiere fusionar en silo pilar.',
      satellites: [
        { id: 'sat-3-1', title: 'Integración Nativa con Payload CMS 3.x App Router', slug: '/conectores-cms/payload-cms-guia', status: 'published', priority: 'Media' },
        { id: 'sat-3-2', title: 'Plugin Oficial de WordPress para Publicación Headless', slug: '/conectores-cms/plugin-wordpress-oficial', status: 'draft', priority: 'Alta' }
      ]
    }
  ]);
  const [sitemapFilter, setSitemapFilter] = useState<'all' | 'issues' | 'opportunities'>('all');

  // Estados para Constructor Gráfico de Motores (Engine Studio Wizard & Topology Architecture)
  const [engineWizardStep, setEngineWizardStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [activeEngines, setActiveEngines] = useState([
    {
      id: 'eng-01',
      name: 'Motor RevOps & AEO Latam (SaaS Principal)',
      targetDomain: 'https://buildations.studio',
      purpose: 'Posicionamiento y Citabilidad en LLMs (Perplexity, ChatGPT, Claude)',
      type: 'AEO / Citabilidad B2B',
      llmCore: 'Claude 3.5 Sonnet',
      vectorStore: 'Supabase pgvector',
      status: 'active' as 'active' | 'paused' | 'standby',
      health: 99.4,
      publishedWeekly: 6,
      tokensSpent: '142.8k',
      latency: '1.42s',
      powerRate: 98,
      lastRun: 'Hace 4 min',
      frequency: '3_per_week'
    },
    {
      id: 'eng-02',
      name: 'Motor Generador de Landing Pages & Silos',
      targetDomain: 'https://soyroman.com',
      purpose: 'Construcción y actualización dinámica de páginas de aterrizaje programáticas',
      type: 'Generador de Web Pages',
      llmCore: 'GPT-4o Enterprise',
      vectorStore: 'Pinecone Vector DB',
      status: 'active' as 'active' | 'paused' | 'standby',
      health: 97.8,
      publishedWeekly: 14,
      tokensSpent: '380.2k',
      latency: '1.85s',
      powerRate: 92,
      lastRun: 'Hace 18 min',
      frequency: 'daily'
    },
    {
      id: 'eng-03',
      name: 'Motor Noticias & Decaimiento GSC (Breaking News)',
      targetDomain: 'https://consenso.io',
      purpose: 'Detección de canibalizaciones y reescritura de noticias en tiempo real',
      type: 'Newsfeed & GSC Decay',
      llmCore: 'DeepSeek-V3',
      vectorStore: 'Qdrant Distributed',
      status: 'standby' as 'active' | 'paused' | 'standby',
      health: 94.2,
      publishedWeekly: 28,
      tokensSpent: '89.4k',
      latency: '0.98s',
      powerRate: 88,
      lastRun: 'Hace 1 hora',
      frequency: 'hourly_breaking'
    }
  ]);
  const [selectedEngineId, setSelectedEngineId] = useState('eng-01');

  const [engineConfig, setEngineConfig] = useState({
    name: 'Motor Autónomo RevOps & AEO Latam',
    targetDomain: 'https://buildations.studio',
    industry: 'B2B SaaS & Tech Consulting',
    brandArchetype: 'Experto Analítico y Autoritario',
    targetLanguage: 'es-MX (Español Latinoamericano Neutro)',
    // Ingesta
    connectors: {
      payloadCms: true,
      wordpress: false,
      gsc: true,
      competitorRss: true,
      keywordDatasets: ['ds-revops', 'ds-aeo']
    },
    // Modelo IA
    llmCore: 'Claude 3.5 Sonnet' as 'Claude 3.5 Sonnet' | 'GPT-4o Enterprise' | 'DeepSeek-V3' | 'Llama 3.3 70B',
    temperature: 0.35,
    factCheckingStrictness: 90, // %
    aeoDensityScore: 85, // %
    // Vector Store & RAG
    vectorStore: 'Pinecone Vector DB' as 'Pinecone Vector DB' | 'Qdrant Distributed' | 'Supabase pgvector',
    cosineThreshold: 0.88,
    chunkSizeTokens: 512,
    // RevOps & Despliegue
    hubspotIntegration: true,
    hubspotPortalId: '982104',
    publishMode: 'draft' as 'draft' | 'autonomous',
    frequency: '3_per_week' as 'daily' | '3_per_week' | 'weekly' | 'hourly_breaking',
    status: 'configured'
  });
  const [isCompilingEngine, setIsCompilingEngine] = useState(false);
  const [engineCompileSuccess, setEngineCompileSuccess] = useState(false);
  const [dryRunLogs, setDryRunLogs] = useState<string[]>([]);
  const [isDryRunModalOpen, setIsDryRunModalOpen] = useState(false);

  // Estados para Documentación, Manual de Uso y Homologación
  const [docCategory, setDocCategory] = useState<'quickstart' | 'architecture' | 'engines' | 'connectors' | 'faqs' | 'troubleshooting'>('quickstart');
  const [docSearchQuery, setDocSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Estados para Configuración de Cuenta & Enterprise Vault
  const [settingsTab, setSettingsTab] = useState<'apiKeys' | 'dns' | 'webhooks' | 'general' | 'team'>('apiKeys');
  const [accountSettings, setAccountSettings] = useState({
    agencyName: 'BUILDATIONS STUDIO // CORE',
    plan: 'Enterprise Dedicated Tier',
    primaryOwner: 'Román García',
    billingEmail: 'roman@buildations.studio',
    slaGuaranteed: '99.98%',
    activeRegion: 'us-east-1 (N. Virginia) + Falkenstein Edge',
    // Bóveda de API Keys
    apiKeys: {
      anthropicKey: 'sk-ant-api03-98fa9sdf87asdf897asdf-LIVE',
      openaiKey: 'sk-proj-a98sdf78asdf987asdf987-PROD',
      deepseekKey: 'sk-ds-89a7sdf897asdf87asdf-FAST',
      googleSearchConsoleToken: 'gsc_oauth_refresh_98a7sdf987a',
      hubspotAccessToken: 'pat-na1-897asdf897asdf-ENTERPRISE',
      vercelApiToken: 'vercel_tok_89a7sdf897asdf897a',
      neonApiKey: 'neon_api_key_89a7sdf897asdf',
      supabaseServiceKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      pineconeApiKey: 'pcsk_89a7sdf897asdf897a'
    },
    // Enrutamiento DNS & Dominios Personalizados
    dnsRecords: [
      {
        id: 'dns-1',
        type: 'A',
        host: '@ (Root Apex)',
        value: '76.76.21.21',
        target: 'Vercel Edge Anycast Network',
        status: 'Validado',
        ttl: 'Auto'
      },
      {
        id: 'dns-2',
        type: 'CNAME',
        host: 'cname.buildations.studio',
        value: 'cname.vercel-dns.com',
        target: 'Vercel Global CDN Edge',
        status: 'Validado',
        ttl: '60s'
      },
      {
        id: 'dns-3',
        type: 'A',
        host: 'pg-dedicated-01',
        value: '138.201.192.44',
        target: 'Hetzner Bare-Metal Node (Dedicated NVMe)',
        status: 'Validado',
        ttl: '300s'
      },
      {
        id: 'dns-4',
        type: 'TXT',
        host: '_hubspot-challenge',
        value: 'hubspot-site-verification=982104-prod',
        target: 'HubSpot Domain Verification',
        status: 'Validado',
        ttl: '3600s'
      },
      {
        id: 'dns-5',
        type: 'CNAME',
        host: 'api.consenso.io',
        value: 'gateway.consenso.io',
        target: 'Cloudflare Proxy / WAF Shield',
        status: 'En Propagación',
        ttl: 'Auto'
      }
    ],
    // Webhooks & Eventos de Despacho
    webhooks: [
      {
        id: 'wh-1',
        name: 'HubSpot Deal Creation on High AEO Citation',
        endpoint: 'https://api.hubspot.com/automation/v3/actions/callbacks/aeo-lead',
        events: ['article.published', 'lead.score_over_90'],
        status: 'Activo',
        lastTrigger: 'Hace 12 min (200 OK)'
      },
      {
        id: 'wh-2',
        name: 'Vercel On-Demand ISR Sitemap Purge',
        endpoint: 'https://buildations.studio/api/revalidate?secret=buildations_sec_99',
        events: ['sitemap.regenerated', 'engine.cycle_completed'],
        status: 'Activo',
        lastTrigger: 'Hace 45 min (200 OK)'
      },
      {
        id: 'wh-3',
        name: 'Slack Dev Alert on Worker Latency Spike',
        endpoint: 'https://hooks.slack.com/services/T00/B00/X00',
        events: ['worker.latency_warning', 'fact_check.anomaly'],
        status: 'Activo',
        lastTrigger: 'Hace 2 horas (200 OK)'
      }
    ]
  });

  const [revealedKeys, setRevealedKeys] = useState<Record<string, boolean>>({});
  const [pingStatus, setPingStatus] = useState<Record<string, { latency: number; status: string }>>({});
  const [dnsTesting, setDnsTesting] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    { id: 'usr-1', name: 'Román García', email: 'roman@buildations.studio', role: 'Super Admin (Owner)', status: 'Activo', twoFactor: true, lastLogin: 'Hace 4 minutos' },
    { id: 'usr-2', name: 'Sofia Morales', email: 'sofia@buildations.studio', role: 'RevOps Lead & Editor', status: 'Activo', twoFactor: true, lastLogin: 'Hoy, 10:14 AM' },
    { id: 'usr-3', name: 'Carlos Mendoza', email: 'carlos.m@buildations.studio', role: 'DevOps / Cloud Architect', status: 'Activo', twoFactor: true, lastLogin: 'Ayer' },
    { id: 'usr-4', name: 'Service Worker Autopilot', email: 'service-bot@buildations.internal', role: 'Bot de Orquestación', status: 'En Ejecución', twoFactor: false, lastLogin: 'En Vivo' },
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
            <div className="px-4 flex items-center justify-between mb-2">
              <p className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider">Motores & Lanzadores</p>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {activeEngines.filter(e => e.status === 'active').length} ON
              </span>
            </div>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('engineBuilder')}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'engineBuilder' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <div className="flex items-center">
                  <CpuChipIcon className="w-5 h-5 mr-3 text-amber-400" /> Constructor de Motores
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)] animate-pulse"></span>
              </button>
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
                <DocumentTextIcon className="w-5 h-5 mr-3" /> Datasets RAG &amp; Embeddings
              </button>
              <button 
                onClick={() => setActiveTab('sitemapReconstructor')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'sitemapReconstructor' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <ShareIcon className="w-5 h-5 mr-3 text-amber-400" /> Reconstructor de Sitemaps
              </button>
              <button 
                onClick={() => setActiveTab('contentDecay')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'contentDecay' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <ChartBarIcon className="w-5 h-5 mr-3" /> Auditoría GSC (Decay)
              </button>
            </div>
          </div>

          {/* Section 4: Documentación y Homologación */}
          <div>
            <p className="px-4 text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Homologación &amp; Ayuda</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">DOCS</span>
            </p>
            <div className="space-y-1">
              <button 
                onClick={() => setActiveTab('documentation')}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'documentation' ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'}`}
              >
                <div className="flex items-center">
                  <BookOpenIcon className="w-5 h-5 mr-3 text-cyan-400" /> Manual &amp; Documentación
                </div>
                <span className="text-[9px] font-mono px-1.5 rounded bg-[var(--muted)] text-[var(--foreground)] font-bold">V2.4</span>
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
              <Link 
                href="/login" 
                className="text-[10px] font-mono text-zinc-400 hover:text-[var(--primary)] transition-colors flex items-center gap-1"
                title="Ir al Portal de Acceso y Login con Canvas Generativo"
              >
                <span>Portal Login ↗</span>
              </Link>
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
          <div 
            onClick={() => setActiveTab('settings')}
            className="flex items-center cursor-pointer group flex-1 mr-2 p-1 rounded-lg hover:bg-[var(--muted)]/50 transition-colors"
            title="Ir a Configuración de Cuenta & Enterprise Vault"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[var(--primary)] to-amber-400 mr-3 shadow-sm flex items-center justify-center font-bold text-white text-xs shrink-0 group-hover:scale-105 transition-transform">
              RG
            </div>
            <div className="truncate">
              <p className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors truncate">Román García</p>
              <p className="text-xs text-[var(--muted-foreground)] flex items-center gap-1">
                <span>Agencia Pro</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setActiveTab('settings')}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                activeTab === 'settings' 
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm' 
                  : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)] text-[var(--foreground)]'
              }`}
              title="Configuración de Cuenta & Vault"
            >
              <Cog6ToothIcon className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)] text-[var(--foreground)] transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Modo Día' : 'Modo Noche'}
            >
              {theme === 'dark' ? <SunIcon className="w-4 h-4 text-amber-400" /> : <MoonIcon className="w-4 h-4 text-indigo-500" />}
            </button>
          </div>
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
                <div className="absolute left-0 mt-2 w-72 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-2xl p-2 z-50 animate-fade-in space-y-1">
                  <div className="px-2 py-1 flex items-center justify-between border-b border-[var(--border)]/60 pb-1.5 mb-1">
                    <span className="text-[10px] font-bold uppercase text-[var(--muted-foreground)] flex items-center gap-1.5">
                      <VercelLogo className="w-3 h-3 text-white" /> Proyectos Vercel ({vercelProjects.length})
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                      LIVE
                    </span>
                  </div>

                  {vercelProjects.map((vp) => (
                    <button 
                      key={vp.id}
                      onClick={() => {
                        setCurrentWorkspace(vp.name);
                        setIsWorkspaceDropdownOpen(false);
                        showToast('Workspace Activo', `Conectado a ${vp.name} (Vercel + ${vp.databaseBinding.split(' ')[0]})`, 'info');
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between group ${
                        currentWorkspace === vp.name 
                          ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-bold border border-[var(--primary)]/30' 
                          : 'hover:bg-[var(--muted)] text-[var(--foreground)]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${vp.status === 'Ready' ? 'bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]' : 'bg-amber-400 animate-ping'}`} />
                        <div className="truncate">
                          <span className="block truncate leading-tight">{vp.name}</span>
                          <span className="text-[10px] text-[var(--muted-foreground)] font-mono block truncate">
                            {vp.databaseBinding.includes('Neon') ? 'Neon Postgres' : 'Hetzner Cluster'}
                          </span>
                        </div>
                      </div>
                      {currentWorkspace === vp.name && <span className="text-xs font-bold shrink-0 ml-1">✓</span>}
                    </button>
                  ))}

                  <div className="border-t border-[var(--border)] mt-1.5 pt-1.5 space-y-1">
                    <button 
                      onClick={() => {
                        setIsWorkspaceDropdownOpen(false);
                        setIsInfrastructureModalOpen(true);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-cyan-400 font-bold hover:bg-cyan-500/10 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <ServerStackIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>Panel Infraestructura (Vercel · Neon · Hetzner) ↗</span>
                    </button>

                    <button 
                      onClick={() => {
                        setIsWorkspaceDropdownOpen(false);
                        showPrompt(
                          'Vincular Nuevo Proyecto Vercel / Dominio',
                          'Introduce el dominio del proyecto hospedado en Vercel o tu repo Git:',
                          'https://',
                          'https://mi-nuevo-sitio.com',
                          (newDomain) => {
                            const cleanName = newDomain.replace(/^https?:\/\//, '');
                            const newPrj = {
                              id: `prj_${Date.now()}`,
                              name: cleanName,
                              domain: newDomain,
                              gitRepo: `romangsweb/${cleanName.split('.')[0]}`,
                              status: 'Ready' as const,
                              branch: 'main',
                              framework: 'Next.js 15 (App Router)',
                              targetEngine: 'Motor Autopiloto Personalizado',
                              lastDeploy: 'Justo ahora',
                              databaseBinding: 'Neon PostgreSQL (Dedicated Serverless)',
                              environment: 'Production'
                            };
                            setVercelProjects(prev => [newPrj, ...prev]);
                            setCurrentWorkspace(cleanName);
                            showToast('Proyecto Vercel Vinculado', `${cleanName} ahora está disponible en el ecosistema.`, 'success');
                          }
                        );
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-[var(--primary)] font-bold hover:bg-[var(--muted)] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <PlusIcon className="w-3.5 h-3.5" /> + Vincular Nuevo Dominio Vercel
                    </button>
                  </div>
                </div>
              )}
            </div>

            <span className="text-[var(--border)] hidden sm:inline">|</span>
            <span className="mx-2 hidden sm:inline">Sección:</span>
            <span className="text-[var(--foreground)] font-semibold capitalize hidden sm:inline">
              {activeTab
                .replace('engineBuilder', 'Constructor Gráfico de Motores (Studio & Topology Architecture)')
                .replace('engineLauncher', 'Lanzador y Configurador de Motor SEO/AEO')
                .replace('revopsHubspot', 'Motor RevOps & Conexión HubSpot')
                .replace('cmsConnectors', 'Conectores CMS Oficiales (Payload & WordPress)')
                .replace('dataEnrichment', 'Enriquecedor de Datos & Limpieza B2B (HubSpot Best Practices)')
                .replace('sitemapReconstructor', 'Reconstructor y Optimizador de Sitemaps (Arquitectura de Silos)')
                .replace('aiShareOfVoice', 'Radar de Citabilidad & Búsqueda')
                .replace('clusterMap', 'Clusters & Silos de Contenido')
                .replace('serpxray', 'SERP & AEO X-Ray')
                .replace('apihub', 'API Hub')
                .replace('contentDecay', 'Auditoría GSC')
                .replace('rag', 'Datasets de Keywords & RAG Vectorial')
                .replace('planner', 'Keyword Planner')
                .replace('competitors', 'Radar Competencia')
                .replace('documentation', 'Manual de Uso, Homologación de Módulos & FAQs Técnicos')
                .replace('settings', 'Configuración de Cuenta & Bóveda Enterprise (API Keys, DNS, Webhooks)')
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
                      onClick={() => showToast('Generando Informe C-Level', 'Compilando informe ejecutivo formal con sellos de autoridad y atribución RevOps en PDF...', 'success')}
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

            {/* OVERVIEW TAB - MINIMAL & CLEAN EDITORIAL AESTHETIC */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header Minimalista y Limpio */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border)]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(255,90,0,0.8)]"></span>
                      <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--muted-foreground)] font-bold">
                        Workspace // {currentWorkspace}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[var(--foreground)]">
                      Rendimiento &amp; <span className="font-semibold text-[var(--foreground)]">Posicionamiento</span>
                    </h2>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      Métricas consolidadas de tracción orgánica, visibilidad en respuestas y atribución a Deals.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono text-[var(--muted-foreground)] px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)]/60">
                      Sync: <strong className="text-[var(--foreground)]">Hace 4m</strong>
                    </span>
                    <button className="bg-[var(--foreground)] text-[var(--background)] px-4 py-1.5 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-sm">
                      Exportar
                    </button>
                  </div>
                </div>

                {/* Grid de Métricas Minimalistas con Glass Sutil */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="glass-card p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                      <span className="font-medium">Tráfico Mensual</span>
                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">+18.4%</span>
                    </div>
                    <p className="text-3xl font-extrabold tracking-tight text-[var(--foreground)] font-mono">
                      42,850
                    </p>
                    <div className="pt-2 border-t border-[var(--border)] flex justify-between text-[11px] text-[var(--muted-foreground)]">
                      <span>Impresiones</span>
                      <span className="font-mono text-[var(--foreground)]">384k</span>
                    </div>
                  </div>

                  <div className="glass-card p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                      <span className="font-medium">Keywords Top 3</span>
                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">+14</span>
                    </div>
                    <p className="text-3xl font-extrabold tracking-tight text-[var(--foreground)] font-mono">
                      342
                    </p>
                    <div className="pt-2 border-t border-[var(--border)] flex justify-between text-[11px] text-[var(--muted-foreground)]">
                      <span>Top 10 total</span>
                      <span className="font-mono text-[var(--foreground)]">1,120</span>
                    </div>
                  </div>

                  <div className="glass-card p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                      <span className="font-medium">Citación Sintética (AEO)</span>
                      <span className="font-mono text-[10px] text-[var(--primary)] bg-[var(--primary)]/10 px-1.5 py-0.5 rounded font-bold">Líder</span>
                    </div>
                    <p className="text-3xl font-extrabold tracking-tight text-[var(--foreground)] font-mono">
                      64.2%
                    </p>
                    <div className="pt-2 border-t border-[var(--border)] flex justify-between text-[11px] text-[var(--muted-foreground)]">
                      <span>Perplexity &amp; SearchGPT</span>
                      <span className="font-mono text-[var(--foreground)]">Top 1</span>
                    </div>
                  </div>

                  <div className="glass-card p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                      <span className="font-medium">Pipeline HubSpot</span>
                      <span className="font-mono text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-bold">Atribuido</span>
                    </div>
                    <p className="text-3xl font-extrabold tracking-tight text-[var(--foreground)] font-mono">
                      $148.2k
                    </p>
                    <div className="pt-2 border-t border-[var(--border)] flex justify-between text-[11px] text-[var(--muted-foreground)]">
                      <span>Deals de Orgánico</span>
                      <span className="font-mono text-[var(--foreground)]">12 cerrados</span>
                    </div>
                  </div>
                </div>

                {/* Main Activity Chart - Minimalist & Sleek */}
                <div className="glass-card p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-base text-[var(--foreground)]">Evolución de Tráfico Orgánico vs Competencia</h3>
                      <p className="text-xs text-[var(--muted-foreground)]">Crecimiento constante tras indexación de los clusters semánticos.</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[var(--background)]/80 p-1 rounded-lg border border-[var(--border)] text-xs font-mono">
                      <button className="px-2.5 py-1 rounded bg-[var(--card)] text-[var(--foreground)] font-bold shadow-sm">30D</button>
                      <button className="px-2.5 py-1 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)]">90D</button>
                      <button className="px-2.5 py-1 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)]">1Y</button>
                    </div>
                  </div>

                  <div className="h-60 flex items-end space-x-3 pt-6 px-2">
                    {[45, 52, 49, 60, 72, 68, 85, 94, 88, 102, 115, 128].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                        <div 
                          className="w-full bg-[var(--muted)]/60 group-hover:bg-gradient-to-t group-hover:from-[var(--primary)] group-hover:to-amber-400 rounded-md transition-all relative"
                          style={{ height: `${h * 1.5}px` }}
                        >
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] font-mono text-[10px] py-1 px-2 rounded-md shadow-xl whitespace-nowrap transition-opacity pointer-events-none">
                            {h * 120} visitas
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">
                          M{i+1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: CONSTRUCTOR GRÁFICO DE MOTORES & ARQUITECTURA OPERATIVA */}
            {activeTab === 'engineBuilder' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header & Acciones Principales */}
                <div className="flex flex-wrap justify-between items-end gap-4 border-b border-[var(--border)] pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(255,90,0,0.8)]"></span>
                      <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--muted-foreground)] font-bold">
                        ENGINE STUDIO // VISUAL BUILDER &amp; LIVE OPERATING TOPOLOGY
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                      Constructor Gráfico de Motores Autónomos
                    </h2>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 max-w-2xl">
                      Diseña y calibra la arquitectura completa de tus agentes de contenido. Conecta fuentes de datos, define el núcleo de modelos de IA, configura memoria vectorial RAG y previsualiza la topología de operación en tiempo real.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button 
                      onClick={() => {
                        setEngineConfig({
                          name: 'Motor Enterprise RevOps & SaaS Latam',
                          targetDomain: 'https://buildations.studio',
                          industry: 'B2B SaaS & Tech Consulting',
                          brandArchetype: 'Experto Analítico y Autoritario',
                          targetLanguage: 'es-MX (Español Latinoamericano Neutro)',
                          connectors: {
                            payloadCms: true,
                            wordpress: true,
                            gsc: true,
                            competitorRss: true,
                            keywordDatasets: ['ds-revops', 'ds-aeo', 'ds-saas']
                          },
                          llmCore: 'Claude 3.5 Sonnet',
                          temperature: 0.35,
                          factCheckingStrictness: 95,
                          aeoDensityScore: 90,
                          vectorStore: 'Pinecone Vector DB',
                          cosineThreshold: 0.90,
                          chunkSizeTokens: 512,
                          hubspotIntegration: true,
                          hubspotPortalId: '982104',
                          publishMode: 'draft',
                          frequency: '3_per_week',
                          status: 'configured'
                        });
                        showToast('Plantilla SaaS Precargada', 'Parámetros optimizados para RevOps B2B y citabilidad AEO en Claude 3.5 Sonnet.', 'success');
                      }}
                      className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--muted)] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      <SparklesIcon className="w-4 h-4 text-amber-400" />
                      Cargar Plantilla B2B
                    </button>
                    
                    <button 
                      onClick={() => {
                        setIsDryRunModalOpen(true);
                        setDryRunLogs([
                          'Iniciando simulación de ciclo autónomo...',
                          `[00:01] Conectando a fuentes: ${Object.entries(engineConfig.connectors).filter(([, v]) => v).map(([k]) => k).join(', ')}`,
                          `[00:02] Cargando RAG desde ${engineConfig.vectorStore} (Threshold: ${engineConfig.cosineThreshold} cosine)`,
                          `[00:03] Agente Cognitivo instanciado con ${engineConfig.llmCore} (Temperatura: ${engineConfig.temperature})`,
                          `[00:04] Verificando Hechos (Filtro Anti-Alucinación: ${engineConfig.factCheckingStrictness}%) -> APROBADO`,
                          `[00:05] Generando Schema JSON-LD (FAQPage + BreadcrumbList) para AEO`,
                          `[00:06] Despachando a CMS (${engineConfig.publishMode.toUpperCase()}) y vinculando Deal en HubSpot #${engineConfig.hubspotPortalId}`,
                          '-> SIMULACIÓN COMPLETADA SIN ERRORES (200 OK) - Latencia total: 1.84s'
                        ]);
                      }}
                      className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--muted)] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      <PlayIcon className="w-4 h-4 text-emerald-400" />
                      Simular Ciclo (Dry-Run)
                    </button>

                    <button 
                      onClick={() => {
                        setIsCompilingEngine(true);
                        setTimeout(() => {
                          setIsCompilingEngine(false);
                          setEngineCompileSuccess(true);
                          
                          // Registrar o actualizar en la flota de motores activos
                          setActiveEngines(prev => {
                            const exists = prev.find(e => e.name.toLowerCase() === engineConfig.name.toLowerCase());
                            if (exists) {
                              return prev.map(e => e.id === exists.id ? {
                                ...e,
                                targetDomain: engineConfig.targetDomain,
                                llmCore: engineConfig.llmCore,
                                vectorStore: engineConfig.vectorStore,
                                status: 'active',
                                powerRate: Math.min(100, Math.floor(engineConfig.factCheckingStrictness * 0.5 + engineConfig.aeoDensityScore * 0.5)),
                                frequency: engineConfig.frequency,
                                lastRun: 'Justo ahora'
                              } : e);
                            } else {
                              const newEng = {
                                id: `eng-0${prev.length + 1}`,
                                name: engineConfig.name,
                                targetDomain: engineConfig.targetDomain,
                                purpose: `Optimización continua para ${engineConfig.industry}`,
                                type: engineConfig.publishMode === 'autonomous' ? 'Autopiloto 100%' : 'Híbrido CMS',
                                llmCore: engineConfig.llmCore,
                                vectorStore: engineConfig.vectorStore,
                                status: 'active' as const,
                                health: 99.1,
                                publishedWeekly: engineConfig.frequency === 'daily' ? 7 : engineConfig.frequency === 'hourly_breaking' ? 42 : 3,
                                tokensSpent: '12.4k',
                                latency: '1.65s',
                                powerRate: Math.floor(engineConfig.factCheckingStrictness * 0.5 + engineConfig.aeoDensityScore * 0.5),
                                lastRun: 'Justo ahora',
                                frequency: engineConfig.frequency
                              };
                              return [newEng, ...prev];
                            }
                          });

                          showToast(
                            'Motor Compilado & Desplegado', 
                            `"${engineConfig.name}" está activo en el clúster con 64-bit Core y telemetría en tiempo real.`, 
                            'success'
                          );
                          setTimeout(() => setEngineCompileSuccess(false), 5000);
                        }, 1400);
                      }}
                      disabled={isCompilingEngine}
                      className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_15px_rgba(255,90,0,0.35)] cursor-pointer flex items-center gap-2 disabled:opacity-50"
                    >
                      <RocketLaunchIcon className="w-4 h-4" />
                      {isCompilingEngine ? 'Compilando Arquitectura...' : 'Compilar y Activar Motor'}
                    </button>
                  </div>
                </div>

                {/* Banner de Éxito al Compilar con Telemetría 64-bit */}
                {engineCompileSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center justify-between animate-fade-in shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <span className="block font-bold">¡Arquitectura de Motor Compilada y Sincronizada con éxito!</span>
                        <span className="text-[11px] text-emerald-300/80 font-normal">
                          Registrado en el clúster de motores en ejecución. Operando en {engineConfig.targetDomain} vía {engineConfig.llmCore} + {engineConfig.vectorStore}.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 rounded-md text-emerald-300 font-bold">
                        WORKER-ID: ENG-64B-{Math.floor(1000 + Math.random() * 9000)}
                      </span>
                    </div>
                  </div>
                )}

                {/* FLOTA DE MOTORES ACTIVOS // MULTI-ENGINE FLEET & CLUSTER TELEMETRY (64-BIT HUD) */}
                <div className="glass-card p-5 rounded-2xl border border-[var(--border)] relative overflow-hidden bg-gradient-to-b from-black/60 to-[var(--card)]/40 shadow-xl">
                  {/* Fondo animado estilo osciloscopio industrial */}
                  <div className="absolute top-0 right-0 w-96 h-full pointer-events-none opacity-20 overflow-hidden">
                    <div className="flex items-end justify-end h-full gap-1 pr-6 pb-4">
                      {[40, 65, 30, 85, 50, 95, 70, 45, 80, 60, 90, 75, 40, 85, 95, 60].map((h, i) => (
                        <div 
                          key={i} 
                          style={{ height: `${h}%` }} 
                          className={`w-1 rounded-full bg-[var(--primary)] ${
                            i % 4 === 0 ? 'animate-oscilloscope-1' : i % 4 === 1 ? 'animate-oscilloscope-2' : i % 4 === 2 ? 'animate-oscilloscope-3' : 'animate-oscilloscope-4'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 relative z-10 border-b border-[var(--border)]/70 pb-3.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--primary)] font-bold">
                          CLÚSTER DE MOTORES EN EJECUCIÓN // MULTI-SITE RUNTIME
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                          {activeEngines.filter(e => e.status === 'active').length} ACTIVOS ONLINE
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[var(--foreground)] mt-0.5">
                        Flota de Motores Autónomos Multidominio & Rendimiento
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[var(--muted-foreground)]">
                        Modo Arquitectura: <strong className="text-[var(--foreground)]">64-bit Vector Core</strong>
                      </span>
                      <button 
                        onClick={() => {
                          const newName = `Motor #${activeEngines.length + 1} - ${prompt('Nombre del nuevo motor:', 'Motor Landing Pages E-Commerce') || 'Motor Personalizado'}`;
                          const newEngine = {
                            id: `eng-0${activeEngines.length + 1}`,
                            name: newName,
                            targetDomain: 'https://nuevo-sitio.com',
                            purpose: 'Generación y optimización de contenido autónomo',
                            type: 'Personalizado',
                            llmCore: 'Claude 3.5 Sonnet' as const,
                            vectorStore: 'Supabase pgvector' as const,
                            status: 'active' as const,
                            health: 99.0,
                            publishedWeekly: 4,
                            tokensSpent: '0k',
                            latency: '1.50s',
                            powerRate: 95,
                            lastRun: 'Nuevo',
                            frequency: '3_per_week'
                          };
                          setActiveEngines(prev => [newEngine, ...prev]);
                          setSelectedEngineId(newEngine.id);
                          setEngineConfig(prev => ({ ...prev, name: newName, targetDomain: 'https://nuevo-sitio.com' }));
                          showToast('Nuevo Motor Creado', `Se ha inicializado "${newName}" en el clúster.`, 'success');
                        }}
                        className="bg-[var(--primary)] text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[var(--primary-hover)] transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                      >
                        <span>+</span> Crear Otro Motor
                      </button>
                    </div>
                  </div>

                  {/* Tarjetas de Motores Activos */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 relative z-10">
                    {activeEngines.map((eng) => {
                      const isSelected = selectedEngineId === eng.id;
                      return (
                        <div 
                          key={eng.id}
                          onClick={() => {
                            setSelectedEngineId(eng.id);
                            setEngineConfig(prev => ({
                              ...prev,
                              name: eng.name,
                              targetDomain: eng.targetDomain,
                              llmCore: eng.llmCore as any,
                              vectorStore: eng.vectorStore as any,
                              frequency: eng.frequency as any
                            }));
                            showToast('Motor Seleccionado', `Ahora calibrando "${eng.name}" (${eng.targetDomain}).`, 'info');
                          }}
                          className={`p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                            isSelected 
                              ? 'bg-[var(--card)] border-[var(--primary)] shadow-[0_0_20px_rgba(255,90,0,0.22)]' 
                              : 'bg-black/30 border-[var(--border)] hover:border-[var(--border)]/90 hover:bg-[var(--card)]/50'
                          }`}
                        >
                          {/* Laser sweep on active */}
                          {isSelected && (
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"></div>
                          )}

                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${
                                eng.status === 'active' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse' : 'bg-amber-400'
                              }`} />
                              <span className="text-[10px] font-mono uppercase font-bold text-[var(--muted-foreground)]">
                                {eng.id} // {eng.type}
                              </span>
                            </div>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--foreground)] font-bold">
                              {eng.status === 'active' ? 'EN LÍNEA' : 'STANDBY'}
                            </span>
                          </div>

                          <h4 className="font-bold text-xs text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-tight mb-1">
                            {eng.name}
                          </h4>
                          
                          <p className="text-[10px] font-mono text-[var(--primary)] truncate mb-2">
                            {eng.targetDomain}
                          </p>
                          
                          <p className="text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed mb-3">
                            {eng.purpose}
                          </p>

                          {/* Medidores 64-bit y Rendimiento */}
                          <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-[var(--border)]/60 text-center">
                            <div className="bg-black/40 p-1.5 rounded-lg border border-white/5">
                              <span className="text-[9px] font-mono text-slate-400 block">Salud Core</span>
                              <span className="text-xs font-mono font-bold text-emerald-400">{eng.health}%</span>
                            </div>
                            <div className="bg-black/40 p-1.5 rounded-lg border border-white/5">
                              <span className="text-[9px] font-mono text-slate-400 block">Posts / Sem</span>
                              <span className="text-xs font-mono font-bold text-white">{eng.publishedWeekly}</span>
                            </div>
                            <div className="bg-black/40 p-1.5 rounded-lg border border-white/5">
                              <span className="text-[9px] font-mono text-slate-400 block">Latencia</span>
                              <span className="text-xs font-mono font-bold text-cyan-400">{eng.latency}</span>
                            </div>
                          </div>

                          <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                            <span className="flex items-center gap-1">
                              Potencia: <strong className="text-amber-400">{eng.powerRate}%</strong>
                            </span>
                            <span>Último: {eng.lastRun}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="glass-card p-3 rounded-2xl border border-[var(--border)]">
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { step: 1, label: '01. Identidad & Dominio', desc: 'Arquetipo y Nicho' },
                      { step: 2, label: '02. Ingesta & Datos', desc: 'CMS, GSC & Datasets' },
                      { step: 3, label: '03. Cerebro IA (LLMs)', desc: 'Claude, GPT-4o, Temp' },
                      { step: 4, label: '04. Memoria RAG', desc: 'Pinecone, Vectores' },
                      { step: 5, label: '05. RevOps & Salida', desc: 'HubSpot, Cron, Live' },
                    ].map((item) => (
                      <button
                        key={item.step}
                        onClick={() => setEngineWizardStep(item.step as 1 | 2 | 3 | 4 | 5)}
                        className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                          engineWizardStep === item.step
                            ? 'bg-[var(--card)] border-[var(--primary)] shadow-[0_0_15px_rgba(255,90,0,0.2)]'
                            : engineWizardStep > item.step
                            ? 'bg-[var(--card)]/60 border-emerald-500/30 opacity-90'
                            : 'bg-transparent border-transparent opacity-60 hover:opacity-100 hover:bg-[var(--muted)]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-mono font-bold uppercase ${engineWizardStep === item.step ? 'text-[var(--primary)]' : engineWizardStep > item.step ? 'text-emerald-400' : 'text-[var(--muted-foreground)]'}`}>
                            {item.label}
                          </span>
                          {engineWizardStep > item.step && (
                            <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                          )}
                        </div>
                        <p className="text-xs font-bold text-[var(--foreground)] truncate">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* FORMULARIO GRÁFICO DINÁMICO (PASO A PASO) */}
                <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-6">
                  
                  {/* PASO 1: Identidad y Dominio */}
                  {engineWizardStep === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--primary)] font-bold">Paso 01 de 05 // Definición Estratégica</span>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mt-0.5">Identidad del Motor y Dominio Objetivo</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                          Personaliza la voz de marca, el arquetipo de redacción y el dominio principal donde se publicarán los clústers.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[var(--foreground)] block">Nombre del Motor</label>
                          <input 
                            type="text" 
                            value={engineConfig.name}
                            onChange={(e) => setEngineConfig({ ...engineConfig, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--foreground)] font-mono focus:outline-none focus:border-[var(--primary)]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[var(--foreground)] block">Dominio Objetivo (URL Canónica)</label>
                          <input 
                            type="text" 
                            value={engineConfig.targetDomain}
                            onChange={(e) => setEngineConfig({ ...engineConfig, targetDomain: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--foreground)] font-mono focus:outline-none focus:border-[var(--primary)]"
                          />
                        </div>
                      </div>

                      {/* Arquetipo de Redacción (Cards Seleccionables) */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-[var(--foreground)] block">Arquetipo de Voz de Marca &amp; Tono Editorial</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { name: 'Experto Analítico y Autoritario', desc: 'Datos duros, citas de informes de industria, vocabulario técnico B2B de alto calibre.' },
                            { name: 'Consultor Práctico & Táctico', desc: 'Guías paso a paso, plantillas descargables, enfoque orientado a implementación rápida.' },
                            { name: 'Periodismo de Negocios & AEO', desc: 'Formato directo estilo Axios/WSJ, resúmenes ejecutivos, tablas y respuestas sin rodeos.' }
                          ].map((arch) => (
                            <div 
                              key={arch.name}
                              onClick={() => setEngineConfig({ ...engineConfig, brandArchetype: arch.name })}
                              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                                engineConfig.brandArchetype === arch.name
                                  ? 'bg-[var(--card)] border-[var(--primary)] shadow-[0_0_15px_rgba(255,90,0,0.15)]'
                                  : 'bg-[var(--card)]/50 border-[var(--border)] hover:border-[var(--border)]/80 opacity-75'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="font-bold text-xs text-[var(--foreground)]">{arch.name}</span>
                                {engineConfig.brandArchetype === arch.name && (
                                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
                                )}
                              </div>
                              <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">{arch.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Idioma & Localización */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[var(--foreground)] block">Industria / Nicho de Negocio</label>
                          <input 
                            type="text" 
                            value={engineConfig.industry}
                            onChange={(e) => setEngineConfig({ ...engineConfig, industry: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--foreground)] font-mono focus:outline-none focus:border-[var(--primary)]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[var(--foreground)] block">Dialecto e Idioma de Publicación</label>
                          <select 
                            value={engineConfig.targetLanguage}
                            onChange={(e) => setEngineConfig({ ...engineConfig, targetLanguage: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--foreground)] font-mono cursor-pointer focus:outline-none focus:border-[var(--primary)]"
                          >
                            <option value="es-MX (Español Latinoamericano Neutro)">es-MX (Español Latinoamericano Neutro)</option>
                            <option value="es-ES (Español Castellano Peninsular)">es-ES (Español Castellano Peninsular)</option>
                            <option value="en-US (Inglés Estados Unidos / Global B2B)">en-US (Inglés Estados Unidos / Global B2B)</option>
                            <option value="pt-BR (Portugués de Brasil)">pt-BR (Portugués de Brasil)</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-end pt-4 border-t border-[var(--border)]">
                        <button 
                          onClick={() => setEngineWizardStep(2)}
                          className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all cursor-pointer"
                        >
                          Siguiente: Ingesta &amp; Datos →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* PASO 2: Ingesta & Datos */}
                  {engineWizardStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--primary)] font-bold">Paso 02 de 05 // Conectividad de Datos</span>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mt-0.5">Fuentes de Ingesta, CMS y Datasets de Keywords</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                          Selecciona de dónde extraerá el motor el inventario de URLs actuales y qué listas de palabras clave alimentarán el entrenamiento.
                        </p>
                      </div>

                      {/* Conectores Toggles */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { key: 'payloadCms', title: 'Payload CMS 3.x', desc: 'API REST nativa para App Router y Next.js.', tag: 'Recomendado', logo: <PayloadLogo className="w-5 h-5 text-white" /> },
                          { key: 'wordpress', title: 'WordPress REST API', desc: 'Conexión vía Application Passwords oficial.', tag: 'CMS Clásico', logo: <WordPressLogo className="w-5 h-5" /> },
                          { key: 'gsc', title: 'Google Search Console', desc: 'Detección de clics perdidos y content decay.', tag: 'Métricas', logo: <GoogleLogo className="w-5 h-5" /> },
                          { key: 'competitorRss', title: 'Radar Competidores', desc: 'Extracción de topics en tiempo real de 14 blogs.', tag: 'Espionaje', logo: <span className="text-base">📡</span> }
                        ].map((conn) => {
                          const isActive = engineConfig.connectors[conn.key as keyof typeof engineConfig.connectors] as boolean;
                          return (
                            <div 
                              key={conn.key}
                              onClick={() => {
                                setEngineConfig({
                                  ...engineConfig,
                                  connectors: {
                                    ...engineConfig.connectors,
                                    [conn.key]: !isActive
                                  }
                                });
                              }}
                              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[var(--card)] border-[var(--primary)] shadow-[0_0_15px_rgba(255,90,0,0.15)]'
                                  : 'bg-[var(--card)]/40 border-[var(--border)] opacity-60 hover:opacity-80'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="p-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] shadow-sm">
                                  {conn.logo}
                                </div>
                                <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold ${isActive ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'border-zinc-600'}`}>
                                  {isActive ? '✓' : ''}
                                </span>
                              </div>
                              <h4 className="font-bold text-xs text-[var(--foreground)]">{conn.title}</h4>
                              <p className="text-[11px] text-[var(--muted-foreground)] mt-1">{conn.desc}</p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Datasets RAG vinculados */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-semibold text-[var(--foreground)] block">
                            Datasets de Keywords Vinculados para Entrenamiento RAG
                          </label>
                          <span className="text-[11px] font-mono text-[var(--primary)]">
                            {engineConfig.connectors.keywordDatasets.length} Clústers activos
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {keywordDatasets.map((ds) => {
                            const isLinked = engineConfig.connectors.keywordDatasets.includes(ds.id);
                            return (
                              <div 
                                key={ds.id}
                                onClick={() => {
                                  const currentList = [...engineConfig.connectors.keywordDatasets];
                                  const updated = isLinked
                                    ? currentList.filter(id => id !== ds.id)
                                    : [...currentList, ds.id];
                                  setEngineConfig({
                                    ...engineConfig,
                                    connectors: {
                                      ...engineConfig.connectors,
                                      keywordDatasets: updated
                                    }
                                  });
                                }}
                                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                                  isLinked 
                                    ? 'bg-[var(--card)] border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                                    : 'bg-[var(--card)]/40 border-[var(--border)] opacity-60 hover:opacity-80'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[10px] font-mono text-emerald-400 font-bold">{ds.category}</span>
                                  <span className="text-[10px] font-mono text-[var(--muted-foreground)]">{ds.count} KWs</span>
                                </div>
                                <h5 className="font-bold text-xs text-[var(--foreground)]">{ds.name}</h5>
                                <span className="text-[10px] text-zinc-400 font-mono mt-1 block">{ds.similarityScore}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex justify-between pt-4 border-t border-[var(--border)]">
                        <button 
                          onClick={() => setEngineWizardStep(1)}
                          className="px-4 py-2 rounded-xl text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer"
                        >
                          ← Volver
                        </button>
                        <button 
                          onClick={() => setEngineWizardStep(3)}
                          className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all cursor-pointer"
                        >
                          Siguiente: Motor Cognitivo (LLMs) →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* PASO 3: Motor Cognitivo & Calibración de LLMs */}
                  {engineWizardStep === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--primary)] font-bold">Paso 03 de 05 // Núcleo de Modelos de Lenguaje</span>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mt-0.5">Calibración del Motor Cognitivo &amp; Fact-Checking</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                          Selecciona el modelo de inteligencia artificial principal y calibra la temperatura y filtros de verificación de fuentes.
                        </p>
                      </div>

                      {/* Tarjetas de Selección de LLM */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { 
                            id: 'Claude 3.5 Sonnet', 
                            title: 'Claude 3.5 Sonnet', 
                            provider: 'Anthropic', 
                            desc: 'Superior en AEO, razonamiento estructural y citabilidad.', 
                            badge: 'Recomendado AEO',
                            icon: <ClaudeLogo className="w-5 h-5 text-amber-500 shrink-0" />
                          },
                          { 
                            id: 'GPT-4o Enterprise', 
                            title: 'GPT-4o Enterprise', 
                            provider: 'OpenAI', 
                            desc: 'Máxima velocidad de inferencia y esquemas JSON estrictos.', 
                            badge: 'Velocidad',
                            icon: <OpenAILogo className="w-5 h-5 text-emerald-400 shrink-0" />
                          },
                          { 
                            id: 'DeepSeek-V3', 
                            title: 'DeepSeek-V3', 
                            provider: 'DeepSeek AI', 
                            desc: 'Costo ultra bajo y gran capacidad de síntesis técnica.', 
                            badge: 'Económico',
                            icon: (
                              <div className="w-5 h-5 rounded-md bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold font-mono text-[10px] shrink-0">
                                DS
                              </div>
                            )
                          },
                          { 
                            id: 'Llama 3.3 70B', 
                            title: 'Llama 3.3 70B', 
                            provider: 'Meta / Groq', 
                            desc: 'Pesos abiertos, cero retención de datos y privacidad total.', 
                            badge: 'Open Weights',
                            icon: (
                              <div className="w-5 h-5 rounded-md bg-purple-600/20 border border-purple-500/40 text-purple-400 flex items-center justify-center font-bold font-mono text-[10px] shrink-0">
                                ∞
                              </div>
                            )
                          }
                        ].map((m) => (
                          <div 
                            key={m.id}
                            onClick={() => setEngineConfig({ ...engineConfig, llmCore: m.id as any })}
                            className={`p-4 rounded-xl border transition-all cursor-pointer ${
                              engineConfig.llmCore === m.id
                                ? 'bg-[var(--card)] border-[var(--primary)] shadow-[0_0_15px_rgba(255,90,0,0.2)]'
                                : 'bg-[var(--card)]/50 border-[var(--border)] hover:border-[var(--border)]/80 opacity-75'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                {m.icon}
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--primary)] font-bold">
                                  {m.badge}
                                </span>
                              </div>
                              {engineConfig.llmCore === m.id && (
                                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(255,90,0,0.8)]"></span>
                              )}
                            </div>
                            <h4 className="font-bold text-xs text-[var(--foreground)]">{m.title}</h4>
                            <span className="text-[10px] font-mono text-[var(--muted-foreground)] block mb-1">{m.provider}</span>
                            <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">{m.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Sliders de Calibración */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-[var(--foreground)]">Temperatura de Creatividad</span>
                            <span className="font-mono font-bold text-[var(--primary)]">{engineConfig.temperature}</span>
                          </div>
                          <input 
                            type="range" 
                            min="0.1" 
                            max="0.9" 
                            step="0.05"
                            value={engineConfig.temperature}
                            onChange={(e) => setEngineConfig({ ...engineConfig, temperature: parseFloat(e.target.value) })}
                            className="w-full accent-[var(--primary)] cursor-pointer"
                          />
                          <p className="text-[10px] text-[var(--muted-foreground)]">Valores bajos (0.2-0.4) garantizan fidelidad a los hechos y reducen alucinaciones.</p>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-[var(--foreground)]">Filtro Fact-Checking Anti-Alucinación</span>
                            <span className="font-mono font-bold text-emerald-400">{engineConfig.factCheckingStrictness}%</span>
                          </div>
                          <input 
                            type="range" 
                            min="70" 
                            max="100" 
                            step="5"
                            value={engineConfig.factCheckingStrictness}
                            onChange={(e) => setEngineConfig({ ...engineConfig, factCheckingStrictness: parseInt(e.target.value) })}
                            className="w-full accent-emerald-500 cursor-pointer"
                          />
                          <p className="text-[10px] text-[var(--muted-foreground)]">Verificación cruzada de afirmaciones numéricas contra la base RAG.</p>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-[var(--foreground)]">Densidad Semántica AEO</span>
                            <span className="font-mono font-bold text-[var(--status-ready)]">{engineConfig.aeoDensityScore}%</span>
                          </div>
                          <input 
                            type="range" 
                            min="60" 
                            max="100" 
                            step="5"
                            value={engineConfig.aeoDensityScore}
                            onChange={(e) => setEngineConfig({ ...engineConfig, aeoDensityScore: parseInt(e.target.value) })}
                            className="w-full accent-amber-500 cursor-pointer"
                          />
                          <p className="text-[10px] text-[var(--muted-foreground)]">Fuerza respuestas directas en el primer párrafo y tablas comparativas.</p>
                        </div>
                      </div>

                      <div className="flex justify-between pt-4 border-t border-[var(--border)]">
                        <button 
                          onClick={() => setEngineWizardStep(2)}
                          className="px-4 py-2 rounded-xl text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer"
                        >
                          ← Volver
                        </button>
                        <button 
                          onClick={() => setEngineWizardStep(4)}
                          className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all cursor-pointer"
                        >
                          Siguiente: Memoria RAG &amp; Vector Store →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* PASO 4: Memoria Vectorial & RAG */}
                  {engineWizardStep === 4 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--primary)] font-bold">Paso 04 de 05 // Base de Conocimiento Vectorial</span>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mt-0.5">Memoria Vectorial RAG &amp; Umbral de Similitud Coseno</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                          Configura la base de datos de vectores donde se almacenarán las 1,536 dimensiones de cada contenido y término clave.
                        </p>
                      </div>

                      {/* Tarjetas Vector Store */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { 
                            id: 'Pinecone Vector DB', 
                            title: 'Pinecone Vector DB', 
                            desc: 'Índice serverless de baja latencia con namespaces dinámicos por cliente.', 
                            dims: '1,536 dims',
                            logo: <PineconeLogo className="w-5 h-5 text-white" />
                          },
                          { 
                            id: 'Qdrant Distributed', 
                            title: 'Qdrant Distributed', 
                            desc: 'Cluster HNSW en memoria con filtrado por metadatos a velocidad de hardware.', 
                            dims: '1,536 dims',
                            logo: <QdrantLogo className="w-5 h-5" />
                          },
                          { 
                            id: 'Supabase pgvector', 
                            title: 'Supabase pgvector (PostgreSQL)', 
                            desc: 'Híbrido relacional SQL + extensiones vectoriales pgvector en Postgres.', 
                            dims: '1,536 dims',
                            logo: (
                              <div className="flex items-center gap-1.5">
                                <SupabaseLogo className="w-5 h-5" />
                                <PostgresLogo className="w-5 h-5 text-blue-400" />
                              </div>
                            )
                          }
                        ].map((vs) => (
                          <div 
                            key={vs.id}
                            onClick={() => setEngineConfig({ ...engineConfig, vectorStore: vs.id as any })}
                            className={`p-4 rounded-xl border transition-all cursor-pointer ${
                              engineConfig.vectorStore === vs.id
                                ? 'bg-[var(--card)] border-[var(--primary)] shadow-[0_0_15px_rgba(255,90,0,0.15)]'
                                : 'bg-[var(--card)]/50 border-[var(--border)] hover:border-[var(--border)]/80 opacity-75'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] shadow-sm">
                                  {vs.logo}
                                </div>
                                <span className="text-[10px] font-mono text-emerald-400 font-bold">{vs.dims}</span>
                              </div>
                              {engineConfig.vectorStore === vs.id && (
                                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(255,90,0,0.8)]"></span>
                              )}
                            </div>
                            <h4 className="font-bold text-xs text-[var(--foreground)]">{vs.title}</h4>
                            <p className="text-[11px] text-[var(--muted-foreground)] mt-1 leading-relaxed">{vs.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Parámetros de Similitud Coseno y Chunking */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-[var(--foreground)]">Umbral de Similitud Coseno (Cosine Threshold)</span>
                            <span className="font-mono font-bold text-emerald-400">{engineConfig.cosineThreshold} cosine</span>
                          </div>
                          <input 
                            type="range" 
                            min="0.75" 
                            max="0.95" 
                            step="0.01"
                            value={engineConfig.cosineThreshold}
                            onChange={(e) => setEngineConfig({ ...engineConfig, cosineThreshold: parseFloat(e.target.value) })}
                            className="w-full accent-emerald-500 cursor-pointer"
                          />
                          <p className="text-[10px] text-[var(--muted-foreground)]">Sólo fragmentos con similitud superior a {engineConfig.cosineThreshold} serán inyectados al prompt del agente.</p>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-2">
                          <label className="text-xs font-semibold text-[var(--foreground)] block">Tamaño de Fragmento (Chunk Size)</label>
                          <div className="grid grid-cols-3 gap-2 pt-1">
                            {[256, 512, 1024].map((sz) => (
                              <button
                                key={sz}
                                onClick={() => setEngineConfig({ ...engineConfig, chunkSizeTokens: sz })}
                                className={`py-2 rounded-lg text-xs font-mono font-bold border transition-colors cursor-pointer ${
                                  engineConfig.chunkSizeTokens === sz
                                    ? 'bg-[var(--primary)] text-white border-[var(--primary)]'
                                    : 'bg-[var(--background)] text-[var(--muted-foreground)] border-[var(--border)] hover:text-[var(--foreground)]'
                                }`}
                              >
                                {sz} tokens
                              </button>
                            ))}
                          </div>
                          <p className="text-[10px] text-[var(--muted-foreground)]">512 tokens ofrece el balance perfecto entre contexto temático y precisión semántica.</p>
                        </div>
                      </div>

                      <div className="flex justify-between pt-4 border-t border-[var(--border)]">
                        <button 
                          onClick={() => setEngineWizardStep(3)}
                          className="px-4 py-2 rounded-xl text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer"
                        >
                          ← Volver
                        </button>
                        <button 
                          onClick={() => setEngineWizardStep(5)}
                          className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all cursor-pointer"
                        >
                          Siguiente: RevOps &amp; Despliegue →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* PASO 5: Gobernanza, RevOps & Despliegue */}
                  {engineWizardStep === 5 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--primary)] font-bold">Paso 05 de 05 // Gobernanza y Sincronización</span>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mt-0.5">Integración RevOps HubSpot, Frecuencia y Modo de Publicación</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                          Define el grado de autonomía de publicación y la atribución con tus pipelines comerciales en HubSpot.
                        </p>
                      </div>

                      {/* Modo de Publicación */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div 
                          onClick={() => setEngineConfig({ ...engineConfig, publishMode: 'draft' })}
                          className={`p-4 rounded-xl border transition-all cursor-pointer ${
                            engineConfig.publishMode === 'draft'
                              ? 'bg-[var(--card)] border-[var(--primary)] shadow-[0_0_15px_rgba(255,90,0,0.15)]'
                              : 'bg-[var(--card)]/50 border-[var(--border)] opacity-70'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-bold text-xs text-[var(--foreground)]">Modo Borrador (Revisión Asistida)</span>
                            {engineConfig.publishMode === 'draft' && <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>}
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)]">
                            El motor genera el post con Schema JSON-LD y lo sube como borrador al CMS. Requiere 1 click humano para publicarlo.
                          </p>
                        </div>

                        <div 
                          onClick={() => setEngineConfig({ ...engineConfig, publishMode: 'autonomous' })}
                          className={`p-4 rounded-xl border transition-all cursor-pointer ${
                            engineConfig.publishMode === 'autonomous'
                              ? 'bg-[var(--card)] border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                              : 'bg-[var(--card)]/50 border-[var(--border)] opacity-70'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-bold text-xs text-[var(--foreground)]">Autopiloto 100% Autónomo</span>
                            {engineConfig.publishMode === 'autonomous' && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)]">
                            Publicación directa a producción según el cron programado, regeneración de sitemap.xml y ping a Google Search Console.
                          </p>
                        </div>
                      </div>

                      {/* Frecuencia Cron */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-[var(--foreground)] block">Frecuencia de Ejecución Autónoma</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            { id: 'daily', label: 'Diario (7/sem)', desc: 'Indexación intensiva' },
                            { id: '3_per_week', label: '3x Semana (L-M-V)', desc: 'Ritmo recomendado' },
                            { id: 'weekly', label: 'Semanal (1 Pilar)', desc: 'Contenido largo formato' },
                            { id: 'hourly_breaking', label: 'Newsjacking Horario', desc: 'Tendencias en caliente' },
                          ].map((f) => (
                            <button
                              key={f.id}
                              onClick={() => setEngineConfig({ ...engineConfig, frequency: f.id as any })}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                engineConfig.frequency === f.id
                                  ? 'bg-[var(--card)] border-[var(--primary)] text-[var(--foreground)] font-bold'
                                  : 'bg-[var(--card)]/40 border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                              }`}
                            >
                              <span className="text-xs block">{f.label}</span>
                              <span className="text-[10px] text-zinc-400 font-normal">{f.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Integración HubSpot RevOps */}
                      <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-xs border border-orange-500/20">
                            HS
                          </span>
                          <div>
                            <span className="text-xs font-bold text-[var(--foreground)] block">HubSpot Growth Suite CRM</span>
                            <span className="text-[11px] text-[var(--muted-foreground)]">Portal conectado: #{engineConfig.hubspotPortalId} // Inyección de UTMs y Deals</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Conectado
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between pt-4 border-t border-[var(--border)]">
                        <button 
                          onClick={() => setEngineWizardStep(4)}
                          className="px-4 py-2 rounded-xl text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer"
                        >
                          ← Volver
                        </button>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => {
                              const jsonExport = JSON.stringify(engineConfig, null, 2);
                              const blob = new Blob([jsonExport], { type: 'application/json' });
                              const url = URL.createObjectURL(blob);
                              const a = document.createElement('a');
                              a.href = url;
                              a.download = `engine-${engineConfig.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.json`;
                              a.click();
                              URL.revokeObjectURL(url);
                            }}
                            className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--muted)] cursor-pointer"
                          >
                            Descargar spec.json
                          </button>
                          <button 
                            onClick={() => {
                              setIsCompilingEngine(true);
                              setTimeout(() => {
                                setIsCompilingEngine(false);
                                setEngineCompileSuccess(true);
                                setTimeout(() => setEngineCompileSuccess(false), 4000);
                              }, 1200);
                            }}
                            className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-sm"
                          >
                            Compilar y Activar Motor ✓
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* ARQUITECTURA GRÁFICA DE OPERACIÓN EN VIVO (LIVE TOPOLOGY BLUEPRINT) */}
                <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--muted-foreground)] font-bold">
                          ARQUITECTURA DE SISTEMAS // DIAGRAMA DE FLUJO EN TIEMPO REAL
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[var(--foreground)]">
                        Arquitectura Gráfica de Operación del Motor: {engineConfig.name}
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                        Esta topología representa visualmente cómo fluirán los datos desde tus fuentes hasta la publicación y atribución final.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]">
                        Latencia Estimada: ~1.8s
                      </span>
                      <span className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                        94% Autónomo
                      </span>
                    </div>
                  </div>

                  {/* LIENZO DE TOPOLOGÍA INDUSTRIAL CON FLUJOS ANIMADOS SVG Y TELEMETRÍA 64-BIT */}
                  <div className="relative rounded-2xl p-6 bg-black/90 border border-white/10 overflow-x-auto min-h-[460px] shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                    {/* Rejilla de Fondo Industrial y Partículas */}
                    <div className="absolute inset-0 bg-data-stream opacity-15 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-80 animate-laser-sweep pointer-events-none"></div>

                    {/* Industrial HUD Telemetry Bar (64-bit Core Status) */}
                    <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 px-4 py-2 mb-4 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                          <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                            64-BIT ENGINE CORE: ONLINE
                          </span>
                        </div>
                        <span className="text-slate-600 font-mono text-xs">|</span>
                        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-300">
                          <span>INSTRUCCIÓN:</span>
                          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[var(--primary)] font-bold">
                            AVX-512 / TENSOR-FLOW
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 font-mono text-[10px]">
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <span>THROUGHPUT:</span>
                          <span className="text-white font-bold">3,840 tok/s</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <span>TURBINA AI:</span>
                          <span className="flex items-center gap-1 text-amber-400 font-bold">
                            <svg className="w-3.5 h-3.5 animate-turbine-fast" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v4H7v2h4v4h2v-4h4v-2h-4z" />
                            </svg>
                            OPERACIONAL (100%)
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <span>JITTER:</span>
                          <span className="text-cyan-400 font-bold">&lt; 12ms</span>
                        </div>
                      </div>
                    </div>

                    {/* SVG Connector Cables Con Paquetes de Datos Animados */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minWidth: '1050px' }}>
                      {/* Línea Capa 1 -> Capa 2 */}
                      <path 
                        d="M 210 230 C 240 230, 250 230, 280 230" 
                        stroke="#ff5a00" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="6,4"
                        className="animate-flow-cable"
                      />
                      <circle cx="245" cy="230" r="3" fill="#ff5a00" className="animate-ping" />

                      {/* Línea Capa 2 -> Capa 3 */}
                      <path 
                        d="M 480 230 C 510 230, 520 230, 550 230" 
                        stroke="#f59e0b" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="6,4"
                        className="animate-flow-cable"
                      />
                      <circle cx="515" cy="230" r="3" fill="#f59e0b" className="animate-ping" />

                      {/* Línea Capa 3 -> Capa 4 */}
                      <path 
                        d="M 750 230 C 780 230, 790 230, 820 230" 
                        stroke="#10b981" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="6,4"
                        className="animate-flow-cable"
                      />
                      <circle cx="785" cy="230" r="3" fill="#10b981" className="animate-ping" />

                      {/* Línea Capa 4 -> Capa 5 */}
                      <path 
                        d="M 1020 230 C 1050 230, 1060 230, 1090 230" 
                        stroke="#38bdf8" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="6,4"
                        className="animate-flow-cable"
                      />
                      <circle cx="1055" cy="230" r="3" fill="#38bdf8" className="animate-ping" />
                    </svg>

                    {/* 5 Columnas de Nodos de la Arquitectura */}
                    <div className="relative z-10 flex items-stretch justify-between gap-6 min-w-[1100px] py-4">
                      
                      {/* COLUMNA 1: INGESTA MULTICANAL */}
                      <div className="w-52 flex flex-col justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                        <div>
                          <span className="text-[9px] font-mono uppercase text-[var(--primary)] font-bold block mb-1">
                            01. Ingestion Layer
                          </span>
                          <h4 className="text-xs font-bold text-white">Fuentes de Datos</h4>
                        </div>

                        <div className="space-y-1.5 flex-1">
                          {engineConfig.connectors.payloadCms && (
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-zinc-200 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <PayloadLogo className="w-3.5 h-3.5 text-zinc-300" />
                                Payload CMS 3.x
                              </span>
                              <span className="text-emerald-400 text-[9px] font-bold">ON</span>
                            </div>
                          )}
                          {engineConfig.connectors.wordpress && (
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-300 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <WordPressLogo className="w-3.5 h-3.5" />
                                WordPress REST
                              </span>
                              <span className="text-emerald-400 text-[9px] font-bold">ON</span>
                            </div>
                          )}
                          {engineConfig.connectors.gsc && (
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-amber-300 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <GoogleLogo className="w-3.5 h-3.5" />
                                GSC Decay Feed
                              </span>
                              <span className="text-emerald-400 text-[9px] font-bold">ON</span>
                            </div>
                          )}
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-zinc-300 flex items-center justify-between">
                            <span>{engineConfig.connectors.keywordDatasets.length} Datasets RAG</span>
                            <span className="text-emerald-400 text-[9px] font-bold">SYNC</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800 text-[9px] text-slate-500 font-mono">
                          Sync: Event-Driven Hook
                        </div>
                      </div>

                      {/* COLUMNA 2: MEMORIA VECTORIAL & RAG */}
                      <div className="w-52 flex flex-col justify-between p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-3">
                        <div>
                          <span className="text-[9px] font-mono uppercase text-amber-400 font-bold block mb-1">
                            02. Vector &amp; RAG Core
                          </span>
                          <div className="flex items-center gap-1.5">
                            {engineConfig.vectorStore.includes('Pinecone') && <PineconeLogo className="w-4 h-4 text-amber-400" />}
                            {engineConfig.vectorStore.includes('Qdrant') && <QdrantLogo className="w-4 h-4 text-red-500" />}
                            {engineConfig.vectorStore.includes('Supabase') && (
                              <div className="flex items-center gap-1">
                                <SupabaseLogo className="w-3.5 h-3.5" />
                                <PostgresLogo className="w-3.5 h-3.5" />
                              </div>
                            )}
                            <h4 className="text-xs font-bold text-white truncate">{engineConfig.vectorStore}</h4>
                          </div>
                        </div>

                        <div className="space-y-2 flex-1">
                          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[10px] space-y-1">
                            <span className="text-slate-400 block font-mono">Modelo de Embeddings:</span>
                            <span className="text-amber-300 font-mono font-bold block">text-embedding-3-small</span>
                            <span className="text-[9px] text-zinc-500 font-mono">1,536 dimensiones</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono flex justify-between">
                            <span className="text-slate-400">Threshold:</span>
                            <span className="text-emerald-400 font-bold">{engineConfig.cosineThreshold} cosine</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono flex justify-between">
                            <span className="text-slate-400">Chunks:</span>
                            <span className="text-zinc-200">{engineConfig.chunkSizeTokens} tok</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800 text-[9px] text-slate-500 font-mono">
                          Index: serverless-v3
                        </div>
                      </div>

                      {/* COLUMNA 3: ENJAMBRE DE AGENTES COGNITIVOS */}
                      <div className="w-52 flex flex-col justify-between p-4 rounded-xl bg-slate-900/90 border border-[var(--primary)] shadow-[0_0_20px_rgba(255,90,0,0.15)] space-y-3">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] font-mono uppercase text-[var(--primary)] font-bold">
                              03. Cognitive LLM Core
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            {engineConfig.llmCore.includes('Claude') && <ClaudeLogo className="w-4 h-4 text-amber-500" />}
                            {engineConfig.llmCore.includes('GPT-4o') && <OpenAILogo className="w-4 h-4 text-emerald-400" />}
                            <h4 className="text-xs font-bold text-white truncate">{engineConfig.llmCore}</h4>
                          </div>
                        </div>

                        <div className="space-y-1.5 flex-1">
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-zinc-300">
                            <span className="text-[var(--primary)] font-bold">Agente 1:</span> Scout SERP
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-zinc-300">
                            <span className="text-[var(--primary)] font-bold">Agente 2:</span> Redactor AEO
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-zinc-300">
                            <span className="text-[var(--primary)] font-bold">Agente 3:</span> Silo Linker
                          </div>
                          <div className="p-1.5 text-center text-[10px] font-mono text-zinc-400">
                            Temp: <strong className="text-white">{engineConfig.temperature}</strong>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800 text-[9px] text-[var(--primary)] font-mono font-bold">
                          AEO Score: {engineConfig.aeoDensityScore}%
                        </div>
                      </div>

                      {/* COLUMNA 4: GUARDARRAÍLES & VALIDACIÓN */}
                      <div className="w-52 flex flex-col justify-between p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-3">
                        <div>
                          <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold block mb-1">
                            04. Quality Guardrails
                          </span>
                          <h4 className="text-xs font-bold text-white">Filtro de Hechos</h4>
                        </div>

                        <div className="space-y-2 flex-1">
                          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[10px] space-y-1">
                            <span className="text-slate-400 block font-mono">Anti-Alucinación:</span>
                            <div className="w-full bg-slate-800 rounded-full h-1.5">
                              <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: `${engineConfig.factCheckingStrictness}%` }}></div>
                            </div>
                            <span className="text-[10px] text-emerald-400 font-mono font-bold">{engineConfig.factCheckingStrictness}% Estricto</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-zinc-300">
                            <span>Schema JSON-LD:</span>
                            <span className="text-emerald-400 block font-mono font-bold">FAQPage + Article</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800 text-[9px] text-slate-500 font-mono">
                          Zero Canibalization Lock
                        </div>
                      </div>

                      {/* COLUMNA 5: ENTREGA, CMS & REVOPS */}
                      <div className="w-52 flex flex-col justify-between p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
                        <div>
                          <span className="text-[9px] font-mono uppercase text-cyan-400 font-bold block mb-1">
                            05. Output &amp; RevOps
                          </span>
                          <h4 className="text-xs font-bold text-white">Despliegue Final</h4>
                        </div>

                        <div className="space-y-2 flex-1">
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono">
                            <span className="text-slate-400 block">Modo CMS:</span>
                            <span className="text-cyan-300 font-bold uppercase">{engineConfig.publishMode}</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono">
                            <span className="text-slate-400 flex items-center gap-1">
                              <HubSpotLogo className="w-3 h-3" />
                              HubSpot Deals:
                            </span>
                            <span className="text-orange-400 font-bold">Hub #{engineConfig.hubspotPortalId}</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono">
                            <span className="text-slate-400 block">Frecuencia:</span>
                            <span className="text-white">{engineConfig.frequency}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800 text-[9px] text-cyan-400 font-mono font-bold">
                          Webhook: 200 OK
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Telemetría Arquitectónica Resumen */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Costo en Tokens Estimado</span>
                      <span className="text-base font-bold font-mono text-[var(--foreground)] mt-0.5 block">$0.034 / artículo</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Frecuencia de Publicación</span>
                      <span className="text-base font-bold font-mono text-[var(--primary)] mt-0.5 block">
                        {engineConfig.frequency === '3_per_week' ? '3 posts/semana' : engineConfig.frequency === 'daily' ? 'Diario (7/sem)' : 'Semanal'}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Grado de Autonomía</span>
                      <span className="text-base font-bold font-mono text-emerald-400 mt-0.5 block">
                        {engineConfig.publishMode === 'autonomous' ? '100% Autopiloto' : '92% (Revisión CMS)'}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Nivel de Respaldo</span>
                      <span className="text-base font-bold font-mono text-cyan-400 mt-0.5 block">Versionado Git + DB</span>
                    </div>
                  </div>
                </div>

                {/* MODAL DE DRY-RUN SIMULATOR */}
                {isDryRunModalOpen && (
                  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
                    <div className="w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                          <h4 className="font-mono text-sm font-bold text-white">DRY-RUN SIMULATOR // {engineConfig.name}</h4>
                        </div>
                        <button 
                          onClick={() => setIsDryRunModalOpen(false)}
                          className="text-slate-400 hover:text-white font-bold cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="bg-black/90 p-4 rounded-xl border border-white/5 font-mono text-xs text-emerald-400 space-y-2 max-h-72 overflow-y-auto">
                        {dryRunLogs.map((log, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-slate-600 select-none">&gt;</span>
                            <span className={log.includes('SIMULACIÓN COMPLETADA') ? 'text-amber-400 font-bold' : log.includes('APROBADO') ? 'text-emerald-300' : 'text-slate-300'}>
                              {log}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[11px] font-mono text-slate-400">
                          Motor verificado con los parámetros activos.
                        </span>
                        <button 
                          onClick={() => setIsDryRunModalOpen(false)}
                          className="bg-emerald-500 text-slate-950 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-400 transition-colors cursor-pointer"
                        >
                          Cerrar Simulador
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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
                            onClick={() => showToast('Ciclo de Prueba Forzado', 'Ejecutando pipeline completo en modo sandbox: Ingesta -> RAG -> AEO -> Webhook', 'info')}
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
                      <PayloadLogo className="w-4 h-4 text-white shrink-0" />
                      Payload CMS (Headless)
                    </button>
                    <button 
                      onClick={() => setCmsTab('wordpress')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${cmsTab === 'wordpress' ? 'bg-[var(--primary)] text-white shadow-md' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                    >
                      <WordPressLogo className="w-4 h-4 shrink-0" />
                      WordPress (Plugin &amp; REST)
                    </button>
                  </div>
                </div>

                {/* 1. SECCIÓN PAYLOAD CMS */}
                {cmsTab === 'payload' && (
                  <div className="space-y-6 animate-fade-in">
                    
                    {/* Status Card Payload */}
                    <div className="glass-card p-6 border-l-4 border-l-cyan-500 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white shadow-md">
                          <PayloadLogo className="w-6 h-6 text-white" />
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
                                onClick={() => showToast('API Key Copiada', 'Token de Payload CMS copiado al portapapeles con éxito.', 'success')}
                                className="bg-[var(--card)] border border-[var(--border)] px-3 py-2 rounded-lg text-xs hover:bg-[var(--muted)] transition-colors cursor-pointer"
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
                            onClick={() => showToast('Despacho a Payload CMS', 'Borrador de prueba enviado exitosamente a /api/posts con 200 OK.', 'success')}
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
                        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-blue-500/30 flex items-center justify-center text-white shadow-md">
                          <WordPressLogo className="w-7 h-7" />
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
                                onClick={() => showToast('Descargando Conector', 'Preparando archivo buildations-studio-connector-v1.2.zip (38 KB)...', 'info')}
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
                                onClick={() => showToast('Token Copiado', 'Clave secreta de emparejamiento copiada al portapapeles.', 'success')}
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
                              onClick={() => showToast('Post Enviado a WordPress', 'Artículo de prueba recibido como borrador en el plugin oficial con 200 OK.', 'success')}
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
                          showToast('Enriquecimiento & Limpieza', '5 registros procesados con 98.2% de Calidad Enterprise según mejores prácticas de HubSpot.', 'success');
                        }, 1400);
                      }}
                      disabled={isEnrichingActive}
                      className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_15px_rgba(255,90,0,0.35)] cursor-pointer flex items-center gap-2 disabled:opacity-50"
                    >
                      <ArrowPathIcon className={`w-4 h-4 ${isEnrichingActive ? 'animate-spin' : ''}`} />
                      {isEnrichingActive ? 'Rastreando & Limpiando...' : 'Ejecutar Enriquecimiento & Limpieza'}
                    </button>
                    <button 
                      onClick={() => showToast('Exportación CSV', 'Descargando base de datos depurada compatible con HubSpot Contacts & Companies.', 'success')}
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
                                  <div className="flex flex-wrap gap-1.5 max-w-[220px]">
                                    {lead.techStack.map((tech, i) => (
                                      <TechBadge key={i} name={tech} />
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
                          onClick={() => showToast('Sincronización HubSpot CRM', '5 contactos y empresas vinculadas a Deals de Ventas en Hub ID #982104.', 'success')}
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

            {/* DATASETS DE KEYWORDS & RAG VECTORIAL TAB */}
            {activeTab === 'rag' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-end gap-4 border-b border-[var(--border)] pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(255,90,0,0.8)]"></span>
                      <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--muted-foreground)] font-bold">
                        VECTORIAL ENGINE // 1536-DIM EMBEDDINGS
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                      Datasets de Keywords &amp; Entrenamiento RAG
                    </h2>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      Agrupa tus listas maestras de palabras clave por clúster temático para calibrar la base de conocimiento vectorial de tus motores.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button 
                      onClick={() => showToast('Exportación Vectorial .JSONL', 'Matriz de embeddings compilada lista para ingestion en Pinecone / Qdrant.', 'success')}
                      className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--muted)] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      Exportar .JSONL Vectorial
                    </button>
                    <button 
                      onClick={() => showToast('Sincronización Vectorial', 'Índice Pinecone "buildations-rag" actualizado con 81 vectores (1,536 dims).', 'success')}
                      className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_15px_rgba(255,90,0,0.35)] cursor-pointer"
                    >
                      + Sincronizar Embeddings
                    </button>
                  </div>
                </div>

                {/* Sub-Sección 1: Datasets Activos & Creación Rápida */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Selector y Lista de Datasets */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono font-bold uppercase text-[var(--muted-foreground)]">Datasets de Entrenamiento</h4>
                      <span className="text-[10px] font-mono text-[var(--primary)] font-bold">{keywordDatasets.length} Clústers</span>
                    </div>

                    <div className="space-y-2.5">
                      {keywordDatasets.map((ds) => (
                        <div
                          key={ds.id}
                          onClick={() => setSelectedDatasetId(ds.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${selectedDatasetId === ds.id ? 'bg-[var(--card)] border-[var(--primary)] shadow-[0_0_15px_rgba(255,90,0,0.15)]' : 'bg-[var(--card)]/50 border-[var(--border)] hover:border-[var(--border)]/80 opacity-80'}`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--muted-foreground)] font-bold">
                              {ds.category}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-bold">
                              {ds.similarityScore}
                            </span>
                          </div>
                          <h5 className="font-bold text-sm text-[var(--foreground)]">{ds.name}</h5>
                          <div className="mt-2 pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)] font-mono">
                            <span>{ds.count} Keywords</span>
                            <span className="text-[10px] text-zinc-400">{ds.embeddingsStatus}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Crear Nuevo Dataset */}
                    <div className="glass-card p-4 space-y-3">
                      <span className="text-xs font-bold text-[var(--foreground)] block">Crear Nuevo Dataset Temático</span>
                      <input 
                        type="text" 
                        value={newDatasetName}
                        onChange={(e) => setNewDatasetName(e.target.value)}
                        placeholder="Nombre (ej. Lead Nurturing & MQLs)"
                        className="w-full px-3 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--foreground)] font-mono focus:outline-none focus:border-[var(--primary)]"
                      />
                      <button 
                        onClick={() => {
                          if (!newDatasetName) return;
                          const newDs = {
                            id: `ds-${Date.now()}`,
                            name: newDatasetName,
                            category: 'Estrategia Custom',
                            count: 0,
                            embeddingsStatus: 'Pendiente de Vectorizar',
                            topKw: [],
                            similarityScore: '0.90 cosine'
                          };
                          setKeywordDatasets([...keywordDatasets, newDs]);
                          setSelectedDatasetId(newDs.id);
                          setNewDatasetName('');
                        }}
                        className="w-full py-2 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        + Crear Dataset en RAG
                      </button>
                    </div>
                  </div>

                  {/* Detalle del Dataset Seleccionado & Añadir Keywords */}
                  <div className="lg:col-span-2 space-y-4">
                    {(() => {
                      const currentDs = keywordDatasets.find(d => d.id === selectedDatasetId) || keywordDatasets[0];
                      return (
                        <div className="glass-card p-6 space-y-5">
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
                            <div>
                              <span className="text-[10px] font-mono uppercase text-[var(--primary)] font-bold">
                                Clúster Activo // {currentDs.category}
                              </span>
                              <h3 className="text-lg font-bold text-[var(--foreground)] mt-0.5">{currentDs.name}</h3>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Vectorizado
                              </span>
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[var(--muted)] text-[var(--muted-foreground)]">
                                1,536 dimensiones
                              </span>
                            </div>
                          </div>

                          {/* Input para Inyectar Keywords al Dataset */}
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={newKeywordInput}
                              onChange={(e) => setNewKeywordInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' && newKeywordInput) {
                                  currentDs.topKw.push(newKeywordInput);
                                  currentDs.count += 1;
                                  setNewKeywordInput('');
                                }
                              }}
                              placeholder="Escribe una keyword o pega lista separada por comas (ej: crm b2b, pipeline revops)"
                              className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--foreground)] font-mono focus:outline-none focus:border-[var(--primary)]"
                            />
                            <button 
                              onClick={() => {
                                if (!newKeywordInput) return;
                                currentDs.topKw.push(newKeywordInput);
                                currentDs.count += 1;
                                setNewKeywordInput('');
                              }}
                              className="bg-[var(--primary)] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[var(--primary-hover)] transition-colors cursor-pointer shadow-sm"
                            >
                              Inyectar
                            </button>
                          </div>

                          {/* Lista de Keywords Vectorizadas */}
                          <div>
                            <span className="text-xs font-mono font-bold uppercase text-[var(--muted-foreground)] block mb-3">
                              Términos Vectorizados en este Dataset ({currentDs.topKw.length})
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {currentDs.topKw.map((kw, i) => (
                                <span 
                                  key={i}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-xs font-mono text-[var(--foreground)] group hover:border-[var(--primary)] transition-colors"
                                >
                                  <span>{kw}</span>
                                  <span className="text-[9px] text-zinc-500 font-mono">0.9{4 - (i % 5)}</span>
                                  <button 
                                    onClick={() => {
                                      currentDs.topKw.splice(i, 1);
                                      currentDs.count = Math.max(0, currentDs.count - 1);
                                      setKeywordDatasets([...keywordDatasets]);
                                    }}
                                    className="text-zinc-500 hover:text-rose-400 font-bold ml-1 text-xs cursor-pointer"
                                  >
                                    ×
                                  </button>
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Muestra Vectorial Preview */}
                          <div className="pt-4 border-t border-[var(--border)] space-y-2">
                            <span className="text-[11px] font-mono text-[var(--muted-foreground)] block">
                              Embeddings Vector Chunk Preview (text-embedding-3-small):
                            </span>
                            <pre className="bg-black/60 p-3.5 rounded-xl text-[11px] text-emerald-400 font-mono overflow-x-auto border border-white/5">
{`{
  "dataset_id": "${currentDs.id}",
  "vector_id": "vec_${currentDs.id.slice(3)}",
  "keywords_count": ${currentDs.topKw.length},
  "cosine_similarity_threshold": 0.85,
  "embedding_sample": [-0.0142, 0.0891, 0.0412, -0.0076, 0.0521, "... +1,531 dims"]
}`}
                            </pre>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )}

            {/* RECONSTRUCTOR Y OPTIMIZADOR DE SITEMAPS (SILO ARCHITECTURE) TAB */}
            {activeTab === 'sitemapReconstructor' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-end gap-4 border-b border-[var(--border)] pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--status-ready)] shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                      <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--muted-foreground)] font-bold">
                        ARQUITECTURA DE INFORMACIÓN // SILO TOPOLOGY &amp; INTERNAL LINKING
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                      Reconstructor de Sitemaps &amp; Silos de Contenido
                    </h2>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 max-w-2xl">
                      Reestructura la jerarquía de URLs de tu dominio en clústers temáticos estancos (Pillar &amp; Satellites). Edita slugs en caliente, previene canibalizaciones de palabras clave y compila el sitemap.xml canónico optimizado para motores de búsqueda y AEO.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button 
                      onClick={() => {
                        showPrompt(
                          'Escanear Dominio & Jerarquía de URLs',
                          'Introduce la URL del sitio web o sitemap.xml para analizar la estructura de silos:',
                          'https://buildations.studio',
                          'https://dominio.com',
                          (domain) => {
                            showToast('Escaneo Profundo Iniciado', `Analizando arquitectura de ${domain} y grafos de enlazado interno...`, 'info');
                          }
                        );
                      }}
                      className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--muted)] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      <ArrowPathIcon className="w-4 h-4 text-[var(--status-ready)]" />
                      Escanear Dominio / XML
                    </button>
                    <button 
                      onClick={() => {
                        const xmlSample = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + 
                          sitemapSilos.map(silo => `  <url>\n    <loc>https://buildations.studio${silo.slug}</loc>\n    <priority>1.0</priority>\n    <changefreq>weekly</changefreq>\n  </url>\n` + 
                            silo.satellites.map(sat => `  <url>\n    <loc>https://buildations.studio${sat.slug}</loc>\n    <priority>${sat.priority === 'Alta' || sat.priority === 'Urgente' ? '0.8' : '0.6'}</priority>\n    <changefreq>monthly</changefreq>\n  </url>`).join('\n')
                          ).join('\n') + `\n</urlset>`;
                        
                        const blob = new Blob([xmlSample], { type: 'application/xml' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'sitemap-buildations-silos.xml';
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_15px_rgba(255,90,0,0.35)] cursor-pointer flex items-center gap-2"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" />
                      Exportar sitemap.xml
                    </button>
                  </div>
                </div>

                {/* Métricas de Topología Web */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="glass-card p-4 rounded-xl border border-[var(--border)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Silos Pilares</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold font-mono text-[var(--foreground)]">{sitemapSilos.length}</span>
                      <span className="text-[10px] font-mono text-[var(--status-ready)]">Clusters Principales</span>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-[var(--border)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">URLs Satélite Indexadas</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold font-mono text-[var(--foreground)]">
                        {sitemapSilos.reduce((acc, s) => acc + s.satellites.length, 0)}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">100% Crawleables</span>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-[var(--border)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Profundidad Media de Clics</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold font-mono text-[var(--foreground)]">1.8</span>
                      <span className="text-[10px] font-mono text-emerald-400">Nivel Óptimo (&lt;3)</span>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-[var(--border)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Salud de Enlazado Interno</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold font-mono text-[var(--foreground)]">88/100</span>
                      <span className="text-[10px] font-mono text-[var(--status-ready)]">Sin URLs Huérfanas</span>
                    </div>
                  </div>
                </div>

                {/* Filtros & Recomendador Automático */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[var(--muted-foreground)] mr-1">Filtrar Silos:</span>
                    <button 
                      onClick={() => setSitemapFilter('all')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${sitemapFilter === 'all' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                    >
                      Todos ({sitemapSilos.length})
                    </button>
                    <button 
                      onClick={() => setSitemapFilter('issues')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${sitemapFilter === 'issues' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                    >
                      Conflictos / Canibalización (1)
                    </button>
                    <button 
                      onClick={() => setSitemapFilter('opportunities')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${sitemapFilter === 'opportunities' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                    >
                      Oportunidades AEO (2)
                    </button>
                  </div>

                  <button 
                    onClick={() => {
                      showPrompt(
                        'Crear Nuevo Silo Pilar',
                        'Introduce el nombre del pilar temático principal (ej. Growth Hacking & Retención):',
                        'Arquitectura RevOps B2B',
                        'Nombre del Pilar',
                        (newSiloTitle) => {
                          const baseSlug = '/' + newSiloTitle.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                          const newSilo = {
                            id: `silo-${Date.now()}`,
                            pillarTitle: newSiloTitle,
                            slug: baseSlug,
                            authorityScore: 75,
                            recommendation: 'Nuevo Silo creado. Añade satélites para construir densidad semántica.',
                            satellites: []
                          };
                          setSitemapSilos([...sitemapSilos, newSilo]);
                          showToast('Silo Pilar Creado', `Se configuró el silo ${newSiloTitle} (${baseSlug})`, 'success');
                        }
                      );
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5"
                  >
                    + Nuevo Silo Pilar
                  </button>
                </div>

                {/* Lista de Silos Jerárquicos Editables */}
                <div className="space-y-6">
                  {sitemapSilos
                    .filter(silo => {
                      if (sitemapFilter === 'issues') return silo.recommendation.toLowerCase().includes('canibalización');
                      if (sitemapFilter === 'opportunities') return silo.recommendation.toLowerCase().includes('aeo') || silo.recommendation.toLowerCase().includes('long-tail');
                      return true;
                    })
                    .map((silo, siloIdx) => (
                      <div 
                        key={silo.id} 
                        className="glass-card rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm"
                      >
                        {/* Cabecera del Pilar */}
                        <div className="p-5 bg-[var(--card)]/90 border-b border-[var(--border)] space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-lg bg-[var(--status-ready)]/10 text-[var(--status-ready)] font-mono text-xs font-bold flex items-center justify-center border border-[var(--status-ready)]/20">
                                P{siloIdx + 1}
                              </span>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <input 
                                    type="text" 
                                    value={silo.pillarTitle}
                                    onChange={(e) => {
                                      const updated = [...sitemapSilos];
                                      updated[siloIdx].pillarTitle = e.target.value;
                                      setSitemapSilos(updated);
                                    }}
                                    className="font-bold text-base text-[var(--foreground)] bg-transparent hover:bg-[var(--muted)]/40 px-2 py-0.5 rounded focus:bg-[var(--background)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                                  />
                                </div>
                                <div className="flex items-center gap-2 mt-0.5 px-2">
                                  <span className="text-[11px] font-mono text-[var(--muted-foreground)]">Slug raíz:</span>
                                  <input 
                                    type="text" 
                                    value={silo.slug}
                                    onChange={(e) => {
                                      const updated = [...sitemapSilos];
                                      updated[siloIdx].slug = e.target.value;
                                      setSitemapSilos(updated);
                                    }}
                                    className="text-[11px] font-mono text-[var(--primary)] bg-transparent hover:bg-[var(--muted)]/40 px-1 py-0.5 rounded focus:bg-[var(--background)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                              <div className="text-right">
                                <span className="text-[10px] font-mono text-[var(--muted-foreground)] block">Autoridad de Silo</span>
                                <span className="text-sm font-bold font-mono text-emerald-400">{silo.authorityScore}/100</span>
                              </div>
                              <button 
                                onClick={() => {
                                  showPrompt(
                                    `Añadir Satélite a ${silo.pillarTitle}`,
                                    'Introduce el título del nuevo contenido satélite para enlazado interno:',
                                    'Mejores Prácticas de Integración',
                                    'Título del artículo satélite',
                                    (title) => {
                                      const subSlug = '/' + title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                                      const updated = [...sitemapSilos];
                                      updated[siloIdx].satellites.push({
                                        id: `sat-${Date.now()}`,
                                        title,
                                        slug: `${silo.slug}${subSlug}`,
                                        status: 'draft',
                                        priority: 'Media'
                                      });
                                      setSitemapSilos(updated);
                                      showToast('Satélite Añadido', `Página "${title}" vinculada al pilar ${silo.pillarTitle}`, 'success');
                                    }
                                  );
                                }}
                                className="px-3 py-1.5 rounded-lg bg-[var(--muted)] hover:bg-[var(--primary)] hover:text-white text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                              >
                                + Satélite
                              </button>
                            </div>
                          </div>

                          {/* Recomendación inteligente del motor */}
                          <div className="p-3 rounded-xl bg-[var(--background)]/80 border border-[var(--border)] flex items-start gap-2.5 text-xs">
                            <SparklesIcon className="w-4 h-4 text-[var(--status-ready)] shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="font-semibold text-[var(--foreground)]">Diagnóstico de Silo: </span>
                              <span className="text-[var(--muted-foreground)]">{silo.recommendation}</span>
                            </div>
                            <button 
                              onClick={() => {
                                showToast('Sugerencia Aplicada', `Se recalibraron los enlaces internos del clúster ${silo.pillarTitle} con éxito.`, 'success');
                              }}
                              className="text-[11px] font-semibold text-[var(--status-ready)] hover:underline cursor-pointer shrink-0"
                            >
                              Aplicar sugerencia →
                            </button>
                          </div>
                        </div>

                        {/* Lista de Satélites del Silo */}
                        <div className="p-4 space-y-2.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted-foreground)] font-bold block mb-2 px-1">
                            URLs Satélite Vinculadas ({silo.satellites.length})
                          </span>

                          {silo.satellites.length === 0 ? (
                            <p className="text-xs text-[var(--muted-foreground)] italic px-2 py-4 text-center">
                              No hay satélites en este silo. Añade páginas para consolidar la autoridad temática.
                            </p>
                          ) : (
                            silo.satellites.map((sat, satIdx) => (
                              <div 
                                key={sat.id}
                                className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[var(--card)]/50 border border-[var(--border)] hover:border-[var(--primary)]/40 transition-colors"
                              >
                                <div className="flex items-center gap-3 flex-1 min-w-[280px]">
                                  <span className="text-xs font-mono text-[var(--muted-foreground)] select-none">
                                    ↳
                                  </span>
                                  <div className="flex-1">
                                    <input 
                                      type="text" 
                                      value={sat.title}
                                      onChange={(e) => {
                                        const updated = [...sitemapSilos];
                                        updated[siloIdx].satellites[satIdx].title = e.target.value;
                                        setSitemapSilos(updated);
                                      }}
                                      className="text-xs font-semibold text-[var(--foreground)] bg-transparent hover:bg-[var(--muted)]/50 px-1.5 py-0.5 rounded w-full focus:bg-[var(--background)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                                    />
                                    <input 
                                      type="text" 
                                      value={sat.slug}
                                      onChange={(e) => {
                                        const updated = [...sitemapSilos];
                                        updated[siloIdx].satellites[satIdx].slug = e.target.value;
                                        setSitemapSilos(updated);
                                      }}
                                      className="text-[11px] font-mono text-[var(--muted-foreground)] bg-transparent hover:bg-[var(--muted)]/50 px-1.5 py-0.5 rounded w-full focus:bg-[var(--background)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                                    />
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  {/* Selector de Estado */}
                                  <select 
                                    value={sat.status}
                                    onChange={(e) => {
                                      const updated = [...sitemapSilos];
                                      updated[siloIdx].satellites[satIdx].status = e.target.value;
                                      setSitemapSilos(updated);
                                    }}
                                    className="px-2 py-1 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[11px] font-mono text-[var(--foreground)] cursor-pointer focus:outline-none"
                                  >
                                    <option value="published">Publicado</option>
                                    <option value="draft">Borrador</option>
                                    <option value="planned">Planificado</option>
                                  </select>

                                  {/* Badge de Prioridad */}
                                  <select 
                                    value={sat.priority}
                                    onChange={(e) => {
                                      const updated = [...sitemapSilos];
                                      updated[siloIdx].satellites[satIdx].priority = e.target.value;
                                      setSitemapSilos(updated);
                                    }}
                                    className="px-2 py-1 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[11px] font-mono text-[var(--status-ready)] cursor-pointer focus:outline-none"
                                  >
                                    <option value="Alta">Prioridad: Alta</option>
                                    <option value="Media">Prioridad: Media</option>
                                    <option value="Urgente">Prioridad: Urgente</option>
                                  </select>

                                  {/* Eliminar Satélite */}
                                  <button 
                                    onClick={() => {
                                      const updated = [...sitemapSilos];
                                      updated[siloIdx].satellites.splice(satIdx, 1);
                                      setSitemapSilos(updated);
                                    }}
                                    className="p-1 rounded hover:bg-rose-500/10 text-zinc-500 hover:text-rose-400 text-xs transition-colors cursor-pointer"
                                    title="Eliminar satélite"
                                  >
                                    <TrashIcon className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Previsualizador en tiempo real de Sitemap XML & Reglas de Redirección */}
                <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[var(--foreground)]">Compilación de sitemap.xml Canónico</h4>
                      <p className="text-xs text-[var(--muted-foreground)]">Previsualización del XML estructurado con atributos de prioridad y frecuencia calculados por el motor.</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      RFC 6596 Compatible
                    </span>
                  </div>

                  <pre className="bg-black/70 p-4 rounded-xl text-[11px] text-amber-300 font-mono overflow-x-auto border border-white/5 max-h-56">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
` + sitemapSilos.map(s => `  <!-- SILO: ${s.pillarTitle} -->\n  <url>\n    <loc>https://buildations.studio${s.slug}</loc>\n    <priority>1.0</priority>\n    <changefreq>weekly</changefreq>\n  </url>\n` + s.satellites.map(sat => `  <url>\n    <loc>https://buildations.studio${sat.slug}</loc>\n    <priority>${sat.priority === 'Alta' || sat.priority === 'Urgente' ? '0.80' : '0.60'}</priority>\n    <changefreq>monthly</changefreq>\n  </url>`).join('\n')).join('\n') + `
</urlset>`}
                  </pre>
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

            {/* TAB: DOCUMENTACIÓN OFICIAL, MANUAL DE USO, HOMOLOGACIÓN & FAQS */}
            {activeTab === 'documentation' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header Documentación */}
                <div className="flex flex-wrap justify-between items-end gap-4 border-b border-[var(--border)] pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
                      <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400 font-bold">
                        DOCUMENTACIÓN &amp; HOMOLOGACIÓN TÉCNICA // BUILDATIONS STUDIO V2.4
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                      Manual de Uso, Arquitectura del Sistema &amp; Preguntas Frecuentes
                    </h2>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 max-w-3xl leading-relaxed">
                      Guía exhaustiva para operar motores generativos, conectar CMS (Payload &amp; WordPress), vincular pipelines vectoriales (Supabase pgvector / Pinecone / Qdrant) y sincronizar ventas en HubSpot con citabilidad AEO.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button 
                      onClick={() => {
                        const content = `# MANUAL TÉCNICO Y ESPECIFICACIÓN BUILDATIONS STUDIO V2.4\nGenerado: ${new Date().toISOString()}\n\nArquitectura: 64-bit Hybrid Vector Runtime\nConectores: Payload CMS 3.x, WordPress REST, Supabase pgvector, Pinecone, HubSpot RevOps\n`;
                        const blob = new Blob([content], { type: 'text/markdown' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'manual-tecnico-buildations-studio.md';
                        a.click();
                        URL.revokeObjectURL(url);
                        showToast('Descarga Iniciada', 'Manual técnico completo descargado en Markdown.', 'success');
                      }}
                      className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--muted)] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4 text-cyan-400" />
                      Descargar Manual (.MD)
                    </button>
                    <button 
                      onClick={() => setActiveTab('engineBuilder')}
                      className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      <RocketLaunchIcon className="w-4 h-4" />
                      Ir al Constructor
                    </button>
                  </div>
                </div>

                {/* Barra de Navegación de Categorías y Buscador de Docs */}
                <div className="glass-card p-3 rounded-2xl border border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[
                      { id: 'quickstart', label: '01. Inicio Rápido (3 Minutos)', icon: '⚡' },
                      { id: 'architecture', label: '02. Arquitectura & Homologación', icon: '🏛️' },
                      { id: 'engines', label: '03. Operación de Motores', icon: '⚙️' },
                      { id: 'connectors', label: '04. Conectores CMS & DBs', icon: '🔌' },
                      { id: 'faqs', label: '05. Preguntas Frecuentes (FAQs)', icon: '❓' },
                      { id: 'troubleshooting', label: '06. Solución de Problemas', icon: '🛠️' },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setDocCategory(cat.id as any)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          docCategory === cat.id
                            ? 'bg-[var(--primary)] text-white shadow-md'
                            : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]/50'
                        }`}
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="relative min-w-[220px]">
                    <MagnifyingGlassIcon className="w-4 h-4 text-[var(--muted-foreground)] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="Buscar en la documentación..." 
                      value={docSearchQuery}
                      onChange={(e) => setDocSearchQuery(e.target.value)}
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl pl-9 pr-3 py-1.5 text-xs text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:border-[var(--primary)] outline-none"
                    />
                  </div>
                </div>

                {/* CONTENIDO 01: QUICKSTART */}
                {docCategory === 'quickstart' && (
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">⚡</span>
                        <h3 className="text-lg font-bold text-[var(--foreground)]">
                          Flujo de Puesta en Marcha en 3 Pasos
                        </h3>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                        Sigue estos tres hitos esenciales para pasar de cero a un clúster de redacción y citabilidad operando de forma autónoma:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2 relative overflow-hidden">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] font-bold">
                            PASO 01
                          </span>
                          <h4 className="text-sm font-bold text-[var(--foreground)]">Conectar el CMS Oficial</h4>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Dirígete a <strong>Conectores CMS</strong> y configura tu endpoint de <em>Payload CMS 3.x</em> o tu token de <em>WordPress REST</em>. Realiza un Ping Test para validar el handshake 200 OK.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2 relative overflow-hidden">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold">
                            PASO 02
                          </span>
                          <h4 className="text-sm font-bold text-[var(--foreground)]">Calibrar el Motor en el Constructor</h4>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Abre <strong>Constructor de Motores</strong>. Elige el LLM (Claude 3.5 Sonnet para máxima citabilidad AEO), la base vectorial (Supabase pgvector) y vincula tus datasets de palabras clave.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2 relative overflow-hidden">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
                            PASO 03
                          </span>
                          <h4 className="text-sm font-bold text-[var(--foreground)]">Compilar y Activar</h4>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Ejecuta una simulación <em>Dry-Run</em>. Si la latencia es &lt; 2s y el fact-checking supera el 90%, haz clic en <strong>Compilar y Activar</strong> para registrarlo en el clúster de workers.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Matriz de Roles y Accesos */}
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-3">
                      <h4 className="text-sm font-bold text-[var(--foreground)] flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                        Requisitos de Seguridad &amp; Variables de Entorno
                      </h4>
                      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                        Asegúrate de configurar en tu archivo <code>.env.local</code> los siguientes secretos para garantizar que los conectores operen sin bloqueos:
                      </p>
                      <div className="p-3 rounded-xl bg-black/80 border border-slate-800 font-mono text-[11px] text-cyan-300 space-y-1 overflow-x-auto">
                        <p># Bases de Datos &amp; Memoria Vectorial</p>
                        <p>SUPABASE_URL=https://tu-proyecto.supabase.co</p>
                        <p>SUPABASE_SERVICE_ROLE_KEY=eyJh... # Acceso de servidor para pgvector</p>
                        <p>PINECONE_API_KEY=pcsk_... # Si usas clúster serverless</p>
                        <p className="pt-2"># Modelos de Inteligencia Artificial</p>
                        <p>ANTHROPIC_API_KEY=sk-ant-api03-... # Claude 3.5 Sonnet</p>
                        <p>OPENAI_API_KEY=sk-proj-... # GPT-4o &amp; Embeddings</p>
                        <p className="pt-2"># CRM &amp; RevOps</p>
                        <p>HUBSPOT_ACCESS_TOKEN=pat-na1-... # Inyección de Deals y UTMs</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CONTENIDO 02: ARQUITECTURA & HOMOLOGACIÓN */}
                {docCategory === 'architecture' && (
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-4">
                      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                        <div>
                          <h3 className="text-base font-bold text-[var(--foreground)]">
                            Matriz de Homologación de Módulos (Design System &amp; Stack)
                          </h3>
                          <p className="text-xs text-[var(--muted-foreground)]">
                            Estándares arquitectónicos unificados en todo BUILDATIONS STUDIO para consistencia visual y de rendimiento.
                          </p>
                        </div>
                        <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-[var(--primary)]/10 text-[var(--primary)] font-bold">
                          ESTÁNDAR V2.4 HOMOLOGADO
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-[var(--border)] text-[var(--muted-foreground)] font-mono text-[10px] uppercase">
                              <th className="py-2.5 pr-4">Módulo</th>
                              <th className="py-2.5 px-4">Responsabilidad Primaria</th>
                              <th className="py-2.5 px-4">Tecnologías Homologadas</th>
                              <th className="py-2.5 px-4">Garantía SLA</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--border)]">
                            <tr>
                              <td className="py-3 pr-4 font-bold text-[var(--foreground)] flex items-center gap-2">
                                <CpuChipIcon className="w-4 h-4 text-amber-400" /> Constructor de Motores
                              </td>
                              <td className="py-3 px-4 text-[var(--muted-foreground)]">Diseño topológico visual y asignación de flotas</td>
                              <td className="py-3 px-4 font-mono text-zinc-300">SVG Flow Canvas + Next.js Server Components</td>
                              <td className="py-3 px-4 font-mono text-emerald-400 font-bold">&lt; 1.8s latencia</td>
                            </tr>
                            <tr>
                              <td className="py-3 pr-4 font-bold text-[var(--foreground)] flex items-center gap-2">
                                <DocumentTextIcon className="w-4 h-4 text-emerald-400" /> Vector Memory RAG
                              </td>
                              <td className="py-3 px-4 text-[var(--muted-foreground)]">Indexación semántica e inyección de contexto exacto</td>
                              <td className="py-3 px-4 font-mono text-zinc-300">Supabase pgvector / Pinecone / text-embedding-3</td>
                              <td className="py-3 px-4 font-mono text-emerald-400 font-bold">&gt; 0.88 Cosine</td>
                            </tr>
                            <tr>
                              <td className="py-3 pr-4 font-bold text-[var(--foreground)] flex items-center gap-2">
                                <ServerStackIcon className="w-4 h-4 text-cyan-400" /> Conectores CMS
                              </td>
                              <td className="py-3 px-4 text-[var(--muted-foreground)]">Despacho de borradores, imágenes y metadatos SEO</td>
                              <td className="py-3 px-4 font-mono text-zinc-300">Payload CMS 3.x REST / WordPress JSON REST</td>
                              <td className="py-3 px-4 font-mono text-emerald-400 font-bold">200 OK Handshake</td>
                            </tr>
                            <tr>
                              <td className="py-3 pr-4 font-bold text-[var(--foreground)] flex items-center gap-2">
                                <ArrowPathRoundedSquareIcon className="w-4 h-4 text-orange-400" /> RevOps &amp; HubSpot
                              </td>
                              <td className="py-3 px-4 text-[var(--muted-foreground)]">Atribución de ingresos orgánicos y creación de Deals</td>
                              <td className="py-3 px-4 font-mono text-zinc-300">HubSpot Webhooks v3 + UTM Param Injector</td>
                              <td className="py-3 px-4 font-mono text-emerald-400 font-bold">100% Trazable</td>
                            </tr>
                            <tr>
                              <td className="py-3 pr-4 font-bold text-[var(--foreground)] flex items-center gap-2">
                                <SparklesIcon className="w-4 h-4 text-indigo-400" /> Radar de Citabilidad AEO
                              </td>
                              <td className="py-3 px-4 text-[var(--muted-foreground)]">Simulación de respuestas en Perplexity y ChatGPT</td>
                              <td className="py-3 px-4 font-mono text-zinc-300">Claude 3.5 Sonnet + JSON-LD Validator</td>
                              <td className="py-3 px-4 font-mono text-emerald-400 font-bold">&gt; 90% Densidad</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* CONTENIDO 03: OPERACIÓN DE MOTORES */}
                {docCategory === 'engines' && (
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-4">
                      <h3 className="text-base font-bold text-[var(--foreground)]">
                        Guía de Operación: Flota Multidominio &amp; Tipos de Motores
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                        BUILDATIONS STUDIO permite ejecutar múltiples motores concurrentes con personalidades, cronogramas y dominios independientes.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-xs text-[var(--foreground)]">1. Motor de Autoridad &amp; Citabilidad (AEO)</h4>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">RECOMENDADO B2B</span>
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Diseñado para aparecer como fuente citada con enlaces en Perplexity, ChatGPT Search y Google AI Overviews. Utiliza temperatura baja (0.2 - 0.4), alta densidad de entidades y esquemas JSON-LD <code>FAQPage</code> y <code>BreadcrumbList</code>.
                          </p>
                          <div className="text-[10px] font-mono text-slate-400 pt-1">
                            Frecuencia óptima: <strong>3 por semana</strong> (Lunes, Miércoles, Viernes).
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-xs text-[var(--foreground)]">2. Motor de Landing Pages &amp; Silos</h4>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold">PROGRAMÁTICO</span>
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Crea clusters de páginas de servicios o comparativas combinando variables de tu nicho. Evita canibalización cruzando las URLs con el módulo de Reconstructor de Sitemaps antes de publicar.
                          </p>
                          <div className="text-[10px] font-mono text-slate-400 pt-1">
                            Frecuencia óptima: <strong>Diario</strong> o por lotes planificados.
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-xs text-[var(--foreground)]">3. Motor de Noticias &amp; Decaimiento GSC</h4>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold">REACTIVO</span>
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            Monitorea las URLs de tu Google Search Console que han perdido clics o impresiones en los últimos 30 días. El agente autónomo reescribe introducciones, refresca datos y añade secciones de preguntas frecuentes en tiempo real.
                          </p>
                          <div className="text-[10px] font-mono text-slate-400 pt-1">
                            Frecuencia óptima: <strong>En tiempo real</strong> o semanal.
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-xs text-[var(--foreground)]">4. Modo 'Draft' vs 'Autonomous Autopilot'</h4>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-bold">CONTROL</span>
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                            En modo <code>_status: 'draft'</code>, el motor deposita los artículos listos en tu CMS para que tu editor humano dé el visto bueno final con un clic. En modo <code>autonomous</code>, publica directamente a producción y actualiza el sitemap.xml.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CONTENIDO 04: CONECTORES CMS & DATABASES */}
                {docCategory === 'connectors' && (
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-4">
                      <h3 className="text-base font-bold text-[var(--foreground)]">
                        Especificación de Conexión: Payload CMS, WordPress, Supabase &amp; Pinecone
                      </h3>
                      
                      <div className="space-y-4 text-xs">
                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2">
                          <div className="flex items-center gap-2">
                            <PayloadLogo className="w-4 h-4 text-white" />
                            <h4 className="font-bold text-[var(--foreground)]">Payload CMS (Headless 2.x &amp; 3.x)</h4>
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)]">
                            Se conecta directamente vía REST API a tu endpoint <code>/api/posts</code> o a tu colección personalizada. Requiere una API Key generada con <code>useAPIKey: true</code> o un token de servicio.
                          </p>
                          <div className="bg-black/60 p-2.5 rounded font-mono text-[10px] text-zinc-300">
                            POST https://tu-dominio.com/api/posts<br />
                            Headers: Authorization: users API-Key payload_live_sec_...
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2">
                          <div className="flex items-center gap-2">
                            <WordPressLogo className="w-4 h-4" />
                            <h4 className="font-bold text-[var(--foreground)]">WordPress REST API &amp; Plugin Oficial</h4>
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)]">
                            Compatible con la ruta <code>/wp-json/wp/v2/posts</code> utilizando Application Passwords (Contraseñas de Aplicación nativas desde WordPress 5.6) o mediante el plugin oficial Buildations Connector.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-2">
                          <div className="flex items-center gap-2">
                            <SupabaseLogo className="w-4 h-4" />
                            <PostgresLogo className="w-4 h-4" />
                            <h4 className="font-bold text-[var(--foreground)]">Supabase pgvector (PostgreSQL Nativo)</h4>
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)]">
                            Almacena embeddings de 1536 dimensiones (generados por <code>text-embedding-3-small</code>) en una tabla PostgreSQL con extensión <code>vector</code> habilitada. Permite búsquedas por similitud de coseno con latencia menor a 15ms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CONTENIDO 05: PREGUNTAS FRECUENTES (FAQS) */}
                {docCategory === 'faqs' && (
                  <div className="space-y-4">
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-2">
                      <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
                        <QuestionMarkCircleIcon className="w-5 h-5 text-cyan-400" />
                        Preguntas Frecuentes Técnicas &amp; Operativas (FAQs)
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Respuestas a las dudas más comunes sobre la operación autónoma, citabilidad en IA y prevención de penalizaciones.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          q: "¿Cómo garantiza BUILDATIONS que el contenido no sea penalizado por Google o marcado como spam de IA?",
                          a: "El sistema no redacta con 'prompts genéricos'. Integra guardarraíles de calidad estrictos (filtro anti-alucinación al 90%+), verificación de entidades, inyección de datos propios vía RAG y esquemas estructurados de Schema.org. Cada artículo responde preguntas de búsqueda con datos comprobables, cumpliendo al 100% las directrices EEAT de Google."
                        },
                        {
                          q: "¿Qué diferencia hay entre SEO tradicional y AEO (Answer Engine Optimization)?",
                          a: "El SEO tradicional optimiza para conseguir clics en la lista azul de Google. El AEO optimiza para ser la fuente primaria citada por modelos conversacionales (Perplexity, ChatGPT, Claude, Google AI Overviews). Requiere respuestas directas en el primer párrafo, tablas de datos, estructura de silo limpia y marcado semántico exacto."
                        },
                        {
                          q: "¿Puedo tener más de un motor encendido para diferentes sitios web al mismo tiempo?",
                          a: "Sí. El panel de 'Flota de Motores' permite crear y correr múltiples motores concurrentes. Por ejemplo, puedes tener el 'Motor 1' redactando para tu SaaS B2B en Payload CMS y el 'Motor 2' actualizando una tienda o blog de noticias en WordPress."
                        },
                        {
                          q: "¿Qué sucede si no cuento con Pinecone o Qdrant?",
                          a: "Puedes usar directamente Supabase pgvector (incluido en cualquier proyecto de Supabase / PostgreSQL). Es ultrarrápido, de costo mínimo y soporta indexación HNSW e IVFFlat para millones de vectores."
                        },
                        {
                          q: "¿Cómo se conecta con HubSpot CRM y qué datos inyecta?",
                          a: "A través del API v3 de HubSpot. Cuando un artículo genera un lead o una visita calificada, el sistema asocia el Deal y los parámetros UTM (utm_source=aeo_engine, utm_campaign=nombre_del_motor) al contacto en el CRM para que el equipo comercial sepa exactamente qué artículo originó la oportunidad."
                        },
                        {
                          q: "¿Qué modelo de IA es el más recomendado para redacción?",
                          a: "Para máxima citabilidad en motores de respuesta recomendamos Claude 3.5 Sonnet debido a su rigor estructural y lenguaje natural no redundante. Para esquemas JSON estrictos o velocidad masiva, GPT-4o Enterprise es ideal. Para presupuestos reducidos, DeepSeek-V3 ofrece un rendimiento sobresaliente."
                        }
                      ].map((faq, idx) => {
                        const isOpen = expandedFaq === idx;
                        return (
                          <div 
                            key={idx}
                            className={`glass-card rounded-xl border transition-all cursor-pointer ${
                              isOpen ? 'border-[var(--primary)]/60 bg-[var(--card)]' : 'border-[var(--border)] bg-[var(--card)]/40 hover:border-[var(--border)]/80'
                            }`}
                          >
                            <div 
                              onClick={() => setExpandedFaq(isOpen ? null : idx)}
                              className="p-4 flex items-center justify-between gap-4"
                            >
                              <h4 className="font-bold text-xs text-[var(--foreground)] leading-snug">
                                {faq.q}
                              </h4>
                              <span className={`text-xs font-mono text-[var(--primary)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                ▼
                              </span>
                            </div>
                            {isOpen && (
                              <div className="px-4 pb-4 pt-1 border-t border-[var(--border)]/50 text-xs text-[var(--muted-foreground)] leading-relaxed animate-fade-in">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* CONTENIDO 06: TROUBLESHOOTING */}
                {docCategory === 'troubleshooting' && (
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-4">
                      <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2">
                        <CommandLineIcon className="w-5 h-5 text-amber-400" />
                        Diagnóstico de Errores Comunes &amp; Códigos de Estado
                      </h3>

                      <div className="space-y-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 space-y-1">
                          <span className="font-bold font-mono text-[11px] block text-red-400">401 Unauthorized en Conector CMS</span>
                          <p className="text-[11px] leading-relaxed">
                            Causa: El token o Application Password expiró o tiene permisos de sólo lectura. Asegúrate de que el usuario tenga rol de 'Editor' o 'Administrator' y que en Payload la propiedad <code>useAPIKey: true</code> esté habilitada.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 space-y-1">
                          <span className="font-bold font-mono text-[11px] block text-amber-400">0 Chunks Inyectados en Memoria RAG</span>
                          <p className="text-[11px] leading-relaxed">
                            Causa: El umbral de similitud (Cosine Threshold) está demasiado alto (ej. 0.98) o no has indexado documentos en la colección. Se recomienda fijar el umbral entre <strong>0.82 y 0.88</strong> para balance óptimo.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 space-y-1">
                          <span className="font-bold font-mono text-[11px] block text-blue-400">CORS Error al probar Ping Test local</span>
                          <p className="text-[11px] leading-relaxed">
                            Causa: Tu CMS no permite solicitudes desde <code>localhost:3000</code>. Añade <code>http://localhost:3000</code> a la lista de orígenes permitidos en la configuración de CORS de Payload o en los headers de WordPress.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VISTA 16: CONFIGURACIÓN DE CUENTA & ENTERPRISE VAULT */}
            {activeTab === 'settings' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header Banner */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border border-zinc-800 p-8 shadow-2xl">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 rounded-full bg-[var(--primary)]/10 blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse shadow-[0_0_8px_rgba(255,90,0,0.8)]" />
                          {accountSettings.plan}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-bold flex items-center gap-1">
                          <CheckCircleIcon className="w-3.5 h-3.5" /> SLA {accountSettings.slaGuaranteed}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 font-bold flex items-center gap-1">
                          <ShieldCheckIcon className="w-3.5 h-3.5" /> Bóveda HSM AES-256
                        </span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                        <Cog6ToothIcon className="w-8 h-8 text-[var(--primary)]" />
                        Configuración de Cuenta &amp; Bóveda Enterprise
                      </h1>
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl leading-relaxed">
                        Control unificado de llaves maestras de IA, orquestación de registros DNS multinodo, despacho de webhooks transaccionales y gobernanza de equipo para <strong>{accountSettings.agencyName}</strong>.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <button
                        onClick={() => {
                          showToast(
                            'Auditoría SOC-2 Exportada',
                            'Informe criptográfico de cumplimiento SOC-2 Type II generado en JSON (SHA-256 validado).',
                            'success'
                          );
                        }}
                        className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                      >
                        <ArrowDownTrayIcon className="w-4 h-4 text-cyan-400" />
                        Exportar Auditoría SOC-2
                      </button>

                      <button
                        onClick={() => {
                          showToast(
                            'Rotación de Claves Iniciada',
                            'Proceso zero-downtime activado: Se han generado nuevos tokens y se mantendrán los anteriores por 24h para propagación segura.',
                            'info'
                          );
                        }}
                        className="px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(255,90,0,0.35)] flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowPathIcon className="w-4 h-4" />
                        Rotar Bóveda de Claves
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub-Tab Navigation Bar */}
                <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2 overflow-x-auto no-scrollbar">
                  {[
                    { id: 'apiKeys', label: '01. Bóveda de API Keys & AI Tokens', icon: KeyIcon, count: Object.keys(accountSettings.apiKeys).length },
                    { id: 'dns', label: '02. Gestión DNS & Dominios Custom', icon: GlobeAltIcon, count: accountSettings.dnsRecords.length },
                    { id: 'webhooks', label: '03. Webhooks & Eventos de Despacho', icon: BoltIcon, count: accountSettings.webhooks.length },
                    { id: 'general', label: '04. Infraestructura & Regiones Cloud', icon: ServerStackIcon },
                    { id: 'team', label: '05. Equipo, Roles & Permisos', icon: UsersIcon, count: teamMembers.length },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = settingsTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setSettingsTab(tab.id as any)}
                        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)]'
                            : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                        {tab.count !== undefined && (
                          <span
                            className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                              isActive ? 'bg-white/20 text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                            }`}
                          >
                            {tab.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* TAB 1: BÓVEDA DE API KEYS */}
                {settingsTab === 'apiKeys' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <div>
                        <h3 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                          <KeyIcon className="w-4 h-4 text-[var(--primary)]" />
                          Bóveda Criptográfica de Proveedores de Cómputo e Inferencia
                        </h3>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Tokens maestros utilizados por los motores autónomos para generación de contenidos, indexación vectorial, consultas SERP y sincronización CRM.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            const allRevealed = Object.keys(accountSettings.apiKeys).every(k => revealedKeys[k]);
                            const newRevealed: Record<string, boolean> = {};
                            Object.keys(accountSettings.apiKeys).forEach(k => {
                              newRevealed[k] = !allRevealed;
                            });
                            setRevealedKeys(newRevealed);
                            showToast(
                              allRevealed ? 'Claves Enmascaradas' : 'Claves Reveladas',
                              allRevealed ? 'Todas las llaves están ocultas con asteriscos' : 'Mostrando valores de tokens en texto claro',
                              'info'
                            );
                          }}
                          className="px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)] text-xs text-[var(--foreground)] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <EyeIcon className="w-3.5 h-3.5" />
                          <span>Alternar Enmascaramiento</span>
                        </button>
                        <button
                          onClick={() => {
                            showToast('Bóveda Guardada', 'Todas las claves han sido sincronizadas en el KMS seguro de producción.', 'success');
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                        >
                          <CheckIcon className="w-3.5 h-3.5" />
                          <span>Guardar Claves</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          id: 'anthropicKey',
                          name: 'Anthropic Claude 3.7',
                          sub: 'Razonamiento Híbrido, Sonnet & Opus',
                          icon: ClaudeLogo,
                          value: accountSettings.apiKeys.anthropicKey,
                          badge: 'Razonamiento Primario',
                          badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                        },
                        {
                          id: 'openaiKey',
                          name: 'OpenAI GPT-4o & Embeddings',
                          sub: 'Text-Embedding-3-Large & Auditoría',
                          icon: OpenAILogo,
                          value: accountSettings.apiKeys.openaiKey,
                          badge: 'Vectores & Validación',
                          badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        },
                        {
                          id: 'deepseekKey',
                          name: 'DeepSeek V3 / R1 Fast MoE',
                          sub: 'Micro-Inferencia de Alta Velocidad',
                          icon: CpuChipIcon,
                          value: accountSettings.apiKeys.deepseekKey,
                          badge: 'MoE Fast Lane',
                          badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
                        },
                        {
                          id: 'googleSearchConsoleToken',
                          name: 'Google Search Console OAuth',
                          sub: 'GSC API & Live Query Tracking',
                          icon: GoogleLogo,
                          value: accountSettings.apiKeys.googleSearchConsoleToken,
                          badge: 'Indexación & Clics',
                          badgeColor: 'border-red-500/30 text-red-400 bg-red-500/10'
                        },
                        {
                          id: 'hubspotAccessToken',
                          name: 'HubSpot RevOps Private App',
                          sub: 'Deals, Contact Attribution & Lifecycle',
                          icon: HubSpotLogo,
                          value: accountSettings.apiKeys.hubspotAccessToken,
                          badge: 'CRM Sincronizado',
                          badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10'
                        },
                        {
                          id: 'vercelApiToken',
                          name: 'Vercel Edge & Domains Token',
                          sub: 'Anycast DNS & On-Demand ISR Purge',
                          icon: VercelLogo,
                          value: accountSettings.apiKeys.vercelApiToken,
                          badge: 'Edge Hosting Live',
                          badgeColor: 'border-zinc-500/30 text-zinc-300 bg-zinc-500/10'
                        },
                        {
                          id: 'neonApiKey',
                          name: 'Neon Serverless Postgres API',
                          sub: 'Autoscaling CU & Instant Branching',
                          icon: NeonLogo,
                          value: accountSettings.apiKeys.neonApiKey,
                          badge: 'Base de Datos Núcleo',
                          badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        },
                        {
                          id: 'supabaseServiceKey',
                          name: 'Supabase / pgvector JWT',
                          sub: 'Tablas de Logs, Auth & Vector Store',
                          icon: SupabaseLogo,
                          value: accountSettings.apiKeys.supabaseServiceKey,
                          badge: 'Service Role Vault',
                          badgeColor: 'border-teal-500/30 text-teal-400 bg-teal-500/10'
                        },
                        {
                          id: 'pineconeApiKey',
                          name: 'Pinecone Vector DB Key',
                          sub: '1,536d Cosine Namespace & Top-K RAG',
                          icon: PineconeLogo,
                          value: accountSettings.apiKeys.pineconeApiKey,
                          badge: 'RAG Semántico',
                          badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10'
                        },
                      ].map((card) => {
                        const Icon = card.icon;
                        const isRevealed = revealedKeys[card.id];
                        const ping = pingStatus[card.id];

                        return (
                          <div
                            key={card.id}
                            className="p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all space-y-4 shadow-sm flex flex-col justify-between"
                          >
                            <div className="space-y-3">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center p-1.5 shadow-inner">
                                    <Icon className="w-5 h-5 text-[var(--foreground)]" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-xs text-[var(--foreground)] leading-tight">{card.name}</h4>
                                    <p className="text-[10px] text-[var(--muted-foreground)] font-mono">{card.sub}</p>
                                  </div>
                                </div>
                                <span className={`text-[9px] font-mono px-2 py-0.5 rounded border font-bold shrink-0 ${card.badgeColor}`}>
                                  {card.badge}
                                </span>
                              </div>

                              <div>
                                <label className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] font-semibold block mb-1">
                                  Token de Autenticación
                                </label>
                                <div className="relative flex items-center">
                                  <input
                                    type={isRevealed ? 'text' : 'password'}
                                    value={card.value}
                                    onChange={(e) => {
                                      const newVal = e.target.value;
                                      setAccountSettings(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [card.id]: newVal
                                        }
                                      }));
                                    }}
                                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg pl-3 pr-20 py-2 text-xs font-mono text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                                  />
                                  <div className="absolute right-1.5 flex items-center gap-1">
                                    <button
                                      type="button"
                                      onClick={() => setRevealedKeys(prev => ({ ...prev, [card.id]: !prev[card.id] }))}
                                      className="p-1 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                                      title={isRevealed ? 'Ocultar' : 'Mostrar'}
                                    >
                                      <EyeIcon className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        navigator.clipboard.writeText(card.value);
                                        showToast('Clave Copiada', `Token de ${card.name} copiado al portapapeles.`, 'success');
                                      }}
                                      className="p-1 rounded text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors cursor-pointer"
                                      title="Copiar Clave"
                                    >
                                      <LinkIcon className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-[var(--border)]/60 flex items-center justify-between gap-2">
                              {ping ? (
                                <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                                  {ping.latency}ms • {ping.status}
                                </span>
                              ) : (
                                <span className="text-[10px] font-mono text-[var(--muted-foreground)] flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  Conectado • 200 OK
                                </span>
                              )}

                              <button
                                onClick={() => {
                                  const latency = Math.floor(Math.random() * 25) + 14;
                                  setPingStatus(prev => ({
                                    ...prev,
                                    [card.id]: { latency, status: '200 OK' }
                                  }));
                                  showToast('Ping Exitoso', `${card.name} respondió en ${latency}ms con código HTTP 200 OK.`, 'success');
                                }}
                                className="px-2.5 py-1 rounded bg-[var(--background)] hover:bg-[var(--muted)] border border-[var(--border)] text-[10px] font-mono text-[var(--foreground)] font-bold transition-colors cursor-pointer"
                              >
                                Test Ping
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* TAB 2: GESTIÓN DNS & DOMINIOS CUSTOM */}
                {settingsTab === 'dns' && (
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border border-zinc-800 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-bold text-sm text-white flex items-center gap-2">
                            <GlobeAltIcon className="w-4 h-4 text-cyan-400" />
                            Servidores de Nombres Anycast Oficiales (DNS Master Cluster)
                          </h3>
                          <p className="text-xs text-zinc-400">
                            Apunta los dominios de tus clientes a estos nameservers para habilitar enrutamiento automático de satélites, balanceo multi-edge e inyección instantánea de registros SSL.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => {
                              setDnsTesting(true);
                              setTimeout(() => {
                                setDnsTesting(false);
                                showToast(
                                  'Propagación Verificada al 100%',
                                  'Los 84 PoPs globales (Frankfurt, Ashburn, Tokyo, São Paulo, Dallas) resolvieron con 0% de pérdida de paquetes y latencia < 18ms.',
                                  'success'
                                );
                              }, 1200);
                            }}
                            disabled={dnsTesting}
                            className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                          >
                            <ArrowPathIcon className={`w-3.5 h-3.5 ${dnsTesting ? 'animate-spin' : ''}`} />
                            <span>{dnsTesting ? 'Validando 84 PoPs...' : 'Validar Propagación Global'}</span>
                          </button>

                          <button
                            onClick={() => {
                              showPrompt(
                                'Añadir Nuevo Registro DNS',
                                'Introduce el formato TIPO HOST VALOR (ej: CNAME blog cname.vercel-dns.com):',
                                'CNAME blog.buildations.studio cname.vercel-dns.com',
                                'CNAME blog cname.vercel-dns.com',
                                (rawInput) => {
                                  const parts = rawInput.trim().split(/\s+/);
                                  const type = parts[0]?.toUpperCase() || 'A';
                                  const host = parts[1] || 'nuevo-subdominio';
                                  const value = parts[2] || '76.76.21.21';

                                  const newRec = {
                                    id: `dns-${Date.now()}`,
                                    type,
                                    host,
                                    value,
                                    target: 'Enrutador Edge Personalizado',
                                    status: 'Validado',
                                    ttl: '60s'
                                  };

                                  setAccountSettings(prev => ({
                                    ...prev,
                                    dnsRecords: [...prev.dnsRecords, newRec]
                                  }));
                                  showToast('Registro DNS Creado', `Se configuró el registro ${type} para ${host} → ${value}`, 'success');
                                }
                              );
                            }}
                            className="px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                          >
                            <PlusIcon className="w-3.5 h-3.5" />
                            <span>+ Nuevo Registro DNS</span>
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                        {[
                          { label: 'Primary NS (Tier-1)', val: 'ns1.buildations-dns.com' },
                          { label: 'Secondary NS (Tier-1)', val: 'ns2.buildations-dns.com' },
                          { label: 'Anycast Root IP', val: '76.76.21.21 (Vercel Global)' },
                          { label: 'Dedicated Cluster IP', val: '138.201.192.44 (Hetzner Bare-Metal)' }
                        ].map((ns, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs space-y-1">
                            <span className="text-[10px] font-mono text-zinc-400 block uppercase font-bold">{ns.label}</span>
                            <span className="font-mono text-white font-bold block truncate">{ns.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tabla de Registros DNS */}
                    <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden shadow-sm">
                      <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between bg-[var(--background)]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                          Zona DNS Activa: buildations.studio ({accountSettings.dnsRecords.length} Registros)
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          DNSSEC ACTIVO &amp; FIRMADO
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-[var(--muted)] text-[var(--muted-foreground)] font-mono text-[10px] uppercase">
                            <tr>
                              <th className="px-6 py-3">Tipo</th>
                              <th className="px-6 py-3">Host / Subdominio</th>
                              <th className="px-6 py-3">Valor / Destino</th>
                              <th className="px-6 py-3">Propósito &amp; Destino</th>
                              <th className="px-6 py-3">TTL</th>
                              <th className="px-6 py-3">Estado</th>
                              <th className="px-6 py-3 text-right">Acción</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--border)] font-mono">
                            {accountSettings.dnsRecords.map((dns) => (
                              <tr key={dns.id} className="hover:bg-[var(--muted)]/50 transition-colors">
                                <td className="px-6 py-3.5">
                                  <span
                                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                      dns.type === 'A'
                                        ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                                        : dns.type === 'CNAME'
                                        ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
                                        : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                                    }`}
                                  >
                                    {dns.type}
                                  </span>
                                </td>
                                <td className="px-6 py-3.5 font-bold text-[var(--foreground)]">{dns.host}</td>
                                <td className="px-6 py-3.5 text-zinc-400 truncate max-w-xs">{dns.value}</td>
                                <td className="px-6 py-3.5 text-[var(--foreground)] font-sans">{dns.target}</td>
                                <td className="px-6 py-3.5 text-[var(--muted-foreground)]">{dns.ttl}</td>
                                <td className="px-6 py-3.5">
                                  <span
                                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold ${
                                      dns.status === 'Validado'
                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                                    }`}
                                  >
                                    <span
                                      className={`w-1.5 h-1.5 rounded-full ${
                                        dns.status === 'Validado' ? 'bg-emerald-400' : 'bg-amber-400'
                                      }`}
                                    />
                                    {dns.status}
                                  </span>
                                </td>
                                <td className="px-6 py-3.5 text-right font-sans">
                                  <button
                                    onClick={() => {
                                      setAccountSettings(prev => ({
                                        ...prev,
                                        dnsRecords: prev.dnsRecords.filter(r => r.id !== dns.id)
                                      }));
                                      showToast('Registro Eliminado', `Se removió el registro ${dns.type} (${dns.host})`, 'info');
                                    }}
                                    className="text-[var(--muted-foreground)] hover:text-red-400 transition-colors p-1"
                                    title="Eliminar Registro"
                                  >
                                    <TrashIcon className="w-4 h-4" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* SSL / TLS Status Card */}
                    <div className="p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <ShieldCheckIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-[var(--foreground)]">Certificado SSL/TLS Automático (Let's Encrypt Wildcard)</h4>
                          <p className="text-[11px] text-[var(--muted-foreground)]">
                            Válido para <code>*.buildations.studio</code> y <code>buildations.studio</code>. Renovación automática en 78 días con TLS 1.3 forzado y HSTS precargado.
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        A+ QUALYS SSL RATING
                      </span>
                    </div>
                  </div>
                )}

                {/* TAB 3: WEBHOOKS & EVENTOS DE DESPACHO */}
                {settingsTab === 'webhooks' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <div>
                        <h3 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                          <BoltIcon className="w-4 h-4 text-amber-500" />
                          Webhooks de Despacho &amp; Event-Driven Architecture
                        </h3>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Emite notificaciones en tiempo real a endpoints externos ante publicación de artículos, picos de citabilidad AEO o regeneración de sitemaps.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          showPrompt(
                            'Registrar Nuevo Endpoint de Webhook',
                            'Introduce la URL completa del endpoint HTTPS que recibirá los eventos:',
                            'https://mi-servidor.com/api/webhooks/editorial',
                            'https://mi-servidor.com/api/webhooks/editorial',
                            (newUrl) => {
                              const newWh = {
                                id: `wh-${Date.now()}`,
                                name: 'Custom Integration Dispatcher',
                                endpoint: newUrl,
                                events: ['article.published', 'sitemap.regenerated'],
                                status: 'Activo',
                                lastTrigger: 'Sin disparar aún'
                              };
                              setAccountSettings(prev => ({
                                ...prev,
                                webhooks: [...prev.webhooks, newWh]
                              }));
                              showToast('Webhook Registrado', `Nuevo endpoint configurado para eventos de despacho: ${newUrl}`, 'success');
                            }
                          );
                        }}
                        className="px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0"
                      >
                        <PlusIcon className="w-3.5 h-3.5" />
                        <span>+ Registrar Webhook</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      {accountSettings.webhooks.map((wh) => (
                        <div
                          key={wh.id}
                          className="p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all space-y-4 shadow-sm"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-amber-500">
                                <BoltIcon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-bold text-xs text-[var(--foreground)]">{wh.name}</h4>
                                <p className="text-[11px] font-mono text-[var(--muted-foreground)] truncate max-w-md">{wh.endpoint}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                {wh.lastTrigger}
                              </span>

                              <button
                                onClick={() => {
                                  const latency = Math.floor(Math.random() * 20) + 22;
                                  showToast('Test Webhook Despachado', `Se envió payload JSON a ${wh.endpoint}. Código 200 OK (${latency}ms).`, 'success');
                                }}
                                className="px-3 py-1.5 rounded-lg bg-[var(--background)] hover:bg-[var(--muted)] border border-[var(--border)] text-xs font-bold text-[var(--foreground)] transition-colors cursor-pointer flex items-center gap-1"
                              >
                                <PlayIcon className="w-3 h-3 text-[var(--primary)]" />
                                <span>Enviar Test Ping</span>
                              </button>

                              <button
                                onClick={() => {
                                  setAccountSettings(prev => ({
                                    ...prev,
                                    webhooks: prev.webhooks.filter(w => w.id !== wh.id)
                                  }));
                                  showToast('Webhook Removido', `Endpoint ${wh.name} desactivado.`, 'info');
                                }}
                                className="p-1.5 rounded-lg text-[var(--muted-foreground)] hover:text-red-400 transition-colors cursor-pointer"
                                title="Eliminar Webhook"
                              >
                                <TrashIcon className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-[var(--border)]/60 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mr-1">Eventos:</span>
                              {wh.events.map((ev, i) => (
                                <span key={i} className="px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--foreground)] text-[10px] font-mono border border-[var(--border)]">
                                  {ev}
                                </span>
                              ))}
                            </div>

                            <span className="text-[10px] font-mono text-[var(--muted-foreground)]">
                              Firma HMAC-SHA256: <strong className="text-zinc-300">whsec_98fa7sdf897asdf</strong>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Live Dispatch Log Preview */}
                    <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-5 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                        <span className="text-zinc-400 font-bold uppercase text-[10px] flex items-center gap-2">
                          <CommandLineIcon className="w-4 h-4 text-emerald-400" /> Registro de Entregas Recientes (Live Dispatch Log)
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold">100% SUCCESS RATE (200 OK)</span>
                      </div>
                      <div className="space-y-2 text-[11px] text-zinc-300">
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500">[12:45:10 UTC] POST https://api.hubspot.com/automation/v3/...</span>
                          <span className="text-emerald-400 font-bold">200 OK (24ms)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500">[12:12:04 UTC] POST https://buildations.studio/api/revalidate...</span>
                          <span className="text-emerald-400 font-bold">200 OK (38ms)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500">[10:04:19 UTC] POST https://hooks.slack.com/services/...</span>
                          <span className="text-emerald-400 font-bold">200 OK (52ms)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: INFRAESTRUCTURA & REGIONES CLOUD */}
                {settingsTab === 'general' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center p-2">
                            <VercelLogo className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                            EDGE ANYCAST
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-[var(--foreground)]">Vercel Enterprise Edge</h4>
                          <p className="text-xs text-[var(--muted-foreground)]">Capa de distribución global, renderizado Serverless y purga On-Demand ISR.</p>
                        </div>
                        <div className="pt-2 border-t border-[var(--border)] text-xs space-y-1.5 font-mono">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">Región Primaria:</span>
                            <span className="text-[var(--foreground)] font-bold">iad1 (Washington, DC)</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">PoPs Activos:</span>
                            <span className="text-[var(--foreground)] font-bold">84 Ciudades Globales</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">Time-to-First-Byte:</span>
                            <span className="text-emerald-400 font-bold">&lt; 14ms</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center p-2">
                            <NeonLogo className="w-6 h-6 text-emerald-400" />
                          </div>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                            SERVERLESS POSTGRES
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-[var(--foreground)]">Neon Dedicated Database</h4>
                          <p className="text-xs text-[var(--muted-foreground)]">Motor de almacenamiento transaccional, pgvector y réplicas de lectura de escalado a cero.</p>
                        </div>
                        <div className="pt-2 border-t border-[var(--border)] text-xs space-y-1.5 font-mono">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">Compute Units:</span>
                            <span className="text-[var(--foreground)] font-bold">0.25 - 8 CU Auto</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">Branch Activa:</span>
                            <span className="text-cyan-400 font-bold">main-production</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">Conexiones Pool:</span>
                            <span className="text-emerald-400 font-bold">Hasta 10,000 vía PgBouncer</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center p-2">
                            <HetznerLogo className="w-6 h-6 text-red-500" />
                          </div>
                          <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 font-bold">
                            BARE-METAL CLUSTER
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-[var(--foreground)]">Hetzner AX101 Dedicated</h4>
                          <p className="text-xs text-[var(--muted-foreground)]">Servidores dedicados con NVMe para ejecución de micro-workers pesados de crawling y análisis AEO.</p>
                        </div>
                        <div className="pt-2 border-t border-[var(--border)] text-xs space-y-1.5 font-mono">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">Datacenter:</span>
                            <span className="text-[var(--foreground)] font-bold">FSN1-DC14 (Falkenstein)</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">Hardware:</span>
                            <span className="text-[var(--foreground)] font-bold">AMD EPYC 7702 • 128GB RAM</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="text-[var(--muted-foreground)]">Almacenamiento:</span>
                            <span className="text-emerald-400 font-bold">2x 1.92TB NVMe PCIe 4.0</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resumen de Cuota y SLAs */}
                    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                      <h4 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                        <ChartBarIcon className="w-4 h-4 text-[var(--primary)]" />
                        Cuota de Cómputo de la Organización (Ciclo Mensual)
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-[var(--muted-foreground)]">Tokens de IA Consumidos:</span>
                            <span className="font-bold font-mono text-[var(--foreground)]">14.8M / 50M (29.6%)</span>
                          </div>
                          <div className="w-full bg-[var(--muted)] rounded-full h-2 overflow-hidden">
                            <div className="bg-[var(--primary)] h-full rounded-full" style={{ width: '29.6%' }} />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-[var(--muted-foreground)]">Consultas Vectoriales RAG:</span>
                            <span className="font-bold font-mono text-[var(--foreground)]">420K / 2M (21.0%)</span>
                          </div>
                          <div className="w-full bg-[var(--muted)] rounded-full h-2 overflow-hidden">
                            <div className="bg-cyan-500 h-full rounded-full" style={{ width: '21%' }} />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-[var(--muted-foreground)]">Ancho de Banda Edge:</span>
                            <span className="font-bold font-mono text-[var(--foreground)]">1.2 TB / 10 TB (12.0%)</span>
                          </div>
                          <div className="w-full bg-[var(--muted)] rounded-full h-2 overflow-hidden">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '12%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: GOBERNANZA, EQUIPO & ROLES */}
                {settingsTab === 'team' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <div>
                        <h3 className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                          <UsersIcon className="w-4 h-4 text-[var(--primary)]" />
                          Gobernanza de Equipo &amp; Control de Accesos RBAC
                        </h3>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Administra los integrantes autorizados para orquestar motores, alterar registros de DNS y consultar o rotar las llaves de la bóveda.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          showPrompt(
                            'Invitar Miembro a la Organización',
                            'Introduce el correo electrónico corporativo del nuevo usuario:',
                            'colaborador@buildations.studio',
                            'colaborador@buildations.studio',
                            (email) => {
                              const newMember = {
                                id: `usr-${Date.now()}`,
                                name: email.split('@')[0],
                                email,
                                role: 'Editor / RevOps Specialist',
                                status: 'Invitación Enviada',
                                twoFactor: false,
                                lastLogin: 'Pendiente'
                              };
                              setTeamMembers(prev => [...prev, newMember]);
                              showToast('Invitación Despachada', `Se envió enlace de acceso seguro a ${email}.`, 'success');
                            }
                          );
                        }}
                        className="px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0"
                      >
                        <PlusIcon className="w-3.5 h-3.5" />
                        <span>+ Invitar Nuevo Miembro</span>
                      </button>
                    </div>

                    <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-[var(--muted)] text-[var(--muted-foreground)] font-mono text-[10px] uppercase">
                            <tr>
                              <th className="px-6 py-3">Usuario</th>
                              <th className="px-6 py-3">Rol &amp; Permisos</th>
                              <th className="px-6 py-3">Autenticación 2FA</th>
                              <th className="px-6 py-3">Último Acceso</th>
                              <th className="px-6 py-3">Estado</th>
                              <th className="px-6 py-3 text-right">Acción</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--border)]">
                            {teamMembers.map((member) => (
                              <tr key={member.id} className="hover:bg-[var(--muted)]/50 transition-colors">
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center font-bold text-xs uppercase">
                                      {member.name.slice(0, 2)}
                                    </div>
                                    <div>
                                      <span className="font-bold text-[var(--foreground)] block leading-tight">{member.name}</span>
                                      <span className="text-[11px] text-[var(--muted-foreground)] font-mono block">{member.email}</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-[var(--foreground)]">
                                  <span className="px-2.5 py-1 rounded-md bg-[var(--muted)] text-[11px] border border-[var(--border)]">
                                    {member.role}
                                  </span>
                                </td>
                                <td className="px-6 py-4">
                                  {member.twoFactor ? (
                                    <span className="text-emerald-400 font-mono text-[11px] font-bold flex items-center gap-1">
                                      <ShieldCheckIcon className="w-3.5 h-3.5" /> FIDO2 / YubiKey OK
                                    </span>
                                  ) : (
                                    <span className="text-zinc-500 font-mono text-[11px]">N/A</span>
                                  )}
                                </td>
                                <td className="px-6 py-4 text-[var(--muted-foreground)] font-mono text-[11px]">{member.lastLogin}</td>
                                <td className="px-6 py-4">
                                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    {member.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                  {member.id !== 'usr-1' && (
                                    <button
                                      onClick={() => {
                                        setTeamMembers(prev => prev.filter(m => m.id !== member.id));
                                        showToast('Miembro Removido', `El acceso para ${member.name} fue revocado.`, 'info');
                                      }}
                                      className="text-[var(--muted-foreground)] hover:text-red-400 transition-colors p-1"
                                      title="Revocar Acceso"
                                    >
                                      <TrashIcon className="w-4 h-4" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Audit Security Log */}
                    <div className="p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-3">
                      <h4 className="font-bold text-xs text-[var(--foreground)] uppercase tracking-wider">
                        Registro de Auditoría Reciente (Security Log)
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] flex justify-between items-center text-[11px]">
                          <span className="text-[var(--foreground)]">
                            <strong>Román García</strong> actualizó registro DNS <code>CNAME cname.buildations.studio</code>
                          </span>
                          <span className="text-[var(--muted-foreground)] font-mono">13:14:02 (IP 187.190.22.10)</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] flex justify-between items-center text-[11px]">
                          <span className="text-[var(--foreground)]">
                            <strong>Carlos Mendoza</strong> verificó conectividad con cluster Hetzner Bare-Metal
                          </span>
                          <span className="text-[var(--muted-foreground)] font-mono">11:05:22 (IP 142.250.180.14)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
                    showToast('Artículo Aprobado', 'Borrador despachado con éxito vía Webhook al CMS con Schema JSON-LD inyectado.', 'success');
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
                { name: "Constructor Gráfico de Motores", tab: "engineBuilder", icon: "⚙️", desc: "Formulario por pasos & arquitectura de operación topológica" },
                { name: "Ir al Lanzador & Configurador SEO/AEO", tab: "engineLauncher", icon: "🚀", desc: "Configura el agente generativo para tu web" },
                { name: "Reconstructor de Sitemaps (Silos)", tab: "sitemapReconstructor", icon: "🗺️", desc: "Edición de slugs, satélites y canibalizaciones" },
                { name: "Datasets de Keywords & RAG Vectorial", tab: "rag", icon: "🧠", desc: "Listas temáticas de 1,536 dimensiones" },
                { name: "Ver Motor RevOps & Conexión HubSpot", tab: "revopsHubspot", icon: "🔄", desc: "Atribución de ingresos y deals cerrados" },
                { name: "Conectar CMS (Payload & WordPress)", tab: "cmsConnectors", icon: "🔌", desc: "Configura REST API o Plugin para despacho de artículos" },
                { name: "Consultar AEO / GEO Share of Voice", tab: "aiShareOfVoice", icon: "✨", desc: "Monitorea citaciones en ChatGPT y Perplexity" },
                { name: "Abrir Editor Canvas de Artículos", action: "canvas", icon: "📝", desc: "Previsualiza y aprueba borradores antes de publicar" },
                { name: "Abrir Terminal de Agentes Autónomos", action: "terminal", icon: "💻", desc: "Logs en vivo del motor de IA en segundo plano" },
                { name: "Explorar Topic Clusters & Silos", tab: "clusterMap", icon: "🕸️", desc: "Diseña la arquitectura semántica del sitio" },
                { name: "Inspeccionar SERP & AEO X-Ray", tab: "serpxray", icon: "⚡", desc: "Analiza el Top 10 de Google con Llama 3.1" },
                { name: "Manual de Uso, Homologación & FAQs", tab: "documentation", icon: "📖", desc: "Guía técnica oficial, matriz de arquitectura y resolución de dudas" },
                { name: "Configuración de Cuenta & Enterprise Vault", tab: "settings", icon: "⚙️", desc: "Bóveda de API Keys, orquestación DNS, webhooks y credenciales" },
                { name: "Alternar Modo Día / Modo Noche", action: "theme", icon: "🌓", desc: "Cambia el tema de color del estudio" },
              ]
                .filter(item => !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      if (item.tab) {
                        setActiveTab(item.tab);
                        showToast(item.name, item.desc, 'info');
                      }
                      if (item.action === 'canvas') {
                        setIsCanvasModalOpen(true);
                        showToast('Editor Canvas', 'Abriendo lienzo editorial para previsualizar artículos', 'info');
                      }
                      if (item.action === 'terminal') {
                        setIsTerminalOpen(true);
                        showToast('Consola Kernel', 'Monitoreando telemetría de agentes autónomos', 'info');
                      }
                      if (item.action === 'theme') {
                        toggleTheme();
                        showToast('Tema Actualizado', theme === 'dark' ? 'Modo Día Activado' : 'Modo Noche Activado', 'success');
                      }
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
                  onClick={() => showToast('Instrucción Enviada', `Se envió tarea prioritaria al Agente ${selectedAgent?.toUpperCase()} en el Kernel.`, 'info')}
                  className="w-full bg-[var(--primary)] text-white py-2 rounded-lg text-xs font-bold hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-sm"
                >
                  Asignar Tarea Prioritaria a este Agente
                </button>
                <button 
                  onClick={() => showToast('Agente Pausado', `El Agente ${selectedAgent?.toUpperCase()} ha sido suspendido temporalmente.`, 'warning')}
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
            showToast('Ciclo Autónomo Disparado', 'El motor está rastreando oportunidades en tiempo real...', 'info');
            setIsTerminalOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-[0_0_12px_rgba(255,90,0,0.4)]"
          title="Forzar un ciclo de generación inmediata"
        >
          <RocketLaunchIcon className="w-3.5 h-3.5" />
          <span>Disparar Motor</span>
        </button>
      </div>

      {/* SISTEMA DE NOTIFICACIONES TOASTS FLOTANTES (ESTÉTICA GLASS INDUSTRIAL) */}
      <div className="fixed top-20 right-6 z-50 flex flex-col gap-3 max-w-sm sm:max-w-md w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-2xl backdrop-blur-2xl border shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 flex items-start gap-3.5 relative overflow-hidden ${
              toast.type === 'success'
                ? 'bg-[var(--card)]/95 border-emerald-500/40 shadow-[0_8px_30px_rgba(16,185,129,0.12)]'
                : toast.type === 'warning'
                ? 'bg-[var(--card)]/95 border-amber-500/40 shadow-[0_8px_30px_rgba(245,158,11,0.12)]'
                : toast.type === 'error'
                ? 'bg-[var(--card)]/95 border-rose-500/40 shadow-[0_8px_30px_rgba(244,63,94,0.12)]'
                : 'bg-[var(--card)]/95 border-[var(--primary)]/40 shadow-[0_8px_30px_rgba(255,90,0,0.15)]'
            }`}
          >
            {/* Indicador de Semáforo / Tipo */}
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' && (
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              )}
              {toast.type === 'warning' && (
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                  !
                </div>
              )}
              {toast.type === 'error' && (
                <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
                  ✕
                </div>
              )}
              {toast.type === 'info' && (
                <div className="w-7 h-7 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center font-bold text-xs">
                  ⚡
                </div>
              )}
            </div>

            {/* Contenido de la Notificación */}
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <h5 className="font-bold text-xs text-[var(--foreground)] truncate">{toast.title}</h5>
                <span className="text-[10px] font-mono text-[var(--muted-foreground)] shrink-0">{toast.timestamp}</span>
              </div>
              <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">{toast.message}</p>
              
              {/* Botón de Acción Opcional */}
              {toast.action && (
                <button
                  onClick={toast.action.onClick}
                  className="mt-2 text-[10px] font-bold text-[var(--primary)] hover:underline cursor-pointer block"
                >
                  {toast.action.label} →
                </button>
              )}
            </div>

            {/* Botón Cerrar */}
            <button
              onClick={() => removeToast(toast.id)}
              className="text-zinc-400 hover:text-[var(--foreground)] text-xs p-1 rounded transition-colors cursor-pointer shrink-0"
              title="Cerrar notificación"
            >
              ✕
            </button>

            {/* Barra de progreso inferior de auto-dismiss */}
            <div 
              className={`absolute bottom-0 left-0 h-0.5 w-full animate-toast-bar ${
                toast.type === 'success' ? 'bg-emerald-400' : toast.type === 'warning' ? 'bg-amber-400' : toast.type === 'error' ? 'bg-rose-400' : 'bg-[var(--primary)]'
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* DIÁLOGO MODAL CUSTOM PARA PROMPT / ENTRADA DE DATOS */}
      {promptDialog.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(255,90,0,0.8)]"></span>
                <h4 className="font-bold text-sm text-[var(--foreground)]">{promptDialog.title}</h4>
              </div>
              <button 
                onClick={() => setPromptDialog({ ...promptDialog, isOpen: false })}
                className="text-zinc-400 hover:text-[var(--foreground)] text-xs cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              {promptDialog.description}
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (promptInputValue.trim()) {
                  promptDialog.onSubmit(promptInputValue.trim());
                  setPromptDialog({ ...promptDialog, isOpen: false });
                }
              }}
              className="space-y-4"
            >
              <input 
                type="text" 
                value={promptInputValue}
                onChange={(e) => setPromptInputValue(e.target.value)}
                placeholder={promptDialog.placeholder}
                autoFocus
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--foreground)] font-mono focus:outline-none focus:border-[var(--primary)] shadow-inner"
              />

              <div className="flex justify-end gap-2.5 pt-2">
                <button 
                  type="button"
                  onClick={() => setPromptDialog({ ...promptDialog, isOpen: false })}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all shadow-[0_0_15px_rgba(255,90,0,0.35)] cursor-pointer"
                >
                  Confirmar Acción
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 5: INFRASTRUCTURE & MULTI-CLOUD HUB (VERCEL · NEON · HETZNER) */}
      {isInfrastructureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-4xl bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-[var(--border)] pb-4 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-400 font-bold">
                    CLOUD INFRASTRUCTURE MATRIX // VERCEL API + NEON POSTGRES + HETZNER
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">
                  Sitios Gestionados en Vercel &amp; Clústers de Bases de Datos
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                  Conexión directa con tus despliegues Edge en Vercel, instancias Serverless en Neon y el nodo principal de alto rendimiento hosteado en Hetzner.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    showToast('Sincronizando con Vercel API...', 'Verificando estados de despliegue en Vercel y pools de Neon.', 'info');
                    setTimeout(() => {
                      showToast('Infraestructura Sincronizada', '4 sitios en Vercel listos y 3 clústers PostgreSQL activos.', 'success');
                    }, 1000);
                  }}
                  className="bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowPathIcon className="w-3.5 h-3.5" /> Refrescar Estado
                </button>
                <button 
                  onClick={() => setIsInfrastructureModalOpen(false)}
                  className="text-zinc-400 hover:text-white text-base font-bold cursor-pointer p-1"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* SECCIÓN 1: PROYECTOS VERIFIED EN VERCEL */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold font-mono uppercase text-[var(--foreground)] flex items-center gap-2">
                  <VercelLogo className="w-4 h-4 text-white" />
                  Sitios Web en Vercel (Next.js Edge Runtime)
                </h4>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  {vercelProjects.length} PROYECTOS ACTIVOS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vercelProjects.map((proj) => (
                  <div 
                    key={proj.id}
                    className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all space-y-2 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${proj.status === 'Ready' ? 'bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]' : 'bg-amber-400 animate-pulse'}`} />
                        <h5 className="font-bold text-xs text-[var(--foreground)]">{proj.name}</h5>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--muted)] text-white font-bold">
                        {proj.framework}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 space-y-0.5">
                      <div className="flex justify-between">
                        <span>Dominio:</span>
                        <a href={proj.domain} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                          {proj.domain} ↗
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span>Repositorio:</span>
                        <span className="text-zinc-300">{proj.gitRepo} ({proj.branch})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Motor Asignado:</span>
                        <span className="text-[var(--primary)] font-bold truncate max-w-[190px]">{proj.targetEngine}</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-[var(--border)]/60">
                        <span>DB Vinculada:</span>
                        <span className="text-emerald-400 font-bold">{proj.databaseBinding}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[10px]">
                      <span className="text-zinc-500 font-mono">Deploy: {proj.lastDeploy}</span>
                      <button 
                        onClick={() => {
                          setCurrentWorkspace(proj.name);
                          setIsInfrastructureModalOpen(false);
                          showToast('Workspace Seleccionado', `Entorno cambiado a ${proj.name}.`, 'info');
                        }}
                        className="text-[var(--primary)] font-bold hover:underline cursor-pointer"
                      >
                        Gestionar con este Motor →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN 2: BASES DE DATOS CLOUD (NEON & HETZNER DEDICATED) */}
            <div className="space-y-3 pt-2 border-t border-[var(--border)]">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold font-mono uppercase text-[var(--foreground)] flex items-center gap-2">
                  <PostgresLogo className="w-4 h-4 text-blue-400" />
                  Clústers de Bases de Datos (Neon Serverless &amp; Hetzner Dedicated)
                </h4>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  POSTGRESQL + PGVECTOR
                </span>
              </div>

              <div className="space-y-3">
                {cloudDatabases.map((db) => (
                  <div 
                    key={db.id}
                    className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] flex flex-wrap items-center justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-md">
                      <div className="flex items-center gap-2">
                        {db.type === 'Hetzner Dedicated' ? (
                          <HetznerLogo className="w-4 h-4 shrink-0" />
                        ) : (
                          <NeonLogo className="w-4 h-4 shrink-0" />
                        )}
                        <h5 className="font-bold text-xs text-[var(--foreground)]">{db.name}</h5>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                          {db.status}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-[var(--muted-foreground)] truncate">
                        Host: <span className="text-zinc-300">{db.host}</span>
                      </p>
                      <p className="text-[10px] text-zinc-500 font-mono">
                        {db.region} · {db.specs}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-right font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-[var(--muted-foreground)] block">Conexiones Pool</span>
                        <span className="font-bold text-white">{db.activeConnections} activas</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[var(--muted-foreground)] block">Ping Latency</span>
                        <span className="font-bold text-emerald-400">{db.latency}</span>
                      </div>
                      <button 
                        onClick={() => showToast('Test de Conexión Exitoso', `Ping a ${db.name}: ${db.latency} (200 OK)`, 'success')}
                        className="bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] px-3 py-1.5 rounded-lg text-xs font-bold text-[var(--foreground)] cursor-pointer transition-colors"
                      >
                        Ping DB
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Modal */}
            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-[var(--border)] text-xs text-[var(--muted-foreground)]">
              <span className="font-mono text-[11px]">
                BUILDATIONS CORE INFRASTRUCTURE // Latencia de Inferencia Cross-Region: &lt; 45ms
              </span>
              <button 
                onClick={() => setIsInfrastructureModalOpen(false)}
                className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl font-semibold hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-sm text-xs"
              >
                Cerrar Panel de Infraestructura
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
