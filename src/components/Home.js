import React from "react";
import {
    Link
} from "react-router-dom";
import "../css/home.css";

export const Home = () => {
    return (
        <div className="container cont-home">
            <div className="row">
                <div className="col">
                    <h1 className="titleHome">Bienvenido A <span>La Liga De Fútbol</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>En la plataforma de la liga de fútbol te presentamos lo mejor para ti y tu equipo, visita las diferentes opciones y hazte un gol actualizando la información de tu interes</p>
                </div>
            </div>            
            <div className="row justify-content-lg-center justify-content-sm-center">
                <div className="col-sm-6 col-lg-3  g-0 ">
                    <Link to="/jugadores" className="buttonUD">
                        Lo mejor de la fecha 📺
                    </Link></div>
                <div className="col-sm-6 col-lg-3 g-0">
                    <Link to="/jugadores" className="buttonUD">
                        Gol de la fecha ⚽
                    </Link> </div>
                <div className="col-sm-6 col-lg-3  g-0">
                    <Link to="/jugadores" className="buttonUD">
                        Jugador de la fecha 🥇
                    </Link> </div>
            </div>
        </div>
    );
};
