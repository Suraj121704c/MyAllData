import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing Counter 2.0", () => {
  global.score = 1;
  console.log("Resetting score to 1");
  describe("App component should render", () => {
    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<App />);
    });

    it("should render App and have basic structure", async () => {
      expect(screen.getByTestId("counter")).toBeInTheDocument();

      expect(screen.getByTestId("plusonebtn")).toBeInTheDocument();
      expect(screen.getByTestId("minusonebtn")).toBeInTheDocument();
      expect(screen.getByTestId("resetbtn")).toBeInTheDocument();
      expect(screen.getByTestId("odd-or-even")).toBeInTheDocument();
      expect(screen.getByTestId("is-prime")).toBeInTheDocument();

      global.score += 1;
    });

    it("counter should have initial value 0", async () => {
      expect(screen.getByTestId("counter")).toHaveTextContent("0");
      global.score += 1;
    });

    it("should have a disabled -1 button", async () => {
      expect(screen.getByTestId("counter")).toHaveTextContent("0");
      let minusonebtn = screen.getByTestId("minusonebtn");
      expect(minusonebtn).toBeDisabled();
      global.score += 1;
    });

    it("should increment counter by 1", async () => {
      fireEvent.click(screen.getByTestId("plusonebtn"));
      expect(screen.getByTestId("counter")).toHaveTextContent("1");
      fireEvent.click(screen.getByTestId("plusonebtn"));
      expect(screen.getByTestId("counter")).toHaveTextContent("2");

      global.score += 1;
    });

    it("should decrement counter by 1", async () => {
      fireEvent.click(screen.getByTestId("plusonebtn"));
      expect(screen.getByTestId("counter")).toHaveTextContent("1");
      fireEvent.click(screen.getByTestId("plusonebtn"));
      expect(screen.getByTestId("counter")).toHaveTextContent("2");
      fireEvent.click(screen.getByTestId("minusonebtn"));
      expect(screen.getByTestId("counter")).toHaveTextContent("1");
      fireEvent.click(screen.getByTestId("minusonebtn"));
      expect(screen.getByTestId("counter")).toHaveTextContent("0");

      global.score += 1;
    });

    it("should display if the number is even or odd", () => {
      let plusonebtn = screen.getByTestId("plusonebtn");

      for (let i = 0; i <= 11; i++) {
        if (i % 2 == 0) {
          expect(screen.getByTestId("odd-or-even")).toHaveTextContent("Even");
        } else {
          expect(screen.getByTestId("odd-or-even")).toHaveTextContent("Odd");
        }

        fireEvent.click(plusonebtn);
      }

      global.score += 1;
    });

    it("should display if the number is prime", () => {
      let plusonebtn = screen.getByTestId("plusonebtn");

      for (let i = 0; i <= 11; i++) {
        if ([2, 3, 5, 7, 11].includes(i)) {
          expect(screen.getByTestId("is-prime")).toHaveTextContent("true");
        } else {
          expect(screen.getByTestId("is-prime")).toHaveTextContent("false");
        }

        fireEvent.click(plusonebtn);
      }

      global.score += 2;
    });

    it("should reset counter to 0", () => {
      let plusonebtn = screen.getByTestId("plusonebtn");

      for (let i = 0; i <= 11; i++) {
        fireEvent.click(plusonebtn);
      }
      expect(screen.getByTestId("counter")).toHaveTextContent("12");

      fireEvent.click(screen.getByTestId("resetbtn"));
      expect(screen.getByTestId("counter")).toHaveTextContent("0");

      global.score += 1;
    });
  });
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
