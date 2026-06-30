'use client';

import { useEffect, useState } from 'react';
import { diasRestantes } from '@/lib/utils';

export default function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  const [dias, setDias] = useState<number | null>(null);

  useEffect(() => {
    setDias(diasRestantes('2026-09-27'));
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-white/50 mt-0.5">{subtitle}</p>}
      </div>
      {dias !== null && (
        <div className="card px-4 py-2 flex items-center gap-2 self-start sm:self-auto">
          <span className="text-gold-400 text-sm">⏳</span>
          <span className="text-sm">
            <span className="font-bold text-gold-400">{dias}</span>{' '}
            <span className="text-white/60">dias até a prova</span>
          </span>
        </div>
      )}
    </div>
  );
}
