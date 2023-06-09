const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../index");

global.score = 1;

describe("File server app", () => {
  beforeAll(() => {
    fs.mkdirSync(path.join(__dirname, "test"));
    fs.writeFileSync(path.join(__dirname, "test", "test.txt"), "test content");
  });

  it("serves directory listings", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    console.log(res.text);
    expect(res.text).toContain("__tests__");
    // done();
    global.score += 2;
  });

  it("serves nested directory listings", async () => {
    const res = await request(app).get("/__tests__");
    expect(res.statusCode).toEqual(200);
    console.log(res.text);
    expect(res.text).toContain("test");
    // done();
    global.score += 2;
  });
  it("serves nested file listings", async () => {
    const res = await request(app).get("/__tests__/test");
    expect(res.statusCode).toEqual(200);
    console.log(res.text);
    expect(res.text).toContain("test.txt");
    // done();
    global.score += 2;
  });

  it("serves file contents", async () => {
    const res = await request(app).get("/__tests__/test/test.txt");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("test content");
    // done();
    global.score += 2;
  });

  it("handles non-existent files and directories", async () => {
    const res = await request(app).get("/non-existent-file");
    expect(res.statusCode).toEqual(404);
    expect(res.text).toEqual("404 Not Found");
    // done();
    global.score += 2;
  });

  afterAll(() => {
    fs.unlinkSync(path.join(__dirname, "test", "test.txt"));
    fs.rmdirSync(path.join(__dirname, "test"));
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
