export type StatusAula = 'nao-iniciado' | 'em-andamento' | 'concluido';

export interface DiaSemana {
  dia: string;
  data: string;
  materia: string;
  conteudo: string;
  tempo: string;
}

export interface SemanaCronograma {
  id: number;
  periodo: string;
  tema: string;
  dias: DiaSemana[];
}

export interface ProgressoSemana {
  concluido: boolean;
  anotacao: string;
}

export interface Aula {
  id: string;
  moduloId: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  checklist: string[];
}

export interface ProgressoAula {
  status: StatusAula;
  checklist: Record<string, boolean>;
  anotacao: string;
}

export interface Modulo {
  id: string;
  titulo: string;
  prioridade?: 'maxima';
  aulas: Aula[];
}

export interface Materia {
  id: string;
  nome: string;
  peso: number;
  prioridade: 'Máxima' | 'Alta' | 'Média';
  cor: string;
}

export interface RevisaoItem {
  id: string;
  materia: string;
  topico: string;
  dataEstudo: string;
  intervaloDias: number;
  feita: boolean;
}

export interface Simulado {
  id: string;
  nome: string;
  data: string;
  totalQuestoes: number;
  acertos: number;
  erros: number;
  tempoGasto: string;
  assuntosComMaisErros: string;
  observacoes: string;
}

export interface Redacao {
  id: string;
  tema: string;
  data: string;
  texto: string;
  notaEstimada: number | null;
  pontosFortes: string;
  pontosMelhorar: string;
  status: 'rascunho' | 'concluida' | 'corrigida';
}

export interface Anotacao {
  id: string;
  titulo: string;
  texto: string;
  categoria: string;
  criadoEm: string;
}

export interface ChecklistItemData {
  id: string;
  texto: string;
}

export interface Configuracoes {
  nome: string;
  metaDiariaHoras: number;
  dataProva: string;
  tema: 'escuro' | 'claro';
}
