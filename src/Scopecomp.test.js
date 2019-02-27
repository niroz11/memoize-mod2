import React from "react";
import Scopecomp from "./Scopecomp";
import { shallow } from "enzyme";

let mockData = [
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
  },
  {
    question: "What type of prototype method is Array.prototype.push()?",
    options: ["Accessor method", "Mutator method", "Both", "None of these"],
    answer: "Mutator method",
    points: 10,
    key: 3
  }
];
let mockClickValue = "";
let mockQuestion = -1;
let mockIncrementQuestion = jest.fn();
let mockScore = 0;
let mockUpdateScore = jest.fn();
let mockgetMainMenu = jest.fn();
let mockSaveToLocalStorage = jest.fn();
let mockToggleCard = jest.fn();
let mockShowCard = true;


describe("Scopecomp", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Scopecomp
        data={mockData}
        question={mockQuestion}
        increment={mockIncrementQuestion}
        score={mockScore}
        updateScore={mockUpdateScore}
        mainMenu={mockgetMainMenu}
        localStorage={mockSaveToLocalStorage}
        toggleCard={mockToggleCard}
        showCard={mockShowCard}
      />
    );
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // check that app's prop methods are being called here
});
