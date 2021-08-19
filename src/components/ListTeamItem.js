import React from 'react'
import '../css/Team.css' 

 const ListTeamItem = ({team}) => {
    return (
      <div className="col-sm-3">
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
              <a href="#" className="btn btn-primary">
                Editar
              </a>
            </div>
          </div>
          </div>
    )
};
export default ListTeamItem;