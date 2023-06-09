import React from "react";
import { render, fireEvent, cleanup, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";
import ThemeContextProvider from "../Context/ThemeContextProvider";
import User from "../Components/User.jsx";
import { Dashboard } from "../Components/Dashboard.jsx";
// import { expect } from "chai";
// npm install --save-dev jest-fetch-mock

/**
 *
 * DO NOT CHANGE ANYTHING HERE
 */
jest.setTimeout(60000);
beforeAll(() => {
  // attempt is 1
  global.score = 1;
  console.log("Resetting Score to 1");
});

beforeEach(() => {
  cleanup();
});

test("check if by default the application is in light theme", async () => {
  const { getByTestId } = render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );

  const dashboard = getByTestId("dashboard-cont");

  expect(dashboard).toHaveStyle("background-color: white");
  global.score += 2;
});

test("check if theme changes on choosing dark theme", async () => {
  const { getByTestId } = render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );

  fireEvent.change(getByTestId("select-theme"), {
    target: { value: "dark" },
  });

  const dashboard = getByTestId("dashboard-cont");
  expect(dashboard).toHaveStyle("background-color: black");
  global.score += 3;
});

test("check if no props are being passed to dashboard, and state is managed by context api", async () => {
  const { getByTestId } = render(
    <ThemeContextProvider>
      <Dashboard />
    </ThemeContextProvider>
  );

  var dashboard = getByTestId("dashboard-cont");
  expect(dashboard).toHaveStyle("background-color: white");

  fireEvent.change(getByTestId("select-theme"), {
    target: { value: "dark" },
  });

  dashboard = getByTestId("dashboard-cont");
  expect(dashboard).toHaveStyle("background-color: black");
  global.score += 3;
});

test("check if the theme is sent to user component as props-1", async () => {
  let props = {
    id: 2,
    name: "Prateek",
    position: "CEO",
    level: 15,
    points: 22456,
    img: "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg",
  };
  const { getAllByTestId } = render(<User isDarkTheme={false} user={props} />);
  const user = getAllByTestId("user");
  const userLevel = getAllByTestId("level");

  expect(user[0]).toHaveStyle("color: black");
  expect(userLevel[0].style.accentColor).toBe("blue");
  global.score += 2;
});

test("check if the theme is sent to user component as props-2", async () => {
  let props = {
    id: 1,
    name: "Nrupul Dev",
    position: "CTO",
    level: 15,
    points: 23456,
    img: "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg",
  };
  const { getAllByTestId, getByTestId } = render(
    <User isDarkTheme={true} user={props} />
  );

  const user = getAllByTestId("user");
  const userLevel = getAllByTestId("level");
  expect(user[0]).toHaveStyle("color: white");
  expect(userLevel[0].style.accentColor).toBe("yellow");

  global.score += 2;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});

const sleep = (delay) => new Promise((res) => setTimeout(res, delay));
