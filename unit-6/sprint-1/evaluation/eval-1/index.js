const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("node:dns");
const crypto = require("crypto");
const yodasay = require("yodasay");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (req.url === "/gencount") {
    let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    fs.writeFile(
      "./logs.txt",
      `The initial Male count is 11 and Female count is 10 at ${Date()}\n`,
      (err) => {
        if (err) {
          res.end(err);
        } else {
          res.end("The count has been updated in the logs file");
        }
      }
    );
  } else if (req.url === "/addnew") {
    let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    const new_user = {
      id: Math.floor(Math.random()),
      first_name: os.userInfo().username,
      last_name: os.userInfo().username,
      email: "surajsing2002@gmail.com",
      gender: "male",
    };
    data.push(new_user);
    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
      if (err) {
        res.end(err);
      } else {
        res.end("The data has been updated, go and check the data file");
      }
    });
  } else if (req.url === "/people") {
    let users = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    res.setHeader("Content-Type", "text/html");
    users.map((user) => {
      res.write(`
        <ul>First Name : ${user.first_name} Last Name : ${user.last_name} Gender : ${user.gender}</ul>
        `);
    });
    res.end();
    fs.writeFile(
      "./people.txt",
      `The initial Male count is 11 and Female count is 10 at ${Date()}\n`,
      (err) => {
        if (err) {
          res.end(err);
        } else {
          res.end("The count has been updated in the logs file");
        }
      }
    );
  } else if (req.url === "/address") {
    fs.appendFile(
      "./logs.txt",
      `URL : masaischool.com IP Address: 3.7.198.157 and Family is IPv4`,
      (err) => {
        if (err) {
          res.end(err);
        } else {
          res.end("Logs File has been updated");
        }
      }
    );
  } else if (req.url === "/yoda") {
    let data = fs.readFileSync("./people.txt", "utf-8");
    res.end(
      yodasay.say({
        text: data,
      })
    );
  }
});

// server.listen(3000,()=>{
//     console.log(`server is running on the port 3000`)
// })

// Do not forget to export the server.
// e.g => module.exports = server;
module.exports = server;
