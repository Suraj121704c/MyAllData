const express = require("express")
const { connection, UserModel } = require("./db")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home Page")
})

// Create
app.post("/adduser", async (req, res) => {
    // const data = req.body
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.send("Added the new user")
    } catch (error) {
        res.send(error)
    }
})

// patching on the id
app.patch("/updateuser/:id", async (req, res) => {
    const { id } = req.params
    try {
        await UserModel.findByIdAndUpdate({ _id: id }, req.body)
        res.send("Data Updated")
    } catch (error) {
        console.log(error)
    }
})

// Read with query parameters also works for multiple queries
app.get('/users', async (req, res) => {
    const query = req.query
    try {
        const users = await UserModel.find(query)
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

// sorting on the basis of age
app.get("/sorts", async (req, res) => {
    const { s } = req.query
    try {
        let users
        if (s === "dsc") {
            users = await UserModel.find().sort({ age: -1 })
        } else {
            users = await UserModel.find()
        }
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})


// delete
app.delete("/deleteuser/:id", async (req, res) => {
    const { id } = req.params
    try {
        await UserModel.findByIdAndDelete({ _id: id })
        res.send("Data deleted")
    } catch (err) {
        res.send(err)
    }
})

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