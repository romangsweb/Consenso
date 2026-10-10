'use client';

import { useState } from 'react';
import { 
  ChartBarIcon, 
  UsersIcon, 
  Cog6ToothIcon, 
  ArrowTrendingUpIcon, 
  MagnifyingGlassIcon,
  BellIcon,
  GlobeAltIcon
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
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
          >
            <ChartBarIcon className="w-5 h-5 mr-3" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('competitors')}
            className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'competitors' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
          >
            <UsersIcon className="w-5 h-5 mr-3" /> Competencia
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-[var(--primary)] text-white' : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--muted)]'}`}
          >
            <Cog6ToothIcon className="w-5 h-5 mr-3" /> Perfil & Ajustes
          </button>
        </nav>
        
        <div className="p-4 border-t border-[var(--border)]">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 mr-3"></div>
            <div>
              <p className="text-sm font-medium">Román García</p>
              <p className="text-xs text-[var(--muted-foreground)]">Pro Plan</p>
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
            <span className="text-white capitalize">{activeTab}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-[var(--muted-foreground)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Buscar..." 
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
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Visión General</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Resumen de rendimiento de los últimos 30 días.</p>
                  </div>
                  <button className="bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted)] transition-colors">
                    Exportar Reporte
                  </button>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6">
                    <p className="text-sm text-[var(--muted-foreground)] font-medium mb-2">Tráfico Orgánico</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-semibold">124.5K</p>
                      <p className="text-green-500 text-sm font-medium flex items-center">
                        <ArrowTrendingUpIcon className="w-4 h-4 mr-1" /> +14.2%
                      </p>
                    </div>
                  </div>
                  <div className="glass-card p-6">
                    <p className="text-sm text-[var(--muted-foreground)] font-medium mb-2">Costo por Adquisición (CPA)</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-semibold">$12.40</p>
                      <p className="text-green-500 text-sm font-medium flex items-center">
                        <ArrowTrendingUpIcon className="w-4 h-4 mr-1" /> -5.1%
                      </p>
                    </div>
                  </div>
                  <div className="glass-card p-6 border-t-2 border-t-[var(--primary)]">
                    <p className="text-sm text-[var(--muted-foreground)] font-medium mb-2">ROAS Global</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-semibold">3.2x</p>
                      <p className="text-green-500 text-sm font-medium flex items-center">
                        <ArrowTrendingUpIcon className="w-4 h-4 mr-1" /> +0.4x
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Chart Mockup */}
                <div className="glass-card p-6 h-80 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-medium text-lg">Rendimiento de Campañas</h3>
                    <div className="flex space-x-2 text-xs">
                      <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-[var(--primary)] mr-2"></span>Clics</div>
                      <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>Conversiones</div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end justify-between gap-2 border-b border-[var(--border)] pb-2 relative">
                    {/* Dummy Chart Bars */}
                    {[40, 70, 45, 90, 65, 85, 100, 75, 50, 80, 60, 95].map((h, i) => (
                      <div key={i} className="w-full flex flex-col justify-end items-center group cursor-pointer">
                        <div className="w-full bg-[var(--primary)]/20 hover:bg-[var(--primary)]/40 rounded-t-sm transition-all relative" style={{ height: `${h}%` }}>
                           <div className="absolute bottom-0 w-full bg-[var(--primary)] rounded-t-sm" style={{ height: `${h * 0.4}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity Table */}
                <div className="glass-card overflow-hidden">
                  <div className="px-6 py-4 border-b border-[var(--border)]">
                    <h3 className="font-medium">Campañas Activas</h3>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--card)] text-[var(--muted-foreground)]">
                      <tr>
                        <th className="px-6 py-3 font-medium">Nombre de Campaña</th>
                        <th className="px-6 py-3 font-medium">Plataforma</th>
                        <th className="px-6 py-3 font-medium">Estado</th>
                        <th className="px-6 py-3 font-medium text-right">Inversión</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {[
                        { name: "Retargeting Q4", platform: "Meta Ads", status: "Active", spend: "$4,200.00" },
                        { name: "Búsqueda Genérica - CRM", platform: "Google Ads", status: "Active", spend: "$8,150.00" },
                        { name: "Lanzamiento Feature X", platform: "LinkedIn", status: "Paused", spend: "$1,200.00" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-[var(--muted)]/50 transition-colors">
                          <td className="px-6 py-4 font-medium">{row.name}</td>
                          <td className="px-6 py-4 text-[var(--muted-foreground)]">{row.platform}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-400'}`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-mono">{row.spend}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* COMPETITORS TAB */}
            {activeTab === 'competitors' && (
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Radar de Competencia</h2>
                    <p className="text-[var(--muted-foreground)] text-sm">Monitoreo de posicionamiento y palabras clave.</p>
                  </div>
                  <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-[0_0_15px_rgba(255,90,0,0.3)]">
                    + Añadir Competidor
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Competitor Card 1 */}
                  <div className="glass-card p-6 border-l-4 border-l-red-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold">Acme Corp</h3>
                        <a href="#" className="text-sm text-blue-400 hover:underline">acmecorp.com</a>
                      </div>
                      <span className="bg-red-500/10 text-red-500 px-2 py-1 rounded text-xs font-bold border border-red-500/20">AMENAZA ALTA</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[var(--card)] p-3 rounded border border-[var(--border)]">
                        <p className="text-xs text-[var(--muted-foreground)]">Domain Authority</p>
                        <p className="text-xl font-semibold">78 / 100</p>
                      </div>
                      <div className="bg-[var(--card)] p-3 rounded border border-[var(--border)]">
                        <p className="text-xs text-[var(--muted-foreground)]">Tráfico Estimado</p>
                        <p className="text-xl font-semibold">1.2M <span className="text-green-500 text-sm">↑</span></p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted-foreground)] mb-2">Keywords Compartidas (Top 3)</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded border border-[var(--border)]">software crm</span>
                        <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded border border-[var(--border)]">ventas b2b</span>
                        <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded border border-[var(--border)]">erp cloud</span>
                      </div>
                    </div>
                  </div>

                  {/* Competitor Card 2 */}
                  <div className="glass-card p-6 border-l-4 border-l-yellow-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold">GlobalTech</h3>
                        <a href="#" className="text-sm text-blue-400 hover:underline">globaltech.io</a>
                      </div>
                      <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded text-xs font-bold border border-yellow-500/20">AMENAZA MEDIA</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[var(--card)] p-3 rounded border border-[var(--border)]">
                        <p className="text-xs text-[var(--muted-foreground)]">Domain Authority</p>
                        <p className="text-xl font-semibold">62 / 100</p>
                      </div>
                      <div className="bg-[var(--card)] p-3 rounded border border-[var(--border)]">
                        <p className="text-xs text-[var(--muted-foreground)]">Tráfico Estimado</p>
                        <p className="text-xl font-semibold">450K <span className="text-red-500 text-sm">↓</span></p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted-foreground)] mb-2">Keywords Compartidas (Top 3)</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded border border-[var(--border)]">crm para pymes</span>
                        <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded border border-[var(--border)]">facturacion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">Perfil y Configuración</h2>
                  <p className="text-[var(--muted-foreground)] text-sm">Administra tu cuenta, integraciones y facturación.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Form */}
                  <div className="lg:col-span-2 glass-card p-8">
                    <h3 className="text-lg font-medium mb-6 border-b border-[var(--border)] pb-2">Información Personal</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[var(--muted-foreground)] mb-1">Nombre</label>
                          <input type="text" defaultValue="Román" className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--muted-foreground)] mb-1">Apellido</label>
                          <input type="text" defaultValue="García" className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--muted-foreground)] mb-1">Correo Electrónico</label>
                        <input type="email" defaultValue="roman@consenso.io" className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--muted-foreground)] mb-1">Rol en la empresa</label>
                        <select className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--primary)] transition-colors">
                          <option>CMO / Director de Marketing</option>
                          <option>SEO Specialist</option>
                          <option>Fundador / CEO</option>
                        </select>
                      </div>
                      <button type="button" className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors">
                        Guardar Cambios
                      </button>
                    </form>
                  </div>

                  {/* Integrations */}
                  <div className="space-y-6">
                    <div className="glass-card p-6">
                      <h3 className="text-sm font-medium text-[var(--muted-foreground)] mb-4">Conexiones Activas</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 border border-[var(--border)] rounded bg-[var(--card)]">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                              <span className="text-black font-bold text-xs">G</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Google Ads</p>
                              <p className="text-xs text-green-500">Conectado</p>
                            </div>
                          </div>
                          <button className="text-xs text-[var(--muted-foreground)] hover:text-white">Desconectar</button>
                        </div>
                        <div className="flex items-center justify-between p-3 border border-[var(--border)] rounded bg-[var(--card)]">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-xs">f</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Meta Ads</p>
                              <p className="text-xs text-green-500">Conectado</p>
                            </div>
                          </div>
                          <button className="text-xs text-[var(--muted-foreground)] hover:text-white">Desconectar</button>
                        </div>
                      </div>
                      <button className="w-full mt-4 border border-dashed border-[var(--muted-foreground)] text-[var(--muted-foreground)] rounded-lg py-2 text-sm hover:text-white hover:border-white transition-colors">
                        + Nueva Conexión
                      </button>
                    </div>

                    <div className="glass-card p-6 border border-red-900/50">
                      <h3 className="text-sm font-medium text-red-500 mb-2">Zona de Peligro</h3>
                      <p className="text-xs text-[var(--muted-foreground)] mb-4">Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, asegúrate de estar seguro.</p>
                      <button className="w-full bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg py-2 text-sm hover:bg-red-500 hover:text-white transition-colors">
                        Eliminar Cuenta
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
