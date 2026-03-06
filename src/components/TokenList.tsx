import { useWallet } from '../context/WalletContext';
import TokenRow from './TokenRow';

export default function TokenList() {
  const { tokens } = useWallet();

  return (
    <div style={{ padding: '0 16px' }}>
      {/* Section header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '20px 0 12px',
      }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>Tokens</span>
        <svg fill="none" viewBox="0 0 24 24" width="18" height="18" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="#6e6e6e" strokeWidth="2.5" d="M9 6l6 6-6 6" />
        </svg>
      </div>

      {/* Token list card */}
      <div style={{
        background: '#1c1c1c',
        borderRadius: 16,
        overflow: 'hidden',
      }}>
        {tokens.map((token, i) => (
          <div key={token.id}>
            <TokenRow token={token} />
            {i < tokens.length - 1 && (
              <div style={{
                height: 1,
                background: 'rgba(255,255,255,0.06)',
                marginLeft: 72,
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
