const request = require("supertest");
const app = require("../app");

beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
global.score = 1;
describe("Test the /sum endpoint", () => {
  test("It should return the sum of the two query parameters", async () => {
    const response = await request(app).get("/sum?a=2&b=3");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ sum: 5 });
    global.score += 2;
  });

  test("It should return the sum of negative numbers", async () => {
    const response = await request(app).get("/sum?a=-4&b=5");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ sum: 1 });
    global.score += 2;
  });

  test("It should return 0 if both query parameters are 0", async () => {
    const response = await request(app).get("/sum?a=0&b=0");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ sum: 0 });
    global.score += 2;
  });

  test("It should return an error if no query parameters are passed", async () => {
    const response = await request(app).get("/sum");
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: 'Both "a" and "b" are required parameters',
    });
    global.score += 2;
  });
  test('It should return an error if "a" and "b" are not  valid numbers', async () => {
    const response = await request(app).get("/sum?a=ab&b=def");
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: 'Both "a" and "b" must be numbers',
    });
    global.score += 2;
  });

  test('It should return an error if "a" is not a valid number', async () => {
    const response = await request(app).get("/sum?a=abc&b=2");
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: '"a" is not a valid number' });
    global.score += 2;
  });

  test('It should return an error if "b" is not a valid number', async () => {
    const response = await request(app).get("/sum?a=2&b=def");
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: '"b" is not a valid number' });
    global.score += 2;
  });
});
