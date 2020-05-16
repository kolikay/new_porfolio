import React from 'react';

const HomepageDetail = () => {
    return ( 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <h4 style={{paddingTop:'100px', 
                    color:'rgb(226, 197, 29)',
                    fontSize: '20px',
                    lineHeight: '26px',
                    fontWeight: '900',
                    letterSpacing: '0px',
                    fontFamily: 'cursive',}}
                    > Our Specification</h4>

                    <h2>Programming</h2>
                    <p>Computer programming is the process of designing and building 
                        an executable computer program to accomplish a specific computing result. 
                        Programming involves tasks such as: analysis, generating algorithms, 
                        profiling algorithms' accuracy and resource consumption, and the 
                        implementation of algorithms in a chosen programming language 
                        (commonly referred to as coding).</p>
                </div>
                <div className='col-sm-12 col-md-3 ' style={{paddingTop:'200px', paddingRight:'50px'}}>
                <i class="fa fa-code" aria-hidden="true" style={{color:'rgb(226, 197, 29)', fontSize:'40px'}}></i>
                    <h4 > Web App Development</h4>
                    <p>Computer programming is the process of designing and building 
                        an executable computer program to accomplish a specific computing result. 
                        Programming involves tasks such as: analysis, generating algorithms, 
                        profiling algorithms' accuracy and resource consumption, and the 
                        implementation of algorithms in a chosen programming language 
                        (commonly referred to as coding).</p>
                </div>
                <div className='col-sm-12 col-md-3' style={{paddingTop:'200px'}}>
                <i className="fab fa-dev"style={{color:'rgb(226, 197, 29)', fontSize:'40px'}}></i>
                    <h4 >Mobile App Development</h4>
                </div>

            </div>
            <div className='row' style={{backgroundColor:'black', 
                                 color:'rgb(226, 197, 29)',
                                 paddingTop:'70px',
                                 }}>
                <div className='col-3' >
                    <h5>Address</h5>
                </div> 
                
                <div className='col-3' >
                    <h5>Email</h5>
                </div> 
                
                <div className='col-3' >
                    <h5>Call Us</h5>
                </div> 
                
                <div className='col-3' >
                    <h5>Address</h5>
                </div>

            </div>
           
        </div>
     );
}
 
export default HomepageDetail;