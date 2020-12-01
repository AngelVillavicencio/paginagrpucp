import React, { Component, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Actividad_evento.css';
import python1 from "../assets/images/python1.png";

class Actividad_evento extends Component {

    render() {
        return (
            <div>
                <div className="act-evento">
                    <h2 className="title-evento">
                        Evento de bienvenida
                    </h2>
                    <h2 className="title-desc">
                        Descripción
                     </h2>
                    <h3 className="desc-txt">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam magni hic vitae autem, ex optio? Quas mollitia neque dolore possimus nobis! Non sed enim sapiente ad, incidunt officiis mollitia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, earum quaerat voluptatibus aperiam doloribus itaque dolore, dolorem laboriosam similique, enim officia hic velit ratione ullam eum maxime consequatur ex error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam laborum consequatur aliquam eos vel sunt voluptatibus veritatis quis eum maxime, ipsam expedita neque, enim fuga voluptatem! Sequi, quasi veritatis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti unde libero, rerum sunt enim magnam officia laudantium sint aspernatur, nemo eius expedita fuga, ipsum esse ad illo consectetur perspiciatis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti voluptatum? Nihil atque quaerat vel in, officia doloremque quas vero voluptatem eveniet voluptas recusandae porro deserunt necessitatibus facilis corrupti qui.
                    </h3>
                    <img src={python1} className="img-vision"></img>
                    <h2 className="title-ponentes">
                        Ponentes
                    </h2>
                </div>
                <div className="ponentes">
                    <h2 className="ponente1">
                        -Angel Villavicencio Muñoz
                    </h2>
                    <h2 className="ponente2">
                        -Angel Villavicencio Muñoz
                    </h2>
                    <h2 className="ponente3">
                        -Angel Villavicencio Muñoz
                    </h2>
                </div>
                <div className="mensaje">
                    <h3 className="mtit">Envíanos un mensaje</h3>
                    <div className="nombreinput">
                        <label className="nombre">Nombres:</label>
                        <input type="text" className="nombrei" placeholder="Ingresa tus nombres"></input>
                    </div>
                    <div className="apellidoinput">
                        <label className="apellido">Apellidos:</label>
                        <input type="text" className="apellidoi" placeholder="Ingresa tus apellidos"></input>
                    </div>
                    <div className="codigoinput">
                        <label className="codigo">Codigo PUCP:</label>
                        <input type="text" className="codigoi" placeholder="Ingresa tu codigo PUCP"></input>
                    </div>
                    <div className="correoinput">
                        <label className="correo">Correo Institucional:</label>
                        <input type="text" className="correoi" placeholder="Ingresa tu correo institucional"></input>
                    </div>
                    <div className="mensajeinput">
                        <label className="txt">Cuéntanos...¿Por qué te gustaría llevar el taller? o ¿Por qué quieres llevarlo?:</label>
                        <textarea type="text" className="txti" placeholder="Te leo"></textarea>
                    </div>

                    <p className="benviar">
                        <input type="submit" className="boton" value="Suscribirme"></input>
                    </p>
                </div>
            </div>
        );
    }
}

export default Actividad_evento;