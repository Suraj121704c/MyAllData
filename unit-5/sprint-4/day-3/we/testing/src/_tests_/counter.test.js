import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Components/Counter";
// import { userEvent } from "@testing-library/user-event";

describe("Test the counter Component", () => {
  it("Counter should render", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    const button = screen.getByTestId("add-button");
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("It sholud have initial value 0", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    // screen.debug();
    expect(text).toHaveTextContent("Counter : 0");
  });

  it("On clicking the add button count sholud increase", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    expect(text).toHaveTextContent("Counter : 0");
    const addBtn = screen.getByTestId("add-button");
    fireEvent.click(addBtn);

    expect(text).toHaveTextContent("Counter : 1");
  });
});
