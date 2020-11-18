import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import imageMision from '../assets/images/Inicio/group.jpeg';
import imageVision from '../assets/images/Inicio/group2.jpg';
import './Inicio.css';
class Inicio extends Component {

    
    render() {
      return (
        <React.Fragment>
            <section className="container-carousel">
              <div className="carousel-container-image">
                    <div className="carousel-container-boton"></div>
                    <div className="carousel-container-boton"></div>
                    <div className="carousel-container-boton"></div>
              </div>
            </section>  
            <section className="container-mision">
              <h2 className="titulo">
                Misión 
              </h2>
              <p className="texto_descripcion">
                Generar la investigación y participación de proyectos en alumnos de la universidad y trabajo en conjunto con la universidad.
              </p>
              <img src={imageMision} className="imagen_container"></img>
            </section>
            <section className="container-vision">
              <h2 className="titulo">
                Visión 
              </h2>
              <p className="texto_descripcion">
                Ser la mejor opción dentro de la PUCP 
                para adquirir y/o perfeccionar habilidades técnicas mediante 
                la participación en proyectos de robótica y difusión de conocimiento
              </p>
              <img src={imageVision} className="imagen_container"></img>
            </section>
            <h2 className="titulo">
              Compromisos 
            </h2>
            <section className="container-compromisos container">
              <ul>
                <li>Hacer proyectos que hagan cambios en la sociedad.</li>
                <li>Ganar concursos dentro y fuera de la universidad</li>
                <li>Apoyar desde la experiencia a alumnos de ciclos menores.</li>
                <li>Incentivar el aprendizaje autónomo.</li>
                <li>Escapar de latinoamerica</li>
              </ul>
              <Link className="boton-interesado" to="/postular">¿Interesado?</Link>
            </section>
        </React.Fragment>
      );
    }
}
  
export default Inicio;