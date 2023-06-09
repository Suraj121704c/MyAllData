const fieldsAnalyzer = (req, res, next) => {
    const { movie_name, genre, director, rating, year_of_release } = req.body
    if (movie_name !== undefined) {
        if (genre !== undefined) {
            if (director !== undefined) {
                if (rating !== undefined) {
                    if (year_of_release !== undefined) {
                        next()
                    } else {
                        res.send({
                            "err": "Few fields are missing, cannot process the request"
                        })
                    }
                } else {
                    res.send({
                        "err": "Few fields are missing, cannot process the request"
                    })
                }
            } else {
                res.send({
                    "err": "Few fields are missing, cannot process the request"
                })
            }
        } else {
            res.send({
                "err": "Few fields are missing, cannot process the request"
            })
        }
    } else {
        res.send({
            "err": "Few fields are missing, cannot process the request"
        })
    }
}

module.exports = fieldsAnalyzer