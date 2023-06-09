import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { cleanup, render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

beforeEach(cleanup);

beforeAll(() => {
  global.score = 0;
  console.log("Starting score:", global.score);
});

describe("navbar tests:", () => {
  it("onclicking home link the url should be changed", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const home = screen.getByText(/Home/i);
    userEvent.click(home);
    expect(window.location.pathname).toBe("/");
    global.score += 1;
  });

  it("onclicking about link the url should be changed", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const About = screen.getByText(/About/i);
    userEvent.click(About);
    expect(window.location.pathname).toBe("/about-us");
    global.score += 1;
  });

  it("onclicking contact link the url should be changed", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const Contact = screen.getByText(/Contact/i);
    userEvent.click(Contact);
    expect(window.location.pathname).toBe("/contact");
    global.score += 1;
  });

  it("onclicking services link the url should be changed", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const Services = screen.getByText(/Services/i);
    userEvent.click(Services);
    expect(window.location.pathname).toBe("/services");
    global.score += 1;
  });

  it("onclicking login link the url should be changed", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const Login = screen.getByText(/Login/i);
    userEvent.click(Login);
    expect(window.location.pathname).toBe("/login");
    global.score += 1;
  });
});

describe("tests for App:", () => {
  it("onclicking home link Home Page text should be visible ", async () => {
    render(<App />);
    const Home = screen.getByRole("link", { name: "Home" });
    userEvent.click(Home);
    expect(screen.getByText("Home Page")).toBeInTheDocument("Home Page");
    global.score += 1;
  });

  it("onclicking about link About Page text should be visible ", async () => {
    render(<App />);
    const About = screen.getByRole("link", { name: "About" });
    userEvent.click(About);
    expect(screen.queryByText("Home Page")).not.toBeInTheDocument();
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
    global.score += 1;
  });

  it("onclicking contact link Contact Page text should be visible ", async () => {
    render(<App />);
    const Contact = screen.getByRole("link", { name: "Contact" });
    userEvent.click(Contact);
    expect(screen.queryByText("Home Page")).not.toBeInTheDocument();
    expect(screen.getByText(/Contact Page/i)).toBeInTheDocument();
    global.score += 1;
  });

  it("onclicking services link Services Page text should be visible ", async () => {
    render(<App />);
    const Services = screen.getByRole("link", { name: "Services" });
    userEvent.click(Services);
    expect(screen.queryByText("Home Page")).not.toBeInTheDocument();
    expect(screen.getByText(/Services Page/i)).toBeInTheDocument();
    global.score += 1;
  });

  it("onclicking login link  Login Page text should be visible", async () => {
    render(<App />);
    const Login = screen.getByRole("link", { name: "Login" });
    userEvent.click(Login);
    expect(screen.queryByText("Home Page")).not.toBeInTheDocument();
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
