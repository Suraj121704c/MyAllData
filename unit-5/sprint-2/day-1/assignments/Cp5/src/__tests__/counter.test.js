import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Counter from "../Components/Counter";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { reducer } from "../Redux/reducer";

beforeAll(() => {
  global.score = 1;
  console.log("Rest score to: 1");
});

describe("Redux Intro", () => {
  test("If CounterValue component and CounterButton components are present inside Counter component", () => {
    render(<Counter />);
    let counterValueComp = screen.getByTestId("counterValue");
    let counterButtonsComp = screen.getByTestId("counterButtons");
    expect(counterValueComp).toBeInTheDocument();
    expect(counterButtonsComp).toBeInTheDocument();
    global.score += 1;
  });

  test("If actions are returning the correct action object", () => {
    const addActionObj = handleAddActionObj(2);
    const reduceActionObj = handleReduceActionObj(3);
    expect(addActionObj).toStrictEqual({ type: "ADD", payload: 2 });
    expect(reduceActionObj).toStrictEqual({ type: "REDUCE", payload: 3 });
    global.score += 1;
  });

  test("If the reducer func is returning the correct counter state/data for Add", () => {
    const newState = reducer({ counter: 18 }, { type: "ADD", payload: 3 });
    expect(newState).toStrictEqual({ counter: 21 });
    global.score += 1;
  });

  test("If the reducer func is returning the correct counter state/data for Reduce", () => {
    const newState = reducer({ counter: 18 }, { type: "REDUCE", payload: 3 });
    expect(newState).toStrictEqual({ counter: 15 });
    global.score += 1;
  });

  test("If the default value of 10 is showing in the UI", () => {
    render(<App />);
    const counterValue = screen.getByTestId("counterValue");
    expect(counterValue).toHaveTextContent("10");
    global.score += 1;
  });

  test("If the counter value on the UI increases, when clicked on the Add button", () => {
    render(<Counter />);
    const counterValue = screen.getByTestId("counterValue");
    const addBtn = screen.getByTestId("addButton");
    userEvent.click(addBtn);
    expect(counterValue).toHaveTextContent("11");
    global.score += 1;
  });

  test("If the counter value on the UI decreases, when clicked on the Reduce button", () => {
    render(<Counter />);
    const counterValue = screen.getByTestId("counterValue");
    const reduceBtn = screen.getByTestId("reduceButton");
    userEvent.click(reduceBtn);
    userEvent.click(reduceBtn);
    expect(counterValue).toHaveTextContent("9");
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
