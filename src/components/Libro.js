import React from 'react';
export function Libro(titulo) {
    // console.log(props);
    // console.log(props.titulo);
    return (<div onClick={(e) => titulo.validaRespuestaCorrecta(titulo.opcion)}>
        <h4>
            {titulo.opcion}
        </h4>
    </div>);
}
