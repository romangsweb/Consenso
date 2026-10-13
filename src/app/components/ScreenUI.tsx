'use client';

import { useEffect, useState, type CSSProperties } from 'react';

/* ==========================================================================
   METADATOS DE CANALES (cada pestaña = un canal del controlador)
   ========================================================================== */
type ChannelMeta = { ch: string; bank: string; title: string; fig: string };

const CHANNELS: Record<string, ChannelMeta> = {
  overview: { ch: '01.1', bank: 'Inteligencia & AEO', title: 'Visión general y retorno del contenido', fig: 'ROI · TRÁFICO · PIPELINE' },
  aiShareOfVoice: { ch: '01.2', bank: 'Inteligencia & AEO', title: 'Radar de citabilidad en motores de IA', fig: 'PERPLEXITY · CHATGPT · AI OVERVIEWS' },
  serpxray: { ch: '01.3', bank: 'Inteligencia & AEO', title: 'Rayos X de SERP y respuestas generativas', fig: 'SERP · INTENCIÓN · SNIPPETS' },
  contentDecay: { ch: '01.4', bank: 'Inteligencia & AEO', title: 'Barrido de decaimiento en Search Console', fig: 'GSC · CLICS · IMPRESIONES' },
  executiveAudit: { ch: '01.5', bank: 'Inteligencia & AEO', title: 'Auditoría ejecutiva AEO', fig: 'SCORECARD · C-LEVEL' },
  engineBuilder: { ch: '02.1', bank: 'Motor Editorial & CMS', title: 'Constructor modular de motores', fig: 'BLOQUES · TOPOLOGÍA · PIPELINE' },
  engineLauncher: { ch: '02.2', bank: 'Motor Editorial & CMS', title: 'Lanzador autónomo SEO / AEO', fig: 'COLA · REDACCIÓN · DESPACHO' },
  cmsConnectors: { ch: '02.3', bank: 'Motor Editorial & CMS', title: 'Patch bay de conectores CMS', fig: 'PAYLOAD · WORDPRESS · WEBHOOKS' },
  revopsHubspot: { ch: '02.4', bank: 'Motor Editorial & CMS', title: 'Motor RevOps y atribución HubSpot', fig: 'MQL → SQL → DEAL' },
  clusterMap: { ch: '03.1', bank: 'Topic Silos & Datos', title: 'Topic clusters y silos semánticos', fig: 'PILARES · SATÉLITES · ENLACES' },
  sitemapReconstructor: { ch: '03.2', bank: 'Topic Silos & Datos', title: 'Reconstructor de sitemaps y slugs', fig: 'URLS · CANIBALIZACIÓN · SLUGS' },
  rag: { ch: '03.3', bank: 'Topic Silos & Datos', title: 'Datasets RAG y embeddings', fig: 'INGESTA · CHUNKS · VECTORES' },
  databaseStudio: { ch: '03.4', bank: 'Topic Silos & Datos', title: 'PGVector y tensores de 1536 dimensiones', fig: 'HNSW · COSENO · LATENCIA' },
  finopsStudio: { ch: '03.5', bank: 'Topic Silos & Datos', title: 'FinOps y monitor de tokens', fig: 'TOKENS · USD · MODELOS' },
  settings: { ch: '04.1', bank: 'Sistema & Gobernanza', title: 'Bóveda y configuración', fig: 'LLAVES · DOMINIO · EQUIPO' },
  presetsStudio: { ch: '04.2', bank: 'Sistema & Gobernanza', title: 'Presets y personalización', fig: 'PERFILES · CLIENTES' },
  documentation: { ch: '04.3', bank: 'Sistema & Gobernanza', title: 'Manual técnico y homologación', fig: 'GUÍAS · ARQUITECTURA · FAQ' },
};

const FALLBACK: ChannelMeta = { ch: '00.0', bank: 'Sistema', title: 'Módulo del controlador', fig: 'SEÑAL' };

export function getChannel(tab: string): ChannelMeta {
  return CHANNELS[tab] ?? FALLBACK;
}

