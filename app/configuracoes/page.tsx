'use client';

import { useRef, useState } from 'react';
import Header from '@/components/Header';
import { useCloudStorage } from '@/hooks/useCloudStorage';
import { useEmail } from '@/context/EmailContext';
import { exportarTodosDados, importarTodosDados, apagarTodosDados } from '@/lib/cloudData';
import { Configuracoes } from '@/types';

export default function ConfiguracoesPage() {
  const { email } = useEmail();
  const [config, setConfig] = useCloudStorage<Configuracoes>('configuracoes', {
    nome: '',
    metaDiariaHoras: 3,
    dataProva: '2026-09-27',
    tema: 'escuro',
  });
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function exportarDados() {
    if (!email) return;
    setCarregando(true);
    try {
      const dados = await exportarTodosDados(email);
      const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `meu-plano-cpcap-2026-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setMensagem('Dados exportados com sucesso.');
    } catch {
      setMensagem('Erro ao exportar dados.');
    } finally {
      setCarregando(false);
    }
  }

  function importarDados(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !email) return;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const dados = JSON.parse(evt.target?.result as string);
        setCarregando(true);
        await importarTodosDados(email, dados);
        setMensagem('Dados importados com sucesso e já sincronizados na nuvem.');
      } catch {
        setMensagem('Erro ao importar: arquivo inválido.');
      } finally {
        setCarregando(false);
      }
    };
    reader.readAsText(file);
  }

  async function resetarProgresso() {
    if (!email) return;
    if (!confirm('Tem certeza que deseja apagar todo o progresso deste e-mail? Essa ação não pode ser desfeita e afeta você e seu colega.')) return;
    setCarregando(true);
    try {
      await apagarTodosDados(email);
      setMensagem('Progresso resetado na nuvem.');
    } catch {
      setMensagem('Erro ao resetar dados.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div>
      <Header title="Configurações" subtitle="Personalize seu painel de estudos" />

      <div className="card p-4 mb-6 text-xs text-white/50 border border-neon-400/20">
        Conectado com o e-mail <span className="text-neon-400 font-semibold">{email}</span>. Todo progresso salvo aqui é
        compartilhado com quem usar o mesmo e-mail.
      </div>

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
          Todo o progresso é salvo na nuvem (Firebase), vinculado ao e-mail acima, e sincronizado em tempo real entre
          todos que usarem o mesmo e-mail. Ainda assim, faça backups regulares exportando seus dados.
        </p>
        <div className="flex flex-wrap gap-3">
          <button disabled={carregando} onClick={exportarDados} className="px-4 py-2 rounded-md bg-neon-500/15 border border-neon-500/30 text-neon-400 text-sm font-medium hover:bg-neon-500/25 transition-colors disabled:opacity-50">
            {carregando ? 'Aguarde...' : 'Exportar dados (JSON)'}
          </button>
          <button disabled={carregando} onClick={() => fileInputRef.current?.click()} className="px-4 py-2 rounded-md border border-white/10 text-white/70 text-sm hover:text-white disabled:opacity-50">
            Importar dados (JSON)
          </button>
          <input type="file" accept="application/json" ref={fileInputRef} onChange={importarDados} className="hidden" />
        </div>
      </div>

      <div className="card p-5 border-red-500/20">
        <h2 className="text-sm font-semibold text-red-400 mb-2">Zona de risco</h2>
        <p className="text-xs text-white/40 mb-3">Apaga todo o progresso salvo na nuvem para este e-mail (afeta todos que o usam). Não pode ser desfeito.</p>
        <button disabled={carregando} onClick={resetarProgresso} className="px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors disabled:opacity-50">
          Resetar progresso
        </button>
      </div>
    </div>
  );
}
