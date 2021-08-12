import React, { useState, useEffect } from 'react'
import '../css/form.css'
import modal from '../helpers/modal'

const initialForm = {
    id: null,
    name: '',
    club: '',
    img: '',
}

export const FormPlayers = ({ createData, updateData, dataToEdit, setdataToEdit }) => {

    const [formState, setFormState] = useState(initialForm);
    const { id, name, club, img } = formState;

    const getmodal = document.getElementById('simpleModal');
    const [stateModal, setstateModal] = useState(true)


    useEffect(() => {
        if (dataToEdit) {
            setFormState(dataToEdit);
        } else {
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

    const modalfunction = () => {        
        modal(stateModal, setstateModal, getmodal);
    }
    return (
        <div className="main-modal">
            <button id="modalBtn" className="but-open" onClick={modalfunction}>Registrar Jugador <i class="fas fa-user-plus"></i></button>
            <div id="simpleModal" className="modal-overlay">
                <div className="content-modal">               
                    <form className="form-reg" onsubmit="return validar()">
                    <legend className="close" onClick={modalfunction}><i class="fas fa-times"></i></legend>
                        <div className="form-group">                                                     
                            <legend>{id ? 'Editar Jugador' : 'Agregar Jugador'}</legend>                            
                            <label for="name">Nombre:</label>
                            <input type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={handleChange}
                                />
                            <label for="club">Club del jugador:</label>
                            <input type="text"
                                    className="form-control"
                                    name="club"
                                    placeholder="Club actual"
                                    value={club}
                                    onChange={handleChange}
                                />
                            <label for="img">Foto del jugador:</label>
                            <input type="text"
                                    className="form-control"
                                    name="img"
                                    placeholder="Foto del jugador"
                                    value={img}
                                    onChange={handleChange}
                                />                           
                        </div>                        
                        <button type="submit" className="btn-send">Enviar</button>
                        <button type="reset" onClick={handleReset} className="btn-clear">Limpiar</button>
                    </form>
                </div>
            </div>
        </div>



    )
};

