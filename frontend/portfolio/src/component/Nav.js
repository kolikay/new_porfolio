import React from 'react';
import { Link } from 'react-router-dom'



const Nav = () => {
    return ( 
        <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Kolikay</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" >{<Link style={{textDecoration: 'none', color:'black'}} to='/'>home</Link>}</a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link" >{<Link style={{textDecoration: 'none', color:'black'}} to='/profile'>Profile</Link>}</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" >{<Link style={{textDecoration: 'none', color:'black'}} to='/'>home</Link>}</a>
          <a class="dropdown-item" >{<Link style={{textDecoration: 'none', color:'black'}} to='/resume'>Resume</Link>}</a>
          <a class="dropdown-item" >{<Link style={{textDecoration: 'none', color:'black'}} to='/signin'>Sign In</Link>}</a>
          <a class="dropdown-item" >{<Link style={{textDecoration: 'none', color:'black'}} to='/signup'>Sign Up</Link>}</a>
          
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/">{<Link style={{textDecoration: 'none', color:'black'}} to='/project'>Project</Link>}</a>
        </div>
      </li>
     
    </ul>
   
  </div>
</nav>
        </div>
     );
}
 
export default Nav;