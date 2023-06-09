import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];
describe("React Fetch Post on Click", () => {
  let acc_score = 1;

  data.map(({ submission_link: link, id }) => {
    beforeEach(() => {
      if (link.charAt(link.length - 1) != "/") {
        link = link + "/";
      }
    });

    it("should fetch post onclicking the button", () => {
      cy.visit(link);
      let url = "https://jsonplaceholder.typicode.com/posts";
      cy.intercept(url, (req) => {
        req.continue((res) => {});
      }).as("apiRequest");
      cy.get("#get-posts-btn").click();
      cy.wait("@apiRequest").then((data) => {
        expect(data.response.body.length).to.eq(100);
        acc_score += 2;
      });
    });

    it("should map through the response and populate the data", () => {
      cy.visit(link);
      let url = "https://jsonplaceholder.typicode.com/posts";
      cy.intercept(url, (req) => {
        req.continue((res) => {});
      }).as("apiRequest");
      cy.get("#get-posts-btn").click();
      cy.wait("@apiRequest").then((data) => {
        let res = data.response;
        cy.get("#post-container")
          .children()
          .should("have.length", res.body.length)
          .then(() => {
            acc_score += 3;
          });
      });
    });

    it("should display title in h1 and body in h3 tags", () => {
      cy.visit(link);
      let url = "https://jsonplaceholder.typicode.com/posts";
      cy.intercept(url, (req) => {
        req.continue((res) => {});
      }).as("apiRequest");
      cy.get("#get-posts-btn").click();
      cy.wait("@apiRequest").then((data) => {
        let res = data.response;
        cy.get(".post h1")
          .eq(0)
          .then((el) => {
            expect(el[0].innerHTML).to.eq(res.body[0].title);
            acc_score += 1;
          });
        cy.get(".post h3")
          .eq(0)
          .then((el) => {
            expect(el[0].innerHTML).to.eq(res.body[0].body);
            acc_score += 1;
          });
      });
    });
    it("should display title in h1 and body in h3 tags with mock data", () => {
      cy.visit(link);
      let url = "**/posts";
      cy.intercept(url, { fixture: "posts.json" }).as("apiRequest");
      cy.get("#get-posts-btn").click();
      cy.wait("@apiRequest").then((data) => {
        let res = data.response;
        cy.get(".post h1")
          .eq(0)
          .then((el) => {
            expect(el[0].innerHTML).to.eq(res.body[0].title);
            acc_score += 1;
          });
        cy.get(".post h3")
          .eq(0)
          .then((el) => {
            expect(el[0].innerHTML).to.eq(res.body[0].body);
            acc_score += 1;
          });
      });
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
