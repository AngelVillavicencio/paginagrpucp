import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoNavbar.png';
import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg background-Navbar">
          <Link
            className="navbar-brand text-white text-font-title ml-md-5 ml-sm-3 ml-lg-5 mr-sm-0"
            to="/"
          >
            <img className="logo" src={logo}></img>
            Grupo de Robótica PUCP
          </Link>
          <button
            className="navbar-toggler navbar-dark "
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto  mr-5 ">
              <Link
                className="nav-link text-white active text-font-list"
                to="/proyectos"
              >
                PROYECTOS
              </Link>
              <Link
                className="nav-link text-white text-font-list"
                to="/actividades"
              >
                ACTIVIDADES
              </Link>
              <Link
                className="nav-link text-white text-font-list"
                to="/miembros"
              >
                MIEMBROS
              </Link>
              <Link
                className="nav-link text-white text-font-list"
                to="/contacto"
              >
                CONTACTO
              </Link>
              <Link
                className="nav-link text-white text-font-list"
                to="/postular"
              >
                POSTULAR
              </Link>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
