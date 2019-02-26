import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("Scopecomp", () => {
  

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Scopecomp />
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({ data: [], score: 0,clickValue: "",question: -1,showCard: true  });
  });
  

  
});

