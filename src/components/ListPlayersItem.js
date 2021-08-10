import React from 'react'
import '../css/table.css'

const ListPlayersItem = ({ player, setdataToEdit, deleteData }) => {    
    let { id, name, club, img } = player;
    return (
        <div className="card d-flex flex-column justify-content-between ml-2">
            <div className="card-header">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-body">
                <img src={img} className="card-img-top" alt="..." />
                <p className="card-text">{name}, jugador del club {club} juega actualmente con la camiseta # {id}</p>
                <p className="card-text"><small className="text-muted">Club actual {club}...</small></p>
            </div>
            <div className="card-footer text-muted">
                <button onClick={() => setdataToEdit(player)} className="btn btn-warning">Editar</button>
                <button onClick={() => deleteData(id)} className="btn btn-danger">Eliminar</button>
            </div>
        </div>

    )
};

export default ListPlayersItem;