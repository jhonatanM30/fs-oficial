import React, {useContext} from 'react'
import '../css/styles.css'
import { Link } from 'react-router-dom';
import { TeamContext } from '../context/TeamContext';



const ListTeamItem = ({ team }) => {
  const {setdataTeamEdit, dataTeamEdit} = useContext(TeamContext);

  let typeLogo = team.team_logo.substr(-4)
  return (
    <div className="col-12 col-sm-10 col-lg-4 mt-1">
      <div className="card text-center">
        <div className="card-header">
          {
            typeLogo.includes('.jpg') || typeLogo.includes('.png')
              ? <img src={team.team_logo} alt="logo" />
              : <h1 className="card-title">{team.team_logo}</h1>
          }

        </div>
        <div className="card-body">
          <h1 className="card-title">{team.team_name}</h1>
          <div className="card-text">
            <h5>Entrenador</h5>
            {team.manager}
          </div>
          <Link className="btn buttonUD" to={`./equipo/${team.team_key}`}>
            <i className="fas fa-arrow-circle-right"></i> Ver mas...
          </Link>
          <button className="buttonUD m-2" onClick={() => setdataTeamEdit([team, !dataTeamEdit[1]])}>
            <i className="fas fa-edit"></i> Editar
          </button>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
};
export default ListTeamItem;