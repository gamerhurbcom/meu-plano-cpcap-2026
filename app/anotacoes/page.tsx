'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import { useCloudStorage } from '@/hooks/useCloudStorage';
import { Anotacao } from '@/types';
import { gerarId, formatarData } from '@/lib/utils';

const categorias = ['Redes', 'Java', 'Banco de Dados', 'Sistemas Operacionais', 'Segurança da Informação', 'Organização de Computadores', 'Redação', 'Dúvidas'];

export default function AnotacoesPage() {
  const [anotacoes, setAnotacoes] = useCloudStorage<Anotacao[]>('anotacoes', []);
  const [form, setForm] = useState({ titulo: '', texto: '', categoria: categorias[0] });
  const [filtro, setFiltro] = useState('Todas');
  const [busca, setBusca] = useState('');
  const [editandoId, setEditandoId] = useState<string | null>(null);

  function salvar() {
    if (!form.titulo) return;
    if (editandoId) {
      setAnotacoes((prev) => prev.map((a) => (a.id === editandoId ? { ...a, ...form } : a)));
      setEditandoId(null);
    } else {
      const nova: Anotacao = { id: gerarId(), ...form, criadoEm: new Date().toISOString().slice(0, 10) };
      setAnotacoes((prev) => [nova, ...prev]);
    }
    setForm({ titulo: '', texto: '', categoria: categorias[0] });
  }

  function editar(a: Anotacao) {
    setForm({ titulo: a.titulo, texto: a.texto, categoria: a.categoria });
    setEditandoId(a.id);
  }

  function remover(id: string) {
    setAnotacoes((prev) => prev.filter((a) => a.id !== id));
    if (editandoId === id) setEditandoId(null);
  }

  const filtradas = useMemo(() => {
    return anotacoes.filter((a) => {
      const matchCategoria = filtro === 'Todas' || a.categoria === filtro;
      const matchBusca = !busca || a.titulo.toLowerCase().includes(busca.toLowerCase()) || a.texto.toLowerCase().includes(busca.toLowerCase());
      return matchCategoria && matchBusca;
    });
  }, [anotacoes, filtro, busca]);

  return (
    <div>
      <Header title="Anotações" subtitle="Suas anotações de estudo, organizadas por matéria" />

      <div className="card p-5 mb-6">
        <h2 className="text-sm font-semibold mb-4 text-white/80">{editandoId ? 'Editar anotação' : 'Nova anotação'}</h2>
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input placeholder="Título" value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" />
            <select value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })}
              className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40">
              {categorias.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <textarea placeholder="Conteúdo da anotação..." value={form.texto} onChange={(e) => setForm({ ...form, texto: e.target.value })}
            className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40" rows={4} />
          <div className="flex gap-2">
            <button onClick={salvar} className="px-4 py-2 rounded-md bg-neon-500/15 border border-neon-500/30 text-neon-400 text-sm font-medium hover:bg-neon-500/25 transition-colors">
              {editandoId ? 'Salvar alterações' : '+ Criar anotação'}
            </button>
            {editandoId && (
              <button onClick={() => { setEditandoId(null); setForm({ titulo: '', texto: '', categoria: categorias[0] }); }}
                className="px-4 py-2 rounded-md border border-white/10 text-white/50 text-sm hover:text-white/80">
                Cancelar
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <input placeholder="Pesquisar..." value={busca} onChange={(e) => setBusca(e.target.value)}
          className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40 flex-1 min-w-[160px]" />
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}
          className="bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40">
          <option value="Todas">Todas as categorias</option>
          {categorias.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtradas.map((a) => (
          <div key={a.id} className="card p-4">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-sm font-semibold">{a.titulo}</h3>
              <span className="badge bg-white/5 text-white/50 border border-white/10 shrink-0">{a.categoria}</span>
            </div>
            <p className="text-xs text-white/60 whitespace-pre-wrap mb-3 line-clamp-4">{a.texto}</p>
            <div className="flex items-center justify-between text-[11px] text-white/30">
              <span>{formatarData(a.criadoEm)}</span>
              <div className="flex gap-2">
                <button onClick={() => editar(a)} className="hover:text-neon-400">Editar</button>
                <button onClick={() => remover(a.id)} className="hover:text-red-400">Excluir</button>
              </div>
            </div>
          </div>
        ))}
        {filtradas.length === 0 && <p className="text-xs text-white/30">Nenhuma anotação encontrada.</p>}
      </div>
    </div>
  );
}
