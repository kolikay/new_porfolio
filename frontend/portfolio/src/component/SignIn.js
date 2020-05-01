import React, { Component } from "react";
import axios from "axios";

export default class Signin extends Component {
        constructor(props){
            super(props)

            this.state = {
                username : '',
                password : '',
            }
        }
        
        changeHandler = e => {
            this.setState({ [e.target.name] : e.target.value })
        }
        handleSubmit = e => {
            e.preventDefault()
            console.log(this.state)
            axios.post('http://127.0.0.1:8000/signin/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }

    render() {

        const {username, password} = this.state
        return (
            <div className='container container-fluid'>
                <div className='row'>
                    <div className='col-12'>

                    <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                    name = 'username'
                    value={username}
                    type="text" 
                    onChange = {this.changeHandler}
                    className="form-control"
                     placeholder="Username" 
                     
                     />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name ='password'
                    value = {password}
                    onChange = {this.changeHandler}
                    type="password"
                     className="form-control" 
                     placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>

                    </div>

                </div>
            
            </div>
        );
    }
}