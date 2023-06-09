const { appendFileSync } = require("fs")

const record = (req, res, next) => {
    if (req.method === "PATCH") {
        appendFileSync("./record.txt", `The Movie with id:${req.params.id} has been updated | ${new Date}.\n`)
        next()
    } else if (req.method === "DELETE") {
        appendFileSync("./record.txt", `The Movie with id:${req.params.id} has been deleted | ${new Date}.\n`)
        next()
    } else {
        next()
    }


}
module.exports = record