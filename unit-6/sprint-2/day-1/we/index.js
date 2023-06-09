const express = require("express")
const fs = require("fs")
// invoking the express
const app = express()

app.use(express.json()) //middleware

// routing in express
app.get("/", (req, res) => {
    res.end("Home Page")
})

app.post("/reports", (req, res) => {
    res.end("Dent Sent")
})

app.post("/add", (req, res) => {
    console.log(req.body)
    res.end("Data Sent")
})

// get request on express
app.get("/students", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    res.send(data.students)
})

// post request on express
app.post("/addteacher", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.teachers.push(req.body)
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("Data has been added into the db")
})

// patch
app.patch("/updateStudents", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    for (let i = 0; i <= data.students.length - 1; i++) {
        if (data.students[i].name === "Jayesh") {
            data.students[i].age = req.body.age
        }
    }
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("Data has been updated")
})

// delete 
app.delete("/deletestudent", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    let newStudentData = data.students.filter(ele => {
        return ele.name !== "Jayesh"
    })
    data.students = newStudentData
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("Data has been deleted")
})

// streaming
app.get("/movie", (req, res) => {
    const movie_chunk = fs.createReadStream("./data.txt", "utf-8")
    movie_chunk.pipe(res)
})

// server running 
app.listen(8080, () => {
    console.log("Server is running at 8080......")
})