import React from 'react'
import { Route , Switch, Router} from 'react-router-dom'
import Homepage from './Homepage'
import Resume from './Resume'
import Project from './Projects'
import Profile from './Profile'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Test from './Test'
import Users from './Users'






const RoutingPage = () => {
    return(
        
        <Switch>
            <Route exact path ="/" component={Homepage}/>
            <Route exact path ="/project" component={Project}/>
            <Route path ="/resume" component={Resume} />
            <Route path ="/profile" component={Profile} />
            <Route path ="/signup" component={SignUp} />
            <Route path ="/signin" component={SignIn} />
            <Route path ="/test" component={Test} />
            <Route path ="/users" component={Users} />
           
        
        </Switch>
    )
}
export default RoutingPage