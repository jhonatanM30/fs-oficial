import React, { useState, useEffect } from 'react'
import { helpHttp } from '../helpers/helpHttp';

import { ListTeam } from './ListTeam';




export const Team = () => {
    const [dataTeam, setdataTeam] = useState([])

    let api = helpHttp();
    let url = 'http://localhost:5000/teams'
   
    useEffect(() => {
        api.get(url).then(resp => {           
            !resp.err ? setdataTeam(resp)
                : alert(`Error ${resp.err}`);
        })
    }, [])

    return (
        <div className="container">
            <ListTeam data={dataTeam}/>
        </div>
    );
};
