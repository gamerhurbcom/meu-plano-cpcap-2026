import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export const CHAVES_DADOS = [
  'cronograma-progresso',
  'aulas-progresso',
  'revisoes',
  'simulados',
  'redacoes',
  'anotacoes',
  'checklist-prova',
  'configuracoes',
];

function refDados(email: string, chave: string) {
  return doc(db, 'usuarios', email, 'dados', chave);
}

export async function exportarTodosDados(email: string) {
  const resultado: Record<string, unknown> = {};
  for (const chave of CHAVES_DADOS) {
    const snap = await getDoc(refDados(email, chave));
    if (snap.exists()) resultado[chave] = snap.data().value;
  }
  return resultado;
}

export async function importarTodosDados(email: string, dados: Record<string, unknown>) {
  for (const [chave, valor] of Object.entries(dados)) {
    if (CHAVES_DADOS.includes(chave)) {
      await setDoc(refDados(email, chave), { value: valor, atualizadoEm: new Date().toISOString() });
    }
  }
}

export async function apagarTodosDados(email: string) {
  for (const chave of CHAVES_DADOS) {
    await deleteDoc(refDados(email, chave)).catch(() => {});
  }
}
