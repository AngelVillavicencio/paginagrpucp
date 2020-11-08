import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar'
import './Inicio.css';
class Inicio extends Component {
    render() {
      return (
        <div>
            
            <section className="container-carousel">

            


            </section>  


            <section className="container-mision">
            <h2 id="mision">
                  Misión 
              </h2>
              <p id="mision-txt">
                  Generar la investigación y participación de proyectos en alumnos de la universidad y trabajo en conjunto con la universidad.
              </p>
              <img src="img-vision.jpeg" id="img-vision"></img>
            


            </section>
            <section className="container-vision">

        


            </section>
            <section className="container-compromisos">

        


            </section>

        </div>
      );
    }
}
  
export default Inicio;