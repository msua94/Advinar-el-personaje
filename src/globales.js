var jugador1 = {
     imagen : "http://localhost:3000/futbolistas/cristiano.jpg",
     nombre: "Cristiano Ronaldo",
     opciones : ["Mbappe","Cristiano Ronaldo", "Bryan Ruiz","James Rodriguez"]
};
var jugador2 = {
     imagen : "http://localhost:3000/futbolistas/messi.jpg",
     nombre: "Andres Iniesta",
     opciones : ["Zidane","Maradona", "Bale","Andres Iniesta"]
};
var jugador3 = {
     imagen : "http://localhost:3000/futbolistas/neymar.jpg",
     nombre: "Neymar",
     opciones : ["Andrés Iniesta","Luis Suárez", "Neymar","Roberto Carlos"]
};
var jugador4 = {
     imagen : "http://localhost:3000/futbolistas/zidane.jpg",
     nombre: "Zidane",
     opciones : ["Zidane","Cristiano Ronaldo", "Ronaldihno","Andrey C."]
};
var jugador5 = {
     imagen : "http://localhost:3000/futbolistas/Zlatan.jpg",
     nombre: "Zlatan",
     opciones : ["Mbappe","Zlatan", "Bryan Ruiz","James Rodriguez"]
};

var jugadores = [jugador1,jugador2,jugador3,jugador4,jugador5];

const Categorias = {
     Todas:{nombre:"Todas",idCategoria:0},
     Cine: {nombre:"Cine",idCategoria:1},
     Literatura: {nombre:"Literatura",idCategoria:2},
     Deportes: {nombre:"Deportes",idCategoria:3},
     Musica: {nombre:"Musica",idCategoria:4}
 }

//var personaje1 = {
//     idPersonaje:1,
//     idCategoria: Categorias.Cine.idCategoria,
//     nombre: "Dwayne Johnson",
//     imagen: "http://localhost:3000/Cine/dwayneJohnson.jpg"
//}
//var personaje2 = {
//     idPersonaje:2,
//     idCategoria: Categorias.Cine.idCategoria,
//     nombre: "Emma Stone",
//     imagen: "http://localhost:3000/Cine/emma-stone.jpg"
//}
//var personaje3 = {
//     idPersonaje:3,
//     idCategoria: Categorias.Cine.idCategoria,
//     nombre: "Rachel McAdams",
//     imagen: "http://localhost:3000/Cine/Rachel-McAdams.jpg"
//}
//var personaje4 = {
//     idPersonaje:4,
//     idCategoria: Categorias.Cine.idCategoria,
//     nombre: "Robert Downey",
//     imagen: "http://localhost:3000/Cine/RobertDowney.jpg"
//}

//var personaje5 = {
//     idPersonaje:5,
//     idCategoria: Categorias.Cine.idCategoria,
//     nombre: "Scarlett Johansson",
//     imagen: "http://localhost:3000/Cine/ScarlettJohansson.jpg"
//}

//var personaje6 = {
//     idPersonaje:6,
//     idCategoria: Categorias.Cine.idCategoria,
//     nombre: "Tom Cruise",
//     imagen: "http://localhost:3000/Cine/tom-cruise.jpg"
//}

//var personaje7 = {
//     idPersonaje:7,
//     idCategoria: Categorias.Cine.idCategoria,
//     nombre: "Will Smith",
//     imagen: "http://localhost:3000/Cine/willSmith.jpg"
//}

//var personaje8 = {
//     idPersonaje:8,
//     idCategoria: Categorias.Deportes.idCategoria,
//     nombre: "Cristiano Ronaldo",
//     imagen: "http://localhost:3000/Deporte/cristiano.jpg"
//}

//var personaje9 = {
//     idPersonaje:9,
//     idCategoria: Categorias.Deportes.idCategoria,
//     nombre: "Andrés Iniesta",
//     imagen: "http://localhost:3000/Deporte/andresIniesta.jpg"
//}

//var personaje10 = {
//     idPersonaje:10,
//     idCategoria: Categorias.Deportes.idCategoria,
//     nombre: "Neymar",
//     imagen: "http://localhost:3000/Deporte/neymar.jpg"
//}

