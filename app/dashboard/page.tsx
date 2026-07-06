'use client';

import Header from '@/components/Header';
import ProgressCard from '@/components/ProgressCard';
import ProgressBar from '@/components/ProgressBar';
import { useCloudStorage } from '@/hooks/useCloudStorage';
import { cronograma } from '@/data/cronograma';
import { modulos } from '@/data/aulas';
import { ProgressoSemana, ProgressoAula, Simulado, Redacao } from '@/types';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const [semanasProgresso] = useCloudStorage<Record<string, ProgressoSemana>>('cronograma-progresso', {});
  const [aulasProgresso] = useCloudStorage<Record<string, ProgressoAula>>('aulas-progresso', {});
  const [simulados] = useCloudStorage<Simulado[]>('simulados', []);
  const [redacoes] = useCloudStorage<Redacao[]>('redacoes', []);

  const totalDias = cronograma.reduce((acc, s) => acc + s.dias.length, 0);
  const diasConcluidos = Object.values(semanasProgresso).filter((p) => p?.concluido).length;

  const todasAulas = modulos.flatMap((m) => m.aulas);
  const aulasConcluidas = todasAulas.filter((a) => aulasProgresso[a.id]?.status === 'concluido').length;

  const progressoGeral =
    totalDias > 0 ? Math.round(((diasConcluidos + aulasConcluidas) / (totalDias + todasAulas.length)) * 100) : 0;

  return (
    <div>
      <Header title="Dashboard" subtitle="Painel pessoal de estudos para Processamento de Dados" />

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="card card-gold p-4 mb-6"
      >
        <p className="text-sm text-gold-400 italic">
          “Estude com constância. A aprovação vem da repetição, revisão e prática.”
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <ProgressCard label="Data da prova" value="27/09" suffix="2026" icon="📅" highlight />
        <ProgressCard label="Plano total" value={13} suffix="semanas" icon="🗂" />
        <ProgressCard label="Área" value="Proc. de Dados" icon="💻" />
        <ProgressCard label="Aulas concluídas" value={aulasConcluidas} suffix={`/ ${todasAulas.length}`} icon="✅" />
        <ProgressCard label="Simulados feitos" value={simulados.length} icon="⌖" />
        <ProgressCard label="Redações feitas" value={redacoes.length} icon="✎" />
        <ProgressCard label="Dias do plano" value={diasConcluidos} suffix={`/ ${totalDias}`} icon="📆" />
        <ProgressCard label="Progresso geral" value={`${progressoGeral}%`} icon="📊" highlight />
      </div>

      <div className="card p-5 mb-6">
        <h2 className="text-sm font-semibold mb-3 text-white/80">Progresso geral do plano</h2>
        <ProgressBar value={progressoGeral} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-5">
          <h2 className="text-sm font-semibold mb-3 text-white/80">Cronograma — 13 semanas</h2>
          <ProgressBar value={(diasConcluidos / totalDias) * 100} label="Dias concluídos" />
        </div>
        <div className="card p-5">
          <h2 className="text-sm font-semibold mb-3 text-white/80">Aulas — 6 módulos</h2>
          <ProgressBar value={(aulasConcluidas / todasAulas.length) * 100} label="Aulas concluídas" />
        </div>
      </div>
    </div>
  );
}
