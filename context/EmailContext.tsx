'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface EmailContextType {
  email: string | null;
  setEmail: (e: string | null) => void;
  carregado: boolean;
}

const EmailContext = createContext<EmailContextType>({
  email: null,
  setEmail: () => {},
  carregado: false,
});

export function EmailProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmailState] = useState<string | null>(null);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const salvo = window.localStorage.getItem('email-sessao');
    if (salvo) setEmailState(salvo);
    setCarregado(true);
  }, []);

  function setEmail(e: string | null) {
    setEmailState(e);
    if (e) {
      window.localStorage.setItem('email-sessao', e);
    } else {
      window.localStorage.removeItem('email-sessao');
    }
  }

  return (
    <EmailContext.Provider value={{ email, setEmail, carregado }}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmail() {
  return useContext(EmailContext);
}
