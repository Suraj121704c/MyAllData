//  import required modules from nodejs and build the server
const express = require('express');
const app = express();
const { validatorfunction } = require("./middlewares/validator")

app.use(express.json())

app.post("/", validatorfunction, (req, res) => {
    res.status(200).send('data received');
})

// app.listen(8000, () => {
//     console.log("Server is running at 8000...")
// })

// export the server

module.exports = app;