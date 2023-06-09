const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>This is the home page</h1>");
  } else if (req.url == "/about") {
    // res.end("This is the about page");
    // or
    res.write("This is the about page");
    res.write("1");
    res.write("2");
    res.write("3");
    res.write("4");
    res.end();
  } else if (req.url == "/contact") {
    res.end("Jai Shree Ram !!! Har Har Mahadev!!!");
  } else if (req.url == "/data") {
    // fs.readFile("./data.json", "utf-8", (err, data) => {
    //   if (err) {
    //     res.end(err);
    //   } else {
    //     res.end(data);
    //   }
    // });
    try {
      const data = fs.readFileSync("./data.json", "utf-8");
      res.end(data);
    } catch (error) {
      res.end(error);
    }
  } else if (req.url == "/writedata") {
    try {
      fs.writeFileSync("./text.txt", "This is me learning the server logic");
      res.end("Data has been written in the file");
    } catch (error) {
      res.end(error);
    }
  }
});

server.listen(3000, () => {
  console.log("Server is running at port 3000");
});
