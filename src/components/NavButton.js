import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

export const NavButton = () => {
  const tooltipAll = [
    "Ir a pagina principal.",
    "Gestionar Equipos.",
    "Gestionar Jugadores.",
    "Gestionar la Programación.",
    "Ver las estadisticas.",
  ];

  const activeMenuMovil = (e) => {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("nav-menu_visible");
  };

  return (
    <nav className="nav">
      <a
        href="https://webcode.tools/generators/css/keyframe-animation"
        className="logo"
      >
        League Soccer Play
        <span className="oi oi-monitor padding-icon">🏆</span>
      </a>
      <button className="nav-toogle" onClick={activeMenuMovil}>
        <i className="fas fa-bars"></i>
      </button>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <Link
            to="/home"
            className="nav-menu-link"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={tooltipAll[0]}
          >
            <i className="fas fa-home"></i> Inicio
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            to="/equipos"
            className="nav-menu-link"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={tooltipAll[1]}
          >
            <i className="fas fa-tshirt"></i> Equipos
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            to="/jugadores"
            className="nav-menu-link"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={tooltipAll[2]}
          >
            <i className="fas fa-male"></i> <i className="fas fa-futbol"></i>{" "}
            <i className="fas fa-male"></i> Jugadores
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            to="/partidos"
            className="nav-menu-link"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={tooltipAll[3]}
          >
            <i className="far fa-clipboard"></i> Resultado de Partidos
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            to="/Galeria Futbolera"
            className="nav-menu-link"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={tooltipAll[4]}
          >
            <i className="far fa-address-card"></i> Galeria futbolera
          </Link>
        </li>
      </ul>
    </nav>
  );
};
