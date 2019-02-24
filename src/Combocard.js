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
            if(this.state.clickedAnswer === this.props.comboData.answer){
            this.props.updateScore()} 
            this.props.increment()
        })
    }
            

            
    render(){
    const {clickedAnswer} = this.state
    const answer = this.props.comboData.answer
    
    
    
   
    const options =  this.props.comboData.options.map((option) => {
        return (
               <button onClick={this.handleClick}>{option}</button>
            )
        })
    
    
        
        
        return(
            <div>
            <h1>{this.props.comboData.question}</h1>
            {options}
           
            
            </div>
        
        )
    }
}
export default Combocard;
                
            
            


   
    