const express = require('express');
const { UserModel } = require('../models/User.model')
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

//registering
userRouter.post('/register', async (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).send({ "msg": "New user has been registered" })
    } catch (error) {
        res.send(400).send({ "err": err.message })
    }
})

// login with providing tokens
userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email, pass })
        if (user) {
            // here masai is the secret key
            const token = jwt.sign({ course: 'backend' }, 'masai');
            res.status(200).send({ "msg": "Login successful", "token": token })
        } else {
            res.status(200).send({ "msg": "Wrong Credentials" })
        }
    } catch (error) {
        res.send(400).send({ "err": err.message })
    }
})

module.exports = { userRouter }