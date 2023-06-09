import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import App from "../App";
import Product from "../components/Product";

const calCulateTotal = () => {
  let price = screen.getAllByTestId("product-price");
  let quantity = screen.getAllByTestId("product-quantity");

  let total = 0;
  for (let i = 0; i < price.length; i++) {
    total += +price[i].textContent * +quantity[i].textContent;
  }
  return total;
};
describe("Testing User Deatils display App", () => {
  global.score = 1;
  console.log("Resetting score to 1");
  describe("App component should render", () => {
    beforeEach(() => {
      render(<App />);
    });
    it("should have basic structure", async () => {
      expect(screen.getByTestId("app")).toBeInTheDocument();
      expect(screen.getByTestId("total-cart")).toBeInTheDocument();
      global.score += 1;
    }); // 1
    it("should render <Product/> component", async () => {
      cleanup();
      const fn = jest.fn();
      let props = { id: 1, name: "Fries", quantity: 5, price: 100 };
      let { getByTestId, getAllByTestId } = render(
        <Product {...props} handleQty={fn} />
      );
      expect(getByTestId("product-quantity")).toHaveTextContent(5);
      expect(getByTestId("quantity-decrement")).toBeInTheDocument();
      expect(getByTestId("quantity-increment")).toBeInTheDocument();
      fireEvent.click(getByTestId("quantity-increment"));
      expect(fn).toBeCalledTimes(1);
      fireEvent.click(getByTestId("quantity-decrement"));
      expect(fn).toBeCalledTimes(2);

      // expect(screen.getByTestId("total-cart")).toBeInTheDocument();
      global.score += 1;
    });
    it("should display all products", () => {
      let Products = screen.getAllByTestId("product-container");
      expect(Products.length).toBe(3);
      global.score += 2;
    }); //2

    it("By Default the Quantity is one and total shows the total value of the cart", () => {
      expect(screen.getByTestId("total-cart")).toHaveTextContent(
        calCulateTotal()
      );
      global.score += 1;
    }); //1

    it("Increment  Quantity should work", () => {
      let element = screen.getAllByTestId("quantity-increment");
      fireEvent.click(element[1]);
      expect(screen.getAllByTestId("product-quantity")[1]).toHaveTextContent(2);
      expect(screen.getByTestId("total-cart")).toHaveTextContent(
        calCulateTotal()
      );
      global.score += 2;
    }); //2

    it("Decrement Quantity should work", () => {
      fireEvent.click(screen.getAllByTestId("quantity-decrement")[2]);
      expect(screen.getAllByTestId("product-quantity")[2]).toHaveTextContent(0);
      global.score += 1;
      expect(screen.getByTestId("total-cart")).toHaveTextContent(
        calCulateTotal()
      );
      global.score += 1;
    }); //2

    it("Decrement Should not be possible lesser than 0", () => {
      fireEvent.click(screen.getAllByTestId("quantity-decrement")[2]);
      expect(screen.getAllByTestId("product-quantity")[2]).toHaveTextContent(0);
      expect(screen.getAllByTestId("quantity-decrement")[2]).toBeDisabled();
      fireEvent.click(screen.getAllByTestId("quantity-decrement")[2]);
      expect(screen.getAllByTestId("product-quantity")[2]).toHaveTextContent(0);

      global.score += 1;
      expect(screen.getByTestId("total-cart")).toHaveTextContent(
        calCulateTotal()
      );
      global.score += 1;
    }); //1
  });
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
