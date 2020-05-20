import React from 'react';
import {ProgressBar} from'react-mdl'

const Profile = () => {
    return ( 
            <div className='container-fluid'>
                <div className='row'>
                            <div className='col profile-top'>
                                <h1  style={{ margin:'0px',fontFamily: 'cursive'}}>Kolawole Fabusuyi</h1>
                                    <h4 style={{color:'white', marginTop:'0px',fontFamily: 'cursive'}}>Full Stack Web Developer</h4>
                            </div>
                </div>
                <div className='row container' style={{paddingTop:'10%'}}>
                    <div className='col'>
                        <p style={{ color:'rgb(226, 197, 29)',fontFamily: 'cursive', fontWeight:'bold', fontSize:'20px'}}>Few Words</p>
                        <h3 style={{fontSize:'40px', fontWeight:'bolder', fontFamily:'cursive'}}>About Me</h3>
                        <p style={{color:'grey'}}>
                            The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                           "Sed ut perspiciatis unde omnis iste natus error sit voluptatem The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                         
                        </p>
                    </div>
                    <div className='col'>
                        <img style={{height:'600px', width:'600px', paddingLeft:'50px', paddingBottom:'80px', paddingTop:'40px'}}
                        src="https://i.imgur.com/McUrjwj.jpg"
                        />

                    </div>
                </div>
                <div className='row' >
                    <div className='col'>  
                        <img src="https://i.imgur.com/2zXVvU6.png"/>                      
                                            
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Quality</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div> 
                    <div className='col'>
                        <img src="https://i.imgur.com/HpqP9AH.png"/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Professionalism</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div> 
                    <div className='col'>
                        <img style={{color:'rgb(226, 197, 29)'}} src="https://i.imgur.com/5tmRRWH.png"/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Experience</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div> 
                    <div className='col'>
                        <img src="https://i.imgur.com/ydG3ZSv.png"/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Honors</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>

                </div>
           
            </div> 
    );
}
 
export default Profile;





// import React from 'react';




// const Profile = () => {
//     return (<div className='profile'>
//     <div className='container-fluid'>
//        <div class="row">
//             <div class="col-sm-6">
//                 <div class="card">
//                     <div class="card-body">
//                             <img 
//                             src='https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg'
//                             alt='avatar'
//                             className='profile-image'
//                             />
//                             <div className='stack'><h1>Full Stack Developer</h1></div>
                           
//                     </div>
//                 </div>
//             </div>
//             <div class="col-sm-6">
//                 <div class="card">
//                 <div class="card-body">
//                     <div className="about-me">
//                         <h4 >About Me</h4>
//                         <p>
//                         The standard Lorem Ipsum passage, used since the 1500s
//                             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

//                             Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
//                             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 

//                         </p>
//                     </div> 
//                 </div>
//                 </div>
//             </div>
//         </div>
//         <div className='row'>
//             <div className='col'>
//                 <div className = 'banner-text'>
//                     <h4>HTML/CSS | JAVASCRIPT | REACT | PYTHON | DJANGO | REACT NATIVE </h4>

//                         <div className='social-link'>
//                             <a href="https://www.linkedin.com/in/kolikay/" rel='noopener noreferrer' target='_blank'>
//                             <i className='fa fa-linkedin-square' aria-hidden='true'/>
//                             </a>

//                             <a href="http://github.com/kolikay" rel='noopener noreferrer' target='_blank'>
//                             <i className= "fa fa-github-square"  aria-hidden='true'/>
//                             </a>

//                             <a href="https://www.freecodecamp.org/kolikay" rel='noopener noreferrer' target='_blank'>
//                             <i className="fa fa-free-code-camp"  aria-hidden='true'/>
//                             </a>

                    
//                         </div>
//                 </div>

//             </div>

//         </div>
        
//     </div>
// </div> 
// );
// }
 
// export default Profile;