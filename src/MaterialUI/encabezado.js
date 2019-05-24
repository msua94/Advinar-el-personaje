import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: "white",
    backgroundColor: "#3f51b5"    
  },
});

function Encabezado(props) {
  const { classes } = props;

  return (
    <Grid item xs={12}>
        <Paper className={classes.paper} square={false}>Escoje el personaje correcto Fecha: {`${new Date()}`}</Paper>
    </Grid>
  );
}

Encabezado.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Encabezado);