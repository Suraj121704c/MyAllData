const express = require("express")
const { connection } = require("./db")
const { UserRouter } = require("./routes/User.routes")
const { HeroRouter } = require("./routes/Hero.routes")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.use("/users", UserRouter)
app.use("/heros", HeroRouter)

// as long as your server is running it should be connected to the DB

app.listen(8000, async () => {
    try {
        await connection
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
    console.log("server is running at port 8000.....");
})