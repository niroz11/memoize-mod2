import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

let mockQuestion = {
  question: "What does Array.prototype.length returns?",
  options: [
    "length of an array",
    "length of string",
    "length of an object",
    "number of elements in array"
  ],
  answer: "number of elements in array",
  points: 10,
  key: 1
};

let mockIncrement = jest.fn();
let mockUpdateScore = jest.fn();
let mockScore = 1;

let mockSaveLocalStorage = [
  {
    question: "What does Array.prototype.length returns?",
    options: [
      "length of an array",
      "length of string",
      "length of an object",
      "number of elements in array"
    ],
    answer: "number of elements in array",
    points: 10,
    key: 1
  },
  {
    question: "What does Array.prototype.pop() remove?",
    options: [
      "first element of an array",
      "last element of an array",
      "middle element of an array",
      "first and last element of an array"
    ],
    answer: "last element of an array",
    points: 10,
    key: 2
  }
];

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        question={mockQuestion}
        increment={mockIncrement}
        score={mockScore}
        updateScore={mockUpdateScore}
        saveLocalStorage={mockSaveLocalStorage}
      />
    );
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call updateScore if the right answer is clicked", () => {
    wrapper
      .find(".create-button0")
      .simulate("click", {
        target: { innerText: "number of elements in array" }
      });
    expect(mockUpdateScore).toHaveBeenCalled();
  });

  it.skip("should call update local storage if the wrong answer is clicked", () => {
    localStorage.setItem = jest.fn();
    wrapper
      .find(".create-button0")
      .simulate("click", { target: { innerText: "this is a test" } });
    expect(localStorage.setItem).toHaveBeenCalledWith();
  });

  it("should increment question when answer is clicked", () => {
    wrapper
      .find(".create-button0")
      .simulate("click", {
        target: { innerText: "number of elements in array" }
      });
    expect(mockIncrement).toHaveBeenCalled();
  });

  it("should set state when answer is clicked", () => {
    expect(wrapper.state("clickedAnswer")).toEqual("");
    wrapper
      .find(".create-button0")
      .simulate("click", {
        target: { innerText: "number of elements in array" }
      });
    expect(wrapper.state("clickedAnswer")).toEqual(
      "number of elements in array"
    );
  });

  
});
