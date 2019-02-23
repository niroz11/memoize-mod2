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
            {scopeQuestion === -1 &&  <Instruction increment={this.props.increment}/>}
            {scopeQuestion > -1 && scopeQuestion < 10 && <Card scopeData={scopeData[scopeQuestion]} increment={this.props.increment} score={score} updateScore={this.props.updateScore}/> }
            {scopeQuestion === 10 &&  <p> {score} </p>}
        </div>)
    }
}

export default Scopecomp;