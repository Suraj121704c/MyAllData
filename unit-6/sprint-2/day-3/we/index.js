const express = require("express");
const app = express();
const fs = require("fs");
const { timeLogger } = require("./timeLogger")
const { logger } = require("./logger")

// community middleware for using api on other compailer
const cors = require("cors");

// middleware (we can also use multiple middlewares)
app.use(timeLogger)
app.use(logger)
app.use(cors())

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

// dynamic responses with the help of querys
app.get("/data", (req, res) => {
    // console.log(req.query)
    const data = {
        Banglore: "25C",
        Delhi: "32C",
        Mumbai: "43C",
        Patna: "24C"
    }
    const { city } = req.query
    const temp = data[city]

    res.end(`Temp at this city ${city} ${temp}`)
})

// params for the dynamic response --> params need end points query not
app.get("/students/:students_code", (req, res) => {
    const { students_code } = req.params
    res.send(`This will have details about student with id ${students_code}`)
})

app.listen(8080, () => {
    console.log("Server is running at port 8080")
})