/* ==========================================================================
   SPLIT-WORD: revelado palabra por palabra (como el H1 de soyroman.com)
   ========================================================================== */
export function SplitWords({ text, className = '', base = 40 }: { text: string; className?: string; base?: number }) {
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="split-word" aria-hidden="true">
          <span style={{ '--i': i, '--base': `${base}ms` } as CSSProperties}>{w}</span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}

/* ==========================================================================
   CABECERA DE CANAL: se re-monta en cada cambio de pestaña y reproduce
   el encendido + split-word + diagrama de señal con partículas animadas
   ========================================================================== */
export function ChannelHeader({ tab }: { tab: string }) {
  const meta = getChannel(tab);
  const figId = `sig-${tab}`;

  return (
    <section className="channel-header" aria-label={`Canal ${meta.ch}: ${meta.title}`}>
      <div className="channel-header__copy">
        <div className="channel-header__kicker fade-up">
          <span className="channel-header__square" />
          <span>CH.{meta.ch}</span>
          <span className="channel-header__sep">//</span>
          <span>{meta.bank}</span>
        </div>
        <h2 className="channel-header__title">
          <SplitWords text={meta.title} />
        </h2>
      </div>

      {/* Diagrama de señal: entrada → motor → salida, con pulsos viajando */}
      <div className="channel-header__fig fade-up" style={{ '--delay': '160ms' } as CSSProperties}>
        <svg viewBox="0 0 260 72" className="w-full h-auto" role="img" aria-label="Flujo de señal del canal">
          <defs>
            <pattern id={`${figId}-dots`} width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="rgba(232,90,42,.18)" />
            </pattern>
          </defs>
          <rect width="260" height="72" fill={`url(#${figId}-dots)`} />
          <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="7" fontWeight="700" letterSpacing="1.2">
            <rect x="6" y="10" width="54" height="20" fill="none" stroke="currentColor" strokeOpacity=".35" />
            <text x="12" y="23" fill="currentColor" fillOpacity=".7">INPUT</text>
            <rect x="6" y="42" width="54" height="20" fill="none" stroke="currentColor" strokeOpacity=".35" />
            <text x="12" y="55" fill="currentColor" fillOpacity=".7">DATOS</text>
            <rect x="103" y="22" width="56" height="28" fill="#e85a2a" />
            <text x="111" y="39" fill="#07090a">MOTOR</text>
            <rect x="200" y="22" width="54" height="28" fill="none" stroke="#e85a2a" strokeWidth="1.2" />
            <rect x="250" y="20" width="5" height="5" fill="#3ddc84" />
            <text x="207" y="39" fill="#e85a2a">OUT</text>
          </g>
          <g fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1">
            <path id={`${figId}-a`} d="M60 20 H82 V36 H103" />
            <path id={`${figId}-b`} d="M60 52 H82 V36 H103" />
            <path id={`${figId}-c`} d="M159 36 H200" />
          </g>
          <g fill="#e85a2a" className="motion-reduce:hidden">
            <circle r="2.4">
              <animateMotion dur="2.2s" repeatCount="indefinite">
                <mpath href={`#${figId}-a`} />
              </animateMotion>
            </circle>
            <circle r="2.4">
              <animateMotion dur="2.6s" begin="-1.1s" repeatCount="indefinite">
                <mpath href={`#${figId}-b`} />
              </animateMotion>
            </circle>
            <circle r="2.4" fill="#3ddc84">
              <animateMotion dur="1.2s" repeatCount="indefinite">
                <mpath href={`#${figId}-c`} />
              </animateMotion>
            </circle>
          </g>
        </svg>
        <span className="channel-header__caption">FIG.{meta.ch} // {meta.fig}</span>
      </div>
    </section>
  );
}

/* ==========================================================================
   TICKER LCD: franja de estado del dispositivo con reloj propio.
   Vive aislado para que el tic de 1s no re-renderice el dashboard completo.
   ========================================================================== */
