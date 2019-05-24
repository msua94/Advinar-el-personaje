import React from 'react';
import {Header} from './Header';
import { CajaImagen } from './CajaImagen';
import { SeccionOpciones } from './SeccionOpciones';
import { jugadores } from '../globales';
import store from '../stores/configureStore'

class VistaPrincipal extends React.Component {

    componentDidMount(){
        store.subscribe(() => {
          this.setState({});
        })  
      }

    constructor(props) {
        super(props);
    }         

    render(){
        return (
            <div>
                <Header></Header>
                <CajaImagen jugador={jugadores[store.getState().indicePreguntaActual]}></CajaImagen>
                <SeccionOpciones colorFondo = {store.getState().color}
                                  jugador = {jugadores[store.getState().indicePreguntaActual]}>
                </SeccionOpciones>
            </div>
        );
    }

}

export default VistaPrincipal;
