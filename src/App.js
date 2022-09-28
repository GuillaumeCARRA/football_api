import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import NavBar from './components/NavBar';
import LigueOne from './components/LigueOneRank';
import PremierLeague from './components/PlRank';
import Bundesliga from './components/BundesligaRank';
import LaLiga from './components/LaLigaRank';
import SerieA from './components/SerieARank';
import PrimeiraLiga from './components/PrimeiraLigaRank';


import './App.css';

function App() {

  /* LIGUE 1 */
  const [league, setLeague] = useState('61');
  const [season, setSeason] = useState('2022');

  /* PREMIER LEAGUE */
  const [leagueP, setLeagueP] = useState('39');
  const [seasonP, setSeasonP] = useState('2022');

  /* BUNDESLIGA */
  const [leagueB, setLeagueB] = useState('78');
  const [seasonB, setSeasonB] = useState('2022');

  /* LALIGA */
  const [leagueLG, setLeagueLG] = useState('140');
  const [seasonLG, setSeasonLG] = useState('2022');

  /* SERIE A */
  const [leagueS, setLeagueS] = useState('135');
  const [seasonS, setSeasonS] = useState('2022');

  /* PRIMEIRA LIGA */
  const [leaguePT, setLeaguePT] = useState('94');
  const [seasonPT, setSeasonPT] = useState('2022');

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
          <Route 
            exact path='/premierleague' 
            element={
              <PremierLeague 
                league={leagueP}
                season={seasonP}
              />
            } 
          />
          <Route 
            exact path='/bundesliga' 
            element={
              <Bundesliga 
                league={leagueB}
                season={seasonB}
              />
            } 
          />
          <Route 
            exact path='/laliga' 
            element={
              <LaLiga 
                league={leagueLG}
                season={seasonLG}
              />
            } 
          />
          <Route 
            exact path='/seriea' 
              element={
              <SerieA 
                league={leagueS}
                season={seasonS}
              />
            } 
          />
          <Route 
            exact path ='/primeiraliga' 
            element={
              <PrimeiraLiga 
                league={leaguePT}
                season={seasonPT}
              />
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
