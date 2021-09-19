import React from "react";
import "../css/home.css";
import { useHistory } from "react-router-dom";

export const Home = () => {

  const history = useHistory();

  const handleClickButton = () => {
    history.replace('/equipos');
  }

  return (
    <div className="row cont-home  justify-content-center animate__animated animate__fadeIn">
      <div className="col-lg-12">
          <h1 className="titleHome">
            Bienvenidos A <span className="titleHome2">La App Soccer Team</span>
          </h1>
      </div>
      <div className="col-lg-12">      
          <p className="decription">
            En la plataforma de la liga de fútbol te presentamos lo mejor para
            ti y tu equipo, visita las diferentes opciones y hazte un gol
            actualizando la información de tu interes
          </p>       
      </div>
      <div className="col-lg-5 ">        
          <button className="buttonUD" onClick={handleClickButton}>
            Continuar
          </button>    
      </div>
    </div>
  );
};
