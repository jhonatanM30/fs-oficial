import React from 'react'

export const BodyTeam = ({ team, dataTeamEdit, setdataTeamEdit, changeStageInfo }) => {

    return (
        <div className="card-body">
            <h1 className="card-title">{team.team_name}</h1>
            <div className="card-text">
                <h5>Entrenador</h5>
                {team.manager}
            </div>
            <button className="buttonUD m-2" onClick={changeStageInfo('open')}>
                Ver mas
            </button>
            <button className="buttonUD m-2" onClick={() => setdataTeamEdit([team, !dataTeamEdit[1]])}>
                Editar
            </button>            
        </div>
    )
}
