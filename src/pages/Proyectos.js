import Imagen from '../assets/images/proyectos/OpenGL-00.jpg';
import Robot from '../assets/images/proyectos/robot.jpg';
import Robot_soccer from '../assets/images/proyectos/robot-soccer.jpg'
import Pagina from '../assets/images/proyectos/proyecto_pagina.PNG'
import Rover from '../assets/images/proyectos/Rover.png'
import React, { Link } from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'

import './Proyectos.css';
import Proyecto from '../components/Proyecto';
const Proyectos = () => {
  const [vista, setVista] = React.useState('Desarrollo');
  const cambiarVista = (tipo) => {
    setVista(tipo);
  };


  let history = useHistory();
  let { url } = useRouteMatch();
  
  return (
    <div className="contenedor">
      <p className="titulo-proyecto" align="center">
        <span>Proyectos</span>
      </p>
      <p className="subtitulo" align="center">
        <span
          className={
            vista === 'Desarrollo' ? 'seleccionado' : 'no-seleccionado'
          }
          onClick={() => cambiarVista('Desarrollo')}
        >
          En desarrollo
        </span>
        <span> / </span>
        <span
          className={
            vista === 'Terminados' ? 'seleccionado' : 'no-seleccionado'
          }
          onClick={() => cambiarVista('Terminados')}
        >
          Terminados
        </span>
      </p>
      {vista === 'Desarrollo' ? (
        <React.Fragment>
          <a onClick={()=>history.push(`${url}/details/1`)} className="proyecto-pointer" >
            <Proyecto
              titulo="Rover"
              descripcion="El Rover es un proyecto robótico a modo de vehículo con la capacidad de desplazarse sobre superficies de cualquier tipo, usado normalmente para exploración de planetas."
              imagen={Rover}
            />
          </a>
          

          <a onClick={()=>history.push(`${url}/details/2`)} className="proyecto-pointer" >
            <Proyecto
              titulo="Juego OpenGL"
              descripcion="Los juegos en OpenGL son proyectos de recreación con gráficos avanzados basados en la especificación OpenGL."
              imagen={Imagen}
            />
          </a>
          <a onClick={()=>history.push(`${url}/details/3`)} className="proyecto-pointer">
            <Proyecto
              titulo="Robot soccer"
              descripcion="Los robot soccer son proyectos de competencia autónomos o dirigidos especializados para asemejar un partido de futbol."
              imagen={Robot_soccer}
            />
          </a>
        </React.Fragment>
      ) : (
          <React.Fragment>
          <a onClick={()=>history.push(`${url}/details/4`)} className="proyecto-pointer">
              <Proyecto
                titulo="Proyecto terminado: Robot sumo"
                descripcion="Los robot sumos (o sumobots) son proyectos de competencia autónomos con la finalidad de empujar a un contrincante y sacarlo de un espacio delimitado llamado dohyo."
                invertido
                imagen={Robot}
              />
          </a>
            
          <a onClick={()=>history.push(`${url}/details/5`)} className="proyecto-pointer">
            <Proyecto
              titulo="Pagina Web del GRPUCP"
              descripcion="Este proyecto fue desarrollado por los integrantes del GRPUCP con el objetivo de mejorar nuestros conocimientos en el area de desarrollo Web."
              invertido
              imagen={Pagina}
            />
          </a>
        </React.Fragment>
      )}
    </div>
  );
};
export default Proyectos;
