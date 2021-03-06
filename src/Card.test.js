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
let mockScore = 1;
let mockUpdateScore = jest.fn();
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
    const mockEvent = { target: { innerText: 'number of elements in array' } }
    wrapper.find(".create-button0").simulate("click", mockEvent);
    expect(mockUpdateScore).toHaveBeenCalled();
  });
  
  it("should call increment if the wrong answer is clicked", () => {
    const mockEvent = { target: { innerText: 'wrong answer' } }
    wrapper.find(".create-button0").simulate("click", mockEvent);
    expect(mockIncrement).toHaveBeenCalled();
  });

  

  



});
