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
    
    
    
   
    
    
    
        
        
        return(
            <div>
            <h1>{this.props.protoData.question}</h1>
            {options}
           
            
            </div>
        
        )
    }
}
export default Protocard;
                
            
            


   
    