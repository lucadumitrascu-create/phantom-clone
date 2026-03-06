import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import type { Token } from '../data/defaultTokens';
import StatusBar from '../components/StatusBar';

export default function SettingsScreen() {
  const { tokens, updateTokens } = useWallet();
  const navigate = useNavigate();
  const [editTokens, setEditTokens] = useState<Token[]>(JSON.parse(JSON.stringify(tokens)));

  const updateField = (index: number, field: keyof Token, value: string) => {
    setEditTokens(prev => {
      const updated = [...prev];
      const t = { ...updated[index] };
      if (field === 'balance' || field === 'price' || field === 'change24h' || field === 'changeUsd') {
        t[field] = parseFloat(value) || 0;
      } else if (field === 'name' || field === 'symbol' || field === 'id' || field === 'icon') {
        t[field] = value;
      }
      updated[index] = t;
      return updated;
    });
  };

  const addToken = () => {
    setEditTokens(prev => [...prev, {
      id: `token-${Date.now()}`,
      name: 'New Token',
      symbol: 'TKN',
      balance: 0,
      price: 0,
      change24h: 0,
      changeUsd: 0,
      icon: '',
    }]);
  };

  const removeToken = (index: number) => {
    setEditTokens(prev => prev.filter((_, i) => i !== index));
  };

  const save = () => {
    updateTokens(editTokens);
    navigate('/');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    background: '#2a2a2e',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 14,
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    color: '#6e6e6e',
    marginBottom: 4,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  };

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
        justifyContent: 'space-between',
        padding: '8px 12px',
      }}>
        <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }}>
          <svg fill="none" viewBox="0 0 24 24" width="24" height="24" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="white" strokeWidth="2" d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span style={{ fontSize: 18, fontWeight: 600 }}>Settings</span>
        <div style={{ width: 32 }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 100px', WebkitOverflowScrolling: 'touch' as const }}>
        {editTokens.map((token, i) => (
          <div key={token.id} style={{
            background: '#1c1c1c',
            borderRadius: 16,
            padding: 16,
            marginBottom: 12,
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 16, fontWeight: 600 }}>{token.symbol || 'Token'}</span>
              <button
                onClick={() => removeToken(i)}
                style={{ color: '#e54d2e', fontSize: 13, fontWeight: 500 }}
              >
                Remove
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>
                <div style={labelStyle}>Name</div>
                <input
                  style={inputStyle}
                  value={token.name}
                  onChange={e => updateField(i, 'name', e.target.value)}
                />
              </div>
              <div>
                <div style={labelStyle}>Symbol</div>
                <input
                  style={inputStyle}
                  value={token.symbol}
                  onChange={e => updateField(i, 'symbol', e.target.value)}
                />
              </div>
              <div>
                <div style={labelStyle}>Balance</div>
                <input
                  style={inputStyle}
                  type="number"
                  value={token.balance}
                  onChange={e => updateField(i, 'balance', e.target.value)}
                />
              </div>
              <div>
                <div style={labelStyle}>Price (USD)</div>
                <input
                  style={inputStyle}
                  type="number"
                  step="any"
                  value={token.price}
                  onChange={e => updateField(i, 'price', e.target.value)}
                />
              </div>
              <div>
                <div style={labelStyle}>24h Change %</div>
                <input
                  style={inputStyle}
                  type="number"
                  step="any"
                  value={token.change24h}
                  onChange={e => updateField(i, 'change24h', e.target.value)}
                />
              </div>
              <div>
                <div style={labelStyle}>24h Change $</div>
                <input
                  style={inputStyle}
                  type="number"
                  step="any"
                  value={token.changeUsd}
                  onChange={e => updateField(i, 'changeUsd', e.target.value)}
                />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <div style={labelStyle}>Icon URL</div>
                <input
                  style={inputStyle}
                  value={token.icon}
                  onChange={e => updateField(i, 'icon', e.target.value)}
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addToken}
          style={{
            width: '100%',
            padding: 16,
            borderRadius: 16,
            border: '1px dashed rgba(255,255,255,0.1)',
            textAlign: 'center',
            color: '#ab9ff2',
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          + Add Token
        </button>
      </div>

      {/* Save button */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '12px 16px',
        paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
        background: 'linear-gradient(transparent, #111111 30%)',
      }}>
        <button
          onClick={save}
          style={{
            width: '100%',
            height: 52,
            borderRadius: 26,
            background: '#ab9ff2',
            color: '#111',
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
