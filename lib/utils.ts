export function diasRestantes(dataAlvo: string): number {
  // dataAlvo no formato YYYY-MM-DD
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const alvo = new Date(dataAlvo + 'T00:00:00');
  const diffMs = alvo.getTime() - hoje.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function gerarId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export function formatarData(dataISO: string): string {
  if (!dataISO) return '';
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
