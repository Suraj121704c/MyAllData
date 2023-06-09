const express = require("express")
const { connection, MovieModel } = require("./db")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home Page")
})

// posting data
app.post("/addmovie", async (req, res) => {
    try {
        const movie = new MovieModel(req.body)
        await movie.save()
        res.send("Added a new Movie")
    } catch (error) {
        res.send(error)
    }
})

// getting data
app.get("/getmovie", async (req, res) => {
    let query = req.query
    try {
        let data = await MovieModel.find(query)
        res.send(data)
    } catch (error) {
        res.send("Something went wrong")
    }
})

// patch
app.patch("/updatemovie/:id", async (req, res) => {
    const { id } = req.params
    try {
        await MovieModel.findByIdAndUpdate({ _id: id }, req.body)
        res.send("Data Updated")
    } catch (err) {
        console.log("Something went wrong")
    }
})

// delting data
app.delete("/deleteuser/:id", async (req, res) => {
    const { id } = req.params
    try {
        await MovieModel.findByIdAndDelete({ _id: id })
        res.send("Data deleted")
    } catch (error) {
        res.send("something went wrong...")
    }
})

// optional filter and search also with pagenation
app.get("/fill", async (req, res) => {
    const { name, rating, q, page, limit } = req.query;
    const filters = {}
    if (name) {
        filters.name = { $regex: name.toLowerCase(), $options: 'i' };
    }

    if (rating) {
        filters.rating = rating;
    }

    if (q) {
        filters.name = { $regex: q.toLowerCase(), $options: 'i' };
    }

    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const skip = (pageNumber - 1) * pageSize;

    try {
        const count = await MovieModel.countDocuments(filters);
        const movies = await MovieModel.find(filters)
            .skip(skip)
            .limit(pageSize);

        res.send({
            totalCount: count,
            pageSize,
            currentPage: pageNumber,
            totalPages: Math.ceil(count / pageSize),
            movies
        });
    } catch (err) {
        res.send("Something went wrong...")
    }
})

app.get("/sorts", async (req, res) => {
    const { s } = req.query
    try {
        let movies
        if (s === "asc") {
            movies = await MovieModel.find().sort({ rating: 1 })
        } else if (s === "desc") {
            movies = await MovieModel.find().sort({
                rating: -1
            })
        }
        res.send(movies)
    } catch (error) {
        res.send(error)
    }
})

app.listen(8000, async (req, res) => {
    try {
        await connection
        console.log("Connected to Server")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
    console.log("server is running at port 8000.....");
})