const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../src/index");

global.score = 1;
beforeAll(() => {
  fs.writeFileSync("src/access.log", "");
});

describe("Morgan Logger Middleware", () => {
  it("able to setup express server", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
          message: "welcome to server",
        });
      });

    global.score += 2;
  });

  it("should log request to the access.log file for GET request", async () => {
    const response = await request(app).get("/get-users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "here is the list of all users" });
    const access_log = fs.readFileSync("src/access.log", "utf-8");

    expect(access_log).toContain(response.req.method);
    expect(access_log).toContain(String(response.statusCode));
    expect(access_log).toContain(response.headers["content-length"]);
    expect(access_log).toContain(response.headers["date"]);
    expect(access_log).toContain(response.res.httpVersion);
    expect(access_log).toContain(response.req.path);
    expect(access_log).toContain("\n");

    global.score += 0.5;
  });

  it("should log request to the access.log file for POST request", async () => {
    const response = await request(app).post("/add-user").send({
      name: "masai school",
    });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: "user added successfully" });
    const access_log = fs.readFileSync("src/access.log", "utf-8");

    expect(access_log).toContain(response.req.method);
    expect(access_log).toContain(String(response.statusCode));
    expect(access_log).toContain(response.headers["content-length"]);
    expect(access_log).toContain(response.headers["date"]);
    expect(access_log).toContain(response.res.httpVersion);
    expect(access_log).toContain(response.req.path);
    expect(access_log).toContain("\n");

    global.score += 0.5;
  });

  it("should log request to the access.log file for DELETE request", async () => {
    const id = 123;
    const response = await request(app).delete(`/user/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: `user ${id} deleted successfylly`,
    });
    const access_log = fs.readFileSync("src/access.log", "utf-8");

    expect(access_log).toContain(response.req.method);
    expect(access_log).toContain(String(response.statusCode));
    expect(access_log).toContain(response.headers["content-length"]);
    expect(access_log).toContain(response.headers["date"]);
    expect(access_log).toContain(response.res.httpVersion);
    expect(access_log).toContain(response.req.path);
    expect(access_log).toContain("\n");

    global.score += 0.5;
  });

  it("should log request to the access.log file for PUT request", async () => {
    const id = 142;
    const response = await request(app).put(`/user/${id}`).send({
      name: "masai school bengalore",
    });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: `user ${id} updated successfylly`,
    });
    const access_log = fs.readFileSync("src/access.log", "utf-8");

    expect(access_log).toContain(response.req.method);
    expect(access_log).toContain(String(response.statusCode));
    expect(access_log).toContain(response.headers["content-length"]);
    expect(access_log).toContain(response.headers["date"]);
    expect(access_log).toContain(response.res.httpVersion);
    expect(access_log).toContain(response.req.path);
    expect(access_log).toContain("\n");

    global.score += 0.5;
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
