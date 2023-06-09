const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../src/index");

global.score = 1;
beforeAll(() => {
  if (!fs.existsSync("uploads/")) {
    fs.mkdirSync("uploads/");
  }

  const directory = "uploads/";

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
});

describe("Multer File Uploader", () => {
  it("able to setup express server", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
          message: "welcome to server",
        });
      });

    global.score += 1;
  });

  it("able to upload a file to server", async () => {
    const response = await request(app)
      .post("/upload")
      .attach("avatar", "__tests__/test-image.jpg");

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ message: "file uploaded successfully" });
    const filePath = path.join("uploads/test-image.jpg");
    const isExists = fs.existsSync(filePath);
    expect(isExists).toBe(true);

    global.score += 3;
  });
});

afterAll((done) => {
  done();

  console.log("Final Score is", global.score);
});
