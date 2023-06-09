import {
  createEvent,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useState } from "react";
import App from "../App";
import { Pin } from "../Components/Pin";
import { PinTab } from "../Components/PinTab";

describe("Test OTP component", () => {
  beforeAll(() => {
    global.score = 1;
    console.log("Rest score to: 1");
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });

  it("should render the PinTab component in the UI", () => {
    render(<App />);
    expect(screen.getByTestId("pin-tab")).toBeInTheDocument();
    global.score += 1;
  });

  it("PinTab should have Pin component as a child", () => {
    render(<PinTab length={1} maxChar={1} />);
    expect(screen.getByTestId("pin-input")).toBeInTheDocument();
    global.score += 1;
  });

  it("For PinTab length should be a required prop", () => {
    const consoleError = jest.spyOn(console, "error");
    render(<PinTab maxChar={1} />);
    expect(consoleError).toBeCalled();
    jest.clearAllMocks();
    global.score += 1;
  });

  it("For PinTab length and maxChar should be a number", () => {
    const consoleError = jest.spyOn(console, "error");
    render(<PinTab length={"a"} maxChar={"a"} />);
    expect(consoleError).toBeCalledTimes(3);
    jest.clearAllMocks();
    global.score += 1;
  });

  it("Pin Component should accept maxChar as a prop and it should be required", () => {
    const consoleError = jest.spyOn(console, "error");
    render(<Pin />);
    expect(consoleError).toBeCalled();
    global.score += 1;
  });

  it("Pin component should not accept text with length greater than the maxChar prop", () => {
    render(<Pin maxChar={1} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "1");
    global.score += 1;
  });

  it("Typing the OTP 123456 should be typed in correct input boxes", () => {
    const { result } = renderHook(() => useState(""));
    render(<PinTab maxChar={1} length={5} setOtp={result.current[1]} />);
    const pin = screen.getAllByTestId("pin-input");
    pin[0].focus();
    keyboard("123456");
    expect(pin[0].value).toBe("1");
    expect(pin[1].value).toBe("2");
    expect(pin[2].value).toBe("3");
    expect(pin[3].value).toBe("4");
    expect(pin[4].value).toBe("5");

    global.score += 2;
  });

  it("Pressing backspace should move user to previous box after removing the value", () => {
    const { result } = renderHook(() => useState(""));
    render(<PinTab maxChar={1} length={5} setOtp={result.current[1]} />);
    const pin = screen.getAllByTestId("pin-input");
    pin[0].focus();
    keyboard("123456");
    expect(pin[0].value).toBe("1");
    expect(pin[1].value).toBe("2");
    expect(pin[2].value).toBe("3");
    expect(pin[3].value).toBe("4");
    expect(pin[4].value).toBe("5");

    pin[4].focus();
    keyboard("{Backspace}{Backspace}{Backspace}");

    expect(pin[0].value).toBe("1");
    expect(pin[1].value).toBe("2");
    expect(pin[2].value).toBe("");
    expect(pin[3].value).toBe("");
    expect(pin[4].value).toBe("");

    global.score += 2;
  });

  it("On pasting OTP: 123456 should go to respective input boxes", () => {
    const { result } = renderHook(() => useState(""));
    render(<PinTab maxChar={1} length={5} setOtp={result.current[1]} />);
    const pin = screen.getAllByTestId("pin-input");
    pin[0].focus();

    const paste = createEvent.paste(pin[0], {
      clipboardData: {
        getData: () => "123456",
      },
    });

    fireEvent(pin[0], paste);

    expect(pin[0].value).toBe("1");
    expect(pin[1].value).toBe("2");
    expect(pin[2].value).toBe("3");
    expect(pin[3].value).toBe("4");
    expect(pin[4].value).toBe("5");

    global.score += 3;
  });
});
