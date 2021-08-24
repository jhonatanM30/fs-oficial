import React from 'react'

export const TableItem = ({info}) => {
    return (
        <tr>  
            <td><img src={info.player_image} alt="Foto no encontrada"></img></td>                       
            <td>{info.player_name}</td>
            <td>{info.player_number}</td>
            <td>{info.player_country}</td>
            <td>{info.player_type}</td>
            <td>{info.player_age}</td>
            <td>{info.player_match_played}</td>
            <td>{info.player_goals}</td>
            <td>{info.player_yellow_cards}</td>
            <td>{info.player_red_cards}</td>                    
        </tr>
    )
}
