import React from 'react';
import ListPlayersItem from './ListPlayersItem';
import '../css/listPlayers.css'
import Spinner from '../helpers/Spinner';




export const ListPlayers = ({ data, setdataToEdit, deleteData, dataToEdit }) => {  
    return (
        <div className="cards">            
             <div className="ban-title">Lista de Jugadores</div>
            {                
                data.length < 1 ?
                    <Spinner></Spinner>
                    : data.map(player =>
                        <ListPlayersItem
                            key={player.id}
                            player={player}
                            setdataToEdit={setdataToEdit}
                            deleteData={deleteData}
                            dataToEdit={dataToEdit}
                        />
                    )
            }
        </div>
    );
};
