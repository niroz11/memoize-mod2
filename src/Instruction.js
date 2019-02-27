import React, { Component } from "react";
class Instruction extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     clickedAnswer: "",
  //     // button: ""
  //   };
  // }

  // handleClick(event) {
  //   this.setState({
  //     button: event.target.name
  //   });
  // }

  render() {
    if (this.props.showCard) {
      return (
        <div className="instruction">
          <div className="inst-card">
            <div className="rules-text">
              <p> * Play it cool! No cheating! :) </p>
              <p> * Each question carries 10 points</p>
              <p> * You may come back to solve answers you got it wrong</p>
              <button className="toggle-button" onClick={this.props.toggleCard}>
                Go
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Instruction;
