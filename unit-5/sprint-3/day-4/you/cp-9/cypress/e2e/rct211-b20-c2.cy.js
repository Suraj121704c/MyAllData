import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];

const getCurrentState = (win) => win.store.getState();

data.forEach(({ submission_link: url, id }) => {
  describe("Evaluation RCT-211-B120-E2", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Check Initial Redux Store Structure`, () => {
      cy.window()
        .then(getCurrentState)
        .should("deep.equal", {
          coffeeData: [],
          restaurantData: [],
          employeeData : []
        })
        .then(() => {
          acc_score += 2;
        });

    });

    it(`Check if store data is being updated with coffee data`, () => {
      cy.url().should("eq", url);

      cy.intercept("GET", `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`).as("data");
      cy.visit(url)

      cy.window().then(getCurrentState).its("coffeeData").should("have.length", 0)

      cy.get(".navbar").children().eq(0).click()

      cy.url().should("eq", url + "coffee-data" );
      cy.wait("@data")
cy.wait(1000)
      cy.window().then(getCurrentState).its("coffeeData").should("have.length", 20)
      
      cy.then(() => (acc_score += 3));
    });


    it(`Check if store data is being updated with restaurant data`, () => {
      cy.url().should("eq", url);

      cy.intercept("GET", `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`).as("data");
      cy.visit(url)

      cy.window().then(getCurrentState).its("restaurantData").should("have.length", 0)

      cy.get(".navbar").children().eq(2).click()

      cy.url().should("eq", url + "restaurant-data" );
      cy.wait("@data")

      cy.window().then(getCurrentState).its("restaurantData").should("have.length", 5)
      
      cy.then(() => (acc_score += 3));
    });


    it(`Check if store data is being updated with employee data`, () => {
      cy.url().should("eq", url);

      cy.intercept("GET", `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`).as("data");
      cy.visit(url)

      cy.window().then(getCurrentState).its("employeeData").should("have.length", 0)

      cy.get(".navbar").children().eq(1).click()

      cy.url().should("eq", url + "employee-data" );
      cy.wait("@data")

      cy.window().then(getCurrentState).its("employeeData").should("have.length", 100)
      
      cy.then(() => (acc_score += 3));
    });


    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
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
