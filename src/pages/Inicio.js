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
            



            </section>
            <section className="container-vision">
            <h2 id="vision">
              Visión
              </h2>
            <p id="vision-txt">
              Ser la mejor opción dentro de la PUCP para adquirir y/o perfeccionar  abilidades técnicas mediante la participación en proyectos de robótica y difusión de conocimiento
              </p>
            <img src="https://assets.crucerosfluviales.es/ui/galery/barcos_expanded/planos_slider/noimg.jpg" id="img-vision" alt="imagen de la visión"></img>


            </section>
            <section className="container-compromisos">
            
        


            </section>

        </div>
      );
    }
}
  
export default Inicio;