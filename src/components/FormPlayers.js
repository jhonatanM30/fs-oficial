import React, { useState, useEffect } from 'react'

import '../css/form.css'


const initialForm = {
  id: null,
  name: '',
  team: '',
  img: '',
  player_number: '',
  player_country: '',
  player_type: '',
  player_age: '',
  player_match_played: '',
  player_goals: '',
  player_yellow_cards: '',
  player_red_cards: '',
}

export const FormPlayers = ({ createData, updateData, dataToEdit, setdataToEdit }) => {

  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit[0]) {            
      setFormState(dataToEdit[0])     
      openModal(); 
    } else {
      setFormState(initialForm)
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

    if (!formState.name || !formState.team) {
      alert("Datos incompletos")
      return;
    }
    if (formState.id === null) {
      createData(formState)
    } else {
      updateData(formState)
    }
    handleReset();
  };

  const handleReset = () => {
    setFormState(initialForm);  
    setdataToEdit([null, false])
  }

  const openModal = () => {
    var modal = new window.bootstrap.Modal(document.getElementById('openModal'));
    modal.show();
  }

  return (
    <div className="container">
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#openModal" onClick={handleReset}>
        <i className="fas fa-user-plus" /> Registrar Jugador
      </button>
      <div className="modal fade" id="openModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{formState.id ? 'Editar Jugador' : 'Agregar Jugador'}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text"
                          className="form-control"
                          name="name"
                          placeholder="Ej: Radamel Falcao Garcia"
                          value={formState.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="team">Equipo</label>
                        <input type="text"
                          className="form-control"
                          name="team"
                          placeholder="Club actual"
                          value={formState.team}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="player_number">Numero de camiseta</label>
                        <input type="text"
                          className="form-control"
                          name="player_number"
                          placeholder="Ej: 10"
                          value={formState.player_number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="player_country">Selección</label>
                        <input type="text"
                          className="form-control"
                          name="player_country"
                          placeholder="Ej: Colombia"
                          value={formState.player_country}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="player_type">Posición de juego</label>
                        <input type="text"
                          className="form-control"
                          name="player_type"
                          placeholder="Ej: Delantero"
                          value={formState.player_type}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="player_age">Edad</label>
                        <input type="text"
                          className="form-control"
                          name="player_age"
                          placeholder="Ingrese la edad en años - Ej: 19"
                          value={formState.player_age}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                {
                  formState.id ? "Actualizar" : "Enviar"
                }                
              </button>
              <button type="reset" onClick={handleReset} className="btn btn-secondary">Limpiar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

