const { generateNumber, checkOddEven } = require("../oddEven");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;
// jest.setTimeout(10000);

jest.dontMock("fs");

describe("check for odd/even", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
    fetch.resetMocks();
  });

  it("Random number is getting generated and visible on DOM at click of the button", function () {
    generateNumber()
    expect(Number(document.getElementById("number").textContent) >= 1).toBe(true)
    expect(Number(document.getElementById("number").textContent) <= 100).toBe(true)

    global.score += 3
  });

  it("OddEven function return the corrct output for even number", function () {
    checkOddEven(24)
    expect(document.getElementById("odd-even").textContent).toBe("The number is even")

    checkOddEven(30)
    expect(document.getElementById("odd-even").textContent).toBe("The number is even")

    global.score += 3
  });
  

  it("OddEven function return the corrct output for odd number", function () {
    checkOddEven(23)
    expect(document.getElementById("odd-even").textContent).toBe("The number is odd")

    checkOddEven(31)
    expect(document.getElementById("odd-even").textContent).toBe("The number is odd")

    global.score += 3
  });

});

afterAll(() => {
  console.log("Final Score is", global.score);
});

