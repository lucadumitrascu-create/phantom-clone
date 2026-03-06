import { useState } from 'react';

const tabs = [
  {
    label: 'Home',
    icon: (active: boolean) => (
      <svg fill={active ? '#ab9ff2' : 'none'} viewBox="0 0 24 24" width="24" height="24">
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10.5L12 3l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5Z"
        />
      </svg>
    ),
  },
  {
    label: 'Trade',
    icon: (active: boolean) => (
      <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 21h8m-4-4v4M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"
        />
      </svg>
    ),
  },
  {
    label: 'Swap',
    icon: (active: boolean) => (
      <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 14-4 4m0 0 4 4m-4-4h11a4 4 0 0 0 4-4m-5-4 4-4m0 0-4-4m4 4H8a4 4 0 0 0-4 4"
        />
      </svg>
    ),
  },
  {
    label: 'Activity',
    icon: (active: boolean) => (
      <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        />
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          d="M8 9h8M8 13h4"
        />
      </svg>
    ),
  },
  {
    label: 'Explore',
    icon: (active: boolean) => (
      <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path
          stroke={active ? '#ab9ff2' : '#6e6e6e'}
          strokeWidth="2"
          strokeLinecap="round"
          d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
        />
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
