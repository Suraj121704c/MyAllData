const express = require('express');
const { UserModel } = require('../models/User.model')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const userRouter = express.Router()

//registering 
// we need to hash before posting our data
userRouter.post('/register', async (req, res) => {
    const { email, pass, name, city } = req.body
    // 5 is time related to slow down the process
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            const user = new UserModel({ email, name, city, pass: hash })
            await user.save()
            res.status(200).send({ "msg": "New user has been registered" })
        });
    } catch (error) {
        res.send(400).send({ "err": err.message })
    }
})

// login with providing tokens
userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            // here masai is the secret key
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    const token = jwt.sign({ course: 'backend' }, 'masai');
                    res.status(200).send({ "msg": "Login successful", "token": token })
                } else {
                    res.status(200).send({ "msg": 'Wrong Credentials!!!' })
                }
            });
        } else {
            res.status(200).send({ "msg": "Wrong Credentials" })
        }
    } catch (error) {
        res.send(400).send({ "err": err.message })
    }
})

module.exports = { userRouter }