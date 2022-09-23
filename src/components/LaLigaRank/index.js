import React, {useState, useEffect} from 'react'
import axios from 'axios';

import './laLiga.css'


function LaLiga() {

    // const [data, setData] = useState([]);
    // console.log( data);

    // const options = {
    //     method: 'get',
    //     url: 'https://v3.football.api-sports.io/standings?league=140&season=2022',
    //     headers: {
    //          'x-rapidapi-key': `5b9349fff44ec05a5ae1c6ff2986fe56`,
    //         'x-rapidapi-host': 'v3.football.api-sports.io'
    //     }
    //   };
      
    // useEffect(() => {
    //     axios(options).then(function (response) {
    //         console.log('je suis la data', response.data.response[0].league.standings[0]);
    //         setData(response.data.response[0].league.standings[0])
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, [])

    return (
        <div>
            LaLiga
             {/* {data.map((datas) => (
                // console.log('error', datas)
                <div key={datas.team.id}>
                    <h1>{datas.rank} {datas.team.name} <img src={datas.team.logo} /> {datas.points}</h1>
                </div>
            ))} */}
        </div>
    )
}

export default LaLiga;
