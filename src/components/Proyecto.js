import React from 'react';
import { Container, Grid } from '@material-ui/core';
const Proyecto = (props) => {
  return (
    <Grid
      container
      className="card"
      direction={props.invertido ? 'row-reverse' : 'row'}
    >
      <Grid
        container
        item
        xs={4}
        alignItems="center"
        className="imagen-background"
      >
        <img className="imagen" src={props.imagen} alt="imagen" />
      </Grid>
      <Grid item xs={8}>
        <Container className="contenido">
          <p className="titulo-proyecto">{props.titulo}</p>
          <p className="descripcion-proyecto">{props.descripcion}</p>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Proyecto;
