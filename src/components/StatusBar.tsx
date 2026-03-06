export default function StatusBar() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 20px 4px',
      fontSize: 14,
      fontWeight: 600,
    }}>
      <span>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="9" width="3" height="3" rx="0.5" fill="white" />
          <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill="white" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" fill="white" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="white" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 11.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill="white"/>
          <path d="M4.93 7.76a4.5 4.5 0 016.14 0" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M2.4 5.24a8 8 0 0111.2 0" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        {/* Battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="2.5" stroke="white" strokeOpacity="0.35"/>
          <rect x="2" y="2" width="19" height="9" rx="1.5" fill="white"/>
          <path d="M24 4.5v4a2 2 0 000-4z" fill="white" fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}
