import React from 'react';
import PropTypes from 'prop-types';
import { Libro } from './Libro';


class SeccionJugadores extends React.Component {

    constructor(props) {
        super(props);
    }
    
    cambiarColor = ()=>{
    
        this.props.eventoColor();

    }

    render(){
        return(
            <div style={{background:this.props.colorFondo, float:"Right",width:"70%",height:"400px"}}>
                {this.props.jugador.opciones.map((opcion) => {
                    return <Libro opcion={opcion} key={opcion} validaRespuestaCorrecta = {this.props.validaRespuestaCorrecta} />;
                })}
                <div style={{float:"Right", marginRight:"5%",marginTop:"150px"}}>
                    <button style={{color:"white",backgroundColor:"#3169c4",height:"3em",width:"8em",fontSize:"1em"}}>Siguiente</button>
                </div>
        </div>);

    }
}

export {SeccionJugadores};