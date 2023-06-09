const mongoose = require('mongoose');

const superSchema = mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true }
}, {
    versionKey: false
})

const SuperModel = mongoose.model('hero', superSchema)

module.exports = {
    SuperModel
}