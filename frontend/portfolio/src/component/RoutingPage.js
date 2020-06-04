import React from 'react'
import { Route , Switch, BrowserRouter as Router} from 'react-router-dom';
import Homepage from './Homepage'
import Project from './Projects'
import Profile from './Profile'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Test from './Test'
import Users from './Users'
import UserDetails from './UserDetails';






const RoutingPage = () => {
    return(
    
            <Switch>
                <Route exact path ="/" component={Homepage}/>
                <Route exact path ="/project" component={Project}/>
                <Route path ="/profile" component={Profile} />
                <Route path ="/signup" component={SignUp} />
                <Route path ="/signin" component={SignIn} />
                <Route path ="/test" component={Test} />
                <Route exact path ="/users" component={Users} />
                <Route path = '/users/:id' component={UserDetails}/>
            
            
            </Switch>
      
    )
}
export default RoutingPage