import React,{Component} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './Form_Postulacion.css';
import Postulacion from '../pages/Postulacion';
import { Link } from 'react-router-dom';
class Form_Postulacion extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        step: 1,
        enviado:false
      
      };

    }

    nextStep=()=>{
      this.setState((prevState)=>{
        if(prevState.step<3){
          return{
            step:prevState.step+1
          }
        }
      })   
    
    }

    backStep = ()=>{
      
      this.setState((prevState)=>{
        if(prevState.step>0){
          return{
            step:prevState.step-1
          }  
        }
            
      }) 

    }
   
    enviarPostulacion = () =>{

      //enviar los datos al correo
      this.setState(
        (prevState)=>{
          return{
            enviado:true
          }
        }
      )


    }
    

    render() {
      return (
        <div>
            <div className="form-postulacion">
              <div className="form-postulacion-card">
                  {this.state.enviado===true ? (
                    <div className="postulacion-finalizada">
                      <h2>POSTULACIÓN ENVIADA</h2>
                      <h3>¡Muchas gracias por postular al Grupo de Robótica PUCP!</h3>
                      <h5>Nos estaremos comunicando con usted en la brevedad</h5>
                      <Link className="boton-return" to="/">Regresar al inicio</Link>
                    </div>
                  ):(
                      <React.Fragment>
                    
                      <div className="form-postulacion-card-index">
                        <p>Datos personales:</p>
                        <p>Paso {this.state.step} de 3</p>
                      </div>
                   

                      <div className="form-postulacion-card-questions"> 
                        
                        <div className="questions">

                          {this.state.step === 1 && (
                            <React.Fragment>
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
                            </React.Fragment>
                            
                          )}

                          {this.state.step === 2 && (
                            <React.Fragment>
                              
                              <p>
                                <label className="label-card">Carrera/Especialidad:</label><br></br>
                                <select class="form-control form-control-sm">
                                  <option>Elige una carrera</option>
                                  <option>Ingeniería de Electrónica</option>
                                  <option>Ingeniería de Civil</option>
                                  <option>Ingeniería de Mecatrónica</option>
                                  <option>Ingeniería de Informática</option>
                                  <option>Ingeniería de Telecomunicaciones</option>
                                </select>
                              </p>
                              <p>
                                <label className="label-card">Facultad:</label><br></br>
                                <select class="form-control form-control-sm">
                                  <option>Elige una Facultad</option>
                                  <option>Facultad de Ciencia e Ingeniería</option>
                                  <option>Facultad de Ciencias de las Comunicaciones</option>
                                </select>
                              </p>
                              <p>
                                <label className="label-card">Ciclos de estudios:</label><br></br>
                                <select class="form-control form-control-sm">
                                  <option>1er ciclo</option>
                                  <option>2do ciclo</option>
                                  <option>3ero ciclo</option>
                                  <option>4to ciclo</option>
                                  <option>5to ciclo</option>
                                  <option>6to ciclo</option>
                                  <option>7mo ciclo</option>
                                  <option>8vo ciclo</option>
                                  <option>9no ciclo</option>
                                  <option>10mo ciclo</option>
                                </select>
                              </p>
                            </React.Fragment>
                            
                          )}
                          {this.state.step === 3 && (
                            <React.Fragment>
                              <p>
                                <label className="label-card">¿Por qué deseas pertenecer al GRPUCP?</label><br></br>
                                <input className="card-inputs" type="text" name="porquePertenecer" placeholder="Cuéntanos (max 1 parrafo)" ></input>
                              </p>
                              <p>
                                <label className="label-card">¿Tienes alguna experencia relacionada con la robótica?</label><br></br>
                                <input className="card-inputs" type="text" name="experiencia" placeholder="Cuéntanos"></input>
                              </p>
                              <p>
                                <label className="label-card">¿A qué sección quisieras pertenecer?</label><br></br>
                                <label>
                                  Robótica competitiva<input type="checkbox" value="seccion"></input>
                                </label>
                                <label>
                                  Proyectos<input type="checkbox" value="seccion"></input>
                                </label>
                                <label>
                                Audiovisuales<input type="checkbox" value="seccion"></input>
                                </label>
                                <label>
                                Académica<input type="checkbox" value="seccion"></input>
                                </label>
                                <label>
                                Feik<input type="checkbox" value="seccion"></input>
                                </label>
                                <label>
                                Ban felix<input type="checkbox" value="seccion"></input>
                                </label>
                              </p>
                              <p>
                                <label className="label-card">¿Cuales son tus expectativas en el grupo?</label><br></br>
                                <input className="card-inputs" type="text" name="expectativas"></input>
                              </p>
                              <p>
                                <label className="label-card">Grábate un video y coloca la URL</label><br></br>
                                <input className="card-inputs" type="text" name="videoURL"></input>
                              </p>
                              <p>
                                
                              </p>
                            </React.Fragment>
                            
                          )}
                          
                        </div>
                          <div className="form-botones">
                            {(this.state.step===2 || this.state.step===3) &&(
                            <button className="boton-back"  onClick={this.backStep} >Regresar</button>)}
                            
                            {this.state.step===3 ? (<button className="boton-next"   onClick={this.enviarPostulacion} 
                            >Enviar Postulación</button>) : (<button className="boton-next"   onClick={this.nextStep} 
                            >Siguiente</button>)
                            }      
                          </div>

                        
                      
                        

                      </div>


                    </React.Fragment>
                  )}

              </div>
            </div>
        </div>
      );
    }
}
  
export default Form_Postulacion;