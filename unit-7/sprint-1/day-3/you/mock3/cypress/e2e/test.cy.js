import data from "../../submissionData.json";

// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "shanti-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

let mock = {
  books: [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      category: "Fantasy",
      image:
        "https://user-images.githubusercontent.com/101581634/234347858-680f0add-e33b-4bb0-afc4-3afd1409a766.jpg",
      price: "1235",
    },
    {
      id: 2,
      title: "The Adventures of Huckleberry Finn",
      author: "Mark Twain",
      category: "Classic",
      image:
        "https://user-images.githubusercontent.com/101581634/234347869-af3cc4fa-6e67-4abf-a20b-75410105721d.jpg",
      price: "17535",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Classic",
      image:
        "https://user-images.githubusercontent.com/101581634/234347837-8ab1d54d-74e1-48c3-8b2d-fbcc2e4c060c.jpg",
      price: 6652,
    },
    {
      id: 4,
      title: "The Odyssey",
      author: "Homer",
      category: "Epic poem",
      image:
        "https://user-images.githubusercontent.com/101581634/234347820-e51d5678-4633-4779-89fc-00c63b34457b.jpg",
      price: 785,
    },
    {
      id: 5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic",
      image:
        "https://user-images.githubusercontent.com/101581634/234347792-2e36e823-95bb-4a8f-9189-0b894d74b2d8.jpg",
      price: 2895,
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      image:
        "https://user-images.githubusercontent.com/101581634/234347864-8c6acce9-e900-49c1-b6ab-2a2ee00ee804.jpg",
      price: 3641,
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Coming of age",
      image:
        "https://user-images.githubusercontent.com/101581634/234347874-148612ae-7123-4b5c-a571-e3032305c115.jpg",
      price: 856,
    },
    {
      id: 8,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      image:
        "https://user-images.githubusercontent.com/101581634/234347813-6471cf73-d97f-475d-b39a-ae78664809e8.jpg",
      price: 542,
    },
    {
      id: 9,
      title: "Animal Farm",
      author: "George Orwell",
      category: "Political satire",
      image:
        "https://user-images.githubusercontent.com/101581634/234347848-b77080cc-8ff6-4106-a9a9-85c9dd417412.jpg",
      price: 4177,
    },
    {
      id: 10,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      image:
        "https://user-images.githubusercontent.com/101581634/234347807-eb036bad-42b3-4d03-a230-1a2e404cb961.jpg",
      price: 6981,
    },
    {
      id: 11,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      category: "Mystery",
      image:
        "https://user-images.githubusercontent.com/101581634/234347883-c80c57a5-4e34-4c2e-9367-4a27d1608087.jpg",
      price: 9562,
    },
    {
      id: 12,
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      category: "Mystery",
      image:
        "https://user-images.githubusercontent.com/101581634/234347889-11ca9175-4394-4b45-b43f-5bcf59f3c22b.jpg",
      price: 352,
    },
    {
      id: 13,
      title: "Brave New World",
      author: "Aldous Huxley",
      category: "Dystopian",
      image:
        "https://user-images.githubusercontent.com/101581634/234347853-7d5727f7-f60b-49cf-a303-4f2625d3ff2c.jpg",
      price: 4451,
    },
    {
      id: 14,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      category: "Classic",
      image:
        "https://user-images.githubusercontent.com/101581634/234347830-11504733-28c2-4a15-81f1-6dc072c5e54f.jpg",
      price: 1125,
    },
    {
      id: 15,
      title: "1984",
      author: "George Orwell",
      category: "Dystopian",
      image:
        "https://user-images.githubusercontent.com/101581634/234347844-584268dd-c784-496e-a769-8166179d8f07.jpg",
      price: 7411,
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.clearCookies();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    it("Shows the correct initial data", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      const numOfBooks = mock.books.length;
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(".card-list").children().should("have.length", 15);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .first()
        .should("contain", mock.books[0].title);
      cy.get(cards)
        .eq(Math.ceil(numOfBooks / 2))
        .should("contain", mock.books[Math.ceil(numOfBooks / 2)].title);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .last()
        .should("contain", mock.books[numOfBooks - 1].title);
      cy.then(() => {
        acc_score += 3;
      });
    }); // 3

    it("Able to add new book", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.intercept("POST", "**/books").as("postRequest");
      cy.visit(url);
      cy.wait("@getBooks");
      let data = {
        title: "Three Thousand Stitches",
        author: "Sudha Murty",
        category: "Homer",
        image:
          "https://user-images.githubusercontent.com/101581634/234352499-cc5743a0-b343-4001-9f20-2ae357f9886b.jpg",
        price: 5126,
      };
      cy.get("#book-title").type(data.title);
      cy.get("#book-image").type(data.image);
      cy.get("#book-category").type(data.category);
      cy.get("#book-author").type(data.author);
      cy.get("#book-price").type(data.price);
      cy.get("#add-book").should("be.visible").click();
      cy.wait("@postRequest");
      cy.wait("@getBooks");
      cy.wait(1000);
      cy.get(".card-list").children().should("have.length", 16);
      cy.get(".card-list")
        .children()
        .last()
        .find(".card-title")
        .contains("Three Thousand Stitches");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to delete a book", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.intercept("DELETE", "**/books/**").as("deleteRequest");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get(".card-list").children().last().find(".card-button").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait("@deleteRequest");
      cy.wait("@getBooks");
      cy.wait(1000);
      cy.get(".card-list").children().should("have.length", 14);
      cy.get(cards)
        .first()
        .should("contain", "Harry Potter and the Philosopher's Stone");
      cy.get(cards).last().should("contain", "The Picture of Dorian Gray");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to edit all fields of the book", () => {
      cy.intercept("PATCH", `**/books/**`).as("patchedBook");
      cy.intercept("GET", "**/books").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards).first().find(".card-link").click();
      cy.wait(1000);
      cy.get("#update-book-title").clear().type("Energize Your Mind");
      cy.get("#update-book-image")
        .clear()
        .type(
          "https://user-images.githubusercontent.com/101581634/234347853-7d5727f7-f60b-49cf-a303-4f2625d3ff2c.jpg"
        );
      cy.get("#update-book-author").type("Gaur Gopal Das");
      cy.get("#update-book-price").clear().type(1235);
      cy.get("#update-book").should("be.visible").click();
      cy.wait("@patchedBook");
      cy.wait("@getBooks");
      cy.wait(1000);
      cy.get(cards).first().find(".card-title").contains("Energize Your Mind");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to edit the price", () => {
      cy.intercept("PATCH", `**/books/**`).as("patchedBook");
      cy.intercept("GET", "**/books").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards).first().find(".card-link").click();
      //add condition in problem statement
      cy.wait(1000);
      cy.get("#update-price-book-price").clear().type(4512);
      cy.get("#update-price-book").click();
      cy.wait("@patchedBook");
      cy.wait("@getBooks");
      cy.wait(1000);
      cy.get(cards).first().find(".card-price").contains(4512);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it("Sorts as expected", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-low-to-high").click();
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each(($el) => {
          arr.push(+$el.find(".card-price").text());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isSorted = arr.reduce(
            (n, item) => n !== false && item >= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.get("#sort-high-to-low").click();
      cy.wait(100);
      let arr2 = [];
      cy.get(cards)
        .each(($el) => {
          arr2.push(+$el.find(".card-price").text());
        })
        .then(() => {
          //console.log(arr2, arr2.length);
          const isSorted = arr2.reduce(
            (n, item) => n !== false && item <= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Filters as expected", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#filter-Classic").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each((el) => {
          arr.push(el.find(".card-category").text().trim());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isClassic = arr.reduce(
            (n, item) => n !== false && item === "Classic"
          );
          expect(!!isClassic).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.get("#filter-Fantasy").click();
      cy.wait(500);
      let arr2 = [];
      cy.get(cards)
        .each((el) => {
          arr2.push(el.find(".card-category").text().trim());
        })
        .then(() => {
          //console.log(arr2, arr2.length);
          const isFantasy = arr2.reduce(
            (n, item) => n !== false && item === "Fantasy"
          );
          expect(!!isFantasy).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });
      cy.get("#filter-Mystery").click();
      cy.wait(500);
      let arr3 = [];
      cy.get(cards)
        .each((el) => {
          arr3.push(el.find(".card-category").text().trim());
        })
        .then(() => {
          //console.log(arr3, arr3.length);
          const isMystery = arr3.reduce(
            (n, item) => n !== false && item === "Mystery"
          );
          expect(!!isMystery).to.be.true;
          expect(arr3.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Able to search by title", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#search-by-select").select("title");
      cy.get("#search-by-input").clear().type("To Kill a Mockingbird");
      cy.get("#search-by-button").click();
      cy.wait(500);
      cy.get(".card-list").children().should("have.length", 1);
      cy.get(".card-list")
        .children()
        .first()
        .find(".card-title")
        .contains("To Kill a Mockingbird");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it("Able to search by the author", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#search-by-select").select("author");
      cy.get("#search-by-input").clear().type("Jane Austen");
      cy.get("#search-by-button").click();
      cy.wait(500);
      cy.get(".card-list").children().should("have.length", 1);
      cy.get(".card-list")
        .children()
        .first()
        .find(".card-author")
        .contains("Jane Austen");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
