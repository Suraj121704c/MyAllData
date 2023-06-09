const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../src/index");
// const db = require("../db");

global.score = 1;
beforeAll(() => {
  fs.writeFileSync("db.json", '{"todos":[]}');
});

describe("File server app", () => {
  it(" should able to get initial structure of todos", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .then((responce) => {
        expect(JSON.parse(responce.text)).toEqual([]);
        let db = fs.readFileSync("db.json");
        db = JSON.parse(db);

        expect(db.todos).toEqual([]);
        done();
        global.score += 2;
      });
  });

  it("should able to post todo", (done) => {
    request(app)
      .post("/")
      .send({ id: 1, task: "learn Node", status: false })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(JSON.parse(responce.text)[0]).toEqual({
          id: 1,
          task: "learn Node",
          status: false,
        });

        let db = fs.readFileSync("db.json");
        db = JSON.parse(db);
        expect(db.todos[0]).toEqual({
          id: 1,
          task: "learn Node",
          status: false,
        });
        done();
        global.score += 2;
      });
  });

  it("should able to update a todo", (done) => {
    request(app)
      .put("/1")
      .send({ id: 1, task: "learn Node", status: true })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(JSON.parse(responce.text)[0]).toEqual({
          id: 1,
          task: "learn Node",
          status: true,
        });

        let db = fs.readFileSync("db.json");
        db = JSON.parse(db);
        expect(db.todos[0]).toEqual({
          id: 1,
          task: "learn Node",
          status: true,
        });
        done();
        global.score += 2;
      });
  });
  it("should able to handle error condition during update a todo", (done) => {
    request(app)
      .put("/2")
      .send({ id: 1, task: "learn Node", status: true })
      .set("Accept", "application/json")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toEqual("Invalid argument");
        done();
        global.score += 2;
      });
  });

  it("should able to delete a todo", (done) => {
    request(app)
      .delete("/1")
      .expect(200)
      .then((responce) => {
        expect(JSON.parse(responce.text)[0]).toBeUndefined();
        expect(JSON.parse(responce.text).length).toBe(0);

        let db = fs.readFileSync("db.json");
        db = JSON.parse(db);
        expect(db.todos[0]).toBeUndefined();
        expect(db.todos).toEqual([])
        done();
        global.score += 2;
      });
  });

  it("should able to handle error condition during delete a todo", (done) => {
    request(app)
      .delete("/2")
      .expect(400)
      .then((responce) => {
        expect(responce.text).toBe("Invalid argument");
        done();
        global.score += 2;
      });
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
