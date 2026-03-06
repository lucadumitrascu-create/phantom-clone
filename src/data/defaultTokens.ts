export interface Token {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  price: number;
  change24h: number;
  changeUsd: number;
  icon: string;
  verified?: boolean;
}

export const defaultTokens: Token[] = [
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    balance: 0.04538,
    price: 85.28,
    change24h: -4.14,
    changeUsd: -0.17,
    icon: '/tokens/sol.svg',
    verified: true,
  },
];
