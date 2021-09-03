import React, { useState, useEffect } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { FormTeam } from './FormTeam';
import { ListTeam } from './ListTeam';
import { InformationTeam } from './InformationTeam'

const clicSomeData = false;

export const Team = () => {
    const [dataTeam, setdataTeam] = useState([])
    const [dataTeamEdit, setdataTeamEdit] = useState([null, clicSomeData])
    const [stateMoreDetails, setstateMoreDetails] = useState([null, clicSomeData])

    let api = helpHttp();
    let url = 'http://localhost:5000/teams'

    useEffect(() => {
        api.get(url).then(resp => {
            !resp.err ? setdataTeam(resp)
                : alert(`Error ${resp.err}`);
        })
    }, [])

    const createTeam = (newTeam) => {       
        newTeam.team_key = parseInt(dataTeam[dataTeam.length-1].team_key) + 1;
        setdataTeam([...dataTeam, newTeam]);
    }

    const updateTeam = (updateTeam) => {
        let newData = dataTeam.map(data =>
            data.team_key === updateTeam.team_key ? updateTeam : data
        );
        setdataTeam(newData);
    }

    return (
        <div className="container cont-team">
            <FormTeam
                createTeam={createTeam}
                updateTeam={updateTeam}
                dataTeamEdit={dataTeamEdit}
                setdataTeamEdit={setdataTeamEdit}
            />
            <ListTeam
                data={dataTeam}
                dataTeamEdit={dataTeamEdit}
                setdataTeamEdit={setdataTeamEdit}
                stateMoreDetails={stateMoreDetails} 
                setstateMoreDetails={setstateMoreDetails}/>
                
            {
                stateMoreDetails[1] && <InformationTeam 
                                        stateMoreDetails={stateMoreDetails} 
                                        setstateMoreDetails={setstateMoreDetails} />
            }
        </div>
    );
};
