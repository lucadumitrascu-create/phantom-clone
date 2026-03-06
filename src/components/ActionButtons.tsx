const actions = [
  {
    label: 'Send',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="currentColor" strokeWidth="2" d="m10 14 1.086 3.802c.831 2.909 4.958 2.898 5.774-.015L20.04 6.424c.42-1.502-.963-2.886-2.465-2.465L6.213 7.14c-2.913.816-2.924 4.943-.015 5.774zm0 0 3-3" />
      </svg>
    ),
  },
  {
    label: 'Swap',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="currentColor" strokeWidth="2" d="m9 14-4 4m0 0 4 4m-4-4h11a4 4 0 0 0 4-4m-5-4 4-4m0 0-4-4m4 4H8a4 4 0 0 0-4 4" />
      </svg>
    ),
  },
  {
    label: 'Receive',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
        <path fill="currentColor" fillRule="evenodd" d="M5.5 6.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6zM5.5 17.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6zM16.5 6.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6z" clipRule="evenodd" />
        <path stroke="currentColor" strokeWidth="2" d="M3 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 16a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM14 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z" />
        <path fill="currentColor" d="M13 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM13 20a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM19 20a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM19 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM16 17a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
      </svg>
    ),
  },
  {
    label: 'Buy',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="currentColor" strokeWidth="2" d="M12 1v22m5-18H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
      </svg>
    ),
  },
];

export default function ActionButtons() {
  return (
    <div style={{
      display: 'flex',
      gap: 10,
      padding: '20px 16px 8px',
    }}>
      {actions.map((a) => (
        <button
          key={a.label}
          type="button"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '16px 0',
            background: '#222',
            borderRadius: 16,
            color: '#ab9ff2',
          }}
        >
          {a.icon}
          <span style={{ fontSize: 13, fontWeight: 600, color: '#ab9ff2' }}>{a.label}</span>
        </button>
      ))}
    </div>
  );
}
