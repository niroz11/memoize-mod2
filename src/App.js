import React, { Component } from 'react';
import prototypes from './Prototypedata'; 
import scope from './Scopedata'; 
import combo from './Combodata'; 
import Scopecomp from './Scopecomp';
import Combocomp from './Combocomp';
import Protocomp from './Protocomp';




class App extends Component {
  constructor() {
    super()
    this.state = {
      protoData : prototypes,
      scopeData : scope,
      comboData: combo,
      clickValue:'',
      
      scopeQuestion:0,
      protoQuestion:0,
      comboQuestion:0
      
      
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
    console.log(scopeQuestion,"got it")
    this.setState({
      scopeQuestion
    })
  }

  
  render() {
    const { clickValue, protoData,scopeData,comboData,scopeQuestion,protoQuestion,comboQuestion  } = this.state;
    console.log(clickValue)
    const buttons = () => {
      return(
      <div>
        <button onClick={this.handleClick} name="scope">Scope</button>
        <button onClick={this.handleClick} name="prototypes">Prototypes</button>
        <button onClick={this.handleClick} name="combo">Combo</button>
        </div>)
    }
    
 

    return (
      
      <div className="App">
        <h1>Memoize</h1>
        
        {clickValue === '' &&  buttons()}
        {clickValue === 'scope' && <Scopecomp scopeData={scopeData} scopeQuestion={scopeQuestion} increment={this.incrementScopeQuestion}/>}
        {clickValue === 'combo' && <Combocomp comboData={comboData}/>}
        {clickValue === 'prototypes' && <Protocomp protoData={protoData}/>}
        
        
            
      </div>
    );
  }
}

export default App;
