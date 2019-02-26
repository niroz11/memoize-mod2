import React, { Component } from "react";
import Card from "./Card";
import Instruction from "./Instruction";

class Scopecomp extends Component {
  render() {
    const { data, question, score } = this.props;

    
    return (
      <div className="proto">
        {question === -1 && (
          <Instruction
            increment={this.props.increment}
            toggleCard={this.props.toggleCard}
            showCard={this.props.showCard}
          />
        )}
        {question > -1 && question < data.length && (
          <Card
            question={data[question]}
            increment={this.props.increment}
            score={score}
            updateScore={this.props.updateScore}
            saveLocalStorage={this.props.localStorage}
          />
        )}

        {question > data.length - 1 && <p>{score}</p> && this.props.mainMenu()}
      </div>
    );
  }
}

export default Scopecomp;
