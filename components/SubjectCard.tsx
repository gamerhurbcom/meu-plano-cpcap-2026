'use client';

import { Materia } from '@/types';

const prioridadeColor: Record<string, string> = {
  'Máxima': 'text-gold-400 border-gold-400/30 bg-gold-400/10',
  'Alta': 'text-neon-400 border-neon-400/30 bg-neon-400/10',
  'Média': 'text-white/60 border-white/20 bg-white/5',
};

export default function SubjectCard({ materia, progresso }: { materia: Materia; progresso?: number }) {
  return (
    <div className="card p-4">
      <div className="flex items-start justify-between mb-2 gap-2">
        <h3 className="font-semibold text-sm leading-tight">{materia.nome}</h3>
        <span className={`badge border ${prioridadeColor[materia.prioridade]}`}>{materia.prioridade}</span>
      </div>
      <p className="text-xs text-white/40 mb-3">Peso estimado na prova: {materia.peso}%</p>
      {progresso !== undefined && (
        <div className="progress-track h-2">
          <div className="progress-fill" style={{ width: `${progresso}%` }} />
        </div>
      )}
    </div>
  );
}
