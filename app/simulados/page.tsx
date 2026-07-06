'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { useCloudStorage } from '@/hooks/useCloudStorage';
import { Simulado } from '@/types';
import { gerarId, formatarData } from '@/lib/utils';

const vazio = {
  nome: '',
  data: '',
  totalQuestoes: 50,
  acertos: 0,
  erros: 0,
  tempoGasto: '',
  assuntosComMaisErros: '',
  observacoes: '',
};

export default function SimuladosPage() {
  const [simulados, setSimulados] = useCloudStorage<Simulado[]>('simulados', []);
  const [form, setForm] = useState(vazio);

  function adicionar() {
    if (!form.nome || !form.data) return;
    const novo: Simulado = { id: gerarId(), ...form };
    setSimulados((prev) => [novo, ...prev]);
    setForm(vazio);
  }

  function remover(id: string) {
    setSimulados((prev) => prev.filter((s) => s.id !== id));
  }

  const melhor = simulados.length ? Math.max(...simulados.map((s) => (s.acertos / s.totalQuestoes) * 100)) : 0;

  return (
    <div>
      <Header title="Simulados" subtitle="Registre e acompanhe sua evolução nos simulados" />

      <div className="card card-gold p-4 mb-6">
        <p className="text-sm text-gold-400">Meta mínima: 50% de acertos na prova objetiva.</p>
      </div>

      <div className="card p-5 mb-6">
        <h2 className="text-sm font-semibold mb-4 text-white/80">Novo simulado</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <input placeholder="Nome do simulado" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
          <input type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
          <input type="number" placeholder="Qtd. questões" value={form.totalQuestoes}
            onChange={(e) => setForm({ ...form, totalQuestoes: Number(e.target.value) })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
          <input type="number" placeholder="Acertos" value={form.acertos}
            onChange={(e) => setForm({ ...form, acertos: Number(e.target.value) })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
          <input type="number" placeholder="Erros" value={form.erros}
            onChange={(e) => setForm({ ...form, erros: Number(e.target.value) })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
          <input placeholder="Tempo gasto (ex: 2h30)" value={form.tempoGasto}
            onChange={(e) => setForm({ ...form, tempoGasto: e.target.value })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
          <input placeholder="Assuntos com mais erros" value={form.assuntosComMaisErros}
            onChange={(e) => setForm({ ...form, assuntosComMaisErros: e.target.value })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40 sm:col-span-2" />
          <textarea placeholder="Observações" value={form.observacoes}
            onChange={(e) => setForm({ ...form, observacoes: e.target.value })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40 sm:col-span-3" rows={2} />
        </div>
        <button onClick={adicionar} className="mt-3 px-4 py-2 rounded-md bg-neon-500/15 border border-neon-500/30 text-neon-400 text-sm font-medium hover:bg-neon-500/25 transition-colors">
          + Registrar simulado
        </button>
      </div>

      {simulados.length > 0 && (
        <div className="card p-5 mb-6">
          <h2 className="text-sm font-semibold mb-4 text-white/80">Evolução (% de acertos)</h2>
          <div className="flex items-end gap-2 h-32">
            {[...simulados].reverse().map((s) => {
              const pct = (s.acertos / s.totalQuestoes) * 100;
              return (
                <div key={s.id} className="flex-1 flex flex-col items-center justify-end h-full">
                  <span className="text-[10px] text-gold-400 mb-1">{pct.toFixed(0)}%</span>
                  <div
                    className="w-full rounded-t-md"
                    style={{
                      height: `${Math.max(4, pct)}%`,
                      background: pct >= 50 ? 'linear-gradient(180deg,#5ecbff,#c9a456)' : '#7d8aa8',
                    }}
                  />
                  <span className="text-[9px] text-white/30 mt-1 truncate w-full text-center">{s.nome}</span>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-white/40 mt-3">Melhor desempenho até agora: <span className="text-gold-400 font-semibold">{melhor.toFixed(0)}%</span></p>
        </div>
      )}

      <div className="space-y-3">
        {simulados.map((s) => {
          const pct = (s.acertos / s.totalQuestoes) * 100;
          return (
            <div key={s.id} className="card p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div>
                  <p className="text-sm font-semibold">{s.nome}</p>
                  <p className="text-xs text-white/40">{formatarData(s.data)} · {s.tempoGasto || '—'}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-lg font-bold ${pct >= 50 ? 'text-gold-400' : 'text-red-400'}`}>{pct.toFixed(0)}%</span>
                  <button onClick={() => remover(s.id)} className="text-xs text-white/40 hover:text-white/70">Remover</button>
                </div>
              </div>
              <p className="text-xs text-white/60">Acertos: {s.acertos} · Erros: {s.erros} · Total: {s.totalQuestoes}</p>
              {s.assuntosComMaisErros && <p className="text-xs text-white/50 mt-1">Pontos fracos: {s.assuntosComMaisErros}</p>}
              {s.observacoes && <p className="text-xs text-white/40 mt-1 italic">{s.observacoes}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
