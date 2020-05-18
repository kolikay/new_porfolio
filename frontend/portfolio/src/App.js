import React from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Nav from './component/Nav'
import RoutingPage from './component/RoutingPage';
import Footer from './component/Footer';


const App = () => {
  return (   
  <div >
    <Nav />
    <RoutingPage />
    <Footer />
  
  </div> );
}
 
export default App;
