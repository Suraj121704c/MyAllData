import {
  fireEvent,
  getByRole,
  getByTestId,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";
import { useToggleItems } from "../hooks/useToggleItems";

describe("Testing Custom Hooks", () => {
  beforeAll(() => {
    global.score = 1;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });

  it("Initial value of state should be first element of array if position not passed", () => {
    const { result } = renderHook(() => useToggleItems(["A", "B", "C"]));
    expect(result.current[0]).toBe("A");
    global.score += 2;
  });

  it("Initial status should be the element on passed position", () => {
    const { result } = renderHook(() => useToggleItems(["A", "B", "C"], 1));
    expect(result.current[0]).toBe("B");
    global.score += 2;
  });

  it("should toggle items in correct order", () => {
    const { result } = renderHook(() => useToggleItems(["A", "B", "C", "D"]));
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe("B");

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe("C");

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe("D");

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe("A");

    global.score += 3;
  });

  it("On clicking toggle button status should toggle accordingly in UI", () => {
    render(<App />);
    expect(screen.getByTestId("status")).toHaveTextContent("B");
    const button = screen.getByTestId("toggle");
    fireEvent.click(button);
    expect(screen.getByTestId("status")).toHaveTextContent("C");
    fireEvent.click(button);
    expect(screen.getByTestId("status")).toHaveTextContent("A");
    fireEvent.click(button);
    expect(screen.getByTestId("status")).toHaveTextContent("B");
    global.score += 2;
  });
});
