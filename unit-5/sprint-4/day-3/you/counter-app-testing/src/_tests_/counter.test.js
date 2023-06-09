import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../Components/Counter";

describe("Test the Counter", () => {
  it("Counter should render", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    const button1 = screen.getByTestId("add-button");
    const button2 = screen.getByTestId("reduce-button");
    expect(text).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
  it("It should have Value", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    expect(text).toHaveTextContent("Counter : 0");
  });
  it("On clicking the add button1 count should increase", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    expect(text).toHaveTextContent("Counter : 0");
    const addBtn = screen.getByTestId("add-button");
    fireEvent.click(addBtn);
    expect(text).toHaveTextContent("Counter : 5");
  });
  it("On clicking the add button2 count should decrease", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    expect(text).toHaveTextContent("Counter : 0");
    const reduceButton = screen.getByTestId("reduce-button");
    fireEvent.click(reduceButton);
    expect(text).toHaveTextContent("Counter : -5");
  });
  it("Should render Counter",()=>{
    render(<Counter />)
  })
});
