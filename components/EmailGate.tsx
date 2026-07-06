'use client';

import { useState } from 'react';
import { useEmail } from '@/context/EmailContext';

export default function EmailGate({ children }: { children: React.ReactNode }) {
  const { email, setEmail, carregado } = useEmail();
  const [input, setInput] = useState('');
  const [erro, setErro] = useState('');

  if (!carregado) return null;

  function entrar() {
    const valor = input.trim().toLowerCase();
    if (!valor || !valor.includes('@')) {
      setErro('Digite um e-mail válido.');
      return;
    }
    setEmail(valor);
  }

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card p-6 w-full max-w-sm">
          <div className="text-center mb-5">
            <span className="text-gold-400 text-3xl">⚓</span>
            <h1 className="text-lg font-bold mt-2">Meu Plano CP-CAP 2026</h1>
            <p className="text-xs text-white/40 mt-1">
              Digite o e-mail combinado com seu colega para acessar o painel de estudos compartilhado.
            </p>
          </div>
          <input
            type="email"
            placeholder="seuemail@exemplo.com"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setErro('');
            }}
            onKeyDown={(e) => e.key === 'Enter' && entrar()}
            className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm mb-2 focus:outline-none focus:border-neon-400/40"
          />
          {erro && <p className="text-xs text-red-400 mb-2">{erro}</p>}
          <button
            onClick={entrar}
            className="w-full px-4 py-2 rounded-md bg-neon-500/15 border border-neon-500/30 text-neon-400 text-sm font-medium hover:bg-neon-500/25 transition-colors"
          >
            Entrar
          </button>
          <p className="text-[11px] text-white/30 mt-3 text-center">
            Use o mesmo e-mail nos dois dispositivos (seu e do seu colega) para compartilhar o progresso.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      <button
        onClick={() => confirm('Trocar de e-mail?') && setEmail(null)}
        className="fixed bottom-3 right-3 z-30 text-[11px] px-3 py-1.5 rounded-full bg-navy-900/90 border border-white/10 text-white/40 hover:text-white/70 backdrop-blur"
      >
        {email} · trocar
      </button>
    </>
  );
}
