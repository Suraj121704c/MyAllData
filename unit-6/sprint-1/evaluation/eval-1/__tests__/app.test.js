const request = require("supertest");
const fs = require("fs");
const app = require("../index");
var yodasay = require('yodasay');

global.score = 1;

const initialData = [
  {
    id: 1,
    first_name: "Una",
    last_name: "Pechet",
    email: "upechet0@kickstarter.com",
    gender: "Female",
  },
  {
    id: 2,
    first_name: "Jamal",
    last_name: "Geraghty",
    email: "jgeraghty1@icq.com",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Inness",
    last_name: "MacDougall",
    email: "imacdougall2@howstuffworks.com",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Dannel",
    last_name: "Jeanes",
    email: "djeanes3@livejournal.com",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Tedda",
    last_name: "Wayt",
    email: "twayt4@goodreads.com",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Francisco",
    last_name: "Gerg",
    email: "fgerg5@marriott.com",
    gender: "Male",
  },
  {
    id: 7,
    first_name: "Ceciley",
    last_name: "Baddam",
    email: "cbaddam6@marriott.com",
    gender: "Genderfluid",
  },
  {
    id: 8,
    first_name: "Wit",
    last_name: "Hardwell",
    email: "whardwell7@yahoo.co.jp",
    gender: "Male",
  },
  {
    id: 9,
    first_name: "Gabi",
    last_name: "Cowburn",
    email: "gcowburn8@seesaa.net",
    gender: "Female",
  },
  {
    id: 10,
    first_name: "Eloisa",
    last_name: "Rabat",
    email: "erabat9@dedecms.com",
    gender: "Female",
  },
  {
    id: 11,
    first_name: "Philis",
    last_name: "Dehm",
    email: "pdehma@weibo.com",
    gender: "Female",
  },
  {
    id: 12,
    first_name: "Garvey",
    last_name: "Greveson",
    email: "ggrevesonb@skyrock.com",
    gender: "Male",
  },
  {
    id: 13,
    first_name: "Pet",
    last_name: "Grolmann",
    email: "pgrolmannc@csmonitor.com",
    gender: "Female",
  },
  {
    id: 14,
    first_name: "Early",
    last_name: "Nevett",
    email: "enevettd@ca.gov",
    gender: "Male",
  },
  {
    id: 15,
    first_name: "Whittaker",
    last_name: "Jewell",
    email: "wjewelle@biblegateway.com",
    gender: "Male",
  },
  {
    id: 16,
    first_name: "Kristel",
    last_name: "Huggins",
    email: "khugginsf@goo.gl",
    gender: "Bigender",
  },
  {
    id: 17,
    first_name: "Trstram",
    last_name: "Massinger",
    email: "tmassingerg@techcrunch.com",
    gender: "Male",
  },
  {
    id: 18,
    first_name: "Elfrieda",
    last_name: "Glavin",
    email: "eglavinh@github.com",
    gender: "Female",
  },
  {
    id: 19,
    first_name: "Farly",
    last_name: "Gomby",
    email: "fgombyi@mail.ru",
    gender: "Bigender",
  },
  {
    id: 20,
    first_name: "Merwyn",
    last_name: "Sturridge",
    email: "msturridgej@reddit.com",
    gender: "Male",
  },
  {
    id: 21,
    first_name: "Melissa",
    last_name: "Dallewater",
    email: "mdallewaterk@fema.gov",
    gender: "Female",
  },
  {
    id: 22,
    first_name: "Jonathan",
    last_name: "Lightowlers",
    email: "jlightowlersl@ucsd.edu",
    gender: "Non-binary",
  },
  {
    id: 23,
    first_name: "Lynn",
    last_name: "Cassley",
    email: "lcassleym@independent.co.uk",
    gender: "Female",
  },
  {
    id: 24,
    first_name: "Thaddeus",
    last_name: "Bissill",
    email: "tbissilln@gizmodo.com",
    gender: "Male",
  },
  {
    id: 25,
    first_name: "Vannie",
    last_name: "Hanton",
    email: "vhantono@columbia.edu",
    gender: "Female",
  },
];

