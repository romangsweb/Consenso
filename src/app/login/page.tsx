'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [email, setEmail] = useState('roman@buildations.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);
  const [particleMode, setParticleMode] = useState<'mesh' | 'wave' | 'flow'>('mesh');

  // Canvas generativo dinámico (Simulación de Grafo Abstracto & Partículas Cuánticas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Sistema de Nodos Matemáticos Abstractos
    const nodeCount = 65;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      pulsePhase: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Fondo base oscuro profundo con ligero gradiente radial
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        100,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, '#101014');
      bgGrad.addColorStop(0.5, '#0a0a0c');
      bgGrad.addColorStop(1, '#050507');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Efecto Abstracto 1: Ondas sinusoidales matemáticas de fondo
      ctx.lineWidth = 1;
      for (let waveIndex = 0; waveIndex < 3; waveIndex++) {
        ctx.beginPath();
        const offset = waveIndex * 80;
        const alpha = 0.04 + waveIndex * 0.02;
        ctx.strokeStyle = `rgba(255, 90, 0, ${alpha})`;

        for (let x = 0; x < width; x += 15) {
          const y =
            height / 2 +
            Math.sin(x * 0.003 + time + waveIndex) * 90 +
            Math.cos(x * 0.002 - time * 0.8) * 50 +
            offset;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Efecto Abstracto 2: Red de nodos y líneas de gravedad
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Rebote en bordes
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Pulso
        const alpha = Math.sin(time * 2 + node.pulsePhase) * 0.25 + node.baseAlpha;

        // Dibujar punto
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 120, 40, ${alpha})`;
        ctx.fill();

        // Conectar con nodos cercanos (Red neuronal / Grafo de Conocimiento)
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 150;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(255, 90, 0, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/';
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden selection:bg-[#ff5a00] selection:text-white font-sans">
      {/* Dynamic Generative Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Subtle Noise Texture & Corner Vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none z-1 bg-black/25"></div>

      {/* Top Navbar Minimalista */}
      <header className="absolute top-0 left-0 right-0 p-6 sm:px-12 flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-950/80 border border-zinc-700/60 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(255,90,0,0.25)] group-hover:border-[#ff5a00] transition-colors">
            <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
              <rect x="3" y="3" width="13" height="13" rx="2.5" fill="#ff5a00" />
              <rect x="20" y="3" width="13" height="13" rx="2.5" fill="none" stroke="#ff5a00" strokeWidth="1.5" />
              <rect x="3" y="20" width="13" height="13" rx="2.5" fill="none" stroke="#ff5a00" strokeWidth="1.5" strokeDasharray="2 2" />
              <rect x="20" y="20" width="13" height="13" rx="2.5" fill="#ff5a00" />
              <circle cx="9.5" cy="9.5" r="2" fill="#ffffff" />
              <circle cx="26.5" cy="26.5" r="2" fill="#ffffff" />
            </svg>
          </div>
          <span className="font-extrabold text-sm tracking-widest text-zinc-200">
            BUILDATIONS <span className="text-[#ff5a00]">STUDIO</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
            ACCESO SEGURO // SSO HUBSPOT
          </span>
        </div>
      </header>

      {/* Floating Glassmorphic Login Card */}
      <main className="relative z-10 w-full max-w-md">
        <div className="relative rounded-2xl p-8 sm:p-10 border border-white/10 bg-zinc-950/65 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group">
          {/* Subtle Top Ambient Light Accent */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff5a00] to-transparent opacity-80"></div>

          <div className="mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-mono font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00]"></span>
              Portal de Operaciones RevOps
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Iniciar Sesión
            </h1>
            <p className="text-xs text-zinc-400 mt-1.5">
              Ingresa tus credenciales para administrar tus grafos y conectores.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                Correo Corporativo
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-[#ff5a00] focus:ring-1 focus:ring-[#ff5a00] transition-colors font-mono"
                placeholder="nombre@empresa.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-mono font-medium text-zinc-300">
                  Contraseña
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Se envió un enlace temporal de autenticación a tu bandeja corporativa.');
                  }}
                  className="text-[11px] text-[#ff5a00] hover:underline"
                >
                  ¿Olvidaste tu clave?
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-[#ff5a00] focus:ring-1 focus:ring-[#ff5a00] transition-colors font-mono"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-[#ff5a00] hover:bg-[#e04e00] text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,90,0,0.35)] hover:shadow-[0_0_28px_rgba(255,90,0,0.5)] transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Autenticando...</span>
                  </>
                ) : (
                  <span>Entrar al Dashboard</span>
                )}
              </button>
            </div>
          </form>

          {/* HubSpot Single Sign-On Alternative */}
          <div className="mt-6 pt-6 border-t border-zinc-800/80 text-center">
            <button
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  window.location.href = '/';
                }, 600);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#ff7a59]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.8 6.5a3 3 0 10-3 3v2.3a4.7 4.7 0 00-2.3-1.1v-3a2.5 2.5 0 10-1.8 0v3a4.7 4.7 0 00-2.3 1.1V9.5a3 3 0 10-3-3 3 3 0 003 3v2.3A4.8 4.8 0 008 14.8V17a3 3 0 101.8 0v-2.2a4.8 4.8 0 002.3-1.2 4.8 4.8 0 002.3 1.2V17a3 3 0 101.8 0v-2.2a4.8 4.8 0 001.6-3V9.5a3 3 0 001-3z" />
              </svg>
              <span>Continuar con HubSpot SSO (Hub #982104)</span>
            </button>
          </div>
        </div>

        {/* Footer Industrial Coordinates */}
        <div className="mt-6 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            ← Volver a la Consola
          </Link>
          <span>BUILDATIONS PROTOCOL // v2.4</span>
        </div>
      </main>
    </div>
  );
}
