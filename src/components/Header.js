import React from 'react';
class Header extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {mensaje: "Adivina el autor"};
    }

    render() {
      return <center>
                <h1>{this.state.mensaje}</h1>
             </center>;
    }
  }
  export {Header};