import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab : 0 }
    }

    onchangeHandler =(tabId) => {
            this.setState({
                activeTab:tabId
            })
    }

    toggleCategories =() => {
        if (this.state.activeTab === 0){
            return(
                <div>This is react</div>
            )
        }
        else if (this.state.activeTab === 1){
            return(
                <div>This is angular</div>
            )
        }
        else if (this.state.activeTab === 2){
            return(
                <div>This is django</div>
            )
        } 
        else if (this.state.activeTab === 3){
            return(
                <div>This is Python</div>
            )
        }
    }
    render() { 
        return ( 
            <div className='category-tab'>
                <Tabs activeTab={this.activeTab} onChange={this.onchangeHandler} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Django</Tab>
                    <Tab>Python</Tab> 
                </Tabs>
                <section className='project-grid'>
                {this.toggleCategories()}
                </section>

            </div>
         );
    }
}
 
export default Project;