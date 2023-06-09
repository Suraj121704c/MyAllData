import data from "../../submissionData.json"; // do not create/change  this file

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];
// use this ^  to check on local

const mock = {
  todos: [
    {
      id: 1,
      title: "React",
      status: true,
    },
    {
      id: 2,
      title: "Redux",
      status: true,
    },
    {
      id: 3,
      title: "Css",
      status: true,
    },
    {
      id: 4,
      title: "MongoDb",
      status: false,
    },
    {
      id: 5,
      title: "TypeScript",
      status: false,
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Evaluation RCT-211-B120-E2", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
    it("should have basic structure", () => {
      cy.visit(url);
      cy.get("[data-testid=todo-input]").should("be.visible");
      cy.get("[data-testid=add-button]").should("be.visible");
      cy.then(() => {
        acc_score += 1;
      });
    });
    it(`Should get initial todos by GET request`, () => {
      cy.intercept("GET", `${server_url}/todos`).as("getTodos"); // cy.contains("h1", /React Todo Crud Axios/i).should("be.visible");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.get('[data-testid="todos-wrapper"]')
        .children()
        .should("have.length", 5);
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Check if user is able to add new task 1", () => {
      cy.visit(url);
      cy.intercept("POST", `${server_url}/todos`).as("postTodos");
      cy.get('[data-testid="todo-input"]').type("New Task");
      cy.get('[data-testid="add-button"]').click();
      cy.wait("@postTodos").then(() => {
        cy.get('[data-testid="todos-wrapper"]')
          .children()
          .should("have.length", 6);
        cy.get('[data-testid="todos-wrapper"]')
          .children()
          .eq(5)
          .contains("New Task");
        cy.get('[data-testid="todos-wrapper"]')
          .children()
          .eq(5)
          .contains("False");
      });
      cy.then(() => {
        acc_score += 3;
      });
    });
    it("Check if user is able to add new task 2", () => {
      cy.visit(url);
      cy.intercept("POST", `${server_url}/todos`).as("postTodos");
      cy.get('[data-testid="todo-input"]').type("Read Books");
      cy.get('[data-testid="add-button"]').click();
      cy.wait("@postTodos").then(() => {
        cy.get('[data-testid="todos-wrapper"]')
          .children()
          .should("have.length", 6);
        cy.get('[data-testid="todos-wrapper"]')
          .children()
          .eq(5)
          .contains("Read Books");
        cy.get('[data-testid="todos-wrapper"]')
          .children()
          .eq(5)
          .contains("False");
      });
      cy.then(() => {
        acc_score += 3;
      });
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
