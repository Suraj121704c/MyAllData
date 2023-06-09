const epxress = require('express')
const { NotesModel } = require('../models/Note.models')

const noteRouter = epxress.Router()

// for all search
noteRouter.get("/", async (req, res) => {
    const notes = await NotesModel.find()
    res.send(notes)
})

// for id search 
noteRouter.get("/:id", async (req, res) => {
    const noteID = req.params.id
    const notes = await NotesModel.find({ _id: noteID })
    res.send(notes)
})

// for create
noteRouter.post("/create", async (req, res) => {
    const payload = req.body
    const note = new NotesModel(payload)
    await note.save()
    res.send({ "msg": "Note Created" })
})

// for delete
noteRouter.post("/delete/:id", async (req, res) => {
    const noteID = req.params.id
    await NotesModel.findByIdAndDelete({ _id: noteID })
    res.send({ "msg": `Note with id ${noteID} has been deleted` })
})

module.exports = {
    noteRouter
}