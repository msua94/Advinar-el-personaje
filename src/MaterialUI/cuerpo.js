import React from 'react';
import store from '../stores/storeForMaterialUI';
import Encabezado from './encabezado';
import PanelDerecho from './panelDerecho';
import PanelIzquierdo from './panelIzquierdo';
import PanelCategorias from './panelCategorias'
import Grid from '@material-ui/core/Grid';

class Cuerpo extends React.Component {

    styles ={
        root: {
          flexGrow: 1
        }
      };    

    componentDidMount(){
        store.subscribe(() => {
          this.setState({});
        }); 
      }

    constructor(props) {
        super(props);
    }         

    render(){
        return (
            <div style={this.styles.root}>
                <Grid container spacing={"8"} >
                    <Encabezado></Encabezado>
                    <PanelIzquierdo></PanelIzquierdo>
                    <PanelDerecho></PanelDerecho>
                    <PanelCategorias></PanelCategorias>
                </Grid>
            </div>
        );
    }

}

export default Cuerpo;