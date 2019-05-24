import { createStore } from 'redux'
import { personajes } from '../globales';

var defaultState = {
  color:"white",
  indicePreguntaActual:0,
  estado:"disabled",
  respuesta: "",
  colorBotonSiguiente: "grey",
  opcionesPorMostrar: []

}

function RealizaCargaDePersonajes(){
  const serviceUrl = 'http://localhost:38639/API/Personajes';  
    fetch(serviceUrl)
      .then(res => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      }).catch(error => this.setState({ error: error.message }));
}

function GeneraNuevasOpciones(indicePreguntaActual){
  var indiceMaximo = (personajes.length - 1);
  var indicesDeOpciones = [];
  while (indicesDeOpciones.length === 3){

    var nuevoIndice = Math.floor(Math.random() * indiceMaximo);
    
    if((indicesDeOpciones.indexOf(nuevoIndice) === -1) && (nuevoIndice !== indicePreguntaActual)){
      indicesDeOpciones.push(nuevoIndice);
    }
  }
  var opcionesNuevas = [personajes[indicePreguntaActual].nombre];
  indicesDeOpciones.forEach(function(indice){
    opcionesNuevas.push(personajes(indice))
  })  
}

function colorsreducer(state = defaultState, action) {
  console.log({ 'action' : action.type ,
  valor : action.data});
  console.log(defaultState);
  switch (action.type) {
    case "cambiarColor" :       
      return {
        ...state,
        color : action.data.color,
        respuesta : action.data.respuesta,
        estado : action.data.estado,
        colorBotonSiguiente : action.data.colorBotonSiguiente
      };
    case "avanzarOpcion" :       
      return {
        ...state,
        indicePreguntaActual : action.data.indicePreguntaActual,
        color : action.data.color,   
        colorBotonSiguiente : action.data.colorBotonSiguiente     
      };  
    default:
      return state
  }
}
const store = createStore(colorsreducer)
export default store;
