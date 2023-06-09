const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.mongoDB)

const movieSchema = mongoose.Schema({
    "movie_name": String,
    "genre": String,
    "director": String,
    "rating": Number,
    "year_of_release": Number
}, {
    versionKey: false
})
const MovieModel = mongoose.model("movies", movieSchema)

module.exports = {
    connection, MovieModel
}