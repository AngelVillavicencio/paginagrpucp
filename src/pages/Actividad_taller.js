import React, { Component, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Actividad_taller.css';
import python1 from "d:/paginagrpucp/src/assets/images/python1.png";

class Actividad_taller extends Component {

  render() {
    return (
      <div >
        <div class="act-taller">
          <h2 class="title-taller">
            Taller de Python
          </h2>
          <h2 class="title-desc">
            Descripción
          </h2>
          <h3 class="desc-txt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam magni hic vitae autem, ex optio? Quas mollitia neque dolore possimus nobis! Non sed enim sapiente ad, incidunt officiis mollitia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, earum quaerat voluptatibus aperiam doloribus itaque dolore, dolorem laboriosam similique, enim officia hic velit ratione ullam eum maxime consequatur ex error.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam laborum consequatur aliquam eos vel sunt voluptatibus veritatis quis eum maxime, ipsam expedita neque, enim fuga voluptatem! Sequi, quasi veritatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti unde libero, rerum sunt enim magnam officia laudantium sint aspernatur, nemo eius expedita fuga, ipsum esse ad illo consectetur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti voluptatum? Nihil atque quaerat vel in, officia doloremque quas vero voluptatem eveniet voluptas recusandae porro deserunt necessitatibus facilis corrupti qui.
          </h3>
          <img src={python1} class="img-vision"></img>
          <h2 class="title-ses">
            Sesiones
          </h2>
          <div class="sesion1">
            <h3 class="subt">
              Sesión 1
            </h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
          </div>
          <div class="sesion2">
            <h3 class="subt">
              Sesión 2
            </h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
          </div>
          <div class="sesion3">
            <h3 class="subt">
              Sesión 3
            </h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
          </div>
          <div class="sesion4">
            <h3 class="subt">
              Sesión 4
            </h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
          </div>
          <div class="sesion5">
            <h3 class="subt">
              Sesión 5
            </h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.</li>
            </ul>
          </div>
        </div>
        <div class="mensaje">
          <h3 class="mtit">Envíanos un mensaje</h3>
          <div class="nombreinput">
            <label class="nombre">Nombres:</label>
            <input type="text" class="nombrei" placeholder="Ingresa tus nombres"></input>
          </div>
          <div class="apellidoinput">
            <label class="apellido">Apellidos:</label>
            <input type="text" class="apellidoi" placeholder="Ingresa tus apellidos"></input>
          </div>
          <div class="codigoinput">
            <label class="codigo">Codigo PUCP:</label>
            <input type="text" class="codigoi" placeholder="Ingresa tu codigo PUCP"></input>
          </div>
          <div class="correoinput">
            <label class="correo">Correo Institucional:</label>
            <input type="text" class="correoi" placeholder="Ingresa tu correo institucional"></input>
          </div>
          <div class="mensajeinput">
            <label class="txt">Cuéntanos...¿Por qué te gustaría llevar el taller? o ¿Por qué quieres llevarlo?:</label>
            <textarea type="text" class="txti" placeholder="Te leo"></textarea>
          </div>

          <p class="benviar">
            <input type="submit" class="boton" value="Suscribirme"></input>
          </p>
        </div>
      </div>
    );
  }
}

export default Actividad_taller;