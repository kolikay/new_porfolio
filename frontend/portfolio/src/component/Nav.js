import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';



const Nav = () => {
    return ( 
        <div>
 
          <nav className="navbar navbar-expand-lg navbar-light  " >
          <a className="navbar-brand" href="/" style={{fontSize:'1.5em', fontWeight: 'bold', color: 'white'}}>Kolikay</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              {<Link className="nav-link" style={{color:'white'}}  to='/'>Homepage</Link>}
                
              </li>
              <li className="nav-item">
                {<Link className="nav-link"  to='/profile'style={{color:'white'}}>Profile</Link>}
              </li>

              <li className="nav-item">
                {<Link className="nav-link"  to='/resume'style={{color:'white'}}>Resume</Link>}
              </li>

              <li className="nav-item">
                {<Link className="nav-link"  to='/project'style={{color:'white'}}>project</Link>}
              </li>

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  User
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  
                  {<Link className="dropdown-item" style={{color:'black'}} to='/signin'>Sign In</Link>}
                  {<Link className="dropdown-item" style={{color:'black'}} to='/signup'>Sign Up</Link>}
                  
                  <div className="dropdown-divider"></div>
                  {<Link className="dropdown-item"  style={{textDecoration: 'none', color:'black'}} to='/project'>Signout</Link>}
                </div>
              </li>
            
            </ul>
          
          </div>
          </nav>

        </div>
     );
}
 
export default Nav;






