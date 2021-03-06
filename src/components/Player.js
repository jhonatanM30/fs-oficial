import React, { useState, useEffect } from "react";
import { FormPlayers } from "./FormPlayers";
import { ListPlayers } from "./ListPlayers";
import { helpHttp } from "../helpers/helpHttp";
import { PlayerFormContext, PlayerListContext } from "../context/PlayerContext";

const clicSomeData = false;

export const Player = () => {
  const [dataPlayer, setdataPlayer] = useState([]);
  const [dataToEdit, setdataToEdit] = useState([null, clicSomeData]);

  let api = helpHttp();
  let url = "http://localhost:5000/players";

  useEffect(() => {
    api.get(url).then((resp) => {
      !resp.err ? setdataPlayer(resp) : alert(`Error ${resp.err}`);
    });
  }, []);

  const createData = (newPlayer) => {
    newPlayer.id = Date.now();
    setdataPlayer([...dataPlayer, newPlayer]);
  };
  const updateData = (updatePlayer) => {
    let newData = dataPlayer.map((data) =>
      data.id === updatePlayer.id ? updatePlayer : data
    );
    setdataPlayer(newData);
  };
  const deleteData = (deletedPlayer) => {
    let wishDelete = window.confirm(
      `Esta seguro que desea eliminar al Jugador # ${deletedPlayer}`
    );
    wishDelete
      ? setdataPlayer(
          dataPlayer.filter((player) => player.id !== deletedPlayer)
        )
      : setTimeout(() => {
          alert(`No se elimino el jugador # ${deletedPlayer}`);
        }, 300);
  };
  return (
    <div>
      <PlayerFormContext.Provider
        value={{
          createData,
          updateData,
          dataToEdit,
          setdataToEdit,
        }}
      >
        <FormPlayers />
      </PlayerFormContext.Provider>
      <PlayerListContext.Provider
        value={{
          dataPlayer,
          deleteData,
          dataToEdit,
          setdataToEdit,
        }}
      >
        <ListPlayers />
      </PlayerListContext.Provider>
    </div>
  );
};
