import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Contact from './contact'
import Users from './users'
import Cuerpo from '../MaterialUI/cuerpo'
class Home extends React.Component {


    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            redireccionarAJuego: false
        };
        this.EnviarASeccionDeJuegos = this.EnviarASeccionDeJuegos.bind(this);

    }
    EnviarASeccionDeJuegos(){
        // this.history.push('/juego');
    }

    render() {  
        return (
            <div>
                <h1>HOME</h1>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/juego">Juego</Link>
                            </li>
                        </ul>
                        <Route path="/users" component={Users} />
                        <Route path="/juego" component={Cuerpo} />
                        
                    </div>
                </Router>
            </div>
        )
    }
}
export default Home