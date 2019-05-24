import { createStore } from 'redux'
import { personajes } from '../globales';

var defaultState = {
    color:"white",
    indicePersonajeActual:0,
    estado:"disabled",
    respuesta: "",
    colorBotonSiguiente: "grey",
    idCategoriaActual : 0,
    opcionesPorMostrar: []
}

function FiltraPersonajesPorCategoria(){
  var personajesFiltrados = [];
  if (defaultState.idCategoriaActual === 0){
    return personajes;
  }
  else{
    personajes.forEach(function(personaje){
      if (personaje.idCategoria === defaultState.idCategoriaActual){
        personajesFiltrados.push(personaje);
      }
    });
  }
  return personajesFiltrados;
}

function ActualizaIdCategoriaActual(idCategoria){
  defaultState.idCategoriaActual = idCategoria;
  return defaultState.idCategoriaActual;
}

function GeneraOpcionesNuevas(){
  var personajesFiltrados = FiltraPersonajesPorCategoria();
  defaultState.opcionesPorMostrar = [];

  var indiceNuevo = 0;
  var indices = [];
  while(indices.length < 4){
    var indiceNuevo = Math.floor((Math.random() * personajesFiltrados.length));
    if((indices.indexOf(indiceNuevo)===-1) && (indiceNuevo != defaultState.indicePersonajeActual)){
      indices.push(indiceNuevo)
    }
  }
  indices.forEach(function(indice){
    defaultState.opcionesPorMostrar.push(personajesFiltrados[indice]);
  });
  console.log("2-idCategoriaActual:",defaultState.idCategoriaActual);
  return defaultState.opcionesPorMostrar;
}

function EstablecerSiguienteUsuario(){


  defaultState.indicePersonajeActual = Math.floor((Math.random() * defaultState.opcionesPorMostrar.length));

  console.log("indiceNuevo:",defaultState.indicePersonajeActual)
  return defaultState.indicePersonajeActual;
}

GeneraOpcionesNuevas();
EstablecerSiguienteUsuario();

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
        opcionesPorMostrar: GeneraOpcionesNuevas(),
        indicePersonajeActual: EstablecerSiguienteUsuario()
      };
      case "cambiaCategoria" :  
      return {
        ...state,
        color:action.data.color,
        idCategoriaActual:ActualizaIdCategoriaActual(action.data.idCategoria),
        opcionesPorMostrar: GeneraOpcionesNuevas(),
        indicePersonajeActual: EstablecerSiguienteUsuario()
      };  
    default:
      return state
  }
}
const storeMaterial = createStore(personajesReducer)
export default storeMaterial;
