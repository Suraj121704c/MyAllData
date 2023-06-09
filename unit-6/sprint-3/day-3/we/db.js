const mongoose = require("mongoose")
// for importing env 
require('dotenv').config()

// local mongo db
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/expressDB")

// Atlas mongo (cloud mongo)
const connection = mongoose.connect(process.env.mongoURL)

// const userSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     is_married: { type: Boolean, required: true },
//     city: { type: String, required: true }
// }, {
//     versionKey: false
// })

// const UserModel = mongoose.model('user', userSchema)

// superhero schema
// const superSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     city: { type: String, required: true }
// }, {
//     versionKey: false
// })

// const SuperModel = mongoose.model('hero', superSchema)
// exporting SuperModel to perform crud operations
module.exports = {
    connection,
}