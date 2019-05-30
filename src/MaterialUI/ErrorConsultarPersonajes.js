import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CloudOff from '@material-ui/icons/CloudOff';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: "grey",
        backgroundColor: "white"
    },
    icon: {
        fontSize: 80,
    },
});

function ErrorConsultarPersonajes(props) {
    const { classes } = props;

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper} square={false}>
                <CloudOff className={classes.icon}></CloudOff>
                <h3>{"El servicio para consultar los datos no está disponible"}</h3>
            </Paper>
        </Grid>
    );
}

ErrorConsultarPersonajes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorConsultarPersonajes);