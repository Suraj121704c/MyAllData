const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../src/index");

global.score = 1;

describe("File server app", () => {
  beforeEach(() => {
    fs.writeFileSync("res.txt", "");
  });

  it("should able to check request body", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("data received");

        done();
        global.score += 1;
      });
  });

  it("should able to check invalid request body", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toMatch("invalid request body.");
        done();
        global.score += 1;
      });
  });

  it("should able to check request body ID type is number", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("data received");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("ID is a number");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body ID type is not number", (done) => {
    request(app)
      .post("/")
      .send({
        ID: "501a",
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toMatch("bad request.some data is incorrect.");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("bad request.some data is incorrect.");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Name type is string", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("data received");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("Name is a string");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body name not contain any number", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho5",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toMatch("bad request.some data is incorrect.");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("bad request.some data is incorrect.");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Description type is string", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("data received");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("Description is a string");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Description type is not a string", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: 100,
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toMatch("bad request.some data is incorrect.");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("bad request.some data is incorrect.");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Rating type is number", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("data received");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("Rating is a number");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Rating type is not a number", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: "4star",
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toMatch("bad request.some data is incorrect.");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("bad request.some data is incorrect.");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Genre type is string", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("data received");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("Genre is a string");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Genre type is not a string", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: "4star",
        Description: "sarkar",
        Genre: 54,
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toMatch("bad request.some data is incorrect.");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("bad request.some data is incorrect.");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Cast type is a array of strings", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4.2,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", "school"],
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("data received");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("Cast is a array of string");

        done();
        global.score += 1;
      });
  });

  it("should able to check request body Cast type contains nonstring value", (done) => {
    request(app)
      .post("/")
      .send({
        ID: 5012,
        Name: "subho",
        Rating: 4,
        Description: "sarkar",
        Genre: "string",
        Cast: ["masai", 20],
      })
      .set("Accept", "application/json")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toMatch("bad request.some data is incorrect.");

        let resText = fs.readFileSync("res.txt").toString().trim().split("\n");

        expect(resText).toContain("bad request.some data is incorrect.");

        done();
        global.score += 1;
      });
  });

});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
