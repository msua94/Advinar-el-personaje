import React from 'react';
import {Header} from './Header';
import { CajaImagen } from './CajaImagen';
import { SeccionJugadores } from './SeccionJugadores';
import { jugadores } from '../globales';

class VistaPrincipal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {color:"white",indicePreguntaActual:0};
        this.validaRespuestaCorrecta = this.validaRespuestaCorrecta.bind(this);
    }

    validaRespuestaCorrecta(respuesta){
        console.log(respuesta);
        var color = this.state.color;
        var indicePreguntaActual = this.state.indicePreguntaActual;
        if (respuesta === jugadores[this.state.indicePreguntaActual].nombre){
            indicePreguntaActual = indicePreguntaActual + 1;
            color = "green";
        }
        else{
            color = "red";
        }
        this.setState({color})
    }     

    render(){
        return (
            <div>
                <Header></Header>
                <CajaImagen jugador={jugadores[this.state.indicePreguntaActual]}></CajaImagen>
                <SeccionJugadores colorFondo = {this.state.color}
                                  jugador = {jugadores[this.state.indicePreguntaActual]}
                                  validaRespuestaCorrecta = {this.validaRespuestaCorrecta}>
                </SeccionJugadores>
            </div>
        );
    }

}

export default VistaPrincipal;
