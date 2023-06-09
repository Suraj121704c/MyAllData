const express = require("express")
const { MovieModel } = require("../models/db")
const AllMovies = express.Router()
AllMovies.use(express.json())

AllMovies.get("/movies", async (req, res) => {
    const query = req.query
    let skipMovies;
    if (query.page !== undefined) {
        skipMovies = (query.page - 1) * 2
    }
    const genre = {}
    const year = {}
    if (query.genre !== undefined) {
        genre["genre"] = query.genre
    }
    if (query.year !== undefined) {
        const yeardata = { $gte: query.year }
        year["year_of_release"] = yeardata
    }

    try {
        if (query.min_rating !== undefined && query.max_rating !== undefined) {
            const min = +query.min_rating
            const max = +query.max_rating
            if (query.page !== undefined) {
                const data = await MovieModel.find({ $and: [{ rating: { $gte: min } }, { rating: { $lte: max } }, genre, year] }).skip(skipMovies).limit(2)
                res.status(200).send(data)
            } else {
                const data = await MovieModel.find({ $and: [{ rating: { $gte: min } }, { rating: { $lte: max } }, genre, year] })
                res.status(200).send(data)
            }
        } else if (query.min_rating !== undefined && query.max_rating === undefined) {
            const min = +query.min_rating
            const max = +query.max_rating
            if (query.page !== undefined) {
                const data = await MovieModel.find({ $and: [{ rating: { $gte: min } }, genre, year] }).skip(skipMovies).limit(2)
                res.status(200).send(data)
            } else {
                const data = await MovieModel.find({ $and: [{ rating: { $gte: min } }, genre, year] })
                res.status(200).send(data)
            }
        } else if (query.min_rating === undefined && query.max_rating !== undefined) {
            const min = +query.min_rating
            const max = +query.max_rating
            if (query.page !== undefined) {
                const data = await MovieModel.find({ $and: [{ rating: { $lte: max } }, genre, year] }).skip(skipMovies).limit(2)
                res.status(200).send(data)
            } else {
                const data = await MovieModel.find({ $and: [{ rating: { $lte: max } }, genre, year] })
                res.status(200).send(data)
            }
        } else {
            if (query.page !== undefined) {
                const data = await MovieModel.find({ $and: [genre, year] }).skip(skipMovies).limit(2)
                res.status(200).send(data)
            } else {
                const data = await MovieModel.find({ $and: [genre, year] })
                res.status(200).send(data)
            }
        }

    } catch (error) {
        res.status(400).send({
            "error": error.message
        })
    }
})


module.exports = AllMovies