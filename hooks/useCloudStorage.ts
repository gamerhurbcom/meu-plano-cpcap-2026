'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useEmail } from '@/context/EmailContext';

/**
 * Substitui o useLocalStorage: salva e sincroniza os dados no Firestore,
 * usando o e-mail da sessão como identificador do "espaço compartilhado"
 * (você e seu colega usando o mesmo e-mail veem os mesmos dados em tempo real).
 * Enquanto não há e-mail definido, funciona apenas em memória.
 */
export function useCloudStorage<T>(key: string, initialValue: T) {
  const { email } = useEmail();
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);
  const primeiraCarga = useRef(true);

  useEffect(() => {
    if (!email) {
      setStoredValue(initialValue);
      setHydrated(true);
      return;
    }

    setHydrated(false);
    primeiraCarga.current = true;
    const ref = doc(db, 'usuarios', email, 'dados', key);

    const unsubscribe = onSnapshot(
      ref,
      (snap) => {
        if (snap.exists()) {
          setStoredValue(snap.data().value as T);
        } else if (primeiraCarga.current) {
          setStoredValue(initialValue);
        }
        primeiraCarga.current = false;
        setHydrated(true);
      },
      (error) => {
        console.error(`Erro ao sincronizar "${key}":`, error);
        setHydrated(true);
      }
    );

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, key]);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        if (email) {
          const ref = doc(db, 'usuarios', email, 'dados', key);
          setDoc(ref, { value: valueToStore, atualizadoEm: new Date().toISOString() }).catch((error) => {
            console.error(`Erro ao salvar "${key}":`, error);
          });
        }
        return valueToStore;
      });
    },
    [email, key]
  );

  return [storedValue, setValue, hydrated] as const;
}
