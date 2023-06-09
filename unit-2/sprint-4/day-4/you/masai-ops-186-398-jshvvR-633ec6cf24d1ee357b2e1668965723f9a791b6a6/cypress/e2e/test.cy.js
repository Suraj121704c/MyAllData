import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;
  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      it(`There is a form inside each div`, () => {
        cy.visit(url);
        cy.get(".container>div form").should("have.length", 2);
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it(`Check the input fields inside Signup form`, () => {
        cy.get("form").eq(0).children(`input[type="text"]`);
        cy.get("form").eq(0).children(`input[type="email"]`);
        cy.get("form").eq(0).children(`input[type="password"]`);
        cy.get("form").eq(0).children(`input[type="number"]`);
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it(`Check the input fields inside Signin form`, () => {
        cy.get("form").eq(1).children(`input[type="text"]`);
        cy.get("form").eq(1).children(`input[type="email"]`);
        cy.get("form").eq(1).children(`input[type="password"]`);
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it(`Check the text inside the container`, () => {
        cy.get(".container>div>h1")
          .eq(0)
          .should("have.css", "text-align", "center")
          .then(() => {
            acc_score += 1;
          });
      }); // 1

      it(`Both the containers are sidebyside with flex`, () => {
        cy.get(".container")
          .should("have.css", "display", "flex")
          .then(() => {
            acc_score += 1;
          });
      }); // 1
      it(`Check signup form Input Placeholders`, () => {
        cy.get("form")
          .eq(0)
          .children(`input[type="text"]`)
          .invoke("attr", "placeholder")
          .should("eq", "Name");
        cy.get("form")
          .eq(0)
          .children(`input[type="email"]`)
          .invoke("attr", "placeholder")
          .should("eq", "Email Address");
        cy.get("form")
          .eq(0)
          .children(`input[type="password"]`)
          .invoke("attr", "placeholder")
          .should("eq", "Password");
        cy.get("form")
          .eq(0)
          .children(`input[type="number"]`)
          .invoke("attr", "placeholder")
          .should("eq", "Phone");
        cy.get("form").eq(0).children(`input[placeholder="Country"]`);
        cy.then(() => {
          acc_score += 1;
        });
      }); //1
      it(`Check sign in  form Input Placeholders`, () => {
        cy.get("form").eq(1).children(`input[placeholder="Name"]`);
        cy.get("form").eq(1).children(`input[placeholder="Email Address"]`);
        cy.get("form").eq(1).children(`input[placeholder="Password"]`);
        cy.then(() => {
          acc_score += 1;
        });
      }); //1
    }

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