beforeAll(() => {
  fs.writeFileSync("data.json", JSON.stringify(initialData));

  fs.writeFileSync("./logs.txt", "");
});

describe("People Management System", () => {
  // 1

  it('should able to perform the oprations for "/" route', async () => {
    const res = await request(app).get("/");

    let ct = "content-type";

    console.log(res.headers[ct]);
    expect(res.headers[ct]).toBe("text/html");
    expect(res.text).toBe("<h1>Welcome to the Home Page</h1>");
    global.score += 1;
  });

  // 2

  it('should able to write initial count of Male & Female along with time stamp in the logs.txt file on hitting "/gencount" route', async () => {
    const res = await request(app).get("/gencount");

    let resText = fs.readFileSync("logs.txt").toString();
    expect(resText).toBe(`The initial Male count is 11 and Female count is 10 at ${Date()}\n`);

    global.score += 1;
  });

  // 3

  it('should able to send approprite response in "/gencount" route', async () => {
    const res = await request(app).get("/gencount");
    expect(res.text).toBe("The count has been updated in the logs file");
    global.score += 1;
  });

  // 4

  it('should able to update the new user in "data.json" file on hitting "/addnew" route', async () => {
    const res = await request(app).get("/addnew");

    expect(res.text).toBe(
      `The data has been updated, go and check the data file`
    );

    let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

    expect(data.length).toEqual(26);

    global.score += 2;
  });

 // 5

  it('should able to get all the users in unordered list form on hitting "/people""', async () => {
    const res = await request(app).get("/people");

    let ct = "content-type";
    console.log(res.headers[ct]);
    expect(res.headers[ct]).toBe("text/html");

    console.log(res.text);

    let users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

    let testPeopleData = "";
    users.map((ele) => {
      testPeopleData += `First Name: ${ele.first_name} Last Name: ${ele.last_name} Gender: ${ele.gender} Email: ${ele.email}\n`;
    });
    
    let resPeopleData = fs.readFileSync("people.txt").toString();

    expect(res.text).toBe("The file has been created and data has been entered");

    expect(resPeopleData).toBe(testPeopleData);
    global.score += 1;
  });

// 6

  it('should able to get IP address and family on hitting "/address" route', async () => {
    const res = await request(app).get("/address");
    expect(res.text).toBe("Logs File has been updated");
    // console.log(res);

    global.score += 1;
  });

// 7

  it('should able to append it in "logs.txt" on hitting "/address" route', async () => {
    let address = ["65.0.227.101", "65.0.189.239", "3.7.198.157","43.205.52.177",'3.108.28.96'];

    const mockLookup = jest.fn((url, cb) => {
      cb(null, "192.0.2.1", 4);
    });
    jest.mock("dns", () => ({
      lookup: mockLookup,
    }));

    const res = await request(app).get("/address");

    expect(res.status).toBe(200);

    expect(res.text).toBe("Logs File has been updated");

    let resText = fs.readFileSync("logs.txt").toString().trim().split("\n");
    // expect(adress).toContain(resText[resText.length-1]);
    //   expect(resText[resText.length-1]).toContain(expect.stringContaining(address[0])
    // || expect.stringContaining(address[1])
    // || expect.stringContaining(address[2]));

    const containsAddress = resText.some((log) => {
      return address.some((ip) => {
        return log.includes(ip);
      });
    });

    expect(containsAddress).toBe(true);

    global.score += 1;
  });

// 8

  it('should able to get the desired response upon hitting "/yoda" route', async () => {
    // execSync("node index.js");
    const res = await request(app).get("/yoda");

    let data = fs.readFileSync("people.txt", "utf-8").toString();

    let testData = yodasay.say({
      text: data,
    });

    expect(res.text).toBe(testData);
    global.score += 1;
  });


});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
