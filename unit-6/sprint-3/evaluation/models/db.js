const mongoose = require('mongoose');
require('dotenv').config()
const connection = mongoose.connect(process.env.mongoDB)

const playerSchema = mongoose.Schema({
    player_name: String,
    position: String,
    team: String,
    goals: Number,
    assists: Number,
    nationality: String,
    age: Number,
    mutable: Boolean,
}, {
    versionKey: false
})

const PlayerModel = mongoose.model("player", playerSchema)

module.exports = {
    connection, PlayerModel
}