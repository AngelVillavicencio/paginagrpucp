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
            urlVideo: <iframe width="80%" height="90%" src="https://www.youtube.com/embed/9xMnJMPlYjs?start=3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            nombre: "Muscuy",
            urlVideo: <iframe width="80%" height="90%" src="https://www.youtube.com/embed/D8Jmh3BQ2fI?start=5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
                    <div className="video-container">
                        


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
                                    

                                    {proyectos[id].urlVideo}
                                    
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

/*<video width="100%" height="500" controls>
                                        <source src={proyectos[id].urlVideo} type="video/mp4" />
                                    </video>*/