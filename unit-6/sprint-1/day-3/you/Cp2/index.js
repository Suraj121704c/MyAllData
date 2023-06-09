const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];
// console.log(path);

switch (operation) {
  // complete the fillowing function.
  case "read": {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
    break;
  }
  case "append": {
    fs.appendFile(file, "\nnew content", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Content appended to the file ${file}`);
      }
    });
    break;
  }

  case "delete": {
    fs.unlink(file, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Content appended to the file ${file}`);
      }
    });
    break;
  }
  case "create": {
    fs.writeFile(file, "No more Excusses,Only Hardwork", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File `test.txt` created");
      }
    });
    break;
  }

  case "rename": {
    fs.rename(file, content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File `test.txt` renamed to new.txt");
      }
    });
    break;
  }
  case "list": {
    fs.readdir(file, (err, files) => {
      if (err) {
        console.log(err);
      } else {
        files.forEach((file) => {
          console.log(file);
        });
      }
    });
    break;
  }

  default:
    console.log(`Invalid operation '${operation}'`);
}
