'use client';

import { motion } from 'framer-motion';

export default function ProgressCard({
  label,
  value,
  suffix,
  icon,
  highlight,
}: {
  label: string;
  value: string | number;
  suffix?: string;
  icon?: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`card p-4 ${highlight ? 'card-gold' : ''}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-wide text-white/40">{label}</span>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <p className={`text-2xl font-bold ${highlight ? 'text-gold-400' : 'text-neon-400'}`}>
        {value}
        {suffix && <span className="text-sm text-white/40 font-normal ml-1">{suffix}</span>}
      </p>
    </motion.div>
  );
}
