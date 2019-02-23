import React, { Component } from 'react';
class Instruction extends Component {
    
    constructor(){
        super()
        this.state = {
            clickedAnswer: '',
            button: ''
        }
    }

    handleClick(event){
        this.setState({
            button: event.target.name
        })
    }
    


    render(){
        
            
        return (<div>
            <h3>I am instruction</h3>
            <button onClick={this.props.increment}>Lets Start</button>
        </div>)
    }
}

export default Instruction;