import { useCallback, useEffect, useState } from 'react';

export type Currency = 'GBP' | 'USD' | 'EUR';

export const currencyLabels: Record<Currency, string> = {
  GBP: 'GBP (£)',
  USD: 'USD ($)',
  EUR: 'EUR (€)',
};

export const currencyOptions: Currency[] = ['GBP', 'USD', 'EUR'];

const STORAGE_KEY = 'mc-currency';

const listeners = new Set<(c: Currency) => void>();

function readStored(): Currency {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'GBP' || v === 'USD' || v === 'EUR') return v;
  } catch {
    // ignore
  }
  return 'GBP';
}

function writeStored(c: Currency) {
  try {
    localStorage.setItem(STORAGE_KEY, c);
  } catch {
    // ignore
  }
}

export function useCurrency(): [Currency, (c: Currency) => void] {
  const [currency, setCurrency] = useState<Currency>(readStored);

  useEffect(() => {
    const listener = (c: Currency) => setCurrency(c);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const change = useCallback((c: Currency) => {
    writeStored(c);
    setCurrency(c);
    listeners.forEach((l) => l(c));
  }, []);

  return [currency, change];
}
