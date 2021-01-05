import Imagen from '../assets/images/proyectos/OpenGL-00.jpg';
import Robot from '../assets/images/proyectos/robot.jpg';
import Robot_soccer from '../assets/images/proyectos/robot-soccer.jpg'
import React from 'react';
import './Proyectos.css';
import Proyecto from '../components/Proyecto';
const Proyectos = () => {
  const [vista, setVista] = React.useState('Desarrollo');
  const cambiarVista = (tipo) => {
    setVista(tipo);
  };
  return (
    <div className="contenedor">
      <p className="titulo-proyecto" align="center">
        <span>Proyectos </span>
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
          <Proyecto
            titulo="Rovert"
            descripcion="El Rovert -rover- es un proyecto robótico a modo de vehículo con la capacidad de desplazarse sobre superficies de cualquier tipo, usado normalmente para exploración de planetas."
            imagen={Robot}
          />
          <Proyecto
            titulo="Juego OpenGL"
            descripcion="Los juegos en OpenGL son proyectos de recreación con gráficos avanzados basados en la especificación OpenGL."
            imagen={Imagen}
          />
          <Proyecto
            titulo="Robot soccer"
            descripcion="Los robot soccer son proyectos de competencia autónomos o dirigidos especializados para asemejar un partido de futbol."
            imagen={Robot_soccer}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Proyecto
            titulo="Proyecto terminado: Robot sumo"
            descripcion="Los robot sumos (o sumobots)son proyectos de competencia autónomos con la finalidad de empujar a un contrincante y sacarlo de un espacio delimitado llamado dohyo."
            invertido
            imagen={Robot}
          />
          <Proyecto
            titulo="Pagina Web del GRPUCP"
            descripcion="Este proyecto fue desarrollado por los integrantes del GRPUCP con el objetivo de mejorar nuestros conocimientos en el area de desarrollo Web."
            invertido
            imagen={Robot}
          />
        </React.Fragment>
      )}
    </div>
  );
};
export default Proyectos;
