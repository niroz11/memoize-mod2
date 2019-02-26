import React from "react";
import Scopecomp from "./Scopecomp";
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
  
  

  
});

