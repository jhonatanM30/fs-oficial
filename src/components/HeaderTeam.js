import React from 'react'

export const HeaderTeam = ({team}) => {
    return (
        <div className="card-header ">
          <img src={team.team_logo} alt="logo"/>
        </div>
    )
}
