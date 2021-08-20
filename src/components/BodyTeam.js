import React, { useState } from 'react'
import { InformationTeam } from './InformationTeam';

const InitialModal = false

export const BodyTeam = ({ team, dataTeamEdit, setdataTeamEdit }) => {

    const [stateModal, setstateModal] = useState(InitialModal)

    return (
        <div className="card-body">
            <h1 className="card-title">{team.team_name}</h1>
            <p className="card-text">
                <h5>Entrenador</h5>
                {team.manager}
            </p>
            <button className="buttonUD m-2" onClick={setstateModal(!stateModal)}>
                Ver mas
            </button>
            <button className="buttonUD m-2" onClick={() => setdataTeamEdit([team, !dataTeamEdit[1]])}>
                Editar
            </button>

            <InformationTeam
                stateModal={stateModal}
                setstateModal={setstateModal}
                 />
        </div>
    )
}
