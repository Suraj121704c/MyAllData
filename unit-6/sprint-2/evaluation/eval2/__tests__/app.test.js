const request = require("supertest");
const fs = require("fs");
const app = require("../index");

global.score = 1;
const initialData = {
  marvel: [
    {
      id: 1,
      name: "Bruce Banner",
      alias: "Hulk",
      power_level: 8,
      role: "member",
    },
    {
      id: 2,
      name: "Tony Stark",
      alias: "Iron Man",
      power_level: 7,
      role: "leader",
    },
    {
      id: 3,
      name: "Steeve Rogers",
      alias: "Captain America",
      power_level: 7,
      role: "leader",
    },
    {
      id: 4,
      name: "Wanda Maximoff",
      alias: "Scarlet Witch",
      power_level: 10,
      role: "member",
    },
    {
      id: 5,
      name: "Natasha",
      alias: "Black Widow",
      power_level: 5,
      role: "member",
    },
  ],

  dc: [
    {
      id: 1,
      name: "Barry Allen",
      alias: "Flash",
      power_level: 7,
      role: "member",
    },
    {
      id: 2,
      name: "Damian Wayne",
      alias: "Robin",
      power_level: 4,
      role: "member",
    },
    {
      id: 3,
      name: "Clark Kent",
      alias: "Superman",
      power_level: 10,
      role: "member",
    },
    {
      id: 4,
      name: "Oliver Queen",
      alias: "Green Arrow",
      power_level: 4,
      role: "member",
    },
    {
      id: 5,
      name: "Bruce Wayne",
      alias: "Batman",
      power_level: 8,
      role: "leader",
    },
  ],
};

beforeAll(() => {
  fs.writeFileSync("db.json", JSON.stringify(initialData));

  fs.writeFileSync("./logs.txt", "");
});

