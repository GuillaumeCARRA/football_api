import React, {useState, useEffect} from 'react';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';

import ScorersRank from '../../components/ScorersRank';
import AssistsRank from '../AssistsRank';
import CardsRank from '../CardsRank';

import './primeiraLiga.css'


function PrimeiraLiga({league, season}) {

    const [club, setClub] = useState('94');
    const [year, setYear] = useState('2022');

    const [data, setData] = useState([]);
    console.log( data);

    const [toggle, setToggle] = useState(true);

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
            console.log('je suis la data', response.data.response[0]);
            setData(response.data.response[0].league.standings[0])
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    return (
        <div className="primeiraLiga">
        <div className="primeiraLiga__container">
            <div className="primeiraLiga__title">  
                <img className="img__title" src="https://media.api-sports.io/football/leagues/94.png" alt="Primeira Liga logo"/>
                <h2 className="primeiraLiga__group">Primeira Liga</h2>
            </div>
            <table className="primeiraLiga__table">
                <thead>
                    <tr>
                        <th className="primeiraLiga__data">classement 2022-23</th>
                        <th className="primeiraLiga__data">club</th>
                        <th className="primeiraLiga__data">mj</th>
                        <th className="primeiraLiga__data">g</th>
                        <th className="primeiraLiga__data">n</th>
                        <th className="primeiraLiga__data">p</th>
                        <th className="primeiraLiga__data">bp</th>
                        <th className="primeiraLiga__data">bc</th>
                        <th className="primeiraLiga__data">db</th>
                        <th className="primeiraLiga__data">pts</th>
                        <th className="primeiraLiga__data">forme</th>
                        <th className="primeiraLiga__data">
                            <button 
                                className="primeiraLiga__close"
                                onClick={() => setToggle(!toggle)}
                            >
                                {
                                    toggle
                                        ? <Icon 
                                            name='close'
                                            size='large'
                                            
                                        /> 
                                        : <Icon 
                                            name='soccer'
                                            size='large'
                                        />   
                                }
                            </button>
                        </th>
                    </tr>
                </thead>
                {toggle && (<tbody>
                    {data.map((datas ) =>(
                        <tr key={datas.team.id}>
                        <td className="primeiraLiga__standings">
                            <div className="primeiraLiga__items">
                                <div className="primeiraLiga__rank">
                                    <p>{datas.rank}</p>
                                </div>
                                <div className="primeiraLiga__logo">
                                    <img className="primeiraLiga__img" src={datas.team.logo} alt={datas.team.name}  />
                                </div>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.team.name}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.all.played}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.all.win}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.all.draw}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.all.lose}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.all.goals.for}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.all.goals.against}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.goalsDiff}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.points}</p>
                            </div>
                        </td>
                        <td className="primeiraLiga__standings">
                            <div>
                                <p className="primeiraLiga__info">{datas.form}</p>
                            </div>
                         </td>
                    </tr>
                    ))}
                </tbody>
                )}
            </table>
        </div>
        <ScorersRank seasons={year} leagues={club}/>
        <AssistsRank seasons={year} leagues={club} />
        <CardsRank seasons={year} leagues={club} />
    </div>
    )
}

export default PrimeiraLiga;