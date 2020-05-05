import React, {Component} from 'react';

class Test extends Component {
    state = {  }
    render() { 
        return ( 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <div class="alert alert-primary" role="alert" style={{minHeight: '80px'}}>LEFT</div>
                    <img 
                    src='https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg'
                    alt='avatar'
                    className='profile-image-test'
                    />
                </div> 
                <div className='col-6'>
                    <div class="alert alert-primary" role="alert" style={{minHeight: '100px'}}>RIGHT</div>
                    <div className="profile-right">
                           <h4 >About Me</h4>
                           <p>
                           The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 

                           </p>
                    </div> 
                </div>               
            </div>
            <div className='row'>
                <div className='col-12 col-lg-6' >
                    <div className='banner-text-test'>
                        <h1>Full Stack Developer</h1>
                    </div>
                    <div class="alert alert-secondary" role="alert" style={{minHeight: '800px'}}>where</div> 
                      
                </div>                
            </div>
        </div>
            
         );
    }
}
 
export default Test;