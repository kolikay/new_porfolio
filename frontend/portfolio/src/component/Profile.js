import React from 'react';
import { Grid, Cell } from 'react-mdl';


const Profile = () => {
    return ( <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='profile-left'>
                    <Cell col={6}> 
                    <img 
                    src='https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg'
                    alt='avatar'
                    className='profile-image'
                    />
                    <div className='banner-text'>
                    <h1>Full Stack Developer</h1>
                    
                    </div>
                    
                    </Cell>
                    <Cell coll={6}>
                        <div className="profile-right">
                           <h4 >About Me</h4>
                           <p>
                           The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem 

                           </p>
                        </div>

                    </Cell>
                </Grid>
                <div className = 'banner-text1'>
                        <p>HTML/CSS | JAVASCRIPT | REACT | PYTHON | DJANGO | REACT NATIVE | NODE JS</p>

                        <div className='social-link'>
                        <a href="https://www.linkedin.com/in/kolikay/" rel='noopener noreferrer' target='_blank'>
                        <i className='fa fa-linkedin-square' aria-hidden='true'/>
                        </a>

                        <a href="http://github.com/kolikay" rel='noopener noreferrer' target='_blank'>
                        <i className= "fa fa-github-square"  aria-hidden='true'/>
                        </a>

                        <a href="https://www.freecodecamp.org/kolikay" rel='noopener noreferrer' target='_blank'>
                        <i className="fa fa-free-code-camp"  aria-hidden='true'/>
                        </a>

                       
                        </div>

                      
                        
                    </div>
                    
                
            </div> );
}
 
export default Profile;