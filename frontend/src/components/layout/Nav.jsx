import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo/logo.png'
import menu from '../../assets/img/iconos/lista.png'
import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
  const abrirMenu = function () {
    if (document.getElementById("boton_menu").className === "boton_menu") {
      const menu = document.getElementById("barramenu");

      document
        .getElementById("boton_menu")
        .setAttribute("class", "boton_menu active");

      menu.setAttribute("class", "barramenu");
    } else {
      const menu = document.getElementById("barramenu");
      menu.setAttribute("class", "barramenu menu_active");
      document.getElementById("boton_menu").setAttribute("class", "boton_menu");
    }
  };

  return (
    <div className="navegacion">
      <div className="navTop">
        <img
          src={menu}
          alt=""
          id="boton_menu"
          className="boton_menu"
          onClick={abrirMenu}
        ></img>
        <Link to="/">
          {" "}
          <img
            src={logo}
            className="logo"
            alt=""
          ></img>
        </Link>
      </div>

      <nav className="barramenu menu_active" id="barramenu">
        <ul className="menu" id="menu">
          <li>
            <Link to="/" onClick={abrirMenu}>Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros" onClick={abrirMenu}>Nosotros</Link>
          </li>
          <li>
            <Link to="/galeria" onClick={abrirMenu}>Galeria</Link>
          </li>
          <li>
            <Link to="/dondeestamos" onClick={abrirMenu}>¿Donde estamos?</Link>
          </li>
          <li>
            <Link to="/testimonios" onClick={abrirMenu}>Testimonios</Link>
          </li>
          <li>
            <Link to="/promociones" onClick={abrirMenu}>Promociones</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
