//  import required modules from nodejs and build the server
const express = require("express")
const app = express()
const fs = require("fs")
app.use(express.json())

app.get("/", (req, res) => {
    let data = fs.readFileSync("db.json", "utf-8")
    data = JSON.parse(data)
    res.send(data.todos)
    // console.log(data)
})

app.post("/", (req, res) => {
    let data = fs.readFileSync("db.json", "utf-8")
    data = JSON.parse(data)
    data.todos.push(req.body)
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2))
    res.send(data.todos)
})

app.put("/:id", (req, res) => {
    let data = fs.readFileSync("db.json", "utf-8")
    data = JSON.parse(data)
    let isP = false;
    const { id } = req.params;

    let updated_data = data.todos.map((el) => {

        if (el.id == +id) {
            isP = true
            return req.body
        } else {
            return el
        }

    })
    if (!isP) {
        res.statusCode = 400
        res.send("Invalid argument")
        return
    }

    data.todos = updated_data;
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2))
    res.send(data.todos)
})

app.delete("/:id", (req, res) => {
    const id = +req.params.id
    let data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
    let isP = false;
    let Deleted_data = data.todos.filter((el) => {
        if (el.id === id) {
            isP = true;
        }
        return el.id !== id
    })

    if (!isP) {
        res.statusCode = 400
        res.end("Invalid argument")
        return;
    }
    data.todos = Deleted_data;
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2))
    res.end(JSON.stringify(Deleted_data))
})

// app.listen(3000,()=>{
//     console.log("running server")
// })

// export the server
// eg.module.exports = app;
module.exports = app