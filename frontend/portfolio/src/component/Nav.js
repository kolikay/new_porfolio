import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';



const Nav = () => {
    return ( 
        <Fragment>
 
          
 <nav className="navbar navbar-expand-lg mb-0 navbar-dark bg-dark" >
          <Link className="navbar-brand" to="/" style={{fontSize:'1.5em', color: 'white', fontFamily: 'Courier New Courier monospace'}}>Kolikay</Link>
          <img className='logo'
          src={require('../component/images/k.png')}
          alt=""
          />
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav navbar-right ">
              <li className="nav-item mr-4 active">
              {<Link className="nav-link "  style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}  to='/'>Homepage</Link>}
                
              </li>
              <li className="nav-item mr-4  ">
                {<Link className="nav-link"  to='/profile'style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>Profile</Link>}
              </li>

              <li className="nav- mr-4">
                {<Link className="nav-link"  to='/resume'style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>Resume</Link>}
              </li>

              <li className="nav- mr-4">
                {<Link className="nav-link"  to='/project' style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>Project</Link>}
              </li>
              <li>
              {<Link className="nav-link"  to='/signup' style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>Register</Link>}
              </li>

                <li className="nav- mr-3 dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>
                  User
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  
                  {<Link className="dropdown- mr-2" style={{color:'black'}} to='/signin'>Sign In</Link>}
                 
                  
                  <div className="dropdown-divider"></div>
                  {<Link className="dropdown- mr-2"  style={{textDecoration: 'none', color:'black'}} to='/project'>Signout</Link>}
                </div>
                
              </li>
            
            </ul>
          
        
          </div>
      
          </nav>

        </Fragment>
     );
}
 
export default Nav;






//           <nav className="navbar navbar-expand-lg mb-0 navbar-dark bg-dark">
//   <Link to='/' className="navbar-brand" >Kolikay</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav- mr-3 active">
//         <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
//       </li>
//       <li className="nav- mr-3">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li cclassName="nav- mr-3 dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a className="dropdown- mr-3" href="#">Action</a>
//           <a className="dropdown- mr-3" href="#">Another action</a>
//           <div cclassName="dropdown-divider"></div>
//           <a className="dropdown- mr-3" href="#">Something else here</a>
//         </div>
//       </li>
//       <li className="nav- mr-3">
//         <a className="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
    
//   </div>
// </nav>






