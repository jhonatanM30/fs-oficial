import React from 'react'
import { useHistory } from 'react-router'

export const CardPlayer = ({ player}) => {
 
    const history = useHistory();

    const handleReturn = () => {
        history.length <= 2 ? history.push('/home')
            : history.goBack()
    }
    return (
        <div className="col-10 col-sm-10 col-lg-5 my-card ">
            <div className="row justify-content-start  p-3">
                <div className="col-md-3">
                    <img src={player.player_image} className="card-img" alt="Foto no encontrada" />
                </div>
                <div className="col-md-9">
                    <h5>{player.player_name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Camiseta # : </b>{player.player_number}</li>
                        <li className="list-group-item"><b>Posicion De Juego : </b>{player.player_type}</li>
                        <li className="list-group-item"><b>Edad : </b>{player.player_age}</li>
                        <li className="list-group-item"><b>Partidos Jugados : </b>{player.player_match_played}</li>
                        <li className="list-group-item"><b>Tarjetas Amarillas : </b>{player.player_yellow_cards}</li>
                        <li className="list-group-item"><b>Tarjetas Rojas : </b>{player.player_red_cards}</li>
                        <li className="list-group-item"><b>País Origen : </b>{player.player_country}</li>
                        <li className="list-group-item"><b>Edad : </b>{player.player_age}</li>
                    </ul>
                    <button className="btn buttonUD" onClick={handleReturn}>
                    <i className="fas fa-arrow-circle-left"></i> Regresar
                    </button>
                </div>
            </div>
            
        </div>
    )
}



