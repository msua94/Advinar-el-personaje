import React, { Component } from 'react'

class ApiUser extends Component {



    componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
        this.setState({ contacts: data })
    })
    .catch(console.log)
    }

    render(){
        return (
            <div></div>
        );
    }

}