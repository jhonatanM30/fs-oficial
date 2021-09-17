import React, { useContext } from 'react';
import ListPlayersItem from './ListPlayersItem';
import '../css/listPlayers.css'
import Spinner from '../helpers/Spinner';
import { PlayerListContext } from '../context/PlayerContext';

export const ListPlayers = () => { 
        
    const {dataPlayer} = useContext(PlayerListContext);

    return (
        <div className="cards">            
             <div className="ban-title">Lista de Jugadores</div>
            {                
                dataPlayer.length < 1 ?
                    <Spinner></Spinner>
                    : dataPlayer.map(player =>
                        <ListPlayersItem
                            key={player.id}
                            player={player}                           
                        />
                    )
            }
        </div>
    );
};
