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
    let wrongAnswers = JSON.parse(localStorage.getItem("wrong")) || [];
    // debugger;
    if (isCorrect) {
      wrongAnswers = wrongAnswers.filter(answer => {
        return answer.answer !== this.props.question.answer;
      });
      this.props.updateScore(); //come bakck to this
    } else {
      const hasAnswer = wrongAnswers.some(
        answer => answer.answer === this.props.question.answer
      );
      if (!hasAnswer) {
        wrongAnswers.push(this.props.question);
      }
    }

    this.props.increment();
    localStorage.setItem("wrong", JSON.stringify(wrongAnswers));
    this.setState({
      clickedAnswer: clickedAnswer
    });
  };

  render() {
    const { clickedAnswer } = this.state;
    const answer = this.props.question.answer;

    // console.log(this.props.question, "heyy");
    const options = this.props.question.options.map(option => {
      return <button onClick={this.handleClick}>{option}</button>;
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
