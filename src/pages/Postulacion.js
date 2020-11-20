import React,{Component} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import './Postulacion.css';
class Postulacion extends Component {
    render() {
      return (
        <div>
            <div className="container-postulacion">
                <div>
                    <h2 className="titulo">
                        Postulación 
                    </h2>
                </div>
                <div className="postulacion-descripcion container-sm">
                    <p>
                    El Grupo de Robótica PUCP está comprometido con los estudiantes de la universidad desde primeros a últimos ciclos en brindar un espacio donde puedan compartir sus mismos intereses en torno a la robótica. La principal característica -del grupo- es el compromiso de todos los miembros para brindar una visión tecnológica aplicada en proyectos e investigación, tomando de base las asignaturas de las diversas carreras que cursan los integrantes. Asimismo, es de vital importancia el trabajo multidiciplinario ya que permite complementar la formación académica de cada persona.
                    </p>
                    <p>
                    Frecuentemente, se dictarán asesorías y talleres por parte de los miembros más experimentados; sin embargo, se espera que los postulantes estén dispuestos a aprender de forma autodidacta. Además, los integrantes tienen la responsabilidad de apoyar en las reuniones del grupo y participar activamente en las labores que ayuden a que este crezca. De esta manera, se considera que los integrantes sean capaces de aprender lo que desconocen y aplicar lo que saben.
                    </p>
                    <p>
                    Se busca llegar a ser la mejor agrupación de la universidad para involucrarse en proyectos multidiciplinarios enfocados a la robótica. Por ello, se entiende que el postulante estará comprometido para colaborar en dicha meta.
                    </p>
                </div>
                <Link className="boton-iniciarPostulacion" to="/inscripcion">Iniciar Postulación</Link>
            </div>
        </div>
      );
    }
}
  
export default Postulacion;