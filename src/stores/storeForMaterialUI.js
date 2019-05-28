import { createStore } from 'redux'

const personajeInicial={
  idPersonaje:0,
  idCategoria: 0,
  nombre: "",
  imagen: "http://localhost:3000/ajax-loader.gif"
}

var defaultState = {
    color:"white",
    indicePersonajeActual:0,
    estado:"disabled",
    respuesta: "",
    colorBotonSiguiente: "grey",
    idCategoriaActual : 0,
    opcionesPorMostrar: [],
    personajeActual : personajeInicial,
    personajes:[]
}

function personajesReducer(state = defaultState, action) {
  
  switch (action.type) {
    case "validarPersonaje" :       
      return {
        ...state,
        color : action.data.color,
        estado : action.data.estado
      };
    case "avanzarOpcion" :  
      return {
        ...state,
        color:action.data.color,
        estado:action.data.estado,
        opcionesPorMostrar: action.data.opcionesPorMostrar,
        indicePersonajeActual: action.data.indicePersonajeActual,
        personajeActual : action.data.opcionesPorMostrar[action.data.indicePersonajeActual]
      };
      case "cambiaCategoria" :  
      return {
        ...state,
        color:action.data.color,
        idCategoriaActual:action.data.idCategoriaActual,
        opcionesPorMostrar: action.data.opcionesPorMostrar,
        indicePersonajeActual: action.data.indicePersonajeActual,
        personajeActual : action.data.opcionesPorMostrar[action.data.indicePersonajeActual]
      };  
      case "CargarPersonajes" :  
      return {
        ...state,        
        personajes: action.data.personajes,
        opcionesPorMostrar: action.data.opcionesPorMostrar,
        indicePersonajeActual: action.data.indicePersonajeActual,
        personajeActual : action.data.opcionesPorMostrar[action.data.indicePersonajeActual]
      };
    default:
      return state
  }
}
const storeMaterial = createStore(personajesReducer)
export default storeMaterial;
