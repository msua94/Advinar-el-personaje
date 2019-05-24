import React from 'react';
import store from '../stores/configureStore';
import { jugadores } from '../globales';
class Libro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sizeOpcion:"15px"}
        this.validaRespuestaCorrecta = this.validaRespuestaCorrecta.bind(this);
        this.aumentaSizeDeOpcion = this.aumentaSizeDeOpcion.bind(this);
        this.bajaSizeDeOpcion = this.bajaSizeDeOpcion.bind(this);
    }

    validaRespuestaCorrecta(respuesta){
      
        var color = store.getState().color;
        var colorBotonSiguiente = "gray";
        var estado = "";
        if (respuesta === jugadores[store.getState().indicePreguntaActual].nombre){            
            color = "green";
            estado = "";
            colorBotonSiguiente = "#3169c4"
        }
        else{
            color = "red";
            estado = "disabled";
        }
        store.dispatch({
            type: "cambiarColor",
            data: {color:color,respuesta:respuesta,estado:estado,colorBotonSiguiente:colorBotonSiguiente}
        });
    }

    aumentaSizeDeOpcion(){
        var sizeOpcion = this.state.sizeOpcion;
        sizeOpcion = "20px";
        this.setState({sizeOpcion})
    }

    bajaSizeDeOpcion(){
        var sizeOpcion = this.state.sizeOpcion;
        sizeOpcion = "15px";
        this.setState({sizeOpcion})
    }

    render(){
        return (
            <div onClick={(e) => this.validaRespuestaCorrecta(this.props.opcion)} onMouseOver={this.aumentaSizeDeOpcion} onMouseLeave = {this.bajaSizeDeOpcion}
                 style={{height:"50px", paddingTop:"5px", paddingBottom:"5px"}}>
                <h4 style={{fontSize:this.state.sizeOpcion}}>
                    | {this.props.opcion}
                </h4>
            </div>
        );
    }
}
export {Libro};