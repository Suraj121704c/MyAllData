import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

const Global = {
  score: 1,
};

interface DataType {
  title: string;
  description: string;
  status?: boolean;
}

const Data: DataType[] = [
  {
    title: "a-1",
    description: "d-1",
  },
  {
    title: "a-2",
    description: "d-2",
  },
  {
    title: "a-3",
    description: "d-3",
  },
];
const submitForm = (data: DataType) => {
  const titleInp = screen.getByTestId("title");
  fireEvent.change(titleInp, {
    target: {
      value: data.title,
    },
  });
  const descInp = screen.getByTestId("description");
  fireEvent.change(descInp, {
    target: {
      value: data.description,
    },
  });

  const FormEl = screen.getByTestId("form");
  fireEvent.submit(FormEl);
};

describe("React Todo App", () => {
  test("Check localStorage with one submission", () => {
    render(<App />);
    expect(JSON.parse(localStorage.getItem("todos")!)?.length || 0).toBe(0);
    submitForm(Data[0]);
    expect(JSON.parse(localStorage.getItem("todos")!).length).toBe(1);
    Global.score += 1;
  }); //1
  test("Check localStorage with multiple submission", () => {
    render(<App />);
    submitForm(Data[1]);
    submitForm(Data[2]);
    expect(JSON.parse(localStorage.getItem("todos")!).length).toBe(3);
    Global.score += 2;
  }); //2

  test(`Check if Todos are being rendered or not`, () => {
    render(<App />);
    const todoContainer = screen.getAllByTestId("todo-container");
    expect(todoContainer.length).toBe(3);
    Global.score += 1;
  }); //1

  test(`Check if By Default all Todo check boxes are not checked`, () => {
    render(<App />);
    const todoContainer =
      screen.getAllByTestId<HTMLInputElement>("todo-status");
    expect(todoContainer[0].checked).toBe(false);
    expect(todoContainer[1].checked).toBe(false);
    expect(todoContainer[2].checked).toBe(false);
    Global.score += 1;
  }); //1

  test(`Check after status changing in LS and in DOM-1`, () => {
    render(<App />);
    const todoContainer =
      screen.getAllByTestId<HTMLInputElement>("todo-status");
    expect(JSON.parse(localStorage.getItem("todos")!)[1].status).toBe(false);
    fireEvent.click(todoContainer[1]);
    expect(todoContainer[1].checked).toBe(true);
    expect(JSON.parse(localStorage.getItem("todos")!)[1].status).toBe(true);
    Global.score += 2;
  }); //2
  test(`Check after status changing in LS and in DOM-2`, () => {
    render(<App />);
    const todoContainer =
      screen.getAllByTestId<HTMLInputElement>("todo-status");
    expect(JSON.parse(localStorage.getItem("todos")!)[0].status).toBe(false);
    fireEvent.click(todoContainer[0]);
    expect(todoContainer[0].checked).toBe(true);
    expect(JSON.parse(localStorage.getItem("todos")!)[0].status).toBe(true);
    Global.score += 2;
  }); //2

  afterAll(() => {
    console.log("Final Score is", Global.score);
  });
});
