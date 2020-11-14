import Imagen from '../OpenGL-00.jpg';
import Robot from '../robot.jpg';
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
      <p className="titulo" align="center">
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
            titulo="Juego OpenGL"
            descripcion="Juego muy interesante en proceso... con mucho
                  textooooooooooooooooo"
            imagen={Imagen}
          />
          <Proyecto
            titulo="Robot sumo"
            descripcion="Este robot es muy interesante"
            invertido
            imagen={Robot}
          />
          <Proyecto
            titulo="Rovert"
            descripcion="Este robot es bacan"
            imagen={Robot}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Proyecto
            titulo="Proyecto terminado: Juego OpenGL"
            descripcion="Juego muy interesante terminado... con mucho
                textooooooooooooooooo"
            imagen={Imagen}
          />
          <Proyecto
            titulo="Proyecto terminado: Robot sumo"
            descripcion="Este robot es muy interesante"
            invertido
            imagen={Robot}
          />
          <Proyecto
            titulo="Proyecto terminado: Rovert"
            descripcion="Este robot es bacan"
            imagen={Robot}
          />
        </React.Fragment>
      )}
    </div>
  );
};
export default Proyectos;
