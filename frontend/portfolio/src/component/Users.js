import React, { Component} from 'react';
import axios from 'axios';
import '../App.css';
import {Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'
import { Link } from 'react-router-dom'



class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading : false,
            users : [],
            error : '',
           
         }
    }
    

    
    componentDidMount() {
        this.setState({loading : true})
        axios.get('http://127.0.0.1:8000/users/')
        .then( responce => {console.log(responce.data)
        this.setState({ 
            loading : false,
            users: responce.data})
        
        
        })
        .catch(error => {console.log(error)
        this.setState({error : <h4>server timed out while loading</h4>})
        })
        }
        

    render() { 
        const { users, loading, error} = this.state
        const text = loading && !error ? <p>Please wait while file is loaded from the server.......</p>: null
        
        return (
            <div className='container'>
                    <h3>{text}</h3>



                    <div className='row'>
                        <div className='col user' >


                            {users ? users.map(user => 
                            
                            <Card className='card' key={user.id} shadow={5}>
                                <Link to={`/users/${user.id}`}>
                                    <CardTitle><img src={user.image} style={{ width:"100px", height:'100px'}}/>{user.username}</CardTitle>
                                    
                                    <CardText>
                                        {user.name}
                                        {user.email}
                                        {user.address}
                                        {user.phone}
                                        {user.email}
                                    </CardText>
                                    <CardActions border>
                                        
                                    </CardActions> 
                                </Link> 
                            </Card>)
                            :null}
                        </div>
                    </div>
                    {/* {posts ? posts.map(post => <ul key={post.id}><b>username</b> {  post.username}  <b>fullname</b> {  post.name} {post.title} </ul>):null} */}

                    <p>{error}</p>
            </div>);
    }
}
 
export default Homepage ;

