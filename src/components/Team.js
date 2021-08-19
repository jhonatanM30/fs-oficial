import React, { useState, useEffect } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { FormTeam } from './FormTeam';
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

    const createTeam = (newTeam) => {
        newTeam.team_key  = Date.now();
        setdataTeam([...dataTeam, newTeam]);       
    }

    return (
        <div className="container">
            <FormTeam createTeam={createTeam}/>
            <ListTeam data={dataTeam}/>
        </div>
    );
};
