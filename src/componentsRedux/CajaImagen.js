import React from 'react';
export function CajaImagen(props) {

    return (
    <div style={{float:"left",width:"30%"}}>
        <img src={props.jugador.imagen} alt="Personaje" height="400" width="400"></img>
    </div>);
}
