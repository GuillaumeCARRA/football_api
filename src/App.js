import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import NavBar from './components/NavBar';
import LigueOne from './components/LigueOneRank';
import WomenRank from './components/WomenRank';
import PremierLeague from './components/PlRank';
import Bundesliga from './components/BundesligaRank';
import LaLiga from './components/LaLigaRank';
import SerieA from './components/SerieARank';
import PrimeiraLiga from './components/PrimeiraLigaRank';
import AssistsRank from './components/AssistsRank';
import YellowCardsRank from './components/YellowCardsRank';
import RedCardsRank from './components/RedCardsRank'; 

import './App.css';

function App() {

  const [league, setLeague] = useState('61');
  const [season, setSeason] = useState('2022');

  return (
    <BrowserRouter>
      <div className="App"> 
        <NavBar />
        <Routes>
          <Route 
            exact path='/' 
            element={
              <LigueOne 
                league={league}
                season={season} 
              /> 
            }
          />
          <Route exact path='/d1feminine' element={<WomenRank />} />
          <Route exactpath='/premierleague' element={<PremierLeague />} />
          <Route exact path='/bundesliga' element={<Bundesliga />} />
          <Route exact path='/laliga' element={<LaLiga />} />
          <Route exact path='/seriea' element={<SerieA />} />
          <Route exact path ='/primeiraliga' element={<PrimeiraLiga />} />
         {/*  <AssistsRank />
          <YellowCardsRank />
          <RedCardsRank /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
