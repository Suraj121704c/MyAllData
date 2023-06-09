const updateLimitor = (req, res, next) => {
    const data = req.body
    const isMutable = data.mutable

    if (!isMutable) {
        return res.send('Updating this document is not allowed');
    }
    next()
}

module.exports = {
    updateLimitor
}