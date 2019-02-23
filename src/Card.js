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
        })
      }
    
    render(){
        const answer = this.props.scopeData.answer
        console.log(answer, "answer")
        
      const option =  this.props.scopeData.options.map((option) => {
            return (
               <button onClick={this.handleClick}>{option}</button>
            )
        })
        return(
            <div>
            <h1>{this.props.scopeData.question}</h1>
            {option}
            </div>
        
        )
    }
}
export default Card;