const TICKER_MESSAGES = [
  'MOTOR EDITORIAL EN LÍNEA',
  'AEO SHARE OF VOICE 64.2%',
  'PERPLEXITY CITÓ blog.buildations.studio [1]',
  'ANTI-ALUCINACIÓN 98.4% FIDELIDAD',
  'GSC: 3 URLS CON DECAY DETECTADO',
  'PIPELINE HUBSPOT USD 148,200',
  'SCHEMA JSON-LD VÁLIDO · 0 ERRORES',
  'TOKENS HOY 1.82M · USD 14.20',
];

export function ScreenTicker({ tab }: { tab: string }) {
  const [now, setNow] = useState<string>('--:--:--');
  const meta = getChannel(tab);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    setNow(fmt());
    const id = window.setInterval(() => setNow(fmt()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const loop = [...TICKER_MESSAGES, ...TICKER_MESSAGES];

  return (
    <div className="screen-ticker" role="status" aria-live="off">
      <div className="screen-ticker__cell">
        <i className="led-rec" aria-hidden="true" />
        <span>REC</span>
      </div>
      <div className="screen-ticker__cell screen-ticker__cell--ch">
        <span className="opacity-50">CH</span>
        <span className="font-dot text-[var(--primary)]">{meta.ch}</span>
      </div>
      <div className="screen-ticker__marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((m, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="screen-ticker__cell hidden md:flex">
        <span className="opacity-50">BPM</span>
        <span className="font-dot">120.0</span>
      </div>
      <div className="screen-ticker__cell screen-ticker__cell--clock">
        <span className="font-dot tabular-nums">{now}</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   BOOT SCREEN: secuencia de encendido del controlador (una vez por sesión)
   ========================================================================== */
const BOOT_LINES = [
  'BUILDATIONS OP-ENGINE // FIRMWARE 4.2.0',
  'CARGANDO BANCOS: AEO · EDITORIAL · SILOS · SISTEMA',
  'MONTANDO PGVECTOR 1536D ............ OK',
  'ENLAZANDO HUBSPOT · PAYLOAD · WORDPRESS ... OK',
  'CALIBRANDO RADAR DE CITABILIDAD ...... OK',
  'PANTALLA LISTA',
];

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      onDone();
      return;
    }
    const timers: number[] = [];
    BOOT_LINES.forEach((_, i) => {
      timers.push(window.setTimeout(() => setVisibleLines(i + 1), 160 + i * 190));
    });
    timers.push(window.setTimeout(() => setClosing(true), 160 + BOOT_LINES.length * 190 + 250));
    timers.push(window.setTimeout(onDone, 160 + BOOT_LINES.length * 190 + 700));

    const skip = () => {
      setClosing(true);
      timers.push(window.setTimeout(onDone, 380));
    };
    window.addEventListener('keydown', skip, { once: true });
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener('keydown', skip);
    };
  }, [onDone]);

  const progress = Math.round((visibleLines / BOOT_LINES.length) * 16);

  return (
    <div
      className={`boot-screen ${closing ? 'boot-screen--off' : ''}`}
      onClick={() => {
        setClosing(true);
        window.setTimeout(onDone, 380);
      }}
      role="dialog"
      aria-label="Encendiendo controlador"
    >
      <div className="boot-screen__inner">
        <div className="boot-screen__logo">
          <span className="font-dot">BUILDATIONS</span>
          <i className="led-rec" aria-hidden="true" />
        </div>
        <ul className="boot-screen__log">
          {BOOT_LINES.slice(0, visibleLines).map((l, i) => (
            <li key={l} className={i === visibleLines - 1 ? 'is-last' : ''}>
              <span className="opacity-40">{String(i).padStart(2, '0')}</span> {l}
            </li>
          ))}
        </ul>
        <div className="boot-screen__meter" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className={i < progress ? 'on' : ''} />
          ))}
        </div>
        <p className="boot-screen__hint">PULSA CUALQUIER TECLA PARA OMITIR</p>
      </div>
    </div>
  );
}
