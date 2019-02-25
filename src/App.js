import React, { Component } from 'react';
import prototypes from './Prototypedata'; 
import scope from './Scopedata'; 
import combo from './Combodata'; 
import Scopecomp from './Scopecomp';
import Combocomp from './Combocomp';
import Protocomp from './Protocomp';
// import './App.scss';




class App extends Component {
  constructor() {
    super()
    this.state = {
      protoData : prototypes,
      scopeData : scope,
      comboData: combo,
      score: 0,
      clickValue:'',
      scopeQuestion:-1,
      protoQuestion:-1,
      comboQuestion:-1,
      scopeWrongAnswer:[]
    }
  }
      
  handleClick = (event) => {
    console.log(event.target.name, "heyy")
    this.setState({
      clickValue: event.target.name
    })
  }
  
  incrementScopeQuestion = () => {
    let scopeQuestion = this.state.scopeQuestion
    scopeQuestion++
    
    this.setState({
      scopeQuestion
    })
  }
  getMainMenu = () => {
    
    
    this.setState({
      clickValue:'',
      scopeQuestion: -1,
      protoQuestion:-1,
      comboQuestion:-1

    })
  }
  incrementProtoQuestion = () => {
    let protoQuestion = this.state.protoQuestion
    protoQuestion++
    
    this.setState({
      protoQuestion
    })
  }
  incrementComboQuestion = () => {
    let comboQuestion = this.state.comboQuestion
    comboQuestion++
    
    this.setState({
      comboQuestion
    })
  }
  updateScore = () => {
    
      this.setState({
        score: this.state.score +10
      })
    
  }
      

  
  render() {
    const { clickValue, protoData,scopeData,comboData,scopeQuestion,protoQuestion,comboQuestion  } = this.state;
    // console.log(clickValue)
    const buttons = () => {
      return(
      <div className="buttons">
        <button onClick={this.handleClick} name="scope">Scope</button>
        <button onClick={this.handleClick} name="prototypes">Prototypes</button>
        <button onClick={this.handleClick} name="combo">Combo</button>
        </div>)
    }
    return (
      
      <div className="entire-page">
      <div className="welcome-page">
        <h1 className="hello">Memoize</h1>
        <p className="score">{this.state.score}</p>
        
        {clickValue === '' &&  buttons()}
        <div className="question-section">
        {clickValue === 'scope' && <Scopecomp scopeData={scopeData} 
                                      scopeQuestion={scopeQuestion} 
                                      increment={this.incrementScopeQuestion} 
                                      score={this.state.score} 
                                      updateScore={this.updateScore} 
                                      mainMenu={this.getMainMenu} 
                                      wrongAnswer={this.state.scopeWrongAnswer}
                                   
                                   />}
        {clickValue === 'combo' && <Combocomp comboData={comboData} comboQuestion={comboQuestion} increment={this.incrementComboQuestion} score={this.state.score} updateScore={this.updateScore} mainMenu={this.getMainMenu}/>}
        {clickValue === 'prototypes' && <Protocomp protoData={protoData} protoQuestion={protoQuestion} increment={this.incrementProtoQuestion} score={this.state.score} updateScore={this.updateScore} mainMenu={this.getMainMenu}/>}
        </div>
        </div>
        
        
            
      </div>
    )
  }
}

export default App;
 


