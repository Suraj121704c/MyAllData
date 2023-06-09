const express = require("express")
const { connection } = require("./models/db")
const AllMovies = require("./routes/all_movies")
const DeleteMovies = require("./routes/delete_route")
const UpdateMovies = require("./routes/patch_route")
const movies = require("./routes/postRoute")
const SingleMovie = require("./routes/single_movie")
const app = express()

app.get("/", (req, res) => {
    res.send({
        Routes: {
            "To get all movies": "/movies",
            "To get a particular movie": "/movies/:id",
            "To add any movie": "/add",
            "To update any movie": "/update/:id",
            "To delete any movie": "/delete/:id"
        },
        Queries: {
            "to get the movies in between a min and max rating": "/movies?min_rating=3&max_rating=8",
            "to get the movies of a particular genre": "/movies?genre=action",
            "to get the movies above the year_of _release": "/movies?year=1999",
            "Pagination": "/movies?page=1"
        }
    })
})
app.use("/", movies)
app.use("/", DeleteMovies)
app.use("/", UpdateMovies)
app.use("/", AllMovies)
app.use("/", SingleMovie)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log('connected')
    } catch (error) {
        console.log(error.message)
    }
})