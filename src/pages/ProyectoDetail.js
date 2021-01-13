import React from 'react'
import {Link} from 'react-router-dom';

import './ProyectoDetail.css'
import { useHistory, useRouteMatch } from 'react-router-dom'


const ProyectoDetail = (props) => {

    let history = useHistory();
    let { url } = useRouteMatch();

    console.log(url);
    console.log(history);
    const id = url[19];
    console.log(id);
    const proyectos = [
        {
            nombre: "F",
            urlVideo: "https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/proyectosdetails%2FMuscuy.mp4?alt=media&token=3493a908-285f-409e-8ebe-d6cba376cec9"

        },
        {
            nombre: "Rover",
            urlVideo: "https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/proyectosdetails%2FRover.mp4?alt=media&token=38ff7743-cebe-42c9-a348-8220444ab59e"

        },
        {
            nombre: "Muscuy",
            urlVideo: "https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/proyectosdetails%2FMuscuy.mp4?alt=media&token=3493a908-285f-409e-8ebe-d6cba376cec9"

        },
        {
            nombre: "Robot Soccer",
            urlVideo: ""

        },
        {
            nombre: "Robot sumo",
            urlVideo: ""

        },
        {
            nombre: "Pagina Web",
            urlVideo: ""

        }
    ];


    return (
        <React.Fragment>
            <div className="ProyectoDetail">
                <h1>{proyectos[id].nombre}</h1>
                <div className="container">
                    <div className="row video-container">
                        { proyectos[id].urlVideo === "" ? 
                            (
                                <React.Fragment>
                                <h2>
                                    ¡Estamos recolectando imagenes!
                                </h2>
                                <h2>
                                        Les invitamos a ver el video del Inicio de la página
                                </h2>
                                <Link className="boton-return" to="/proyectos">
                                Regresar
                                </Link>
                                </React.Fragment>
                                
                            ):
                            (
                                <React.Fragment>
                                    <video width="100%" height="500" controls>
                                        <source src={proyectos[id].urlVideo} type="video/mp4" />
                                    </video>
                                    <Link className="boton-return" to="/proyectos">
                                    Regresar
                                    </Link>
                                </React.Fragment>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default ProyectoDetail;