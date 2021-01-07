import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

function NotFound(){

    return(
        <React.Fragment>
            <div className="NotFound">
                <h1>
                    ERROR 404:NO SE ENCONTRÓ LA RUTA SOLICITADA
                </h1>
                <Link className="boton-return" to="/">
                      Regresar al inicio
                </Link>
            </div>
        </React.Fragment>
    );

}

export default NotFound;