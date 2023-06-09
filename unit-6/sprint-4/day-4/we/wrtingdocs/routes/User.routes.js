const express = require('express')
const { UserModel } = require('../models/User.models')

const userRouter = express.Router()

// keep care of the intentation

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: All the Api routes releated to user
 */

// get

/**
 * @swagger
 * /users: 
 *   get: 
 *       summary: This will get all the users
 *       tags: [Users]
 *       responses: 
 *            200:
 *                description: List of all the users
 *            400: 
 *                description: Incorrect Request
 */
userRouter.get("/", async (req, res) => {
    const users = await UserModel.find()
    res.status(200).send(users)
})

// post

/**
 * @swagger
 * /users/create: 
 *   post: 
 *       summary: This will create a new user
 *       tags: [Users]
 *       responses: 
 *            200:
 *                description: A new user has been created
 *            400: 
 *                description: Incorrect Request
 */

userRouter.post("/create", async (req, res) => {
    const user = new UserModel(req.body)
    await user.save()
    res.status(200).send({ "msg": "New user has been created..." })
})

// delete

/**
 * @swagger
 * /users/delete/:id: 
 *   delete: 
 *       summary: This will delete an existing user
 *       tags: [Users]
 *       responses: 
 *            200:
 *                description: A user has been created
 *            400: 
 *                description: Incorrect Request
 */

userRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    await UserModel.findByIdAndDelete({ _id: id })
    res.status(200).send({ "msg": "User has been deleted..." })
})

// patch

/**
 * @swagger
 * /users/patch/:id: 
 *   patch: 
 *       summary: This will patch an existing user
 *       tags: [Users]
 *       responses: 
 *            200:
 *                description: A user has been edited
 *            400: 
 *                description: Incorrect Request
 */

userRouter.patch("/patch/:id", async (req, res) => {
    const { id } = req.params
    await UserModel.findByIdAndUpdate({ _id: id }, req.body)
    res.status(200).send({ "msg": "User has been updated..." })
})

module.exports = {
    userRouter
}