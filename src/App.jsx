import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SemaforoPage from './pages/SemaforoPage';
import CalouradaPage from './pages/CalouradaPage';
import VoleiPage from './pages/VoleiPage';
import BasquetePage from './pages/BasquetePage';
import ChoppadaPage from './pages/ChoppadaPage';
import AmistososPage from './pages/AmistososPage';
import JogosPage from './pages/JogosPage';
import TreinosPage from './pages/TreinosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/semaforo" element={<SemaforoPage />} />
        <Route path="/event/calourada" element={<CalouradaPage />} />
        <Route path="/event/volei" element={<VoleiPage />} />
        <Route path="/event/basquete" element={<BasquetePage />} />
        <Route path="/event/choppada" element={<ChoppadaPage />} />
        <Route path="/sports/amistosos" element={<AmistososPage />} />
        <Route path="/sports/jogos" element={<JogosPage />} />
        <Route path="/sports/treinos" element={<TreinosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
