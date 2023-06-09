const express = require('express')
// for random tokens
const jwt = require('jsonwebtoken')
const { UserModel } = require('../models/User.models')
// for encryption
const bcrypt = require('bcrypt');

const userRouter = express.Router()

// Resgister
userRouter.post("/register", async (req, res) => {
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

    } catch (error) {
        res.send({ "msg": "Something went wrong", "error": error.messsage })
    }

})

// login
// jwt sign takes randome payload("backend") and a secret key("masai")  
userRouter.post("/login", async (req, res) => {
    const { email, pass } = (req.body)
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(pass, user[0].pass, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userID: user[0]._id }, "masai")
                    res.send({ "msg": "Logged in", "token": token })
                } else {
                    res.send({ "msg": "Wrong Credentials" })
                }
            });
        } else {
            res.send({ "msg": "Wrong Credentials" })
        }
    } catch (error) {
        res.send({ "msg": "Wrong Credentials" })
    }
})

module.exports = {
    userRouter
}