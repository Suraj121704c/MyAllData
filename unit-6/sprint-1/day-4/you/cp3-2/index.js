const http = require("http");
const fs = require("fs");
const PORT = 7700;
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readdir(__dirname, (err, files) => {
      if (err) throw err;
      let html_elements = "<ul>";
      files.forEach((file) => {
        html_elements += `<li><a href= ${file}>${file}</a></li>`;
      });
      html_elements += "</ul>";
      res.setHeader("Content-Type", "text/html");
      res.end(html_elements);
    });
  } else {
    let pathName = path.join(__dirname, req.url);
    try {
      let isFolder = fs.statSync(pathName).isDirectory();
      if (isFolder) {
        fs.readdir(pathName, (err, files) => {
          if (err) throw err;
          let html = `<ul>`;
          files.forEach((file) => {
            let pathName2 = path.join(req.url, file);
            html += `<li><a href=${pathName2}>${file}</a></li>`;
          });
          html += "</ul>";
          res.setHeader("Content-Type", "text/html");
          res.end(html);
        });
      } else {
        fs.readFile(pathName, "utf8", (err, data) => {
          res.end(data);
        });
      }
    } catch (error) {
      res.statusCode = 404;
      res.end(`404 Not Found`);
    }
  }
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

// export your server

module.exports = server;
