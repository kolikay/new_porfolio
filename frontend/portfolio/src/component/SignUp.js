import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            age  : '',
            email : '',   
            phone  : '',    
            address : '',  
            about : '',  
            username  : '',
            password : '',
            password2 : '',
            error: '' ,
            status: '',
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/signup/', this.state)
        .then(response => {
            console.log(response)
            this.setState({ status: response.status})
            
        })
       
        .catch(error => {
            console.log(error)
            this.setState({
                error : <p>Registration Failed</p>
            })
        })

    }
    
  

    render() {
     
       
        const {error, status, name, age, email, phone, address, about, username, password, password2} = this.state
        console.log(status)


        return (
            <div className='container container-fluid'>
                <h4>{error}</h4>
                <h4>{status === 201 ? <h4>Registration was successful</h4>: null}</h4>
                
                    
             
            <form style={{paddingTop:'7%'}} onSubmit = {this.submitHandler}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input 
                    name = 'name'
                    value = {name}
                    onChange = {this.changeHandler}
                    type="text" 
                    className="form-control" 
                    placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                     name = 'username'
                     value = {username}
                     onChange = {this.changeHandler}
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input
                     name = 'address'
                     value = {address}
                     onChange = {this.changeHandler}
                    type="text" 
                    className="form-control" 
                    placeholder="Address" />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                     name = 'age'
                     value = {age} 
                     onChange = {this.changeHandler}
                    type="number" 
                    className="form-control" 
                    placeholder="Age" />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                     name = 'phone'
                     value = {phone}
                     onChange = {this.changeHandler} 
                    type="number" 
                    className="form-control" 
                    placeholder="Phone" />
                </div>

                <div className="form-group">
                    <label>about</label>
                    <textarea
                     name = 'about'
                     value = {about}
                     onChange = {this.changeHandler} 
                    className="form-control" 
                    placeholder="about "> 
                    </textarea>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                     name = 'email'
                     value = {email} 
                     onChange = {this.changeHandler}
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                     name = 'password'
                     value = {password} 
                     onChange = {this.changeHandler}
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                     name = 'password2'
                     value = {password2} 
                     onChange = {this.changeHandler}
                    type="password" 
                    className="form-control" 
                    placeholder="Confirm password" />
                </div>

                <button 
                style={{backgroundColor: 'rgb(255, 233, 110)'}}
                type="submit" 
                className="btn btn-block">
                Sign Up
                </button>

                <p className="forgot-password text-right">
                    Already registered {<Link style={{textDecoration: 'none', color:'black'}} to='/signin'>Sign IN</Link>}
                </p>
            </form>
            </div>
        );
    }
}