'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { cronograma } from '@/data/cronograma';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ProgressoSemana } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

export default function CronogramaPage() {
  const [progresso, setProgresso] = useLocalStorage<Record<string, ProgressoSemana>>('cronograma-progresso', {});
  const [aberta, setAberta] = useState<number | null>(1);

  const totalDias = cronograma.reduce((acc, s) => acc + s.dias.length, 0);
  const diasConcluidos = Object.values(progresso).filter((p) => p?.concluido).length;

  function toggleDia(key: string) {
    setProgresso((prev) => ({
      ...prev,
      [key]: { concluido: !prev[key]?.concluido, anotacao: prev[key]?.anotacao || '' },
    }));
  }

  function setAnotacao(key: string, texto: string) {
    setProgresso((prev) => ({
      ...prev,
      [key]: { concluido: prev[key]?.concluido || false, anotacao: texto },
    }));
  }

  return (
    <div>
      <Header title="Cronograma" subtitle="13 semanas de estudo — 30/06/2026 a 26/09/2026" />

      <div className="card p-4 mb-6">
        <ProgressBar value={(diasConcluidos / totalDias) * 100} label={`${diasConcluidos} de ${totalDias} dias concluídos`} />
      </div>

      <div className="space-y-3">
        {cronograma.map((semana) => {
          const diasSemana = semana.dias.map((d) => `s${semana.id}-${d.data}`);
          const concluidosSemana = diasSemana.filter((k) => progresso[k]?.concluido).length;
          const isOpen = aberta === semana.id;

          return (
            <div key={semana.id} className="card overflow-hidden">
              <button
                onClick={() => setAberta(isOpen ? null : semana.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="badge bg-neon-500/10 text-neon-400 border border-neon-500/20">
                    Semana {semana.id}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{semana.tema}</p>
                    <p className="text-xs text-white/40">{semana.periodo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/40 hidden sm:inline">
                    {concluidosSemana}/{diasSemana.length}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-white/40">
                    ▾
                  </motion.span>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2">
                      {semana.dias.map((dia) => {
                        const key = `s${semana.id}-${dia.data}`;
                        const concluido = progresso[key]?.concluido || false;
                        return (
                          <div
                            key={key}
                            className={`p-3 rounded-lg border ${
                              concluido ? 'border-gold-400/30 bg-gold-400/5' : 'border-white/5 bg-white/[0.02]'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                checked={concluido}
                                onChange={() => toggleDia(key)}
                                className="mt-1 w-4 h-4 accent-[#c9a456] shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <span className="text-xs font-semibold text-neon-400">
                                    {dia.dia} {dia.data}
                                  </span>
                                  <span className="badge bg-white/5 text-white/50 border border-white/10">
                                    {dia.materia}
                                  </span>
                                  <span className="text-[11px] text-gold-400">{dia.tempo}</span>
                                </div>
                                <p className="text-sm text-white/70">{dia.conteudo}</p>
                                <textarea
                                  placeholder="Anotação pessoal..."
                                  value={progresso[key]?.anotacao || ''}
                                  onChange={(e) => setAnotacao(key, e.target.value)}
                                  className="mt-2 w-full bg-black/20 border border-white/10 rounded-md px-2 py-1.5 text-xs text-white/80 placeholder:text-white/30 focus:outline-none focus:border-neon-400/40 resize-none"
                                  rows={1}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
}
