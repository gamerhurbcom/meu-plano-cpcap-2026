'use client';

import { motion } from 'framer-motion';

export default function ProgressBar({ value, label }: { value: number; label?: string }) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div>
      {label && (
        <div className="flex justify-between text-xs text-white/50 mb-1.5">
          <span>{label}</span>
          <span className="text-neon-400 font-semibold">{pct.toFixed(0)}%</span>
        </div>
      )}
      <div className="progress-track h-2.5 w-full">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
