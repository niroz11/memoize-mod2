import React, { Component } from 'react';
import Combocard from './Combocard';
import Instruction from './Instruction';
import App from './App'


class Combocomp extends Component {
    constructor(){
        super()
        this.state = {
            clickedAnswer: ''
        }
    }


    render(){
        const {comboData,comboQuestion,score} = this.props
           return (<div>
            {comboQuestion === -1 &&  <Instruction increment={this.props.increment}/>}
            {comboQuestion > -1 && comboQuestion < 10 && <Combocard comboData={comboData[comboQuestion]} increment={this.props.increment} score={score} updateScore={this.props.updateScore}/> }
            {comboQuestion === 10 && <p>{score}</p> && <App/> }
            </div>)
        
    }
}
export default Combocomp;