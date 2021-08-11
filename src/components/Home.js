import React from "react";
import { 
    Link
  } from "react-router-dom";
import "../css/home.css";

export const Home = () => {
    return (
        <div className="cont">
            <div className="hero">
                <div className="container">
                    <h1>Bienvenido A <span>La Liga De Fútbol</span></h1>
                    <p>En la plataforma de la liga de fútbol te presentamos lo mejor para ti y tu equipo, visita las diferentes opciones y hazte un gol actualizando la información de tu interes</p>
                    <button className="arrow">
                        <i className="fas fa-arrow-down fa-5x"></i>                        
                    </button> <br></br> 
                    <Link to="/jugadores" className="btn-go">
                        Gol de la fecha ⚽                      
                    </Link>                     
                </div>
            </div>
        </div>
    );
};
