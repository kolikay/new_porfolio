import React, { Component} from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Nav from './component/Nav'
import RoutingPage from './component/RoutingPage';
import './App.css';




class App extends Component {
  constructor(){
    super()
          
    }
    render (){
            return (
                  <div >
                  <Nav />
                  <RoutingPage />
                
                  </div>

            )
          }
        }

export default App;





// import { Layout, Header, Drawer, Content, Navigation} from 'react-mdl'
//       <div className="demo-big-content">
//       <Layout>
//           <Header title="Title" scroll>
//               <Navigation>
//                   <a href="#">Link</a>
//                   <a href="#">Link</a>
//                   <a href="#">Link</a>
//                   <a href="#">Link</a>
//               </Navigation>
//           </Header>
//           <Drawer title="Title">
//               <Navigation>
//                   <a href="#">Link</a>
//                   <a href="#">Link</a>
//                   <a href="#">Link</a>
//                   <a href="#">Link</a>
//               </Navigation>
//           </Drawer>
//           <Content>
//               <RoutingPage />
//           </Content>
//       </Layout>
//   </div>