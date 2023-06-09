// import required modules
const express = require("express")
const morgan = require("morgan");
const fs = require("fs")
const app = express(morgan(`:method :status :res[content-length] :response-time ms :date[clf] :http-version :url\n`))
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({ message: "welcome to server" })
})

app.get('/get-users', (req, res) => {
    res.status(200).json({ message: 'here is the list of all users' });
});


app.post('/add-user', (req, res) => {
    res.status(201).json({ message: 'user added successfully' });
});

app.put('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(201).json({ message: `user ${id} updated successfully` });
});

app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `user ${id} deleted successfully` });
});

app.listen(8000, () => {
    console.log(`Server is listening on port 8000`);
});

// export the server
module.exports = app;
