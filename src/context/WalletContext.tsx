import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { defaultTokens, type Token } from '../data/defaultTokens';

interface WalletContextType {
  tokens: Token[];
  updateTokens: (tokens: Token[]) => void;
  totalBalance: number;
  totalChangeUsd: number;
  totalChangePct: number;
}

const WalletContext = createContext<WalletContextType | null>(null);

const STORAGE_KEY = 'phantom-clone-tokens';
const VERSION_KEY = 'phantom-clone-v';
const CURRENT_VERSION = '2';

function loadTokens(): Token[] {
  try {
    const ver = localStorage.getItem(VERSION_KEY);
    if (ver === CURRENT_VERSION) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } else {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    }
  } catch {}
  return defaultTokens;
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [tokens, setTokens] = useState<Token[]>(loadTokens);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
  }, [tokens]);

  const totalBalance = tokens.reduce((sum, t) => sum + t.balance * t.price, 0);
  const totalChangeUsd = tokens.reduce((sum, t) => sum + t.changeUsd, 0);
  const totalChangePct = totalBalance > 0
    ? (totalChangeUsd / (totalBalance - totalChangeUsd)) * 100
    : 0;

  const updateTokens = (newTokens: Token[]) => {
    setTokens(newTokens);
  };

  return (
    <WalletContext.Provider value={{ tokens, updateTokens, totalBalance, totalChangeUsd, totalChangePct }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error('useWallet must be inside WalletProvider');
  return ctx;
}
