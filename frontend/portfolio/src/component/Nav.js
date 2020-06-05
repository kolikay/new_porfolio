import React, { Fragment , Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'



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
              {<Link className="nav-link "  style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}  to='/users'>Users</Link>}
                
              </li>
              <li className="nav-item mr-4  ">
                 {/* {this.state.user ? this.state.user.map(user => <Link className="nav-link" to={`/profiles/${user.username}`}style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>Profile</Link>) : null} */}
                 { <Link className="nav-link" to={`/profile`}style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>Profile</Link>}
              </li>

              <li className="nav- mr-4">
                {<Link className="nav-link"  to='/project' style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>Project</Link>}
              </li>
              <li>
              {<Link className="nav-link"  to='/signup' style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>Register</Link>}
              </li>

                <li className="nav- mr-3 dropdown">
                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'rgb(187, 182, 110)',fontSize:'18px', fontFamily: 'Courier New Courier monospace'}}>
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





// class Nav extends Component {
//   constructor(props) {
//       super(props);
//       this.state = { 
//           loading : false,
//           user : [],
//           error : '',
         
//        }
//   }
  

  
//   componentDidMount() {
//       console.log(this.props.match)
//       this.setState({loading : true})
//       axios.get(`http://127.0.0.1:8000/users/`)
      
//       .then( responce => {console.log(responce.data)
//       this.setState({  
//           loading : false,
//           user: responce.data})
         
      
      
//       })
//       .catch(error => {console.log(error)
//       this.setState({error : <h4>server timed out while loading</h4>})
//       })
      

//   }
//   render(){






