import { useParams, useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import StatusBar from '../components/StatusBar';

function formatUSD(n: number): string {
  const abs = Math.abs(n);
  if (abs >= 1000) return '$' + abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (abs >= 0.01) return '$' + abs.toFixed(2);
  return '$' + abs.toFixed(6);
}

export default function TokenDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const { tokens } = useWallet();
  const navigate = useNavigate();
  const token = tokens.find(t => t.id === id);

  if (!token) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: '#6e6e6e', background: '#111111', height: '100%' }}>
        Token not found
        <div style={{ marginTop: 16, color: '#ab9ff2', cursor: 'pointer' }} onClick={() => navigate('/')}>
          Go back
        </div>
      </div>
    );
  }

  const isPositive = token.change24h >= 0;
  const changeColor = token.change24h === 0 ? '#6e6e6e' : isPositive ? '#30a46c' : '#e54d2e';
  const usdValue = token.balance * token.price;
  const badgeBg = token.change24h === 0
    ? 'rgba(122,122,122,0.1)'
    : isPositive
      ? 'rgba(0,209,140,0.1)'
      : 'rgba(229,77,46,0.1)';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#111',
    }}>
      <StatusBar />

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        gap: 8,
      }}>
        <button
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }}
        >
          <svg fill="none" viewBox="0 0 24 24" width="24" height="24" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="white" strokeWidth="2" d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span style={{ fontSize: 18, fontWeight: 600 }}>{token.name}</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' as const }}>
        {/* Token icon */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0 16px' }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            background: 'rgba(255,255,255,0.04)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src={token.icon}
              alt={token.symbol}
              width={64}
              height={64}
              crossOrigin="anonymous"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = 'none';
                el.parentElement!.style.fontSize = '28px';
                el.parentElement!.style.fontWeight = '700';
                el.parentElement!.style.color = '#ab9ff2';
                el.parentElement!.textContent = token.symbol[0];
              }}
            />
          </div>
        </div>

        {/* Price */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{formatUSD(token.price)}</div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 6,
          }}>
            <span style={{ fontSize: 13, color: changeColor, fontWeight: 500 }}>
              {token.changeUsd >= 0 ? '' : '-'}{formatUSD(token.changeUsd)}
            </span>
            <div style={{
              fontSize: 13,
              fontWeight: 600,
              color: changeColor,
              background: badgeBg,
              padding: '2px 8px',
              borderRadius: 6,
            }}>
              {isPositive ? '+' : ''}{token.change24h.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Balance card */}
        <div style={{
          margin: '24px 16px',
          padding: 16,
          background: '#1c1c1c',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ fontSize: 13, color: '#6e6e6e', marginBottom: 4 }}>Your balance</div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>{formatUSD(usdValue)}</div>
          <div style={{ fontSize: 14, color: '#6e6e6e', marginTop: 4 }}>
            {token.balance.toLocaleString('en-US', { maximumFractionDigits: 6 })} {token.symbol}
          </div>
        </div>

        {/* Chart placeholder */}
        <div style={{
          margin: '0 16px 24px',
          height: 120,
          background: '#1c1c1c',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <svg width="100%" height="80" viewBox="0 0 300 80" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 10 }}>
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isPositive ? '#30a46c' : '#e54d2e'} stopOpacity="0.3" />
                <stop offset="100%" stopColor={isPositive ? '#30a46c' : '#e54d2e'} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={isPositive
                ? "M0,60 Q30,55 60,50 T120,35 T180,25 T240,20 T300,10"
                : "M0,20 Q30,25 60,30 T120,40 T180,50 T240,55 T300,60"
              }
              fill="none"
              stroke={isPositive ? '#30a46c' : '#e54d2e'}
              strokeWidth="2"
            />
            <path
              d={isPositive
                ? "M0,60 Q30,55 60,50 T120,35 T180,25 T240,20 T300,10 L300,80 L0,80 Z"
                : "M0,20 Q30,25 60,30 T120,40 T180,50 T240,55 T300,60 L300,80 L0,80 Z"
              }
              fill="url(#chartGrad)"
            />
          </svg>
        </div>

        {/* Action buttons */}
        <div style={{
          display: 'flex',
          gap: 10,
          padding: '0 16px 40px',
        }}>
          {['Send', 'Swap', 'Receive'].map((label) => (
            <button
              key={label}
              style={{
                flex: 1,
                height: 48,
                borderRadius: 24,
                background: label === 'Swap' ? '#ab9ff2' : '#2a2a2e',
                color: label === 'Swap' ? '#111' : '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
