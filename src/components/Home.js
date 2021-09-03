import React from "react";
import "../css/home.css";

export const Home = () => {
  return (
    <div className="container cont-home">
      <div className="row">
        <div className="col">
          <h1 className="titleHome">
            Bienvenido A <span className="titleHome2">La Liga De Fútbol</span>
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
        <div className="col-sm-6 col-lg-3  g-0 ">
          <a
            href="https://www.youtube.com/watch?v=Har1v9ArTj4&ab_channel=WinSports"
            target="_blank"           
            rel="noreferrer"
            className="buttonUD"
          >
            Lo mejor de la fecha 📺
          </a>
        </div>
        <div className="col-sm-6 col-lg-3 g-0">
          <a href="https://www.youtube.com/watch?v=zqG1RPxu1KU&ab_channel=PieBall" target="_blank"            
            rel="noreferrer" className="buttonUD">
            Gol de la fecha ⚽
          </a>{" "}
        </div>
        <div className="col-sm-6 col-lg-3  g-0">
          <a href="https://www.youtube.com/watch?v=aA9WUL3vhlE&ab_channel=BotingolTV" target="_blank"            
            rel="noreferrer" className="buttonUD">
            Jugador de la fecha 🥇
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
