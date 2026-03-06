const predictions = [
  {
    id: 1,
    icon: '🎮',
    iconBg: 'linear-gradient(135deg, #FF3CAC, #784BA0)',
    title: 'FURIA Esports vs. Paper...',
    subtitle: 'Masters Santiago',
    live: true,
  },
  {
    id: 2,
    icon: '⚽',
    iconBg: 'linear-gradient(135deg, #00C9FF, #92FE9D)',
    title: 'Celta Vigo vs Real...',
    subtitle: 'Spanish Primera Divisi...',
    live: false,
  },
];

export default function PredictionsSection() {
  return (
    <div style={{ padding: '0 16px' }}>
      {/* Section header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '20px 0 12px',
      }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>Predictions</span>
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
        {predictions.map((p) => (
          <div
            key={p.id}
            style={{
              minWidth: 240,
              background: '#1c1c1c',
              borderRadius: 16,
              padding: 14,
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: p.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
              }}>
                {p.icon}
              </div>
              {p.live && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#FF4444',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: 3, background: '#FF4444' }} />
                  LIVE
                </div>
              )}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{p.title}</div>
            <div style={{ fontSize: 12, color: '#6e6e6e' }}>{p.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
