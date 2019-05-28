import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Categorias, funciones} from '../globales';
import store from '../stores/storeForMaterialUI';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class PanelCategorias extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  cambiaCategoria(idCategoria){
    
    let color = "white";    
    
    let opcionesPorMostrar= funciones.GeneraOpcionesNuevas(store.getState().personajes,idCategoria);
    
    let indicePersonajeActual= funciones.GenerarNuevoIndiceUsuario(opcionesPorMostrar);
    
    store.dispatch({
      type: "cambiaCategoria",
      data: {color:color, idCategoriaActual:idCategoria, opcionesPorMostrar: opcionesPorMostrar,indicePersonajeActual:indicePersonajeActual}
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} className={classes.root}>
        <br/>
        <Paper >
          <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" centered>
          {Object.keys(Categorias).map(
            (categoria)=>{
              return <Tab label={Categorias[categoria].nombre} onClick = {()=>{this.cambiaCategoria(Categorias[categoria].idCategoria)}} />;
            })}         
          </Tabs>
        </Paper>
        </Grid>
    );
  }
}

PanelCategorias.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelCategorias);