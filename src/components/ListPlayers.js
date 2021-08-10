import React from 'react';
import ListPlayersItem from './ListPlayersItem';
import '../css/table.css'


export const ListPlayers = ({ data, setdataToEdit, deleteData }) => {   
    return (        
        <div className="d-flex flex-wrap">           
            {
                data.length < 1 ?
                    <div>
                        <h3>No hay datos</h3>
                    </div> :
                    data.map(player =>
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
