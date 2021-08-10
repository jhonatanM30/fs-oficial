import React, { useState, useEffect } from 'react'
import '../css/form.css'
import '../css/curso.css'

const initialForm = {
    id: null,
    name: '',
    club: '',
    img: '',
}

export const FormPlayers = ({ createData, updateData, dataToEdit, setdataToEdit }) => {
      
    const [formState, setFormState] = useState(initialForm);
    const { id, name, club, img } = formState;

    useEffect(() => {        
        if(dataToEdit){
            setFormState(dataToEdit);
        }else{
            setFormState(initialForm);
        }           
    }, [dataToEdit])

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !club) {
            alert("Datos incompletos")
            return;
        }
        if (id === null) {
            createData(formState)
        } else {
            updateData(formState)
        }
        handleReset();
    };

    const handleReset = () => {
        setFormState(initialForm);
        setdataToEdit(null);
    }

    return (        
        <form onSubmit={handleSubmit} className="container">
            <h3>{id ? 'Editar Jugador' : 'Agregar Jugador'}</h3>
            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label className="col-form-label">Nombre</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nombre"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">
                    <label className="col-form-label">Club del jugador</label>
                    <input type="text"
                        className="form-control"
                        name="club"
                        placeholder="Club actual"
                        value={club}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">
                    <label className="col-form-label">Foto del jugador</label>
                    <input type="text"
                        className="form-control"
                        name="img"
                        placeholder="Foto del jugador"
                        value={img}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="container-btn">
                <button type="submit" className="btn btn-primary">Enviar</button>
                <button type="reset"  onClick={handleReset}  className="btn btn-secondary">Limpiar</button>
            </div>
        </form>


    )
};

