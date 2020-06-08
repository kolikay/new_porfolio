import React, { Component } from "react";
import axios from "axios";
// import Helpers from './Helpers'



// const token = Helpers()
const url = 'http://127.0.0.1:8000/signin/'


export default class Signin extends Component {
        constructor(props){
            super(props)
           
            this.changeHandler = this.changeHandler.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)

            this.state = {
                username : '',
                password : '',
                error: '',
            }
        }
        


        changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
        }

        handleSubmit = e => {
        e.preventDefault();
        // axios.post('http://127.0.0.1:8000/signin/', this.state )

        // axios.post(url, this.state, {
        //     headers: {
        //         'Authorization': token,
        //         'Accept' : 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        
        // })
        axios.post(url, this.state, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
              }    
        
        })
     



        .then(res => {console.log(res)
            localStorage.setItem('JWT', res.data.token);
            window.location = '/'
            // this.props.history.push('/')
            }).catch( error => {
                this.setState({
                    error: <p>Login Detail provided is invalid</p>
                })
            })
        }

      

    render() {

        const {username, password} = this.state
        return (
            <div className='container container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                    </div>
                    <div className='col-6'>


                    <form style={{paddingTop:'35%', width: '70%'}} onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>
                {this.state.error}

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

                <button style={{backgroundColor: 'rgb(255, 233, 110)'}} type="submit" className="btn  btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/signin">password?</a>
                </p>
            </form>
         

                    </div>

                </div>
            
            </div>
        );
    }
}

// handleSubmit = e => {
//     e.preventDefault();
//     axios.post('http://127.0.0.1:8000/signin/', this.state)
//         .then(responce=> {
//             if(responce.status===200){
//                 window.location = "/" 
//             }else {
//                 window.location = "signin"
//             }
//         })



//         .catch( error => {
//             this.setState({
//                 error: <p>Login Detail provided is invalid</p>
//             })
//         })
// }