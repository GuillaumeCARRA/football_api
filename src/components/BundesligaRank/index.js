import React, {useState, useEffect} from 'react';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';

import ScorersRank from '../../components/ScorersRank';
import AssistsRank from '../AssistsRank';
import CardsRank from '../CardsRank';

import "./bundesliga.css";



function Bundesliga({league, season}) {

    const [club, setClub] = useState('78');
    const [year, setYear] = useState('2022');
    
    const [data, setData] = useState([]);

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
            setData(response.data.response[0].league.standings[0])
        }).catch(function (error) {
            console.error(error);
            alert('Vous avez dépassé le quota de requête, désolé...');
        });
    }, [])

    return (
        
        <div className="bundesliga">
        <div className="bundesliga__container">
            <div className="bundesliga__title">  
                <img className="img__title" src="https://media.api-sports.io/football/leagues/78.png" alt="Bundesliga logo"/>
                <h2 className="bundesliga__group">BundesLiga</h2>
            </div>
            <table className="bundesliga__table">
                <thead>
                    <tr>
                        <th className="bundesliga__data">classement 2022-23</th>
                        <th className="bundesliga__data">club</th>
                        <th className="bundesliga__data">mj</th>
                        <th className="bundesliga__data">g</th>
                        <th className="bundesliga__data">n</th>
                        <th className="bundesliga__data">p</th>
                        <th className="bundesliga__data">bp</th>
                        <th className="bundesliga__data">bc</th>
                        <th className="bundesliga__data">db</th>
                        <th className="bundesliga__data">pts</th>
                        <th className="bundesliga__data">forme</th>
                        <th className="bundesliga__data">
                            <button 
                                className="bundesliga__close"
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
                        <td className="bundesliga__standings">
                            <div className="bundesliga__items">
                                <div className="bundesliga__rank">
                                    <p>{datas.rank}</p>
                                </div>
                                <div className="bundesliga__logo">
                                    <img className="bundesliga__img" src={datas.team.logo} alt={datas.team.name}  />
                                </div>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.team.name}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.all.played}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.all.win}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.all.draw}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.all.lose}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.all.goals.for}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.all.goals.against}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.goalsDiff}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.points}</p>
                            </div>
                        </td>
                        <td className="bundesliga__standings">
                            <div>
                                <p className="bundesliga__info">{datas.form}</p>
                            </div>
                         </td>
                        <td className="bundesliga__standings">
                            <div></div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                )}
            </table>
        </div>
        <ScorersRank seasons={year} leagues={club}/>
        <AssistsRank seasons={year} leagues={club} />
        <CardsRank seasons={year} leagues={club}/>
    </div>
  )
}

export default Bundesliga;