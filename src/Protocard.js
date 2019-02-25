import React, { Component } from 'react';
class Protocard extends Component {
    constructor(){
        super()
        this.state = {
            clickedAnswer: ''
        }

    }
    handleClick = (event) => {
        
        this.setState({
          clickedAnswer: event.target.innerText
        },() => {
            if(this.state.clickedAnswer === this.props.protoData.answer){
            this.props.updateScore()} 
            this.props.increment()
        })
    }
            

            
    render(){
    const {clickedAnswer} = this.state
    const answer = this.props.protoData.answer
    
    
    
   
    const options =  this.props.protoData.options.map((option) => {
        return (
               <button onClick={this.handleClick}>{option}</button>
            )
        })
    
    
        
        
        return(
            <div className="hey">
            <div className="proto-card">
            <h1>{this.props.protoData.question}</h1>
            {options}
            </div>
           
            
            </div>
        
        )
    }
}
export default Protocard;
                
            
            


   
    