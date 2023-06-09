const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/User.routes")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())
app.use("/users", userRouter)

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/contacts", (req, res) => {
    res.send("Contact Page")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

// protected
app.get("/movie", (req, res) => {
    const { token } = req.query
    jwt.verify(token, 'masai', function (err, decoded) {
        if (decoded) {
            res.status(200).send("Movie data")
        } else {
            res.status(400).send({ "err": err.message })
        }
    });
})

app.get("/series", (req, res) => {
    const { token } = req.query
    jwt.verify(token, 'masai', function (err, decoded) {
        if (decoded) {
            res.status(200).send("Series data")
        } else {
            res.status(400).send({ "err": err.message })
        }
    });
})

app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected to the DB")
    } catch (error) {
        console.log(error);
        console.log("cannot connect to DB")
    }
    console.log("server is running at 8080...");
})