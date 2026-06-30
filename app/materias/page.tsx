'use client';

import Header from '@/components/Header';
import SubjectCard from '@/components/SubjectCard';
import { materias, metasAcertos } from '@/data/materias';
import { modulos } from '@/data/aulas';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ProgressoAula } from '@/types';

const moduloPorMateria: Record<string, string> = {
  org: 'm1',
  so: 'm2',
  redes: 'm3',
  alg: 'm4',
  bd: 'm5',
  seg: 'm6',
};

export default function MateriasPage() {
  const [progresso] = useLocalStorage<Record<string, ProgressoAula>>('aulas-progresso', {});

  function progressoMateria(materiaId: string): number {
    const moduloId = moduloPorMateria[materiaId];
    const modulo = modulos.find((m) => m.id === moduloId);
    if (!modulo) return 0;
    const concluidas = modulo.aulas.filter((a) => progresso[a.id]?.status === 'concluido').length;
    return Math.round((concluidas / modulo.aulas.length) * 100);
  }

  let acumulado = 0;

  return (
    <div>
      <Header title="Matérias" subtitle="Peso estimado e prioridade de cada área do edital" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {materias.map((m) => (
          <SubjectCard key={m.id} materia={m} progresso={progressoMateria(m.id)} />
        ))}
      </div>

      <div className="card p-5 mb-8">
        <h2 className="text-sm font-semibold mb-4 text-white/80">Distribuição das matérias na prova</h2>
        <div className="flex w-full h-6 rounded-full overflow-hidden border border-white/10">
          {materias.map((m) => (
            <div
              key={m.id}
              style={{ width: `${m.peso}%`, backgroundColor: m.cor }}
              title={`${m.nome} — ${m.peso}%`}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
          {materias.map((m) => (
            <div key={m.id} className="flex items-center gap-2 text-xs text-white/60">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: m.cor }} />
              {m.nome} ({m.peso}%)
            </div>
          ))}
        </div>
      </div>

      <div className="card p-5">
        <h2 className="text-sm font-semibold mb-1 text-white/80">Meta de acertos por área (simulado final)</h2>
        <p className="text-xs text-white/40 mb-4">Meta mínima: 50% de acertos na prova objetiva (25 de 50 questões).</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-white/40 border-b border-white/10">
                <th className="text-left py-2 pr-4 font-medium">Área</th>
                <th className="text-left py-2 pr-4 font-medium">Questões</th>
                <th className="text-left py-2 pr-4 font-medium">Meta mínima</th>
                <th className="text-left py-2 font-medium">Meta ideal</th>
              </tr>
            </thead>
            <tbody>
              {metasAcertos.map((row) => (
                <tr key={row.area} className="border-b border-white/5">
                  <td className="py-2 pr-4 text-white/80">{row.area}</td>
                  <td className="py-2 pr-4 text-white/60">{row.questoes}q</td>
                  <td className="py-2 pr-4 text-neon-400">{row.minimo} acertos</td>
                  <td className="py-2 text-gold-400">{row.ideal} acertos</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
