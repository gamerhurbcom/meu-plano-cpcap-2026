import { Materia } from '@/types';

export const materias: Materia[] = [
  { id: 'org', nome: 'Organização de Computadores', peso: 12, prioridade: 'Alta', cor: '#5ecbff' },
  { id: 'so', nome: 'Sistemas Operacionais', peso: 18, prioridade: 'Alta', cor: '#36b5f5' },
  { id: 'redes', nome: 'Redes de Computadores', peso: 20, prioridade: 'Máxima', cor: '#c9a456' },
  { id: 'alg', nome: 'Algoritmos, Estrutura de Dados e Java', peso: 20, prioridade: 'Máxima', cor: '#d9b96a' },
  { id: 'bd', nome: 'Banco de Dados', peso: 18, prioridade: 'Alta', cor: '#8aa9d6' },
  { id: 'seg', nome: 'Segurança da Informação', peso: 12, prioridade: 'Média', cor: '#7d8aa8' },
];

export const metasAcertos = [
  { area: 'Organização de Computadores', questoes: 6, minimo: 4, ideal: 5 },
  { area: 'Sistemas Operacionais', questoes: 9, minimo: 6, ideal: 8 },
  { area: 'Redes de Computadores', questoes: 10, minimo: 7, ideal: 9 },
  { area: 'Algoritmos / Java', questoes: 10, minimo: 7, ideal: 9 },
  { area: 'Banco de Dados', questoes: 9, minimo: 6, ideal: 8 },
  { area: 'Segurança da Informação', questoes: 6, minimo: 4, ideal: 5 },
];
