import React from 'react'
import '../css/listPlayers.css'

const ListPlayersItem = ({ player, setdataToEdit, deleteData, dataToEdit }) => {    
    return (
        <div className="container-card-item">                              
            <div className="card">                
                <div className="contentBx">
                    <h2>{player.name}</h2>
                    <div className="club">
                        <h3>club :</h3>
                        <span>{player.team}</span>                       
                    </div>                    
                    <div className="dorsal">
                        <h3>Dorsal :</h3>
                        <span>{ `# ${player.player_number}` }</span>                        
                    </div>                    
                    <div className="club">
                        <h3>Pais :</h3>
                        <span>{player.player_country}</span>                       
                    </div>
                    <div className="club">
                        <h3>Posición :</h3>
                        <span>{player.player_type}</span>                       
                    </div>
                    <div className="club">
                        <h3>edad :</h3>
                        <span>{player.player_age}</span>                       
                    </div>
                    <div className="club">
                        <h3>Partidos Jugados :</h3>
                        <span>{player.player_match_played}</span>                       
                    </div>
                    <div className="club">
                        <h3>Goles :</h3>
                        <span>{player.player_goals}</span>                       
                    </div>
                    <div className="club">
                        <h3>Tarjetas Amarillas :</h3>
                        <span>{player.player_yellow_cards}</span>                       
                    </div>
                    <div className="club">
                        <h3>Tarjetas Rojas :</h3>
                        <span>{player.player_red_cards}</span>                       
                    </div>                    
                    <button onClick={() => setdataToEdit([player, !dataToEdit[1]])}>
                    <i className="fas fa-edit"></i> Editar
                    </button>
                    <button onClick={() => deleteData(player.id)}> 
                    <i class="fas fa-trash-alt"></i> Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ListPlayersItem;