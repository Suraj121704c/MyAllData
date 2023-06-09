const express = require('express')
const noteRouter = express.Router()
const { NoteModel } = require('../models/Note.models')

noteRouter.post("/create", async (req, res) => {
    try {
        const note = new NoteModel(req.body)
        await note.save()
        res.status(200).send({ "msg": "New Note has been created successfully!!!" })
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})

noteRouter.get("/", async (req, res) => {
    try {
        let data = await NoteModel.find(req.body)
        res.send(data)
    } catch (error) {
        res.status(400).send({ "err": "someting went wrong..." })
    }
})

noteRouter.patch("/update/:noteId", async (req, res) => {
    const { noteId } = req.params
    try {
        await NoteModel.findByIdAndUpdate({ _id: noteId }, req.body)
        res.send("Data Updated Successfully...")
    } catch (error) {
        res.status(400).send({ "err": "someting went wrong..." })
    }
})

noteRouter.delete("/delete/:noteId", async (req, res) => {
    const { noteId } = req.params
    try {
        await NoteModel.findByIdAndDelete({ _id: noteId })
        res.send("Data Deleted Successfully...")
    } catch (error) {
        res.status(400).send({ "err": "someting went wrong..." })
    }
})

module.exports = {
    noteRouter
}