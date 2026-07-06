'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { modulos } from '@/data/aulas';
import { useCloudStorage } from '@/hooks/useCloudStorage';
import { ProgressoAula, StatusAula } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

const statusLabel: Record<StatusAula, string> = {
  'nao-iniciado': 'Não iniciado',
  'em-andamento': 'Em andamento',
  concluido: 'Concluído',
};

const statusColor: Record<StatusAula, string> = {
  'nao-iniciado': 'text-white/40 border-white/15 bg-white/5',
  'em-andamento': 'text-neon-400 border-neon-400/30 bg-neon-400/10',
  concluido: 'text-gold-400 border-gold-400/30 bg-gold-400/10',
};

export default function AulasPage() {
  const [progresso, setProgresso] = useCloudStorage<Record<string, ProgressoAula>>('aulas-progresso', {});
  const [aulaAberta, setAulaAberta] = useState<string | null>(null);

  const todasAulas = modulos.flatMap((m) => m.aulas);
  const concluidas = todasAulas.filter((a) => progresso[a.id]?.status === 'concluido').length;

  function getProgresso(id: string): ProgressoAula {
    return progresso[id] || { status: 'nao-iniciado', checklist: {}, anotacao: '' };
  }

  function setStatus(id: string, status: StatusAula) {
    setProgresso((prev) => ({ ...prev, [id]: { ...getProgresso(id), status } }));
  }

  function toggleCheck(id: string, item: string) {
    setProgresso((prev) => {
      const atual = prev[id] || { status: 'nao-iniciado', checklist: {}, anotacao: '' };
      return {
        ...prev,
        [id]: { ...atual, checklist: { ...atual.checklist, [item]: !atual.checklist[item] } },
      };
    });
  }

  function setAnotacao(id: string, texto: string) {
    setProgresso((prev) => {
      const atual = prev[id] || { status: 'nao-iniciado', checklist: {}, anotacao: '' };
      return { ...prev, [id]: { ...atual, anotacao: texto } };
    });
  }

  return (
    <div>
      <Header title="Aulas" subtitle="6 módulos de conteúdo — Processamento de Dados" />

      <div className="card p-4 mb-6">
        <ProgressBar value={(concluidas / todasAulas.length) * 100} label={`${concluidas} de ${todasAulas.length} aulas concluídas`} />
      </div>

      <div className="space-y-6">
        {modulos.map((modulo) => {
          const aulasModulo = modulo.aulas;
          const concluidasModulo = aulasModulo.filter((a) => progresso[a.id]?.status === 'concluido').length;
          return (
            <div key={modulo.id}>
              <div className="flex items-center gap-2 mb-3">
                <h2 className="text-sm font-bold text-white/90">{modulo.titulo}</h2>
                {modulo.prioridade === 'maxima' && (
                  <span className="badge bg-gold-400/10 text-gold-400 border border-gold-400/30">
                    Prioridade Máxima
                  </span>
                )}
                <span className="text-xs text-white/30 ml-auto">
                  {concluidasModulo}/{aulasModulo.length}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {aulasModulo.map((aula) => {
                  const p = getProgresso(aula.id);
                  const isOpen = aulaAberta === aula.id;
                  const checklistFeito = aula.checklist.filter((c) => p.checklist[c]).length;
                  return (
                    <div key={aula.id} className="card overflow-hidden">
                      <button
                        onClick={() => setAulaAberta(isOpen ? null : aula.id)}
                        className="w-full text-left p-4 hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-sm font-semibold leading-tight">{aula.titulo}</h3>
                          <span className={`badge border shrink-0 ${statusColor[p.status]}`}>
                            {statusLabel[p.status]}
                          </span>
                        </div>
                        <p className="text-xs text-white/40 line-clamp-2">{aula.resumo}</p>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 space-y-3 border-t border-white/5 pt-3">
                              <div className="bg-black/20 border border-white/5 rounded-lg p-3">
                                <p className="text-xs font-semibold text-neon-400 mb-2">📖 Conteúdo da aula</p>
                                <div className="text-xs text-white/70 leading-relaxed whitespace-pre-wrap">
                                  {aula.conteudo}
                                </div>
                              </div>
                              <div>
                                <p className="text-xs text-white/40 mb-1.5">
                                  Checklist ({checklistFeito}/{aula.checklist.length})
                                </p>
                                <div className="space-y-1.5">
                                  {aula.checklist.map((item) => (
                                    <label key={item} className="flex items-start gap-2 text-xs text-white/70 cursor-pointer">
                                      <input
                                        type="checkbox"
                                        checked={!!p.checklist[item]}
                                        onChange={() => toggleCheck(aula.id, item)}
                                        className="mt-0.5 w-3.5 h-3.5 accent-[#5ecbff]"
                                      />
                                      {item}
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <textarea
                                placeholder="Anotação pessoal..."
                                value={p.anotacao}
                                onChange={(e) => setAnotacao(aula.id, e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-md px-2 py-1.5 text-xs text-white/80 placeholder:text-white/30 focus:outline-none focus:border-neon-400/40 resize-none"
                                rows={2}
                              />
                              <div className="flex gap-2 flex-wrap">
                                {(['nao-iniciado', 'em-andamento', 'concluido'] as StatusAula[]).map((s) => (
                                  <button
                                    key={s}
                                    onClick={() => setStatus(aula.id, s)}
                                    className={`text-[11px] px-2.5 py-1 rounded-md border transition-colors ${
                                      p.status === s
                                        ? statusColor[s]
                                        : 'border-white/10 text-white/40 hover:text-white/70'
                                    }`}
                                  >
                                    {statusLabel[s]}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
