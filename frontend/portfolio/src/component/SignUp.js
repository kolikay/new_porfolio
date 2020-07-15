import React from 'react';
import { useFormik } from 'formik'
import axios from 'axios'
import { authToken } from './Helpers/AuthToken'
import Cookies from 'js-cookie'


function SignUp () {
    
    const token = authToken()
    const url = 'http://127.0.0.1:8000/api/auth/register/'
    const formik = useFormik({
        initialValues: {
            email : '',   
            username  : '',
            password : '',
            confirm_password : '',
           
            
        },
        onSubmit: values => {
                    console.log("hello", values)
                    axios.post(url, values, {
                        // Headers: {
                        //     'Accept' : 'application/json',
                        //     'Content-Type': 'application/json'
                        // }
                    })
 
                    .then(res=> {console.log(res.data.User.username)
                        if(res.status===200){
                        let inThirtyMinutes = new Date(new Date().getTime() + 60 * (1000 * 30));
                        Cookies.set('JWT', res.data.token, { expires: inThirtyMinutes})
                        
                        localStorage.setItem('Token', res.data.token)
                        localStorage.setItem('username', res.data.User.username);
                        window.location = '/'
                        }
                    })
                   .catch(error => {
                       console.log(error)
                    error = <p>Registration Failed</p>
                    alert(error.props.children)
                    window.location = '/signup'
                    })
        },
        validate: values => {
            let errors = {}

            if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
            if (!values.username){
                errors.username = 'Required'
            }
            if (!values.password){
                errors.password = 'Required'
            }
            if (!values.confirm_password){
                errors.confirm_password = 'Required'
            }
            return errors
        }

    })

    return (
        <div className='container'style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'50%'}}>
            <form style={{paddingTop:'7%'}} onSubmit={formik.handleSubmit}>

            <div className="form-group">
                <label  htmlFor='name'>Username</label>
                <input 
                id = 'username'
                name = 'username'
                value = {formik.values.username}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="text" 
                className="form-control" 
                placeholder="Username" />
                {formik.touched.username &&formik.errors.username ? <div style = {{color:'red'}}>{formik.errors.username}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='email'>Email</label>
                <input 
                name = 'email'
                value = {formik.values.email}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="text" 
                className="form-control" 
                placeholder="Email" />
                {formik.touched.email &&formik.errors.email ? <div style = {{color:'red'}}>{formik.errors.email}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='password'>Password</label>
                <input
                name = 'password'
                value = {formik.values.password}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="password" 
                className="form-control" 
                placeholder="Enter password" />
                {formik.touched.password && formik.errors.password ? <div style = {{color:'red'}}>{formik.errors.password}</div> : null}
            </div>
            <div className="form-group">
                <label  htmlFor='confirm_password'>Confirm Password</label>
                <input
                name = 'confirm_password'
                value = {formik.values.confirm_password}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="password" 
                className="form-control" 
                placeholder="Confirm password" />
                {formik.touched.confirm_password && formik.errors.confirm_password ? <div style = {{color:'red'}}>{formik.errors.confirm_password}</div> : null}
            </div>

            <button 
            style={{backgroundColor: 'rgb(255, 233, 110)'}}
            type="submit" 
            className="btn-lg">
            Sign Up
            </button>
           
            
        </form>
    </div>
    )}

export default SignUp



// import React, { Component } from "react";
// import {Link} from 'react-router-dom'
// import axios from 'axios'


// export default class SignUp extends Component {
//     constructor(props){
//         super(props)
//         this.changeHandler = this.changeHandler.bind(this)
//         this.submitHandler = this.submitHandler.bind(this)

//         this.state = {
//             name : '',
//             age  : '',
//             email : '',   
//             phone  : '',    
//             address : '',  
//             about : '',  
//             username  : '',
//             password : '',
//             password2 : '',
//             error: '' ,
//             stack: '',
            
//         }
//     }
//     changeHandler = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }
//     submitHandler = e => {
//         e.preventDefault()
//         axios.post('http://127.0.0.1:8000/api/auth/register/', this.state)
//         .then(responce=> {console.log(responce)
//             if(responce.status===201){
//                 window.location = "/"
//             }else {
//                 window.location = "signUp"
//             }
//         })
       
//         .catch(error => {
//             this.setState({
//                 error : <p>Registration Failed</p>
//             })
//         })

//     }
    
  

//     render() {
     
       
//         const {stack, error, name, age, email, phone, address, about, username, password, password2} = this.state
        


//         return (
//             <div className='container container-fluid'>
                
//              <form style={{paddingTop:'7%'}} onSubmit = {this.submitHandler}>
//                 <h3>Sign Up</h3>

//                 <div className="form-group">
//                     <label>Name</label>
//                     <input 
//                     name = 'name'
//                     value = {name}
//                     onChange = {this.changeHandler}
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Name" required/>
//                 </div>

//                 <div className="form-group">
//                     <label>Username</label>
//                     <input 
//                      name = 'username'
//                      value = {username}
//                      onChange = {this.changeHandler}
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Last name" />
//                 </div>

//                 <div className="form-group">
//                     <label>Stack</label>
//                     <input 
//                      name = 'stack'
//                      value = {stack}
//                      onChange = {this.changeHandler}
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Stack" />
//                 </div>

//                 <div className="form-group">
//                     <label>Address</label>
//                     <input
//                      name = 'address'
//                      value = {address}
//                      onChange = {this.changeHandler}
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Address" />
//                 </div>

//                 <div className="form-group">
//                     <label>Age</label>
//                     <input
//                      name = 'age'
//                      value = {age} 
//                      onChange = {this.changeHandler}
//                     type="number" 
//                     className="form-control" 
//                     placeholder="Age" />
//                 </div>

//                 <div className="form-group">
//                     <label>Phone</label>
//                     <input
//                      name = 'phone'
//                      value = {phone}
//                      onChange = {this.changeHandler} 
//                     type="number" 
//                     className="form-control" 
//                     placeholder="Phone" />
//                 </div>

//                 <div className="form-group">
//                     <label>about</label>
//                     <textarea
//                      name = 'about'
//                      value = {about}
//                      onChange = {this.changeHandler} 
//                     className="form-control" 
//                     placeholder="about "> 
//                     </textarea>
//                 </div>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input
//                      name = 'email'
//                      value = {email} 
//                      onChange = {this.changeHandler}
//                     type="email" 
//                     className="form-control" 
//                     placeholder="Enter email" />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input
//                      name = 'password'
//                      value = {password} 
//                      onChange = {this.changeHandler}
//                     type="password" 
//                     className="form-control" 
//                     placeholder="Enter password" />
//                 </div>
//                 <div className="form-group">
//                     <label>Confirm Password</label>
//                     <input
//                      name = 'password2'
//                      value = {password2} 
//                      onChange = {this.changeHandler}
//                     type="password" 
//                     className="form-control" 
//                     placeholder="Confirm password" />
//                 </div>

//                 <button 
//                 style={{backgroundColor: 'rgb(255, 233, 110)'}}
//                 type="submit" 
//                 className="btn btn-block">
//                 Sign Up
//                 </button>
//                 <h2>{error}</h2>

//                 <p className="forgot-password text-right">
//                     Already registered {<Link style={{textDecoration: 'none', color:'black'}} to='/signin'>Sign IN</Link>}
//                 </p>
//             </form>
//             </div>
//         );
//     }
// }
