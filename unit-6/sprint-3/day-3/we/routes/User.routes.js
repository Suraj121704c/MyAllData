const express = require('express');
const { UserModel } = require("../models/User.model")

const UserRouter = express.Router();

// Create
UserRouter.post("/add", async (req, res) => {
    // const data = req.body
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.send("Added the new user")
    } catch (error) {
        res.send(error)
    }
})


// patching on the id
UserRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params
    try {
        await UserModel.findByIdAndUpdate({ _id: id }, req.body)
        res.send("Data Updated")
    } catch (error) {
        console.log(error)
    }
})

// Read with query parameters also works for multiple queries
UserRouter.get('/', async (req, res) => {
    const query = req.query
    try {
        const users = await UserModel.find(query)
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})


// sorting on the basis of age
UserRouter.get("/sort", async (req, res) => {
    const { s } = req.query
    try {
        let users
        if (s === "dsc") {
            users = await UserModel.find().sort({ age: -1 })
        } else {
            users = await UserModel.find()
        }
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})


// delete
UserRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    try {
        await UserModel.findByIdAndDelete({ _id: id })
        res.send("Data deleted")
    } catch (err) {
        res.send(err)
    }
})

module.exports = {
    UserRouter
}