import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
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
              <img src="img-vision.jpeg" id="img-vision"></img>
            


            </section>
            <section className="container-vision">

        


            </section>
            <section className="container-compromisos">

        


            </section>
            <Footer></Footer>
        </div>
      );
    }
}
  
export default Inicio;