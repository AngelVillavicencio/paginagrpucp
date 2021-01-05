import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Contacto.css';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5ztn4o6',
        'template_ixn5tzn',
        e.target,
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
  };
  return (
    <React.Fragment>
      <div className="col titlecont">
        <h1>Contacto</h1>
        <div className="linea"></div>
      </div>
      {/* Recuadro */}
      <div className="container-fluid contacto">
        {/* título */}
        <div className="todo row no-gutters d-flex flex-wrap">
          <div className="col formulario">
            {/* Formulario */}
            <h2>Envíanos un mensaje</h2>
            <form onSubmit={enviarCorreo}>
              <div className="row arriba">
                <div className="form-nombre col">
                  <label for="nombre">Nombre</label>
                  <br></br>
                  <input
                    required
                    className="textinput"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                  ></input>
                </div>
                <div className="form-correo col">
                  <label for="correo">Correo</label>
                  <br></br>
                  <input
                    className="textinput"
                    type="email"
                    required
                    name="correo"
                    id="correo"
                    placeholder="Ingrese su correo"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="form-mensaje col">
                  <label for="mensaje">Mensaje</label>
                  <br></br>
                  <div className="textmensaje">
                    <textarea
                      required
                      name="mensaje"
                      placeholder="Escriba un mensaje."
                      autoComplete="off"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row buttone">
                <div className="col form"></div>
                <div className="col form">
                  <div className="soyunboton">
                    <input
                      className="botondeform"
                      type="submit"
                      value="Enviar mensaje"
                    ></input>
                  </div>
                </div>
              </div>
              </form>
          </div>
            <div className="col colinfo">
              {/* Información */}
              <div className="info">
                <h2>Información de contacto</h2>
                <div className="div-info">
                  <h3>Dirección</h3>
                  <p>Av. Universitaria 1801, San Miguel 15088</p>
                </div>
                <div className="div-info">
                  <h3>Celular</h3>
                  <p>+51 914 333 969</p>
                </div>
                <div className="div-info">
                  <h3>Correo</h3>
                  <p>nodisponible@pucp.edu.pe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Contacto;
