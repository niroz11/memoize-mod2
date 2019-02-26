import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({ data: [], score: 0,clickValue: "",question: -1,showCard: true  });
  });
  it("should increase question count", () => {
    expect(wrapper.state()).toEqual({ data: [], score: 0,clickValue: "",question: -1,showCard: true  });
    wrapper.find(".quiz-button").simulate("click", { target: { clickValue: "scope", question: 0}});
    expect(wrapper.state("question")).toEqual(0);
  });
  it("should increase question count", () => {
    expect(wrapper.state()).toEqual({ data: [], score: 0,clickValue: "",question: -1,showCard: true  });
    wrapper.find(".redo-button").simulate("click", { target: { clickValue: "scope", question: 0}});
    expect(wrapper.state("question")).toEqual(0);
  });
  

  
});

