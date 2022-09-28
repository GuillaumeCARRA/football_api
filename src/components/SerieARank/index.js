import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ScorersRank from '../../components/ScorersRank';
import AssistsRank from '../AssistsRank';

import './serieA.css'
import CardsRank from '../CardsRank';

function SerieA({league, season}) {

    const [club, setClub] = useState('135');
    const [year, setYear] = useState('2022');
    
    const [data, setData] = useState([]);
    console.log( data);

    const options = {
        method: 'get',
        url: `https://v3.football.api-sports.io/standings?league=${league}&season=${season}`,
        headers: {
             'x-rapidapi-key': `5b9349fff44ec05a5ae1c6ff2986fe56`,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };
      
    useEffect(() => {
        axios(options).then(function (response) {
            console.log('je suis la data', response.data.response[0].league.standings[0]);
            setData(response.data.response[0].league.standings[0])
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="serieA">
        <div className="serieA__container">
            <div className="serieA__title">  
                <img className="img__title" src="https://media.api-sports.io/football/leagues/135.png" alt="Serie A logo"/>
                <h2 className="serieA__group">Serie A</h2>
            </div>
            <table className="serieA__table">
                <thead>
                    <tr>
                        <th className="serieA__data">classement 2022-23</th>
                        <th className="serieA__data">club</th>
                        <th className="serieA__data">mj</th>
                        <th className="serieA__data">g</th>
                        <th className="serieA__data">n</th>
                        <th className="serieA__data">p</th>
                        <th className="serieA__data">bp</th>
                        <th className="serieA__data">bc</th>
                        <th className="serieA__data">db</th>
                        <th className="serieA__data">pts</th>
                        <th className="serieA__data">forme</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((datas ) =>(
                        <tr key={datas.team.id}>
                        <td className="serieA__standings">
                            <div className="serieA__items">
                                <div className="serieA__rank">
                                    <p>{datas.rank}</p>
                                </div>
                                <div className="serieA__logo">
                                    <img className="serieA__img" src={datas.team.logo} alt={datas.team.name}  />
                                </div>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.team.name}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.all.played}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.all.win}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.all.draw}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.all.lose}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.all.goals.for}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.all.goals.against}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.goalsDiff}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.points}</p>
                            </div>
                        </td>
                        <td className="serieA__standings">
                            <div>
                                <p className="serieA__info">{datas.form}</p>
                            </div>
                         </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <ScorersRank seasons={year} leagues={club}/>
        <AssistsRank seasons={year} leagues={club} />
        <CardsRank seasons={year} leagues={club} />
    </div>
    )
}

export default SerieA;