import React from 'react';
import { Link } from 'react-router-dom'



const Nav = () => {
    return ( 
        <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Kolikay</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       {<Link className="nav-link" style={{color:'blue'}}  to='/'>home</Link>}
        
      </li>
      <li className="nav-item">
        {<Link className="nav-link"  to='/profile'>Profile</Link>}
      </li>

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {<Link className="dropdown-item" style={{color:'blue'}} to='/'>home</Link>}
          {<Link className="dropdown-item" style={{color:'black'}} to='/resume'>Resume</Link>}
          {<Link className="dropdown-item" style={{color:'black'}} to='/signin'>Sign In</Link>}
          {<Link className="dropdown-item" style={{color:'black'}} to='/signup'>Sign Up</Link>}
          
          <div className="dropdown-divider"></div>
          {<Link className="dropdown-item"  style={{textDecoration: 'none', color:'black'}} to='/project'>Project</Link>}
        </div>
      </li>
     
    </ul>
   
  </div>
</nav>
        </div>
     );
}
 
export default Nav;