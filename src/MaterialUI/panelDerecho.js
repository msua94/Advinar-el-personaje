import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    panel: {
        height: "400px"
    },
    paper: {
        height: "400px",
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
        float: "right",
        marginRight: "5em",
        marginTop: "5em"
    }
});

function PanelDerecho(props) {
    
    const { classes } = props;
    return (
        <Grid item xs={12} sm={8} className={classes.panel}>
            <Paper className={classes.paper} style={{ background: props.propiedades.color}}>
                <List component="nav">
                    {props.propiedades.opcionesPorMostrar.map(
                        (opcion) => {
                            return <ListItem button key={opcion.idPersonaje}
                                             onClick={() => { props.validarPersonaje(opcion) }}>
                                        <ListItemText primary={opcion.nombre} />
                                   </ListItem>;
                        })
                    }
                </List>
                <Button variant="contained" color="primary" className={classes.button} disabled ={props.propiedades.estado} onClick={() => { props.avanzarOpcion()}}>
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