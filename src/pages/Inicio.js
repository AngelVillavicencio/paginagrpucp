import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import imageMision from '../assets/images/Inicio/group.jpeg';
import imageVision from '../assets/images/Inicio/group2.jpg';
import './Inicio.css';
class Inicio extends Component {
    render() {
      return (
        <div>
            <Navbar></Navbar>
            <section className="container-carousel">

            


            </section>  


            <section className="container-mision">
              <h2 id="mision">
                Misión 
              </h2>
              <p id="mision-txt">
                Generar la investigación y participación de proyectos en alumnos de la universidad y trabajo en conjunto con la universidad.
              </p>
              <img src={imageMision} id="img-vision"></img>
            </section>
            <section className="container-vision">
              <h2 id="mision">
                Visión 
              </h2>
              <p id="mision-txt">
                Ser la mejor opción dentro de la PUCP 
                para adquirir y/o perfeccionar habilidades técnicas mediante 
                la participación en proyectos de robótica y difusión de conocimiento
              </p>
              <img src={imageVision} id="img-vision"></img>
            </section>
            <section className="container-compromisos">
            
        


            </section>
            <Footer></Footer>
        </div>
      );
    }
}
  
export default Inicio;