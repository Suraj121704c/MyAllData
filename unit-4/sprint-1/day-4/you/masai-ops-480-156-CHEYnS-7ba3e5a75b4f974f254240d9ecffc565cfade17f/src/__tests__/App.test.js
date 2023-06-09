import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing Mini-Game Application", () => {
  beforeAll(() => {
    global.score = 1;
    console.log("Resetting Score to 0");
  });

  describe("App component should", () => {
    beforeEach(() => {
      render(<App />);
    });

    it("should render App and have basic structure", () => {
      expect(screen.getByTestId("counter")).toBeInTheDocument();
      expect(screen.getByTestId("counter")).toHaveTextContent("0");

      expect(screen.getByTestId("add-one-btn")).toBeInTheDocument();
      expect(screen.getByTestId("add-two-btn")).toBeInTheDocument();

      expect(screen.getByTestId("winner-container")).toHaveTextContent(
        "Still To Be Decided"
      );

      expect(screen.getByTestId("reset-btn")).toBeInTheDocument()

      global.score += 1;
    });

    it("should change player turn on clicks", () => {
      const add_one_btn = screen.getByTestId("add-one-btn");
      const add_two_btn = screen.getByTestId("add-two-btn");

      expect(screen.getByTestId("turn-container")).toHaveTextContent(
        "Player 1"
      );

      fireEvent.click(add_one_btn);

      expect(screen.getByTestId("turn-container")).toHaveTextContent(
        "Player 2"
      );

      fireEvent.click(add_one_btn);

      expect(screen.getByTestId("turn-container")).toHaveTextContent(
        "Player 1"
      );

      global.score += 1;
    });

    it("should increment the score when clicked", () => {
      const add_one_btn = screen.getByTestId("add-one-btn");
      const add_two_btn = screen.getByTestId("add-two-btn");

      fireEvent.click(add_one_btn);

      expect(screen.getByTestId("counter")).toBeInTheDocument();
      expect(screen.getByTestId("counter")).toHaveTextContent("1");

      fireEvent.click(add_two_btn);
      expect(screen.getByTestId("counter")).toHaveTextContent("3");

      global.score += 1;
    });

    it("should show winner correctly (player 2)", () => {
      const add_one_btn = screen.getByTestId("add-one-btn");
      const add_two_btn = screen.getByTestId("add-two-btn");

      fireEvent.click(add_one_btn);
      fireEvent.click(add_two_btn);
      fireEvent.click(add_two_btn);
      fireEvent.click(add_two_btn);
      fireEvent.click(add_one_btn);
      fireEvent.click(add_two_btn);

      expect(screen.getByTestId("winner-container")).toHaveTextContent(
        "Player 2"
      );
      global.score+= 2;
    });

    it("should show winner correctly (player 1)", () => {
      const add_one_btn = screen.getByTestId("add-one-btn");
      const add_two_btn = screen.getByTestId("add-two-btn");

      fireEvent.click(add_two_btn);
      fireEvent.click(add_one_btn);
      fireEvent.click(add_one_btn);
      fireEvent.click(add_two_btn);
      fireEvent.click(add_one_btn);
      fireEvent.click(add_two_btn);
      fireEvent.click(add_one_btn);

      expect(screen.getByTestId("winner-container")).toHaveTextContent(
        "Player 1"
      );
      global.score+= 1;
    });

    it("should disable the add-two-btn at 9 and add-one-btn at 10", () => {
      const add_one_btn = screen.getByTestId("add-one-btn");
      const add_two_btn = screen.getByTestId("add-two-btn");

      fireEvent.click(add_two_btn);
      fireEvent.click(add_one_btn);
      fireEvent.click(add_one_btn);
      fireEvent.click(add_two_btn);
      fireEvent.click(add_one_btn);
      fireEvent.click(add_two_btn);

      expect(screen.getByTestId("add-two-btn")).toBeDisabled();

      fireEvent.click(add_one_btn);

      expect(screen.getByTestId("add-one-btn")).toBeDisabled();

      global.score+= 2;
    })

    it("should reset the game when reset button is clicked", () => {
      expect(screen.getByTestId("reset-btn")).toBeInTheDocument();
      const reset_btn = screen.getByTestId("reset-btn");

      const add_one_btn = screen.getByTestId("add-one-btn");
      const add_two_btn = screen.getByTestId("add-two-btn");

      fireEvent.click(add_two_btn);
      fireEvent.click(add_one_btn);
      fireEvent.click(add_one_btn);

      expect(screen.getByTestId("counter")).toHaveTextContent("4")
      expect(screen.getByTestId("turn-container")).toHaveTextContent("Player 2");

      fireEvent.click(reset_btn);


      expect(screen.getByTestId("counter")).toHaveTextContent("0")
      expect(screen.getByTestId("turn-container")).toHaveTextContent("Player 1");

      global.score += 1;
    })
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
