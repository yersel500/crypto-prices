import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrencyItem from './components/CurrencyItem';
import Header from './components/Header';
import Currencies from './pages/Currencies';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Currencies />} />
        <Route path=":currencyId" element={<CurrencyItem />} />
        <Route path="details" element={<Details />} />
        <Route path="*" element={<Currencies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
