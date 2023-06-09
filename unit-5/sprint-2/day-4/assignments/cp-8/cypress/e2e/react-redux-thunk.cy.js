import data from "../../submissionData.json";
import { customMiddleware } from "../../src/Redux/store";

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];

const mock = {
  todos: [
    {
      id: 1,
      title: "Learn React",
      status: false,
    },
    {
      id: 2,
      title: "Learn Redux",
      status: false,
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React-Redux Thunk Todo Application", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });

    it("should have the basic structure", () => {
      cy.visit(url);
      cy.get("[data-testid=todo-input]").should("be.visible");
      cy.get("[data-testid=todo-list-wrapper]").should("be.visible");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should render the 2 default todos in the beginning", () => {
      cy.intercept("GET", "**/todos").as("getTodosReq");
      cy.visit(url);
      cy.wait("@getTodosReq");
      cy.get("[data-testid=single-todo]").should("have.length", 2);
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("check if the customMiddleware function can handle dispatched functions instead of action objects", () => {
      const temp = customMiddleware({ dispatch: 1 })()((dispatch) => dispatch);
      expect(temp).to.equal(1);
      cy.then(() => {
        acc_score += 0.5;
      });
    });

    it("check if the customMiddleware function can handle dispatched action objects", () => {
      const actionObj = { type: "TESTING_ACTION_OBJ", payload: 5 };
      const temp = customMiddleware({ dispatch: () => {} })((obj) => obj)(
        actionObj
      );
      expect(temp).to.equal(actionObj);
      cy.then(() => {
        acc_score += 0.5;
      });
    });

    it("should add todo, by chaining POST request, and GET request together", () => {
      cy.intercept("POST", "**/todos", {
        id: 3,
        title: "Learn TypeScript Testing",
        status: false,
      }).as("postReq");
      cy.intercept("GET", "**/todos", { fixture: "todos" }).as("getTodosReq");
            cy.visit(url);
      cy.get("[data-testid=todo-input]").type("Learn TypeScript Testing");
      cy.get("[data-testid=todo-add-btn]").click();
      cy.wait("@postReq");
      cy.wait("@getTodosReq");
      cy.then(() => {
        acc_score += 4;
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
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
