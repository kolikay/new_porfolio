import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Nav from './component/Nav'
import RoutingPage from './component/RoutingPage';
import Footer from './component/Footer';


class App extends Component {

  handleLogout =  () => {
    localStorage.clear();
    window.location = "/signin"
  }
    
  render(){

  return ( <div >
    <Nav onDelete = {this.handleLogout}/>
    <RoutingPage />
    <Footer />
  
  </div> )

  }
}
 
export default App;
