const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/User.routes")
const { noteRouter } = require("./routes/Notes.routes")
const { authenticate } = require("./middleware/auth.middleware")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Homepage")
})

app.use("/users", userRouter)
app.use(authenticate)
app.use("/notes", noteRouter)

app.listen(8000, async () => {
    try {
        await connection
        console.log("Connected to Server")
    } catch (error) {
        console.log(error.message)
    }
    console.log('Server is running at port 8000...')
})