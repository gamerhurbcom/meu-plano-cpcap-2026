'use client';

import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { checklistProva, proibidosProva } from '@/data/checklist';
import { useCloudStorage } from '@/hooks/useCloudStorage';

export default function ChecklistPage() {
  const [marcados, setMarcados] = useCloudStorage<Record<string, boolean>>('checklist-prova', {});

  function toggle(id: string) {
    setMarcados((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const total = checklistProva.length;
  const feitos = checklistProva.filter((c) => marcados[c.id]).length;

  return (
    <div>
      <Header title="Checklist da Prova" subtitle="Tudo o que você precisa separar e lembrar antes do dia 27/09/2026" />

      <div className="card card-gold p-4 mb-6">
        <p className="text-sm text-gold-400">
          Portões abrem 08h00, fecham 09h00 e a prova inicia 10h30.
        </p>
      </div>

      <div className="card p-4 mb-6">
        <ProgressBar value={(feitos / total) * 100} label={`${feitos} de ${total} itens prontos`} />
      </div>

      <div className="card p-5 mb-6">
        <h2 className="text-sm font-semibold mb-4 text-white/80">Checklist</h2>
        <div className="space-y-2">
          {checklistProva.map((item) => (
            <label key={item.id} className="flex items-center gap-3 text-sm cursor-pointer p-2 rounded-md hover:bg-white/5">
              <input
                type="checkbox"
                checked={!!marcados[item.id]}
                onChange={() => toggle(item.id)}
                className="w-4 h-4 accent-[#c9a456]"
              />
              <span className={marcados[item.id] ? 'line-through text-white/40' : 'text-white/80'}>{item.texto}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="card p-5 border-red-500/20">
        <h2 className="text-sm font-semibold mb-4 text-red-400">Proibidos na prova (risco de eliminação)</h2>
        <ul className="space-y-1.5">
          {proibidosProva.map((item) => (
            <li key={item} className="text-xs text-white/60 flex items-start gap-2">
              <span className="text-red-400">✗</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
