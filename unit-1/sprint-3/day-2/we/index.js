const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const { Socket } = require("dgram");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("base end point");
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});

const websocketserver = new Server(server);

let count = 0;

websocketserver.on("connection", (socket) => {
  count++;
  console.log("current count is " + count);
  socket.emit("xyz", "hello");

  socket.on("mno", (msg) => {
    console.log(msg);
  });

  socket.on("message", (sandesh) => {
    socket.broadcast.emit("usermsg", sandesh);
  });

  socket.on("disconnect", () => {
    count--;
    console.log("current count is " + count);
  });
});

// it accepts a normal server

// socket can't be attached to express
