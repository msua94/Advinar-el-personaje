import React from 'react';
class Users extends React.Component {
    constructor(props) {
        super(props);        
    }
   

    render() {
        return <h1 onClick = {()=>{this.props.history.push('../')}}>Users</h1>
    }
}
export default Users