import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import NavBar from './components/NavBar';
import LigueOne from './components/LigueOneRank';
import WomenRank from './components/WomenRank';
import PremierLeague from './components/PlRank';
import Bundesliga from './components/BundesligaRank';
import LaLiga from './components/LaLigaRank';
import SerieA from './components/SerieARank';
import PrimeiraLiga from './components/PrimeiraLigaRank';
import ScorersRank from './components/ScorersRank';
import AssistsRank from './components/AssistsRank';
import YellowCardsRank from './components/YellowCardsRank';
import RedCardsRank from './components/RedCardsRank'; 

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <NavBar />
        <Routes>
          <Route path='/ligue1' element={<LigueOne />} />
          <Route path='/d1feminine' element={<WomenRank />} />
          <Route path='/premierleague' element={<PremierLeague />} />
          <Route path='/bundesliga' element={<Bundesliga />} />
          <Route path='/laliga' element={<LaLiga />} />
          <Route path='/seriea' element={<SerieA />} />
          <Route path ='/primeiraliga' element={<PrimeiraLiga />} />
        {/* <ScorersRank />
          <AssistsRank />
          <YellowCardsRank />
          <RedCardsRank /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
