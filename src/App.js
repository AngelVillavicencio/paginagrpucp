import React from 'react';
import Inicio from "./pages/Inicio.js";
import './App.css'
import Actividades from "./pages/Actividades.js";
import Miembros from "./pages/Miembros.js";
import Actividad_taller  from "./pages/Actividad_taller.js";
const App = () => {
  return(
  <React.Fragment>
    <Actividad_taller></Actividad_taller>    
  </React.Fragment>
  );
};

export default App;
