import { createStore } from 'redux'

var defaultState = {
  color:"white",
  indicePreguntaActual:0,
  estado:"disabled",
  respuesta: "",
  colorBotonSiguiente: "grey",
  opcionesPorMostrar: []

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
