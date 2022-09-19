import React from 'react';

import NavBar from './components/NavBar';
import MainRank from './components/MainRank';
import ScorersRank from './components/ScorersRank';
import AssistsRank from './components/AssistsRank';
import YellowCardsRank from './components/YellowCardsRank';
import RedCardsRank from './components/RedCardsRank'; 

import './App.css';

function App() {
  return (
    <div className="App">
          <NavBar />
          <MainRank />
          <ScorersRank />
          <AssistsRank />
          <YellowCardsRank />
          <RedCardsRank />
    </div>
  );
}

export default App;
