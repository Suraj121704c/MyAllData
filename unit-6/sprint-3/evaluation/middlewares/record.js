const fs = require('fs');

const record = (req, res, next) => {
    if (req.method === "PATCH") {
        fs.appendFileSync('./record.txt', `The player with id : ${req.params.id} has been updated | ${new Date}.\n`)
        next()
    }
    else if (req.method === "DELETE") {
        fs.appendFileSync('./record.txt', `The player with id : ${req.params.id} has been deleted | ${new Date}.\n`)
        next()
    } else {
        next()
    }
}

module.exports = record