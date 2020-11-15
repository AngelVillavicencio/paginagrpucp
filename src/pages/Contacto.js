import React,{Component} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Contacto.css';
class Contacto extends Component {
    render() {
      return (
        <div>
            <Navbar></Navbar>
            {/* título */}
            <div>
              <h1>Contacto</h1>
              <div></div>
            </div>
            {/* Recuadro */}
            <div className="contenido">
              {/* Form */}
              <div className="formulario">
                <h2>Envíanos un mensaje</h2>
                <form>
                <div>
                  <label for="nombre">Nombre</label>
                  <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"></input>
                </div>
                <div>
                  <label for="correo">Correo</label>
                  <input type="text" name="correo" id="correo" placeholder="Ingrese su correo"></input>
                </div>
                <div>
                  <label for="mensaje">Mensaje</label>
                  <textarea name="mensje" placeholder="Escriba su texto."></textarea>
                </div>
                <input type="submit" value="Enviar mensaje"></input>
                </form>
              </div>
              {/* Información */}
              <div className="info">
                <h2>Información de contacto</h2>
                <div>
                  <h3>Dirección</h3>
                  <p>Dirección fake</p>
                </div>
                <div>
                  <h3>Teléfono</h3>
                  <p>9549234449 - 934123424</p>
                </div>
                <div>
                  <h3>Correo</h3>
                  <p>MiPresidenteEsFelix,NoMerino@abajoelcongreso.edu.pe</p>
                </div>
              </div>
            </div>


            <Footer></Footer>
        </div>
      );
    }
}
  
export default Contacto;