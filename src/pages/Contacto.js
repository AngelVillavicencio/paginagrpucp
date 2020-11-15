import React,{Component} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Contacto.css';
class Contacto extends Component {
    render() {
      return (
        <div>
            <Navbar></Navbar>
            {/* Recuadro */}
            <div className="container-fluid contacto">
              {/* título */}
              <div className="row">
                <div className="col titlecont">
                  <h1>Contacto</h1>
                  <div className="linea"></div>
                </div>
              </div>

              <div className="todo row no-gutters d-flex flex-wrap">
                <div className="col">
                  {/* Formulario */}
                  <div className="formulario">
                    <h2>Envíanos un mensaje</h2>
                    <form>
                    <div className="row arriba">
                      <div className="form-nombre col">
                        <label for="nombre">Nombre</label><br></br>
                        <input className="textinput" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"></input>
                      </div>
                      <div className="form-correo col">
                        <label for="correo">Correo</label><br></br>
                        <input className="textinput"  type="text" name="correo" id="correo" placeholder="Ingrese su correo"></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-mensaje col">
                        <label for="mensaje">Mensaje</label><br></br>
                        <div className="textmensaje">
                          <textarea name="mensaje" placeholder="Escriba un mensaje." autoComplete="off"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row buttone">
                      <div className="col form"></div>
                      <div className="col form">
                        <div className="soyunboton">
                          <input className="botondeform" type="submit" value="Enviar mensaje"></input>
                        </div>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
                <div className="col colinfo">
                  {/* Información */}
                  <div className="info">
                    <h2>Información de contacto</h2>
                    <div className="div-info">
                      <h3>Dirección</h3>
                      <p>Dirección fake</p>
                    </div>
                    <div className="div-info">
                      <h3>Teléfono</h3>
                      <p>9549234449 - 934123424</p>
                    </div>
                    <div className="div-info">
                      <h3>Correo</h3>
                      <p>MiPresidenteEsFelix,NoMerino@abajoelcongreso.edu.pe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
        </div>
      );
    }
}
  
export default Contacto;