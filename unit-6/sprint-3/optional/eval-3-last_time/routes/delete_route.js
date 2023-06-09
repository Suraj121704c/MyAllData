const express = require("express")
const record = require("../middlewares/record")
const { MovieModel } = require("../models/db")
const DeleteMovies = express.Router()

DeleteMovies.delete("/delete/:id", record, async (req, res) => {
    const id = req.params.id
    try {
        const data = await MovieModel.findByIdAndDelete({ _id: id })
        res.status(200).send({
            "msg": "Movie Deleted successfully"
        })
    } catch (error) {
        res.status(400).send({
            "error": error.message
        })
    }
})

module.exports = DeleteMovies
