import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Components/Button";
import App from "../App";
// import Counter from "../Components/Counter";
import renderer from "react-test-renderer";

// if u wanna check first off all render it
// screen.debug use to show the code
describe("Tesing Button Component", () => {
  it("Button should render on DOM", () => {
    render(
      <Button color={"teal"} size={"large"}>
        Click Me
      </Button>
    );
    // screen.debug();
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });
  // checking by id
  // getAllByTestId takes array
  // getByTestId takes one id
  it("Button should be present on DOM", () => {
    render(<Button>Custom Button</Button>);
    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
  });
  // checking multiple buttons
  it("Check for Button text Content", () => {
    render(<App />);
    const buttons = screen.getAllByTestId("custom-button");
    expect(buttons[0]).toHaveTextContent("Click Me");
    expect(buttons[1]).toHaveTextContent("Click");
  });

  it("Should invoke the function", () => {
    const mockFunc = jest.fn();
    render(<Button onClick={mockFunc} />);
    const button = screen.getByTestId("custom-button");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(mockFunc).toBeCalledTimes(2);
  });
  // used for snapshot testing
  it("Should snapshot", () => {
    const tree = renderer
      .create(
        <Button color={"blue"} size={"large"}>
          Click Me
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
