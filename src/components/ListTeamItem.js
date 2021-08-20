import React from 'react'
import '../css/Team.css'

const ListTeamItem = ({ team, dataTeamEdit, setdataTeamEdit }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mt-1">
      <div className="card text-center">
        <div className="card-header ">
          <img src={team.team_logo} alt="logo"></img>
        </div>
        <div className="card-body">
          <h1 className="card-title">{team.team_name}</h1>
          <p className="card-text">
            <h5>Entrenador</h5>
            {team.manager}
          </p>
          <a href="#" className="btn btn-primary">
            Ver mas
          </a>
          <button className="btn btn-primary" onClick={()=>setdataTeamEdit([team, !dataTeamEdit[1]])}>
            Editar
          </button>
        </div>
      </div>
    </div>
  )
};
export default ListTeamItem;