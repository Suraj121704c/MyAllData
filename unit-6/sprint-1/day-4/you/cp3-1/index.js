//  import required modules from nodejs
const path = require("path");
const fs = require("fs");
const http = require("http");

// create the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readdir(__dirname, (err, files) => {
      if (err) throw err;
      let html_elements = "<ul>";
      files.forEach((file) => {
        let icon = fs.statSync(file).isDirectory() ? "&#128193;" : "&#128441";
        html_elements += `<li><a href = ${file}>${icon} ${file}</a></li>\n`;
      });
      html_elements += "</ul>";
    //   console.log(files);
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
            let icon = fs.statSync(path.join(__dirname, pathName2)).isDirectory() ? "&#128193;" : "&#128441";
            html += `<li><a href=${pathName2}>${icon} ${file}</a></li>`;
          });
          html += "</ul>";
          res.setHeader("Content-Type", "text/html");
          res.end(html);
        });
      } else {
        fs.readFile(pathName, "utf-8", (err, data) => {
          res.end(data);
        });
      }
    } catch (error) {
      res.statusCode = 404;
      res.end(`404 Not Found`);
    }
  }
});

server.listen(8089, () => {
  console.log(`server started on port 8089.....`);
});

// export the server

module.exports = server;
