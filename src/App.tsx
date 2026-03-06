import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import HomeScreen from './screens/HomeScreen';
import TokenDetailScreen from './screens/TokenDetailScreen';
import SettingsScreen from './screens/SettingsScreen';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <WalletProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/token/:id" element={<TokenDetailScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
        </Routes>
      </WalletProvider>
    </BrowserRouter>
  );
}
