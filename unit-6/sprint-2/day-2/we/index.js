const express = require("express");
const app = express();
const fs = require("fs");
const { timeLogger } = require("./timeLogger")
const { logger } = require("./logger")

// community middleware for using api on other compailer
// const { cors } = require("cors");

// middleware (we can also use multiple middlewares)
app.use(timeLogger)
app.use(logger)
// app.use(cors())

app.get("/", (req, res) => {
    console.log("Home Page")
    res.end("Home Page")
})

app.get("/about", (req, res) => {
    console.log("About Page")
    res.send("About Page")
})

app.get("/contact", (req, res) => {
    console.log("Contact Page")
    res.end("Contact Page")
})

app.get("/data", (req, res) => {
    let data = fs.readFileSync("./db.json", "utf-8")
    res.send(data)
})

app.listen(8080, () => {
    console.log("Server is running at port 8080")
})