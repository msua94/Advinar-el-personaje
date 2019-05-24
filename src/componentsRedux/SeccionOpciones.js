import React from 'react';
import { Libro } from './Libro';
import store from '../stores/configureStore'
import { jugadores } from '../globales';

class SeccionOpciones extends React.Component {

    constructor(props) {
        super(props);
    }
    
    AvanzarOpcion = ()=>{
        var indicePreguntaActual = store.getState().indicePreguntaActual;
        console.log(store.getState().respuesta,"-",jugadores[indicePreguntaActual].nombre);
        if (store.getState().respuesta === jugadores[indicePreguntaActual].nombre){
            if(indicePreguntaActual === jugadores.length - 1){
                indicePreguntaActual = 0;
            }
            else{
                indicePreguntaActual = indicePreguntaActual + 1;
            }            
            var color = "white";
            var colorBotonSiguiente = "gray";
            store.dispatch({
                type: "avanzarOpcion",
                data: {indicePreguntaActual:indicePreguntaActual,color:color,colorBotonSiguiente:colorBotonSiguiente}
            });
        }
    }

    render(){
        return(
            <div style={{background:this.props.colorFondo, float:"Right",width:"70%",height:"400px"}}>
                {this.props.jugador.opciones.map((opcion) => {
                    return <Libro opcion={opcion} key={opcion} validaRespuestaCorrecta = {this.props.validaRespuestaCorrecta} />;
                })}
                <div style={{float:"Right", marginRight:"5%",marginTop:"100px"}}>
                    <button style={{color:"white",backgroundColor:store.getState().colorBotonSiguiente,height:"3em",width:"8em",fontSize:"1em"}} disabled = {store.getState().estado}
                            onClick = {this.AvanzarOpcion}>
                        Siguiente
                    </button>
                </div>
        </div>);

    }
}

export {SeccionOpciones};