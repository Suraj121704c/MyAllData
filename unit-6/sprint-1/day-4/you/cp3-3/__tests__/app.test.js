const fs = require("fs");
const path = require("path");

let { isArray, isNumber, isStr, isObj, cls } = require("../index");

global.score = 1;

describe("File manipulation program", () => {
  it("should isNumber function able to check a number", (done) => {
    isNumber(10);
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toMatch("it is a Number.");
    done();
    global.score += 1;
  });

  it("should isNumber function able to check a number(error condition)", (done) => {
    isNumber("dsf");
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toMatch("it is Not a Number.");
    done();
    global.score += 1;
  });

  it("should isStr function able to check a string", (done) => {
    isStr("masai");
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toMatch("it is a String.");
    done();
    global.score += 1;
  });

  it("should isStr function able to check a string(error condition)", (done) => {
    isStr("10");
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toMatch("it is Not a String.");
    done();
    global.score += 1;
  });

  it("should isArray function able to check a array", (done) => {
    isArray([]);
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toMatch("it is a Array.");
    done();
    global.score += 1;
  });
  it("should isArray function able to check a array(error Condition)", (done) => {
    isArray({});
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toMatch("it is Not a Array.");
    done();
    global.score += 1;
  });

  it("should isObj function able to check a object", (done) => {
    isObj({ name: "masai school" });
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toMatch("this is a object.");
    done();
    global.score += 1;
  });

  it("should isObj function able to check a object (error Condition)", (done) => {
    isObj([]);
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toMatch("this is not a object.");
    done();
    global.score += 1;
  });

  it("should cls function able to clear(delete) the directory", (done) => {
    cls("test.txt");
    let fileList = fs.readdirSync(".");

    expect(fileList).not.toContain("test.txt");

    done();
    global.score += 1;
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
