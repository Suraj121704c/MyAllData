import { render, renderHook, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";
import useTimeout from "../hooks/useTimeout";

describe("Testing Custom Hooks", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    global.score = 1;
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
    console.log("Final Score is", global.score);
  });

  test("Returned variable 'ready', from the useTimeout hook should be false, by default", () => {
    const { result } = renderHook(() => useTimeout());
    expect(result.current.ready).toBe(false);
    global.score += 1;
  });

  test('Returned variable "ready" from the useTimeout hook should be "true" after 5 seconds', () => {
    const { result } = renderHook(() => useTimeout(5000));
    act(() => {
      jest.runAllTimers();
    });
    expect(result.current.ready).toBe(true);
    global.score += 1;
  });

  test('The text "After the timeout" should not be visible initially', () => {
    render(<App />);
    expect(screen.queryByTestId("timeout-div")).not.toBeInTheDocument();
    global.score += 1;
  });

  test('The div containing the text "After the timeout" should be visible after few seconds', () => {
    render(<App />);
    expect(screen.queryByTestId("timeout-div")).not.toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.getByTestId("timeout-div")).toBeInTheDocument();
    global.score += 1;
  });

  test("If online status is being shown in the UI", () => {
    jest.spyOn(navigator, "onLine", "get").mockReturnValueOnce(true);
    render(<App />);
    expect(screen.getByTestId("online-status")).toBeInTheDocument();
    expect(screen.queryByTestId("offline-status")).not.toBeInTheDocument();
    global.score += 1;
  });

  test("If offline status is being in the UI, when the internet is turned off", () => {
    jest.spyOn(navigator, "onLine", "get").mockReturnValueOnce(false);
    render(<App />);
    expect(screen.getByTestId("offline-status")).toBeInTheDocument();
    expect(screen.queryByTestId("online-status")).not.toBeInTheDocument();
    global.score += 1;
  });
});
