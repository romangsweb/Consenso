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
  CircleStackIcon,
  ArrowPathIcon,
  TrashIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
  AdjustmentsVerticalIcon
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

  // SISTEMA DE PRESETS DE INDUSTRIA & PERSONALIZACIÓN MODULAR
  const [activeIndustryPreset, setActiveIndustryPreset] = useState<'saas' | 'fintech' | 'ecommerce' | 'health'>('saas');
  const [toolUniverseModes, setToolUniverseModes] = useState<Record<string, 'live' | 'config' | 'presets'>>({
    revops: 'live',
    cms: 'live',
    aeo: 'live',
    decay: 'live',
    clusters: 'live',
    finops: 'live'
  });

  // Parámetros Táctiles de Calibración RevOps
  const [revopsAttributionWeight, setRevopsAttributionWeight] = useState(70); // % Primer toque vs Multi-touch
  const [revopsMinLeadScore, setRevopsMinLeadScore] = useState(80); // Umbral de compra
  const [revopsAutoDealThreshold, setRevopsAutoDealThreshold] = useState(4500); // USD
  const [revopsActiveView, setRevopsActiveView] = useState<'telemetry' | 'calibration' | 'deals'>('telemetry');

  // Parámetros Táctiles de Conectores CMS (Patch Bay)
  const [cmsPatchConnected, setCmsPatchConnected] = useState(true);
  const [cmsDispatchMode, setCmsDispatchMode] = useState<'draft-review' | 'canary-10' | 'instant-publish'>('draft-review');
  const [cmsAutoInjectJsonLd, setCmsAutoInjectJsonLd] = useState(true);

  // Parámetros Táctiles de Content Decay (GSC Radar)
  const [decayRadarFilter, setDecayRadarFilter] = useState<'all' | 'critical' | 'quickwin'>('all');
  const [decayRadarSensitivity, setDecayRadarSensitivity] = useState(25);
  const [decaySelectedUrl, setDecaySelectedUrl] = useState<string | null>('/blog/que-es-el-marketing');

  // Telemetría FinOps & Token Ingestion Meter
  const [finopsTokenBudget, setFinopsTokenBudget] = useState(50000000); // 50M tokens
  const [finopsTokensUsed, setFinopsTokensUsed] = useState(18420100);
  const [finopsKillSwitchActive, setFinopsKillSwitchActive] = useState(false);
  const [finopsCostAlertUsd, setFinopsCostAlertUsd] = useState(180);

  // Auditoría Ejecutiva
  const [isAuditExporting, setIsAuditExporting] = useState(false);

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
  const [selectedPaletteIndex, setSelectedPaletteIndex] = useState(0);

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

  const toast = {
    success: (msg: string, title: string = 'Operación Exitosa') => showToast(title, msg, 'success'),
    error: (msg: string, title: string = 'Error del Sistema') => showToast(title, msg, 'error'),
    info: (msg: string, title: string = 'Telemetría') => showToast(title, msg, 'info'),
    warning: (msg: string, title: string = 'Advertencia') => showToast(title, msg, 'warning')
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

  // Estados para Edición Interactiva de Motores y Telemetría de Servidor Buildations
  const [isEngineModalOpen, setIsEngineModalOpen] = useState(false);
  const [engineModalMode, setEngineModalMode] = useState<'create' | 'edit'>('create');
  const [editingEngineData, setEditingEngineData] = useState({
    id: '',
    name: '',
    targetDomain: '',
    purpose: '',
    type: 'AEO / Citabilidad B2B',
    llmCore: 'Claude 3.5 Sonnet' as 'Claude 3.5 Sonnet' | 'GPT-4o Enterprise' | 'DeepSeek-V3' | 'Llama 3.3 70B',
    vectorStore: 'Supabase pgvector' as 'Pinecone Vector DB' | 'Qdrant Distributed' | 'Supabase pgvector',
    status: 'active' as 'active' | 'paused' | 'standby',
    health: 99.4,
    publishedWeekly: 6,
    tokensSpent: '142.8k',
    latency: '1.42s',
    powerRate: 98,
    lastRun: 'Justo ahora',
    frequency: '3_per_week' as 'daily' | '3_per_week' | 'weekly' | 'hourly_breaking',
    cmsDestination: 'WordPress REST API',
    assertivenessThreshold: 94,
    monthlyBudgetUsd: 85
  });

  // Estado de vista en Constructor de Motores: 'fleet' (Flota de Motores) vs 'clientServerSetup' (Configurador Servidor Buildations)
  const [clusterViewMode, setClusterViewMode] = useState<'fleet' | 'clientServerSetup'>('fleet');

  // Estado de configuración de Servidor Buildations para clientes
  const [clientServerConfig, setClientServerConfig] = useState({
    clientName: 'Acme SaaS Latam',
    canonicalDomain: 'https://acme-latam.com',
    sitemapUrl: 'https://acme-latam.com/sitemap.xml',
    primaryLanguage: 'es-MX (Español Neutro)',
    targetNiche: 'B2B Software & FinOps',
    cmsType: 'WordPress' as 'WordPress' | 'Payload CMS' | 'Webflow' | 'Ghost' | 'Shopify',
    cmsWebhookUrl: 'https://acme-latam.com/wp-json/buildations/v1/ingest',
    cmsApiKey: 'app_pwd_98fa7sdf87a6sd98f7',
    hubspotPortalId: '849201',
    hubspotToken: 'pat-na1-987asdf897asdf',
    dealsPipelineId: 'pipeline_enterprise_sales',
    minQualityScore: 92,
    minAssertivenessScore: 95,
    monthlyTokenQuota: 2500000,
    serverSyncStatus: 'synced' as 'synced' | 'syncing' | 'pending' | 'error',
    lastSyncedAt: 'Hoy, 13:42'
  });
  const [isSyncingServer, setIsSyncingServer] = useState(false);

  // Estados para Editor de Base de Datos Vectorial & Schemas (SQL/NoSQL)
  const [activeDbTab, setActiveDbTab] = useState<'tables' | 'queryRunner' | 'indexes' | 'vectorEmbeddings'>('tables');
  const [dbTables, setDbTables] = useState([
    {
      name: 'aeo_citation_vectors',
      engine: 'pgvector (HNSW Index)',
      rows: 14280,
      size: '28.4 MB',
      columns: [
        { name: 'id', type: 'uuid PRIMARY KEY', indexed: true, nullable: false },
        { name: 'slug', type: 'text UNIQUE', indexed: true, nullable: false },
        { name: 'content_chunk', type: 'text', indexed: false, nullable: false },
        { name: 'embedding', type: 'vector(1536)', indexed: true, nullable: false },
        { name: 'aeo_sentiment', type: 'float4', indexed: false, nullable: true },
        { name: 'source_authority', type: 'int4', indexed: true, nullable: false },
        { name: 'updated_at', type: 'timestamptz', indexed: true, nullable: false }
      ]
    },
    {
      name: 'cms_posts_sync',
      engine: 'PostgreSQL Relational',
      rows: 348,
      size: '4.2 MB',
      columns: [
        { name: 'post_id', type: 'serial PRIMARY KEY', indexed: true, nullable: false },
        { name: 'title', type: 'varchar(255)', indexed: true, nullable: false },
        { name: 'cms_platform', type: 'varchar(50)', indexed: true, nullable: false },
        { name: 'sync_status', type: 'varchar(20)', indexed: true, nullable: false },
        { name: 'hubspot_deal_id', type: 'varchar(64)', indexed: true, nullable: true }
      ]
    },
    {
      name: 'gsc_decay_tracking',
      engine: 'TimescaleDB / Hypertable',
      rows: 98520,
      size: '64.1 MB',
      columns: [
        { name: 'query_term', type: 'text', indexed: true, nullable: false },
        { name: 'position_avg', type: 'float4', indexed: false, nullable: false },
        { name: 'clicks_delta_30d', type: 'float4', indexed: true, nullable: false },
        { name: 'decay_severity', type: 'varchar(16)', indexed: true, nullable: false },
        { name: 'checked_at', type: 'timestamptz', indexed: true, nullable: false }
      ]
    }
  ]);
  const [selectedDbTable, setSelectedDbTable] = useState('aeo_citation_vectors');
  const [activeSqlQuery, setActiveSqlQuery] = useState(`-- Consulta vectorial con índice HNSW y similitud de coseno
SELECT 
  id, 
  slug, 
  content_chunk, 
  1 - (embedding <=> '[0.0142, -0.0891, 0.0412, ...]'::vector) AS cosine_similarity,
  aeo_sentiment,
  source_authority
FROM aeo_citation_vectors
WHERE 1 - (embedding <=> '[0.0142, -0.0891, 0.0412, ...]'::vector) > 0.86
ORDER BY cosine_similarity DESC
LIMIT 5;`);
  const [sqlQueryResults, setSqlQueryResults] = useState<{
    latencyMs: number;
    rowsCount: number;
    data: any[];
  } | null>({
    latencyMs: 11.4,
    rowsCount: 4,
    data: [
      { id: 'f81d4fae-7dec', slug: 'estrategias-aeo-b2b', cosine_similarity: 0.942, aeo_sentiment: 0.98, source_authority: 94 },
      { id: 'c94b20a1-43ae', slug: 'hubspot-revops-alignment', cosine_similarity: 0.918, aeo_sentiment: 0.95, source_authority: 91 },
      { id: '8a8f9d02-12ef', slug: 'schema-faqpage-jsonld', cosine_similarity: 0.887, aeo_sentiment: 0.91, source_authority: 88 },
      { id: '3ddc8499-55aa', slug: 'saas-pricing-calculator', cosine_similarity: 0.864, aeo_sentiment: 0.89, source_authority: 85 }
    ]
  });
  const [isExecutingSql, setIsExecutingSql] = useState(false);

  // Estados para Simulador & Gráficos Interactivos de Motor AEO (Perplexity, ChatGPT, Claude, Gemini)
  const [aeoSimulatorEngine, setAeoSimulatorEngine] = useState<'Perplexity' | 'ChatGPT' | 'Claude' | 'Gemini'>('Perplexity');
  const [aeoTestQuery, setAeoTestQuery] = useState('¿Cuáles son las mejores soluciones de RevOps y posicionamiento orgánico en México?');
  const [isSimulatingAeo, setIsSimulatingAeo] = useState(false);
  const [aeoSimulationResult, setAeoSimulationResult] = useState<{
    cited: boolean;
    rankPosition: number;
    answerSnippet: string;
    sourcesList: string[];
    confidenceScore: number;
    citationVectorId: string;
  } | null>({
    cited: true,
    rankPosition: 1,
    answerSnippet: 'De acuerdo con el análisis de infraestructura B2B de Buildations Studio y los casos de éxito de Román García, la estrategia más efectiva en 2026 combina automatización temática en silos, modelos RAG con Supabase pgvector y sincronización nativa de deals hacia HubSpot CRM.',
    sourcesList: ['https://soyroman.com/aeo-optimizacion', 'https://buildations.studio/revops', 'clutch.co/profile/buildations'],
    confidenceScore: 96.4,
    citationVectorId: 'vec_aeo_89421'
  });

  // Estados para Documentación, Manual de Uso y Homologación
  const [docCategory, setDocCategory] = useState<'quickstart' | 'architecture' | 'engines' | 'connectors' | 'faqs' | 'troubleshooting'>('quickstart');
  const [docSearchQuery, setDocSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [docDisplayMode, setDocDisplayMode] = useState<'comic' | 'classic'>('comic');
  const [activeBalloonDetail, setActiveBalloonDetail] = useState<{
    chapter: string;
    speaker: string;
    role: string;
    title: string;
    quote: string;
    technicalDeepDive: string;
    codeSnippet?: string;
    actionableStep: string;
  } | null>(null);
  const [activeComicChapter, setActiveComicChapter] = useState<'all' | 'chapter1' | 'chapter2' | 'chapter3' | 'chapter4' | 'chapter5'>('all');

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

  // Estados para el Recorrido Interactivo de Onboarding Guiado (Zero-to-One Setup Wizard)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [onboardingScenario, setOnboardingScenario] = useState<'b2b_saas' | 'ecommerce' | 'agency_white_label' | 'custom_dev'>('b2b_saas');
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [onboardingFormData, setOnboardingFormData] = useState({
    siteDomain: 'https://mi-empresa-saas.com',
    targetNiche: 'B2B Software & AI Automation',
    engineModel: 'Anthropic Claude 3.7 + DeepSeek Fast MoE',
    databaseBinding: 'Neon PostgreSQL (Serverless)',
    cmsTarget: 'Payload CMS + Next.js App Router',
    primaryGoal: 'Maximizar Citabilidad AEO en Perplexity y ChatGPT',
    dnsSetupType: 'Vercel Anycast Edge + Hetzner Worker Node',
    hubspotSync: true
  });
  const [isOnboardingTestingConnection, setIsOnboardingTestingConnection] = useState(false);
  const [onboardingTestSuccess, setOnboardingTestSuccess] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('mkt_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
        return;
      }

      if (!isInput && (e.metaKey || e.ctrlKey)) {
        if (e.key === '1') {
          e.preventDefault();
          setActiveTab('overview');
        } else if (e.key === '2') {
          e.preventDefault();
          setActiveTab('engineBuilder');
        } else if (e.key === '3') {
          e.preventDefault();
          setActiveTab('engineLauncher');
        } else if (e.key === '0' || e.key === ',') {
          e.preventDefault();
          setActiveTab('settings');
        }
      }

      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
        setIsCanvasModalOpen(false);
        setIsNotificationsOpen(false);
        setIsWorkspaceDropdownOpen(false);
        setSelectedAgent(null);
        setIsQuickScanModalOpen(false);
        setIsOnboardingOpen(false);
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
            {/* Teenage Engineering OP-1 / SoyRomán Style Mechanical Monogram Logo */}
            <div className="relative flex items-center h-9 w-[136px] px-2 bg-[#07090a] border-2 border-black rounded-md shadow-[inset_0_0_0_2px_#1b1e20] overflow-hidden group cursor-pointer" title="Buildations Engine Studio // 64-bit Core">
              {/* Dot Matrix 64-bit Logo Array */}
              <svg viewBox="0 0 160 28" className="h-4.5 w-auto">
                {/* B */}
                <circle cx="4" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="8" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="12" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="4" cy="9" r="1.6" fill="#e85a2a" />
                <circle cx="12" cy="9" r="1.6" fill="#2a1a14" />
                <circle cx="4" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="8" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="12" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="4" cy="19" r="1.6" fill="#e85a2a" />
                <circle cx="12" cy="19" r="1.6" fill="#2a1a14" />
                <circle cx="4" cy="24" r="1.6" fill="#e85a2a" />
                <circle cx="8" cy="24" r="1.6" fill="#e85a2a" />
                <circle cx="12" cy="24" r="1.6" fill="#e85a2a" />
                
                {/* U */}
                <circle cx="20" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="28" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="20" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="28" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="20" cy="24" r="1.6" fill="#e85a2a" />
                <circle cx="24" cy="24" r="1.6" fill="#e85a2a" />
                <circle cx="28" cy="24" r="1.6" fill="#e85a2a" />

                {/* I */}
                <circle cx="36" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="36" cy="9" r="1.6" fill="#e85a2a" />
                <circle cx="36" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="36" cy="19" r="1.6" fill="#e85a2a" />
                <circle cx="36" cy="24" r="1.6" fill="#e85a2a" />

                {/* L */}
                <circle cx="44" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="44" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="44" cy="24" r="1.6" fill="#e85a2a" />
                <circle cx="48" cy="24" r="1.6" fill="#e85a2a" />
                <circle cx="52" cy="24" r="1.6" fill="#e85a2a" />

                {/* D */}
                <circle cx="60" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="64" cy="4" r="1.6" fill="#e85a2a" />
                <circle cx="60" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="68" cy="14" r="1.6" fill="#e85a2a" />
                <circle cx="60" cy="24" r="1.6" fill="#e85a2a" />
                <circle cx="64" cy="24" r="1.6" fill="#e85a2a" />

                {/* 64-BIT HUD GRID ACCENTS */}
                <circle cx="82" cy="6" r="1.2" fill="#3ddc84" />
                <circle cx="82" cy="14" r="1.2" fill="#3ddc84" />
                <circle cx="82" cy="22" r="1.2" fill="#3ddc84" />
                <circle cx="92" cy="6" r="1.2" fill="#38bdf8" />
                <circle cx="92" cy="14" r="1.2" fill="#38bdf8" />
                <circle cx="92" cy="22" r="1.2" fill="#38bdf8" />
              </svg>
              {/* Teenage Engineering Status REC / LIVE LED */}
              <i className="absolute top-1 right-1.5 w-[5px] h-[5px] rounded-full bg-[#e85a2a] te-led-active shadow-[0_0_6px_rgba(232,90,42,0.9)]"></i>
            </div>

            <div>
              <h1 className="font-mono font-bold text-xs tracking-wider uppercase text-[var(--foreground)]">
                BUILDATIONS
              </h1>
              <span className="text-[9px] font-mono tracking-widest text-[#e85a2a] font-bold uppercase flex items-center gap-1">
                <span>OP-ENGINE</span>
                <span className="text-[7px] px-1 py-0.2 rounded bg-black text-[#3ddc84] border border-[#3ddc84]/40 font-mono">64B</span>
              </span>
            </div>
          </div>

          {/* TE Tactile Knurled Status Dial */}
          <div className="te-knob-indicator group cursor-pointer" title="Clock Sync: Master 120.0 BPM / 64-Bit Ingestion"></div>
        </div>
        
        {/* Buscador Rápido Integrado en Sidebar */}
        <div className="px-3 pt-3 pb-1">
          <button 
            onClick={() => setIsCommandPaletteOpen(true)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[var(--card)] hover:bg-[var(--muted)] border border-[var(--border)] text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all cursor-pointer group shadow-2xs"
            title="Abrir buscador global de módulos y comandos (⌘K)"
          >
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <MagnifyingGlassIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[var(--primary)] transition-colors" />
              <span>Buscar sección o comando...</span>
            </div>
            <kbd className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[var(--muted)] border border-[var(--border)] text-zinc-400">⌘K</kbd>
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-5 overflow-y-auto">
          {/* BLOQUE 1: CORE & AUDITORÍA */}
          <div>
            <div className="px-2.5 flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">01. Estudio</span>
              <span className="text-[8px] font-mono text-zinc-500">CORE</span>
            </div>
            <div className="space-y-0.5">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'overview' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <ChartBarIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'overview' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Visión General &amp; ROI</span>
                </div>
                <kbd className={`text-[8px] font-mono px-1 py-0.2 rounded ${activeTab === 'overview' ? 'bg-white/20 text-white' : 'text-zinc-500'}`}>⌘1</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('executiveAudit')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'executiveAudit' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <PresentationChartLineIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'executiveAudit' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Auditoría Ejecutiva AEO</span>
                </div>
                <span className="text-[7px] font-mono font-bold px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">AUDIT</span>
              </button>
            </div>
          </div>

          {/* BLOQUE 2: MOTORES AUTÓNOMOS & DESPACHO */}
          <div>
            <div className="px-2.5 flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">02. Motores IA</span>
              <span className="text-[8px] font-mono text-emerald-400">
                {activeEngines.filter(e => e.status === 'active').length} ON
              </span>
            </div>
            <div className="space-y-0.5">
              <button 
                onClick={() => setActiveTab('engineBuilder')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'engineBuilder' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <CpuChipIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'engineBuilder' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Constructor Modular</span>
                </div>
                <kbd className={`text-[8px] font-mono px-1 py-0.2 rounded ${activeTab === 'engineBuilder' ? 'bg-white/20 text-white' : 'text-zinc-500'}`}>⌘2</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('engineLauncher')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'engineLauncher' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <RocketLaunchIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'engineLauncher' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Lanzador SEO / AEO</span>
                </div>
                <kbd className={`text-[8px] font-mono px-1 py-0.2 rounded ${activeTab === 'engineLauncher' ? 'bg-white/20 text-white' : 'text-zinc-500'}`}>⌘3</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('revopsHubspot')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'revopsHubspot' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <ArrowPathRoundedSquareIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'revopsHubspot' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Motor RevOps &amp; Deals</span>
                </div>
                <span className="text-[7px] font-mono px-1 py-0.2 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">SLOT-04</span>
              </button>

              <button 
                onClick={() => setActiveTab('cmsConnectors')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'cmsConnectors' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <ServerStackIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'cmsConnectors' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Patch Bay CMS (WP/Payload)</span>
                </div>
                <span className="text-[7px] font-mono px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">SLOT-05</span>
              </button>
            </div>
          </div>

          {/* BLOQUE 3: INTELIGENCIA & SILOS */}
          <div>
            <div className="px-2.5 flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">03. Búsqueda &amp; Silos</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
            </div>
            <div className="space-y-0.5">
              <button 
                onClick={() => setActiveTab('aiShareOfVoice')}
                className={`w-full flex items-center px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'aiShareOfVoice' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <SparklesIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'aiShareOfVoice' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                <span>Radar AEO &amp; Espectro 64B</span>
              </button>

              <button 
                onClick={() => setActiveTab('clusterMap')}
                className={`w-full flex items-center px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'clusterMap' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <ShareIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'clusterMap' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                <span>Topic Clusters &amp; Silos</span>
              </button>

              <button 
                onClick={() => setActiveTab('sitemapReconstructor')}
                className={`w-full flex items-center px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'sitemapReconstructor' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <MapPinIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'sitemapReconstructor' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                <span>Reconstructor de Sitemaps</span>
              </button>

              <button 
                onClick={() => setActiveTab('contentDecay')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'contentDecay' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <ChartBarIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'contentDecay' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Radar GSC (Decay Sweep)</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              </button>

              <button 
                onClick={() => setActiveTab('serpxray')}
                className={`w-full flex items-center px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'serpxray' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <BoltIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'serpxray' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                <span>SERP &amp; AEO X-Ray</span>
              </button>

              <button 
                onClick={() => setActiveTab('rag')}
                className={`w-full flex items-center px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'rag' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <DocumentTextIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'rag' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                <span>Datasets RAG Vectorial</span>
              </button>
            </div>
          </div>

          {/* BLOQUE 4: INFRAESTRUCTURA, BÓVEDA & FINOPS */}
          <div>
            <div className="px-2.5 flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">04. Infra &amp; Bóveda</span>
              <span className="text-[8px] font-mono text-zinc-500">RIG</span>
            </div>
            <div className="space-y-0.5">
              <button 
                onClick={() => setActiveTab('databaseStudio')}
                className={`w-full flex items-center px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'databaseStudio' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <CircleStackIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'databaseStudio' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                <span>Editor BD &amp; SQL Studio</span>
              </button>

              <button 
                onClick={() => setActiveTab('finopsStudio')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'finopsStudio' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <CommandLineIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'finopsStudio' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>FinOps &amp; Monitor Tokens</span>
                </div>
                <span className="text-[7px] font-mono px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">$USD</span>
              </button>

              <button 
                onClick={() => setActiveTab('presetsStudio')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'presetsStudio' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <AdjustmentsHorizontalIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'presetsStudio' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Presets &amp; Personalización</span>
                </div>
                <span className="text-[7px] font-mono px-1 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">RIG</span>
              </button>

              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'settings' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <Cog6ToothIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'settings' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Configuración &amp; APIs</span>
                </div>
                <kbd className={`text-[8px] font-mono px-1 py-0.2 rounded ${activeTab === 'settings' ? 'bg-white/20 text-white' : 'text-zinc-500'}`}>⌘0</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('documentation')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer group ${
                  activeTab === 'documentation' 
                    ? 'bg-[var(--primary)] text-white shadow-[0_0_12px_rgba(255,90,0,0.3)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                <div className="flex items-center">
                  <BookOpenIcon className={`w-4 h-4 mr-2.5 shrink-0 ${activeTab === 'documentation' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>Manual &amp; Homologación</span>
                </div>
                <span className="text-[9px] font-mono text-zinc-500">DOCS</span>
              </button>
            </div>
          </div>

          {/* Micro Telemetría de Kernel */}
          <div className="mx-1 p-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[10px] space-y-1.5">
            <div className="flex items-center justify-between text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                KERNEL OS
              </span>
              <span className="text-emerald-400 font-bold">99.98%</span>
            </div>
            <div className="w-full bg-[var(--muted)] h-1 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[94%] rounded-full"></div>
            </div>
            <div className="pt-1 flex items-center justify-between text-[9px] text-zinc-500 font-mono">
              <button 
                onClick={() => {
                  setOnboardingStep(1);
                  setIsOnboardingOpen(true);
                }}
                className="hover:text-[var(--primary)] transition-colors cursor-pointer flex items-center gap-1"
                title="Abrir Asistente Guiado de Configuración Inicial"
              >
                <SparklesIcon className="w-2.5 h-2.5 text-amber-400" />
                <span>Asistente Zero-to-One</span>
              </button>
              <Link href="/login" className="hover:text-zinc-300 transition-colors">
                Portal ↗
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Teenage Engineering User Profile & Rotary Power Footer */}
        <div className="p-3 border-t border-[var(--border-te)] bg-[#0a0c0e] flex items-center justify-between">
          <div 
            onClick={() => setActiveTab('settings')}
            className="flex items-center cursor-pointer group flex-1 mr-2 p-1.5 rounded hover:bg-[#14161b] transition-colors border border-transparent hover:border-[var(--border-te)]"
            title="Ir a Configuración de Cuenta & Enterprise Vault"
          >
            <div className="w-8 h-8 rounded bg-[#1c1e24] border border-[#e85a2a] mr-2.5 shadow-sm flex items-center justify-center font-mono font-bold text-[#e85a2a] text-xs shrink-0 group-hover:scale-105 transition-transform">
              RG
            </div>
            <div className="truncate">
              <p className="font-mono text-xs font-bold text-[var(--foreground)] group-hover:text-[#e85a2a] transition-colors truncate leading-tight">
                Román García
              </p>
              <p className="font-mono text-[9px] text-[#8a8f9d] flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] te-led-active"></span>
                <span className="uppercase">SOYROMAN // ADMIN</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setActiveTab('settings')}
              className={`p-1.5 rounded text-xs transition-colors cursor-pointer border ${
                activeTab === 'settings' 
                  ? 'bg-[#e85a2a] text-white border-[#e85a2a]' 
                  : 'border-[var(--border-te)] bg-[#14161b] hover:border-[#e85a2a] text-zinc-300'
              }`}
              title="Configuración de Cuenta & Vault"
            >
              <Cog6ToothIcon className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded border border-[var(--border-te)] bg-[#14161b] hover:border-[#e85a2a] text-zinc-300 transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Modo Tactile Day' : 'Modo Dark Synth'}
            >
              {theme === 'dark' ? <SunIcon className="w-4 h-4 text-[#f5a623]" /> : <MoonIcon className="w-4 h-4 text-[#38bdf8]" />}
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
                .replace('executiveAudit', 'Auditoría Ejecutiva & Scorecard AEO (C-Level Report)')
                .replace('engineBuilder', 'Constructor Gráfico de Motores (Studio & Topology Architecture)')
                .replace('engineLauncher', 'Lanzador y Configurador de Motor SEO/AEO')
                .replace('revopsHubspot', 'Motor RevOps & Atribución HubSpot (Slot 04)')
                .replace('cmsConnectors', 'Patch Bay Conectores CMS (Payload & WordPress)')
                .replace('dataEnrichment', 'Enriquecedor de Datos & Limpieza B2B')
                .replace('sitemapReconstructor', 'Reconstructor y Optimizador de Sitemaps')
                .replace('aiShareOfVoice', 'Radar de Citabilidad & Espectrograma 64B')
                .replace('clusterMap', 'Clusters & Silos de Contenido')
                .replace('serpxray', 'SERP & AEO X-Ray')
                .replace('apihub', 'API Hub')
                .replace('contentDecay', 'Radar GSC Content Decay Sweep')
                .replace('rag', 'Datasets de Keywords & RAG Vectorial')
                .replace('planner', 'Keyword Planner')
                .replace('competitors', 'Radar Competencia')
                .replace('databaseStudio', 'Editor de Bases de Datos & SQL Studio')
                .replace('finopsStudio', 'FinOps & Ingestión de Tokens en Tiempo Real')
                .replace('presetsStudio', 'Bóveda de Presets & Perfiles por Cliente')
                .replace('documentation', 'Manual de Uso & Historieta de Homologación')
                .replace('settings', 'Configuración de Cuenta & Bóveda Enterprise')
              }
            </span>
          </div>
          
          <div className="flex items-center space-x-2.5">
            {/* Buscador Global Protagonista (Command Center) */}
            <button 
              onClick={() => setIsCommandPaletteOpen(true)}
              className="flex items-center justify-between bg-[var(--card)] hover:bg-[var(--muted)]/60 border border-[var(--border)] hover:border-[var(--primary)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-xl pl-3.5 pr-2.5 py-1.5 text-xs transition-all w-48 sm:w-56 md:w-64 lg:w-72 cursor-pointer shadow-2xs group"
              title="Buscar módulo, silo o ejecutar comando (Atajo: ⌘K)"
            >
              <div className="flex items-center gap-2.5 truncate">
                <MagnifyingGlassIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[var(--primary)] transition-colors shrink-0" />
                <span className="truncate text-xs font-normal">Buscar módulo o comando...</span>
              </div>
              <div className="flex items-center gap-1 shrink-0 ml-2">
                <kbd className="bg-[var(--muted)] text-[10px] font-mono px-1.5 py-0.5 rounded border border-[var(--border)] text-zinc-400 group-hover:text-zinc-200">⌘K</kbd>
              </div>
            </button>

            {/* TE Tactile Industry Preset Selector */}
            <div className="hidden lg:flex items-center gap-1 p-1 rounded bg-[#07090a] border border-[#2a2e38] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] font-mono text-[10px]">
              <span className="text-[#8a8f9d] px-1 font-bold tracking-wider">PRESET:</span>
              {(['saas', 'fintech', 'ecommerce', 'health'] as const).map((pst) => (
                <button
                  key={pst}
                  onClick={() => {
                    setActiveIndustryPreset(pst);
                    showToast('Preset de Hardware Aplicado', `Calibrando umbrales y motores para: ${pst.toUpperCase()}`, 'success');
                  }}
                  className={`px-2 py-0.5 rounded uppercase font-bold transition-all cursor-pointer ${
                    activeIndustryPreset === pst
                      ? 'bg-[#e85a2a] text-white shadow-[0_0_8px_rgba(232,90,42,0.8)] te-button-primary'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                  title={`Cargar calibración de pesos para industria: ${pst}`}
                >
                  {pst}
                </button>
              ))}
            </div>

            {/* Teenage Engineering Mechanical Status Segment Indicator */}
            <div className="hidden xl:flex items-center gap-1.5 p-1 rounded bg-[#0a0c0e] border border-black shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
              <span className="font-mono text-[9px] font-bold uppercase text-[#8a8f9d] px-1 tracking-wider">
                LED:
              </span>
              
              <button 
                onClick={() => setSelectedAgent('sophia')}
                className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-all cursor-pointer ${
                  selectedAgent === 'sophia' 
                    ? 'bg-[#152a1d] text-[#3ddc84] border border-[#3ddc84]/50' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="Crawler SERP: Calibrado y Operativo (99.8%)"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] te-led-active shadow-[0_0_5px_#3ddc84]" />
                <span>SERP</span>
              </button>

              <button 
                onClick={() => setSelectedAgent('jax')}
                className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-all cursor-pointer ${
                  selectedAgent === 'jax' 
                    ? 'bg-[#2a2212] text-[#f5a623] border border-[#f5a623]/50' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="Sync RevOps HubSpot: Vinculado y Activo"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] shadow-[0_0_5px_#f5a623]" />
                <span>REVOPS</span>
              </button>

              <button 
                onClick={() => setSelectedAgent('vera')}
                className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-all cursor-pointer ${
                  selectedAgent === 'vera' 
                    ? 'bg-[#2d160f] text-[#e85a2a] border border-[#e85a2a]/50' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="Motor Editorial AEO: En Proceso de Síntesis"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a] te-led-fast shadow-[0_0_5px_#e85a2a]" />
                <span>AEO</span>
              </button>
            </div>

            {/* TE Tactile Mechanical Switches */}
            <button
              onClick={() => setIsExecutiveMode(!isExecutiveMode)}
              className={`te-button ${isExecutiveMode ? 'te-button-primary' : ''}`}
              title="Cambiar entre Vista Técnica y Portal Ejecutivo para Clientes"
            >
              <PresentationChartLineIcon className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{isExecutiveMode ? 'C-LEVEL' : 'TÉCNICA'}</span>
            </button>

            {/* Consola Kernel Monitor Button */}
            <button
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
              className="te-button"
              title="Abrir Consola Kernel de Procesos"
            >
              <CommandLineIcon className="w-3.5 h-3.5 text-[#3ddc84]" />
              <span className="hidden lg:inline font-mono">KERNEL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] te-led-active"></span>
            </button>

            {/* Day / Night Theme Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)] transition-all text-xs font-semibold shadow-2xs cursor-pointer"
              title={theme === 'dark' ? 'Cambiar a Modo Día' : 'Cambiar a Modo Noche'}
            >
              {theme === 'dark' ? (
                <SunIcon className="w-4 h-4 text-amber-400" />
              ) : (
                <MoonIcon className="w-4 h-4 text-indigo-400" />
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

            {/* TAB: AUDITORÍA EJECUTIVA & SCORECARD AEO (SLOT 01 // C-LEVEL HOMOLOGATION) */}
            {activeTab === 'executiveAudit' && (
              <div className="space-y-6 animate-fade-in">
                <div className="te-rack-unit p-6">
                  {/* Industrial Screws */}
                  <div className="absolute top-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute top-2.5 right-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 right-2.5 te-rack-screw" />

                  {/* Header de Hardware */}
                  <div className="flex flex-wrap justify-between items-center gap-4 pb-5 border-b border-[#2a2e38]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-[#07090a] border border-[#e85a2a]/60 flex items-center justify-center text-[#e85a2a] shadow-[0_0_12px_rgba(232,90,42,0.25)]">
                        <PresentationChartLineIcon className="w-5 h-5 text-[#e85a2a]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-[#e85a2a] tracking-widest uppercase">
                            SLOT 01 // EXECUTIVE AEO AUDIT &amp; SCORECARD
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] te-led-active shadow-[0_0_6px_#3ddc84]" />
                          <span className="font-mono text-[9px] text-[#3ddc84] font-bold">C-LEVEL READY</span>
                        </div>
                        <h2 className="text-xl font-black text-[var(--foreground)] tracking-tight font-mono">
                          AUDITORÍA EJECUTIVA DE HOMOLOGACIÓN AEO / SEO
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setIsAuditExporting(true);
                          const reportMd = `# AUDITORÍA EJECUTIVA DE HOMOLOGACIÓN AEO / SEO 2026\n\n` +
                            `**Cliente / Workspace:** ${currentWorkspace}\n` +
                            `**Fecha:** ${new Date().toLocaleDateString()}\n` +
                            `**Scorecard Global:** 94 / 100 (Grado A+ Citabilidad Óptima)\n\n` +
                            `## 1. Desglose de Factores Críticos\n` +
                            `- Citabilidad en Buscadores de IA (ChatGPT, Perplexity, Claude, Gemini): 96%\n` +
                            `- Arquitectura de Silos y Topic Clusters: 92%\n` +
                            `- Atribución Financiera a HubSpot CRM: 90%\n` +
                            `- Velocidad Core Web Vitals & Rendering: 98%\n\n` +
                            `## 2. Recomendaciones de Ingeniería de Contenido\n` +
                            `1. Refrescar 14 URLs en decaimiento detectadas por el radar GSC.\n` +
                            `2. Activar inyección de Schema JSON-LD canónico en Payload 3.x.\n` +
                            `3. Escalar embeddings pgvector a 1536 dimensiones con índice HNSW m=16.\n\n` +
                            `Generado por Buildations Engine OP-Studio 64-bit.`;

                          const blob = new Blob([reportMd], { type: 'text/markdown' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `auditoria-aeo-${currentWorkspace}.md`;
                          a.click();
                          URL.revokeObjectURL(url);
                          setTimeout(() => {
                            setIsAuditExporting(false);
                            showToast('Auditoría Ejecutiva Descargada', 'Informe de homologación exportado en Markdown estructurado.', 'success');
                          }, 600);
                        }}
                        disabled={isAuditExporting}
                        className="te-button px-4 py-2 text-xs font-mono font-bold flex items-center gap-2 cursor-pointer bg-[#e85a2a] text-white te-button-primary shadow-[0_0_15px_rgba(232,90,42,0.4)]"
                      >
                        <ArrowDownTrayIcon className="w-4 h-4" />
                        <span>{isAuditExporting ? 'Compilando Informe...' : 'Exportar Informe C-Level (.md)'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Scorecard HUD */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-6 font-mono">
                    {/* Big Gauge Box */}
                    <div className="p-6 rounded bg-[#07090a] border border-[#2a2e38] flex flex-col items-center justify-center text-center space-y-3">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                        SCORE GLOBAL DE HOMOLOGACIÓN
                      </span>
                      <div className="w-24 h-24 rounded-full border-4 border-[#e85a2a] flex items-center justify-center shadow-[0_0_20px_rgba(232,90,42,0.3)]">
                        <span className="text-3xl font-black text-white">94</span>
                      </div>
                      <span className="text-[10px] text-[#3ddc84] font-bold bg-[#3ddc84]/10 px-2 py-0.5 rounded border border-[#3ddc84]/30">
                        GRADO A+ (TOP 2% LATAM)
                      </span>
                    </div>

                    {/* 3 Detail Factor Cards */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-2">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                          Citabilidad AEO (IAs)
                        </span>
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-black text-[#e85a2a]">96%</span>
                          <div className="te-segment-meter">
                            <span className="te-segment-cell active-green" /><span className="te-segment-cell active-green" /><span className="te-segment-cell active-green" /><span className="te-segment-cell active-green" />
                          </div>
                        </div>
                        <p className="text-[10px] text-zinc-500">Menciones en Perplexity, ChatGPT y Claude comprobadas</p>
                      </div>

                      <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-2">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                          Topología de Silos
                        </span>
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-black text-[#3ddc84]">92%</span>
                          <div className="te-segment-meter">
                            <span className="te-segment-cell active-green" /><span className="te-segment-cell active-green" /><span className="te-segment-cell active-green" /><span className="te-segment-cell active-yellow" />
                          </div>
                        </div>
                        <p className="text-[10px] text-zinc-500">Clusters temáticos estancos sin enlaces cruzados rotos</p>
                      </div>

                      <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-2">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                          Atribución a Negocios
                        </span>
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-black text-cyan-400">90%</span>
                          <div className="te-segment-meter">
                            <span className="te-segment-cell active-green" /><span className="te-segment-cell active-green" /><span className="te-segment-cell active-green" /><span className="te-segment-cell active-yellow" />
                          </div>
                        </div>
                        <p className="text-[10px] text-zinc-500">Mapeo de deals y prospectos a hs_analytics verificado</p>
                      </div>
                    </div>
                  </div>

                  {/* Hoja de Ruta de Ingeniería de Contenido */}
                  <div className="p-5 rounded bg-[#07090a] border border-[#2a2e38] space-y-4 font-mono text-xs">
                    <span className="font-bold text-white uppercase tracking-wider block text-xs flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3ddc84] te-led-active" />
                      Plan de Acción Inmediato (Roadmap de Homologación Trimestral)
                    </span>

                    <div className="space-y-2">
                      {[
                        { step: "01", task: "Refrescar 14 URLs en decaimiento con Agente Vera", impact: "+28% Tráfico Orgánico", status: "Listo para Disparo" },
                        { step: "02", task: "Sincronizar Colecciones de Payload 3.x con Schema JSON-LD", impact: "+45% Citabilidad AEO", status: "Armado en Slot 05" },
                        { step: "03", task: "Generar Silo de 'Comparativa Software B2B' con 6 satélites", impact: "18 Leads Estimados", status: "Planificado" },
                        { step: "04", task: "Regenerar Vectores pgvector con HNSW a 1536 dimensiones", impact: "Latencia < 11.4ms", status: "Activo en DB Studio" }
                      ].map((item, i) => (
                        <div key={i} className="p-3 rounded bg-[#101216] border border-[#222630] flex flex-wrap justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <span className="text-[#e85a2a] font-bold">{item.step}.</span>
                            <span className="text-white font-medium">{item.task}</span>
                          </div>
                          <div className="flex items-center gap-4 text-[10px]">
                            <span className="text-[#3ddc84] font-bold">{item.impact}</span>
                            <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">{item.status}</span>
                          </div>
                        </div>
                      ))}
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

                {/* TEENAGE ENGINEERING HARDWARE CONTROL UNIT // THE 64-BIT LEGO PRINCIPLE */}
                <div className="te-frame p-6 bg-te-dots relative overflow-hidden space-y-6">
                  {/* Subtle top steel bezel with mechanical screws */}
                  <div className="flex items-center justify-between border-b border-[var(--border-te)] pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#111317] border border-[var(--border-te)] flex items-center justify-center shadow-inner">
                        <div className="w-1.5 h-0.5 bg-zinc-600 rotate-45"></div>
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85a2a]">
                        FIG.01 // SISTEMA DE DEMANDA B2B &amp; MOTOR AUTÓNOMO
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] uppercase px-2 py-0.5 bg-[#0a0c0e] text-[#3ddc84] border border-[#3ddc84]/30 rounded">
                        64-BIT CORE: ACTIVE
                      </span>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#111317] border border-[var(--border-te)] flex items-center justify-center shadow-inner">
                        <div className="w-1.5 h-0.5 bg-zinc-600 -rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  {/* SoyRomán Style Animated Flow Schematic Diagram (SVG Signal Path) */}
                  <div className="p-4 rounded bg-[#0a0c0e] border border-black shadow-[inset_0_2px_8px_rgba(0,0,0,0.9)] overflow-x-auto">
                    <div className="min-w-[680px]">
                      <svg viewBox="0 0 680 140" className="w-full h-auto">
                        <defs>
                          <pattern id="te-grid-dots" width="12" height="12" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="rgba(232,90,42,0.18)"></circle>
                          </pattern>
                        </defs>
                        <rect width="680" height="140" fill="url(#te-grid-dots)"></rect>

                        {/* Cables */}
                        <g fill="none" stroke="#2a2e37" strokeWidth="1.5">
                          <path id="te-c1" d="M110 50 H160 V70 H210" />
                          <path id="te-c2" d="M110 90 H160 V70 H210" />
                          <path id="te-c3" d="M310 70 H370" />
                          <path id="te-c4" d="M470 70 H530" />
                          <path id="te-c5" d="M590 95 V120 H260 V95" strokeDasharray="3 3" />
                        </g>

                        {/* Animated 64-bit Signal Pulses */}
                        <g fill="#e85a2a">
                          <circle r="3.5">
                            <animateMotion dur="2.4s" begin="0s" repeatCount="indefinite">
                              <mpath href="#te-c1" />
                            </animateMotion>
                          </circle>
                          <circle r="3.5">
                            <animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite">
                              <mpath href="#te-c2" />
                            </animateMotion>
                          </circle>
                          <circle r="3.5">
                            <animateMotion dur="1.8s" begin="0s" repeatCount="indefinite">
                              <mpath href="#te-c3" />
                            </animateMotion>
                          </circle>
                          <circle r="3.5">
                            <animateMotion dur="1.8s" begin="-0.9s" repeatCount="indefinite">
                              <mpath href="#te-c4" />
                            </animateMotion>
                          </circle>
                        </g>

                        {/* Modular Blocks */}
                        {/* 01 Ingesta */}
                        <g transform="translate(10, 30)">
                          <rect width="100" height="36" fill="#14161b" stroke="#2e323b" rx="2" />
                          <text x="10" y="22" fill="#8a8f9d" fontFamily="ui-monospace, monospace" fontSize="9" fontWeight="bold">01. PAID &amp; GSC</text>
                        </g>
                        <g transform="translate(10, 74)">
                          <rect width="100" height="36" fill="#14161b" stroke="#2e323b" rx="2" />
                          <text x="10" y="22" fill="#8a8f9d" fontFamily="ui-monospace, monospace" fontSize="9" fontWeight="bold">02. SEO &amp; AEO</text>
                        </g>

                        {/* 02 Motor Autónomo */}
                        <g transform="translate(210, 35)">
                          <rect width="100" height="70" fill="#000000" stroke="#e85a2a" strokeWidth="1.5" rx="2" />
                          <rect x="92" y="-1" width="7" height="7" fill="#e85a2a" />
                          <text x="12" y="26" fill="#ffffff" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="bold">OP-ENGINE</text>
                          <text x="12" y="44" fill="#e85a2a" fontFamily="ui-monospace, monospace" fontSize="8" fontWeight="bold">RAG + LLM 64B</text>
                          <text x="12" y="58" fill="#3ddc84" fontFamily="ui-monospace, monospace" fontSize="8">● 98.4% ASERT</text>
                        </g>

                        {/* 03 CMS & Silos */}
                        <g transform="translate(370, 35)">
                          <rect width="100" height="70" fill="#14161b" stroke="#2e323b" rx="2" />
                          <text x="12" y="26" fill="#ffffff" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="bold">CMS SILOS</text>
                          <text x="12" y="44" fill="#8a8f9d" fontFamily="ui-monospace, monospace" fontSize="8">PAYLOAD / WP</text>
                          <text x="12" y="58" fill="#38bdf8" fontFamily="ui-monospace, monospace" fontSize="8">SCHEMA JSON</text>
                        </g>

                        {/* 04 Pipeline RevOps */}
                        <g transform="translate(530, 35)">
                          <rect width="130" height="70" fill="#e85a2a" rx="2" />
                          <text x="12" y="26" fill="#ffffff" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="bold">REVOPS CRM</text>
                          <text x="12" y="44" fill="#ffffff" fontFamily="ui-monospace, monospace" fontSize="9" fontWeight="bold">MQL → DEALS</text>
                          <text x="12" y="58" fill="#ffffff" opacity="0.8" fontFamily="ui-monospace, monospace" fontSize="8">HUBSPOT SYNC</text>
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-mono text-sm uppercase font-bold text-[var(--foreground)] tracking-wide">
                        Línea de Producción Modular // Filosofía Teenage Engineering
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)] max-w-2xl font-mono">
                        Hardware UI minimalista con micro-animaciones independientes. Cada etapa opera como un sintetizador autónomo de datos.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setActiveTab('engineBuilder');
                          showToast('Constructor TE', 'Abriendo el panel de modulación de arquitectura 64-bit', 'info');
                        }}
                        className="te-button te-button-primary"
                      >
                        <CpuChipIcon className="w-3.5 h-3.5" />
                        <span>CONFIGURAR MÓDULOS</span>
                      </button>
                      <button
                        onClick={() => {
                          setOnboardingStep(1);
                          setIsOnboardingOpen(true);
                        }}
                        className="te-button"
                      >
                        <SparklesIcon className="w-3.5 h-3.5 text-[#f5a623]" />
                        <span>CALIBRACIÓN ZERO-TO-ONE</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grid de 4 Indicadores Hardware TE (Estilo Pantalla Segmentada LCD de Bolsillo) */}
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border-te)] border border-[var(--border-te)] bg-[var(--card)] rounded">
                  <div className="p-6 md:p-8 flex flex-col justify-between group hover:bg-[var(--muted)]/50 transition-colors relative aspect-auto sm:aspect-square">
                    <div className="flex justify-between items-start mb-6">
                      <span className="te-label">M-01 // TRÁFICO</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] te-led-active"></span>
                    </div>
                    <div>
                      <p className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-[var(--foreground)] group-hover:text-[#e85a2a] transition-colors">
                        42.8k
                      </p>
                      <p className="te-label mt-2 text-[#3ddc84]">
                        ↑ +18.4% / MES ORGÁNICO
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between group hover:bg-[var(--muted)]/50 transition-colors relative aspect-auto sm:aspect-square">
                    <div className="flex justify-between items-start mb-6">
                      <span className="te-label">M-02 // KEYWORDS TOP 3</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                    </div>
                    <div>
                      <p className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-[var(--foreground)] group-hover:text-[#e85a2a] transition-colors">
                        342
                      </p>
                      <p className="te-label mt-2 opacity-70">
                        1,120 EN TOP 10 TOTAL
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between group hover:bg-[var(--muted)]/50 transition-colors relative aspect-auto sm:aspect-square">
                    <div className="flex justify-between items-start mb-6">
                      <span className="te-label">M-03 // CITACIÓN AEO</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a] te-led-fast"></span>
                    </div>
                    <div>
                      <p className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-[var(--foreground)] group-hover:text-[#e85a2a] transition-colors">
                        64.2%
                      </p>
                      <p className="te-label mt-2 text-[#e85a2a]">
                        TOP 1 CHATGPT &amp; PERPLEXITY
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between group hover:bg-[var(--muted)]/50 transition-colors relative aspect-auto sm:aspect-square">
                    <div className="flex justify-between items-start mb-6">
                      <span className="te-label">M-04 // PIPELINE DEALS</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]"></span>
                    </div>
                    <div>
                      <p className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-[var(--foreground)] group-hover:text-[#e85a2a] transition-colors">
                        $148k
                      </p>
                      <p className="te-label mt-2 opacity-70">
                        12 DEALS HUBSPOT CERRADOS
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tablero de Actividad Hardware con Analizador de Frecuencia 64-Bit */}
                <div className="te-frame p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-te)] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#e85a2a]"></div>
                      <div>
                        <h3 className="font-mono text-sm uppercase font-bold text-[var(--foreground)]">
                          SYS.02 // Espectro de Frecuencia &amp; Tráfico Orgánico
                        </h3>
                        <p className="font-mono text-[10px] text-[var(--muted-foreground)]">
                          Osciloscopio de demanda con sincronización horaria de indexación.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#0a0c0e] p-1 rounded border border-black text-xs font-mono">
                      <button className="px-2.5 py-1 rounded bg-[#1c1e24] text-[#e85a2a] font-bold">30D</button>
                      <button className="px-2.5 py-1 rounded text-zinc-400 hover:text-white">90D</button>
                      <button className="px-2.5 py-1 rounded text-zinc-400 hover:text-white">1Y</button>
                    </div>
                  </div>

                  {/* 64-Bit Teenage Engineering Frequency Equalizer Display */}
                  <div className="h-64 flex items-end space-x-2 pt-6 px-2 bg-[#0a0c0e] rounded p-4 border border-black shadow-inner">
                    {[45, 52, 49, 60, 72, 68, 85, 94, 88, 102, 115, 128].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end">
                        <div className="w-full flex flex-col gap-1 items-center justify-end h-full">
                          {/* Segmented LED matrix steps per bar */}
                          {Array.from({ length: 12 }).map((_, stepIdx) => {
                            const isLit = stepIdx <= Math.floor((h / 130) * 12);
                            return (
                              <div
                                key={stepIdx}
                                className={`w-full h-2 rounded-[1px] transition-all ${
                                  isLit 
                                    ? stepIdx > 9 
                                      ? 'bg-[#e85a2a] shadow-[0_0_4px_#e85a2a]' 
                                      : stepIdx > 6 
                                      ? 'bg-[#f5a623]' 
                                      : 'bg-[#3ddc84]' 
                                    : 'bg-zinc-900/60'
                                }`}
                              />
                            );
                          })}
                        </div>
                        <span className="font-mono text-[9px] uppercase font-bold text-zinc-500 group-hover:text-[#e85a2a]">
                          P-0{i+1}
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
                        Flota de Motores Autónomos &amp; Telemetría Multidominio
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* Conmutador de Vista */}
                      <div className="flex items-center bg-[var(--background)] p-1 rounded-xl border border-[var(--border)] text-xs">
                        <button
                          onClick={() => setClusterViewMode('fleet')}
                          className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                            clusterViewMode === 'fleet' 
                              ? 'bg-[var(--primary)] text-white shadow-xs' 
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          ⚡ Flota &amp; Telemetría
                        </button>
                        <button
                          onClick={() => setClusterViewMode('clientServerSetup')}
                          className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                            clusterViewMode === 'clientServerSetup' 
                              ? 'bg-[var(--primary)] text-white shadow-xs' 
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          🏢 Servidor Buildations (Cliente Daemon)
                        </button>
                      </div>

                      <button 
                        onClick={() => {
                          setEditingEngineData({
                            id: `eng-0${activeEngines.length + 1}`,
                            name: `Motor #${activeEngines.length + 1} - Nuevo Cliente`,
                            targetDomain: 'https://nuevo-cliente.com',
                            purpose: 'Posicionamiento y generación de demanda con IA soberana',
                            type: 'AEO / Citabilidad B2B',
                            llmCore: 'Claude 3.5 Sonnet',
                            vectorStore: 'Supabase pgvector',
                            status: 'active',
                            health: 99.2,
                            publishedWeekly: 4,
                            tokensSpent: '0k',
                            latency: '1.35s',
                            powerRate: 96,
                            lastRun: 'Nuevo',
                            frequency: '3_per_week',
                            cmsDestination: 'WordPress REST API',
                            assertivenessThreshold: 94,
                            monthlyBudgetUsd: 85
                          });
                          setEngineModalMode('create');
                          setIsEngineModalOpen(true);
                        }}
                        className="bg-[var(--primary)] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold hover:bg-[var(--primary-hover)] transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                      >
                        <PlusIcon className="w-3.5 h-3.5" />
                        <span>Configurar Nuevo Motor</span>
                      </button>
                    </div>
                  </div>

                  {clusterViewMode === 'fleet' ? (
                    /* Tarjetas de Motores Activos con Interacción Completa Estilo Teenage Engineering Hardware */
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 relative z-10">
                      {activeEngines.map((eng) => {
                        const isSelected = selectedEngineId === eng.id;
                        return (
                          <div 
                            key={eng.id}
                            className={`te-frame p-4.5 transition-all relative overflow-hidden flex flex-col justify-between group ${
                              isSelected 
                                ? 'border-[#e85a2a] shadow-[0_0_18px_rgba(232,90,42,0.3)] bg-[#121418]' 
                                : 'bg-[#101216] hover:border-zinc-600'
                            }`}
                          >
                            {/* TE Corner Mechanical Notch */}
                            <div className="absolute top-0 right-0 w-3 h-3 bg-[#e85a2a]/20 border-b border-l border-[#e85a2a]/40"></div>

                            <div>
                              <div className="flex items-start justify-between gap-2 mb-2.5">
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${
                                    eng.status === 'active' ? 'bg-[#3ddc84] te-led-active shadow-[0_0_6px_#3ddc84]' : 'bg-[#f5a623]'
                                  }`} />
                                  <span className="te-label">
                                    {eng.id} // {eng.type}
                                  </span>
                                </div>
                                <span className={`font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded font-bold ${
                                  eng.status === 'active' 
                                    ? 'bg-[#3ddc84]/15 text-[#3ddc84] border border-[#3ddc84]/40' 
                                    : 'bg-[#f5a623]/15 text-[#f5a623] border border-[#f5a623]/40'
                                }`}>
                                  {eng.status === 'active' ? 'ACTIVE' : 'STANDBY'}
                                </span>
                              </div>

                              <h4 className="font-mono font-bold text-xs text-[var(--foreground)] group-hover:text-[#e85a2a] transition-colors leading-tight mb-1">
                                {eng.name}
                              </h4>
                              
                              <p className="font-mono text-[10px] text-[#e85a2a] truncate mb-2">
                                {eng.targetDomain}
                              </p>
                              
                              <p className="font-mono text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed mb-3">
                                {eng.purpose}
                              </p>

                              {/* Medidores 64-bit y Rendimiento Hardware TE */}
                              <div className="grid grid-cols-3 gap-1.5 p-2 bg-[#080a0c] border border-black rounded te-screen text-center">
                                <div className="p-1">
                                  <span className="te-label block text-[8px]">CORE</span>
                                  <span className="text-xs font-mono font-bold text-[#3ddc84]">{eng.health}%</span>
                                </div>
                                <div className="p-1 border-x border-zinc-800">
                                  <span className="te-label block text-[8px]">POST/W</span>
                                  <span className="text-xs font-mono font-bold text-white">{eng.publishedWeekly}</span>
                                </div>
                                <div className="p-1">
                                  <span className="te-label block text-[8px]">LATENCY</span>
                                  <span className="text-xs font-mono font-bold text-[#38bdf8]">{eng.latency}</span>
                                </div>
                              </div>

                              <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-zinc-400 pb-2.5 border-b border-[var(--border-te)]">
                                <span className="flex items-center gap-1">
                                  POTENCIA: <strong className="text-[#f5a623]">{eng.powerRate}%</strong>
                                </span>
                                <span>CORE: {eng.llmCore.split(' ')[0]}</span>
                              </div>
                            </div>

                            {/* Barra de Acciones Directas del Motor */}
                            <div className="mt-3 flex items-center justify-between gap-1.5">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEditingEngineData({
                                    id: eng.id,
                                    name: eng.name,
                                    targetDomain: eng.targetDomain,
                                    purpose: eng.purpose,
                                    type: eng.type,
                                    llmCore: eng.llmCore as any,
                                    vectorStore: eng.vectorStore as any,
                                    status: eng.status,
                                    health: eng.health,
                                    publishedWeekly: eng.publishedWeekly,
                                    tokensSpent: eng.tokensSpent,
                                    latency: eng.latency,
                                    powerRate: eng.powerRate,
                                    lastRun: eng.lastRun,
                                    frequency: eng.frequency as any,
                                    cmsDestination: 'WordPress REST API',
                                    assertivenessThreshold: 95,
                                    monthlyBudgetUsd: 85
                                  });
                                  setEngineModalMode('edit');
                                  setIsEngineModalOpen(true);
                                }}
                                className="flex-1 te-button py-1 px-2 text-[10px]"
                                title="Calibrar y editar parámetros de este motor"
                              >
                                <AdjustmentsHorizontalIcon className="w-3 h-3" />
                                <span>CALIBRAR</span>
                              </button>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveEngines(prev => prev.map(item => {
                                    if (item.id === eng.id) {
                                      const nextStatus = item.status === 'active' ? 'paused' : 'active';
                                      showToast(
                                        nextStatus === 'active' ? 'Motor Reanudado' : 'Motor Pausado',
                                        `El motor "${item.name}" ahora está en estado ${nextStatus.toUpperCase()}.`,
                                        nextStatus === 'active' ? 'success' : 'warning'
                                      );
                                      return { ...item, status: nextStatus };
                                    }
                                    return item;
                                  }));
                                }}
                                className={`te-button py-1 px-2 text-[10px] ${
                                  eng.status === 'active' 
                                    ? 'text-[#f5a623]' 
                                    : 'text-[#3ddc84]'
                                }`}
                                title={eng.status === 'active' ? 'Pausar ejecución programada' : 'Reanudar ejecución'}
                              >
                                {eng.status === 'active' ? (
                                  <>
                                    <PauseIcon className="w-3 h-3 text-[#f5a623]" />
                                    <span>PAUSA</span>
                                  </>
                                ) : (
                                  <>
                                    <PlayIcon className="w-3 h-3 text-[#3ddc84]" />
                                    <span>PLAY</span>
                                  </>
                                )}
                              </button>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  showToast(
                                    'Benchmark Inferencia 64-Bit',
                                    `Test ejecutado en "${eng.name}": Latencia ${eng.latency}, Throughput 58 tok/s, 0 alucinaciones fácticas.`,
                                    'success'
                                  );
                                }}
                                className="te-button py-1 px-2 text-[10px] text-[#38bdf8]"
                                title="Ejecutar prueba de inferencia en seco y medir telemetría"
                              >
                                <BoltIcon className="w-3 h-3" />
                              </button>

                              {activeEngines.length > 1 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (confirm(`¿Eliminar el motor "${eng.name}" del clúster?`)) {
                                      setActiveEngines(prev => prev.filter(item => item.id !== eng.id));
                                      showToast('Motor Eliminado', `Se retiró "${eng.name}" del clúster.`, 'info');
                                    }
                                  }}
                                  className="te-button py-1 px-2 text-[10px] hover:text-rose-400"
                                  title="Eliminar motor"
                                >
                                  <TrashIcon className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Configurador Integral de Servidor Buildations para Clientes */
                    <div className="space-y-6 relative z-10 animate-fade-in">
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[var(--primary)] uppercase font-bold tracking-wider">
                            BUILDATIONS SERVER PROTOCOL // CLIENT DAEMON CONFIGURATION
                          </span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            ESTADO: {clientServerConfig.serverSyncStatus.toUpperCase()} ({clientServerConfig.lastSyncedAt})
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Todo lo que tu servidor de Buildations (Falkenstein / Hetzner Bare-Metal) necesita para aprovisionar un cliente desde cero: canibalizaciones, handshake de CMS, sincronización de pipelines RevOps y cuota de inferencia soberana.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Bloque 1: Identidad & Dominio */}
                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
                          <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">
                            01. Identidad &amp; Dominio Canónico
                          </span>
                          <div className="space-y-2 text-xs">
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">Nombre Comercial del Cliente</label>
                              <input 
                                type="text"
                                value={clientServerConfig.clientName}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, clientName: e.target.value })}
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)]"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">Dominio Canónico Principal</label>
                              <input 
                                type="text"
                                value={clientServerConfig.canonicalDomain}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, canonicalDomain: e.target.value })}
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)] font-mono"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">URL Oficial de Sitemap XML</label>
                              <input 
                                type="text"
                                value={clientServerConfig.sitemapUrl}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, sitemapUrl: e.target.value })}
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)] font-mono"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Bloque 2: Infraestructura CMS de Salida */}
                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
                          <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">
                            02. Handshake CMS &amp; Webhook de Despacho
                          </span>
                          <div className="space-y-2 text-xs">
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">CMS Destino del Cliente</label>
                              <select
                                value={clientServerConfig.cmsType}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, cmsType: e.target.value as any })}
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)]"
                              >
                                <option value="WordPress">WordPress (REST API + Application Password)</option>
                                <option value="Payload CMS">Payload CMS (REST Endpoints + Auth Token)</option>
                                <option value="Webflow">Webflow (Collections V2 API)</option>
                                <option value="Ghost">Ghost (Admin Content API)</option>
                                <option value="Shopify">Shopify (Blog Articles API)</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">Endpoint de Ingesta / Webhook</label>
                              <input 
                                type="text"
                                value={clientServerConfig.cmsWebhookUrl}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, cmsWebhookUrl: e.target.value })}
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)] font-mono"
                              />
                            </div>
                            <div className="flex items-center justify-between pt-1">
                              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Handshake HTTP 200 OK
                              </span>
                              <button 
                                onClick={() => showToast('Ping CMS Exitoso', 'El servidor respondió con código 200 en 38ms.', 'success')}
                                className="text-[10px] font-mono px-2 py-1 rounded bg-[var(--muted)] hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
                              >
                                Test Conexión ↗
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Bloque 3: HubSpot RevOps & CRM */}
                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
                          <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">
                            03. CRM RevOps &amp; Atribución de Deals
                          </span>
                          <div className="space-y-2 text-xs">
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">HubSpot Portal ID</label>
                              <input 
                                type="text"
                                value={clientServerConfig.hubspotPortalId}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, hubspotPortalId: e.target.value })}
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)] font-mono"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">Private App Access Token (Bearer)</label>
                              <input 
                                type="password"
                                value={clientServerConfig.hubspotToken}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, hubspotToken: e.target.value })}
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)] font-mono"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">Pipeline de Deals Asociado</label>
                              <input 
                                type="text"
                                value={clientServerConfig.dealsPipelineId}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, dealsPipelineId: e.target.value })}
                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-2 text-xs text-[var(--foreground)] font-mono"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Bloque 4: Políticas de Calidad & Asertividad */}
                        <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-3">
                          <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">
                            04. Políticas de Calidad &amp; Umbral de Asertividad
                          </span>
                          <div className="space-y-3 text-xs">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <label className="text-[11px] text-zinc-400">Umbral Mínimo de Asertividad Fáctica</label>
                                <span className="font-mono text-emerald-400 font-bold">{clientServerConfig.minAssertivenessScore}%</span>
                              </div>
                              <input 
                                type="range"
                                min="85"
                                max="99"
                                value={clientServerConfig.minAssertivenessScore}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, minAssertivenessScore: parseInt(e.target.value) })}
                                className="w-full accent-emerald-500 cursor-pointer"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <label className="text-[11px] text-zinc-400">Quality Score Mínimo para Despacho Directo</label>
                                <span className="font-mono text-[var(--primary)] font-bold">{clientServerConfig.minQualityScore}/100</span>
                              </div>
                              <input 
                                type="range"
                                min="80"
                                max="98"
                                value={clientServerConfig.minQualityScore}
                                onChange={(e) => setClientServerConfig({ ...clientServerConfig, minQualityScore: parseInt(e.target.value) })}
                                className="w-full accent-[var(--primary)] cursor-pointer"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] text-zinc-400 block mb-1">Cuota Mensual de Tokens Asignada</label>
                              <span className="text-xs font-mono font-bold text-white block">
                                {(clientServerConfig.monthlyTokenQuota / 1000000).toFixed(1)}M Tokens (~50 Artículos AEO)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Botón de Sincronización en Caliente con Servidor Buildations */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--card)] to-zinc-900 border border-[var(--primary)]/40 flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Despliegue y Sincronización con Kernel Servidor Buildations
                          </h4>
                          <p className="text-xs text-zinc-400 mt-0.5">
                            Genera el daemon del cliente y actualiza el orquestador cron en el servidor en tiempo real.
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              const spec = JSON.stringify(clientServerConfig, null, 2);
                              const blob = new Blob([spec], { type: 'application/json' });
                              const url = URL.createObjectURL(blob);
                              const a = document.createElement('a');
                              a.href = url;
                              a.download = `buildations-daemon-${clientServerConfig.clientName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.json`;
                              a.click();
                              URL.revokeObjectURL(url);
                              showToast('Configuración Exportada', 'Archivo JSON de daemon listo para importación en servidor.', 'info');
                            }}
                            className="px-3.5 py-2 rounded-xl text-xs font-mono border border-[var(--border)] hover:bg-[var(--muted)] text-zinc-300 transition-colors cursor-pointer"
                          >
                            Descargar daemon.json
                          </button>

                          <button
                            onClick={() => {
                              setIsSyncingServer(true);
                              setTimeout(() => {
                                setIsSyncingServer(false);
                                setClientServerConfig(prev => ({
                                  ...prev,
                                  serverSyncStatus: 'synced',
                                  lastSyncedAt: 'Hace un instante'
                                }));
                                showToast(
                                  'Servidor Sincronizado',
                                  `Configuración de ${clientServerConfig.clientName} desplegada con éxito al Daemon de Buildations.`,
                                  'success'
                                );
                              }, 1400);
                            }}
                            disabled={isSyncingServer}
                            className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-md flex items-center gap-2"
                          >
                            {isSyncingServer ? (
                              <>
                                <ArrowPathIcon className="w-4 h-4 animate-spin" />
                                <span>Sincronizando con Servidor...</span>
                              </>
                            ) : (
                              <>
                                <CheckCircleIcon className="w-4 h-4" />
                                <span>Desplegar a Servidor Buildations ✓</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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

                      {/* Vinculación de Tabla SQL & Acceso Directo al Database Studio */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-[var(--border-te)] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#e85a2a]/10 border border-[#e85a2a]/30 flex items-center justify-center text-[#e85a2a]">
                            <CircleStackIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#e85a2a] uppercase font-bold block">
                              TABLA PGVECTOR VINCULADA: aeo_citation_vectors
                            </span>
                            <span className="text-xs text-zinc-300 font-mono">
                              Índice HNSW activo (1536 dimensiones) • 14,280 vectores sincronizados en Supabase
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setActiveTab('databaseStudio');
                            showToast('Database Studio', 'Abriendo el editor de esquemas y runner SQL...', 'info');
                          }}
                          className="te-button text-xs py-2 px-3.5 font-mono cursor-pointer flex items-center gap-1.5"
                        >
                          <span>Abrir Editor de Base de Datos ↗</span>
                        </button>
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

            {/* TAB: MOTOR DE REVOPS & CONEXIÓN HUBSPOT (TE RACK UNIT 04) */}
            {activeTab === 'revopsHubspot' && (
              <div className="space-y-6 animate-fade-in">
                {/* TE Hardware Unit Chasis */}
                <div className="te-rack-unit p-6">
                  {/* Industrial Screws in 4 Corners */}
                  <div className="absolute top-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute top-2.5 right-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 right-2.5 te-rack-screw" />

                  {/* Unit Hardware Header Bar */}
                  <div className="flex flex-wrap justify-between items-center gap-4 pb-5 border-b border-[#2a2e38]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-[#07090a] border border-[#ff7a59]/60 flex items-center justify-center text-[#ff7a59] shadow-[0_0_12px_rgba(255,122,89,0.25)]">
                        <ArrowPathRoundedSquareIcon className="w-5 h-5 text-[#ff7a59]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-[#ff7a59] tracking-widest uppercase">
                            SLOT 04 // REVOPS PIPELINE SYNTHESIZER
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 te-led-active shadow-[0_0_6px_#3ddc84]" />
                          <span className="font-mono text-[9px] text-emerald-400 font-bold">SYNC 240BPM</span>
                        </div>
                        <h2 className="text-xl font-black text-[var(--foreground)] tracking-tight font-mono">
                          HUBSPOT DEALS &amp; ATTRIBUTION RIG
                        </h2>
                      </div>
                    </div>

                    {/* Tool Universe Sub-View Switcher & Actions */}
                    <div className="flex items-center gap-2">
                      <div className="flex p-0.5 rounded bg-[#07090a] border border-[#2a2e38] font-mono text-[10px]">
                        <button
                          onClick={() => setRevopsActiveView('telemetry')}
                          className={`px-3 py-1.5 rounded font-bold uppercase transition-all cursor-pointer ${
                            revopsActiveView === 'telemetry'
                              ? 'bg-[#e85a2a] text-white shadow-sm'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Telemetría
                        </button>
                        <button
                          onClick={() => setRevopsActiveView('calibration')}
                          className={`px-3 py-1.5 rounded font-bold uppercase transition-all cursor-pointer ${
                            revopsActiveView === 'calibration'
                              ? 'bg-[#e85a2a] text-white shadow-sm'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Calibrador de Knobs
                        </button>
                        <button
                          onClick={() => setRevopsActiveView('deals')}
                          className={`px-3 py-1.5 rounded font-bold uppercase transition-all cursor-pointer ${
                            revopsActiveView === 'deals'
                              ? 'bg-[#e85a2a] text-white shadow-sm'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Ledger Deals (64B)
                        </button>
                      </div>

                      <button 
                        onClick={() => {
                          showToast('Sincronización HubSpot Forzada', 'Propiedades de contacto y pipeline de deals recalculados en 8.4ms.', 'success');
                        }}
                        className="te-button px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowPathIcon className="w-3.5 h-3.5 text-[#ff7a59]" />
                        <span>Sync Propiedades</span>
                      </button>
                    </div>
                  </div>

                  {/* SUB-VISTA 1: TELEMETRÍA Y PRESIÓN DE PIPELINE */}
                  {revopsActiveView === 'telemetry' && (
                    <div className="pt-6 space-y-6 animate-fade-in">
                      {/* Pipeline Pressure Chamber HUD */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Meter 1: MQLs */}
                        <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-3 relative overflow-hidden">
                          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                            <span className="uppercase tracking-wider">MQLS POR CONTENIDO</span>
                            <span className="text-[#3ddc84] font-bold">+24% MES</span>
                          </div>
                          <div className="flex items-baseline justify-between">
                            <span className="font-mono text-3xl font-black text-white">148</span>
                            <div className="te-segment-meter">
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-yellow" />
                              <span className="te-segment-cell active-yellow" />
                              <span className="te-segment-cell" />
                            </div>
                          </div>
                          <p className="font-mono text-[9px] text-zinc-500">Mapeados a hs_analytics_first_touch</p>
                        </div>

                        {/* Meter 2: Pipeline Atribuido */}
                        <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-3 relative overflow-hidden">
                          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                            <span className="uppercase tracking-wider">PIPELINE ACTIVO</span>
                            <span className="text-[#38bdf8] font-bold">18 DEALS</span>
                          </div>
                          <div className="flex items-baseline justify-between">
                            <span className="font-mono text-3xl font-black text-[#38bdf8]">$42,500</span>
                            <div className="te-segment-meter">
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-yellow" />
                              <span className="te-segment-cell active-orange" />
                              <span className="te-segment-cell active-orange" />
                              <span className="te-segment-cell" />
                            </div>
                          </div>
                          <p className="font-mono text-[9px] text-zinc-500">Influenciado por Silos de Contenido AEO</p>
                        </div>

                        {/* Meter 3: Ventas Cerradas Ganadas */}
                        <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-3 relative overflow-hidden">
                          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                            <span className="uppercase tracking-wider">CLOSED WON REVENUE</span>
                            <span className="text-[#3ddc84] font-bold">ROAS 8.4X</span>
                          </div>
                          <div className="flex items-baseline justify-between">
                            <span className="font-mono text-3xl font-black text-[#3ddc84]">$16,200</span>
                            <div className="te-segment-meter">
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-yellow" />
                            </div>
                          </div>
                          <p className="font-mono text-[9px] text-zinc-500">Facturación real verificada en HubSpot</p>
                        </div>

                        {/* Meter 4: Tasa Lead-to-SQL */}
                        <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-3 relative overflow-hidden">
                          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                            <span className="uppercase tracking-wider">TASA LEAD-TO-SQL</span>
                            <span className="text-[#f5a623] font-bold">TOP TIER</span>
                          </div>
                          <div className="flex items-baseline justify-between">
                            <span className="font-mono text-3xl font-black text-[#f5a623]">22.4%</span>
                            <div className="te-segment-meter">
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-green" />
                              <span className="te-segment-cell active-yellow" />
                              <span className="te-segment-cell active-yellow" />
                              <span className="te-segment-cell" />
                              <span className="te-segment-cell" />
                            </div>
                          </div>
                          <p className="font-mono text-[9px] text-zinc-500">Filtrado con Lead Scoring de IA (+15 pts)</p>
                        </div>
                      </div>

                      {/* Hardware Integration Status Display */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Columna 1 & 2: Terminal de Mapeo de Atribución */}
                        <div className="lg:col-span-2 p-5 rounded bg-[#07090a] border border-[#2a2e38] space-y-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#ff7a59] te-led-active shadow-[0_0_6px_#ff7a59]" />
                              <h3 className="font-mono text-xs font-bold uppercase text-white tracking-wider">
                                Contact Property Ingestion Pipeline
                              </h3>
                            </div>
                            <span className="font-mono text-[9px] text-zinc-400">HS OAUTH 2.0 // TLS 1.3</span>
                          </div>

                          <div className="space-y-2 font-mono text-xs">
                            <div className="p-3 rounded bg-[#101216] border border-[#222630] flex flex-wrap justify-between items-center gap-2">
                              <div>
                                <span className="font-bold text-white block">Término de Entrada AEO/SEO</span>
                                <span className="text-[10px] text-zinc-400">Palabra clave detectada por crawler</span>
                              </div>
                              <span className="text-[11px] text-[#ff7a59] bg-[#ff7a59]/10 px-2 py-0.5 rounded border border-[#ff7a59]/30">
                                → hs_analytics_first_touch_converting_campaign
                              </span>
                            </div>

                            <div className="p-3 rounded bg-[#101216] border border-[#222630] flex flex-wrap justify-between items-center gap-2">
                              <div>
                                <span className="font-bold text-white block">Silo Semántico de Conversión</span>
                                <span className="text-[10px] text-zinc-400">Topic cluster que cerró al prospecto</span>
                              </div>
                              <span className="text-[11px] text-[#ff7a59] bg-[#ff7a59]/10 px-2 py-0.5 rounded border border-[#ff7a59]/30">
                                → custom_topic_cluster_tag
                              </span>
                            </div>

                            <div className="p-3 rounded bg-[#101216] border border-[#222630] flex flex-wrap justify-between items-center gap-2">
                              <div>
                                <span className="font-bold text-white block">Lead Scoring Predictivo</span>
                                <span className="text-[10px] text-zinc-400">Calificación de intención de compra calculada</span>
                              </div>
                              <span className="text-[11px] text-[#3ddc84] bg-[#3ddc84]/10 px-2 py-0.5 rounded border border-[#3ddc84]/30">
                                → hubspot_score (+{Math.round(revopsMinLeadScore / 5)} pts)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Columna 3: Hardware LCD Display de Cuenta */}
                        <div className="te-screen p-5 space-y-4">
                          <div className="flex justify-between items-center border-b border-[#2a2e38] pb-2">
                            <span className="text-[10px] font-mono text-[#e85a2a] uppercase font-bold tracking-wider">
                              [PORTAL ID: 24981290]
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[#3ddc84] te-led-active shadow-[0_0_6px_#3ddc84]" />
                          </div>

                          <div className="space-y-2 text-xs font-mono">
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Tier:</span>
                              <span className="text-white font-bold">Marketing &amp; Sales Hub Pro</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Sincronización:</span>
                              <span className="text-[#3ddc84]">Tiempo real (0ms lag)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Workflows Activos:</span>
                              <span className="text-[#f5a623] font-bold">4 Secuencias Automáticas</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Ponderación:</span>
                              <span className="text-white font-bold">{revopsAttributionWeight}% Primer Toque</span>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-[#2a2e38]">
                            <p className="text-[10px] font-mono text-zinc-400 mb-3">
                              Trigger: Si un lead lee 2+ artículos del cluster RevOps, dispara Deal en etapa <em>"Diagnóstico Solicitado"</em>.
                            </p>
                            <button 
                              onClick={() => showToast('HubSpot CRM Apertura', 'Abriendo vista de workflows vinculados en HubSpot.', 'info')}
                              className="te-button w-full py-1.5 text-xs font-mono font-bold cursor-pointer"
                            >
                              Abrir HubSpot Portal ↗
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB-VISTA 2: CALIBRADOR TÁCTIL DE PARÁMETROS (KNOBS DE HARDWARE) */}
                  {revopsActiveView === 'calibration' && (
                    <div className="pt-6 space-y-6 animate-fade-in">
                      <div className="p-4 rounded bg-[#0a0c0e] border border-[#2a2e38]">
                        <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1">
                          Consola de Calibración de Parámetros de Atribución RevOps
                        </h3>
                        <p className="text-xs text-zinc-400">
                          Gira las perillas táctiles para afinar la sensibilidad del algoritmo de atribución y el umbral de disparo de Deals en el CRM.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Knob 1: Attribution Weighting */}
                        <div className="p-5 rounded bg-[#101216] border border-[#222630] flex flex-col items-center text-center space-y-3">
                          <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                            Ponderación de Atribución
                          </span>
                          <div 
                            className="te-knob-dial flex items-center justify-center cursor-pointer"
                            style={{ transform: `rotate(${(revopsAttributionWeight - 50) * 2.8}deg)` }}
                            onClick={() => {
                              const next = revopsAttributionWeight >= 90 ? 40 : revopsAttributionWeight + 15;
                              setRevopsAttributionWeight(next);
                            }}
                            title="Haz clic para rotar perilla de ponderación"
                          >
                            <div className="te-knob-notch" />
                          </div>
                          <div className="font-mono text-lg font-black text-[#e85a2a]">
                            {revopsAttributionWeight}% / {100 - revopsAttributionWeight}%
                          </div>
                          <p className="text-[10px] font-mono text-zinc-500">
                            Primer Toque vs Multi-Touch
                          </p>
                        </div>

                        {/* Knob 2: Lead Scoring Trigger */}
                        <div className="p-5 rounded bg-[#101216] border border-[#222630] flex flex-col items-center text-center space-y-3">
                          <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                            Umbral Lead Scoring (MQL)
                          </span>
                          <div 
                            className="te-knob-dial flex items-center justify-center cursor-pointer"
                            style={{ transform: `rotate(${(revopsMinLeadScore - 60) * 3.5}deg)` }}
                            onClick={() => {
                              const next = revopsMinLeadScore >= 95 ? 65 : revopsMinLeadScore + 10;
                              setRevopsMinLeadScore(next);
                            }}
                            title="Haz clic para rotar perilla de puntuación mínima"
                          >
                            <div className="te-knob-notch" />
                          </div>
                          <div className="font-mono text-lg font-black text-[#3ddc84]">
                            {revopsMinLeadScore} Pts
                          </div>
                          <p className="text-[10px] font-mono text-zinc-500">
                            Puntuación mínima para alertar a SDRs
                          </p>
                        </div>

                        {/* Knob 3: Deal Threshold */}
                        <div className="p-5 rounded bg-[#101216] border border-[#222630] flex flex-col items-center text-center space-y-3">
                          <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                            Disparo Automático de Deal
                          </span>
                          <div 
                            className="te-knob-dial flex items-center justify-center cursor-pointer"
                            style={{ transform: `rotate(${(revopsAutoDealThreshold / 1000) * 20}deg)` }}
                            onClick={() => {
                              const next = revopsAutoDealThreshold >= 8000 ? 2500 : revopsAutoDealThreshold + 1500;
                              setRevopsAutoDealThreshold(next);
                            }}
                            title="Haz clic para rotar perilla de monto mínimo"
                          >
                            <div className="te-knob-notch" />
                          </div>
                          <div className="font-mono text-lg font-black text-[#f5a623]">
                            ${revopsAutoDealThreshold.toLocaleString()} USD
                          </div>
                          <p className="text-[10px] font-mono text-zinc-500">
                            Monto estimado para crear negocio directo
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB-VISTA 3: FINANCIAL DEALS LEDGER (STREAM DE 64-BIT) */}
                  {revopsActiveView === 'deals' && (
                    <div className="pt-6 space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center px-1 font-mono text-xs">
                        <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#3ddc84] te-led-active" />
                          Deals Ledger Transaccional (HubSpot Multi-Touch Attribution)
                        </span>
                        <span className="text-zinc-500 text-[10px]">TOTAL CERRADO: $35,200 USD</span>
                      </div>

                      <div className="overflow-x-auto rounded bg-[#07090a] border border-[#2a2e38]">
                        <table className="w-full text-left font-mono text-xs">
                          <thead className="bg-[#101216] text-zinc-400 border-b border-[#2a2e38]">
                            <tr>
                              <th className="px-4 py-3 font-bold uppercase text-[10px]">ID Deal HubSpot</th>
                              <th className="px-4 py-3 font-bold uppercase text-[10px]">Empresa</th>
                              <th className="px-4 py-3 font-bold uppercase text-[10px]">Artículo Convertidor</th>
                              <th className="px-4 py-3 font-bold uppercase text-[10px]">Monto</th>
                              <th className="px-4 py-3 font-bold uppercase text-[10px] text-right">Etapa Actual</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#1e222a]">
                            {[
                              { id: "DEAL-8491", deal: "Implementación CRM Enterprise", company: "FinTech MX", article: "/blog/kpis-content-marketing", amount: "$8,500 USD", stage: "Closed Won" },
                              { id: "DEAL-8492", deal: "Auditoría RevOps Trimestral", company: "Logística Global", article: "/guia-marketing-contenidos-b2b", amount: "$3,200 USD", stage: "Closed Won" },
                              { id: "DEAL-8493", deal: "Suscripción Agencia Pro", company: "SaaS Analytics", article: "/blog/calendario-editorial-b2b", amount: "$4,500 USD", stage: "Closed Won" },
                              { id: "DEAL-8494", deal: "Consultoría de AEO para ChatGPT", company: "Tech Retail", article: "/blog/herramientas-ia-redaccion-b2b", amount: "$6,000 USD", stage: "En Negociación" },
                              { id: "DEAL-8495", deal: "Contrato Anual RAG & Embeddings", company: "BioMed Latam", article: "/blog/arquitectura-aeo-2026", amount: "$12,000 USD", stage: "Propuesta Enviada" }
                            ].map((row, i) => (
                              <tr key={i} className="hover:bg-[#151820] transition-colors">
                                <td className="px-4 py-3 font-bold text-white">
                                  <span className="text-[10px] text-[#ff7a59] font-mono mr-2">{row.id}</span>
                                  {row.deal}
                                </td>
                                <td className="px-4 py-3 text-zinc-300">{row.company}</td>
                                <td className="px-4 py-3 text-[#e85a2a]">{row.article}</td>
                                <td className="px-4 py-3 font-bold text-[#3ddc84]">{row.amount}</td>
                                <td className="px-4 py-3 text-right">
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                                    row.stage.includes('Won') 
                                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                                  }`}>
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

                </div>
              </div>
            )}

            {/* TAB: CONECTORES CMS OFICIALES (TE PATCH BAY UNIT 05) */}
            {activeTab === 'cmsConnectors' && (
              <div className="space-y-6 animate-fade-in">
                {/* TE Hardware Unit Chasis */}
                <div className="te-rack-unit p-6">
                  {/* Industrial Screws */}
                  <div className="absolute top-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute top-2.5 right-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 right-2.5 te-rack-screw" />

                  {/* Header de Hardware */}
                  <div className="flex flex-wrap justify-between items-center gap-4 pb-5 border-b border-[#2a2e38]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-[#07090a] border border-cyan-500/60 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.25)]">
                        <ServerStackIcon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-cyan-400 tracking-widest uppercase">
                            SLOT 05 // MULTI-CMS AUDIO-PATCH DISPATCH RIG
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 te-led-active shadow-[0_0_6px_#38bdf8]" />
                          <span className="font-mono text-[9px] text-cyan-400 font-bold">REST &amp; GRAPHQL</span>
                        </div>
                        <h2 className="text-xl font-black text-[var(--foreground)] tracking-tight font-mono">
                          CMS CONNECTOR &amp; DISPATCH BAY
                        </h2>
                      </div>
                    </div>

                    {/* Selector de CMS (Payload vs WordPress) en estilo Hardware */}
                    <div className="flex items-center gap-2">
                      <div className="flex p-0.5 rounded bg-[#07090a] border border-[#2a2e38] font-mono text-[10px]">
                        <button 
                          onClick={() => setCmsTab('payload')}
                          className={`px-3 py-1.5 rounded font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
                            cmsTab === 'payload'
                              ? 'bg-cyan-500 text-black font-black shadow-sm' 
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          <PayloadLogo className="w-3.5 h-3.5 shrink-0" />
                          <span>Payload 3.x Headless</span>
                        </button>
                        <button 
                          onClick={() => setCmsTab('wordpress')}
                          className={`px-3 py-1.5 rounded font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
                            cmsTab === 'wordpress'
                              ? 'bg-blue-500 text-white font-black shadow-sm' 
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          <WordPressLogo className="w-3.5 h-3.5 shrink-0" />
                          <span>WordPress REST Hub</span>
                        </button>
                      </div>

                      <button 
                        onClick={() => {
                          setCmsPatchConnected(!cmsPatchConnected);
                          showToast(
                            cmsPatchConnected ? 'Jack Desconectado' : 'Jack Conectado (Patch Bay)',
                            cmsPatchConnected ? 'El motor no despachará borradores automáticos.' : 'Cables de parcheo virtuales vinculados al API.',
                            cmsPatchConnected ? 'info' : 'success'
                          );
                        }}
                        className={`te-button px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer ${
                          cmsPatchConnected ? 'text-[#3ddc84]' : 'text-zinc-500'
                        }`}
                      >
                        <div className={`te-jack-socket ${cmsPatchConnected ? 'connected' : ''}`}>
                          <div className="te-jack-hole" />
                        </div>
                        <span>{cmsPatchConnected ? 'PATCH: ARMED' : 'PATCH: MUTED'}</span>
                      </button>
                    </div>
                  </div>

                  {/* VIRTUAL PATCH BAY GRAPHIC (CONEXIÓN FÍSICA SIMULADA) */}
                  <div className="p-4 my-6 rounded bg-[#07090a] border border-[#2a2e38] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="te-jack-socket connected"><div className="te-jack-hole" /></div>
                        <span className="text-zinc-400 text-[10px]">AEO ENGINE OUT</span>
                      </div>
                      <span className="text-[#e85a2a] font-bold">═══════════════►</span>
                      <div className="flex items-center gap-2">
                        <div className={`te-jack-socket ${cmsPatchConnected ? 'connected' : ''}`}><div className="te-jack-hole" /></div>
                        <span className="text-cyan-400 font-bold text-[10px]">
                          {cmsTab === 'payload' ? 'PAYLOAD REST /posts' : 'WP REST /wp-json'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-[10px]">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400">DESPACHO:</span>
                        <div className="flex bg-[#14161b] rounded border border-[#2a2e38] p-0.5">
                          {(['draft-review', 'canary-10', 'instant-publish'] as const).map((m) => (
                            <button
                              key={m}
                              onClick={() => setCmsDispatchMode(m)}
                              className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase transition-all cursor-pointer ${
                                cmsDispatchMode === m ? 'bg-[#e85a2a] text-white' : 'text-zinc-400 hover:text-white'
                              }`}
                            >
                              {m === 'draft-review' ? 'Draft' : m === 'canary-10' ? 'Canary 10%' : 'Instant'}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <input
                          type="checkbox"
                          id="autoSchema"
                          checked={cmsAutoInjectJsonLd}
                          onChange={(e) => setCmsAutoInjectJsonLd(e.target.checked)}
                          className="rounded border-[#2a2e38] text-[#e85a2a] cursor-pointer"
                        />
                        <label htmlFor="autoSchema" className="text-zinc-300 text-[10px] cursor-pointer">
                          Schema JSON-LD Auto
                        </label>
                      </div>
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

                {/* TE 64-BIT FREQUENCY SPECTROGRAM & CITATION OSCILLOSCOPE */}
                <div className="te-rack-unit p-6">
                  {/* Industrial Screws */}
                  <div className="absolute top-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute top-2.5 right-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 right-2.5 te-rack-screw" />

                  <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b border-[#2a2e38]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-bold text-[#e85a2a] uppercase tracking-widest">
                        AEO FREQUENCY ANALYZER // 64-BIT OSCILLOSCOPE
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] te-led-active shadow-[0_0_6px_#3ddc84]" />
                      <span className="font-mono text-[9px] text-[#3ddc84] font-bold">SPECTRUM LIVE</span>
                    </div>

                    {/* Mini Spectrum Audio Bar Array */}
                    <div className="flex items-end gap-1.5 h-6 px-3 py-1 rounded bg-[#07090a] border border-[#2a2e38]">
                      {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85, 60, 50].map((h, i) => (
                        <span 
                          key={i} 
                          className="te-spectrum-bar" 
                          style={{ 
                            height: `${h}%`,
                            animationDelay: `${i * 0.1}s`,
                            backgroundColor: i % 3 === 0 ? '#e85a2a' : i % 3 === 1 ? '#3ddc84' : '#38bdf8'
                          }} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* 4 Motor Synthesizer Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    {/* Block 1 */}
                    <div className="p-4 rounded bg-[#07090a] border border-[#2a2e38] space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                        <span className="uppercase tracking-wider">AEO SHARE OF VOICE</span>
                        <span className="text-[#3ddc84] font-bold">#1 LÍDER</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-3xl font-black text-[#e85a2a]">42.8%</span>
                        <div className="te-segment-meter">
                          <span className="te-segment-cell active-green" />
                          <span className="te-segment-cell active-green" />
                          <span className="te-segment-cell active-yellow" />
                          <span className="te-segment-cell active-orange" />
                        </div>
                      </div>
                      <p className="font-mono text-[9px] text-zinc-500">Superando a AcmeCorp (28.4%)</p>
                    </div>

                    {/* Block 2 */}
                    <div className="p-4 rounded bg-[#07090a] border border-[#2a2e38] space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                        <span className="uppercase tracking-wider">PERPLEXITY PRO</span>
                        <span className="text-cyan-400 font-bold">17/25 CITAS</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-3xl font-black text-cyan-400">68%</span>
                        <div className="te-segment-meter">
                          <span className="te-segment-cell active-green" />
                          <span className="te-segment-cell active-green" />
                          <span className="te-segment-cell active-green" />
                          <span className="te-segment-cell active-green" />
                        </div>
                      </div>
                      <p className="font-mono text-[9px] text-zinc-500">Citado como fuente principal</p>
                    </div>

                    {/* Block 3 */}
                    <div className="p-4 rounded bg-[#07090a] border border-[#2a2e38] space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                        <span className="uppercase tracking-wider">CHATGPT (SEARCH)</span>
                        <span className="text-[#3ddc84] font-bold">9/25 CITAS</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-3xl font-black text-[#3ddc84]">36%</span>
                        <div className="te-segment-meter">
                          <span className="te-segment-cell active-green" />
                          <span className="te-segment-cell active-green" />
                          <span className="te-segment-cell active-yellow" />
                          <span className="te-segment-cell" />
                        </div>
                      </div>
                      <p className="font-mono text-[9px] text-zinc-500">Menciones en comparativas B2B</p>
                    </div>

                    {/* Block 4 */}
                    <div className="p-4 rounded bg-[#07090a] border border-[#2a2e38] space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                        <span className="uppercase tracking-wider">CLAUDE 3.5 SONNET</span>
                        <span className="text-[#f5a623] font-bold">6/25 CITAS</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-3xl font-black text-[#f5a623]">24%</span>
                        <div className="te-segment-meter">
                          <span className="te-segment-cell active-green" />
                          <span className="te-segment-cell active-yellow" />
                          <span className="te-segment-cell" />
                          <span className="te-segment-cell" />
                        </div>
                      </div>
                      <p className="font-mono text-[9px] text-zinc-500">Oportunidad de optimización</p>
                    </div>
                  </div>

                  {/* Comparativa Sintética Tú vs Competidores */}
                  <div className="mt-6 p-4 rounded bg-[#07090a] border border-[#2a2e38] space-y-3 font-mono text-xs">
                    <span className="font-bold text-white uppercase tracking-wider block text-[10px]">
                      Presencia Espectral de Marca en LLMs (Tú vs Rivales)
                    </span>
                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-bold text-[#e85a2a]">Tu Marca (soyroman.com / Buildations)</span>
                          <span className="font-bold text-white">42.8%</span>
                        </div>
                        <div className="w-full bg-[#14161b] rounded h-2 overflow-hidden border border-[#2a2e38]">
                          <div className="bg-[#e85a2a] h-2 rounded shadow-[0_0_8px_#e85a2a]" style={{ width: '42.8%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-zinc-400">AcmeCorp</span>
                          <span className="text-zinc-500">28.4%</span>
                        </div>
                        <div className="w-full bg-[#14161b] rounded h-2 overflow-hidden border border-[#2a2e38]">
                          <div className="bg-zinc-600 h-2 rounded" style={{ width: '28.4%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-zinc-400">GlobalTech Latam</span>
                          <span className="text-zinc-500">16.1%</span>
                        </div>
                        <div className="w-full bg-[#14161b] rounded h-2 overflow-hidden border border-[#2a2e38]">
                          <div className="bg-zinc-600 h-2 rounded" style={{ width: '16.1%' }} />
                        </div>
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

                {/* SIMULADOR EN VIVO DE MOTOR AEO CON AUDITORÍA VECTORIAL Y RADAR 64-BIT */}
                <div className="te-frame p-6 rounded-2xl border border-[var(--border-te)] bg-[#07090a] text-zinc-200 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-te)] pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#e85a2a] te-led-active"></span>
                        <span className="te-label text-[#e85a2a]">
                          SIMULADOR DINÁMICO // AUDITORÍA DE CITABILIDAD EN TIEMPO REAL
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-mono tracking-tight text-white mt-1">
                        Consola de Inferencia AEO: Inyectar Consulta en Motores de Respuesta
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Prueba en caliente cómo respondería Perplexity Pro, ChatGPT Search o Claude a una intención de compra con tus fragmentos de vectores activos.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Motor IA:</span>
                      {(['Perplexity', 'ChatGPT', 'Claude', 'Gemini'] as const).map((eng) => (
                        <button
                          key={eng}
                          onClick={() => setAeoSimulatorEngine(eng)}
                          className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all border cursor-pointer ${
                            aeoSimulatorEngine === eng
                              ? 'bg-[#e85a2a] text-white border-[#e85a2a] shadow-sm'
                              : 'border-[var(--border-te)] bg-[#121418] text-zinc-400 hover:border-zinc-500'
                          }`}
                        >
                          {eng}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input de Consulta y Botón de Ejecución Táctil */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative flex-1 w-full">
                      <input 
                        type="text"
                        value={aeoTestQuery}
                        onChange={(e) => setAeoTestQuery(e.target.value)}
                        placeholder="Introduce el prompt o intención de búsqueda..."
                        className="w-full bg-[#0e1116] border border-[var(--border-te)] rounded-xl px-4 py-2.5 text-xs text-white font-mono placeholder-zinc-600 focus:outline-none focus:border-[#e85a2a]"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-500">
                        1536-DIM SIMILARITY
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setIsSimulatingAeo(true);
                        setTimeout(() => {
                          setIsSimulatingAeo(false);
                          setAeoSimulationResult({
                            cited: true,
                            rankPosition: aeoSimulatorEngine === 'Perplexity' ? 1 : 2,
                            answerSnippet: `De acuerdo con la base de conocimiento y los silos indexados de ${accountSettings.agencyName}, ${aeoSimulatorEngine} identificó a la marca como la autoridad primaria para "${aeoTestQuery}", citando 3 fragmentos con un índice de confianza del 97.2%.`,
                            sourcesList: ['https://soyroman.com/aeo-optimizacion', 'https://buildations.studio/revops', 'https://consenso.io/docs'],
                            confidenceScore: 97.2,
                            citationVectorId: `vec_${Math.floor(10000 + Math.random() * 90000)}`
                          });
                          showToast('Simulación AEO Completada', `Consulta evaluada con éxito en ${aeoSimulatorEngine}. Citado en Posición #1.`, 'success');
                        }, 1200);
                      }}
                      disabled={isSimulatingAeo}
                      className="te-button-primary px-5 py-2.5 text-xs flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center shrink-0"
                    >
                      {isSimulatingAeo ? (
                        <>
                          <ArrowPathIcon className="w-4 h-4 animate-spin" />
                          <span>Calculando Tensores...</span>
                        </>
                      ) : (
                        <>
                          <PlayIcon className="w-4 h-4" />
                          <span>Lanzar Simulación Inferencia</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Resultados del Test AEO con Display TE Hardware */}
                  {aeoSimulationResult && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                      {/* Columna Izquierda: Pantalla LCD de Respuesta Generada */}
                      <div className="lg:col-span-2 te-screen p-5 rounded-xl border border-[var(--border-te)] space-y-3">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                          <span className="text-[10px] font-mono font-bold text-zinc-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#3ddc84] te-led-active"></span>
                            <span>RESPUESTA SINTÉTICA GENERADA // {aeoSimulatorEngine.toUpperCase()}</span>
                          </span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#3ddc84]/10 text-[#3ddc84] border border-[#3ddc84]/30 font-bold">
                            FUENTE #1 CITADA CON ÉXITO
                          </span>
                        </div>

                        <p className="text-xs font-mono text-zinc-200 leading-relaxed">
                          «{aeoSimulationResult.answerSnippet}»
                        </p>

                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Fuentes Respaldadas:</span>
                          {aeoSimulationResult.sourcesList.map((src, i) => (
                            <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[#38bdf8]">
                              [{i + 1}] {src}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Columna Derecha: Indicador de Confianza & Tensor 64-bit */}
                      <div className="p-4 rounded-xl bg-[#121418] border border-[var(--border-te)] space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="te-label text-zinc-400">TELEMETRÍA VECTORIAL</span>
                          <div className="flex items-baseline justify-between">
                            <span className="text-3xl font-mono font-black text-[#3ddc84]">
                              {aeoSimulationResult.confidenceScore}%
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">SCORE AEO</span>
                          </div>
                          
                          {/* Barra de progreso LED */}
                          <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                            <div 
                              className="bg-gradient-to-r from-[#e85a2a] via-[#f5a623] to-[#3ddc84] h-full rounded-full"
                              style={{ width: `${aeoSimulationResult.confidenceScore}%` }}
                            ></div>
                          </div>

                          <div className="text-[10px] font-mono text-zinc-400 space-y-1 pt-1">
                            <div className="flex justify-between">
                              <span>Vector Ref:</span>
                              <span className="text-white">{aeoSimulationResult.citationVectorId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Index Store:</span>
                              <span className="text-emerald-400">pgvector (HNSW)</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Distancia Coseno:</span>
                              <span className="text-[#e85a2a]">0.028 (Muy Cercana)</span>
                            </div>
                          </div>
                        </div>

                        <button 
                          onClick={() => {
                            setActiveTab('databaseStudio');
                            showToast('Inspeccionar Vector', `Saltando a la tabla aeo_citation_vectors con el id ${aeoSimulationResult.citationVectorId}`, 'info');
                          }}
                          className="te-button w-full py-1.5 text-xs text-center font-mono cursor-pointer"
                        >
                          Inspeccionar en DB Studio ➔
                        </button>
                      </div>
                    </div>
                  )}
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

            {/* CONTENT DECAY (GSC) TAB - TE RADAR SCOPE RIG (SLOT 08) */}
            {activeTab === 'contentDecay' && (
              <div className="space-y-6 animate-fade-in">
                {/* TE Hardware Unit Chasis */}
                <div className="te-rack-unit p-6">
                  {/* Industrial Screws */}
                  <div className="absolute top-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute top-2.5 right-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 left-2.5 te-rack-screw" />
                  <div className="absolute bottom-2.5 right-2.5 te-rack-screw" />

                  {/* Header de Hardware */}
                  <div className="flex flex-wrap justify-between items-center gap-4 pb-5 border-b border-[#2a2e38]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-[#07090a] border border-red-500/60 flex items-center justify-center text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.25)]">
                        <ChartBarIcon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-red-400 tracking-widest uppercase">
                            SLOT 08 // GSC CONTENT DECAY RADAR SCOPE
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping shadow-[0_0_6px_#ef4444]" />
                          <span className="font-mono text-[9px] text-red-400 font-bold">RADAR SWEEP ACTIVE</span>
                        </div>
                        <h2 className="text-xl font-black text-[var(--foreground)] tracking-tight font-mono">
                          SEARCH CONSOLE DECAY &amp; CANNIBALIZATION SWEEP
                        </h2>
                      </div>
                    </div>

                    {/* Filtros de Radar y Acciones */}
                    <div className="flex items-center gap-2">
                      <div className="flex p-0.5 rounded bg-[#07090a] border border-[#2a2e38] font-mono text-[10px]">
                        {(['all', 'critical', 'quickwin'] as const).map((flt) => (
                          <button
                            key={flt}
                            onClick={() => setDecayRadarFilter(flt)}
                            className={`px-3 py-1.5 rounded font-bold uppercase transition-all cursor-pointer ${
                              decayRadarFilter === flt
                                ? 'bg-[#e85a2a] text-white shadow-sm'
                                : 'text-zinc-400 hover:text-white'
                            }`}
                          >
                            {flt === 'all' ? 'Todas' : flt === 'critical' ? 'Críticas (-20%+)' : 'Quick Wins (11-20)'}
                          </button>
                        ))}
                      </div>

                      <button 
                        onClick={() => {
                          showToast('Escaneo GSC Completado', 'Auditoría de decaimiento actualizada: 14 URLs requieren refresco de contenido.', 'info');
                        }}
                        className="te-button px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowPathIcon className="w-3.5 h-3.5 text-red-400" />
                        <span>Sondeo GSC en Vivo</span>
                      </button>
                    </div>
                  </div>

                  {/* RADAR SWEEP INTERACTIVE CONSOLE */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
                    {/* Visualizador de Radar Militar / Sweep 360° */}
                    <div className="p-5 rounded bg-[#07090a] border border-[#2a2e38] flex flex-col items-center justify-center space-y-4 relative overflow-hidden">
                      <div className="flex justify-between w-full items-center text-[10px] font-mono text-zinc-400 border-b border-[#1e222a] pb-2">
                        <span className="text-red-400 font-bold uppercase tracking-wider">RADAR 360° SWEEP</span>
                        <span>FREQ: 14.8 KHZ</span>
                      </div>

                      {/* Radar Scope */}
                      <div className="te-radar-scope flex items-center justify-center relative my-2">
                        <div className="te-radar-sweep-line" />
                        {/* Radar Target Blips */}
                        <div className="absolute top-[28%] left-[32%] w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shadow-[0_0_8px_#ef4444]" title="/blog/que-es-el-marketing (-36%)" />
                        <div className="absolute top-[60%] left-[70%] w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#f5a623]" title="/servicios/seo-local (-19%)" />
                        <div className="absolute bottom-[25%] left-[25%] w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" title="/blog/tendencias-2023 (-78%)" />
                        <div className="absolute top-[35%] right-[20%] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#3ddc84]" title="Quick win #14" />
                        <div className="w-2 h-2 rounded-full bg-white z-10" />
                      </div>

                      <div className="flex justify-between w-full text-[9px] font-mono text-zinc-500 pt-2 border-t border-[#1e222a]">
                        <span className="text-red-400 font-bold">🔴 14 Muriendo</span>
                        <span className="text-amber-400 font-bold">🟡 3 Canibalizadas</span>
                        <span className="text-[#3ddc84] font-bold">🟢 28 Quick Wins</span>
                      </div>
                    </div>

                    {/* Resumen de Presión de Tráfico Perdido */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-2">
                        <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider block">
                          Páginas Muriendo
                        </span>
                        <div className="flex items-baseline justify-between">
                          <span className="font-mono text-3xl font-black text-white">14</span>
                          <span className="text-[10px] font-mono font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                            -20% Tráfico
                          </span>
                        </div>
                        <p className="text-[10px] font-mono text-zinc-500">Pérdida pasiva continua detectada en los últimos 90 días</p>
                      </div>

                      <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-2">
                        <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                          Canibalización
                        </span>
                        <div className="flex items-baseline justify-between">
                          <span className="font-mono text-3xl font-black text-[#f5a623]">3</span>
                          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                            Clusters
                          </span>
                        </div>
                        <p className="text-[10px] font-mono text-zinc-500">URLs compitiendo entre sí por la misma intención de búsqueda</p>
                      </div>

                      <div className="p-4 rounded bg-[#0c0e12] border border-[#2a2e38] space-y-2">
                        <span className="text-[10px] font-mono font-bold text-[#3ddc84] uppercase tracking-wider block">
                          Oportunidades Quick Win
                        </span>
                        <div className="flex items-baseline justify-between">
                          <span className="font-mono text-3xl font-black text-[#3ddc84]">28</span>
                          <span className="text-[10px] font-mono font-bold text-[#3ddc84] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                            Pos. 11-20
                          </span>
                        </div>
                        <p className="text-[10px] font-mono text-zinc-500">Contenido a punto de entrar a primera página con leve refresco</p>
                      </div>
                    </div>
                  </div>

                  {/* TABLA DE AUDITORÍA DE DECAIMIENTO ESTILO TERMINAL 64-BIT */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center px-1">
                      <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 te-led-active" />
                        URLs con Alerta de Pérdida de Tráfico Orgánico
                      </span>
                      <span className="text-zinc-500 text-[10px]">COMPARATIVA: ÚLTIMOS 90 DÍAS VS PREVIO</span>
                    </div>

                    <div className="overflow-x-auto rounded bg-[#07090a] border border-[#2a2e38]">
                      <table className="w-full text-left font-mono text-xs">
                        <thead className="bg-[#101216] text-zinc-400 border-b border-[#2a2e38]">
                          <tr>
                            <th className="px-4 py-3 font-bold uppercase text-[10px]">URL Afectada</th>
                            <th className="px-4 py-3 font-bold uppercase text-[10px]">Tráfico Mes Anterior</th>
                            <th className="px-4 py-3 font-bold uppercase text-[10px]">Tráfico Actual</th>
                            <th className="px-4 py-3 font-bold uppercase text-[10px]">Pérdida</th>
                            <th className="px-4 py-3 font-bold uppercase text-[10px] text-right">Acción de Refresco IA</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1e222a]">
                          {[
                            { url: "/blog/que-es-el-marketing", old: "14,500", new: "9,200", loss: "-36%", status: "Crítica" },
                            { url: "/servicios/seo-local", old: "8,100", new: "6,500", loss: "-19%", status: "Alerta" },
                            { url: "/blog/tendencias-2023", old: "5,200", new: "1,100", loss: "-78%", status: "Obsoleta" },
                            { url: "/guias/herramientas-copywriting", old: "9,800", new: "7,300", loss: "-25%", status: "Crítica" }
                          ].map((row, i) => (
                            <tr 
                              key={i} 
                              className={`hover:bg-[#151820] transition-colors cursor-pointer ${decaySelectedUrl === row.url ? 'bg-[#181b24]' : ''}`}
                              onClick={() => setDecaySelectedUrl(row.url)}
                            >
                              <td className="px-4 py-3 font-bold text-white flex items-center gap-2">
                                <span className="text-[10px] text-red-400">●</span>
                                <span>{row.url}</span>
                              </td>
                              <td className="px-4 py-3 text-zinc-400">{row.old}</td>
                              <td className="px-4 py-3 text-white font-bold">{row.new}</td>
                              <td className="px-4 py-3 font-bold text-red-500">{row.loss}</td>
                              <td className="px-4 py-3 text-right">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    showToast('Regeneración Asistida Disparada', `Agente Vera reescribirá y actualizará ${row.url} en Payload/WP.`, 'success');
                                  }}
                                  className="te-button px-3 py-1 text-[11px] font-bold text-[#e85a2a] hover:bg-[#e85a2a] hover:text-white transition-all cursor-pointer"
                                >
                                  Reescribir con IA ⚡
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                    {/* Switch Modo Cómic Historieta vs Modo Técnico Clásico */}
                    <div className="flex items-center p-1 rounded-xl bg-black border-2 border-black dark:border-white shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#e85a2a]">
                      <button
                        onClick={() => setDocDisplayMode('comic')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          docDisplayMode === 'comic'
                            ? 'bg-[#ffffff] text-black font-extrabold shadow-sm'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                        title="Modo Historieta Gráfica B&N: Historia de la marca y desarrollo"
                      >
                        <span className="text-sm">💬</span>
                        <span className="uppercase tracking-wider">HISTORIETA B&amp;N</span>
                      </button>
                      <button
                        onClick={() => setDocDisplayMode('classic')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          docDisplayMode === 'classic'
                            ? 'bg-[var(--primary)] text-white shadow-sm'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                        title="Modo Manual Técnico Tradicional"
                      >
                        <span className="text-sm">📄</span>
                        <span className="uppercase tracking-wider">MANUAL PRO</span>
                      </button>
                    </div>

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
                      Descargar (.MD)
                    </button>
                    <button 
                      onClick={() => setActiveTab('engineBuilder')}
                      className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      <RocketLaunchIcon className="w-4 h-4" />
                      Constructor
                    </button>
                  </div>
                </div>

                {/* MODO HISTORIETA GRÁFICA B&N // LA HISTORIA DE LA MARCA & DESARROLLO */}
                {docDisplayMode === 'comic' && (
                  <div className="space-y-8 animate-fade-in">
                    {/* Banner de Cabecera Estilo Cómic Clásico */}
                    <div className="comic-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden bg-white text-black">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="comic-caption-box text-xs">
                              BUILDATIONS COMICS // N.º 01
                            </span>
                            <span className="comic-onomatopoeia text-sm text-red-600 dark:text-[#e85a2a]">
                              *¡CLIC-CLIC!*
                            </span>
                            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-zinc-500">
                              EDICIÓN ESPECIAL EN BLANCO Y NEGRO
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-4xl font-black tracking-tight uppercase font-mono leading-none">
                            CÓMO NACE STUDIO 2.0: DE LA API SECRETA AL IMPACTO REVOPS
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-zinc-700 max-w-2xl leading-relaxed">
                            Una crónica interactiva en viñetas: el equipo de Dev picando código nocturno, Marketing bautizando el lanzamiento como <em>Studio 2.0</em> y RevOps cosechando clientes con IA citada en Perplexity. <strong>Haz clic en cualquier globo de diálogo para abrir la especificación técnica en detalle y su código de integración.</strong>
                          </p>
                        </div>

                        {/* Indicador de ayuda táctil */}
                        <div className="border-2 border-black p-3 bg-zinc-100 flex items-center gap-3 shrink-0 shadow-[4px_4px_0px_#000000]">
                          <div className="w-10 h-10 border-2 border-black bg-white rounded-full flex items-center justify-center text-lg font-black animate-bounce">
                            💬
                          </div>
                          <div className="text-[10px] font-mono font-bold leading-tight">
                            <span className="block text-black">INTERACCIÓN:</span>
                            <span className="text-zinc-600">Presiona los globos para</span>
                            <span className="text-[#e85a2a] block">inspeccionar código</span>
                          </div>
                        </div>
                      </div>

                      {/* Selector de Capítulos de la Historieta */}
                      <div className="mt-6 pt-4 border-t-2 border-black flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-black uppercase text-zinc-600 mr-2">Capítulos:</span>
                        {[
                          { id: 'all', label: 'Toda la Historieta (5 Capítulos)' },
                          { id: 'chapter1', label: 'Cap. 1 // La API Secreta (Dev)' },
                          { id: 'chapter2', label: 'Cap. 2 // Marketing lo Llama 2.0' },
                          { id: 'chapter3', label: 'Cap. 3 // El Conector CMS Handshake' },
                          { id: 'chapter4', label: 'Cap. 4 // El Cerebro Vectorial RAG' },
                          { id: 'chapter5', label: 'Cap. 5 // RevOps & Los Clientes Felices' },
                        ].map((ch) => (
                          <button
                            key={ch.id}
                            onClick={() => setActiveComicChapter(ch.id as any)}
                            className={`px-3 py-1.5 text-[11px] font-mono font-bold transition-all border-2 border-black cursor-pointer ${
                              activeComicChapter === ch.id
                                ? 'bg-black text-white shadow-[2px_2px_0px_#e85a2a]'
                                : 'bg-white text-black hover:bg-zinc-100'
                            }`}
                          >
                            {ch.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* GRILLA DE VIÑETAS DE LA HISTORIETA */}
                    <div className="space-y-8">

                      {/* CAPÍTULO 1: EL DEPARTAMENTO DE DESARROLLO FORJANDO LA API & TOKEN */}
                      {(activeComicChapter === 'all' || activeComicChapter === 'chapter1') && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="comic-caption-box text-xs">
                              CAPÍTULO 1: 03:42 AM EN EL LABORATORIO DE DESARROLLO
                            </span>
                            <div className="h-0.5 bg-black dark:bg-white flex-1"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {/* Panel 1.1: El Dev Líder picando el Token */}
                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #01 // Terminal</span>
                                  <span className="comic-onomatopoeia text-xs text-black dark:text-white">*TAP-TAP-TAP*</span>
                                </div>

                                {/* Ilustración Cómic SVG B&W: Desarrollador frente a múltiples monitores */}
                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Monitores */}
                                    <rect x="20" y="15" width="60" height="45" rx="2" fill="white" />
                                    <line x1="50" y1="60" x2="50" y2="72" strokeWidth="3" />
                                    <line x1="35" y1="72" x2="65" y2="72" strokeWidth="3" />
                                    <path d="M25 25h50M25 33h35M25 41h45" strokeWidth="1.5" strokeDasharray="3 2" />
                                    
                                    <rect x="90" y="20" width="70" height="40" rx="2" fill="white" />
                                    <path d="M95 28h60M95 36h40M95 44h50" strokeWidth="1.5" strokeDasharray="3 2" />

                                    {/* Taza de café echando humo */}
                                    <rect x="170" y="55" width="16" height="18" rx="2" fill="white" />
                                    <path d="M186 60c4 0 6 3 6 6s-2 6-6 6" strokeWidth="2" />
                                    <path d="M174 48c2-4-2-6 0-10M180 50c2-4-2-6 0-10" strokeWidth="1" />

                                    {/* Teclado */}
                                    <rect x="50" y="78" width="90" height="12" rx="2" fill="white" />
                                  </svg>
                                  <div className="absolute top-2 right-2 font-mono text-[9px] bg-black text-white px-1.5 py-0.5 font-bold">
                                    V2.4-KERNEL
                                  </div>
                                </div>

                                {/* Globo de Diálogo Interactivo */}
                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 1: Desarrollo de la API',
                                    speaker: 'Álex // Lead Systems Architect',
                                    role: 'Departamento de Ingeniería & Core',
                                    title: 'Autenticación mediante Bearer Tokens & Handshake 64-bit',
                                    quote: '«Si no encapsulamos los tokens de sesión con hash SHA-256 en el Header Authorization, los motores van a colapsar cuando generen 50 piezas por minuto... ¡Listo el Bearer token!»',
                                    technicalDeepDive: 'El subsistema de autenticación de Buildations Studio utiliza tokens de servicio criptográficamente firmados (bld_live_sec_...). Cada petición a /api/transactions o al motor autónomo valida la cuota de inferencia, la firma HMAC y la sincronización con el servidor de sockets.',
                                    codeSnippet: `// Handshake oficial de Buildations API
const res = await fetch('https://api.buildations.studio/v2/engines/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer bld_live_sec_8f99e412a80c',
    'Content-Type': 'application/json',
    'X-Client-Signature': 'buildations-sha256-verified'
  },
  body: JSON.stringify({
    engineId: 'eng-01',
    frequency: 'realtime',
    targetCms: 'payload_3x'
  })
});`,
                                    actionableStep: 'Puedes configurar o rotar este Bearer Token en la sección "Configuración de Cuenta & Enterprise Vault" > pestaña "API Keys".'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «¡Listo el Bearer Token criptográfico! Si no aislamos la autenticación de la API, el cluster no aguantará 50 artículos simultáneos...»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— ÁLEX, LEAD DEV</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Panel 1.2: El Servidor y la Latencia de Inferencia */}
                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #02 // Rack Server</span>
                                  <span className="comic-onomatopoeia text-xs text-blue-600 dark:text-cyan-400">*BZZZZT!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Servidor Blade Rack */}
                                    <rect x="40" y="10" width="120" height="80" rx="3" fill="white" />
                                    <line x1="40" y1="30" x2="160" y2="30" strokeWidth="2" />
                                    <line x1="40" y1="50" x2="160" y2="50" strokeWidth="2" />
                                    <line x1="40" y1="70" x2="160" y2="70" strokeWidth="2" />
                                    {/* Luces LEDs */}
                                    <circle cx="55" cy="20" r="3" fill="#e85a2a" />
                                    <circle cx="65" cy="20" r="3" fill="#3ddc84" />
                                    <circle cx="55" cy="40" r="3" fill="#3ddc84" />
                                    <circle cx="65" cy="40" r="3" fill="#f5a623" />
                                    <circle cx="55" cy="60" r="3" fill="#3ddc84" />
                                    <circle cx="65" cy="60" r="3" fill="#3ddc84" />
                                    <circle cx="55" cy="80" r="3" fill="#3ddc84" />
                                    {/* Cables de red */}
                                    <path d="M140 20c15 10 15 30 0 40M145 40c15 10 15 30 0 40" strokeWidth="1.5" strokeDasharray="3 2" />
                                  </svg>
                                  <div className="absolute bottom-2 left-2 font-mono text-[8px] bg-black text-white px-1.5 py-0.5 font-bold">
                                    LATENCIA // 1.42s
                                  </div>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 1: Infraestructura de Cómputo',
                                    speaker: 'Sara // DevOps & Cloud Reliability',
                                    role: 'Departamento de Infraestructura',
                                    title: 'Rendimiento Sub-2s y Clúster de Inferencia en Tiempo Real',
                                    quote: '«¡El ping cayó a 1.42 segundos! El parser vectorial y los workers de Node 22 están procesando los prompts con cero cola de espera.»',
                                    technicalDeepDive: 'Optimizamos la memoria mediante streaming SSE (Server-Sent Events) directo a la interfaz y volcados asíncronos a la base de datos PostgreSQL de Supabase, previniendo cuellos de botella en la renderización.',
                                    codeSnippet: `// Streaming SSE de Inferencia
export async function GET(req: Request) {
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  // Bufferiza en 64 bits sin bloquear el Event Loop
  generateEngineStream({ writer, latencyTargetMs: 1400 });
  return new Response(stream.readable, {
    headers: { 'Content-Type': 'text/event-stream' }
  });
}`,
                                    actionableStep: 'Puedes monitorear el ecualizador y los LEDs de latencia en la pantalla principal de la Consola.'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «¡Álex, el ping bajó a 1.42 segundos! El motor de inferencia ya no se cuelga con los artículos extensos.»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— SARA, CLOUD RELIABILITY</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Panel 1.3: Pensamiento del Dev (Nube de Pensamiento) */}
                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #03 // Pensamiento</span>
                                  <span className="comic-onomatopoeia text-xs text-amber-600 dark:text-yellow-400">*¿Y AHORA QUÉ?*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Rostro pensativo con signos de interrogación */}
                                    <circle cx="80" cy="50" r="28" fill="white" strokeWidth="2.5" />
                                    {/* Gafas */}
                                    <rect x="65" y="42" width="12" height="10" rx="2" strokeWidth="2" fill="white" />
                                    <rect x="83" y="42" width="12" height="10" rx="2" strokeWidth="2" fill="white" />
                                    <line x1="77" y1="47" x2="83" y2="47" strokeWidth="2" />
                                    <path d="M72 65c4 3 12 3 16 0" strokeWidth="2" />
                                    {/* Burbujas de pensamiento */}
                                    <circle cx="125" cy="40" r="4" fill="white" strokeWidth="2" />
                                    <circle cx="138" cy="32" r="7" fill="white" strokeWidth="2" />
                                    <rect x="145" y="15" width="45" height="30" rx="6" fill="white" strokeWidth="2" />
                                    <text x="150" y="32" fontSize="9" fontFamily="monospace" fontWeight="bold" fill="currentColor">MKT ?</text>
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 1: Transición a Producto',
                                    speaker: 'Álex // Pensamiento Interno',
                                    role: 'Departamento de Ingeniería',
                                    title: 'Cómo explicar la API de 64-bits al resto de la empresa',
                                    quote: '«(Pensando)... La API quedó perfecta técnicamente, pero si se la paso a Marketing como "Endpoints REST de Inferencia Vectorial con Handshake HMAC", nadie lo va a entender...»',
                                    technicalDeepDive: 'La brecha entre ingeniería pura y adopción de usuarios se resuelve creando abstracciones semánticas. Por eso encapsulamos los parámetros de la API bajo "Motores Autónomos", "Interruptores de Frecuencia" y "Perillas de Calibración AEO".',
                                    actionableStep: 'Explora la sección "Constructor de Motores" para ver la interfaz visual que traduce esta API técnica en controles táctiles.'
                                  })}
                                  className="comic-thought"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «(Pensando)... La API es una joya. Pero si le mando la documentación en Swagger a Mateo de Marketing, le dará un infarto...»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>💭 PENSAMIENTO DE INGENIERO</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                      {/* CAPÍTULO 2: MARKETING ANUNCIA "BUILDATIONS STUDIO 2.0" */}
                      {(activeComicChapter === 'all' || activeComicChapter === 'chapter2') && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="comic-caption-box text-xs">
                              CAPÍTULO 2: 09:15 AM EN LA SALA DE MARKETING &amp; CREATIVOS
                            </span>
                            <div className="h-0.5 bg-black dark:bg-white flex-1"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Panel 2.1: El Pitch de Marketing */}
                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #04 // Sala Creativa</span>
                                  <span className="comic-onomatopoeia text-xs text-red-600 dark:text-[#e85a2a]">*¡BOOM!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-36 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 240 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Pizarra blanca con diagramas */}
                                    <rect x="20" y="10" width="120" height="75" rx="2" fill="white" />
                                    <text x="30" y="28" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold" fill="currentColor">BUILDATIONS</text>
                                    <text x="30" y="44" fontSize="16" fontFamily="Space Grotesk" fontWeight="900" fill="#e85a2a">STUDIO 2.0</text>
                                    <path d="M30 54h90M30 62h60" strokeWidth="2" strokeDasharray="2 2" />
                                    
                                    {/* Silueta de presentador señalando la pizarra */}
                                    <circle cx="180" cy="30" r="14" fill="white" strokeWidth="2.5" />
                                    <path d="M180 44v35M160 55l20-10 30-15M165 79l15-20 15 20" strokeWidth="2.5" />
                                  </svg>
                                  <div className="absolute top-2 right-2 font-mono text-[9px] bg-red-600 text-white px-2 py-0.5 font-black uppercase">
                                    ¡GRAN LANZAMIENTO!
                                  </div>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 2: Estrategia de Marca & Posicionamiento',
                                    speaker: 'Mateo // Head of Growth & Marketing',
                                    role: 'Departamento de Marketing',
                                    title: 'De "API de Inferencia" a "Buildations Studio 2.0 // Autonomous Engine"',
                                    quote: '«¡Olvídense de llamarlo "script generador"! Esto es BUILDATIONS STUDIO 2.0: la plataforma táctil que publica en silos con autoridad temática y citabilidad en ChatGPT y Perplexity.»',
                                    technicalDeepDive: 'Marketing transformó los parámetros crudos de temperatura, top_p y embeddings en una propuesta de valor basada en resultados: Top 3 en Google Search Console, Citabilidad AEO del 94.6% y sincronización directa con deals en HubSpot CRM.',
                                    actionableStep: 'Descubre en el "Lanzador SEO / AEO" cómo los artículos son catalogados automáticamente por intención de búsqueda comercial e informativa.'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «¡Álex, esto no es un script aburrido! Lo llamaremos STUDIO 2.0: una suite autónoma con estética de sintetizador Teenage Engineering que seduce a cualquier CEO.»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— MATEO, GROWTH DIRECTOR</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Panel 2.2: La Redactora de Contenidos */}
                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #05 // Mesa Editorial</span>
                                  <span className="comic-onomatopoeia text-xs text-emerald-600 dark:text-emerald-400">*¡POR FIN!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-36 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 240 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Laptop con artículo publicado */}
                                    <rect x="70" y="20" width="100" height="60" rx="3" fill="white" />
                                    <line x1="50" y1="80" x2="190" y2="80" strokeWidth="4" />
                                    <path d="M80 30h30M80 38h70M80 46h50M80 54h60" strokeWidth="2" strokeDasharray="2 1" />
                                    <circle cx="150" cy="30" r="6" fill="#3ddc84" />
                                    <text x="80" y="68" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="#3ddc84">AEO: 94.6% OK</text>
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 2: Redacción & Citabilidad',
                                    speaker: 'Camila // Content Editor',
                                    role: 'Departamento Editorial & Estrategia SEO',
                                    title: 'Calificación de Redacción, Fuentes Verificadas y Fact-Checking',
                                    quote: '«¡Al fin! El motor no inventa datos raros: cita fuentes indexables y estructura los encabezados H2/H3 como los prefiere Perplexity para recomendarnos en respuestas de IA.»',
                                    technicalDeepDive: 'Cada artículo pasa por una capa de validación cruzada: densidad semántica, tablas comparativas en Markdown, enriquecimiento Schema.org (Article / FAQPage) y revisión de fuentes fácticas para asegurar una tasa de rechazo menor al 2%.',
                                    actionableStep: 'Puedes revisar las métricas de aprobación editorial en la pestaña "Telemetría de Rendimiento".'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «¿Dices que este motor redacta artículos de 2,500 palabras con fuentes verificadas y los manda directo a Payload CMS? ¡Esto nos ahorra 20 horas por semana!»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— CAMILA, CONTENT STRATEGIST</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                      {/* CAPÍTULO 3: EL CONECTOR CMS & EL HANDSHAKE TÉCNICO */}
                      {(activeComicChapter === 'all' || activeComicChapter === 'chapter3') && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="comic-caption-box text-xs">
                              CAPÍTULO 3: EL PUENTE SILO // CMS HEADLESS HANDSHAKE
                            </span>
                            <div className="h-0.5 bg-black dark:bg-white flex-1"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #06 // El Enchufe</span>
                                  <span className="comic-onomatopoeia text-xs text-black dark:text-white">*¡CLICK-PLUG!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Cable y enchufe macho entrando en hembra */}
                                    <rect x="20" y="35" width="40" height="30" rx="3" fill="white" />
                                    <text x="26" y="52" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="currentColor">STUDIO</text>
                                    <line x1="60" y1="43" x2="90" y2="43" strokeWidth="3" />
                                    <line x1="60" y1="57" x2="90" y2="57" strokeWidth="3" />
                                    
                                    <rect x="90" y="30" width="50" height="40" rx="3" fill="white" strokeWidth="2.5" />
                                    <text x="96" y="52" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="#e85a2a">PAYLOAD</text>
                                    
                                    {/* Rayo de conexión OK */}
                                    <path d="M150 35l15 15-10 5 15 15" stroke="#3ddc84" strokeWidth="3" fill="none" />
                                    <circle cx="180" cy="50" r="8" fill="#3ddc84" />
                                    <text x="176" y="53" fontSize="10" fontWeight="bold" fill="white">✓</text>
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 3: Conectores CMS',
                                    speaker: 'Álex // Integraciones Headless',
                                    role: 'Departamento de Ingeniería',
                                    title: 'Sincronización Silo con Payload 3.x y WordPress REST',
                                    quote: '«Le inyecté un ping recurrente con reintentos automáticos. Si el cliente usa WordPress o Payload CMS, el motor autentica y publica sin que nadie toque la base de datos a mano.»',
                                    technicalDeepDive: 'El conector emite una petición POST a /api/posts con el payload estructurado: slug saneado, metadatos OpenGraph, autores asignados, etiquetas y estado de borrador o publicación inmediata.',
                                    codeSnippet: `// Dispatch a Payload CMS con autenticación segura
await fetch(\`\${endpoint}/api/posts\`, {
  method: 'POST',
  headers: {
    'Authorization': \`users API-Key \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: article.title,
    content: article.lexicalContent,
    slug: article.canonicalSlug,
    _status: 'published'
  })
});`,
                                    actionableStep: 'Configura tus endpoints en la pestaña "Conectores CMS" y usa el botón "Probar Conexión (Ping)".'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «¡Enchufado! Con este webhook bidireccional, cualquier artículo sale publicado con su slug canónico y campos personalizados de Payload o WordPress.»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— ÁLEX A CAMILA</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #07 // Control de Daños</span>
                                  <span className="comic-onomatopoeia text-xs text-zinc-500">*¡FAIL-SAFE!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Interruptor mecánico tipo switch Teen Engineering */}
                                    <rect x="70" y="20" width="60" height="60" rx="6" fill="white" strokeWidth="3" />
                                    <rect x="85" y="30" width="30" height="40" rx="3" fill="#e85a2a" />
                                    <circle cx="100" cy="42" r="5" fill="white" />
                                    <text x="88" y="88" fontSize="7" fontFamily="monospace" fontWeight="bold" fill="currentColor">DRAFT LOCK</text>
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 3: Gobernanza Editorial',
                                    speaker: 'Camila // Política de Aprobaciones',
                                    role: 'Departamento Editorial',
                                    title: 'Modo Draft de Seguridad vs Publicación Desatendida',
                                    quote: '«Para clientes exigentes como despachos de abogados o fintechs, dejamos el switch en "Draft". El motor redacta todo pero un humano hace el clic final.»',
                                    technicalDeepDive: 'El sistema permite fijar el flag _status: "draft". De esta forma, el artículo queda depositado en el CMS del cliente en espera de revisión humana antes de ser expuesto a la indexación de Google.',
                                    actionableStep: 'Puedes conmutar entre "Draft" y "Autonomous" en la tarjeta de cada motor o en el modal de calibración.'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «Y si el cliente tiene miedo de la IA, le activamos el "Draft Lock": el contenido se guarda como borrador hasta que su equipo lo apruebe.»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— CAMILA, CONTENT LEAD</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                      {/* CAPÍTULO 4: EL CEREBRO VECTORIAL & RAG */}
                      {(activeComicChapter === 'all' || activeComicChapter === 'chapter4') && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="comic-caption-box text-xs">
                              CAPÍTULO 4: EL CEREBRO // BASE VECTORIAL &amp; FACT-CHECKING
                            </span>
                            <div className="h-0.5 bg-black dark:bg-white flex-1"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #08 // Cosine Distance</span>
                                  <span className="comic-onomatopoeia text-xs text-purple-600 dark:text-purple-400">*¡ZINGG!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Gráfico 3D de vectores con puntos conectados */}
                                    <circle cx="40" cy="70" r="4" fill="#e85a2a" />
                                    <circle cx="80" cy="30" r="4" fill="#3ddc84" />
                                    <circle cx="120" cy="50" r="4" fill="#f5a623" />
                                    <circle cx="160" cy="25" r="5" fill="#38bdf8" />
                                    <line x1="40" y1="70" x2="80" y2="30" strokeWidth="1.5" strokeDasharray="3 2" />
                                    <line x1="80" y1="30" x2="120" y2="50" strokeWidth="1.5" strokeDasharray="3 2" />
                                    <line x1="120" y1="50" x2="160" y2="25" strokeWidth="1.5" strokeDasharray="3 2" />
                                    <text x="130" y="80" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="currentColor">1536 DIM</text>
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 4: Embeddings y RAG',
                                    speaker: 'Sara // Data & AI Ops',
                                    role: 'Departamento de Inteligencia Artificial',
                                    title: 'Búsqueda por Similitud de Coseno en Supabase pgvector',
                                    quote: '«Inyectamos los manuales del cliente en vectores de 1536 dimensiones. Cuando el motor redacta, no alucina: extrae los datos exactos con una similitud superior a 0.86.»',
                                    technicalDeepDive: 'Utilizamos embeddings de OpenAI text-embedding-3-small indexados en tablas PostgreSQL con índice HNSW (Hierarchical Navigable Small World), permitiendo queries de menos de 12ms sobre más de 100,000 fragmentos.',
                                    codeSnippet: `-- Consulta SQL optimizada en pgvector
SELECT id, content, 1 - (embedding <=> query_embedding) AS similarity
FROM knowledge_chunks
WHERE 1 - (embedding <=> query_embedding) > 0.86
ORDER BY similarity DESC
LIMIT 5;`,
                                    actionableStep: 'Configura el umbral de similitud en la pestaña "Constructor Modular" > Configuración RAG.'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «El secreto del éxito: una memoria RAG con Supabase pgvector que le inyecta la voz de la marca al LLM antes de escribir cada párrafo.»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— SARA, AI SCIENTIST</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #09 // Fact-Check</span>
                                  <span className="comic-onomatopoeia text-xs text-emerald-600 dark:text-emerald-400">*¡99.4% REAL!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="50" y="20" width="100" height="60" rx="4" fill="white" strokeWidth="2" />
                                    <path d="M70 45l15 15 35-30" stroke="#3ddc84" strokeWidth="4" fill="none" />
                                    <text x="65" y="72" fontSize="9" fontFamily="monospace" fontWeight="bold" fill="currentColor">ZERO ALUCINACIÓN</text>
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 4: Fact-Checking Guardrails',
                                    speaker: 'Álex // Sistema de Guardarraíles',
                                    role: 'Departamento de Ingeniería',
                                    title: 'Verificación Fáctica en Tiempo Real con DuckDuckGo Search',
                                    quote: '«Si el modelo intenta inventar una cifra económica o una ley, el guardarraíl de DDG cruza la afirmación con tres fuentes vivas de la web y la corrige antes de publicar.»',
                                    technicalDeepDive: 'Implementamos un ciclo de verificación dual: generación de borrador -> extracción de entidades fácticas -> búsqueda en tiempo real -> corrección de discrepancias en caso de incongruencia.',
                                    actionableStep: 'Puedes ver el estado de los guardarraíles en la sección de "Telemetría de Rendimiento".'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «Ni una sola alucinación. Si un dato no tiene fuente comprobable, el guardarraíl lo elimina o lo marca para revisión humana.»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— ÁLEX, LEAD DEV</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                      {/* CAPÍTULO 5: REVOPS & LOS CLIENTES FELICES */}
                      {(activeComicChapter === 'all' || activeComicChapter === 'chapter5') && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="comic-caption-box text-xs">
                              CAPÍTULO 5: LA COSECHA // REVOPS CRM, DEALS &amp; CLIENTES FELICES
                            </span>
                            <div className="h-0.5 bg-black dark:bg-white flex-1"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #10 // Notificación CRM</span>
                                  <span className="comic-onomatopoeia text-xs text-amber-600 dark:text-yellow-400">*¡CHA-CHING!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Campana de HubSpot con Deal monetario */}
                                    <path d="M100 20c-15 0-25 15-25 35h50c0-20-10-35-25-35z" fill="white" strokeWidth="2.5" />
                                    <circle cx="100" cy="65" r="5" fill="#f5a623" />
                                    <rect x="130" y="25" width="55" height="25" rx="3" fill="#e85a2a" />
                                    <text x="136" y="41" fontSize="9" fontFamily="monospace" fontWeight="bold" fill="white">+$42.5K</text>
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 5: Motor RevOps',
                                    speaker: 'Valentina // VP de Ventas & RevOps',
                                    role: 'Departamento de Negocio & Crecimiento',
                                    title: 'Sincronización Bidireccional de Leads en HubSpot CRM',
                                    quote: '«¡Nuevo deal entrante! Un prospecto B2B llegó por una búsqueda de Perplexity que citaba directamente nuestro artículo de silo. El lead se creó automáticamente en el pipeline de HubSpot.»',
                                    technicalDeepDive: 'Buildations vincula el tráfico AEO/SEO con formularios embebidos y webhooks de HubSpot, atribuyendo el origen del negocio a palabras clave y artículos específicos.',
                                    actionableStep: 'Inspecciona la pestaña "Motor RevOps & Deals" para revisar las conversiones y volumen de transacciones.'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «¡Equipo, miren HubSpot! Entró un deal calificado de $42,500 atribuido al silo de AEO que publicamos hace dos días.»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— VALENTINA, VP REVOPS</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #11 // El Cliente</span>
                                  <span className="comic-onomatopoeia text-xs text-blue-600 dark:text-cyan-400">*¡WOW!*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Sonrisa del cliente y gráfico disparado hacia arriba */}
                                    <path d="M40 75l30-20 40 10 50-45" stroke="#3ddc84" strokeWidth="4" fill="none" />
                                    <circle cx="160" cy="20" r="5" fill="#3ddc84" />
                                    <text x="140" y="38" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="currentColor">+340%</text>
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveBalloonDetail({
                                    chapter: 'Capítulo 5: Éxito del Cliente',
                                    speaker: 'Carlos // CEO del Cliente Enterprise',
                                    role: 'Cliente Corporativo',
                                    title: 'Impacto en Autoridad de Dominio y Citabilidad Orgánica',
                                    quote: '«Antes gastábamos $15,000 al mes en agencias lentas. Ahora nuestro sitio publica contenido de nivel experto tres veces por semana y lideramos las respuestas de ChatGPT.»',
                                    technicalDeepDive: 'Al combinar consistencia editorial, estructura en silos jerárquicos y optimización AEO para modelos de lenguaje, el dominio adquiere autoridad temática reconocida por los rastreadores modernos.',
                                    actionableStep: 'Descubre cómo replicar este resultado creando tu primer motor en el "Constructor Modular".'
                                  })}
                                  className="comic-balloon"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug">
                                    «Nuestra marca aparece de primera en Perplexity y ChatGPT cuando buscan nuestros servicios. ¡Buildations Studio 2.0 es indispensable!»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>— CARLOS, CLIENTE ENTERPRISE</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">VER DETALLE 🔍</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="comic-panel p-5 rounded-xl flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">Panel #12 // Próxima Misión</span>
                                  <span className="comic-onomatopoeia text-xs text-red-600 dark:text-[#e85a2a]">*¿ESTÁS LISTO?*</span>
                                </div>

                                <div className="border-2 border-black p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center h-32 relative overflow-hidden">
                                  <svg className="w-full h-full text-black dark:text-white" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Cohete despegando */}
                                    <path d="M100 15c-10 15-15 35-15 50h30c0-15-5-35-15-50z" fill="white" strokeWidth="2.5" />
                                    <path d="M85 55l-15 15h15" fill="#e85a2a" />
                                    <path d="M115 55l15 15h-15" fill="#e85a2a" />
                                    <circle cx="100" cy="38" r="4" fill="#3ddc84" />
                                    <path d="M95 70c0 10 5 15 5 15s5-5 5-15" stroke="#f5a623" strokeWidth="3" />
                                  </svg>
                                </div>

                                <div 
                                  onClick={() => setActiveTab('engineBuilder')}
                                  className="comic-balloon border-2 border-[#e85a2a]"
                                >
                                  <p className="font-mono text-xs font-bold leading-snug text-[#e85a2a]">
                                    «Ahora te toca a ti: calibra tu motor en 3 minutos y empieza a construir el futuro de tu marca.»
                                  </p>
                                  <span className="text-[9px] font-mono text-zinc-500 font-bold mt-1.5 block flex items-center justify-between">
                                    <span>🚀 CONSTRUCTOR MODULAR</span>
                                    <span className="text-[#e85a2a] underline font-extrabold">LANZAR MOTOR ➔</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}

                {/* MODAL / DRAWER INTERACTIVO AL PRESIONAR CUALQUIER GLOBO DE DIÁLOGO */}
                {activeBalloonDetail && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="comic-panel max-w-2xl w-full p-6 sm:p-8 rounded-2xl bg-white text-black relative max-h-[90vh] overflow-y-auto">
                      
                      {/* Botón de cierre estilo cómic */}
                      <button 
                        onClick={() => setActiveBalloonDetail(null)}
                        className="absolute top-4 right-4 border-2 border-black bg-black text-white hover:bg-red-600 px-3 py-1 font-mono text-xs font-black uppercase transition-colors cursor-pointer shadow-[2px_2px_0px_#e85a2a]"
                      >
                        ✕ CERRAR [ESC]
                      </button>

                      <div className="space-y-4 pt-2">
                        <div className="flex items-center gap-2">
                          <span className="comic-caption-box text-xs">
                            {activeBalloonDetail.chapter}
                          </span>
                          <span className="comic-onomatopoeia text-xs text-red-600 dark:text-[#e85a2a]">
                            *DOCS DEEP-DIVE*
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight">
                            {activeBalloonDetail.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-600 mt-1">
                            <span>HABLANTE:</span>
                            <span className="text-black bg-zinc-200 px-2 py-0.5 rounded">{activeBalloonDetail.speaker}</span>
                            <span>//</span>
                            <span className="text-[#e85a2a]">{activeBalloonDetail.role}</span>
                          </div>
                        </div>

                        {/* Cita del globo */}
                        <div className="border-l-4 border-black pl-4 py-1 italic font-mono text-xs bg-zinc-50 text-zinc-800">
                          {activeBalloonDetail.quote}
                        </div>

                        {/* Explicación técnica */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-mono font-black uppercase tracking-wider text-black">
                            // ESPECIFICACIÓN TÉCNICA FORMAL:
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                            {activeBalloonDetail.technicalDeepDive}
                          </p>
                        </div>

                        {/* Snippet de código si aplica */}
                        {activeBalloonDetail.codeSnippet && (
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-zinc-500 uppercase">
                              <span>Snippet de Integración:</span>
                              <span className="text-emerald-600 font-bold">READY TO COPY</span>
                            </div>
                            <pre className="bg-black text-emerald-400 p-4 rounded-lg font-mono text-xs overflow-x-auto border-2 border-black">
                              <code>{activeBalloonDetail.codeSnippet}</code>
                            </pre>
                          </div>
                        )}

                        {/* Paso accionable */}
                        <div className="p-3.5 bg-zinc-100 border-2 border-black flex items-center justify-between gap-4">
                          <div className="text-xs font-mono">
                            <span className="font-black text-black uppercase block">¿CÓMO LO APLICAS AHORA MISMO?</span>
                            <span className="text-zinc-600 text-[11px]">{activeBalloonDetail.actionableStep}</span>
                          </div>
                          <button
                            onClick={() => {
                              setActiveBalloonDetail(null);
                              setActiveTab('engineBuilder');
                            }}
                            className="bg-black text-white hover:bg-[#e85a2a] px-3 py-1.5 font-mono text-xs font-bold uppercase transition-colors shrink-0 border border-black cursor-pointer"
                          >
                            Ir al Módulo ➔
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

                {/* MODO CLÁSICO: MANUAL TÉCNICO FORMAL (ACCESIBLE POR TOGGLE) */}
                {docDisplayMode === 'classic' && (
                  <div className="space-y-6 animate-fade-in">

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
              </div>
            )}

            {/* TAB: EDITOR DE BASES DE DATOS & ESQUEMAS VECTORIALES (DATABASE STUDIO) */}
            {activeTab === 'databaseStudio' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header Industrial TE */}
                <div className="flex flex-wrap justify-between items-end gap-4 border-b border-[var(--border-te)] pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e85a2a] te-led-active"></span>
                      <span className="te-label text-[#e85a2a]">
                        DATABASE ENGINE // SQL · PGVECTOR · EMBEDDINGS RUNTIME
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                        CONNECTED: SUPABASE + PGVECTOR 1536D
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[var(--foreground)] uppercase">
                      Editor de Bases de Datos, Esquemas &amp; Consultas Vectoriales
                    </h2>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 max-w-3xl leading-relaxed">
                      Inspecciona esquemas relacionales, administra tablas de memoria RAG en PostgreSQL, optimiza índices HNSW para búsqueda por coseno y ejecuta consultas SQL de prueba sin salir de la consola.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Switcher de Sub-pestañas DB Studio */}
                    <div className="flex items-center p-1 rounded-xl bg-black border border-[var(--border-te)]">
                      {[
                        { id: 'tables', label: 'Tablas & Esquemas', icon: '🗄️' },
                        { id: 'queryRunner', label: 'SQL Query Runner', icon: '⚡' },
                        { id: 'vectorEmbeddings', label: 'Tensores Vectoriales', icon: '🧬' },
                        { id: 'indexes', label: 'Índices HNSW', icon: '🎯' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setActiveDbTab(t.id as any)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            activeDbTab === t.id
                              ? 'bg-[#e85a2a] text-white shadow-sm'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          <span>{t.icon}</span>
                          <span className="uppercase">{t.label}</span>
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={() => {
                        const newTableName = prompt('Introduce el nombre de la nueva tabla o partición:');
                        if (newTableName) {
                          setDbTables(prev => [
                            ...prev,
                            {
                              name: newTableName.toLowerCase().replace(/[^a-z0-9_]/g, '_'),
                              engine: 'PostgreSQL Relational',
                              rows: 0,
                              size: '16 KB',
                              columns: [
                                { name: 'id', type: 'uuid PRIMARY KEY DEFAULT gen_random_uuid()', indexed: true, nullable: false },
                                { name: 'created_at', type: 'timestamptz DEFAULT now()', indexed: true, nullable: false }
                              ]
                            }
                          ]);
                          showToast('Tabla Creada', `Estructura para "${newTableName}" registrada en el esquema de datos.`, 'success');
                        }
                      }}
                      className="te-button px-3.5 py-2 text-xs flex items-center gap-1.5 cursor-pointer font-mono"
                    >
                      <PlusIcon className="w-3.5 h-3.5 text-[#e85a2a]" />
                      <span>Nueva Tabla</span>
                    </button>
                  </div>
                </div>

                {/* SUB-VISTA 1: EXPLORADOR DE TABLAS Y ESQUEMAS */}
                {activeDbTab === 'tables' && (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Lista de Tablas Disponibles */}
                    <div className="space-y-3">
                      <span className="te-label text-zinc-400 block">TABLAS EN EL ESQUEMA ({dbTables.length})</span>
                      <div className="space-y-2">
                        {dbTables.map((tb) => (
                          <div
                            key={tb.name}
                            onClick={() => setSelectedDbTable(tb.name)}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer te-frame ${
                              selectedDbTable === tb.name
                                ? 'border-[#e85a2a] bg-[#14161b] shadow-sm'
                                : 'border-[var(--border-te)] bg-[#0e1014] hover:border-zinc-500 opacity-80'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-mono text-xs font-bold text-white truncate">{tb.name}</span>
                              {selectedDbTable === tb.name && (
                                <span className="w-2 h-2 rounded-full bg-[#e85a2a] te-led-active"></span>
                              )}
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400 block">{tb.engine}</span>
                            <div className="mt-2 pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                              <span>{tb.rows.toLocaleString()} filas</span>
                              <span>{tb.size}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detalle de Columnas y Tipos de la Tabla Seleccionada */}
                    <div className="lg:col-span-3 space-y-4">
                      {(() => {
                        const curTable = dbTables.find(t => t.name === selectedDbTable) || dbTables[0];
                        return (
                          <div className="te-frame p-6 rounded-2xl border border-[var(--border-te)] bg-[#0c0e12] space-y-4">
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                              <div>
                                <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                                  <CircleStackIcon className="w-5 h-5 text-[#e85a2a]" />
                                  <span>{curTable.name}</span>
                                </h3>
                                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                                  Motor: {curTable.engine} • Tamaño en disco: {curTable.size} • Total registros: {curTable.rows.toLocaleString()}
                                </p>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => {
                                    setActiveSqlQuery(`SELECT * FROM ${curTable.name} LIMIT 25;`);
                                    setActiveDbTab('queryRunner');
                                  }}
                                  className="te-button text-xs py-1.5 px-3 font-mono cursor-pointer flex items-center gap-1.5"
                                >
                                  <PlayIcon className="w-3.5 h-3.5 text-[#3ddc84]" />
                                  <span>Consultar (SELECT)</span>
                                </button>
                                <button
                                  onClick={() => {
                                    const colName = prompt('Nombre del nuevo campo / columna:');
                                    const colType = prompt('Tipo de dato SQL (ej. text, int4, float4, vector(1536)):', 'text');
                                    if (colName && colType) {
                                      curTable.columns.push({
                                        name: colName,
                                        type: colType,
                                        indexed: false,
                                        nullable: true
                                      });
                                      setDbTables([...dbTables]);
                                      showToast('Columna Agregada', `Campo "${colName}" (${colType}) añadido al esquema.`, 'success');
                                    }
                                  }}
                                  className="te-button-primary text-xs py-1.5 px-3 font-mono cursor-pointer flex items-center gap-1.5"
                                >
                                  <PlusIcon className="w-3.5 h-3.5" />
                                  <span>Añadir Columna</span>
                                </button>
                              </div>
                            </div>

                            {/* Tabla de Columnas */}
                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-xs font-mono">
                                <thead>
                                  <tr className="border-b border-zinc-800 text-zinc-400 text-[10px] uppercase">
                                    <th className="py-2.5 px-3">Nombre del Campo</th>
                                    <th className="py-2.5 px-3">Tipo de Dato SQL</th>
                                    <th className="py-2.5 px-3">Indexado</th>
                                    <th className="py-2.5 px-3">Nullable</th>
                                    <th className="py-2.5 px-3 text-right">Acciones</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800/60">
                                  {curTable.columns.map((col, idx) => (
                                    <tr key={idx} className="hover:bg-zinc-900/50 transition-colors">
                                      <td className="py-3 px-3 font-bold text-white flex items-center gap-2">
                                        {col.indexed && <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84]"></span>}
                                        <span>{col.name}</span>
                                      </td>
                                      <td className="py-3 px-3 text-emerald-400 font-bold">{col.type}</td>
                                      <td className="py-3 px-3">
                                        <span className={`px-2 py-0.5 rounded text-[10px] ${col.indexed ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-zinc-500'}`}>
                                          {col.indexed ? 'SÍ (INDEX)' : 'NO'}
                                        </span>
                                      </td>
                                      <td className="py-3 px-3 text-zinc-400">
                                        {col.nullable ? 'NULL' : 'NOT NULL'}
                                      </td>
                                      <td className="py-3 px-3 text-right">
                                        <button
                                          onClick={() => {
                                            if (confirm(`¿Eliminar la columna "${col.name}"?`)) {
                                              curTable.columns.splice(idx, 1);
                                              setDbTables([...dbTables]);
                                              showToast('Columna Removida', `Campo "${col.name}" eliminado.`, 'info');
                                            }
                                          }}
                                          className="text-zinc-500 hover:text-red-400 cursor-pointer font-bold px-2 py-1"
                                          title="Eliminar columna"
                                        >
                                          ✕
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                )}

                {/* SUB-VISTA 2: SQL QUERY RUNNER INTERACTIVO */}
                {activeDbTab === 'queryRunner' && (
                  <div className="space-y-6">
                    <div className="te-frame p-6 rounded-2xl border border-[var(--border-te)] bg-[#0a0c0e] space-y-4">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
                          <span className="te-label text-[#38bdf8]">POSTGRESQL &amp; PGVECTOR TERMINAL // 64-BIT QUERY EXECUTION</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setActiveSqlQuery(`-- Búsqueda de alta citabilidad en Perplexity
SELECT slug, aeo_sentiment, source_authority 
FROM aeo_citation_vectors 
WHERE aeo_sentiment > 0.90 
ORDER BY source_authority DESC 
LIMIT 10;`);
                            }}
                            className="te-button text-[10px] py-1 px-2.5 font-mono cursor-pointer"
                          >
                            Snippet: AEO &gt; 90%
                          </button>
                          <button
                            onClick={() => {
                              setActiveSqlQuery(`-- Estadísticas de indexación HNSW
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE tablename = 'aeo_citation_vectors';`);
                            }}
                            className="te-button text-[10px] py-1 px-2.5 font-mono cursor-pointer"
                          >
                            Snippet: Índices HNSW
                          </button>
                        </div>
                      </div>

                      {/* Editor SQL Monospace con Chasis TE */}
                      <div className="relative rounded-xl border border-[var(--border-te)] bg-[#07090a] p-3">
                        <textarea
                          rows={7}
                          value={activeSqlQuery}
                          onChange={(e) => setActiveSqlQuery(e.target.value)}
                          className="w-full bg-transparent text-emerald-400 font-mono text-xs focus:outline-none resize-none leading-relaxed"
                          placeholder="Escribe tu consulta SQL aquí..."
                        />
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] font-mono text-zinc-500">
                          Presiona Ejecutar o CMD+Enter para procesar el query en el clúster.
                        </span>

                        <button
                          onClick={() => {
                            setIsExecutingSql(true);
                            setTimeout(() => {
                              setIsExecutingSql(false);
                              setSqlQueryResults({
                                latencyMs: parseFloat((Math.random() * 8 + 6).toFixed(1)),
                                rowsCount: 4,
                                data: [
                                  { id: 'f81d4fae-7dec', slug: 'estrategias-aeo-b2b', cosine_similarity: 0.942, aeo_sentiment: 0.98, source_authority: 94 },
                                  { id: 'c94b20a1-43ae', slug: 'hubspot-revops-alignment', cosine_similarity: 0.918, aeo_sentiment: 0.95, source_authority: 91 },
                                  { id: '8a8f9d02-12ef', slug: 'schema-faqpage-jsonld', cosine_similarity: 0.887, aeo_sentiment: 0.91, source_authority: 88 },
                                  { id: '3ddc8499-55aa', slug: 'saas-pricing-calculator', cosine_similarity: 0.864, aeo_sentiment: 0.89, source_authority: 85 }
                                ]
                              });
                              showToast('Query Ejecutado', 'Consulta procesada en 11.4ms con 4 registros devueltos.', 'success');
                            }, 700);
                          }}
                          disabled={isExecutingSql}
                          className="te-button-primary px-6 py-2.5 text-xs font-mono font-bold flex items-center gap-2 cursor-pointer shadow-sm"
                        >
                          {isExecutingSql ? (
                            <>
                              <ArrowPathIcon className="w-4 h-4 animate-spin" />
                              <span>Ejecutando en Postgres...</span>
                            </>
                          ) : (
                            <>
                              <PlayIcon className="w-4 h-4" />
                              <span>EJECUTAR QUERY SQL [⌘↵]</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Resultados del Query en Cuadrícula de Datos */}
                      {sqlQueryResults && (
                        <div className="pt-4 border-t border-zinc-800 space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-zinc-400">
                              Filas devueltas: <strong className="text-white">{sqlQueryResults.rowsCount}</strong>
                            </span>
                            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                              Tiempo de ejecución: {sqlQueryResults.latencyMs}ms (200 OK)
                            </span>
                          </div>

                          <div className="overflow-x-auto border border-zinc-800 rounded-xl bg-[#090b0e]">
                            <table className="w-full text-left text-xs font-mono">
                              <thead className="bg-[#121418] text-zinc-400 text-[10px] uppercase border-b border-zinc-800">
                                <tr>
                                  <th className="py-2.5 px-3">id</th>
                                  <th className="py-2.5 px-3">slug</th>
                                  <th className="py-2.5 px-3">cosine_similarity</th>
                                  <th className="py-2.5 px-3">aeo_sentiment</th>
                                  <th className="py-2.5 px-3">source_authority</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-zinc-800">
                                {sqlQueryResults.data.map((row, i) => (
                                  <tr key={i} className="hover:bg-zinc-900/50">
                                    <td className="py-2.5 px-3 text-zinc-400">{row.id}</td>
                                    <td className="py-2.5 px-3 text-[#38bdf8] font-bold">{row.slug}</td>
                                    <td className="py-2.5 px-3 text-emerald-400 font-bold">{row.cosine_similarity}</td>
                                    <td className="py-2.5 px-3 text-[#f5a623]">{row.aeo_sentiment}</td>
                                    <td className="py-2.5 px-3 text-white font-bold">{row.source_authority}/100</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SUB-VISTA 3: TENSORES VECTORIALES (1536 DIMENSIONES EMBEDDING VIEWER) */}
                {activeDbTab === 'vectorEmbeddings' && (
                  <div className="space-y-6">
                    <div className="te-frame p-6 rounded-2xl border border-[var(--border-te)] bg-[#07090a] space-y-4">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div>
                          <h3 className="text-base font-bold font-mono text-white flex items-center gap-2">
                            <span>🧬</span> Matriz de Embeddings: text-embedding-3-small (OpenAI / Supabase)
                          </h3>
                          <p className="text-xs text-zinc-400 font-mono mt-0.5">
                            Cada vector representa la proyección semántica en 1,536 dimensiones de tus guías y artículos pilares.
                          </p>
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded bg-[#e85a2a]/10 text-[#e85a2a] border border-[#e85a2a]/30 font-bold">
                          1,536 FLOATS POR VECTOR
                        </span>
                      </div>

                      {/* Heatmap / Osciloscopio de Distribución Vectorial 64-bit */}
                      <div className="p-4 rounded-xl bg-[#0d0f14] border border-[var(--border-te)] space-y-3">
                        <span className="te-label text-zinc-400 block">VISUALIZADOR DE DENSIDAD DE TENSORES (PRIMERAS 64 DIMENSIONES)</span>
                        <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 pt-1">
                          {Array.from({ length: 64 }).map((_, i) => {
                            const val = Math.sin(i * 0.45) * 0.5 + 0.5;
                            return (
                              <div
                                key={i}
                                className="h-6 rounded-xs flex items-center justify-center font-mono text-[7px] font-bold transition-all hover:scale-125 cursor-pointer"
                                style={{
                                  backgroundColor: `rgba(232, 90, 42, ${Math.max(0.15, val)})`,
                                  color: val > 0.5 ? '#ffffff' : '#8a8f9d'
                                }}
                                title={`Dimensión D-${i}: ${(val * 2 - 1).toFixed(4)}`}
                              >
                                {i + 1}
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-1">
                          <span>-1.0000 (Repulsión)</span>
                          <span className="text-emerald-400">0.0000 (Ortogonal)</span>
                          <span className="text-[#e85a2a]">+1.0000 (Máxima Afinidad Coseno)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SUB-VISTA 4: ÍNDICES HNSW & OPTIMIZACIÓN DE LATENCIA */}
                {activeDbTab === 'indexes' && (
                  <div className="space-y-6">
                    <div className="te-frame p-6 rounded-2xl border border-[var(--border-te)] bg-[#07090a] space-y-4">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div>
                          <h3 className="text-base font-bold font-mono text-white flex items-center gap-2">
                            <span>🎯</span> Gestión de Índices HNSW (Hierarchical Navigable Small World)
                          </h3>
                          <p className="text-xs text-zinc-400 font-mono mt-0.5">
                            Optimiza los parámetros m (conexiones por nodo) y ef_construction para lograr latencias sub-15ms en miles de vectores.
                          </p>
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded bg-[#3ddc84]/10 text-[#3ddc84] border border-[#3ddc84]/30 font-bold">
                          ÍNDICE HNSW ACTIVO
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-[#121418] border border-[var(--border-te)] space-y-2">
                          <span className="te-label text-zinc-400 block">m (Max Conexiones / Capa)</span>
                          <span className="text-2xl font-mono font-bold text-white">16</span>
                          <p className="text-[11px] text-zinc-400 font-mono">
                            Mayor recall y precisión en vecindarios densos sin sobrecargar la memoria RAM.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#121418] border border-[var(--border-te)] space-y-2">
                          <span className="te-label text-zinc-400 block">ef_construction</span>
                          <span className="text-2xl font-mono font-bold text-[#f5a623]">64</span>
                          <p className="text-[11px] text-zinc-400 font-mono">
                            Balance perfecto entre tiempo de indexación al publicar y velocidad de consulta.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#121418] border border-[var(--border-te)] space-y-2">
                          <span className="te-label text-zinc-400 block">ef_search (Inferencia)</span>
                          <span className="text-2xl font-mono font-bold text-[#3ddc84]">40</span>
                          <p className="text-[11px] text-zinc-400 font-mono">
                            Garantiza búsquedas top-5 en menos de 12ms al redactar con Claude o GPT-4o.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-emerald-400">
                        <code>{`CREATE INDEX ON aeo_citation_vectors 
USING hnsw (embedding vector_cosine_ops) 
WITH (m = 16, ef_construction = 64);`}</code>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* VISTA 17: FINOPS & TOKEN TELEMETRY ENGINE */}
            {activeTab === 'finopsStudio' && (
              <div className="te-rack-unit relative space-y-6 animate-fade-in">
                <span className="te-rack-screw top-2.5 left-2.5" />
                <span className="te-rack-screw top-2.5 right-2.5" />
                <span className="te-rack-screw bottom-2.5 left-2.5" />
                <span className="te-rack-screw bottom-2.5 right-2.5" />

                {/* Top Module Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-[var(--border-te)]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="te-badge te-badge-orange font-mono text-[9px]">SLOT-09 // FINOPS ENGINE</span>
                      <span className="te-badge font-mono text-[9px] bg-zinc-800 text-zinc-300">REAL-TIME TOKENOMICS</span>
                      {finopsKillSwitchActive ? (
                        <span className="te-badge font-mono text-[9px] bg-red-950 text-red-400 border-red-800 animate-pulse">KILL-SWITCH ENGAGED</span>
                      ) : (
                        <span className="te-badge te-badge-green font-mono text-[9px]">TELEMETRY LIVE</span>
                      )}
                    </div>
                    <h2 className="text-xl font-mono font-bold tracking-tight text-white flex items-center gap-2">
                      <CurrencyDollarIcon className="w-5 h-5 text-[var(--accent-te)]" />
                      Token Telemetry &amp; FinOps Studio
                    </h2>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      Monitoreo de cuota, consumo de contexto LLM multi-modelo y costo por artículo en USD con corte de emergencia.
                    </p>
                  </div>

                  {/* Hardware Kill-Switch & Action Controls */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => {
                        const next = !finopsKillSwitchActive;
                        setFinopsKillSwitchActive(next);
                        toast.success(
                          next 
                            ? 'EMERGENCY KILL-SWITCH ENGAGED: Ingestion LLM suspendida inmediatamente.' 
                            : 'KILL-SWITCH RELEASED: Telemetría y llamadas de API restauradas.'
                        );
                      }}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-2 border ${
                        finopsKillSwitchActive
                          ? 'bg-red-900/60 border-red-500 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                          : 'bg-[#181b20] border-zinc-700 hover:border-red-500/60 text-zinc-300 hover:text-red-400'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${finopsKillSwitchActive ? 'bg-red-400 animate-ping' : 'bg-zinc-600'}`} />
                      {finopsKillSwitchActive ? 'KILL SWITCH [ACTIVO]' : 'ENGAGE KILL SWITCH'}
                    </button>

                    <button
                      onClick={() => {
                        const csvContent = "data:text/csv;charset=utf-8," + 
                          "Timestamp,Model,Tokens,EstimatedCostUSD,LatencyMs,Engine\n" +
                          "2026-10-12T14:30:00Z,gpt-4o,7200000,72.00,420,AEO Synthesizer\n" +
                          "2026-10-12T14:31:00Z,claude-3-5-sonnet,6100000,61.00,680,Deep Article Drafter\n" +
                          "2026-10-12T14:32:00Z,gemini-1-5-pro,3800000,38.00,310,GSC Corpus Analyzer\n" +
                          "2026-10-12T14:33:00Z,deepseek-v3,1320100,13.20,510,Citation Reasoning";
                        const encodedUri = encodeURI(csvContent);
                        const link = document.createElement("a");
                        link.setAttribute("href", encodedUri);
                        link.setAttribute("download", "finops_token_ledger.csv");
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        toast.success('Ledger FinOps exportado a CSV.');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#181b20] border border-[var(--border-te)] hover:border-zinc-500 text-zinc-300 font-mono text-xs flex items-center gap-1.5 transition-all"
                    >
                      <ArrowDownTrayIcon className="w-3.5 h-3.5" />
                      Export CSV
                    </button>
                  </div>
                </div>

                {/* Main 64-bit Hardware Token Meter */}
                <div className="p-5 rounded-xl bg-black border border-[var(--border-te)] space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <span className="te-label text-zinc-400">TOTAL MONTHLY INGESTION METRICS</span>
                      <div className="flex items-baseline gap-3 mt-1">
                        <span className="text-3xl font-mono font-bold tracking-tight text-[#3ddc84]">
                          {finopsTokensUsed.toLocaleString()}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                          / {finopsTokenBudget.toLocaleString()} TOKENS ({( (finopsTokensUsed / finopsTokenBudget) * 100 ).toFixed(1)}%)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-right">
                      <div>
                        <span className="te-label text-zinc-400">EST. MONTHLY COST</span>
                        <div className="text-xl font-mono font-bold text-white">$184.20 USD</div>
                      </div>
                      <div className="h-8 w-[1px] bg-zinc-800" />
                      <div>
                        <span className="te-label text-zinc-400">AVG / ARTICLE</span>
                        <div className="text-xl font-mono font-bold text-[var(--accent-te)]">$0.084 USD</div>
                      </div>
                    </div>
                  </div>

                  {/* 20-Segment Hardware LED Meter */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>0M TOKENS</span>
                      <span className="text-[var(--accent-te)]">ALERT THRESHOLD (80%: 40M)</span>
                      <span>50M MAX CAP</span>
                    </div>
                    <div className="grid grid-cols-20 gap-1 p-1 bg-[#121418] rounded-md border border-zinc-800">
                      {Array.from({ length: 20 }).map((_, i) => {
                        const cellPercent = (i + 1) * 5;
                        const currentPercent = (finopsTokensUsed / finopsTokenBudget) * 100;
                        const isFilled = cellPercent <= currentPercent;
                        const isWarning = cellPercent > 70 && cellPercent <= 85;
                        const isDanger = cellPercent > 85;
                        
                        let cellClass = "bg-zinc-900 border border-zinc-800/80";
                        if (isFilled) {
                          if (isDanger) cellClass = "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]";
                          else if (isWarning) cellClass = "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]";
                          else cellClass = "bg-[#3ddc84] shadow-[0_0_8px_rgba(61,220,132,0.6)]";
                        }
                        
                        return <div key={i} className={`h-4 rounded-sm transition-all duration-300 ${cellClass}`} />;
                      })}
                    </div>
                  </div>
                </div>

                {/* Model Breakdown Hardware Chassis Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      name: 'OpenAI GPT-4o',
                      role: 'AEO Synthesizer & Fact-Check',
                      tokens: '7.2M tokens',
                      cost: '$72.00',
                      latency: '420ms',
                      cacheHit: '92.4%',
                      color: '#10a37f',
                      barWidth: '72%'
                    },
                    {
                      name: 'Claude 3.5 Sonnet',
                      role: 'Deep Article Drafting (200k ctx)',
                      tokens: '6.1M tokens',
                      cost: '$61.00',
                      latency: '680ms',
                      cacheHit: '88.1%',
                      color: '#d97706',
                      barWidth: '61%'
                    },
                    {
                      name: 'Gemini 1.5 Pro',
                      role: 'GSC 1M Token Context Analyzer',
                      tokens: '3.8M tokens',
                      cost: '$38.00',
                      latency: '310ms',
                      cacheHit: '95.8%',
                      color: '#38bdf8',
                      barWidth: '38%'
                    },
                    {
                      name: 'DeepSeek V3',
                      role: 'Citation Reasoning & Schema',
                      tokens: '1.32M tokens',
                      cost: '$13.20',
                      latency: '510ms',
                      cacheHit: '84.0%',
                      color: '#a855f7',
                      barWidth: '13%'
                    }
                  ].map((model, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#121418] border border-[var(--border-te)] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-white">{model.name}</span>
                        <span className="text-[10px] font-mono font-bold text-zinc-300">{model.cost}</span>
                      </div>
                      <p className="text-[10px] font-mono text-zinc-400 line-clamp-1">{model.role}</p>

                      <div className="space-y-1">
                        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full" 
                            style={{ width: model.barWidth, backgroundColor: model.color }} 
                          />
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                          <span>{model.tokens}</span>
                          <span>LAT: {model.latency}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-zinc-400">Prompt Cache Hit:</span>
                        <span className="text-[#3ddc84] font-bold">{model.cacheHit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Parametric Hardware Calibration Bar */}
                <div className="p-4 rounded-xl bg-[#121418] border border-[var(--border-te)] flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="te-knob-dial">
                        <div className="te-knob-notch" style={{ transform: 'rotate(45deg)' }} />
                      </div>
                      <div>
                        <span className="te-label text-zinc-400">BUDGET ALERT</span>
                        <div className="text-xs font-mono font-bold text-white">$180.00 USD</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="te-knob-dial">
                        <div className="te-knob-notch" style={{ transform: 'rotate(-25deg)' }} />
                      </div>
                      <div>
                        <span className="te-label text-zinc-400">MAX ARTICLE CAP</span>
                        <div className="text-xs font-mono font-bold text-[#3ddc84]">$0.12 / art</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setFinopsTokensUsed(prev => prev + 250000);
                        toast.success('+250,000 tokens inyectados en la telemetría para prueba de estrés.');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-mono text-xs hover:text-white transition-all"
                    >
                      + Simular Carga (+250k tok)
                    </button>
                    <button
                      onClick={() => {
                        setFinopsTokensUsed(18420100);
                        toast.success('Contador de telemetría restaurado a baseline.');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-400 font-mono text-xs hover:text-white transition-all"
                    >
                      Reset Telemetría
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VISTA 18: UNIVERSE & INDUSTRY PRESETS VAULT */}
            {activeTab === 'presetsStudio' && (
              <div className="te-rack-unit relative space-y-6 animate-fade-in">
                <span className="te-rack-screw top-2.5 left-2.5" />
                <span className="te-rack-screw top-2.5 right-2.5" />
                <span className="te-rack-screw bottom-2.5 left-2.5" />
                <span className="te-rack-screw bottom-2.5 right-2.5" />

                {/* Top Module Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-[var(--border-te)]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="te-badge te-badge-orange font-mono text-[9px]">SLOT-10 // PRESETS VAULT</span>
                      <span className="te-badge font-mono text-[9px] bg-zinc-800 text-zinc-300">PARAMETRIC PROFILES</span>
                      <span className="te-badge te-badge-green font-mono text-[9px]">ACTIVE: {activeIndustryPreset.toUpperCase()}</span>
                    </div>
                    <h2 className="text-xl font-mono font-bold tracking-tight text-white flex items-center gap-2">
                      <AdjustmentsVerticalIcon className="w-5 h-5 text-[var(--accent-te)]" />
                      Universe &amp; Industry Presets Vault
                    </h2>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      Configurador multi-nicho: calibra los motores de redacción, similitud vectorial y scoring con un toque táctil.
                    </p>
                  </div>

                  {/* Export / Import Hardware Rig */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const rigData = {
                          version: "2.0-TE-SPEC",
                          preset: activeIndustryPreset,
                          revops: {
                            attributionWeight: revopsAttributionWeight,
                            minLeadScore: revopsMinLeadScore,
                            autoDealThreshold: revopsAutoDealThreshold
                          },
                          cms: {
                            patchConnected: cmsPatchConnected,
                            dispatchMode: cmsDispatchMode,
                            autoInjectJsonLd: cmsAutoInjectJsonLd
                          },
                          gscDecay: {
                            sensitivity: decayRadarSensitivity,
                            filter: decayRadarFilter
                          },
                          finops: {
                            tokenBudget: finopsTokenBudget,
                            tokensUsed: finopsTokensUsed,
                            killSwitch: finopsKillSwitchActive
                          },
                          exportedAt: new Date().toISOString()
                        };
                        const blob = new Blob([JSON.stringify(rigData, null, 2)], { type: "application/json" });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = `consenso-${activeIndustryPreset}.rig.json`;
                        a.click();
                        URL.revokeObjectURL(url);
                        toast.success(`Perfil [${activeIndustryPreset.toUpperCase()}] exportado como .rig.json`);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#181b20] border border-[var(--border-te)] hover:border-zinc-500 text-zinc-200 font-mono text-xs flex items-center gap-1.5 transition-all"
                    >
                      <ArrowDownTrayIcon className="w-3.5 h-3.5" />
                      Export Rig Profile
                    </button>

                    <button
                      onClick={() => {
                        setActiveIndustryPreset('saas');
                        setRevopsAttributionWeight(70);
                        setRevopsMinLeadScore(80);
                        setRevopsAutoDealThreshold(4500);
                        setDecayRadarSensitivity(25);
                        setCmsDispatchMode('draft-review');
                        toast.success('Valores de fábrica Teenage Engineering restaurados.');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 font-mono text-xs transition-all"
                    >
                      Reset Factory Specs
                    </button>
                  </div>
                </div>

                {/* 4-Bank Tactile Preset Selector */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      id: 'saas',
                      title: 'B2B SaaS Enterprise',
                      badge: 'REVOPS ATTR',
                      desc: 'Optimizado para pipelines comerciales, atribución directa a HubSpot y comparativas de software frente a incumbentes.',
                      features: ['Scoring MQL agresivo', 'Tablas comparativas vs competidores', 'Énfasis en citaciones Perplexity'],
                      color: '#e85a2a'
                    },
                    {
                      id: 'fintech',
                      title: 'FinTech & Compliance',
                      badge: 'ZERO HALLUCINATION',
                      desc: 'Tolerancia cero a inventos. Verificación contra fuentes oficiales (SEC, Banco Central) y citabilidad de regulaciones.',
                      features: ['Validación estricta de claims', 'Citación con código de ley', 'Temperatura LLM en 0.1'],
                      color: '#38bdf8'
                    },
                    {
                      id: 'ecommerce',
                      title: 'E-Commerce High Velocity',
                      badge: 'SCHEMA HEAVY',
                      desc: 'Despliegues masivos a Shopify / WooCommerce con inyección automática de Offer, AggregateRating e intenciones de compra.',
                      features: ['Dispatches en lotes de 50', 'Schema Product + FAQ', 'Velocidad de indexación 3x'],
                      color: '#f5a623'
                    },
                    {
                      id: 'health',
                      title: 'Health & Medical E-E-A-T',
                      badge: 'YMYL SURGICAL',
                      desc: 'Cumplimiento exhaustivo con guías médicas. Cruce automático contra PubMed, enlaces DOI y descargos de responsabilidad.',
                      features: ['Verificación DOI PubMed', 'Disclaimer médico obligatorio', 'Revisión por pares simulada'],
                      color: '#3ddc84'
                    }
                  ].map((preset) => {
                    const isSelected = activeIndustryPreset === preset.id;
                    return (
                      <div
                        key={preset.id}
                        onClick={() => {
                          setActiveIndustryPreset(preset.id as any);
                          toast.success(`Preset [${preset.title}] cargado en todo el laboratorio.`);
                        }}
                        className={`p-5 rounded-xl border transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-[#15181e] border-[var(--accent-te)] shadow-[0_0_20px_rgba(232,90,42,0.2)]'
                            : 'bg-[#121418] border-[var(--border-te)] hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span 
                            className="text-[9px] font-mono px-2 py-0.5 rounded-md font-bold"
                            style={{ 
                              backgroundColor: isSelected ? `${preset.color}20` : '#1c1f26',
                              color: isSelected ? preset.color : '#888'
                            }}
                          >
                            {preset.badge}
                          </span>
                          <span className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[var(--accent-te)] bg-[var(--accent-te)]' : 'border-zinc-700'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 bg-black rounded-full" />}
                          </span>
                        </div>

                        <h3 className="text-sm font-mono font-bold text-white mb-1.5">{preset.title}</h3>
                        <p className="text-xs text-zinc-400 font-mono mb-4 leading-relaxed">{preset.desc}</p>

                        <div className="space-y-1.5 pt-3 border-t border-zinc-800/80">
                          {preset.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                              <span className="w-1 h-1 rounded-full bg-zinc-600" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Parametric Hardware Fine-Tuner Rack */}
                <div className="p-5 rounded-xl bg-black border border-[var(--border-te)] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="te-label text-zinc-400">FINE-TUNING HARDWARE DECK</span>
                      <h4 className="text-sm font-mono font-bold text-white mt-0.5">Afinación Paramétrica del Motor Activo</h4>
                    </div>
                    <span className="text-[11px] font-mono text-[var(--accent-te)]">64-BIT PRECISION</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {/* Knobs & Controls */}
                    <div className="p-4 rounded-lg bg-[#121418] border border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="te-label text-zinc-400">AGRESIVIDAD DE CITACIÓN</span>
                        <span className="text-xs font-mono font-bold text-[#3ddc84]">{revopsAttributionWeight}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={revopsAttributionWeight}
                        onChange={(e) => setRevopsAttributionWeight(Number(e.target.value))}
                        className="w-full accent-[var(--accent-te)] bg-zinc-800 cursor-pointer h-1.5 rounded-lg"
                      />
                      <p className="text-[10px] font-mono text-zinc-500">
                        Ajusta la densidad de fragmentos directos formateados para Perplexity y SearchGPT.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#121418] border border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="te-label text-zinc-400">SENSIBILIDAD RADAR GSC</span>
                        <span className="text-xs font-mono font-bold text-[var(--accent-te)]">-{decayRadarSensitivity}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="60"
                        value={decayRadarSensitivity}
                        onChange={(e) => setDecayRadarSensitivity(Number(e.target.value))}
                        className="w-full accent-[var(--accent-te)] bg-zinc-800 cursor-pointer h-1.5 rounded-lg"
                      />
                      <p className="text-[10px] font-mono text-zinc-500">
                        Umbral de caída de clics para catalogar un post como contenido en decaimiento crítico.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#121418] border border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="te-label text-zinc-400">UMBRAL COSENO PGVECTOR</span>
                        <span className="text-xs font-mono font-bold text-[#38bdf8]">0.82 cos(θ)</span>
                      </div>
                      <input
                        type="range"
                        min="70"
                        max="95"
                        defaultValue="82"
                        className="w-full accent-[#38bdf8] bg-zinc-800 cursor-pointer h-1.5 rounded-lg"
                      />
                      <p className="text-[10px] font-mono text-zinc-500">
                        Filtro de similitud vectorial para deduplicar tópicos antes de iniciar redacción.
                      </p>
                    </div>
                  </div>
                </div>
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

                {/* Scorecard de Calidad de Entregable & Telemetría Profunda */}
                <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider block">
                        CALIFICACIÓN DE ENTREGABLE
                      </span>
                      <h5 className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                        <span>Quality Score AEO</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold">A+ LISTO</span>
                      </h5>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-emerald-400 font-mono">96.8</span>
                      <span className="text-[10px] text-zinc-500 font-mono block">/ 100 pts</span>
                    </div>
                  </div>

                  {/* Telemetría Clave: Asertividad & Cobertura de Palabras Clave */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] space-y-1">
                      <span className="text-[10px] font-mono text-zinc-400 block">Asertividad Fáctica</span>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-mono font-bold text-emerald-400">98.4%</span>
                        <span className="text-[9px] text-zinc-500 font-mono">4 fuentes</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[98.4%]"></div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] space-y-1">
                      <span className="text-[10px] font-mono text-zinc-400 block">Volumen Keywords</span>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-mono font-bold text-cyan-400">42.8k</span>
                        <span className="text-[9px] text-zinc-500 font-mono">búsquedas/mes</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full w-[91%]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Desglose de Keywords Cubiertas */}
                  <div className="space-y-1.5 text-xs">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider block">
                      Cluster de Keywords Inyectado (5 Términos)
                    </span>
                    <div className="space-y-1 text-[11px] font-mono">
                      <div className="flex justify-between items-center px-2 py-1 rounded bg-[var(--background)] border border-[var(--border)]">
                        <span className="text-zinc-300">revops hubspot</span>
                        <span className="text-cyan-400 font-bold">18,200 vol/mo</span>
                      </div>
                      <div className="flex justify-between items-center px-2 py-1 rounded bg-[var(--background)] border border-[var(--border)]">
                        <span className="text-zinc-300">alinear marketing y ventas</span>
                        <span className="text-cyan-400 font-bold">12,400 vol/mo</span>
                      </div>
                      <div className="flex justify-between items-center px-2 py-1 rounded bg-[var(--background)] border border-[var(--border)]">
                        <span className="text-zinc-300">sla lead scoring</span>
                        <span className="text-cyan-400 font-bold">6,800 vol/mo</span>
                      </div>
                      <div className="flex justify-between items-center px-2 py-1 rounded bg-[var(--background)] border border-[var(--border)]">
                        <span className="text-zinc-300">mql vs sql pipeline</span>
                        <span className="text-cyan-400 font-bold">5,400 vol/mo</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetría de Modelos e Inferencia */}
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2 text-xs">
                    <span className="text-[10px] font-mono text-[var(--primary)] uppercase font-bold tracking-wider flex items-center justify-between">
                      <span>Rendimiento de Modelos LLM</span>
                      <span className="text-emerald-400">● 0 Alucinaciones</span>
                    </span>
                    <div className="space-y-1.5 text-[11px] font-mono">
                      <div className="flex justify-between items-center text-zinc-300">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Claude 3.5 (Core)
                        </span>
                        <span className="text-zinc-400">64.2 tok/s · 1.4s · $0.038 USD</span>
                      </div>
                      <div className="flex justify-between items-center text-zinc-300">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> GPT-4o (Fact-Check)
                        </span>
                        <span className="text-zinc-400">100% verificado · $0.012 USD</span>
                      </div>
                    </div>
                  </div>

                  {/* Indicadores EEAT & Estructura */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[var(--muted-foreground)]">Respuesta Directa Párrafo 1</span>
                      <span className="text-emerald-500 font-bold">✓ Sintetizada</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[var(--muted-foreground)]">Densidad de Entidades (Graph)</span>
                      <span className="text-emerald-500 font-bold">✓ 14 Entidades</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[var(--muted-foreground)]">Marcado Schema JSON-LD</span>
                      <span className="text-emerald-500 font-bold">✓ Article + FAQ + Org</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[var(--muted-foreground)]">Fluidez Flesch-Kincaid</span>
                      <span className="text-emerald-500 font-bold">✓ 68 / 100 (Grado 8vo)</span>
                    </div>
                  </div>
                </div>

                {/* Meta Fields */}
                <div className="space-y-3 text-xs border-t border-[var(--border)] pt-4">
                  <p className="font-bold uppercase text-[10px] text-[var(--muted-foreground)] tracking-wider">Meta Etiquetas SEO Canónicas</p>
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

      {/* MODAL 3: COMMAND PALETTE GLOBAL (CMD + K) - SOBRIO & SIN EMOJIS */}
      {isCommandPaletteOpen && (() => {
        const paletteItems: Array<{
          id: string;
          name: string;
          desc: string;
          category: '01. MÓDULOS DE OPERACIÓN' | '02. BÚSQUEDA & SILOS' | '03. HERRAMIENTAS & SISTEMA';
          tab?: string;
          action?: 'canvas' | 'terminal' | 'onboarding' | 'theme' | 'executive';
          icon: React.ComponentType<{ className?: string }>;
          shortcut?: string;
        }> = [
          { 
            id: 'overview',
            name: "Visión General & ROI Telemetría", 
            desc: "Tablero central de rendimiento editorial, tráfico y valor generado", 
            category: "01. MÓDULOS DE OPERACIÓN",
            tab: "overview", 
            icon: PresentationChartLineIcon,
            shortcut: "⌘1"
          },
          { 
            id: 'engineBuilder',
            name: "Constructor Modular de Motores", 
            desc: "Diseño por bloques de pipelines editoriales y topología de ejecución", 
            category: "01. MÓDULOS DE OPERACIÓN",
            tab: "engineBuilder", 
            icon: CpuChipIcon,
            shortcut: "⌘2"
          },
          { 
            id: 'engineLauncher',
            name: "Lanzador Autónomo SEO / AEO", 
            desc: "Programación de agentes generativos y despacho programado a producción", 
            category: "01. MÓDULOS DE OPERACIÓN",
            tab: "engineLauncher", 
            icon: RocketLaunchIcon,
            shortcut: "⌘3"
          },
          { 
            id: 'revopsHubspot',
            name: "Motor RevOps & Conexión HubSpot", 
            desc: "Atribución multitoque, sincronización de deals y métricas de pipeline comercial", 
            category: "01. MÓDULOS DE OPERACIÓN",
            tab: "revopsHubspot", 
            icon: ArrowPathRoundedSquareIcon
          },
          { 
            id: 'cmsConnectors',
            name: "Conectores CMS (Payload, WordPress, Webflow)", 
            desc: "Gestión de endpoints de despacho automático y plugins de publicación", 
            category: "01. MÓDULOS DE OPERACIÓN",
            tab: "cmsConnectors", 
            icon: ServerStackIcon
          },
          { 
            id: 'aiShareOfVoice',
            name: "Radar AEO & Citabilidad (Perplexity / ChatGPT)", 
            desc: "Monitoreo de citaciones en motores conversacionales y Share of Voice", 
            category: "02. BÚSQUEDA & SILOS",
            tab: "aiShareOfVoice", 
            icon: SparklesIcon
          },
          { 
            id: 'clusterMap',
            name: "Topic Clusters & Silos Semánticos", 
            desc: "Visualizador topológico de silos de contenido y enlaces internos", 
            category: "02. BÚSQUEDA & SILOS",
            tab: "clusterMap", 
            icon: ShareIcon
          },
          { 
            id: 'sitemapReconstructor',
            name: "Reconstructor de Sitemaps & URLs", 
            desc: "Auditoría de arquitectura de slugs, canibalizaciones y satélites", 
            category: "02. BÚSQUEDA & SILOS",
            tab: "sitemapReconstructor", 
            icon: MapPinIcon
          },
          { 
            id: 'serpxray',
            name: "SERP & AEO X-Ray", 
            desc: "Radiografía competitiva de SERPs e intenciones de búsqueda en Google", 
            category: "02. BÚSQUEDA & SILOS",
            tab: "serpxray", 
            icon: BoltIcon
          },
          { 
            id: 'rag',
            name: "Datasets RAG & Embeddings Vectoriales", 
            desc: "Ingesta de conocimiento de marca y vectores de 1,536 dimensiones", 
            category: "02. BÚSQUEDA & SILOS",
            tab: "rag", 
            icon: DocumentTextIcon
          },
          { 
            id: 'contentDecay',
            name: "Auditoría GSC & Detección de Decay", 
            desc: "Detección temprana de erosión de clics e impresiones orgánicas", 
            category: "02. BÚSQUEDA & SILOS",
            tab: "contentDecay", 
            icon: ChartBarIcon
          },
          { 
            id: 'settings',
            name: "Bóveda Enterprise & Configuración de APIs", 
            desc: "Gestión segura de credenciales, DNS, webhooks y llaves de proveedores", 
            category: "03. HERRAMIENTAS & SISTEMA",
            tab: "settings", 
            icon: Cog6ToothIcon,
            shortcut: "⌘0"
          },
          { 
            id: 'documentation',
            name: "Manual Técnico & Matriz de Homologación", 
            desc: "Documentación oficial, diagramas de flujo y preguntas frecuentes", 
            category: "03. HERRAMIENTAS & SISTEMA",
            tab: "documentation", 
            icon: BookOpenIcon
          },
          { 
            id: 'terminal',
            name: "Consola Kernel de Agentes (En Vivo)", 
            desc: "Abrir terminal de telemetría y streams de ejecución de modelos", 
            category: "03. HERRAMIENTAS & SISTEMA",
            action: "terminal", 
            icon: CommandLineIcon
          },
          { 
            id: 'canvas',
            name: "Editor Canvas Editorial (Borradores)", 
            desc: "Lienzo de revisión y aprobación previa de publicaciones", 
            category: "03. HERRAMIENTAS & SISTEMA",
            action: "canvas", 
            icon: PencilSquareIcon
          },
          { 
            id: 'onboarding',
            name: "Asistente Guiado de Configuración (Zero-to-One)", 
            desc: "Iniciar tour paso a paso para configurar tu servicio de cero", 
            category: "03. HERRAMIENTAS & SISTEMA",
            action: "onboarding", 
            icon: SparklesIcon
          },
          { 
            id: 'theme',
            name: "Alternar Tema Visual (Día / Noche)", 
            desc: "Cambiar la paleta cromática entre modo industrial oscuro y claro", 
            category: "03. HERRAMIENTAS & SISTEMA",
            action: "theme", 
            icon: SunIcon
          }
        ];

        const filteredItems = paletteItems.filter(item => 
          !searchQuery || 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const handleExecuteItem = (item: typeof paletteItems[0]) => {
          if (item.tab) {
            setActiveTab(item.tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
          if (item.action === 'onboarding') {
            setOnboardingStep(1);
            setIsOnboardingOpen(true);
            showToast('Asistente Guiado', 'Iniciando recorrido interactivo de configuración', 'info');
          }
          if (item.action === 'theme') {
            toggleTheme();
            showToast('Tema Actualizado', theme === 'dark' ? 'Modo Día Activado' : 'Modo Noche Activado', 'success');
          }
          setIsCommandPaletteOpen(false);
          setSearchQuery('');
          setSelectedPaletteIndex(0);
        };

        return (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-md animate-fade-in">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header de Búsqueda */}
              <div className="p-4 border-b border-[var(--border)] flex items-center gap-3 bg-[var(--background)]">
                <MagnifyingGlassIcon className="w-5 h-5 text-zinc-400 shrink-0" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedPaletteIndex(0);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setSelectedPaletteIndex(prev => (prev + 1) % (filteredItems.length || 1));
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setSelectedPaletteIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
                    } else if (e.key === 'Enter') {
                      e.preventDefault();
                      if (filteredItems[selectedPaletteIndex]) {
                        handleExecuteItem(filteredItems[selectedPaletteIndex]);
                      }
                    }
                  }}
                  placeholder="Buscar módulo, motor, silo o acción rápida (ej: 'sitemaps', 'apis', 'deals')..."
                  className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder-zinc-500 focus:outline-none"
                  autoFocus
                />
                <kbd className="bg-[var(--muted)] text-[10px] font-mono px-2 py-1 rounded border border-[var(--border)] text-zinc-400">ESC</kbd>
              </div>

              {/* Lista de Resultados con Iconos SVG Propios */}
              <div className="p-2 max-h-96 overflow-y-auto space-y-1 text-xs">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500 font-mono text-xs">
                    No se encontraron módulos ni acciones para &quot;{searchQuery}&quot;
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isSelected = index === selectedPaletteIndex;
                    return (
                      <button 
                        key={item.id}
                        onClick={() => handleExecuteItem(item)}
                        onMouseEnter={() => setSelectedPaletteIndex(index)}
                        className={`w-full p-2.5 rounded-xl flex items-center justify-between transition-all text-left cursor-pointer group ${
                          isSelected 
                            ? 'bg-[var(--primary)] text-white shadow-xs' 
                            : 'hover:bg-[var(--muted)] text-[var(--foreground)]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                            isSelected 
                              ? 'bg-white/20 border-white/30 text-white' 
                              : 'bg-[var(--muted)]/60 border-[var(--border)] text-zinc-400 group-hover:text-zinc-200'
                          }`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <div className="flex items-center gap-2">
                              <p className={`font-semibold text-xs truncate ${isSelected ? 'text-white' : 'text-[var(--foreground)]'}`}>
                                {item.name}
                              </p>
                              <span className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded ${
                                isSelected ? 'bg-white/20 text-white' : 'bg-zinc-800 text-zinc-400'
                              }`}>
                                {item.category.split('.')[1]?.trim() || 'ACCIÓN'}
                              </span>
                            </div>
                            <p className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-[var(--muted-foreground)]'}`}>
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          {item.shortcut && (
                            <kbd className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                              isSelected ? 'bg-white/20 border-white/30 text-white' : 'bg-[var(--muted)] border-[var(--border)] text-zinc-500'
                            }`}>
                              {item.shortcut}
                            </kbd>
                          )}
                          <span className={`text-[10px] font-mono flex items-center gap-0.5 ${isSelected ? 'text-white font-bold' : 'text-zinc-500 opacity-0 group-hover:opacity-100'}`}>
                            <span>Ir</span> ↵
                          </span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer Sobrio */}
              <div className="p-3 bg-[var(--background)] border-t border-[var(--border)] flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                <span className="flex items-center gap-2">
                  <span>Navegar: <strong>↑ ↓</strong></span>
                  <span>·</span>
                  <span>Ejecutar: <strong>↵ Enter</strong></span>
                  <span>·</span>
                  <span>Cerrar: <strong>Esc</strong></span>
                </span>
                <span className="text-zinc-400">Buildations Command Center</span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* MODAL: CREAR / CALIBRAR MOTOR AUTÓNOMO EN VIVO */}
      {isEngineModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-[var(--border)] flex items-center justify-between bg-[var(--background)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                  <CpuChipIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[var(--foreground)]">
                    {engineModalMode === 'create' ? 'Configurar Nuevo Motor Autónomo' : `Calibrar Motor: ${editingEngineData.name}`}
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Ajusta la soberanía, pipeline de modelos LLM, base vectorial y destino CMS.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsEngineModalOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[var(--muted)] cursor-pointer"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-300 block mb-1">Nombre del Motor</label>
                  <input 
                    type="text" 
                    value={editingEngineData.name}
                    onChange={(e) => setEditingEngineData({ ...editingEngineData, name: e.target.value })}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl p-2.5 text-xs text-[var(--foreground)]"
                    placeholder="Ej. Motor RevOps SaaS Latam"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-zinc-300 block mb-1">Dominio del Cliente</label>
                  <input 
                    type="text" 
                    value={editingEngineData.targetDomain}
                    onChange={(e) => setEditingEngineData({ ...editingEngineData, targetDomain: e.target.value })}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl p-2.5 text-xs text-[var(--foreground)] font-mono"
                    placeholder="https://dominio-cliente.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-300 block mb-1">Propósito &amp; Nicho Editorial</label>
                <input 
                  type="text" 
                  value={editingEngineData.purpose}
                  onChange={(e) => setEditingEngineData({ ...editingEngineData, purpose: e.target.value })}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl p-2.5 text-xs text-[var(--foreground)]"
                  placeholder="Ej. Generación de demanda B2B y citabilidad en Perplexity / ChatGPT"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-300 block mb-1">Cerebro / Modelo Principal</label>
                  <select 
                    value={editingEngineData.llmCore}
                    onChange={(e) => setEditingEngineData({ ...editingEngineData, llmCore: e.target.value as any })}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl p-2.5 text-xs text-[var(--foreground)]"
                  >
                    <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (Máxima Calidad Editorial)</option>
                    <option value="GPT-4o Enterprise">GPT-4o Enterprise (Multimodal &amp; Auditor)</option>
                    <option value="DeepSeek-V3">DeepSeek-V3 (Baja Latencia &amp; Costo Ultra-Eficiente)</option>
                    <option value="Llama 3.3 70B">Llama 3.3 70B (Soberano en Hetzner / Ollama)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-zinc-300 block mb-1">Memoria Vectorial RAG</label>
                  <select 
                    value={editingEngineData.vectorStore}
                    onChange={(e) => setEditingEngineData({ ...editingEngineData, vectorStore: e.target.value as any })}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl p-2.5 text-xs text-[var(--foreground)]"
                  >
                    <option value="Supabase pgvector">Supabase pgvector (PostgreSQL Híbrido)</option>
                    <option value="Pinecone Vector DB">Pinecone Vector DB (Serverless)</option>
                    <option value="Qdrant Distributed">Qdrant Distributed (HNSW Hardware-Accelerated)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-300 block mb-1">Destino CMS de Despacho</label>
                  <select 
                    value={editingEngineData.cmsDestination}
                    onChange={(e) => setEditingEngineData({ ...editingEngineData, cmsDestination: e.target.value })}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl p-2.5 text-xs text-[var(--foreground)]"
                  >
                    <option value="WordPress REST API">WordPress REST API</option>
                    <option value="Payload CMS">Payload CMS</option>
                    <option value="Webflow Collections">Webflow Collections V2</option>
                    <option value="Ghost">Ghost Admin API</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-zinc-300 block mb-1">Frecuencia de Publicación</label>
                  <select 
                    value={editingEngineData.frequency}
                    onChange={(e) => setEditingEngineData({ ...editingEngineData, frequency: e.target.value as any })}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl p-2.5 text-xs text-[var(--foreground)]"
                  >
                    <option value="3_per_week">3x por semana (L-M-V)</option>
                    <option value="daily">Diario (7 posts / semana)</option>
                    <option value="weekly">Semanal (1 post pilar profundo)</option>
                    <option value="hourly_breaking">Horario (Newsjacking en caliente)</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-[var(--border)] space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-zinc-300">Umbral Mínimo de Asertividad Fáctica</span>
                  <span className="font-mono text-emerald-400 font-bold">{editingEngineData.assertivenessThreshold}%</span>
                </div>
                <input 
                  type="range" 
                  min="85" 
                  max="99" 
                  value={editingEngineData.assertivenessThreshold} 
                  onChange={(e) => setEditingEngineData({ ...editingEngineData, assertivenessThreshold: parseInt(e.target.value) })} 
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <p className="text-[10px] text-zinc-400">
                  Si un entregable no alcanza el {editingEngineData.assertivenessThreshold}% de asertividad verificada, el pipeline detiene el despacho y lo envía al Canvas para aprobación.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[var(--background)] border-t border-[var(--border)] flex justify-between items-center">
              <button 
                onClick={() => setIsEngineModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"
              >
                Cancelar
              </button>
              <button 
                onClick={() => {
                  if (engineModalMode === 'create') {
                    const newEngine = {
                      ...editingEngineData,
                      id: editingEngineData.id || `eng-0${activeEngines.length + 1}`
                    };
                    setActiveEngines(prev => [newEngine, ...prev]);
                    showToast('Motor Creado con Éxito', `"${newEngine.name}" configurado y añadido a la flota.`, 'success');
                  } else {
                    setActiveEngines(prev => prev.map(item => item.id === editingEngineData.id ? { ...item, ...editingEngineData } : item));
                    showToast('Motor Actualizado', `Parámetros de "${editingEngineData.name}" sincronizados en caliente.`, 'success');
                  }
                  setIsEngineModalOpen(false);
                }}
                className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                <CheckCircleIcon className="w-4 h-4" />
                <span>{engineModalMode === 'create' ? 'Crear & Calibrar Motor ✓' : 'Guardar Cambios ✓'}</span>
              </button>
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

      {/* MODAL 7: ONBOARDING INTERACTIVO ZERO-TO-ONE (SETUP WIZARD CON ANIMACIONES 64-BIT) */}
      {isOnboardingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="bg-[var(--card)] border-2 border-[var(--primary)]/60 rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col shadow-[0_0_60px_rgba(255,90,0,0.35)] overflow-hidden relative">
            
            {/* Ambient Animated Beam */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent animate-laser-sweep pointer-events-none" />

            {/* Header del Onboarding */}
            <div className="p-6 border-b border-[var(--border)] bg-gradient-to-r from-zinc-950 via-zinc-900 to-black flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] shadow-[0_0_20px_rgba(255,90,0,0.3)] animate-holo-float">
                  <SparklesIcon className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-base sm:text-lg text-white tracking-tight">
                      Recorrido de Configuración Guiada <span className="text-[var(--primary)]">// Zero-to-One</span>
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/40 font-bold">
                      Paso {onboardingStep} de 5
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Sigue las indicaciones visuales para desplegar y calibrar tu flota de motores, bases de datos y conectores CMS.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Stepper Dots Indicator */}
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onClick={() => setOnboardingStep(s)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        onboardingStep === s
                          ? 'w-7 bg-[var(--primary)] shadow-[0_0_8px_rgba(255,90,0,0.8)]'
                          : onboardingStep > s
                          ? 'w-2.5 bg-emerald-400'
                          : 'w-2.5 bg-zinc-700'
                      }`}
                      title={`Ir al Paso ${s}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setIsOnboardingOpen(false)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  title="Cerrar Asistente (Esc)"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="w-full bg-zinc-900 h-1 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[var(--primary)] to-amber-400 h-full transition-all duration-500"
                style={{ width: `${(onboardingStep / 5) * 100}%` }}
              />
            </div>

            {/* Modal Body: Dynamic Step Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">

              {/* PASO 1: SELECCIÓN DEL ESCENARIO DE NEGOCIO */}
              {onboardingStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center max-w-2xl mx-auto space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--primary)] font-bold">
                      01. Topología del Proyecto
                    </span>
                    <h2 className="text-2xl font-black text-[var(--foreground)]">¿Cuál es el Escenario Operativo de tu Organización?</h2>
                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)]">
                      Configuraremos automáticamente la arquitectura de silos, umbrales de latencia y modelos de IA según tu modelo de negocio.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
                    {[
                      {
                        id: 'b2b_saas',
                        title: 'Empresa B2B / SaaS de Alto Valor',
                        desc: 'Sincronización nativa con HubSpot, atribución de pipeline comercial MQL/SQL y citabilidad en respuestas de Perplexity.',
                        badge: 'Recomendado RevOps',
                        badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-500/10',
                        features: ['HubSpot Private App PAT', 'Silos de Decisión de Compra', 'Anthropic Claude 3.7 Reasoning']
                      },
                      {
                        id: 'ecommerce',
                        title: 'E-commerce & Catálogo Multi-Producto',
                        desc: 'Generación programática de fichas técnicas AEO, sitemaps divididos por categorías y purga instantánea en Vercel Edge.',
                        badge: 'Alta Frecuencia',
                        badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
                        features: ['DeepSeek MoE Inferencia Rápida', 'Reconstructor de Slugs Masivo', 'Caché Edge TTFB < 15ms']
                      },
                      {
                        id: 'agency_white_label',
                        title: 'Agencia Digital & White-Label Multicliente',
                        desc: 'Espacios de trabajo separados por dominio, portal ejecutivo C-Level para clientes y branding personalizado sin mención a Consenso.',
                        badge: 'Multi-Tenant',
                        badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
                        features: ['Portales Ejecutivos C-Level', 'Exportación de Reportes PDF/JSON', 'RBAC y Roles de Colaboradores']
                      },
                      {
                        id: 'custom_dev',
                        title: 'Arquitectura Headless & Cloud Híbrido',
                        desc: 'Desacoplamiento total con Next.js 15, base de datos Neon Serverless, Hetzner Bare-Metal y API REST para CMS propio.',
                        badge: 'DevOps / Bare-Metal',
                        badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
                        features: ['Cluster Hetzner NVMe', 'Postgres + pgvector 1536d', 'Webhooks HMAC-SHA256']
                      }
                    ].map((scenario) => {
                      const isSelected = onboardingScenario === scenario.id;
                      return (
                        <div
                          key={scenario.id}
                          onClick={() => setOnboardingScenario(scenario.id as any)}
                          className={`p-6 rounded-2xl border-2 transition-all cursor-pointer relative group flex flex-col justify-between ${
                            isSelected
                              ? 'bg-[var(--primary)]/10 border-[var(--primary)] shadow-[0_0_25px_rgba(255,90,0,0.25)]'
                              : 'bg-[var(--card)] border-[var(--border)] hover:border-zinc-500 hover:bg-[var(--muted)]/40'
                          }`}
                        >
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-2">
                              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold ${scenario.badgeColor}`}>
                                {scenario.badge}
                              </span>
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-[var(--primary)] bg-[var(--primary)] text-white' : 'border-zinc-600'}`}>
                                {isSelected && <CheckIcon className="w-3 h-3 font-black" />}
                              </div>
                            </div>
                            <h3 className="font-bold text-base text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                              {scenario.title}
                            </h3>
                            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                              {scenario.desc}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-[var(--border)]/70 mt-4 space-y-1.5">
                            {scenario.features.map((f, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-[11px] text-[var(--foreground)] font-mono">
                                <span className="text-[var(--primary)]">✓</span>
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Visual Simulation Strip */}
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 max-w-4xl mx-auto flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Perfil seleccionado calibrando presets de IA...
                    </span>
                    <span className="text-zinc-200 font-bold uppercase">{onboardingScenario.replace('_', ' ')}</span>
                  </div>
                </div>
              )}

              {/* PASO 2: CONECTIVIDAD DE DOMINIO & DNS */}
              {onboardingStep === 2 && (
                <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
                  <div className="text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                      02. Identidad Web &amp; Red Anycast
                    </span>
                    <h2 className="text-2xl font-black text-[var(--foreground)]">Vincular Dominio y Configurar Enrutamiento DNS</h2>
                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)]">
                      Tu dominio será enlazado a la red de borde global de Vercel y al clúster de cómputo para satélites automatizados.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Formulario de Dominio */}
                    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                      <div>
                        <label className="text-xs font-bold text-[var(--foreground)] block mb-1">
                          Dominio Principal de Producción
                        </label>
                        <input
                          type="text"
                          value={onboardingFormData.siteDomain}
                          onChange={(e) => setOnboardingFormData({ ...onboardingFormData, siteDomain: e.target.value })}
                          placeholder="https://tu-dominio.com"
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-xs font-mono text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none"
                        />
                        <p className="text-[10px] text-[var(--muted-foreground)] mt-1">
                          Acepta subdominios (ej. <code>blog.miempresa.com</code>) o dominios raíz (Apex).
                        </p>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[var(--foreground)] block mb-1">
                          Nicho o Industria de Operación
                        </label>
                        <input
                          type="text"
                          value={onboardingFormData.targetNiche}
                          onChange={(e) => setOnboardingFormData({ ...onboardingFormData, targetNiche: e.target.value })}
                          placeholder="ej. Finanzas B2B, Logística, Consultoría"
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-xs text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none"
                        />
                      </div>

                      <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 space-y-1">
                        <span className="font-bold flex items-center gap-1.5 text-blue-400">
                          <GlobeAltIcon className="w-4 h-4" /> Certificado SSL/TLS Automático
                        </span>
                        <p className="text-[11px] leading-relaxed">
                          La emisión del certificado Wildcard TLS 1.3 se gestiona de forma transparente sin intervención manual.
                        </p>
                      </div>
                    </div>

                    {/* Esquema Visual de Registros DNS a Configurar */}
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                        <span className="text-zinc-400 uppercase font-bold text-[10px] flex items-center gap-2">
                          <ServerStackIcon className="w-4 h-4 text-cyan-400" /> Registros DNS Requeridos
                        </span>
                        <span className="text-[9px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded font-bold">
                          84 POPs ANYCAST
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-blue-400 block">REGISTRO A (APEX)</span>
                            <span className="text-zinc-200">@ → 76.76.21.21</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-bold">Vercel Edge</span>
                        </div>

                        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-purple-400 block">CNAME (SUBDOMINIOS)</span>
                            <span className="text-zinc-200">cname → cname.vercel-dns.com</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-bold">Global CDN</span>
                        </div>

                        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-amber-400 block">TXT (VERIFICACIÓN)</span>
                            <span className="text-zinc-200">_buildations-challenge=live-ok</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-bold">SHA-256</span>
                        </div>
                      </div>

                      <div className="pt-2 text-center">
                        <span className="text-[10px] text-zinc-500">
                          Al continuar, el sistema generará estos registros automáticamente en la Bóveda de DNS.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 3: BÓVEDA DE IA & CLUSTERS DE BASES DE DATOS */}
              {onboardingStep === 3 && (
                <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
                  <div className="text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                      03. Motores de Inferencia &amp; Almacenamiento
                    </span>
                    <h2 className="text-2xl font-black text-[var(--foreground)]">Seleccionar Motor de IA y Clúster de Datos</h2>
                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)]">
                      Define la combinación de modelos de lenguaje para razonamiento y la base de datos relacional/vectorial.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Tarjeta de Motores de IA */}
                    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold font-mono uppercase text-[var(--foreground)] flex items-center gap-2">
                          <CpuChipIcon className="w-4 h-4 text-[var(--primary)]" />
                          Flota de Modelos de Lenguaje
                        </h4>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] font-bold">
                          DUAL-ENGINE
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          {
                            name: 'Anthropic Claude 3.7 + DeepSeek R1',
                            tag: 'Máxima Precisión Editorial & AEO',
                            icon: ClaudeLogo,
                            desc: 'Claude razona el contenido pilar; DeepSeek filtra miles de micro-intenciones a bajo costo.'
                          },
                          {
                            name: 'OpenAI GPT-4o + Text-Embedding-3',
                            tag: 'Estándar Corporativo Multimodal',
                            icon: OpenAILogo,
                            desc: 'Alta consistencia sintáctica y generación masiva de representaciones de 1,536 dimensiones.'
                          },
                          {
                            name: 'DeepSeek V3 Autónomo (Ultra-Fast)',
                            tag: 'Velocidad de Alto Volumen',
                            icon: CpuChipIcon,
                            desc: 'Inferencia a 90 tokens/segundo con costo reducido para catálogos extensos.'
                          }
                        ].map((m, i) => (
                          <div
                            key={i}
                            onClick={() => setOnboardingFormData({ ...onboardingFormData, engineModel: m.name })}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                              onboardingFormData.engineModel === m.name
                                ? 'bg-[var(--primary)]/10 border-[var(--primary)]'
                                : 'bg-[var(--background)] border-[var(--border)] hover:border-zinc-500'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-xs text-[var(--foreground)]">{m.name}</span>
                              <span className="text-[9px] font-mono text-zinc-400">{m.tag}</span>
                            </div>
                            <p className="text-[11px] text-[var(--muted-foreground)] leading-tight">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tarjeta de Clúster de Datos */}
                    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold font-mono uppercase text-[var(--foreground)] flex items-center gap-2">
                          <ServerStackIcon className="w-4 h-4 text-emerald-400" />
                          Capa de Datos &amp; pgvector
                        </h4>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
                          POSTGRESQL 16
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          {
                            name: 'Neon PostgreSQL (Dedicated Serverless)',
                            tag: 'Escalado Elástico a Cero',
                            icon: NeonLogo,
                            desc: '0.25 a 8 Compute Units automáticas. Branching instantáneo para pruebas aisladas.'
                          },
                          {
                            name: 'Hetzner AX101 Bare-Metal Cluster',
                            tag: 'Rendimiento Dedicado NVMe',
                            icon: HetznerLogo,
                            desc: 'Servidor físico con AMD EPYC, 128GB RAM y SSDs PCIe Gen4 sin límites de I/O.'
                          },
                          {
                            name: 'Supabase pgvector Híbrido',
                            tag: 'Full-Stack con Auth y RLS',
                            icon: SupabaseLogo,
                            desc: 'Tablas de auditoría en tiempo real y compatibilidad con LangChain / LlamaIndex.'
                          }
                        ].map((db, i) => (
                          <div
                            key={i}
                            onClick={() => setOnboardingFormData({ ...onboardingFormData, databaseBinding: db.name })}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                              onboardingFormData.databaseBinding === db.name
                                ? 'bg-emerald-500/10 border-emerald-500'
                                : 'bg-[var(--background)] border-[var(--border)] hover:border-zinc-500'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-xs text-[var(--foreground)]">{db.name}</span>
                              <span className="text-[9px] font-mono text-zinc-400">{db.tag}</span>
                            </div>
                            <p className="text-[11px] text-[var(--muted-foreground)] leading-tight">{db.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 4: CONECTOR CMS & REVOPS HUBSPOT */}
              {onboardingStep === 4 && (
                <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
                  <div className="text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                      04. Despacho Editorial &amp; CRM Sync
                    </span>
                    <h2 className="text-2xl font-black text-[var(--foreground)]">Conectar CMS y Trazabilidad Comercial</h2>
                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)]">
                      Los artículos generados con validación AEO serán publicados vía API a tu CMS y registrarán atribución de ingresos.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* CMS Target Selector */}
                    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                      <h4 className="text-xs font-bold font-mono uppercase text-[var(--foreground)] flex items-center gap-2">
                        <DocumentTextIcon className="w-4 h-4 text-cyan-400" />
                        CMS de Destino de Publicación
                      </h4>

                      <div className="space-y-3">
                        {[
                          {
                            id: 'Payload CMS + Next.js App Router',
                            title: 'Payload CMS (TypeScript Nativo)',
                            desc: 'Inyección de Schema JSON-LD directo en base de datos PostgreSQL. Soporte de campos visuales y Drafts.',
                            icon: PayloadLogo
                          },
                          {
                            id: 'WordPress REST API / Plugin',
                            title: 'WordPress (Application Password)',
                            desc: 'Despacho automatizado a sitios WordPress estándar con soporte de Yoast SEO y RankMath.',
                            icon: WordPressLogo
                          },
                          {
                            id: 'Custom Headless API Webhook',
                            title: 'API Personalizada / Webhook Endpoint',
                            desc: 'Entrega en payload JSON con firma criptográfica HMAC-SHA256 para sistemas propietarios.',
                            icon: BoltIcon
                          }
                        ].map((cms) => (
                          <div
                            key={cms.id}
                            onClick={() => setOnboardingFormData({ ...onboardingFormData, cmsTarget: cms.id })}
                            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                              onboardingFormData.cmsTarget === cms.id
                                ? 'bg-cyan-500/10 border-cyan-500'
                                : 'bg-[var(--background)] border-[var(--border)] hover:border-zinc-500'
                            }`}
                          >
                            <cms.icon className="w-5 h-5 text-white shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <span className="font-bold text-xs text-[var(--foreground)] block">{cms.title}</span>
                              <p className="text-[11px] text-[var(--muted-foreground)] leading-tight">{cms.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* HubSpot RevOps Integration Card */}
                    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold font-mono uppercase text-[var(--foreground)] flex items-center gap-2">
                          <HubSpotLogo className="w-4 h-4" />
                          Sincronización RevOps HubSpot
                        </h4>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 font-bold border border-orange-500/30">
                          CRM SYNC
                        </span>
                      </div>

                      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                        Conecta tu portal de HubSpot para medir qué clusters de contenido generan mayor cantidad de MQLs, SQLs y negocios cerrados ganados.
                      </p>

                      <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[var(--foreground)]">Activar Telemetría de Deals</span>
                          <input
                            type="checkbox"
                            checked={onboardingFormData.hubspotSync}
                            onChange={(e) => setOnboardingFormData({ ...onboardingFormData, hubspotSync: e.target.checked })}
                            className="w-4 h-4 accent-[var(--primary)] cursor-pointer"
                          />
                        </div>
                        <div className="text-[11px] font-mono text-zinc-400 space-y-1">
                          <div className="flex justify-between">
                            <span>Mapeo de Propiedades:</span>
                            <span className="text-emerald-400 font-bold">14 Propiedades Auto</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SLA Notificación SDR:</span>
                            <span className="text-white font-bold">&lt; 5 minutos</span>
                          </div>
                        </div>
                      </div>

                      {/* Ping Test Button */}
                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setIsOnboardingTestingConnection(true);
                            setOnboardingTestSuccess(false);
                            setTimeout(() => {
                              setIsOnboardingTestingConnection(false);
                              setOnboardingTestSuccess(true);
                              showToast(
                                'Conexión CMS & CRM Verificada',
                                'Tokens validados con éxito. Latencia de respuesta: 24ms (200 OK).',
                                'success'
                              );
                            }, 1100);
                          }}
                          disabled={isOnboardingTestingConnection}
                          className="w-full py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)] text-xs font-bold text-[var(--foreground)] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ArrowPathIcon className={`w-3.5 h-3.5 ${isOnboardingTestingConnection ? 'animate-spin text-[var(--primary)]' : ''}`} />
                          <span>
                            {isOnboardingTestingConnection
                              ? 'Comprobando Conexión REST...'
                              : onboardingTestSuccess
                              ? '✓ Conexión Validada (200 OK)'
                              : 'Probar Ping de Conexión'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 5: SIMULADOR DE PIPELINE EN VIVO & ACTIVACIÓN */}
              {onboardingStep === 5 && (
                <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
                  <div className="text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--primary)] font-bold">
                      05. Despliegue &amp; Validación de la Flota
                    </span>
                    <h2 className="text-2xl font-black text-[var(--foreground)]">Tu Ecosistema está Listo para Encenderse</h2>
                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)]">
                      Revisa el diagrama de arquitectura generado dinámicamente antes de encender el motor autónomo.
                    </p>
                  </div>

                  {/* DIAGRAMA ANIMADO DE TUBERÍA DE 64 BITS */}
                  <div className="p-6 rounded-2xl bg-zinc-950 border-2 border-[var(--primary)]/50 relative overflow-hidden space-y-6 shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                          Pipeline Topológico Activo: {onboardingFormData.siteDomain.replace(/^https?:\/\//, '')}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                        ESTADO: LISTO PARA LANZAMIENTO
                      </span>
                    </div>

                    {/* Flujo Gráfico en 4 Nodos con Cables Animados */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                      {/* Nodo 1 */}
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-center relative group">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 mx-auto flex items-center justify-center font-bold text-xs">
                          1
                        </div>
                        <span className="font-bold text-xs text-white block">Rastreo &amp; SERP</span>
                        <p className="text-[10px] text-zinc-400 font-mono">Llama 3.1 + GSC Telemetry</p>
                        <span className="text-[9px] text-emerald-400 font-mono font-bold block">✓ Calibrado</span>
                      </div>

                      {/* Nodo 2 */}
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-center relative group">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 text-[var(--primary)] mx-auto flex items-center justify-center font-bold text-xs">
                          2
                        </div>
                        <span className="font-bold text-xs text-white block">Inferencia &amp; AEO</span>
                        <p className="text-[10px] text-zinc-400 font-mono">{onboardingFormData.engineModel.split('+')[0]}</p>
                        <span className="text-[9px] text-emerald-400 font-mono font-bold block">✓ 1536d Vectors</span>
                      </div>

                      {/* Nodo 3 */}
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-center relative group">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center font-bold text-xs">
                          3
                        </div>
                        <span className="font-bold text-xs text-white block">Despacho CMS</span>
                        <p className="text-[10px] text-zinc-400 font-mono">{onboardingFormData.cmsTarget.split('(')[0]}</p>
                        <span className="text-[9px] text-emerald-400 font-mono font-bold block">✓ REST API OK</span>
                      </div>

                      {/* Nodo 4 */}
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-center relative group">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold text-xs">
                          4
                        </div>
                        <span className="font-bold text-xs text-white block">RevOps &amp; Atribución</span>
                        <p className="text-[10px] text-zinc-400 font-mono">HubSpot CRM SLA 5m</p>
                        <span className="text-[9px] text-emerald-400 font-mono font-bold block">✓ Pipeline Live</span>
                      </div>
                    </div>

                    {/* Resumen de Ajustes Seleccionados */}
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase">Dominio Base:</span>
                        <span className="text-white font-bold truncate block">{onboardingFormData.siteDomain}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase">Escenario:</span>
                        <span className="text-orange-400 font-bold capitalize block">{onboardingScenario.replace('_', ' ')}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase">Base de Datos:</span>
                        <span className="text-emerald-400 font-bold truncate block">{onboardingFormData.databaseBinding.split('(')[0]}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase">Disponibilidad SLA:</span>
                        <span className="text-cyan-400 font-bold block">99.98% Dedicado</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer con Navegación Anterior / Siguiente / Finalizar */}
            <div className="p-5 border-t border-[var(--border)] bg-gradient-to-r from-zinc-950 via-zinc-900 to-black flex items-center justify-between shrink-0">
              <button
                onClick={() => setOnboardingStep(Math.max(1, onboardingStep - 1))}
                disabled={onboardingStep === 1}
                className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  onboardingStep === 1
                    ? 'border-zinc-800 text-zinc-600 cursor-not-allowed'
                    : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                ← Paso Anterior
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOnboardingOpen(false)}
                  className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer px-3 py-2"
                >
                  Configurar más tarde
                </button>

                {onboardingStep < 5 ? (
                  <button
                    onClick={() => {
                      setOnboardingStep(onboardingStep + 1);
                      showToast(
                        `Paso ${onboardingStep + 1} Calibrado`,
                        'Progreso guardado automáticamente en el perfil del workspace.',
                        'info'
                      );
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-black transition-all shadow-[0_0_20px_rgba(255,90,0,0.4)] cursor-pointer flex items-center gap-2"
                  >
                    <span>Siguiente Paso →</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsOnboardingOpen(false);
                      setActiveTab('engineLauncher');
                      showToast(
                        '¡Flota Configurada y Encendida!',
                        `El ecosistema para ${onboardingFormData.siteDomain} está 100% operativo con ${onboardingFormData.engineModel}.`,
                        'success'
                      );
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-black transition-all shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer flex items-center gap-2"
                  >
                    <CheckCircleIcon className="w-4 h-4" />
                    <span>Lanzar &amp; Activar Servicios</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
