const express = require('express');
const fs = require('fs');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json())
app.use(logger)

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>');
});

// Add new Marvel superhero
app.post('/marvel/addnew', (req, res) => {
    const newSuperhero = {
        id: 6,
        name: "Chadwick Boseman",
        alias: "Black Panther",
        power_level: 7,
        role: "member"
    };

    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        const db = JSON.parse(data);
        db.marvel.push(newSuperhero);

        fs.writeFile('./db.json', JSON.stringify(db), (err) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.send('New superhero has been added');
        });
    });
});

// Add new DC superhero
app.post('/dc/addnew', (req, res) => {
    const newSuperhero = {
        id: 6, // or any other unique ID of your choice
        name: "Jason Momoa",
        alias: "Aquaman",
        power_level: 5,
        role: "member"
    };

    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        const db = JSON.parse(data);
        db.dc.push(newSuperhero);

        fs.writeFile('./db.json', JSON.stringify(db), (err) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.send('New superhero has been added');
        });
    });
});

// Get all Marvel superheroes
app.get('/marvel', (req, res) => {
    const { alias } = req.query;

    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        const db = JSON.parse(data);

        if (alias) {
            const superhero = db.marvel.find((s) => s.alias === alias);
            res.send(superhero);
        } else {
            res.send(db.marvel);
        }
    });
});

// Get all DC superheroes
app.get('/dc', (req, res) => {
    const { alias } = req.query;

    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        const db = JSON.parse(data);

        if (alias) {
            const superhero = db.dc.find((s) => s.alias === alias);
            res.send(superhero);
        } else {
            res.send(db.dc);
        }
    });
});

// Get a particular Marvel superhero by id
app.get('/marvel/:id', (req, res) => {
    const dbData = JSON.parse(fs.readFileSync('./db.json'));
    const character = dbData.marvel.find((character) => character.id === parseInt(req.params.id));
    res.send(character);
});

// Get a particular DC superhero by id
app.get('/dc/:id', (req, res) => {
    const dbData = JSON.parse(fs.readFileSync('./db.json'));
    const character = dbData.dc.find((character) => character.id === parseInt(req.params.id));
    res.send(character);
});

app.get("/winningteam", (req, res) => {

    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(400).send(err);
        }
        const hero = JSON.parse(data)
        const marvel = hero.marvel.reduce((acc, el) => {
            return acc + el.power_level
        }, 0)
        const dc = hero.dc.reduce((acc, el) => {
            return acc + el.power_level
        }, 0)
        if (marvel > dc) {
            res.send(hero.marvel)
        }
        else {
            res.send(hero.dc)
        }
    })

})

app.patch("/dc/update/:id",(req,res)=>{

    const id = req.params.id;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.status(400).send(err)
        }

        const dc_data = JSON.parse(data);
      dc_data.dc.forEach((item)=>{
        if(item.id == id){
        for(let key in req.body){
            item[key] = req.body[key];
        }
    }
      })

      fs.writeFileSync("./db.json",JSON.stringify(dc_data))
      res.send("Patched Character Details");
      
})
})

app.patch("/marvel/update/:id",(req,res)=>{

    const id = req.params.id;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.status(400).send(err)
        }

        const marvel_data = JSON.parse(data);
      marvel_data.marvel.forEach((item)=>{
        if(item.id == id){
        for(let key in req.body){
            item[key] = req.body[key];
        }
    }
      })

      fs.writeFileSync("./db.json",JSON.stringify(marvel_data))
      res.send("Patched Character Details");
      
})
})

// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });

// Do not forget to export the server.
// e.g => module.exports = server;
module.exports = app