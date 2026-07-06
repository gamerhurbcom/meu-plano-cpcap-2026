'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { useCloudStorage } from '@/hooks/useCloudStorage';
import { Redacao } from '@/types';
import { gerarId, formatarData } from '@/lib/utils';
import { redacaoTemas, criteriosRedacao } from '@/data/redacaoTemas';

const vazio = {
  tema: redacaoTemas[0],
  data: '',
  texto: '',
  notaEstimada: null as number | null,
  pontosFortes: '',
  pontosMelhorar: '',
  status: 'rascunho' as Redacao['status'],
};

export default function RedacaoPage() {
  const [redacoes, setRedacoes] = useCloudStorage<Redacao[]>('redacoes', []);
  const [form, setForm] = useState(vazio);

  function adicionar() {
    if (!form.texto || !form.data) return;
    const nova: Redacao = { id: gerarId(), ...form };
    setRedacoes((prev) => [nova, ...prev]);
    setForm(vazio);
  }

  function remover(id: string) {
    setRedacoes((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <div>
      <Header title="Redação" subtitle="Treino de redação dissertativa-argumentativa" />

      <div className="card card-gold p-4 mb-6">
        <p className="text-sm text-gold-400">
          A redação deve ser dissertativa-argumentativa, entre 15 e 30 linhas, com nota mínima de 50/100.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="card p-5 lg:col-span-2">
          <h2 className="text-sm font-semibold mb-4 text-white/80">Nova redação</h2>
          <div className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <select value={form.tema} onChange={(e) => setForm({ ...form, tema: e.target.value })}
                className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40">
                {redacaoTemas.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <input type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })}
                className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
            </div>
            <textarea placeholder="Texto da redação..." value={form.texto} onChange={(e) => setForm({ ...form, texto: e.target.value })}
              className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" rows={8} />
            <div className="grid sm:grid-cols-2 gap-3">
              <input type="number" min={0} max={100} placeholder="Nota estimada (0-100)" value={form.notaEstimada ?? ''}
                onChange={(e) => setForm({ ...form, notaEstimada: e.target.value ? Number(e.target.value) : null })}
                className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Redacao['status'] })}
                className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40">
                <option value="rascunho">Rascunho</option>
                <option value="concluida">Concluída</option>
                <option value="corrigida">Corrigida</option>
              </select>
            </div>
            <input placeholder="Pontos fortes" value={form.pontosFortes} onChange={(e) => setForm({ ...form, pontosFortes: e.target.value })}
              className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
            <input placeholder="Pontos a melhorar" value={form.pontosMelhorar} onChange={(e) => setForm({ ...form, pontosMelhorar: e.target.value })}
              className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
            <button onClick={adicionar} className="px-4 py-2 rounded-md bg-neon-500/15 border border-neon-500/30 text-neon-400 text-sm font-medium hover:bg-neon-500/25 transition-colors">
              + Salvar redação
            </button>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="text-sm font-semibold mb-3 text-white/80">Critérios de avaliação</h2>
          <div className="space-y-3">
            {criteriosRedacao.map((c) => (
              <div key={c.criterio}>
                <p className="text-xs font-semibold text-gold-400">{c.criterio}</p>
                <p className="text-[11px] text-white/40">{c.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {redacoes.map((r) => (
          <div key={r.id} className="card p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div>
                <p className="text-sm font-semibold">{r.tema}</p>
                <p className="text-xs text-white/40">{formatarData(r.data)} · {r.status}</p>
              </div>
              <div className="flex items-center gap-3">
                {r.notaEstimada !== null && (
                  <span className={`text-lg font-bold ${r.notaEstimada >= 50 ? 'text-gold-400' : 'text-red-400'}`}>
                    {r.notaEstimada}/100
                  </span>
                )}
                <button onClick={() => remover(r.id)} className="text-xs text-white/40 hover:text-white/70">Remover</button>
              </div>
            </div>
            <p className="text-xs text-white/60 line-clamp-3 whitespace-pre-wrap">{r.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
