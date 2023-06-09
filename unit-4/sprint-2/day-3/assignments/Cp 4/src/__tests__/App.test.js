import React from "react";
import App from "../App";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";
import { fetchData } from "../components/FlightSearch";
beforeAll(() => {
  // attempt is 1
  global.score = 1;
  console.log("Resetting Score to 1");
  fetchMock.enableMocks();
});
beforeEach(() => {
  fetch.resetMocks();
});
afterEach(cleanup);
jest.setTimeout(30000);

const renderApp = () => render(<App />);

describe("Flight Search", () => {
  test("Initial UI is rendered as expected", async () => {
    fetchMock.dontMockOnce();

    let component = renderApp();
    expect(component.findByTestId("source-input").value).toBeFalsy();
    expect(component.findByTestId("destination-input").value).toBeFalsy();
    expect(component.queryByTestId("flight-results")).toBeFalsy();
    expect(component.queryByTestId("no-flights")).toBeTruthy();
    global.score += 1;
  });

  test("Flight search works as expected - Search 1", async () => {
    fetchMock.dontMockOnce();

    const component = renderApp();
    const sourceInput = component.getByTestId("source-input");
    const destinationInput = component.getByTestId("destination-input");
    const searchButton = component.getByTestId("search-button");

    await new Promise((r) => setTimeout(r, 3000));
    fireEvent.change(sourceInput, { target: { value: "seattle" } });
    fireEvent.change(destinationInput, { target: { value: "florida" } });
    fireEvent.click(searchButton);

    const flightList = await waitFor(() =>
      component.getByTestId("flight-results")
    );
    expect(flightList).toBeInTheDocument();

    expect(flightList.children.length).toEqual(searchData1.length);
    // console.log(flightList.children);

    expect(flightList.children[0].children[0].textContent).toEqual(
      searchData1[0].departure
    );
    expect(flightList.children[0].children[1].textContent).toEqual(
      searchData1[0].duration
    );
    expect(flightList.children[0].children[2].textContent).toEqual(
      searchData1[0].arrival
    );
    expect(flightList.children[0].children[3].textContent).toEqual(
      searchData1[0].price
    );
    expect(flightList.children[1].children[0].textContent).toEqual(
      searchData1[1].departure
    );
    expect(flightList.children[1].children[1].textContent).toEqual(
      searchData1[1].duration
    );
    expect(flightList.children[1].children[2].textContent).toEqual(
      searchData1[1].arrival
    );
    expect(flightList.children[1].children[3].textContent).toEqual(
      searchData1[1].price
    );
    expect(component.queryByTestId("no-flights")).not.toBeInTheDocument();
    global.score += 1;
  });

  test("Flight search works as expected - Search 2", async () => {
    fetchMock.dontMockOnce();

    const component = renderApp();
    const sourceInput = component.getByTestId("source-input");
    const destinationInput = component.getByTestId("destination-input");
    const searchButton = component.getByTestId("search-button");
    await new Promise((r) => setTimeout(r, 3000));

    fireEvent.change(sourceInput, { target: { value: "new york" } });
    fireEvent.change(destinationInput, { target: { value: "boston" } });
    fireEvent.click(searchButton);

    const flightList = await waitFor(() =>
      component.getByTestId("flight-results")
    );
    expect(flightList).toBeInTheDocument();
    expect(flightList.children.length).toEqual(2);
    expect(flightList.children[0].children[0].textContent).toEqual("9:40 AM");
    expect(flightList.children[0].children[1].textContent).toEqual("2 hours");
    expect(flightList.children[0].children[2].textContent).toEqual("11:40 AM");
    expect(flightList.children[0].children[3].textContent).toEqual("150 USD");
    expect(flightList.children[1].children[0].textContent).toEqual("11:40 AM");
    expect(flightList.children[1].children[1].textContent).toEqual("2 hours");
    expect(flightList.children[1].children[2].textContent).toEqual("1:40 PM");
    expect(flightList.children[1].children[3].textContent).toEqual("250 USD");
    expect(component.queryByTestId("no-flights")).not.toBeInTheDocument();
    global.score += 2;
  });

  test("Shows No Flights Found when no matches found", async () => {
    fetchMock.dontMockOnce();

    const component = renderApp();
    const sourceInput = component.getByTestId("source-input");
    const destinationInput = component.getByTestId("destination-input");
    const searchButton = component.getByTestId("search-button");

    await new Promise((r) => setTimeout(r, 3000));
    fireEvent.change(sourceInput, { target: { value: "new york" } });
    fireEvent.change(destinationInput, { target: { value: "denver" } });
    fireEvent.click(searchButton);

    const flightList = component.queryByTestId("flight-results");
    const noFlightsDiv = component.queryByTestId("no-flights");

    expect(flightList).not.toBeInTheDocument();
    expect(noFlightsDiv).toBeInTheDocument();

    expect(noFlightsDiv.textContent.trim().toLowerCase()).toBe(
      "no flights found"
    );
    global.score += 1;
  });

  test("Perform series of operations", async () => {
    fetchMock.dontMockOnce();

    const component = renderApp();
    const sourceInput = component.getByTestId("source-input");
    const destinationInput = component.getByTestId("destination-input");
    const searchButton = component.getByTestId("search-button");

    await new Promise((r) => setTimeout(r, 3000));
    fireEvent.change(sourceInput, { target: { value: "new york" } });
    fireEvent.change(destinationInput, { target: { value: "boston" } });
    fireEvent.click(searchButton);

    let flightList = component.queryByTestId("flight-results");
    let noFlightsDiv = component.queryByTestId("no-flights");

    expect(flightList).toBeInTheDocument();
    expect(flightList.children.length).toEqual(2);
    expect(flightList.children[0].children[0].textContent).toEqual("9:40 AM");
    expect(flightList.children[0].children[1].textContent).toEqual("2 hours");
    expect(flightList.children[0].children[2].textContent).toEqual("11:40 AM");
    expect(flightList.children[0].children[3].textContent).toEqual("150 USD");
    expect(flightList.children[1].children[0].textContent).toEqual("11:40 AM");
    expect(flightList.children[1].children[1].textContent).toEqual("2 hours");
    expect(flightList.children[1].children[2].textContent).toEqual("1:40 PM");
    expect(flightList.children[1].children[3].textContent).toEqual("250 USD");
    expect(noFlightsDiv).not.toBeInTheDocument();

    fireEvent.change(sourceInput, { target: { value: "new york" } });
    fireEvent.change(destinationInput, { target: { value: "denver" } });
    fireEvent.click(searchButton);

    flightList = component.queryByTestId("flight-results");
    noFlightsDiv = component.queryByTestId("no-flights");

    expect(flightList).not.toBeInTheDocument();
    expect(noFlightsDiv).toBeInTheDocument();

    expect(noFlightsDiv.textContent.trim().toLowerCase()).toBe(
      "no flights found"
    );

    fireEvent.change(sourceInput, { target: { value: "seattle" } });
    fireEvent.change(destinationInput, { target: { value: "orlando" } });
    fireEvent.click(searchButton);

    flightList = component.queryByTestId("flight-results");
    noFlightsDiv = component.queryByTestId("no-flights");

    expect(flightList).toBeInTheDocument();
    expect(flightList.children.length).toEqual(1);
    expect(flightList.children[0].children[0].textContent).toEqual("8:00 AM");
    expect(flightList.children[0].children[1].textContent).toEqual("6 hours");
    expect(flightList.children[0].children[2].textContent).toEqual("2:00 PM");
    expect(flightList.children[0].children[3].textContent).toEqual("500 USD");
    expect(noFlightsDiv).not.toBeInTheDocument();
    global.score += 2;
  });
  it("fetch flight data call should work properly with mock data", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: mockData }));

    //assert on the response
    const res = await fetchData();
    expect(res.data).toEqual([
      {
        source: "seattle",
        destination: "florida",
        price: "50 USD",
        departure: "7:40 AM",
        arrival: "1:40 PM",
        duration: "6 hours",
      },
      {
        source: "seattle",
        destination: "orlando",
        price: "500 USD",
        departure: "8:00 AM",
        arrival: "2:00 PM",
        duration: "6 hours",
      },
    ]);

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      "https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1"
    );
    global.score += 2;
  });
});
afterAll(() => {
  console.log("Max marks is, 10");
  console.log("Final Score is", global.score);
});

let mockData = [
  {
    source: "seattle",
    destination: "florida",
    price: "50 USD",
    departure: "7:40 AM",
    arrival: "1:40 PM",
    duration: "6 hours",
  },
  {
    source: "seattle",
    destination: "orlando",
    price: "500 USD",
    departure: "8:00 AM",
    arrival: "2:00 PM",
    duration: "6 hours",
  },
];
let searchData1 = [
  {
    source: "seattle",
    destination: "florida",
    price: "50 USD",
    departure: "7:40 AM",
    arrival: "1:40 PM",
    duration: "6 hours",
  },
  {
    source: "seattle",
    destination: "florida",
    price: "200 USD",
    departure: "1:40 PM",
    arrival: "7:40 PM",
    duration: "6 hours",
  },
];
