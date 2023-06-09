const express = require("express")
const fieldsAnalyzer = require("../middlewares/fieldsAnalyzer")
const record = require("../middlewares/record")
const { MovieModel } = require("../models/db")
const movies = express.Router()
movies.use(express.json())

movies.post("/add", fieldsAnalyzer, async (req, res) => {
    const moviedata = req.body
    try {
        const data = new MovieModel(moviedata)
        await data.save()
        res.status(200).send({
            "msg": "Movie Added successfully"
        })
    } catch (error) {
        res.status(400).send({
            "error": error.message
        })
    }
})

module.exports = movies