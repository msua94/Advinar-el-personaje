import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import store from '../stores/storeForMaterialUI';

const styles = theme => ({
  panel: {
    height: "400px"
  },
  paper:{
    height: "400px",
    color: theme.palette.text.secondary,
  },
  imagen:{
    height: "350px",
    width:"350px",
    marginTop:"25px",
    marginLeft:"25px",
    objectFit:"fill",
  }
});

function PanelIzquierdo(props) {
  const { classes } = props;
  return (   

    <Grid item xs={12} sm={4} className={classes.panel}>
        <Paper className={classes.paper} >
        <img className={classes.imagen} src={store.getState().personajeActual.imagen}></img>            
        </Paper>
    </Grid>
  );
}

PanelIzquierdo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelIzquierdo);