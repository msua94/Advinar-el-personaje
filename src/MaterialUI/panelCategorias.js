import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Categorias} from '../globales';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class PanelCategorias extends React.Component {

    constructor(props) {
        super(props);
    }

state = {
    value: 0,
  };

  handleChange = (event, value) => {
      this.setState({ value});
  };  

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} className={classes.root}>
        <br/>
        <Paper >
                <Tabs value={this.props.idCategoriaActual} onChange={this.handleChange} indicatorColor="primary" textColor="primary" centered initialSelectedIndex={this.props.idCategoriaActual}>
          {Object.keys(Categorias).map(
            (categoria)=>{
                return <Tab key={Categorias[categoria].idCategoria} Value={Categorias[categoria].idCategoria}
                            label={Categorias[categoria].nombre}
                            onClick={() => { this.props.cambiaCategoria(Categorias[categoria].idCategoria) }} />;
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