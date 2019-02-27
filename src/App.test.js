import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      data: [],
      score: 0,
      clickValue: "",
      question: -1,
      showCard: true
    });
  });
  it("should increase question count", () => {
    expect(wrapper.state()).toEqual({
      data: [],
      score: 0,
      clickValue: "",
      question: -1,
      showCard: true
    });
    wrapper
      .find(".quiz-button")
      .simulate("click", { target: { clickValue: "scope", question: 0 } });
    expect(wrapper.state("question")).toEqual(0);
  });
  it("should increase question count", () => {
    expect(wrapper.state()).toEqual({
      data: [],
      score: 0,
      clickValue: "",
      question: -1,
      showCard: true
    });
    wrapper
      .find(".redo-button")
      .simulate("click", { target: { clickValue: "scope", question: 0 } });
    expect(wrapper.state("question")).toEqual(0);
  });

  it("incrementQuestion should change state of the question when invoked", () => {
    wrapper.instance().incrementQuestion();
    expect(wrapper.state("question")).toEqual(0);
  });

  it("It should change state when getMainMenu is invoked", () => {
    wrapper.setState({ clickValue: "hey", question: 2 });
    expect(wrapper.state("clickValue")).toEqual("hey");
    expect(wrapper.state("question")).toEqual(2);
    wrapper.instance().getMainMenu();
    expect(wrapper.state("clickValue")).toEqual("");
    expect(wrapper.state("question")).toEqual(-1);
  });

  it("It should change state when updateScore is invoked", () => {
    expect(wrapper.state("score")).toEqual(0);
    wrapper.instance().updateScore();
    expect(wrapper.state("score")).toEqual(10);
  })

  it("It should change state when toggleCard is invoked", () => {
    expect(wrapper.state("showCard")).toEqual(true);
    wrapper.instance().toggleCard();
    expect(wrapper.state("showCard")).toEqual(false);
  })
});
