import React from "react";
import "../css/home.css";
import { useHistory } from "react-router-dom";

export const Home = () => {

  const history = useHistory();

  const handleClickButton = () => {
    history.replace('/equipos');
  }

  return (
    <div className="container cont-home animate__animated animate__fadeIn">
      <div className="row">
        <div className="col">
          <h1 className="titleHome">
            Bienvenidos A <span className="titleHome2">La App Soccer Team</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="decription">
            En la plataforma de la liga de fútbol te presentamos lo mejor para
            ti y tu equipo, visita las diferentes opciones y hazte un gol
            actualizando la información de tu interes
          </p>
        </div>
      </div>
      <div className="row justify-content-lg-center justify-content-sm-center">
        <div className="col-sm-12 col-lg-3  g-0">
          <button className="buttonUD" onClick={handleClickButton}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
