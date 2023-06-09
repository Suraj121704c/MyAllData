const express = require("express")
const { connection } = require("./db")
const cors = require("cors")
const { userRouter } = require("./routes/User.routes")
const { auth } = require("./middleware/auth.middleware")
const { noteRouter } = require("./routes/Notes.routes")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.use("/users", userRouter)
app.use(auth)
app.use("/notes", noteRouter)

app.listen(1000, async () => {
    try {
        await connection
        console.log("Connected to Server")
    } catch (error) {
        console.log("Something went wrong...")
    }
    console.log("Server is running at port 1000...")
})