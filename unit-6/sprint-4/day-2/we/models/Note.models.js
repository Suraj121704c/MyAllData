const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: String, require: true },
    category: { type: String, require: true }
}, {
    versionKey: false
})

const NoteModel = mongoose.model("note", NoteSchema)

module.exports = {
    NoteModel
}