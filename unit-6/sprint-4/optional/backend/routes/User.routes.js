const express = require("express")
const { UserModel } = require("../models/User.models")

// for encryption and creation of encryption
const bcrypt = require('bcrypt');
// for token genderation
const jwt = require('jsonwebtoken')

const userRouter = express.Router()

userRouter.post("/signup", async (req, res) => {
    const { name, email, pass } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                console.log(err.message)
            } else {
                const user = await UserModel({ name, email, pass: hash })
                await user.save()
                res.send({ "msg": "New user has been registered..." })
            }
        });
    } catch (err) {
        res.send({ "msg": "Something went wrong", "error": err.messsage })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, pass } = (req.body)
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(pass, user[0].pass, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userID: user[0].id }, "masai")
                    res.send({ "msg": "Logged in", "token": token })
                } else {
                    res.send({ "msg": "Wrong Credentials" })
                }
            });
        } else {
            res.send({ "msg": "Wrong Credentials" })
        }
    } catch (error) {
        res.send({ "msg": error.messsage })
    }
})

module.exports = { userRouter }