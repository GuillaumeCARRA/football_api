import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ScorersRank from '../../components/ScorersRank';

import './pl.css'

function PremierLeague({league, season}) {

const [club, setClub] = useState('39');
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
        <div className="ligueOne">
        <div className="ligueOne__container">
            <div className="ligueOne__title">  
                <img className="img__title" src="https://media.api-sports.io/football/leagues/39.png" alt="Ligue 1 logo"/>
                <h2 className="ligueOne__group">Premier League</h2>
            </div>
            <table className="ligueOne__table">
                <thead>
                    <tr>
                        <th className="ligueOne__data">classement 2022-23</th>
                        <th className="ligueOne__data">club</th>
                        <th className="ligueOne__data">mj</th>
                        <th className="ligueOne__data">g</th>
                        <th className="ligueOne__data">n</th>
                        <th className="ligueOne__data">p</th>
                        <th className="ligueOne__data">bp</th>
                        <th className="ligueOne__data">bc</th>
                        <th className="ligueOne__data">db</th>
                        <th className="ligueOne__data">pts</th>
                        <th className="ligueOne__data">forme</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((datas ) =>(
                        <tr key={datas.team.id}>
                        <td className="ligueOne__standings">
                            <div className="ligueOne__items">
                                <div className="ligueOne__rank">
                                    <p>{datas.rank}</p>
                                </div>
                                <div className="ligueOne__logo">
                                    <img className="ligueOne__img" src={datas.team.logo} alt={datas.team.name}  />
                                </div>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.team.name}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.all.played}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.all.win}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.all.draw}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.all.lose}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.all.goals.for}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.all.goals.against}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.goalsDiff}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.points}</p>
                            </div>
                        </td>
                        <td className="ligueOne__standings">
                            <div>
                                <p className="ligueOne__info">{datas.form}</p>
                            </div>
                         </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <ScorersRank seasons={year} leagues={club}/>
    </div>
    )
}

export default PremierLeague;