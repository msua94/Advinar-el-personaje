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
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
    float: "right",
    marginRight:"5em",
    marginTop:"5em"
  }
});

function validarPersonaje(personaje){
  // alert(personaje.idPersonaje);
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

function avanzarOpcion(){
  var color = "white";
  var estado ="disabled";
  store.dispatch({
    type: "avanzarOpcion",
    data: {color:color,estado:estado}
  });

}

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