'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { RevisaoItem } from '@/types';
import { gerarId, formatarData } from '@/lib/utils';
import { materias } from '@/data/materias';

const intervalos = [1, 3, 7, 14, 30];

function calcularProximaRevisao(dataEstudo: string, intervaloDias: number): string {
  const d = new Date(dataEstudo + 'T00:00:00');
  d.setDate(d.getDate() + intervaloDias);
  return d.toISOString().slice(0, 10);
}

export default function RevisoesPage() {
  const [revisoes, setRevisoes] = useLocalStorage<RevisaoItem[]>('revisoes', []);
  const [form, setForm] = useState({ materia: materias[0].nome, topico: '', dataEstudo: '', intervaloDias: 1 });

  function adicionar() {
    if (!form.topico || !form.dataEstudo) return;
    const novo: RevisaoItem = {
      id: gerarId(),
      materia: form.materia,
      topico: form.topico,
      dataEstudo: form.dataEstudo,
      intervaloDias: form.intervaloDias,
      feita: false,
    };
    setRevisoes((prev) => [novo, ...prev]);
    setForm({ materia: materias[0].nome, topico: '', dataEstudo: '', intervaloDias: 1 });
  }

  function marcarFeita(id: string) {
    setRevisoes((prev) => prev.map((r) => (r.id === id ? { ...r, feita: true } : r)));
  }

  function remover(id: string) {
    setRevisoes((prev) => prev.filter((r) => r.id !== id));
  }

  const pendentes = revisoes.filter((r) => !r.feita);
  const feitas = revisoes.filter((r) => r.feita);

  return (
    <div>
      <Header title="Revisões" subtitle="Sistema de revisão espaçada — 1, 3, 7, 14 e 30 dias" />

      <div className="card p-5 mb-6">
        <h2 className="text-sm font-semibold mb-4 text-white/80">Nova revisão</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <select
            value={form.materia}
            onChange={(e) => setForm({ ...form, materia: e.target.value })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40"
          >
            {materias.map((m) => (
              <option key={m.id} value={m.nome}>{m.nome}</option>
            ))}
          </select>
          <input
            placeholder="Tópico estudado"
            value={form.topico}
            onChange={(e) => setForm({ ...form, topico: e.target.value })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40"
          />
          <input
            type="date"
            value={form.dataEstudo}
            onChange={(e) => setForm({ ...form, dataEstudo: e.target.value })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40"
          />
          <select
            value={form.intervaloDias}
            onChange={(e) => setForm({ ...form, intervaloDias: Number(e.target.value) })}
            className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40"
          >
            {intervalos.map((i) => (
              <option key={i} value={i}>Revisar em {i} dia(s)</option>
            ))}
          </select>
        </div>
        <button
          onClick={adicionar}
          className="mt-3 px-4 py-2 rounded-md bg-neon-500/15 border border-neon-500/30 text-neon-400 text-sm font-medium hover:bg-neon-500/25 transition-colors"
        >
          + Adicionar revisão
        </button>
      </div>

      <h2 className="text-sm font-semibold mb-3 text-white/80">Pendentes ({pendentes.length})</h2>
      <div className="space-y-2 mb-8">
        {pendentes.length === 0 && <p className="text-xs text-white/30">Nenhuma revisão pendente.</p>}
        {pendentes.map((r) => (
          <div key={r.id} className="card p-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">{r.topico}</p>
              <p className="text-xs text-white/40">
                {r.materia} · Estudado em {formatarData(r.dataEstudo)} · Próxima revisão:{' '}
                <span className="text-gold-400">{formatarData(calcularProximaRevisao(r.dataEstudo, r.intervaloDias))}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => marcarFeita(r.id)}
                className="text-xs px-3 py-1.5 rounded-md bg-gold-400/10 border border-gold-400/30 text-gold-400 hover:bg-gold-400/20"
              >
                Marcar como feita
              </button>
              <button
                onClick={() => remover(r.id)}
                className="text-xs px-3 py-1.5 rounded-md border border-white/10 text-white/40 hover:text-white/70"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      {feitas.length > 0 && (
        <>
          <h2 className="text-sm font-semibold mb-3 text-white/80">Concluídas ({feitas.length})</h2>
          <div className="space-y-2">
            {feitas.map((r) => (
              <div key={r.id} className="card p-4 flex items-center justify-between opacity-50">
                <div>
                  <p className="text-sm font-semibold line-through">{r.topico}</p>
                  <p className="text-xs text-white/40">{r.materia}</p>
                </div>
                <button onClick={() => remover(r.id)} className="text-xs text-white/40 hover:text-white/70">
                  Remover
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
