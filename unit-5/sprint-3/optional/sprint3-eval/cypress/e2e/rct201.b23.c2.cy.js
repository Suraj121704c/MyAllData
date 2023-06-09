import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];

const getAuthStore = (win) => win.store.getState().authReducer;
const getMoviesStore = (win) => win.store.getState().movieReducer;

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Movie Library", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Check Initial Redux Store Structure for Authentication`, () => {
      cy.window()
        .then(getAuthStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          isAuth: false,
          token: "",
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check Initial Redux Store Structure for Movies`, () => {
      cy.window()
        .then(getMoviesStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          movies: [],
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Get request should be made for movies when home page loads`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/movies").as("movies");
      cy.wait("@movies").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
        expect(xhr.url, "get url").to.match(/\/movies$/);
      });
      cy.get("@movies").its("response.body").should("have.length", 20);
      cy.then(() => (acc_score += 1));
    });

    it(`isLoading should update accordingly while making request`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/movies").as("data");

      cy.window().then(getMoviesStore).its("isLoading").should("eq", false);

      cy.wait("@data");
      cy.wait(1000).then(() => {
        cy.window().then(getMoviesStore).its("isLoading").should("eq", false);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`Movie state in store should update when movie loads on homepage`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/movies").as("data");

      cy.window().then(getMoviesStore).its("movies").should("have.length", 0);

      cy.wait("@data");
      cy.wait(1000);

      cy.window().then(getMoviesStore).its("movies").should("have.length", 20);
      cy.then(() => (acc_score += 2));
    });

    it(`All Movies should be displayed on home page`, () => {
      cy.get("[data-testid=movie-list]").children().should("have.length", 20);
      cy.get(".movie-card").should("have.length", 20);
      cy.get(".movie-name").eq(1).should("have.text", "Avengers: Endgame");
      cy.get(".movie-year").eq(2).should("have.text", "2018");
      cy.get(".movie-type").eq(3).should("have.text", "movie");
      cy.get(".movie-rating").eq(4).should("have.text", "5");
      cy.then(() => (acc_score += 1));
    });

    it(`On checking filter url should be updated accordingly`, () => {
      cy.get("[data-testid=movie-filter-1]").click();
      cy.url().should("eq", `${url}?rating=1`);
      cy.get("[data-testid=movie-filter-2]").click();
      cy.url().should("eq", `${url}?rating=1&rating=2`);
      cy.get("[data-testid=movie-filter-3]").click();
      cy.url().should("eq", `${url}?rating=1&rating=2&rating=3`);
      cy.get("[data-testid=movie-filter-4]").click();
      cy.url().should("eq", `${url}?rating=1&rating=2&rating=3&rating=4`);
      cy.get("[data-testid=movie-filter-3]").click();
      cy.url().should("eq", `${url}?rating=1&rating=2&rating=4`);

      cy.then(() => (acc_score += 2));
    });

    it(`On checking sorting order url should be updated accordingly`, () => {
      cy.get("[data-testid=movie-sort-asc]").click();
      cy.url().should("eq", `${url}?order=asc`);
      cy.get("[data-testid=movie-sort-desc]").click();
      cy.url().should("eq", `${url}?order=desc`);

      cy.then(() => (acc_score += 2));
    });

    it(`On checking filter and sorting together url should be updated accordingly`, () => {
      cy.get("[data-testid=movie-filter-2]").click();
      cy.url().should("eq", `${url}?rating=2`);
      cy.get("[data-testid=movie-filter-5]").click();
      cy.url().should("eq", `${url}?rating=2&rating=5`);
      cy.get("[data-testid=movie-sort-desc]").click();
      cy.url().should("eq", `${url}?rating=2&rating=5&order=desc`);

      cy.then(() => (acc_score += 2));
    });

    it(`On loading url with initail params should update the filter and sorting checkboxes accordingly`, () => {
      cy.visit(`${url}?rating=1&rating=2&rating=5&order=asc`).then(() => {
        cy.get("[data-testid=movie-filter-1]").should("be.checked");
        cy.get("[data-testid=movie-filter-2]").should("be.checked");
        cy.get("[data-testid=movie-filter-5]").should("be.checked");
        cy.get("[data-testid=movie-sort-asc]").should("be.checked");
      });

      cy.then(() => (acc_score += 2));
    });

    it(`On filtering movie data on MovieList component should change accordingly`, () => {
      cy.get("[data-testid=movie-filter-1]").click();
      cy.get("[data-testid=movie-filter-2]").click();
      cy.get(".movie-rating").then((res) => {
        let filter = true;
        for (let el of res) {
          if (+el.childNodes[0].data > 2) {
            filter = false;
          }
        }
        assert.isTrue(filter);
      });

      cy.then(() => (acc_score += 1));
    });

    it(`On sorting movie data on MovieList component should change accordingly`, () => {
      cy.get("[data-testid=movie-sort-asc]").click();
      cy.get(".movie-year").then((res) => {
        let sort = true;
        for (let i = 1; i < res.length; i++) {
          if (res[i - 1].childNodes[0].data > res[i].childNodes[0].data) {
            sort = false;
          }
        }
        assert.isTrue(sort);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`On filtering, store state should update`, () => {
      cy.get("[data-testid=movie-filter-2]").click();
      cy.get("[data-testid=movie-filter-3]").click();

      cy.wait(1000);

      cy.window().then(getMoviesStore).its("movies").should("have.length", 8);
      cy.then(() => (acc_score += 2));
    });

    it(`On Login the store authReducer state should update accordingly`, () => {
      cy.window().then(getAuthStore).its("isAuth").should("equal", false);
      cy.window().then(getAuthStore).its("token").should("equal", "");

      cy.intercept("POST", "**/api/login").as("login");

      cy.visit(`${url}login`);
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);

      cy.then(() => (acc_score += 2));
    });

    it(`user is redirected to login page while visiting /movie/:id, without authentication and should be redirected back to /movie.:id after login`, () => {
      cy.visit(`${url}movie/5`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });

      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait(1000);
      cy.url().should("eq", `${url}movie/5`);
      cy.get(".movie-id").should("have.text", "5");

      cy.then(() => (acc_score += 2));
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
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
