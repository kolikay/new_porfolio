import React, { Component, Fragment} from 'react';


import '../App.css';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div className='homepage' >
                    
                        <div className='container-fluid'>
                            <div className='row'>
                                    <div className='col-12'>
                                        <h2>Welcome to our page</h2>
                                        <h4>A Webpage that showcases devolopers portfolios </h4>
                                        {/* <div className='color-box'>Read More         ></div> */}
                                        <div className='btn btn-lg btn-secondary'>Read More         ></div>
                                    </div>
                                </div>
                            </div>
                    
                    </div>
            
        );
    }
}
 
export default HomePage;