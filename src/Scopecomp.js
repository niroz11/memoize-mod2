import React, { Component } from 'react';
import Card from './Card';
import Instruction from './Instruction'


class Scopecomp extends Component {
    
    constructor(){
        super()
        this.state = {
            clickedAnswer: ''
        }
    }

    
   


    render(){
        const {scopeData,scopeQuestion} = this.props
        
            
        return (<div>
            {scopeQuestion === 0 &&  <Instruction increment={this.props.increment}/>}
            {scopeQuestion > 0 && <Card scopeData={scopeData[scopeQuestion-1]}/> }
            {/* <h3>I am scope comp</h3> */}
        </div>)
    }
}

export default Scopecomp;