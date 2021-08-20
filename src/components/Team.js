import React, { useState, useEffect } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { FormTeam } from './FormTeam';
import { ListTeam } from './ListTeam';

const clicSomeData = false;

export const Team = () => {
    const [dataTeam, setdataTeam] = useState([])
    const [dataTeamEdit, setdataTeamEdit] = useState([null, clicSomeData])

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

    const updateTeam = (updateTeam) => {
        let newData = dataTeam.map(data =>
            data.team_key === updateTeam.team_key ? updateTeam : data
        );
        setdataTeam(newData);
    }

    return (
        <div className="container">
            <FormTeam 
                createTeam={createTeam}
                updateTeam={updateTeam}
                dataTeamEdit={dataTeamEdit}
                setdataTeamEdit={setdataTeamEdit}
                />
            <ListTeam 
                data={dataTeam}
                dataTeamEdit={dataTeamEdit}
                setdataTeamEdit={setdataTeamEdit}/>
        </div>
    );
};
