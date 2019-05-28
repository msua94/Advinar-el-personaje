import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import store from '../stores/storeForMaterialUI';

const styles = theme => ({
  panel: {
    height: "400px"
  },
  paper:{
    height: "400px",    
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
    float: "right",
    marginRight:"5em",
    marginTop:"5em"
  }
});

function ConsultarPersonajes() {    
  const serviceUrl = 'http://localhost:38639/API/Personajes';  
  fetch(serviceUrl)
    .then(res => {
      return res.json();
    })
    .then((personajes) => {
      let opcionesPorMostrar =  GeneraOpcionesNuevas(personajes);
      let indicePersonajeActual = GenerarNuevoIndiceUsuario(opcionesPorMostrar);
      store.dispatch({
      type: "CargarPersonajes",
      data: {personajes:personajes,opcionesPorMostrar:opcionesPorMostrar,indicePersonajeActual:indicePersonajeActual}
  });    
      
    }).catch(error => console.log(error));
}

function validarPersonaje(personaje){

  var color = "red";
  var estado ="disabled";
  if(personaje.idPersonaje === store.getState().opcionesPorMostrar[store.getState().indicePersonajeActual].idPersonaje){
    color = "green";
    estado ="";
  }
  store.dispatch({
    type: "validarPersonaje",
    data: {color:color,estado:estado}
  });
}

function FiltraPersonajesPorCategoria(personajes){
  var personajesFiltrados = [];
  if (store.getState().idCategoriaActual === 0){
    return personajes;
  }
  else{
    personajes.forEach(function(personaje){
      if (personaje.idCategoria === store.getState().idCategoriaActual){
        personajesFiltrados.push(personaje);
      }
    });
  }
  return personajesFiltrados;
}

function GeneraOpcionesNuevas(personajes){
  var personajesFiltrados = FiltraPersonajesPorCategoria(personajes);
  let opcionesPorMostrar = [];
  if(personajesFiltrados.length === 0){
    return personajesFiltrados;
  }
  var indiceNuevo = 0;
  var indices = [];
  while(indices.length < 4){
    var indiceNuevo = Math.floor((Math.random() * personajesFiltrados.length));
    if((indices.indexOf(indiceNuevo)===-1) && (indiceNuevo != store.getState().indicePersonajeActual)){
      indices.push(indiceNuevo)
    }
  }
  indices.forEach(function(indice){
    opcionesPorMostrar.push(personajesFiltrados[indice]);
  });
  return opcionesPorMostrar;
}

function GenerarNuevoIndiceUsuario(opcionesPorMostrar){
  let indicePersonajeActual = Math.floor((Math.random() * opcionesPorMostrar.length));
  return indicePersonajeActual;
}

function avanzarOpcion(){
  let color = "white";
  let estado ="disabled";
  let opcionesPorMostrar= GeneraOpcionesNuevas(store.getState().personajes);
  let indicePersonajeActual= GenerarNuevoIndiceUsuario(store.getState().opcionesPorMostrar);
  store.dispatch({
    type: "avanzarOpcion",
    data: {color:color,estado:estado, opcionesPorMostrar:opcionesPorMostrar,indicePersonajeActual:indicePersonajeActual}
  });
}

ConsultarPersonajes();

function PanelDerecho(props) {
  const { classes } = props;  
  return (
    <Grid  item xs={12} sm={8} className={classes.panel}>
        <Paper className={classes.paper} style={{background:store.getState().color}}>
          <List component="nav">
              
              {store.getState().opcionesPorMostrar.map(
                (opcion)=>{
                  return <ListItem button onClick={()=>{validarPersonaje(opcion)}}>
                            <ListItemText primary={opcion.nombre} />
                        </ListItem>;
                })
              }
          </List>
          <Button variant="contained" color="primary" className={classes.button} disabled = {store.getState().estado} onClick = {()=>{avanzarOpcion()}}>
            Siguiente
          </Button>
        </Paper>
        
    </Grid>
  );
}

PanelDerecho.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelDerecho);