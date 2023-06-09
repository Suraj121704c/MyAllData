// for event heandling it is used 
const { EventEmitter } = require("events");

const Player = new EventEmitter();

Player.on("shot", (number) => {
  console.log(`Player ${number} got injured...`);
});

Player.on("dead", (number) => {
  console.log(`Player ${number} is dead !!!`);
});

Player.emit("shot", 2);
Player.emit("dead", 1);
Player.emit("shot", 2);
