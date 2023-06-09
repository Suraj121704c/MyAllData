const express = require("express")
const { MovieModel } = require("../models/db")
const SingleMovie = express.Router()
SingleMovie.use(express.json())

SingleMovie.get("/movies/:id", async (req, res) => {
    const id = req.params.id
    try {
        const data = await MovieModel.findById({ _id: id })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            "error": error.message
        })
    }
})
module.exports = SingleMovie