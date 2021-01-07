import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Proyecto.css';

const Proyecto = (props) => {
  return (
    <Grid
      container
      className="carta"
      direction={props.invertido ? 'row-reverse' : 'row'}
    >
      <Grid
        container
        item
        xs={12}
        sm={4}
        alignItems="center"
        className="imagen-background"
      >
        <img className="imagen" src={props.imagen} alt="imagen" />
      </Grid>
      <Grid item sm={8} xs={12}>
        <Container className="contenido">
          <p className="titulo-carta">{props.titulo}</p>
          <p className="descripcion-proyecto">{props.descripcion}</p>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Proyecto;
