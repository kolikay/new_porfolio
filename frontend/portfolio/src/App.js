import React from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Nav from './component/Nav'
import RoutingPage from './component/RoutingPage';


const App = () => {
  return (
    <div>
      <Nav />
      <RoutingPage />
     
</div>
  );
}

export default App;
