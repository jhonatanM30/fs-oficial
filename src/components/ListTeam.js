import React, { useState, useEffect } from 'react'
import { Fragment } from "react";
import Spinner from "../helpers/Spinner";
import ListTeamItem from './ListTeamItem';

export const ListTeam = ({ data, dataTeamEdit, setdataTeamEdit, stateMoreDetails, setstateMoreDetails }) => {

  return (
    <Fragment>
      <div className="ban-title mx-auto">Lista de Equipos</div>
      <div className="row">
        {
          data.length < 1 ? <Spinner></Spinner>
            : data.map(team =>
              <ListTeamItem
                key={team.team_key}
                team={team}
                dataTeamEdit={dataTeamEdit}
                setdataTeamEdit={setdataTeamEdit}
                stateMoreDetails={stateMoreDetails} 
                setstateMoreDetails={setstateMoreDetails} />
             
            )
        }
      </div>
    </Fragment>
  );
};
