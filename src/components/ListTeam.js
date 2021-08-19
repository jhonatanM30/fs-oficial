import React from "react";
import { Fragment } from "react";
import Spinner from "../helpers/Spinner";
import {InformationTeam} from './InformationTeam';
import ListTeamItem from './ListTeamItem';





export const ListTeam = ({ data }) => {
  console.log(data)  
  return (
    <Fragment>
      <div className="ban-title">Lista de Equipos</div>
      <div class="row">
        {
          data.length < 1 ? <Spinner></Spinner>
            : data.map(team =>
              <ListTeamItem key={team.team_key} team={team}/>
            )
        }
      </div>
      <InformationTeam/>
    </Fragment>
  );
};
