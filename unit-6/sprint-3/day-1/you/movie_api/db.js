const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb://127.0.0.1:27017/movieApi")

const movieSchema = mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
}, {
    versionKey: false
})

// movie here is the document name
const MovieModel = mongoose.model('movie', movieSchema)

module.exports = { connection, MovieModel }