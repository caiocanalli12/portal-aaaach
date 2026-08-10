import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import HomePage from './pages/HomePage';

import AmistososPage from './pages/AmistososPage';
import TreinosPage from './pages/TreinosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/sports/amistosos" element={<AmistososPage />} />
        <Route path="/sports/treinos" element={<TreinosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
