// import required modules
const express = require("express")
const multer = require("multer")

const app = express()

// const upload = multer({ dest: "../uploads/" })

// app.get("/", (req, res) => {
//     res.status(200).json({ message: "welcome to server" })
// })

// app.post("/upload", upload.single("file"), (req, res) => {
//     res.status(200).json({ message: "file uploaded successfully" })
// })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.get("/", (req, res) => {
    res.status(200).send({ message: "welcome to server" })
})

app.post("/upload", upload.single('filename'), (req, res) => {
    res.status(200).send({ message: "file uploaded successfully" })
})

app.listen(8000, () => {
    console.log("Server is running at the port 8000...");
})

// export the server
// eg.module.exports = app;
module.express = app;