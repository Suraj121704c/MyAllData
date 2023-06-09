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
global.passedTC = [false, false, false, false, false];
global.score = 1;

const FileContent = [
  `import tuple from "./code";
  const obj = {
    tuple,
  }
  obj.tuple = ["isGood",true];`,

  `import tuple from "./code";
  const obj = {
    tuple,
  }
  obj.tuple = ["isBad",false];`,

  `import tuple from "./code";
  const obj = {
    tuple,
  }
  obj.tuple = [10,true,];`,
  `import tuple from "./code";
  const obj = {
    tuple,
  }
  obj.tuple = [10,"true",];`,

  `import tuple from "./code";
  const obj = {
    tuple,
  }
  obj.tuple = ["isGood",true,false];`,
];
describe("TS Testing", () => {
  it("Checking if the tuple works propperly-1", async () => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent[0]);
      data = await execPromise();
    } catch (error) {
      // Want the error to be falsy
      expect(error).toBeFalsy();
    }
    global.score += 1;
    global.passedTC[0] = true;
  }, 20000);
  it("Checking if the tuple works propperly-2", async () => {
    expect(global.passedTC[0]).toBe(true);
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent[1]);
      data = await execPromise();
    } catch (error) {
      // Want the error to be falsy
      expect(error.isErrorFromExec).toBeFalsy();
    }
    global.score += 1;
    global.passedTC[1] = true;
  }, 20000);
  it("Checking errors with wrong tuple type-1", async () => {
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
  it("Checking errors with wrong tuple type-2", async () => {
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
    global.passedTC[3] = true;
    global.score += 1;
  });
  it("Checking errors with wrong tuple size", async () => {
    expect(global.passedTC[3]).toBe(true);
    let err;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent[4]);
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
