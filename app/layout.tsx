import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import EmailGate from '@/components/EmailGate';
import { EmailProvider } from '@/context/EmailContext';

export const metadata: Metadata = {
  title: 'Meu Plano CP-CAP 2026',
  description: 'Painel de estudos compartilhado para Processamento de Dados — CP-CAP/2026',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <EmailProvider>
          <EmailGate>
            <div className="lg:flex">
              <Sidebar />
              <main className="flex-1 lg:ml-64 px-4 sm:px-8 pt-20 lg:pt-8 pb-16 max-w-7xl">
                {children}
              </main>
            </div>
          </EmailGate>
        </EmailProvider>
      </body>
    </html>
  );
}
