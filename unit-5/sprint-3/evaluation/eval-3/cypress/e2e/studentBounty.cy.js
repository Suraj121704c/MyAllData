import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];

const getAuthStore = (win) => win.store.getState().authReducer;
const getStudentStore = (win) => win.store.getState().studentReducer;

data.forEach(({ submission_link: url, id }) => {
  describe("Student Bounty", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    // Check for basic redux store

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

    it(`Check Initial Redux Store Structure for students`, () => {
      cy.window()
        .then(getStudentStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          students: [],
        })
        .then(() => {
          acc_score += 1;
        });
    });

    // Check for homepage UI and store updation

    it(`Get request should be made for students when home page loads`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/students**").as("request");
      cy.wait("@request").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
        expect(xhr.url, "get url").to.match(/\/students/);
      });
      cy.get("@request")
        .its("response.body")
        .its("length")
        .should("be.gte", 10);
      cy.then(() => (acc_score += 1));
    });

    it(`isLoading should update accordingly while making request`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/students**").as("request");

      cy.window().then(getStudentStore).its("isLoading").should("eq", false);

      cy.wait("@request");
      cy.wait(1000).then(() => {
        cy.window().then(getStudentStore).its("isLoading").should("eq", false);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`Student state in store should update when get request made on homepage`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/students**").as("request");

      cy.window()
        .then(getStudentStore)
        .its("students")
        .should("have.length", 0);

      cy.wait("@request");
      cy.wait(1000);

      cy.window()
        .then(getStudentStore)
        .its("students")
        .its("length")
        .should("be.gte", 10);
      cy.then(() => (acc_score += 2));
    });

    it(`All students should be displayed on home page`, () => {
      cy.get("[data-testid=student-list]")
        .children()
        .its("length")
        .should("be.gte", 10);
      cy.get(".student-card").its("length").should("be.gte", 10);
      cy.get(".student-name").eq(1).should("have.text", "Shubham");
      cy.get(".student-batch").eq(2).should("have.text", "JS201");
      cy.get(".student-green-card").eq(3).should("have.text", "4");
      cy.then(() => (acc_score += 1));
    });

    // Check for Authentication

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

    it("user is redirected to login page while visiting /student/:id, without authentication and should be redirected back to /student.:id after login", () => {
      cy.visit(`${url}student/3`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();
      cy.wait(1000);
      cy.url().should("eq", `${url}student/3`);
      cy.visit(`${url}student/5`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();
      cy.wait(1000);
      cy.url().should("eq", `${url}student/5`);
      cy.then(() => (acc_score += 2));
    });

    // Check for filtering

    it(`On checking filter url should be updated accordingly`, () => {
      cy.get("[data-testid=batch-web101]").click();
      cy.url().should("match", /batch=WEB101/);
      cy.get("[data-testid=batch-js201]").click();
      cy.url().should("match", /batch=JS201/);
      cy.url().should("match", /batch=WEB101/);
      cy.get("[data-testid=batch-rct101]").click();
      cy.url().should("match", /batch=JS201/);
      cy.url().should("match", /batch=WEB101/);
      cy.url().should("match", /batch=RCT101/);
      cy.get("[data-testid=batch-js201]").click();
      cy.url().should("match", /batch=WEB101/);
      cy.url().should("match", /batch=RCT101/);
      cy.get("[data-testid=batch-nxm101]").click();
      cy.url().should("match", /batch=WEB101/);
      cy.url().should("match", /batch=RCT101/);
      cy.url().should("match", /batch=NXM101/);

      cy.then(() => (acc_score += 2));
    });

    it(`On visiiting url with initial params the checkboxes should be checked accordingly`, () => {
      cy.visit(`${url}?batch=WEB101&batch=RCT211`);
      cy.get("[data-testid=batch-web101]").should("be.checked");
      cy.get("[data-testid=batch-rct211]").should("be.checked");
      cy.visit(`${url}?batch=JS201&batch=NXM101`);
      cy.get("[data-testid=batch-nxm101]").should("be.checked");
      cy.get("[data-testid=batch-js201]").should("be.checked");
      cy.then(() => (acc_score += 2));
    });

    it(`On filtering the data in redux store should also be filtered accordingly`, () => {
      cy.get("[data-testid=batch-web101]").click();
      cy.wait(2000);
      cy.window()
        .then(getStudentStore)
        .its("students")
        .its("length")
        .should("eq", 7);

      cy.get("[data-testid=batch-web101]").click();
      cy.get("[data-testid=batch-js201]").click();
      cy.wait(2000);
      cy.window()
        .then(getStudentStore)
        .its("students")
        .its("length")
        .should("eq", 10);

      cy.then(() => (acc_score += 2));
    });

    it(`On filtering the the UI on home page should update accordingly`, () => {
      cy.get("[data-testid=batch-rct211]").click();
      cy.wait(2000);
      cy.get(".student-batch").then((res) => {
        for (let el of res) {
          expect(el).to.contain("RCT211");
        }
      });
      cy.get("[data-testid=batch-rct211]").click();
      cy.get("[data-testid=batch-nxm101]").click();
      cy.wait(2000);
      cy.get(".student-batch").then((res) => {
        for (let el of res) {
          console.log(el);
          expect(el).to.contain("NXM101");
        }
      });
      cy.then(() => (acc_score += 1));
    });

    // Check for pagination

    it(`By default the page number 1 data i.e 10 items should be present on homepage`, () => {
      cy.get("[data-testid=student-list]")
        .children()
        .its("length")
        .should("be.eq", 10);
      cy.get(".student-card").its("length").should("be.gte", 10);
      cy.get(".student-name").eq(1).should("have.text", "Shubham");
      cy.get(".student-batch").eq(2).should("have.text", "JS201");
      cy.get(".student-green-card").eq(3).should("have.text", "4");
      cy.then(() => (acc_score += 1));
    });

    it(`On loading homepage, store should also should have only page 1 data`, () => {
      cy.server();
      cy.route("GET", "/students?_limit=10&_page=1**").as("request");
      cy.wait("@request").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
        expect(xhr.url, "get url").to.match(/\/students/);
      });
      cy.window()
        .then(getStudentStore)
        .its("students")
        .its("length")
        .should("eq", 10);

      cy.then(() => (acc_score += 2));
    });

    it(`On clicking the previous and next button, data should update accordingly on UI`, () => {
      cy.get("[data-testid=page-next]").click();
      cy.wait(2000);
      cy.get("[data-testid=student-list]")
        .children()
        .its("length")
        .should("be.eq", 10);
      cy.get(".student-card").its("length").should("be.gte", 10);
      cy.get(".student-name")
        .eq(1)
        .should("have.text", "Mahesh Murlidhar Wankhade");
      cy.get(".student-batch").eq(2).should("have.text", "WEB101");
      cy.get(".student-green-card").eq(3).should("have.text", "2");

      cy.get("[data-testid=page-prev]").click();
      cy.wait(2000);
      cy.get("[data-testid=student-list]")
        .children()
        .its("length")
        .should("be.eq", 10);
      cy.get(".student-card").its("length").should("be.gte", 10);
      cy.get(".student-name").eq(1).should("have.text", "Shubham");
      cy.get(".student-batch").eq(2).should("have.text", "JS201");
      cy.get(".student-green-card").eq(3).should("have.text", "4");
      cy.then(() => (acc_score += 1));
    });

    it("On changing page number the url should be updated", () => {
      cy.url().should("match", /page=1/);
      cy.get("[data-testid=page-next]").click();
      cy.url().should("match", /page=2/);
      cy.get("[data-testid=page-next]").click();
      cy.url().should("match", /page=3/);
      cy.get("[data-testid=page-prev]").click();
      cy.url().should("match", /page=2/);
      cy.then(() => (acc_score += 1));
    });

    it("Filtering and pagination should work together", () => {
      cy.get("[data-testid=batch-web101]").click();
      cy.get("[data-testid=batch-js201]").click();
      cy.get("[data-testid=page-next]").click();
      cy.wait(2000);
      cy.url().should("match", /page=2/);
      cy.url().should("match", /batch=WEB101/);
      cy.url().should("match", /batch=JS201/);

      cy.get("[data-testid=student-list]")
        .children()
        .its("length")
        .should("be.eq", 7);
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
