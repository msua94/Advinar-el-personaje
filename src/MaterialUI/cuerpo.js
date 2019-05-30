import React from 'react';
import store from '../stores/storeForMaterialUI';
import Encabezado from './encabezado';
import PanelDerecho from './panelDerecho';
import PanelIzquierdo from './panelIzquierdo';
import PanelCategorias from './panelCategorias';
import Cargando from './cargando';
import ErrorConsultarPersonajes from './ErrorConsultarPersonajes';
import Grid from '@material-ui/core/Grid';
import MetaTags from 'react-meta-tags';

function FiltraPersonajesPorCategoria(personajes, idCategoria) {
    let personajesFiltrados = [];
    if (idCategoria === 0) {
        return personajes;
    }
    else {
        personajes.forEach(function (personaje) {
            if (personaje.idCategoria === idCategoria) {
                personajesFiltrados.push(personaje);
            }
        });
    }
    return personajesFiltrados;
}

function GeneraOpcionesNuevas(personajes, idCategoria) {
    let personajesFiltrados = FiltraPersonajesPorCategoria(personajes, idCategoria);
    let opcionesPorMostrar = [];
    if (personajesFiltrados.length === 0) {
        return personajesFiltrados;
    }
    let indices = [];
    let cantidadDeOpcionesRandom = personajesFiltrados.length >= 4 ? 4 : personajesFiltrados.length;
    while (indices.length < cantidadDeOpcionesRandom) {
        let indiceNuevo = Math.floor((Math.random() * personajesFiltrados.length));
        if ((indices.indexOf(indiceNuevo) === -1) && (indiceNuevo != store.getState().indicePersonajeActual)) {
            indices.push(indiceNuevo)
        }
    }
    indices.forEach(function (indice) {
        opcionesPorMostrar.push(personajesFiltrados[indice]);
    });
    return opcionesPorMostrar;
}

function GenerarNuevoIndiceUsuario(opcionesPorMostrar) {
    let indicePersonajeActual = Math.floor((Math.random() * opcionesPorMostrar.length));
    return indicePersonajeActual;
}

function ValidarPersonaje(personaje) {

    var color = "red";
    var estado = true;
    if (personaje.idPersonaje === store.getState().opcionesPorMostrar[store.getState().indicePersonajeActual].idPersonaje) {
        color = "green";
        estado = false;
    }
    store.dispatch({
        type: "validarPersonaje",
        data: { color: color, estado: estado }
    });
}

function AvanzarOpcion() {
    let color = "white";
    let estado = true;
    let opcionesPorMostrar = GeneraOpcionesNuevas(store.getState().personajes, store.getState().idCategoriaActual);
    let indicePersonajeActual = GenerarNuevoIndiceUsuario(opcionesPorMostrar);
    store.dispatch({
        type: "avanzarOpcion",
        data: { color: color, estado: estado, opcionesPorMostrar: opcionesPorMostrar, indicePersonajeActual: indicePersonajeActual }
    });
}

function CambiaCategoria(idCategoria){
    let color = "white";
    let opcionesPorMostrar = GeneraOpcionesNuevas(store.getState().personajes, idCategoria);
    let indicePersonajeActual = GenerarNuevoIndiceUsuario(opcionesPorMostrar);
    console.log("categoria k: ", idCategoria);
    store.dispatch({
        type: "cambiaCategoria",
        data: { color: color, idCategoriaActual: idCategoria, opcionesPorMostrar: opcionesPorMostrar, indicePersonajeActual: indicePersonajeActual }
    });
}

function CargarLosPersonajes(personajes) {
    let opcionesPorMostrar = GeneraOpcionesNuevas(personajes, store.getState().idCategoriaActual);
    let indicePersonajeActual = GenerarNuevoIndiceUsuario(opcionesPorMostrar);
    console.log("ya termine");
    store.dispatch({
        type: "CargarPersonajes",
        data: { personajes: personajes, opcionesPorMostrar: opcionesPorMostrar, indicePersonajeActual: indicePersonajeActual }
    });
}

function MostrarErrorAlCargarPersonaje() {
    store.dispatch({
        type: "MostrarErrorAlCargarPersonajes",
        data: {}
    });
} 


class Cuerpo extends React.Component {

    styles = {
        root: {
            flexGrow: 1
        }
    };
    
    ConsultarPersonajes() {
        if (store.getState().personajes === null) {
            const serviceUrl = 'http://localhost:38639/API/personajes';
            fetch(serviceUrl)
                .then(res => {
                    return res.json();
                })
                .then((personajes) => {
                    CargarLosPersonajes(personajes);
                }).catch(error => {
                    console.log(error);
                    MostrarErrorAlCargarPersonaje();
                });
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({});
        });
        this.ConsultarPersonajes();
    }

    constructor(props) {
        super(props);
    }
      

    render(){
        if (store.getState().personajes === null) {
            return (
                <div style={this.styles.root}>
                    <MetaTags>
                        <title>Adivinar el personaje</title>
                        <meta charSet="utf-8" />
                    </MetaTags>
                    <Grid container spacing={8}>
                        <Encabezado></Encabezado>
                        <ErrorConsultarPersonajes></ErrorConsultarPersonajes>
                        <PanelCategorias cambiaCategoria={CambiaCategoria}></PanelCategorias>
                    </Grid>
                </div>
            );
        }
        if (store.getState().personajes.length !== 0) {
            return (
                <div style={this.styles.root}>
                    <Grid container spacing={8}>
                        <Encabezado></Encabezado>
                        <PanelIzquierdo imagen={store.getState().personajeActual.imagen}></PanelIzquierdo>
                        <PanelDerecho propiedades={store.getState()}
                            avanzarOpcion={AvanzarOpcion}
                            validarPersonaje={ValidarPersonaje}>
                        </PanelDerecho>
                        <PanelCategorias cambiaCategoria={CambiaCategoria} idCategoriaActual={store.getState().idCategoriaActual}></PanelCategorias>
                    </Grid>
                </div>
            );
        }
        if (store.getState().personajes.length === 0) {
            return (
                <div style={this.styles.root}>
                    <Grid container spacing={8}>
                        <Encabezado></Encabezado>
                        <Cargando></Cargando>
                        <PanelCategorias cambiaCategoria={CambiaCategoria}></PanelCategorias>
                    </Grid>
                </div>
            );
        }
    }

}

export default Cuerpo;