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
        color: "grey",
        backgroundColor: "white"
    },
});

function Cargando(props) {
    const { classes } = props;

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper} square={false}>Cargando...</Paper>
        </Grid>
    );
}

Cargando.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cargando);