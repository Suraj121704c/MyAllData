import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";
import AuthContextProvider from "../Context/AuthContextProvider";
import fetchMock, {enableFetchMocks} from "jest-fetch-mock";
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
  fetchMock.enableMocks();
});

beforeEach(() => {
  cleanup();
  enableFetchMocks()
});


test("App loads correctly", async () => {
  const {getByTestId } = render(
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
  );

  const email = getByTestId("email");
  const password = getByTestId("password");
  expect(email).toBeInTheDocument()
  expect(password).toBeInTheDocument()
  global.score += 1;
});



test("check if token is being displayed after aunthentication", async () => {
  const {getByTestId } = render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
);

  fetchMock
    .once(
      JSON.stringify({
        token: "ABCD",
      })
    )

  const form = getByTestId("auth_form");
  const email = getByTestId("email");
  const password = getByTestId("password");

  const values = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };
  fireEvent.change(email, {
    target: {
      value: values.email
    }
  });

  fireEvent.change(password, {
    target: {
      value: values.password
    }
  });

  expect(email.value).toBe(values.email);
  expect(password.value).toBe(values.password);
  await act(() => {
    form.submit()
  });
  const token = await getByTestId("token");
  expect(token).toHaveTextContent("ABCD");
  global.score += 3;

});

test("check if authentication works only with right credentials", async () => {
  const {getByTestId } = render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );

  fetchMock.once("https://reqres.in/api/login", () => {
    throw new Error("Failed Request")
  })

  var form = getByTestId("auth_form");
  const email = getByTestId("email");
  const password = getByTestId("password");

  const values = {
    email: "albert.holt@gmail.in",
    password: "secret"
  };
  fireEvent.change(email, {
    target: {
      value: values.email
    }
  });

  fireEvent.change(password, {
    target: {
      value: values.password
    }
  });

  await act(() => {
    form.submit()
  });

  form = await getByTestId("auth_form");
  expect(form).toBeInTheDocument();

  global.score += 2;
});

test("check if the values are getting updated in context api", async () => {
  const {getByTestId } = render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );

  fetchMock
  .once(
    JSON.stringify({
      token: "ABCD",
    })
  )

  var form = getByTestId("auth_form");
  const email = getByTestId("email");
  const password = getByTestId("password");

  const values = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };
  fireEvent.change(email, {
    target: {
      value: values.email
    }
  });

  fireEvent.change(password, {
    target: {
      value: values.password
    }
  });

  await act(() => {
    form.submit()
  });
  

  const logout = await getByTestId("logout");
  await act(() => {
    fireEvent.click(logout);
  });

  form = await getByTestId("auth_form");
  expect(form).toBeInTheDocument();
  global.score += 3;
});


afterAll(() => {
  console.log("Final Score is", global.score);
});

const sleep = (delay) => new Promise((res) => setTimeout(res, delay));
