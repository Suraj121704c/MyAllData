const express = require('express');
const { connection } = require('./models/db');
const { PlayerRouter } = require("./routes/Player.Routes")

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.use("/players", PlayerRouter)

app.listen(8000, async () => {
    try {
        await connection
        console.log("Connect to mongo_atlas")
    } catch (err) {
        console.log(err)
        console.log("something is wrong...")
    }
    console.log('listening on 8000');
})