import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './cards.css';

function CardsRank({seasons, leagues}) {

    const [data, setData] = useState([]);
    
    const option = {
        method: 'get',
        url: `https://v3.football.api-sports.io/players/topyellowcards?season=${seasons}&league=${leagues}`,
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
        <div className="cardsRank">
            <div className="cardsRank__container">
                <h2 className="cardsRank__title">Cartons Jaunes/Rouges</h2>
         <table className="cardsRank__table">
            <thead>
                 <tr>
                     <th className="cardsRank__data">joueurs</th>
                     <th className="cardsRank__data">club</th>
                     <th className="cardsRank__data">cartons jaunes</th>
                     <th className="cardsRank__data">cartons rouges</th>
                     <th className="cardsRank__data">fautes commises</th>
                     <th className="cardsRank__data">matchs</th>
                     <th className="cardsRank__data">minutes</th>
                 </tr>
            </thead>
            <tbody>
            {data.slice(0,5).map((datas) =>(
                 <tr key={datas.player.id}>
                     <td className="cardsRank__standings">
                         <div className="cardsRank__elements">
                             <div className="cardsRank__picture">
                                 <img className="cardsRank__img" src={datas.player.photo} alt={datas.player.name} />
                             </div>
                             <div className="cardsRank__info">
                                 <div className="cardsRank__descriptions">
                                     <p>{datas.player.firstname} {datas.player.lastname}, {datas.player.age} ans</p>
                                 </div>
                                 <div className="cardsRank__rate">
                                     Note
                                     <span className="cardsRank__rating">{Number(datas.statistics[0].games.rating).toFixed(2)}</span>
                                 </div>
                             </div>
                         </div>
                     </td>
                     <td className="cardsRank__standings">
                         <img className="cardsRank__team" src={datas.statistics[0].team.logo} alt={datas.statistics[0].team.logo}/>
                     </td>
                     <td className="cardsRank__standings">
                             <span className="cardsRank__yellow">
                                 {datas.statistics[0].cards.yellow}
                             </span>
                     </td>
                     <td className="cardsRank__standings">
                         {datas.statistics[0].cards.red}
                     </td>
                     <td className="cardsRank__standings">
                         {datas.statistics[0].fouls.committed}
                     </td>
                     <td className="cardsRank__standings">
                         {datas.statistics[0].games.appearences}
                     </td>
                     <td className="cardsRank__standings">
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

export default CardsRank;
