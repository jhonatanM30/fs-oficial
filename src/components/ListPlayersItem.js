import React from 'react'
import '../css/listPlayers.css'

const ListPlayersItem = ({ player, setdataToEdit, deleteData }) => {
    let { id, name, club, img } = player;
    return (
        <div className="container-card-item">
            <div className="card">
                <div className="imgBx">
                <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="contentBx">
                    <h2>{name}</h2>
                    <div className="club">
                        <h3>Equipo :</h3>
                        <span>{club}</span>                       
                    </div>                    
                    <div className="dorsal">
                        <h3>Dorsal :</h3>
                        <span>{ `# ${id}` }</span>                        
                    </div>                    
                    <button >Editar</button>
                    <button>Eliminar</button>
                </div>
            </div>
        </div>
    )
};

export default ListPlayersItem;