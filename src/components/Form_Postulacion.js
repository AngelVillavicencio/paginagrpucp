import React,{Component} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './Form_Postulacion.css';
import Postulacion from '../pages/Postulacion';
class Form_Postulacion extends Component {
    render() {
      return (
        <div>
            <div className="form-postulacion">
              <div className="form-postulacion-card">
                  <div className="form-postulacion-card-index">
                    <p>Datos personales:</p>
                    <p>Paso 1 de 3</p>
                  </div>
                  <div className="form-postulacion-card-questions"> 
                    
                    <form action="/signup" method="post">
                      <p>
                        <label className="label-card">Nombres:</label><br></br>
                        <input className="card-inputs" type="text" name="first_name" ></input>
                      </p>
                      <p>
                        <label className="label-card">Apellidos:</label><br></br>
                        <input className="card-inputs" type="text" name="last_name"></input>
                      </p>
                      <p>
                        <label className="label-card">Correo electrónico puké:</label><br></br>
                        <input className="card-inputs" type="email" name="email" required></input>
                      </p>
                      <p>
                        <label className="label-card">Número de teléfono Puké (Opcional):</label><br></br>
                        <input className="card-inputs" type="tel" name="phone"></input>
                      </p>
                      <p>
                        <label>
                          <input type="checkbox" value="terms"></input>
                          Estoy de acuerdo con los <a href="/terms">terminos y condiciones</a>
                        </label>
                      </p>
                      
                      <button className="boton-next">Siguiente</button>
                      
                    </form>

                  </div>
              </div>
            </div>
        </div>
      );
    }
}
  
export default Form_Postulacion;