import { cleanup, render, screen ,act} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { store } from "../Redux/store";
import { Provider } from "react-redux";

import { handleAdd, handleReduce, handleTheme } from "../Redux/action";
import { counterReducer } from "../Redux/counterReducer";
import { themeReducer } from "../Redux/themeReducer";
global.score = 1;

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
afterEach(cleanup);

describe("Redux Intro", () => {
  test("should have basic structure", () => {
    let counterValueComp = screen.getByTestId("counterValue");
    let counterButtonsComp = screen.getByTestId("counterButtons");
    const light_theme_btn = screen.getByText("Switch to Light");
    const dark_theme_btn = screen.getByText("Switch to Dark");
    expect(counterValueComp).toBeInTheDocument();
    expect(counterButtonsComp).toBeInTheDocument();
    expect(light_theme_btn).toBeInTheDocument();
    expect(dark_theme_btn).toBeInTheDocument();
    global.score += 1;
  });

  test("theme and counter actions should return correct objects with type and payload", () => {
    const addActionObj = handleAdd(2);
    const reduceActionObj = handleReduce(3);
    const themeActionObj = handleTheme("light");
    expect(addActionObj).toStrictEqual({ type: "ADD", payload: 2 });
    expect(reduceActionObj).toStrictEqual({ type: "REDUCE", payload: 3 });
    expect(themeActionObj).toStrictEqual({
      type: "CHANGE_THEME",
      payload: "light",
    });

    global.score += 1;
  });

  test(" counterReducer function should return the correct counter state/data for Add", () => {
    const newState = counterReducer(
      { counter: 18 },
      { type: "ADD", payload: 3 }
    );
    expect(newState).toStrictEqual({ counter: 21 });
    global.score += 1;
  });

  test("counterReducer function should return the correct counter state/data for Reduce", () => {
    const newState = counterReducer(
      { counter: 18 },
      { type: "REDUCE", payload: 3 }
    );
    expect(newState).toStrictEqual({ counter: 15 });
    global.score += 1;
  });
  test("the themeReducer function should return  the correct theme state/data for dark theme", () => {
    const newState = themeReducer(
      { theme: "light" },
      { type: "CHANGE_THEME", payload: "dark" }
    );
    expect(newState).toStrictEqual({ theme: "dark" });
    global.score += 1;
  });
  test("the default counter value should be  10", () => {
    const counterValue = screen.getByTestId("counterValue");
    expect(counterValue).toHaveTextContent("10");
    global.score += 1;
  });

  test("the counter value should be updated when clicked on the Add button", () => {
    const counterValue = screen.getByTestId("counterValue");
    const addBtn = screen.getByTestId("addButton");
    act(()=>{

      userEvent.click(addBtn);
    })
    expect(counterValue).toHaveTextContent("11");
    global.score += 1;
  });

  test("the counter should be updateds when clicked on the Reduce button", () => {
    const counterValue = screen.getByTestId("counterValue");
    const reduceBtn = screen.getByTestId("reduceButton");
       act(()=>{
      userEvent.click(reduceBtn);
    })
       act(()=>{
      userEvent.click(reduceBtn);
    })
    expect(counterValue).toHaveTextContent("9");
    global.score += 1;
  });
  test(`the deafult theme should be 'light'
  1.Switch to Light button should be disabled
  2.Switch to Dark should be enabled`, () => {
    const light_theme_btn = screen.getByText("Switch to Light");
    const dark_theme_btn = screen.getByText("Switch to Dark");
    expect(light_theme_btn).toBeDisabled();
    expect(dark_theme_btn).not.toBeDisabled();
       act(()=>{

      userEvent.click(dark_theme_btn);
    })
    expect(dark_theme_btn).toBeDisabled();
    expect(light_theme_btn).not.toBeDisabled();
    global.score += 2;
  });

  test(`the theme should be toggeld  on clicking Switch to Dark and Switch to Light buttons`, () => {
    const light_theme_btn = screen.getByText("Switch to Light");
    const dark_theme_btn = screen.getByText("Switch to Dark");
   act(()=>{
      userEvent.click(dark_theme_btn);
    })   
     const counterValue = screen.getByTestId("counter");
    expect(counterValue).toHaveClass("dark_theme");
   act(()=>{
      userEvent.click(light_theme_btn);
    })   
     expect(counterValue).toHaveClass("light_theme");
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
