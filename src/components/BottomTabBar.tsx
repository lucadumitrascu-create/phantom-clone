import { useState } from 'react';

const tabs = [
  {
    label: 'Home',
    icon: (active: boolean) => (
      <svg fill={active ? '#ab9ff2' : 'none'} viewBox="0 0 24 24" width="26" height="26">
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        />
      </svg>
    ),
  },
  {
    label: 'Trade',
    icon: (active: boolean) => (
      <svg fill="none" viewBox="0 0 24 24" width="26" height="26">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke={active ? '#ab9ff2' : '#6e6e6e'} strokeWidth="2" />
        <path stroke={active ? '#ab9ff2' : '#6e6e6e'} strokeWidth="2" strokeLinecap="round" d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: 'Swap',
    icon: (active: boolean) => (
      <svg fill="none" viewBox="0 0 24 24" width="26" height="26">
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16 3 4 4-4 4M20 7H8a4 4 0 0 0-4 4m4 10-4-4 4-4M4 17h12a4 4 0 0 0 4-4"
        />
      </svg>
    ),
  },
  {
    label: 'Messages',
    icon: (active: boolean) => (
      <svg fill="none" viewBox="0 0 24 24" width="26" height="26">
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        />
      </svg>
    ),
  },
  {
    label: 'Search',
    icon: (active: boolean) => (
      <svg fill="none" viewBox="0 0 24 24" width="26" height="26">
        <circle cx="11" cy="11" r="8" stroke={active ? '#ab9ff2' : '#6e6e6e'} strokeWidth="2" />
        <path stroke={active ? '#ab9ff2' : '#6e6e6e'} strokeWidth="2" strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
];

export default function BottomTabBar() {
  const [active, setActive] = useState(0);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 60,
      background: '#111',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      paddingBottom: 'env(safe-area-inset-bottom)',
      flexShrink: 0,
    }}>
      {tabs.map((tab, i) => {
        const isActive = i === active;
        return (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
            }}
          >
            {tab.icon(isActive)}
          </button>
        );
      })}
    </div>
  );
}
