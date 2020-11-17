import React from 'react';
import Inicio from './pages/Inicio.js';
import './App.css';
import Actividades from './pages/Actividades.js';
import Miembros from './pages/Miembros.js';
import Proyectos from './pages/Proyectos.js';
import Contacto from './pages/Contacto.js';
import Postulacion from './pages/Postulacion.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/proyectos" component={Proyectos} />
        <Route path="/actividades" component={Actividades} />
        <Route path="/miembros" component={Miembros} />
        <Route path="/postulacion" component={Postulacion} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
