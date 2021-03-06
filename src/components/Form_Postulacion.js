import React, { Component } from 'react';
import './Form_Postulacion.css';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

class Form_Postulacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: {
        step: 1,
        enviado: false,
      },
      formulario: {
        nombres: '',
        apellidos: '',
        correoPucp: '',
        numCelular: '',
        carrera: '',
        facultad: '',
        cicloEstudio: '',
        porquePertenecer: '',
        experiencia: '',
        queSeccionQuiere: '',
        expectativas: '',
        urlVideo: '',
      },
      correoInfo: {
        email: 'villavicenciomunoz@gmail.com',
        asunto: 'Nueva postulacion',
        message: '',
      },
    };
  }

  secciones = [
    'Robótica Competitiva',
    'Proyectos',
    'Academico',
    'AudioVisuales',
  ];
  /*nextStep=()=>{
      this.setState((prevState)=>{
        
        if(prevState.estado.step<3){
          return{
            step:prevState.estado.step+1
          }
        }
      })   
    this.setState((prevState)=>{
        if(prevState.estado.step>0){
          return{
            step:prevState.estado.step-1
          }  
        }
            
      }) 
    }*/

  nextStep = () => {
    if (this.state.estado.step < 3) {
      this.setState({
        estado: {
          step: this.state.estado.step + 1,
        },
      });
    }
  };

  backStep = () => {
    if (this.state.estado.step > 0) {
      this.setState({
        estado: {
          step: this.state.estado.step - 1,
        },
      });
    }
  };

  enviarPostulacion = () => {
    let templateParams = {
      nombres: this.state.formulario.nombres,
      apellidos: this.state.formulario.apellidos,
      correoPucp: this.state.formulario.correoPucp,
      numCelular: this.state.formulario.numCelular,
      carrera: this.state.formulario.carrera,
      facultad: this.state.formulario.facultad,
      cicloEstudio: this.state.formulario.cicloEstudio,
      porquePertenecer: this.state.formulario.porquePertenecer,
      experiencia: this.state.formulario.experiencia,
      expectativas: this.state.formulario.expectativas,
      urlVideo: this.state.formulario.urlVideo,
    };
    emailjs
      .send(
        'service_5ztn4o6',
        'template_hdh7ets',
        templateParams,
        'user_iX59JDWxA7jgq20zwykfV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    //enviar los datos al correo
    this.setState({
      estado: {
        enviado: true,
      },
    });
  };

  handleChange = (e) => {
    console.log(e.target.name + ':' + e.target.value);
    this.setState({
      formulario: {
        ...this.state.formulario,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-postulacion">
          <div className="form-postulacion-card">
            {this.state.estado.enviado === true ? (
              <div className="postulacion-finalizada">
                <h2>POSTULACIÓN ENVIADA</h2>
                <h3>¡Muchas gracias por postular al Grupo de Robótica PUCP!</h3>
                <h5>Nos estaremos comunicando con usted en la brevedad</h5>
                <Link className="boton-return" to="/">
                  Regresar al inicio
                </Link>
              </div>
            ) : (
              <React.Fragment>
                <div className="form-postulacion-card-index">
                  <p>Datos personales:</p>
                  <p>Paso {this.state.estado.step} de 3</p>
                </div>

                <form
                  className="form-postulacion-card-questions"
                  onSubmit={this.enviarPostulacion}
                >
                  <div className="questions">
                    {this.state.estado.step === 1 && (
                      <React.Fragment>
                        <p>
                          <label className="label-card">Nombres:</label>
                          <br></br>
                          <input
                            required
                            className="card-inputs"
                            placeholder="Ingrese sus nombres"
                            type="text"
                            name="nombres"
                            value={this.state.formulario.nombres}
                            onChange={this.handleChange}
                          ></input>
                        </p>
                        <p>
                          <label className="label-card">Apellidos:</label>
                          <br></br>
                          <input
                            required
                            placeholder="Ingrese sus apellidos"
                            className="card-inputs"
                            type="text"
                            name="apellidos"
                            value={this.state.formulario.apellidos}
                            onChange={this.handleChange}
                          ></input>
                        </p>
                        <p>
                          <label className="label-card">
                            Correo electrónico PUCP:
                          </label>
                          <br></br>
                          <input
                            className="card-inputs"
                            type="email"
                            name="correoPucp"
                            placeholder="Ingrese su correo electrónico PUCP"
                            required
                            value={this.state.formulario.correoPucp}
                            onChange={this.handleChange}
                          ></input>
                        </p>
                        <p>
                          <label className="label-card">
                            Número de celular:
                          </label>
                          <br></br>
                          <input
                            required
                            className="card-inputs"
                            type="tel"
                            name="numCelular"
                            placeholder="Ingrese su número de celular"
                            value={this.state.formulario.numCelular}
                            onChange={this.handleChange}
                          ></input>
                        </p>
                        {/*<p>
                                <label>
                                  <input type="checkbox" value="terms"></input>
                                  Estoy de acuerdo con los <a href="/terms">terminos y condiciones</a>
                                </label>
                              </p>*/}
                      </React.Fragment>
                    )}

                    {this.state.estado.step === 2 && (
                      <React.Fragment>
                        <p>
                          <label className="label-card">
                            Carrera/Especialidad:
                          </label>
                          <br></br>
                          <select
                            className="form-control form-control-sm"
                            name="carrera"
                            value={this.state.formulario.carrera}
                            onChange={this.handleChange}
                          >
                            <option>Elige una carrera</option>
                            <option>Ingeniería Electrónica</option>
                            <option>Ingeniería Industrial</option>
                            <option>Ingeniería Mecatrónica</option>
                            <option>Ingeniería Informática</option>
                            <option>Ingeniería de las Telecomunicaciones</option>
                            <option>Ingeniería Civil</option>
                            <option>Otros</option>
                          </select>
                        </p>
                        <p>
                          <label className="label-card">Facultad:</label>
                          <br></br>
                          <select
                            className="form-control form-control-sm"
                            name="facultad"
                            value={this.state.formulario.facultad}
                            onChange={this.handleChange}
                          >
                            <option>Elige una Facultad</option>
                            <option>Facultad de Ciencia e Ingeniería</option>
                            <option>
                              Facultad de Ciencias de las Comunicaciones
                            </option>
                            <option>Facultad de Letras</option>
                          </select>
                        </p>
                        <p>
                          <label className="label-card">
                            Ciclos de estudios:
                          </label>
                          <br></br>
                          <select
                            className="form-control form-control-sm"
                            name="cicloEstudio"
                            value={this.state.formulario.cicloEstudio}
                            onChange={this.handleChange}
                          >
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
                    {this.state.estado.step === 3 && (
                      <React.Fragment>
                        <p>
                          <label className="label-card">
                            ¿Por qué deseas pertenecer al GRPUCP?
                          </label>
                          <br></br>
                          <input
                            required
                            className="card-inputs"
                            type="text"
                            name="porquePertenecer"
                            placeholder="Cuéntanos brevemente"
                            value={this.state.formulario.porquePertenecer}
                            onChange={this.handleChange}
                          ></input>
                        </p>
                        <p>
                          <label className="label-card">
                            ¿Tienes alguna experencia relacionada con la
                            robótica?
                          </label>
                          <br></br>
                          <input
                            required
                            className="card-inputs"
                            type="text"
                            name="experiencia"
                            placeholder="Cuéntanos brevemente"
                            value={this.state.formulario.experiencia}
                            onChange={this.handleChange}
                          ></input>
                        </p>
                        {/*<p>
                                <label className="label-card">¿A qué sección quisieras pertenecer?</label><br></br>
                                {
                                  this.secciones.map((seccion)=>{
                                    return(
                                    <label>{seccion}<input type="checkbox" id={seccion} name={this.state.formulario.queSeccionQuiere} value={seccion} onClick={this.handleChange} ></input></label>
                                    );
                                  })
                                }
                              </p>*/}
                        <p>
                          <label className="label-card">
                            ¿Cuales son tus expectativas en el grupo?
                          </label>
                          <br></br>
                          <input
                            required
                            className="card-inputs"
                            type="text"
                            name="expectativas"
                            placeholder="Cuéntanos brevemente"
                            value={this.state.formulario.expectativas}
                            onChange={this.handleChange}
                          ></input>
                        </p>
                        <p>
                          <label className="label-card">
                            Grábate un video y coloca la URL
                          </label>
                          <br></br>
                          <input
                            required
                            className="card-inputs"
                            type="text"
                            name="urlVideo"
                            placeholder="Enlace de tu video"
                            value={this.state.formulario.urlVideo}
                            onChange={this.handleChange}
                          ></input>
                        </p>
                      </React.Fragment>
                    )}
                  </div>
                  <div className="form-botones">
                    {(this.state.estado.step === 2 ||
                      this.state.estado.step === 3) && (
                      <button
                        type="button"
                        className="boton-back"
                        onClick={this.backStep}
                      >
                        Regresar
                      </button>
                    )}

                    {this.state.estado.step === 3 ? (
                      <input
                        className="boton-next"
                        type="submit"
                        value="Enviar Postulación"
                      ></input>
                    ) : (
                      <button
                        type="button"
                        className="boton-next"
                        onClick={this.nextStep}
                      >
                        Siguiente
                      </button>
                    )}
                  </div>
                </form>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form_Postulacion;
