import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './scorersRank.css'; 

function ScorersRank({seasons, leagues}) {

    const [data, setData] = useState([]);


    const option = {
        method: 'get',
        url: `https://v3.football.api-sports.io/players/topscorers?season=${seasons}&league=${leagues}`,
        headers: {
            'x-rapidapi-key': `5b9349fff44ec05a5ae1c6ff2986fe56`,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    }

    useEffect(() => {
        axios(option).then(function (response) {
            console.log('data top scorers', response.data.response);
            setData(response.data.response);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="scorersRank">
           <div className="scorersRank__container">
               <h2 className="scorersRank__title">Meilleurs Buteurs</h2>
            <table className="scorersRank__table">
                <thead>
                    <tr>
                        <th className="scorersRank__data">joueurs</th>
                        <th className="scorersRank__data">club</th>
                        <th className="scorersRank__data">buts</th>
                        <th className="scorersRank__data">penaltys marqués</th>
                        <th className="scorersRank__data">penaltys manqués</th>
                        <th className="scorersRank__data">tirs</th>
                        <th className="scorersRank__data">matchs</th>
                        <th className="scorersRank__data">minutes</th>
                    </tr>
                </thead>
            <tbody>
                {data.slice(0,5).map((datas) =>(
                    <tr key={datas.player.id}>
                        <td className="scorersRank__standings">
                            <div className="scorersRank__elements">
                                <div className="scorersRank__picture">
                                    <img className="scorersRank__img" src={datas.player.photo} alt={datas.player.name} />
                                </div>
                                <div className="scorersRank__info">
                                    <div className="scorersRank__descriptions">
                                        <p>{datas.player.firstname} {datas.player.lastname}, {datas.player.age} ans</p>
                                    </div>
                                    <div className="scorersRank__rate">
                                        Note
                                        <span className="scorersRank__rating">{Number(datas.statistics[0].games.rating).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="scorersRank__standings">
                            <img className="scorersRank__team" src={datas.statistics[0].team.logo} alt={datas.statistics[0].team.logo}/>
                        </td>
                        <td className="scorersRank__standings">
                                <span className="scorersRank__goals">
                                    {datas.statistics[0].goals.total}
                                </span>
                        </td>
                        <td className="scorersRank__standings">
                            {datas.statistics[0].penalty.scored}
                        </td>
                        <td className="scorersRank__standings">
                            {datas.statistics[0].penalty.missed}
                        </td>
                        <td className="scorersRank__standings">
                            {datas.statistics[0].shots.total}
                        </td>
                        <td className="scorersRank__standings">
                            {datas.statistics[0].games.appearences}
                        </td>
                        <td className="scorersRank__standings">
                            {datas.statistics[0].games.minutes}
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
        </div>
    )
}

export default ScorersRank;
