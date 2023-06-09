const fs = require("fs");

// make the validator function and export it.
const validatorfunction = (req, res, next) => {
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;

    if (typeof ID !== 'number') {
        fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }

    if (typeof ID === 'number') {
        fs.appendFileSync('res.txt', 'ID is a number\n');
    }

    if (typeof Name !== 'string' || /\d/.test(Name)) {
        fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }

    if (typeof Name === 'string') {
        fs.appendFileSync('res.txt', 'Name is a string\n');
    }

    if (typeof Rating !== 'number') {
        fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }

    if (typeof Rating === 'number') {
        fs.appendFileSync('res.txt', 'Rating is a number\n');
    }


    if (typeof Description !== 'string') {
        fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }

    if (typeof Description === 'string') {
        fs.appendFileSync('res.txt', 'Description is a string\n');
    }


    if (typeof Genre !== 'string') {
        fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }

    if (typeof Genre === 'string') {
        fs.appendFileSync('res.txt', 'Genre is a string\n');
    }

    if (!Array.isArray(Cast) || Cast.some((cast) => typeof cast !== 'string')) {
        fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }

    if (Array.isArray(Cast) || Cast.some((cast) => typeof cast === 'string')) {
        fs.appendFileSync('res.txt', 'Cast is a array of string\n');
    }

    next();
}

module.exports = { validatorfunction };
