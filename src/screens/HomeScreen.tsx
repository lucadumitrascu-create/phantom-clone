import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import TopBar from '../components/TopBar';
import PortfolioValue from '../components/PortfolioValue';
import ActionButtons from '../components/ActionButtons';
import TokenList from '../components/TokenList';
import BottomTabBar from '../components/BottomTabBar';
import PullToRefresh from '../components/PullToRefresh';

export default function HomeScreen() {
  const { totalBalance, totalChangeUsd, totalChangePct } = useWallet();
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#111',
    }}>
      <TopBar onLongPress={() => navigate('/settings')} />
      <PullToRefresh>
        <PortfolioValue total={totalBalance} changeUsd={totalChangeUsd} changePct={totalChangePct} />
        <ActionButtons />
        <TokenList />
        <div style={{ height: 30 }} />
      </PullToRefresh>
      <BottomTabBar />
    </div>
  );
}
