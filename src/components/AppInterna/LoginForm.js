import React from 'react';

import './LoginForm.css'

const LoginForm = (props)=>{

    return (
        <div className="Login">
            <div className="Login-form">
                <p>Correo:</p>
                <input autocomplete="off" required type="text" name="correo" />
                <p>Password:</p>
                <input  required type="password" name="password" />
                <button type="button" onClick={props.setLogged}>Ingresar</button>
                <div className="container-button-google">
                    <p>O</p>
                    <button  type="button" onClick={() => console.log("Click en ingresar")}>Ingresar with Google</button>
                </div>
            </div>
        </div>
    )   
}

export default LoginForm;