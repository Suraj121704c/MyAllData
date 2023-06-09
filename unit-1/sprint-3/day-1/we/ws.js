// importing web soket
const { WebSocketServer } = require("ws");

// setting a web soket server
const wss = new WebSocketServer({ port: 8500 });

// run this in any webpage to connect to the server
// const socket = new WebSocket("ws://localhost:8500");
// socket.onopen = () => {
//   console.log("connected to the server");
//     socket.onmessage = (event) => {
//         console.log(event.data);
//     }
//   socket.send("Hey from the client");
// };

wss.on("connection", (socket) => {
  socket.on("message", (msg) => {

    console.log("client : " + msg);
    msg = msg.toString()

    if (msg === "hey") {
      socket.send("hello");
    } 
    else if (msg === "bye") {
      socket.send("ta ta");
    } 
    else {
      socket.send(
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
      );
    }
  });

});


