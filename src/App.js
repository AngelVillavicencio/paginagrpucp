import React, { useState } from 'react';
import Inicio from "./pages/Inicio.js";
import './App.css'
import Actividad_taller from "./pages/Actividad_taller.js";
import ProyectoDetail from "./pages/ProyectoDetail.js";
import Actividad_evento from "./pages/Actividad_evento.js"
import Actividades from './pages/Actividades.js';
import Miembros from './pages/Miembros.js';
import Proyectos from './pages/Proyectos.js';
import Contacto from './pages/Contacto.js';
import Postulacion from './pages/Postulacion.js';
import Inscripcion from './pages/Inscripcion.js';
import NotFound from './pages/NotFound.js';
import Login from './pages/Login.js';
import Layout from './components/Layout.js';
import ScrollToTop from './components/ScrollToTop.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Layout>
          <Route exact path="/" component={Inicio} />
          <Route path="/proyectos/details/:id" component={ProyectoDetail} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route path="/actividades/taller/:id" component={Actividad_taller} />
          <Route path="/actividades/evento/:id" component={Actividad_evento} />
          <Route exact path="/actividades" component={Actividades} />
          <Route path="/miembros" component={Miembros} />
          <Route path="/postular" component={Postulacion} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/inscripcion" component={Inscripcion} />
        </Layout> 
        <Route component={NotFound}/>
      </Switch>
      
    </BrowserRouter>
  );
};

export default App;
