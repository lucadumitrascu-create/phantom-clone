const perps = [
  {
    id: 'btc',
    name: 'BTC',
    leverage: '40x',
    change: -3.56,
    icon: 'https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/assets/mainnet/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E/logo.png',
    iconBg: '#F7931A',
  },
  {
    id: 'eth',
    name: 'ETH',
    leverage: '25x',
    change: -4.61,
    icon: 'https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png',
    iconBg: '#627EEA',
  },
  {
    id: 'xyz',
    name: 'XYZ100',
    leverage: '',
    change: -0.10,
    icon: '',
    iconBg: '#1a3a6a',
  },
];

export default function PerpsSection() {
  return (
    <div style={{ padding: '0 16px' }}>
      {/* Section header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '20px 0 12px',
      }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>Perps</span>
        <svg fill="none" viewBox="0 0 24 24" width="18" height="18">
          <path stroke="#6e6e6e" strokeWidth="2.5" strokeLinecap="round" d="M9 6l6 6-6 6" />
        </svg>
      </div>

      {/* Cards horizontal scroll */}
      <div style={{
        display: 'flex',
        gap: 10,
        overflowX: 'auto',
        paddingBottom: 4,
        WebkitOverflowScrolling: 'touch' as const,
      }}>
        {perps.map((p) => (
          <div
            key={p.id}
            style={{
              minWidth: 160,
              background: '#1c1c1c',
              borderRadius: 16,
              padding: 14,
              flexShrink: 0,
            }}
          >
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: p.iconBg,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 12,
              position: 'relative',
            }}>
              {p.icon ? (
                <img src={p.icon} width={48} height={48} alt={p.name} crossOrigin="anonymous" />
              ) : (
                <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>{p.name[0]}</span>
              )}
              {/* Infinity symbol overlay */}
              <div style={{
                position: 'absolute',
                bottom: 2,
                right: 2,
                width: 18,
                height: 18,
                borderRadius: 9,
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
              }}>
                ∞
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{p.name}</span>
              {p.leverage && (
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#6e6e6e',
                  background: 'rgba(255,255,255,0.08)',
                  padding: '2px 6px',
                  borderRadius: 4,
                }}>
                  {p.leverage}
                </span>
              )}
            </div>
            <div style={{
              fontSize: 14,
              fontWeight: 500,
              color: p.change >= 0 ? '#30a46c' : '#e54d2e',
            }}>
              {p.change >= 0 ? '+' : ''}{p.change.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
