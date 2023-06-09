/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
  getByTestId,
  findByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Countries from "../Component/Countries.jsx";
import CountriesCard from "../Component/CountriesCard";
import Pagination from "../Component/Pagination";
import LoadingIndicator from "../Component/LoadingIndicator";
import fixture from "./fixtureA.json";
import fixtureB from "./fixtureB.json";

function getPageElements(container) {
  return {
    prevPage: getByTestId(container, "prev-page"),
    nextPage: getByTestId(container, "next-page"),
    currentPage: getByTestId(container, "current-page"),
  };
}
function getCountriesElements(container) {
  return {
    title: getByTestId(container, "country-card-name"),
    population: getByTestId(container, "country-card-population"),
  };
}
const sleep = (delay) => new Promise((res) => setTimeout(res, delay));

// cleanup
beforeEach(() => {
  cleanup();
});

beforeAll(() => {
  global.score = 1;
  console.log("Rest score to: 1");
});

jest.setTimeout(60000);
try {
  describe("Test cases", () => {
    console.log("Resetting score to 1");
    it.only("should render CountriesCard.jsx correctly", () => {
      {
        expect(CountriesCard).toBeDefined();
        render(<CountriesCard {...{ country: "a", population: 1 }} />);
        const { title, population } = getCountriesElements(
          screen.getByTestId("country-card")
        );
        expect(title.textContent.trim()).toBe("a");
        expect(population.textContent.trim()).toBe("1");
      }
      cleanup();
      {
        render(<CountriesCard {...{ country: "India", population: 500 }} />);
        const { title, population } = getCountriesElements(
          screen.getByTestId("country-card")
        );
        expect(title.textContent.trim()).toBe("India");
        expect(population.textContent.trim()).toBe("500");
        global.score += 1;
      }
    });

    it.only("should render pagination component", async () => {
      const fn = jest.fn();
      const data = [
        {
          data: { onChange: fn, current: 1, total: 2 },
          tests: [
            () => expect(screen.getByTestId("prev-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("prev-page")).toBeDisabled(),
            () => expect(screen.getByTestId("next-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("next-page")).not.toBeDisabled(),
            () =>
              expect(screen.getByTestId("current-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("total-pages")).toBeInTheDocument(),
            () =>
              expect(screen.getByTestId("total-pages").textContent).toBe("2"),
            () =>
              expect(screen.getByTestId("current-page").textContent).toBe("1"),
            () => {
              const nextPage = screen.getByTestId("next-page");
              fireEvent.click(nextPage);
              expect(fn).toBeCalledTimes(1);
            },
            () => {
              const prevPage = screen.getByTestId("prev-page");
              fireEvent.click(prevPage);
              expect(fn).toBeCalledTimes(1);
            },
          ],
        },
        {
          data: { onChange: fn, current: 2, total: 4 },
          tests: [
            () => expect(screen.getByTestId("prev-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("prev-page")).not.toBeDisabled(),
            () => expect(screen.getByTestId("next-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("next-page")).not.toBeDisabled(),
            () =>
              expect(screen.getByTestId("current-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("total-pages")).toBeInTheDocument(),
            () =>
              expect(screen.getByTestId("total-pages").textContent).toBe("4"),
            () =>
              expect(screen.getByTestId("current-page").textContent).toBe("2"),
            () => {
              const nextPage = screen.getByTestId("next-page");
              fireEvent.click(nextPage);
              expect(fn).toBeCalledTimes(2);
            },
            () => {
              const prevPage = screen.getByTestId("prev-page");
              fireEvent.click(prevPage);
              expect(fn).toBeCalledTimes(3);
            },
          ],
        },
        {
          data: { onChange: fn, current: 3, total: 3 },
          tests: [
            () => expect(screen.getByTestId("prev-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("prev-page")).not.toBeDisabled(),
            () => expect(screen.getByTestId("next-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("next-page")).toBeDisabled(),
            () =>
              expect(screen.getByTestId("current-page")).toBeInTheDocument(),
            () => expect(screen.getByTestId("total-pages")).toBeInTheDocument(),
            () =>
              expect(screen.getByTestId("total-pages").textContent).toBe("3"),
            () =>
              expect(screen.getByTestId("current-page").textContent).toBe("3"),
            () => {
              const nextPage = screen.getByTestId("next-page");
              fireEvent.click(nextPage);
              expect(fn).toBeCalledTimes(3);
            },
            () => {
              const prevPage = screen.getByTestId("prev-page");
              fireEvent.click(prevPage);
              expect(fn).toBeCalledTimes(4);
            },
          ],
        },
      ];

      data.forEach(({ data, tests }) => {
        cleanup();
        render(<Pagination {...data} />);
        tests.forEach((t) => t());
      });
      global.score += 1;
    });

    it.only("should render countries page", async () => {
      cleanup();
      render(<Countries />);
      expect(screen.getByTestId("loading-indicator").textContent.trim()).toBe(
        "...Loading"
      );
      const header = await screen.findByTestId("countries-header");
      expect(header.textContent.trim()).toBe("Countries List");
      const container = await screen.findByTestId("countries-container");
      expect(container.children.length).toBe(10);

      Array.from(container.children).forEach((item, i) => {
        const { population, title } = getCountriesElements(item);
        const { data } = fixture;
        expect(title.textContent.trim()).toBe(data[i].country);
        expect(population.textContent.trim()).toBe(
          data[i].population.toString()
        );
      });
      global.score += 4;
    });

    it.only("should work with pagination correctly", async () => {
      cleanup();
      const cont = render(<Countries />);
      expect(screen.getByTestId("loading-indicator").textContent.trim()).toBe(
        "...Loading"
      );
      let header = await screen.findByTestId("countries-header");
      const elements = getPageElements(screen.getByTestId("page-container"));
      await act(() => {
        fireEvent.click(elements.nextPage);
      });
      expect(screen.getByTestId("loading-indicator").textContent.trim()).toBe(
        "...Loading"
      );
      header = await screen.findByTestId("countries-header");
      expect(header).toBeDefined();
      expect(elements.currentPage.textContent).toBe("2");
      const container = await screen.findByTestId("countries-container");
      expect(container.children.length).toBe(10);

      Array.from(container.children).forEach((item, i) => {
        const { population, title } = getCountriesElements(item);
        const { data } = fixtureB;
        expect(title.textContent.trim()).toBe(data[i].country);
        expect(population.textContent.trim()).toBe(
          data[i].population.toString()
        );
      });
      global.score += 3;
    });
  });
} catch (err) {
  console.log(err);
}
afterAll(() => {
  console.log("Final Score is", global.score);
});
