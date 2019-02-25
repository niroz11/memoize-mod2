import React, { Component } from 'react';
import Protocard from './Protocard';
import Instruction from './Instruction';
import App from './App'

class protocomp extends Component {
    
    constructor(){
        super()
        this.state = {
            clickedAnswer: ''
        }
    }
    render(){
        const {protoData,protoQuestion,score} = this.props
        
            
        return (<div className="proto">
            {protoQuestion === -1 &&  <Instruction increment={this.props.increment}/>}
            {protoQuestion > -1 && protoQuestion < 10 && <Protocard protoData={protoData[protoQuestion]} increment={this.props.increment} score={score} updateScore={this.props.updateScore}/> }
            {protoQuestion === 10 && <p>{score}</p> && <App/> }
        </div>)
    }
    
    
}
export default protocomp;