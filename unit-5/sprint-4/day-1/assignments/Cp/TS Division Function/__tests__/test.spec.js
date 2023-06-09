const cp = require("child_process");
const fs = require("fs");
const execPromise = () => {
  return new Promise((resolve, reject) => {
    cp.exec("npx ts-node src/index.ts", (e, data) => {
      if (e) {
        reject({ ...e, isErrorFromExec: true });
      } else {
        resolve(data);
      }
    });
  });
};
const fsPromise = (path = "", content = "") => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        return reject({ err, isErrorFromExec: false });
      }
      resolve("Created File");
    });
  });
};
global.passedTC = [false, false, false, false];
global.score = 1;

const FileContent = [
  `import func from "./code";
  console.log(func(8,4));`,
  `import func from "./code";
  console.log(func(32,8));`,
  `import func from "./code";
  console.log(func("8",4));`,
  `import func from "./code";
  console.log(func(16,"4"));`,
];
describe("TS Testing", () => {
  it("Checking if the function works propperly-1", async () => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
    let data;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent[0]);
      data = await execPromise();
    } catch (error) {
      // Want the error to be falsy
      expect(error).toBeFalsy();
    }
    expect(data.trim().trim("/n")).toContain("2");
    global.score += 1;
    global.passedTC[0] = true;
  }, 20000);
  it("Checking if the function works propperly-2", async () => {
    expect(global.passedTC[0]).toBe(true);
    let data;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent[1]);
      data = await execPromise();
    } catch (error) {
      // Want the error to be falsy
      expect(error.isErrorFromExec).toBeFalsy();
    }
    expect(data.trim().trim("/n")).toContain("4");
    global.score += 1;
    global.passedTC[1] = true;
  }, 20000);
  it("Checking errors with wrong type-1", async () => {
    expect(global.passedTC[1]).toBe(true);
    let err;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent[2]);
      data = await execPromise();
    } catch (error) {
      err = error;
      expect(error.isErrorFromExec).toBe(true);
    }
    expect(err).toBeTruthy();
    global.score += 1;
    global.passedTC[2] = true;
  });
  it("Checking errors with wrong type-2", async () => {
    expect(global.passedTC[2]).toBe(true);
    let err;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent[3]);
      data = await execPromise();
    } catch (error) {
      err = error;
      expect(error.isErrorFromExec).toBe(true);
    }
    expect(err).toBeTruthy();
    global.score += 1;
  });
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
