import { ChecklistItemData } from '@/types';

export const checklistProva: ChecklistItemData[] = [
  { id: 'c1', texto: 'Documento oficial com foto (RG original)' },
  { id: 'c2', texto: 'Comprovante de inscrição impresso' },
  { id: 'c3', texto: 'Caneta esferográfica preta ou azul (não apagável) — 2 de reserva' },
  { id: 'c4', texto: 'Lápis' },
  { id: 'c5', texto: 'Borracha' },
  { id: 'c6', texto: 'Cartão de inscrição' },
  { id: 'c7', texto: 'Conferir local de prova no site do SSPM' },
  { id: 'c8', texto: 'Chegar cedo (antes das 08h30)' },
  { id: 'c9', texto: 'Dormir bem na véspera (mínimo 8h)' },
  { id: 'c10', texto: 'Alimentação leve antes da prova' },
  { id: 'c11', texto: 'Não estudar conteúdo novo na véspera' },
  { id: 'c12', texto: 'Levar lanche (barra de cereal, biscoito simples)' },
  { id: 'c13', texto: 'Garrafa de água transparente, sem rótulo' },
];

export const proibidosProva: string[] = [
  'Celular, smartphone, tablet ou qualquer dispositivo eletrônico',
  'Relógio de qualquer tipo (analógico, digital ou smartwatch)',
  'Calculadora (salvo quando expressamente permitida)',
  'Boné, chapéu, gorro',
  'Fones de ouvido ou protetores auriculares',
  'Livros, cadernos ou anotações',
  'Roupas de banho, short, bermuda, regata, calça rasgada ou de moletom',
];
