import React from 'react'
import { Route , Switch, BrowserRouter as Router} from 'react-router-dom';
import Homepage from './Homepage'  
import SignIn from './SignIn'
import SignUp from './SignUp'
import Test from './Test'
import Project from './Projects'
import Profile from './Profile'
import Users from './Users'
import UserDetails from './UserDetails';
import Authenticated from './Authenticated';
import Protected from './Protected'







const RoutingPage = () => {
    return(
    
            <Switch>
                <Route exact path ="/" component={Homepage}/>
                <Route path ="/signup" component={SignUp} />
                <Route path ="/signin" component={SignIn} />
                <Route path ="/test" component={Test} />
                <Authenticated>
                <Route exact path ="/project" component={Project}/>
                <Route  exact path ="/profile" component={Profile} />
                <Route exact path ="/users" component={Users} />
                <Route path = '/users/:id' component={UserDetails}/>
                <Route exact path ="/protected" component={Protected} />
                </Authenticated>
            
            
            </Switch>
      
    )
}
export default RoutingPage