import React, { useState, useEffect, useContext } from "react";
import { Fragment } from "react";
import { TeamContext } from "../context/TeamContext";
import { openModal } from '../helpers/modal';

const initialFormTeam = {
  team_key: "",
  team_name: "",
  team_logo: "",
  manager: "",
};

export const FormTeam = () => {
 
  const [formTeamState, setformTeamState] = useState(initialFormTeam)
  
  const {dataTeamEdit, createTeam, updateTeam} = useContext(TeamContext);

  useEffect(() => {
    if(dataTeamEdit[0]){
      setformTeamState(dataTeamEdit[0])
      openModal('teamModal')  
    }else{
      setformTeamState(initialFormTeam)
    }
  }, [dataTeamEdit])

  const handleChange = (e) => {
    setformTeamState({
      ...formTeamState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formTeamState.team_name) {
      alert("Datos incompletos");
      return;
    }

    !formTeamState.team_key ? createTeam(formTeamState)
    : updateTeam(formTeamState)

    handleReset();
  };

  const handleReset = () => {      
    setformTeamState(initialFormTeam);    
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#teamModal"
        onClick={handleReset}
      >
        <i className="fas fa-plus"></i> Registrar Equipo
      </button>
      <div
        className="modal fade"
        id="teamModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {formTeamState.team_key ? "Editar Equipo" : "Agregar Equipo"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="team_name">Equipo</label>
                        <input
                          type="text"
                          className="form-control"
                          name="team_name"
                          placeholder="Ej: Barcelona"
                          value={formTeamState.team_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="manager">Entrenador</label>
                        <input
                          type="text"
                          className="form-control"
                          name="manager"
                          placeholder="Ej: Marcelo Bielsa"
                          value={formTeamState.manager}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="team_logo">Logo</label>
                        <input
                          type="text"
                          className="form-control"
                          name="team_logo"
                          placeholder="Ej: Ingrese url de img(.jpg o .png) o nombre del equipo"
                          value={formTeamState.team_logo}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                <i className="fas fa-share-square"></i> {formTeamState.team_key ? "Actualizar" : "Enviar"}
              </button>
              <button
                type="reset"
                onClick={handleReset}
                className="btn btn-secondary"
              >
               <i className="fas fa-broom"></i> Limpiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
