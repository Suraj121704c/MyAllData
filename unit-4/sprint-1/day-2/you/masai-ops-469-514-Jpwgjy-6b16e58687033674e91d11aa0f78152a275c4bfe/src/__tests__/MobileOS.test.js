import { cleanup, render, screen } from "@testing-library/react";
import MobileOS from "../components/MobileOS";
let container;
beforeEach(() => {
  container = render(<MobileOS />);
});

beforeAll(() => {
  global.score = 1;
  console.log("Score rest to 1");
});
describe("Render two lists", () => {
  test("should render Mobile Operating System heading in h1 tag ", () => {
    let headings = container.getAllByRole("heading");
    expect(headings[0].tagName).toBe("H1");
    expect(headings[0].textContent.trim().toLowerCase()).toMatch(
      /Mobile Operating System/i
    );
    global.score += 1;
  });
  test("should render Mobile Manufacturers heading in h1 tag", () => {
    let headings = container.getAllByRole("heading");
    expect(headings[1].tagName).toBe("H1");
    expect(headings[1].textContent.trim().toLowerCase()).toMatch(
      /Mobile Manufacturers/i
    );
    global.score += 1;
  });
  test("should render two unordered lists", async () => {
    const items = container.getAllByRole("list");
    expect(items).toHaveLength(2);
    global.score += 1;
  });
  test("should render Mobile OS list items", async () => {
    let listitem = container.getByTestId("os-list");
    let osList = ["Android", "Blackberry", "iPhone", "Windows Phone"];
    let listArray = Array.from(listitem.children);
    expect(listArray).toHaveLength(4);
    listArray.forEach((ele, index) => {
      expect(ele.textContent).toBe(osList[index]);
    });
    global.score += 2;
  });

  test("should renbder Mobile Manufacturers list items", async () => {
    let listitem = container.getByTestId("manufacturers-list");
    let manufacturersList = ["Samsung", "HTC", "Micromax", "Apple"];
    let listArray = Array.from(listitem.children);
    expect(listArray).toHaveLength(4);
    listArray.forEach((ele, index) => {
      expect(ele.textContent).toBe(manufacturersList[index]);
    });
    global.score += 2;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
