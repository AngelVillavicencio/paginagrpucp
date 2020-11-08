import React,{Component} from 'react';
import logo from '../assets/images/logoNavbar.png';
import './Navbar.css';
class Navbar extends Component {
    render() {
      return (
        <React.Fragment>
          <nav className="navbar navbar-expand-lg background-Navbar">
            <a className="navbar-brand text-white text-font-title ml-md-5 ml-sm-3 ml-lg-5 mr-sm-0" href="#">
              <img className="logo" src={logo}></img>
              Grupo de Robótica PUCP
            </a>
            <button className="navbar-toggler navbar-dark " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto  mr-5 ">
                <a className="nav-link text-white active text-font-list" href="#">PROYECTOS<span className="sr-only">(current)</span></a>
                <a className="nav-link text-white text-font-list" href="#">ACTIVIDADES</a>
                <a className="nav-link text-white text-font-list" href="#">MIEMBROS</a>
                <a className="nav-link text-white text-font-list" href="#" aria-disabled="true">CONTACTO</a>
                <a className="nav-link text-white text-font-list disabled" href="#" aria-disabled="true">POSTULAR</a>
              </div>
            </div>


          </nav>
        </React.Fragment>
      );
    }
}
  
export default Navbar;