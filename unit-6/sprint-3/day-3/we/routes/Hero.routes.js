const express = require('express')
const { SuperModel } = require("../models/Hero.model")

const HeroRouter = express.Router()

// post heros
HeroRouter.post("/add", async (req, res) => {
    try {
        const hero = new SuperModel(req.body)
        await hero.save()
        res.send("hero added successfully")
    } catch (error) {
        res.send(error)
    }
})

// get heros
HeroRouter.get('/', async (req, res) => {
    const query = req.query
    try {
        const users = await SuperModel.find(query)
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

module.exports = {
    HeroRouter
}