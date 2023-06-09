import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

const Global = {
  score: 1,
};
describe("React Counter App", () => {
  test("Increment button works fine-1", () => {
    render(<App />);
    const increment = screen.getByTestId("increment");
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toContain("0");
    expect(JSON.parse(localStorage.getItem("counter")!) || 0).toBe(0);
    fireEvent.click(increment);
    expect(counter.textContent).toContain("1");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(1);
    Global.score += 1;
  }); //1

  test("Increment button works fine-2", () => {
    render(<App />);
    const increment = screen.getByTestId("increment");
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toContain("1");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(1);
    fireEvent.click(increment);
    expect(counter.textContent).toContain("2");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(2);
    fireEvent.click(increment);
    expect(counter.textContent).toContain("3");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(3);
    Global.score += 1;
  }); //1

  test("Decrement button works fine-1", () => {
    render(<App />);
    const decrement = screen.getByTestId("decrement");
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toContain("3");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(3);
    fireEvent.click(decrement);
    expect(counter.textContent).toContain("2");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(2);
    Global.score += 1;
  }); //1

  test("Decrement button works fine-2", () => {
    render(<App />);
    const decrement = screen.getByTestId("decrement");
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toContain("2");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(2);
    fireEvent.click(decrement);
    expect(counter.textContent).toContain("1");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(1);
    fireEvent.click(decrement);
    expect(counter.textContent).toContain("0");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(0);
    Global.score += 1;
  }); //1

  test("Increment5 button works fine-1", () => {
    render(<App />);
    const increment5 = screen.getByTestId("increment5");
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toContain("0");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(0);
    fireEvent.click(increment5);
    expect(counter.textContent).toContain("5");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(5);
    Global.score += 1;
  }); //1

  test("Increment5 button works fine-2", () => {
    render(<App />);
    const increment5 = screen.getByTestId("increment5");
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toContain("5");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(5);
    fireEvent.click(increment5);
    expect(counter.textContent).toContain("10");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(10);
    fireEvent.click(increment5);
    expect(counter.textContent).toContain("15");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(15);
    Global.score += 1;
  }); //1

  test("Decrement5 button works fine-1", () => {
    render(<App />);
    const decrement5 = screen.getByTestId("decrement5");
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toContain("15");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(15);
    fireEvent.click(decrement5);
    expect(counter.textContent).toContain("10");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(10);
    Global.score += 1;
  }); //1

  test("Decrement5 button works fine-2", () => {
    render(<App />);
    const decrement5 = screen.getByTestId("decrement5");
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toContain("10");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(10);
    fireEvent.click(decrement5);
    expect(counter.textContent).toContain("5");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(5);
    fireEvent.click(decrement5);
    expect(counter.textContent).toContain("0");
    expect(JSON.parse(localStorage.getItem("counter")!)).toBe(0);
    Global.score += 1;
  }); //1

  afterAll(() => {
    console.log("Final Score is", Global.score);
  });
});
