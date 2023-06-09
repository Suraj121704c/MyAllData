const express = require('express');
const { PlayerModel } = require('../models/db')
const record = require("../middlewares/record")
const PlayerRouter = express.Router();
const validator = require("../middlewares/validator")
const updateLimitor = require("../middlewares/updateLimitor")

PlayerRouter.post("/add", validator, async (req, res) => {
    try {
        const player = new PlayerModel(req.body)
        await player.save();
        res.send("player added successfully!!!")
    } catch (error) {
        res.send("something went wrong...")
    }
})

PlayerRouter.get("/all", async (req, res) => {
    const query = req.query
    try {
        const player = await PlayerModel.find(query)
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

PlayerRouter.patch("/update/:id", record, async (req, res) => {
    const { id } = req.params
    try {
        await PlayerModel.findByIdAndUpdate({ _id: id }, req.body)
        res.send("Player Updated")
    } catch (err) {
        console.log("Something went wrong")
    }
})

PlayerRouter.delete("/delete/:id", record, async (req, res) => {
    const { id } = req.params
    try {
        await PlayerModel.findByIdAndDelete({ _id: id })
        res.send("Player deleted")
    } catch (error) {
        res.send("something went wrong...")
    }
})

PlayerRouter.get("/fill", async (req, res) => {
    const { age, nationality, goals, page, limit } = req.query;
    const filters = {}
    if (nationality) {
        filters.name = { $regex: nationality.toLowerCase(), $options: 'i' };
    }

    if (goals) {
        filters.goals = goals;
    }

    if (age) {
        filters.age = { $regex: q.toLowerCase(), $options: 'i' };
    }

    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const skip = (pageNumber - 1) * pageSize;

    try {
        const count = await PlayerModel.countDocuments(filters);
        const movies = await PlayerModel.find(filters)
            .skip(skip)
            .limit(pageSize);

        res.send({
            totalCount: count,
            pageSize,
            currentPage: pageNumber,
            totalPages: Math.ceil(count / pageSize),
            movies
        });
    } catch (err) {
        res.send("Something went wrong...")
    }
})

PlayerRouter.get("/sorts", async (req, res) => {
    const { s } = req.query
    try {
        let player
        if (s === "asc") {
            player = await PlayerModel.find().sort({ goals: 1 })
        } else if (s === "desc") {
            player = await PlayerModel.find().sort({
                rating: -1
            })
        }
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

module.exports = {
    PlayerRouter
}