//var personaje11 = {
//     idPersonaje:11,
//     idCategoria: Categorias.Deportes.idCategoria,
//     nombre: "Zidane",
//     imagen: "http://localhost:3000/Deporte/zidane.jpg"
//}

//var personaje12 = {
//     idPersonaje:12,
//     idCategoria: Categorias.Deportes.idCategoria,
//     nombre: "Zlatan",
//     imagen: "http://localhost:3000/Deporte/zlatan.jpg"
//}

//var personaje13 = {
//     idPersonaje:13,
//     idCategoria: Categorias.Literatura.idCategoria,
//     nombre: "Zlatan",
//     imagen: "http://localhost:3000/Literatura/csLewis.jpeg"
//}

//var personaje14 = {
//     idPersonaje:14,
//     idCategoria: Categorias.Literatura.idCategoria,
//     nombre: "Ernest Hemingway",
//     imagen: "http://localhost:3000/Literatura/ernestHemingway.jpg"
//}

//var personaje15 = {
//     idPersonaje:15,
//     idCategoria: Categorias.Literatura.idCategoria,
//     nombre: "Gabriel García Marquez",
//     imagen: "http://localhost:3000/Literatura/GabrielGarciaMarquez.jpg"
//}
//var personaje16 = {
//     idPersonaje:16,
//     idCategoria: Categorias.Literatura.idCategoria,
//     nombre: "Miguel De Cervantes",
//     imagen: "http://localhost:3000/Literatura/miguelDeCervantes.jpeg"
//}
//var personaje17 = {
//     idPersonaje:17,
//     idCategoria: Categorias.Literatura.idCategoria,
//     nombre: "Pablo Neruda",
//     imagen: "http://localhost:3000/Literatura/pabloNeruda.jpg"
//}
//var personaje18 = {
//     idPersonaje:18,
//     idCategoria: Categorias.Literatura.idCategoria,
//     nombre: "Paulo Coelho",
//     imagen: "http://localhost:3000/Literatura/pauloCoelho.jpg"
//}
//var personaje19 = {
//     idPersonaje:19,
//     idCategoria: Categorias.Literatura.idCategoria,
//     nombre: "Stephen King",
//     imagen: "http://localhost:3000/Literatura/stephenKing.jpg"
//}
//var personaje20 = {
//     idPersonaje:20,
//     idCategoria: Categorias.Literatura.idCategoria,
//     nombre: "William Shakespeare",
//     imagen: "http://localhost:3000/Literatura/williamShakespeare.jpg"
//}

//var personaje21 = {
//     idPersonaje:21,
//     idCategoria: Categorias.Musica.idCategoria,
//     nombre: "Andrea Bocelli",
//     imagen: "http://localhost:3000/Musica/andreaBocelli.jpg"
//}
//var personaje22 = {
//     idPersonaje:22,
//     idCategoria: Categorias.Musica.idCategoria,
//     nombre: "Bob Marley",
//     imagen: "http://localhost:3000/Musica/bob-marley.jpg"
//}
//var personaje23 = {
//     idPersonaje:23,
//     idCategoria: Categorias.Musica.idCategoria,
//     nombre: "Elvis Presley",
//     imagen: "http://localhost:3000/Musica/elvisPresley.jpg"
//}
//var personaje24 = {
//     idPersonaje:24,
//     idCategoria: Categorias.Musica.idCategoria,
//     nombre: "Eminem",
//     imagen: "http://localhost:3000/Musica/eminem.jpg"
//}
//var personaje25 = {
//     idPersonaje:25,
//     idCategoria: Categorias.Musica.idCategoria,
//     nombre: "Freddie Mercury",
//     imagen: "http://localhost:3000/Musica/freddieMercury.jpg"
//}
//var personaje26 = {
//     idPersonaje:26,
//     idCategoria: Categorias.Musica.idCategoria,
//     nombre: "Jhon Lennon",
//     imagen: "http://localhost:3000/Musica/JhonLennon.jpg"
//}
//var personaje27 = {
//     idPersonaje:27,
//     idCategoria: Categorias.Musica.idCategoria,
//     nombre: "Michael Jackson",
//     imagen: "http://localhost:3000/Musica/MichaelJackson.jpg"
//}

export {jugadores, Categorias}
