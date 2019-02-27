import React, { Component } from "react";
import Scopecomp from "./Scopecomp.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      score: 0,
      clickValue: "",
      question: -1,
      showCard: true
    };
  }
  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/nirajData")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.nirajData
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  handleClick = event => {
    let question = this.state.question;
    question++;
    this.setState({
      clickValue: event.target.name,
      question
    });
  };

  incrementQuestion = () => {
    let newQuestion = this.state.question;
    newQuestion++;

    this.setState({
      question: newQuestion
    });
  };
  
  getMainMenu = () => {
    this.setState({
      clickValue: "",
      question: -1
    });
  };

  updateScore = () => {
    this.setState({
      score: this.state.score + 10
    });
  };
  toggleCard = () => {
    this.setState({
      showCard: !this.state.showCard
    });
  };

  render() {
    const incorrect = JSON.parse(localStorage.getItem("wrong")) || [];

    const { clickValue, data } = this.state;

    const buttons = () => {
      return (
        <div className="buttons">
          <button
            className="quiz-button"
            onClick={this.handleClick}
            name="quiz"
          >
            Take the quiz
          </button>
          <button
            className="redo-button"
            onClick={this.handleClick}
            name="redo"
          >
            Try again
          </button>
        </div>
      );
    };
    return (
      <div className="entire-page">
        <div className="welcome-page">
          <p className="title">JS Fun</p>

          <p className="score">{this.state.score}</p>

          {clickValue === "" && buttons()}
          <div className="question-section">
            <Scopecomp
              data={clickValue === "quiz" ? data : incorrect}
              question={this.state.question}
              increment={this.incrementQuestion}
              score={this.state.score}
              updateScore={this.updateScore}
              mainMenu={this.getMainMenu}
              localStorage={this.saveToLocalStorage}
              toggleCard={this.toggleCard}
              showCard={this.state.showCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
