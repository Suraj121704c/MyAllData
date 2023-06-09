// your code goes here
const express = require('express')
const app = express()
const fs = require('fs')

app.get("/sum", (req, res) => {
    const a = Number(req.query.a)
    const b = Number(req.query.b)

    if (isNaN(a) && isNaN(b)) {
        res.status(400).json({ error: 'Both \"a\" and \"b\" are required parameters' })
    }

    if (isNaN(a)) {
        res.status(400).json({ error: "\"a\" is not a valid number" })
    }

    if (isNaN(b)) {
        res.status(400).json({ error: "\"b\" is not a valid number" })
    }

    res.json({ "sum": a + b })
})


app.listen(8000, () => {
    console.log("Server is running at port 8000")
})

module.exports = app