'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '◆' },
  { href: '/cronograma', label: 'Cronograma', icon: '▦' },
  { href: '/aulas', label: 'Aulas', icon: '▣' },
  { href: '/materias', label: 'Matérias', icon: '◈' },
  { href: '/revisoes', label: 'Revisões', icon: '↻' },
  { href: '/simulados', label: 'Simulados', icon: '⌖' },
  { href: '/redacao', label: 'Redação', icon: '✎' },
  { href: '/anotacoes', label: 'Anotações', icon: '✦' },
  { href: '/checklist', label: 'Checklist', icon: '☑' },
  { href: '/configuracoes', label: 'Configurações', icon: '⚙' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-navy-950/95 border-b border-white/5 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="text-gold-400 text-lg">⚓</span>
          <span className="font-semibold text-sm tracking-wide">CP-CAP 2026</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md border border-white/10 text-neon-400"
          aria-label="Abrir menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/60 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-64 z-50 bg-navy-900 border-r border-white/10 p-4 overflow-y-auto"
            >
              <SidebarContent pathname={pathname} onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 fixed top-0 left-0 bottom-0 bg-navy-900/80 border-r border-white/5 p-5 backdrop-blur-sm">
        <SidebarContent pathname={pathname} />
      </aside>
    </>
  );
}

function SidebarContent({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-8 px-1">
        <span className="text-gold-400 text-2xl">⚓</span>
        <div>
          <p className="text-sm font-bold tracking-wide leading-tight">Meu Plano CP-CAP 2026</p>
          <p className="text-[11px] text-white/40">Processamento de Dados</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all relative ${
                active
                  ? 'bg-neon-500/10 text-neon-400 border border-neon-500/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <span className="text-base w-5 text-center">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {active && (
                <motion.span
                  layoutId="active-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gold-400 rounded-r"
                />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="text-[11px] text-white/30 px-2 pt-4 border-t border-white/5">
        Painel pessoal de estudos · uso individual
      </div>
    </div>
  );
}