describe("node_marvel-dc_super_team", () => {
  // 1

  it('should able to perform the oprations for "/" route', async () => {
    const res = await request(app)
      .get("/")
      .then((response) => {
        let ct = "content-type";

        console.log(response.headers[ct]);
        expect(response.headers[ct]).toBe("text/html; charset=utf-8");
        expect(response.text).toBe(
          "<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>"
        );

        global.score += 0.5;
      });
  });

  // 2

  it('should able to post the data and send the appropriate response on hitting at "/marvel/addnew"', async () => {
    let data = {
      id: 6,
      name: "Chadwick Boseman",
      alias: "Black Panther",
      power_level: 7,
      role: "member",
    };
    const res = await request(app)
      .post("/marvel/addnew")
      .send(data)
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("New superhero has been added");
        // done();
        global.score += 0.5;
      });
  });

  // 3

  it('should able to post the data and send the appropriate response on hitting at "/dc/addnew"', async () => {
    let data = {
      id: 6,
      name: "Jason Momoa",
      alias: "Aquaman",
      power_level: 5,
      role: "member",
    };
    const res = await request(app)
      .post("/dc/addnew")
      .send(data)
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("New superhero has been added");
        // done();
        global.score += 0.5;
      });
  });

  // 4

  it('should able to do all the things mentioned for "/marvel" route', async () => {
    const res = await request(app).get("/marvel");

    expect(res.text).toBe(
      `[{"id":1,"name":"Bruce Banner","alias":"Hulk","power_level":8,"role":"member"},{"id":2,"name":"Tony Stark","alias":"Iron Man","power_level":7,"role":"leader"},{"id":3,"name":"Steeve Rogers","alias":"Captain America","power_level":7,"role":"leader"},{"id":4,"name":"Wanda Maximoff","alias":"Scarlet Witch","power_level":10,"role":"member"},{"id":5,"name":"Natasha","alias":"Black Widow","power_level":5,"role":"member"},{"id":6,"name":"Chadwick Boseman","alias":"Black Panther","power_level":7,"role":"member"}]`
    );

    // cheacking with alias quarry

    const aliasData = await request(app).get("/marvel?alias=Black Widow");

    expect(aliasData.text).toBe(`{"id":5,"name":"Natasha","alias":"Black Widow","power_level":5,"role":"member"}`);

    global.score += 0.5;
  });

  // 5

  it('should able to do all the things mentioned for "/dc" route', async () => {
    const res = await request(app).get("/dc");

    expect(res.text).toBe(
      `[{"id":1,"name":"Barry Allen","alias":"Flash","power_level":7,"role":"member"},{"id":2,"name":"Damian Wayne","alias":"Robin","power_level":4,"role":"member"},{"id":3,"name":"Clark Kent","alias":"Superman","power_level":10,"role":"member"},{"id":4,"name":"Oliver Queen","alias":"Green Arrow","power_level":4,"role":"member"},{"id":5,"name":"Bruce Wayne","alias":"Batman","power_level":8,"role":"leader"},{"id":6,"name":"Jason Momoa","alias":"Aquaman","power_level":5,"role":"member"}]`
    );
    // cheacking with alias quarry

    const aliasData = await request(app).get("/dc?alias=Batman");

    expect(aliasData.text).toBe(`{"id":5,"name":"Bruce Wayne","alias":"Batman","power_level":8,"role":"leader"}`);

    global.score += 0.5;
  });

  // 6

  it('should able to do all the things mentioned for "/marvel/:id" route" route', async() => {
    const res = await request(app).get("/marvel/1");
    expect(res.text).toBe(`{"id":1,"name":"Bruce Banner","alias":"Hulk","power_level":8,"role":"member"}`);

    global.score += 0.5;
  });

  // 7

  it('should able to do all the things mentioned for "/dc/:id" route',  async() => {
    const res = await request(app).get("/dc/1");
    expect(res.text).toBe(`{"id":1,"name":"Barry Allen","alias":"Flash","power_level":7,"role":"member"}`);

    global.score += 0.5;
  });

  // 8

  it('should able to do all the things mentioned for "/winningteam" route', async () => {
    const res = await request(app).get("/winningteam");

    expect(res.text).toBe(`[{"id":1,"name":"Bruce Banner","alias":"Hulk","power_level":8,"role":"member"},{"id":2,"name":"Tony Stark","alias":"Iron Man","power_level":7,"role":"leader"},{"id":3,"name":"Steeve Rogers","alias":"Captain America","power_level":7,"role":"leader"},{"id":4,"name":"Wanda Maximoff","alias":"Scarlet Witch","power_level":10,"role":"member"},{"id":5,"name":"Natasha","alias":"Black Widow","power_level":5,"role":"member"},{"id":6,"name":"Chadwick Boseman","alias":"Black Panther","power_level":7,"role":"member"}]`);
    global.score += 0.5;
  });

  // 9
  it('should able to do all the things mentioned for "/marvel/update/:id" route ', (done) => {
    request(app)
      .patch("/marvel/update/1?role=leader&pass=4534")
      .send({
        id: 1,
        name: "Bruce Banner",
        alias: "Hulk",
        power_level: 9,
        role: "leader",
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("Patched Character Details");
        let quarries = responce.req.path.split("?")[1];
        //.split("&").map((e)=>e.split("="));
        // console.log(quarries);
        expect(quarries).not.toBeUndefined();
        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);
        let updatedMarvelHero;

        db.marvel.forEach((element) => {
          if (element.id === 1) {
            updatedMarvelHero = element;
          }
        });

        expect(updatedMarvelHero.power_level).toEqual(9);

        expect(updatedMarvelHero.role).toMatch("leader");
        done();
        global.score += 0.5;
      });
  });
  // 10
  it('should able to do all the things mentioned for "/dc/update/:id" route', (done) => {
    request(app)
      .patch("/dc/update/1?role=leader&pass=4534")
      .send({
        id: 1,
        name: "Barry Allen",
        alias: "Flash",
        power_level: 8,
        role: "leader",
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("Patched Character Details");
        let quarries = responce.req.path.split("?")[1];
        //.split("&").map((e)=>e.split("="));
        // console.log(quarries);
        expect(quarries).not.toBeUndefined();
        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);
        let updatedDcHero;

        db.dc.forEach((element) => {
          if (element.id === 1) {
            updatedDcHero = element;
          }
        });

        expect(updatedDcHero.power_level).toEqual(8);

        expect(updatedDcHero.role).toMatch("leader");
        done();
        global.score += 0.5;
      });
  });
  // 11
  it('should able to do all the things mentioned for "/marvel/delete/:id" route', (done) => {
    request(app)
      .delete("/marvel/delete/1?role=leader&pass=4534")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toBe("Deleted Character Details");

        let quarries = responce.req.path.split("?")[1];

        expect(quarries).not.toBeUndefined();

        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);
        let deletedMarvelHero = null;

        db.marvel.forEach((element) => {
          if (element.id === 1) {
            deletedMarvelHero = element;
          }
        });

        expect(deletedMarvelHero).toBeNull();
        done();
        global.score += 0.5;
      });
  });
  // 12
  it('should able to do all the things mentioned for "/dc/delete/:id" route', (done) => {
    request(app)
      .delete("/dc/delete/1?role=leader&pass=4534")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("Deleted Character Details");
        let quarries = responce.req.path.split("?")[1];

        expect(quarries).not.toBeUndefined();

        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);
        let deletedDcHero = null;

        db.dc.forEach((element) => {
          if (element.id === 1) {
            deletedDcHero = element;
          }
        });

        expect(deletedDcHero).toBeNull();
        done();
        global.score += 0.5;
      });
  });
  // 13
  it('"logger" middleware is working fine', (done) => {
    request(app)
      .get("/")
      .expect(200)
      .then((responce) => {
        let resText = fs.readFileSync("logs.txt").toString().trim().split("\n");

        let currentLog = resText[resText.length - 1].trim().split(" ");
        expect(currentLog).toContain("Method:GET,");
        expect(currentLog).toContain("Route:/,");
        done();
        global.score += 0.5;
      });
  });
  // 14
  it('"validator" middleware is working fine', (done) => {
    // checking update request
    request(app)
      .patch("/dc/update/2")
      .send({
        name: "Barry Allen",
        alias: "Flash",
        power_level: 8,
        role: "leader",
      })
      .set("Accept", "application/json")
      .expect(401)
      .then((responce) => {
        expect(responce.text).toMatch(
          "You are not authorised to do this operation"
        );
        done()
        global.score += 0.5;
      });

    // checking delete request
    // request(app)
    //   .delete("/dc/delete/1")
    //   .expect(401)
    //   .then((responce) => {
    //     expect(responce.text).toMatch(
    //       "You are not authorised to do this operation"
    //     );
    //     done();
    //     global.score += 0.25;
    //   });
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
