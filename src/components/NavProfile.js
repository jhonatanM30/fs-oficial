import React, { useState, useEffect } from "react";
import "../css/navProfile.css";
import CrudApp from "./CrudApp";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.currentTime = 0;
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return [playing, toggle];
};

export const NavProfile = () => {
  const music = "http://streaming.tdiradio.com:8000/house.mp3";
  const [playing, toggle] = useAudio(music);

  const tooltipSound = "Esta pagina cuenta con sonido de ambientación.";
  const tooltipProfile = "Ver mi perfil.";

  const [stateInfo, setstateInfo] = useState("invisible");

  const [theme, setTheme] = useState(false);

  const darkLight = (e) => {
     
    
    const divItemInfo = document.querySelector(".item-info");
    const body = document.querySelector("body");
        if (theme) {
            setTheme(false); 
            divItemInfo.classList.remove("item-info-visible-dark");  
            body.classList.remove('dark-mode');
            body.classList.add('white-mode');                                     
        } else {
            setTheme(true); 
            body.classList.remove('white-mode');
            body.classList.add('dark-mode');
            divItemInfo.classList.add("item-info-visible-dark");              
                                 
        }
        
    
  };

  const display = (e) => {
    const divInfo = document.querySelector(".item-info");
    const divBanner = document.querySelector(".nav-banner");
    if (stateInfo === "invisible") {
      setstateInfo("visble");
      divBanner.classList.add("nav-banner-none");
      divInfo.classList.add("item-info-visible");
    } else {
      setstateInfo("invisible");
      divInfo.classList.remove("item-info-visible");
      divBanner.classList.remove("nav-banner-none");
    }
  };

  return (
    <div className="nav-container">
      <div className="nav-item item-profile">
        <div className="chill-nav-item">
          <button
            type="button"
            className="btn-profile"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={tooltipProfile}
          >
            <i className="fas fa-user-tie"></i>
          </button>
        </div>
        <div className="chill-nav-item">
          <button className="btn-watch-profile" onClick={display}>
            {stateInfo === "invisible" ? "Ver Perfil" : "Ocultar Perfil"}{" "}
            <i className="far fa-share-square"></i>
          </button>
        </div>
      </div>
      <div className="nav-banner">
        <h2 className="nav-banner-title"> </h2>
      </div>
      <div className="nav-item item-info">
        <ul>
          <h2>Perfil</h2>
          <li>
            <span className="desc-profile">Nombre:</span>
            <br /> <span className="text-profile">Jhonatan Cuesta Marín</span>
          </li>
          <li>
            <span className="desc-profile">Formación:</span> <br />
            <span className="text-profile">
              Tecnologo en Analisis y desarrollo de sistemas
            </span>
          </li>
          <li>
            <span className="desc-profile">Conocimientos:</span> <br />
            <span className="text-profile">
              Oracle-PL/SQL, HTML, CSS3(Flexbox), Js(Conocimientos basicos),
              React(En aprendizaje)
            </span>
          </li>
          <li>
            <span className="desc-profile">Edad:</span>
            <br /> <span className="text-profile">28 años</span>
          </li>
          <li>
            <a
              className="text-profile"
              href="https://webcode.tools/generators/css/keyframe-animation"
            >
              Algunos proyectos realizados
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-item item-options">
        <div className="chill-nav-item">
          <button
            type="button"
            className="btn-sound"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={tooltipSound}
            onClick={toggle}
          >
            {playing ? <span>&#128266;</span> : <span>&#128264;</span>}
          </button>
        </div>
        <div className="chill-nav-item">
          <button className="btn-theme" onClick={darkLight}>
            {theme ? (
              <span className="moon">🌙</span>
            ) : (
              <span className="sun">☀️</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
