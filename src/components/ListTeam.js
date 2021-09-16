import React, { useContext } from 'react'
import { Fragment } from "react";
import { TeamContext } from '../context/TeamContext';
import Spinner from "../helpers/Spinner";
import ListTeamItem from './ListTeamItem';

export const ListTeam = () => {

  const {dataTeam} = useContext(TeamContext);
  return (
    <Fragment>
      <div className="ban-title mx-auto">Lista de Equipos</div>
      <div className="row">
        {
          dataTeam.length < 1 ? <Spinner></Spinner>
            : dataTeam.map(team =>
              <ListTeamItem
                key={team.team_key}
                team={team}
                />
             
            )
        }
      </div>
    </Fragment>
  );
};
