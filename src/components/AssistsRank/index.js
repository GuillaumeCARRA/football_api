import React, {useState, useEffect}  from 'react';
import axios from 'axios';

import './assistsRank.css';


function AssistsRank({seasons, leagues}) {

    const [data, setData] = useState([]);

    const option = {
        method: 'get',
        url: `https://v3.football.api-sports.io/players/topassists?season=${seasons}&league=${leagues}`,
        headers: {
            'x-rapidapi-key': `5b9349fff44ec05a5ae1c6ff2986fe56`,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    }

    useEffect(() => {
        axios(option).then(function (response) {
            console.log('data top assists', response.data.response);
            setData(response.data.response);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])



    return (
        <div className="assistsRank">
            <div className="assistsRank__container">
                <h2 className="assistsRank__title">Meilleurs Passeurs</h2>
         <table className="assistsRank__table">
            <thead>
                 <tr>
                     <th className="assistsRank__data">joueurs</th>
                     <th className="assistsRank__data">club</th>
                     <th className="assistsRank__data">passes décisives</th>
                     <th className="assistsRank__data">nombre de passes</th>
                     <th className="assistsRank__data">passes clés</th>
                     <th className="assistsRank__data">matchs</th>
                     <th className="assistsRank__data">minutes</th>
                 </tr>
            </thead>
            <tbody>
            {data.slice(0,5).map((datas) =>(
                 <tr key={datas.player.id}>
                     <td className="assistsRank__standings">
                         <div className="assistsRank__elements">
                             <div className="assistsRank__picture">
                                 <img className="assistsRank__img" src={datas.player.photo} alt={datas.player.name} />
                             </div>
                             <div className="assistsRank__info">
                                 <div className="assistsRank__descriptions">
                                     <p>{datas.player.firstname} {datas.player.lastname}, {datas.player.age} ans</p>
                                 </div>
                                 <div className="assistsRank__rate">
                                     Note
                                     <span className="assistsRank__rating">{Number(datas.statistics[0].games.rating).toFixed(2)}</span>
                                 </div>
                             </div>
                         </div>
                     </td>
                     <td className="assistsRank__standings">
                         <img className="assistsRank__team" src={datas.statistics[0].team.logo} alt={datas.statistics[0].team.logo}/>
                     </td>
                     <td className="assistsRank__standings">
                             <span className="assistsRank__assists">
                                 {datas.statistics[0].goals.assists}
                             </span>
                     </td>
                     <td className="assistsRank__standings">
                         {datas.statistics[0].passes.total}
                     </td>
                     <td className="assistsRank__standings">
                         {datas.statistics[0].passes.key}
                     </td>
                     <td className="assistsRank__standings">
                         {datas.statistics[0].games.appearences}
                     </td>
                     <td className="assistsRank__standings">
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

export default AssistsRank;
