import { useNavigate } from 'react-router-dom';
import type { Token } from '../data/defaultTokens';

function formatBalance(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'M';
  if (n >= 1_000) return n.toLocaleString('en-US', { maximumFractionDigits: 2 });
  if (n >= 1) return n.toFixed(2);
  if (n >= 0.001) return n.toFixed(5);
  return n.toFixed(6);
}

function formatUSD(n: number): string {
  const abs = Math.abs(n);
  if (abs >= 1000) return '$' + abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (abs >= 0.01) return '$' + abs.toFixed(2);
  return '$' + abs.toFixed(6);
}

const VerifiedBadge = () => (
  <svg fill="none" viewBox="0 0 24 24" width="16" height="16" style={{ flexShrink: 0 }}>
    <path fill="#ab9ff2" fillRule="evenodd" d="M12.737 1.271a1.136 1.136 0 0 0-1.473 0l-2.46 2.097a1.136 1.136 0 0 1-.647.268l-3.222.257a1.136 1.136 0 0 0-1.042 1.041l-.257 3.223a1.136 1.136 0 0 1-.268.646l-2.097 2.46a1.136 1.136 0 0 0 0 1.474l2.097 2.46c.155.182.249.408.268.646l.257 3.223c.044.556.486.997 1.042 1.041l3.222.257c.238.02.464.113.646.268l2.46 2.097a1.136 1.136 0 0 0 1.474 0l2.46-2.097c.182-.155.408-.249.646-.268l3.223-.257a1.136 1.136 0 0 0 1.041-1.041l.258-3.223c.019-.238.112-.464.267-.646l2.097-2.46a1.136 1.136 0 0 0 0-1.474l-2.097-2.46a1.136 1.136 0 0 1-.267-.646l-.258-3.223a1.136 1.136 0 0 0-1.041-1.041l-3.223-.257a1.136 1.136 0 0 1-.646-.268zm4.077 8.31a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clipRule="evenodd" />
  </svg>
);

export default function TokenRow({ token }: { token: Token }) {
  const navigate = useNavigate();
  const usdValue = token.balance * token.price;
  const changeColor = token.changeUsd === 0 ? '#6e6e6e' : token.changeUsd > 0 ? '#30a46c' : '#e54d2e';

  return (
    <button
      type="button"
      onClick={() => navigate(`/token/${token.id}`)}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '14px 16px',
        width: '100%',
        textAlign: 'left',
      }}
    >
      {/* Token icon */}
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 22,
        background: '#111',
        flexShrink: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={token.icon}
          alt={token.symbol}
          width={44}
          height={44}
          crossOrigin="anonymous"
          style={{ display: 'flex' }}
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = 'none';
            el.parentElement!.style.background = '#2a2a2e';
            el.parentElement!.style.fontSize = '18px';
            el.parentElement!.style.fontWeight = '700';
            el.parentElement!.style.color = '#ab9ff2';
            el.parentElement!.textContent = token.symbol[0];
          }}
        />
      </div>

      {/* Center: Name + Balance */}
      <div style={{
        flex: 1,
        marginLeft: 12,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}>
          <span style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#fff',
          }}>
            {token.name}
          </span>
          {token.verified && <VerifiedBadge />}
        </div>
        <span style={{
          fontSize: 14,
          color: '#6e6e6e',
        }}>
          {formatBalance(token.balance)} {token.symbol}
        </span>
      </div>

      {/* Right: USD value + change */}
      <div style={{
        textAlign: 'right',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 3,
      }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>
          {formatUSD(usdValue)}
        </span>
        <span style={{ fontSize: 14, color: changeColor }}>
          {token.changeUsd >= 0 ? '' : '-'}{formatUSD(token.changeUsd)}
        </span>
      </div>
    </button>
  );
}
