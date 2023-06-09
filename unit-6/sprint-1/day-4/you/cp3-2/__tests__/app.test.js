const request = require("supertest");
const app = require("../index");

global.score = 1;

describe("File server app", () => {

  it("serves directory listings", async () => {
    const res = await request(app).get("/");
    expect(res.text).toContain("public");
    global.score += 2;
  });

  it("serves nested directory listings", async () => {
    const res = await request(app).get("/public");
    
    expect(res.text).toContain("others");

    global.score += 2;
  });
  it("serves nested file listings", async () => {
    const res = await request(app).get("/public/others");
    
    console.log(res.text);
    expect(res.text).toContain("test.txt");
 
    global.score += 2;
  });

  it("serves file contents", async () => {
    const res = await request(app).get("/public/others/test.txt");
    
    expect(res.text).toEqual("hello this is test.txt");
    
    global.score += 2;
  });

  it("handles non-existent files and directories", async () => {
    const res = await request(app).get("/non-existent-file");
   
    expect(res.text).toEqual("404 Not Found");
   
    global.score += 2;
  });

});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
