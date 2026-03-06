interface TopBarProps {
  onLongPress: () => void;
}

export default function TopBar({ onLongPress }: TopBarProps) {
  let pressTimer: ReturnType<typeof setTimeout>;

  const handleStart = () => { pressTimer = setTimeout(onLongPress, 800); };
  const handleEnd = () => { clearTimeout(pressTimer); };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
    }}>
      {/* Left: Avatar + Name */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        {/* Avatar */}
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          overflow: 'hidden',
          background: '#2a2a2e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <img
            height={44}
            width={44}
            alt="Account"
            src="https://assets.phantom.app/assets/phemojis/variant58.png"
            style={{ display: 'flex' }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>@amiri777</div>
          <div style={{ fontSize: 13, lineHeight: 1 }}>💵</div>
        </div>
      </div>

      {/* Right: History + Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* History/Clock icon */}
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36 }}>
          <svg fill="none" viewBox="0 0 24 24" width="22" height="22">
            <circle cx="12" cy="12" r="9" stroke="#6e6e6e" strokeWidth="2" />
            <path stroke="#6e6e6e" strokeWidth="2" strokeLinecap="round" d="M12 7v5l3 3" />
          </svg>
        </button>
        {/* Search icon */}
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36 }}>
          <svg fill="none" viewBox="0 0 24 24" width="22" height="22">
            <path stroke="#6e6e6e" strokeWidth="2" strokeLinecap="round" d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}
