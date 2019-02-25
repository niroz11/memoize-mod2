import React, { Component } from 'react';
class Card extends Component {
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
            if(this.state.clickedAnswer === this.props.scopeData.answer){
            this.props.updateScore()} 
            this.props.increment()
        })
    }
            

            
    render(){
    const {clickedAnswer} = this.state
    const answer = this.props.scopeData.answer
    
    
    
   
    const options =  this.props.scopeData.options.map((option) => {
        return (
               <button onClick={this.handleClick}>{option}</button>
            )
        })
    
    
        
        
        return(
            <div className="hey">
            <div className="proto-card">
            <h1>{this.props.scopeData.question}</h1>
            <div className="card-buttons">
            {options}
            </div>
            </div>
           
            
            </div>
        
        )
    }
}
export default Card;
                
            
            


   
    