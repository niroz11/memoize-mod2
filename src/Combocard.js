import React, { Component } from 'react';
class Combocard extends Component {
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
            
        
        )
    }
}
export default Protocard;
                
            
            


   
    