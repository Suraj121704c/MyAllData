const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/User.routes")
const jwt = require("jsonwebtoken")
// protected route middle ware
const { auth } = require("./middleware/auth.middleware")
const { noteRouter } = require("./routes/Note.routes")


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
app.use(auth) //adding middle ware
app.use("/notes", noteRouter)

app.get("/movie", (req, res) => {
    // const token = req.headers.authorization.split(" ")[0]
    // jwt.verify(token, 'masai', function (err, decoded) {
    //     if (decoded) {
    //         res.status(200).send("Movie data")
    //     } else {
    //         res.status(400).send({ "err": err.message })
    //     }
    // });
    res.status(200).send("Movie data")
})

app.get("/series", (req, res) => {
    // const token = req.headers.authorization.split(" ")[0]
    // jwt.verify(token, 'masai', (err, decoded) => {
    //     if (decoded) {
    //         res.status(200).send("Series data")
    //     } else {
    //         res.status(400).send({ "err": err.message })
    //     }
    // });
    res.status(200).send("Series data")
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