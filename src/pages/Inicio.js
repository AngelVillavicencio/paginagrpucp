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