import subdata from "../../submissionData.json"; // do not create this file
// let subdata = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";
import dataAsc from "../fixtures/dataAsc.json";
import dataDesc from "../fixtures/dataDesc.json";
import dataRegionAsc from "../fixtures/dataRegionAsc.json";
import dataRegionDesc from "../fixtures/dataRegionDesc.json";
import dataAsia from "../fixtures/dataAsia.json";

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;

  subdata.map(({ submission_link: url, id }) => {
    let apirequestData = [];
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Check if the api call made`, () => {
        cy.intercept(`https://restcountries.com/v3.1/all`).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then((data) => {
          expect(data.response.statusCode).to.eq(200);
          apirequestData = data.response.body;
          acc_score += 2;
        });
      }); // 2
      it(`Student is able to loop through the data and append in the dom`, () => {
        cy.get("#all_countries")
          .children()
          .should("have.length", apirequestData.length);

        cy.get("#all_countries>div").each((ele, index) => {
          expect(ele[0].children[1]).to.have.text(
            apirequestData[index].name.common
          );
        });
        cy.then(() => {
          acc_score += 1;
        });
        cy.get("#all_countries")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 1;
          });
      }); // 2

      it(`Check the Filter Part`, () => {
        cy.intercept(`https://restcountries.com/v3.1/all`, {
          fixture: "data.json",
        }).as("apiRequest");
        cy.visit(url);

        cy.wait("@apiRequest");
        cy.get("#filter_region").select("Asia");
        for (let i = 0; i < dataAsia.length; i++) {
          cy.get("#all_countries>div")
            .eq(i)
            .contains("p", dataAsia[i].population);
          cy.get("#all_countries>div")
            .eq(i)
            .contains("h3", dataAsia[i].name.common);
        }
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it(`Check sorting ascending order`, () => {
        cy.intercept(`https://restcountries.com/v3.1/all`, {
          fixture: "data.json",
        }).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest");
        cy.get("#sort_population").select("asc");
        for (let i = 0; i < dataAsc.length; i++) {
          cy.get("#all_countries>div")
            .eq(i)
            .contains("p", dataAsc[i].population);
          cy.get("#all_countries>div")
            .eq(i)
            .contains("h3", dataAsc[i].name.common);
        }
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it(`Check sorting descending order`, () => {
        cy.intercept(`https://restcountries.com/v3.1/all`, {
          fixture: "data.json",
        }).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest");
        cy.get("#sort_population").select("desc");
        for (let i = 0; i < dataDesc.length; i++) {
          cy.get("#all_countries>div")
            .eq(i)
            .contains("p", dataDesc[i].population);
          cy.get("#all_countries>div")
            .eq(i)
            .contains("h3", dataDesc[i].name.common);
        }
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it(`Check sorting+filter Ascending order`, () => {
        cy.get("#filter_region").select("Asia");
        cy.get("#sort_population").select("asc");
        for (let i = 0; i < dataRegionAsc.length; i++) {
          cy.get("#all_countries>div")
            .eq(i)
            .contains("p", dataRegionAsc[i].population);
          cy.get("#all_countries>div")
            .eq(i)
            .contains("h3", dataRegionAsc[i].name.common);
        }
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2
      it(`Check sorting+filter descending  order`, () => {
        cy.get("#filter_region").select("Asia");
        cy.get("#sort_population").select("desc");
        for (let i = 0; i < dataRegionDesc.length; i++) {
          cy.get("#all_countries>div")
            .eq(i)
            .contains("p", dataRegionDesc[i].population);
          cy.get("#all_countries>div")
            .eq(i)
            .contains("h3", dataRegionDesc[i].name.common);
        }
        cy.then(() => {
          acc_score += 2;
        });
      });
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
