import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'


const Helpers = () => {
    return localStorage.getItem('JWT')
}


class Authenticated extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user : undefined
         }
    }
    componentDidMount(){
        const jwt = Helpers()
        if(!jwt){
            this.props.history.push('/signin')
        }
        axios.get('http://127.0.0.1:8000/users/', {headers: {Authorization: `Bearer ${jwt}`}}).then(res => this.setState({
            user: res.data 
        })).catch(err => {
            localStorage.removeItem('JWT');
            this.props.history.push('/signin')
        })}
    render() { 
        if(this.state.user === undefined){
            return(<div><h1>Loading.............</h1></div>)
        }
    return ( <div>{this.props.children}</div> );
    }
}
 
export default withRouter(Authenticated);