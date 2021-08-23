import React from 'react'
import '../css/styles.css'



const ListTeamItem = ({ team, dataTeamEdit, setdataTeamEdit, stateMoreDetails, setstateMoreDetails  }) => {

  return (
    <div className="col-12 col-sm-6 col-lg-4 mt-1">
      <div className="card text-center">
        <div className="card-header ">
          <img src={team.team_logo} alt="logo" />
        </div>
        <div className="card-body">
          <h1 className="card-title">{team.team_name}</h1>
          <div className="card-text">
            <h5>Entrenador</h5>
            {team.manager}
          </div>
          <button className="buttonUD m-2" onClick={() => setstateMoreDetails([team, !stateMoreDetails[1]])}>
            Ver mas
          </button>
          <button className="buttonUD m-2" onClick={() => setdataTeamEdit([team, !dataTeamEdit[1]])}>
            Editar
          </button>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
};
export default ListTeamItem;