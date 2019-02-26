import React from "react";
import Instruction from "./Instruction";
import { shallow } from "enzyme";

let mockIncrement = jest.fn();
let mockToggleCard = jest.fn();
let mockShowCard = jest.fn();

describe("Instruction", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Instruction
        increment={mockIncrement}
        toggleCard={mockToggleCard}
        showCard={mockShowCard}
      />
    );
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({ data: [], score: 0,clickValue: "",question: -1,showCard: true  });
  });
  it("should invoke toggle method", () => {
    wrapper.find(".toggle-button").simulate("click");
    expect(mockToggleCard).toHaveBeenCalled();
  });
});
