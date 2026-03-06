interface PortfolioValueProps {
  total: number;
  changeUsd: number;
  changePct: number;
}

export default function PortfolioValue({ total, changeUsd, changePct }: PortfolioValueProps) {
  const isPositive = changePct > 0;
  const isNeutral = changePct === 0;
  const changeColor = isNeutral ? '#6e6e6e' : isPositive ? '#30a46c' : '#e54d2e';
  const badgeBg = isNeutral
    ? 'rgba(122,122,122,0.15)'
    : isPositive
      ? 'rgba(0,209,140,0.15)'
      : 'rgba(229,77,46,0.15)';

  const sign = isPositive ? '+' : '';
  const usdStr = (changeUsd < 0 ? '-' : '') + '$' + Math.abs(changeUsd).toFixed(2);

  return (
    <div style={{
      padding: '12px 16px 0',
    }}>
      {/* Total balance — left aligned, very large */}
      <div style={{
        fontSize: 44,
        fontWeight: 700,
        letterSpacing: -1,
        lineHeight: 1.1,
      }}>
        ${total < 1000
          ? total.toFixed(2)
          : total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        }
      </div>

      {/* Change row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 4,
      }}>
        <span style={{ fontSize: 15, color: changeColor, fontWeight: 500 }}>
          {usdStr}
        </span>
        <div style={{
          fontSize: 13,
          fontWeight: 600,
          color: changeColor,
          background: badgeBg,
          padding: '3px 8px',
          borderRadius: 6,
        }}>
          {sign}{changePct.toFixed(2)}%
        </div>
      </div>
    </div>
  );
}
