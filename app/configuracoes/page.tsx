'use client';

import { useRef, useState } from 'react';
import Header from '@/components/Header';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Configuracoes } from '@/types';

const STORAGE_KEYS = [
  'cronograma-progresso',
  'aulas-progresso',
  'revisoes',
  'simulados',
  'redacoes',
  'anotacoes',
  'checklist-prova',
  'configuracoes',
];

export default function ConfiguracoesPage() {
  const [config, setConfig] = useLocalStorage<Configuracoes>('configuracoes', {
    nome: '',
    metaDiariaHoras: 3,
    dataProva: '2026-09-27',
    tema: 'escuro',
  });
  const [mensagem, setMensagem] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  function exportarDados() {
    const dados: Record<string, unknown> = {};
    STORAGE_KEYS.forEach((key) => {
      const item = window.localStorage.getItem(key);
      if (item) dados[key] = JSON.parse(item);
    });
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meu-plano-cpcap-2026-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMensagem('Dados exportados com sucesso.');
  }

  function importarDados(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const dados = JSON.parse(evt.target?.result as string);
        Object.entries(dados).forEach(([key, value]) => {
          if (STORAGE_KEYS.includes(key)) {
            window.localStorage.setItem(key, JSON.stringify(value));
          }
        });
        setMensagem('Dados importados com sucesso. Recarregue a página para ver as mudanças.');
      } catch {
        setMensagem('Erro ao importar: arquivo inválido.');
      }
    };
    reader.readAsText(file);
  }

  function resetarProgresso() {
    if (!confirm('Tem certeza que deseja apagar todo o seu progresso? Essa ação não pode ser desfeita.')) return;
    STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key));
    setMensagem('Progresso resetado. Recarregue a página.');
  }

  return (
    <div>
      <Header title="Configurações" subtitle="Personalize seu painel de estudos" />

      {mensagem && (
        <div className="card p-3 mb-6 text-xs text-neon-400 border border-neon-400/20">{mensagem}</div>
      )}

      <div className="card p-5 mb-6 space-y-4">
        <h2 className="text-sm font-semibold text-white/80">Perfil</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-white/40 block mb-1">Meu nome</label>
            <input
              value={config.nome}
              onChange={(e) => setConfig({ ...config, nome: e.target.value })}
              className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 block mb-1">Meta diária de horas</label>
            <input
              type="number"
              min={0}
              max={16}
              value={config.metaDiariaHoras}
              onChange={(e) => setConfig({ ...config, metaDiariaHoras: Number(e.target.value) })}
              className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 block mb-1">Data da prova</label>
            <input
              type="date"
              value={config.dataProva}
              onChange={(e) => setConfig({ ...config, dataProva: e.target.value })}
              className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 block mb-1">Tema</label>
            <select
              value={config.tema}
              onChange={(e) => setConfig({ ...config, tema: e.target.value as 'escuro' | 'claro' })}
              className="w-full bg-black/20 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neon-400/40"
            >
              <option value="escuro">Escuro</option>
              <option value="claro">Claro (em breve)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card p-5 mb-6 space-y-3">
        <h2 className="text-sm font-semibold text-white/80">Dados</h2>
        <p className="text-xs text-white/40">
          Todo o seu progresso é salvo apenas no seu navegador (localStorage). Faça backups regulares exportando seus dados.
        </p>
        <div className="flex flex-wrap gap-3">
          <button onClick={exportarDados} className="px-4 py-2 rounded-md bg-neon-500/15 border border-neon-500/30 text-neon-400 text-sm font-medium hover:bg-neon-500/25 transition-colors">
            Exportar dados (JSON)
          </button>
          <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 rounded-md border border-white/10 text-white/70 text-sm hover:text-white">
            Importar dados (JSON)
          </button>
          <input type="file" accept="application/json" ref={fileInputRef} onChange={importarDados} className="hidden" />
        </div>
      </div>

      <div className="card p-5 border-red-500/20">
        <h2 className="text-sm font-semibold text-red-400 mb-2">Zona de risco</h2>
        <p className="text-xs text-white/40 mb-3">Apaga todo o progresso salvo neste navegador. Não pode ser desfeito.</p>
        <button onClick={resetarProgresso} className="px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors">
          Resetar progresso
        </button>
      </div>
    </div>
  );
}
