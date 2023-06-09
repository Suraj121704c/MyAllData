const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title: String,
    body: String,
    user: String
})

const NotesModel = mongoose.model("note", noteSchema)

module.exports = {
    NotesModel
}