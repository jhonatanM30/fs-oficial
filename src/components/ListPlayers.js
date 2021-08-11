import React from 'react';
import ListPlayersItem from './ListPlayersItem';
import '../css/listPlayers.css'


export const ListPlayers = ({ data, setdataToEdit, deleteData }) => {
    return (
        <div className="cards">
            {
                data.length < 1 ?
                    <div className="ban-error">No Hay Jugadores Guardados.</div>
                    : data.map(player =>
                        <ListPlayersItem
                            key={player.id}
                            player={player}
                            setdataToEdit={setdataToEdit}
                            deleteData={deleteData}
                        />
                    )
            }
        </div>
    );
};
