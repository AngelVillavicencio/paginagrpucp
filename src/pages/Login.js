import React, { useState } from 'react';
import Header from '../components/AppInterna/Header'
import LoginForm from '../components/AppInterna/LoginForm'
import Profile from '../components/AppInterna/Profile'
import './Login.css'
const Login = () => {

    const [logged, setLogged] = useState(false);

    if (!logged) {
    return (
      <div className="Login">
        <Header></Header>
        <LoginForm setLogged={()=>setLogged(true)} ></LoginForm>
      </div>
      
    )
    }
    
    return (
        <div className="Login">
        <Header name="Angel" lastName="Villavicencio" id="20171781" goodBye={()=>setLogged(false)}></Header>
        <Profile
            urlImage="https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/perfil_angel.jpg?alt=media&token=35729466-7a64-47c3-a99f-af9dafa21e35"
            name="Angel Arturo Villavicencio Muñoz"
            career="Ing. Informática"
            description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas"
            
        ></Profile>
        </div>
    )


}

export default Login;