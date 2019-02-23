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
        const {scopeData,scopeQuestion,score} = this.props
        
            
        return (<div>
            {scopeQuestion === 0 &&  <Instruction increment={this.props.increment}/>}
            {scopeQuestion > 0 && <Card scopeData={scopeData[scopeQuestion-1]} increment={this.props.increment} score={score}/> }
            
        </div>)
    }
}

export default Scopecomp;