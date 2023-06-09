import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];
import db from "../fixtures/seedDatabase.json";
import postData from "../fixtures/postData.json";

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("empty spec", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("GET request is made on loading homepage to fetch the product data", () => {
      cy.intercept("GET", "**/products", db).as("getRequest");
      cy.visit(url);
      cy.wait("@getRequest").then(({ request, response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.length).to.eq(5);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("All the response from the server should be displayed on home page", () => {
      cy.intercept("GET", "**/products", db).as("getRequest");
      cy.visit(url);
      cy.wait("@getRequest");
      cy.get(".product-list").children().should("have.length", 5);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Correct page name should be displayed on the navbar on homepage", () => {
      cy.get("[data-testid=page-name]").should("have.text", "Home Page");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Correct page name should be displayed on the navbar on add-product page", () => {
      cy.visit(`${url}add-product`);
      cy.get("[data-testid=page-name]").should("have.text", "Add Product Page");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Form should be present to take product input on add-product page", () => {
      cy.visit(`${url}add-product`);
      cy.get("form").should("exist");
      cy.get("input.product-name").should("exist");
      cy.get("input.product-image").should("exist");
      cy.get("input.product-price").should("exist");
      cy.get("input.product-brand").should("exist");
      cy.get("button.submit-form").should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("User should be able to add product to the database", () => {
      cy.intercept("GET", "**/products", db).as("getRequest");
      cy.visit(`${url}add-product`);

      cy.intercept("POST", "**/products**", postData).as("postRequest");
      cy.get("input.product-name").type("Shoe-9");
      cy.get("input.product-image").type(
        "https://contents.mediadecathlon.com/p2175064/a323df0c88381a47cf8c79a3a38aeb5f/p2175064.jpg?format=auto&quality=70&f=650x0"
      );
      cy.get("input.product-price").type(9000);
      cy.get("input.product-brand").type("Adidas");
      cy.get("button.submit-form")
        .click()
        .then(() => {
          cy.wait("@postRequest").then(({ request, response }) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body.name).to.eq(postData.name);
            expect(response.body.image).to.eq(postData.image);
            expect(response.body.price).to.eq(postData.price);
            expect(response.body.brand).to.eq(postData.brand);
          });
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Patch request should be made and DOM should be updated when like button is clicked", () => {
      cy.intercept("GET", "**/products", db).as("getRequest");
      cy.intercept("PATCH", "**/products/1", {
        ...db[0],
        like: db[0].like + 1,
      }).as("patchRequest");
      cy.get("[data-testid=like-button]").eq(0).click();
      cy.wait("@patchRequest");
      cy.get(".product-like")
        .eq(0)
        .should("have.text", db[0].like + 1);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Patch request should be made and DOM should be updated when dislike button is clicked", () => {
      cy.intercept("GET", "**/products", db).as("getRequest");
      cy.intercept("PATCH", "**/products/2", {
        ...db[1],
        dislike: db[1].dislike + 1,
      }).as("patchRequest");
      cy.get("[data-testid=dislike-button]").eq(1).click();
      cy.wait("@patchRequest");
      cy.get(".product-dislike")
        .eq(1)
        .should("have.text", db[1].dislike + 1);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Delete request should be made and DOM should be updated when delete button is clicked", () => {
      cy.intercept("GET", "**/products", db).as("getRequest");
      cy.intercept("DELETE", "**/products/2", {}).as("deleteRequest");
      cy.get("[data-testid=delete-button]").eq(1).click();
      cy.wait("@deleteRequest");
      cy.get(".product-list").children().should("have.length", 4);
      cy.get(".product-name").eq(1).should("not.have.text", "Tshirt-4");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      //////////// Do not change this
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
      ////////////////
    });
  });
});
