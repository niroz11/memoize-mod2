import React from "react";
import Scopecomp from "./Scopecomp";
import { shallow } from "enzyme";



describe("Scopecomp", () => {
  

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
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
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  

  
});

