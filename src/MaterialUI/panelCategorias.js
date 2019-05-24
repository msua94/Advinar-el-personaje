import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Categorias} from '../globales';
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
    var color = "white";
    store.dispatch({
      type: "cambiaCategoria",
      data: {color:color, idCategoria:idCategoria}
    });
    console.log("idCategoriaActual:",store.getState().idCategoriaActual);
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" centered>
        {Object.keys(Categorias).map(
          (categoria)=>{
            return <Tab label={Categorias[categoria].nombre} onClick = {()=>{this.cambiaCategoria(Categorias[categoria].idCategoria)}} />;
          })}         
        </Tabs>
      </Paper>
    );
  }
}

PanelCategorias.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelCategorias);