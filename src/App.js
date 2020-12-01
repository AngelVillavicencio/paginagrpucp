import React from 'react';
import Inicio from "./pages/Inicio.js";
import './App.css'
import Actividad_taller from "./pages/Actividad_taller.js";
import Actividad_evento from "./pages/Actividad_evento.js"
import Actividades from './pages/Actividades.js';
import Miembros from './pages/Miembros.js';
import Proyectos from './pages/Proyectos.js';
import Contacto from './pages/Contacto.js';
import Postulacion from './pages/Postulacion.js';
import Inscripcion from './pages/Inscripcion.js';
import Layout from './components/Layout.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/proyectos" component={Proyectos} />
          <Route path="/actividades/taller/:id" component={Actividad_taller} />
          <Route path="/actividades/evento/:id" component={Actividad_evento} />
          <Route path="/actividades" component={Actividades} />
          <Route path="/miembros" component={Miembros} />
          <Route path="/postular" component={Postulacion} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/inscripcion" component={Inscripcion} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
