import React from "react";
import "../css/home.css";
import imgNac from "../common/img/Atletico-nacional.jpg";
import imgBoca from "../common/img/boca.png";

export const Home = () => {
    return (
        <div className="cont">
            <div className="cont-menu">
                <ul className="container-item-menu">
                    <li className="container-menu-item">                        
                        <a
                            href="https://webcode.tools/generators/css/keyframe-animation"
                            className="menu-link"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                        >
                            Partidos
                        </a>                        
                    </li>
                    <li className="container-menu-item">
                        <a
                            href="https://webcode.tools/generators/css/keyframe-animation"
                            className="menu-link"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                        >
                             Noticias
                        </a>
                    </li>
                    <li className="container-menu-item">
                        <a
                            href="https://webcode.tools/generators/css/keyframe-animation"
                            className="menu-link"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                        >
                            Tabla de posiciones
                        </a>
                    </li>
                    <li className="container-menu-item">
                        <a
                            href="https://webcode.tools/generators/css/keyframe-animation"
                            className="menu-link"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                        >
                            Goleadores
                        </a>
                    </li>
                </ul>
                <div className="container-item-date">Miercoles 24-Agosto-2021 - Amistoso</div>
                <div className="container-item-match">
                    <div className="item-match">
                    <img src={imgNac} alt="Parliament Hill"  />
                        <p>Club Atlético Nacional</p>                       
                    </div>
                    <div className="item-match vs"> <span>-</span> </div>
                    <div className="item-match">
                    <img src={imgBoca} alt="Parliament Hill"  />
                        <p>Club Atlético Boca Juniors</p>                       
                    </div>                    
                </div>              
            </div>
        </div>
    );
};
