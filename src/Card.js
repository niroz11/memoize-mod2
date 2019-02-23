import React, { Component } from 'react';
class Card extends Component {
    constructor(){
        super()

    }
    
    render(){
        
      const option =  this.props.scopeData.options.map((option) => {
            return (
               <button>{option}</button>
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