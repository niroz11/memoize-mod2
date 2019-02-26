import React, { Component } from "react";
class Card extends Component {
  constructor() {
    super();
    this.state = {
      clickedAnswer: ""
    };
  }
  handleClick = event => {
    const clickedAnswer = event.target.innerText;
    const isCorrect = clickedAnswer === this.props.question.answer;
    let wrongQuestions = JSON.parse(localStorage.getItem("wrong")) || [];
    // debugger;
    if (isCorrect) {
      wrongQuestions = wrongQuestions.filter(question => {
        return question.answer !== this.props.question.answer;
      });
      this.props.updateScore(); //come bakck to this
    } else {
      const hasAnswer = wrongQuestions.some(
        question => question.answer === this.props.question.answer
      );
      if (!hasAnswer) {
        wrongQuestions.push(this.props.question);
      }
    }

    this.props.increment();
    localStorage.setItem("wrong", JSON.stringify(wrongQuestions));
    this.setState({
      clickedAnswer: clickedAnswer
    });
  };

  render() {
   
    const options = this.props.question.options.map((option, index) => {
      return <button className={"create-button" + index} onClick={this.handleClick} key={index}>{option}</button>;
    });

    return (
      <div className="hey">
        <div className="proto-card">
          <h1>{this.props.question.question}</h1>
          <div className="card-buttons">{options}</div>
        </div>
      </div>
    );
  }
}
export default Card;
