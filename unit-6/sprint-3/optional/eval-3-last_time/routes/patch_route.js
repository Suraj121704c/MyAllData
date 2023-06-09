const express = require("express")
const record = require("../middlewares/record")
const { MovieModel } = require("../models/db")
const UpdateMovies = express.Router()
UpdateMovies.use(express.json())

UpdateMovies.patch("/update/:id", record, async (req, res) => {
    const id = req.params.id
    const update_data = req.body
    try {
        const data = await MovieModel.findByIdAndUpdate({ _id: id }, update_data)
        res.status(200).send({
            "msg": "Movie Updated successfully"
        })
    } catch (error) {
        res.status(400).send({
            "error": error.message
        })
    }
})

module.exports = UpdateMovies