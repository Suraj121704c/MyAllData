import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://localhost:5500/", id: 67890 }];

describe("Test", function () {
  let acc_score = 1;

  let page1Data = [
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupH",
      team1: "Barcelona",
      team2: "AC Milan",
      team1goals: "2",
      team2goals: "2",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupG",
      team1: "APOEL Nikosia",
      team2: "Zenit St. Petersburg",
      team1goals: "2",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupF",
      team1: "Borussia Dortmund",
      team2: "Arsenal",
      team1goals: "1",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupH",
      team1: "Viktoria Plzen",
      team2: "BATE Borisov",
      team1goals: "1",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupE",
      team1: "Chelsea",
      team2: "Bayer Leverkusen",
      team1goals: "2",
      team2goals: "0",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupG",
      team1: "FC Porto",
      team2: "Shakhtar Donetsk",
      team1goals: "2",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupE",
      team1: "KRC Genk",
      team2: "Valencia CF",
      team1goals: "0",
      team2goals: "0",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupF",
      team1: "Olympiacos",
      team2: "Olympique Marseille",
      team1goals: "0",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupD",
      team1: "AFC Ajax",
      team2: "Olympique Lyon",
      team1goals: "0",
      team2goals: "0",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupC",
      team1: "Basel",
      team2: "Otelul Galati",
      team1goals: "2",
      team2goals: "1",
    },
  ];
  let page2Data = [
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupA",
      team1: "Villarreal",
      team2: "Bayern Munich",
      team1goals: "0",
      team2goals: "2",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupB",
      team1: "Lille OSC",
      team2: "CSKA Moskva",
      team1goals: "2",
      team2goals: "2",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupD",
      team1: "Dinamo Zagreb",
      team2: "Real Madrid",
      team1goals: "0",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupB",
      team1: "Internazionale",
      team2: "Trabzonspor",
      team1goals: "0",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupA",
      team1: "Manchester City",
      team2: "SSC Napoli",
      team1goals: "1",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupC",
      team1: "SL Benfica",
      team2: "Manchester United",
      team1goals: "1",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupD",
      team1: "Real Madrid",
      team2: "AFC Ajax",
      team1goals: "3",
      team2goals: "0",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupC",
      team1: "Manchester United",
      team2: "Basel",
      team1goals: "3",
      team2goals: "3",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupA",
      team1: "Bayern Munich",
      team2: "Manchester City",
      team1goals: "2",
      team2goals: "0",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupB",
      team1: "CSKA Moskva",
      team2: "Internazionale",
      team1goals: "2",
      team2goals: "3",
    },
  ];

  let y2011T1APOEL = [
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupG",
      team1: "APOEL Nikosia",
      team2: "Zenit St. Petersburg",
      team1goals: "2",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupG",
      team1: "APOEL Nikosia",
      team2: "FC Porto",
      team1goals: "2",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "GroupG",
      team1: "APOEL Nikosia",
      team2: "Shakhtar Donetsk",
      team1goals: "0",
      team2goals: "2",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "R16",
      team1: "APOEL Nikosia",
      team2: "Olympique Lyon",
      team1goals: "5",
      team2goals: "3",
    },
    {
      competition: "UEFA Champions League",
      year: 2011,
      round: "QF",
      team1: "APOEL Nikosia",
      team2: "Real Madrid",
      team1goals: "0",
      team2goals: "3",
    },
  ];

  let y2013 = [
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupA",
      team1: "Manchester United",
      team2: "Bayer Leverkusen",
      team1goals: "4",
      team2goals: "2",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupD",
      team1: "Bayern Munich",
      team2: "CSKA Moskva",
      team1goals: "3",
      team2goals: "0",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupB",
      team1: "Galatasaray",
      team2: "Real Madrid",
      team1goals: "1",
      team2goals: "6",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupB",
      team1: "Kobenhavn",
      team2: "Juventus",
      team1goals: "1",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupD",
      team1: "Viktoria Plzen",
      team2: "Manchester City",
      team1goals: "0",
      team2goals: "3",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupC",
      team1: "Olympiacos",
      team2: "Paris Saint-Germain",
      team1goals: "1",
      team2goals: "4",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupA",
      team1: "Real Sociedad",
      team2: "Shakhtar Donetsk",
      team1goals: "0",
      team2goals: "2",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupC",
      team1: "SL Benfica",
      team2: "RSC Anderlecht",
      team1goals: "2",
      team2goals: "0",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupH",
      team1: "AC Milan",
      team2: "Celtic",
      team1goals: "2",
      team2goals: "0",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupH",
      team1: "Barcelona",
      team2: "AFC Ajax",
      team1goals: "4",
      team2goals: "0",
    },
  ];

  let y2013T2ZenitStPetersburg = [
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupG",
      team1: "Atletico Madrid",
      team2: "Zenit St. Petersburg",
      team1goals: "3",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupG",
      team1: "FC Porto",
      team2: "Zenit St. Petersburg",
      team1goals: "0",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "GroupG",
      team1: "Austria Wien",
      team2: "Zenit St. Petersburg",
      team1goals: "4",
      team2goals: "1",
    },
    {
      competition: "UEFA Champions League",
      year: 2013,
      round: "R16",
      team1: "Borussia Dortmund",
      team2: "Zenit St. Petersburg",
      team1goals: "1",
      team2goals: "2",
    },
  ];

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    
    it(`Should make the fetch request on page loads and append data on to the tbody`, () => {
      cy.intercept(`**/api/football_matches**`).as("search");      
      cy.visit(url);
      cy.wait("@search");
      cy.wait(1000);
      cy.then(() => {
        cy.get("tbody").children().should("have.length", 10);
        cy.get("tbody tr").each(($row, index) => {
          expect($row.text()).to.include(page1Data[index].competition);
          expect($row.text()).to.include(page1Data[index].year);
          expect($row.text()).to.include(page1Data[index].round);
          expect($row.text()).to.include(page1Data[index].team1);
          expect($row.text()).to.include(page1Data[index].team2);
          expect($row.text()).to.include(page1Data[index].team1goals);
          expect($row.text()).to.include(page1Data[index].team2goals);
        });
        cy.then(() => {
          acc_score += 2;
        });
      });
    });

    // check if api requests are made or not

    it(`check if next and pre button is working or not`, () => {
      cy.intercept(`**/api/football_matches**`).as("search0");
      cy.visit(url);
      cy.wait("@search0");
      cy.get("#next").should("be.visible").click({ force: true }); 
      cy.wait(1000);   
      cy.wait("@search0");
      cy.then(() => {
        cy.get("tbody tr").each(($row, index) => {
          expect($row.text()).to.include(page2Data[index].competition);
          expect($row.text()).to.include(page2Data[index].year);
          expect($row.text()).to.include(page2Data[index].round);
          expect($row.text()).to.include(page2Data[index].team1);
          expect($row.text()).to.include(page2Data[index].team2);
          expect($row.text()).to.include(page2Data[index].team1goals);
          expect($row.text()).to.include(page2Data[index].team2goals);
        });
      });
      cy.get("#prev").should("be.visible").click({ force: true });
      cy.wait(1000);
      cy.wait("@search0");
      cy.then(() => {
        cy.get("tbody tr").each(($row, index) => {
          expect($row.text()).to.include(page1Data[index].competition);
          expect($row.text()).to.include(page1Data[index].year);
          expect($row.text()).to.include(page1Data[index].round);
          expect($row.text()).to.include(page1Data[index].team1);
          expect($row.text()).to.include(page1Data[index].team2);
          expect($row.text()).to.include(page1Data[index].team1goals);
          expect($row.text()).to.include(page1Data[index].team2goals);
        });
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    //check filter button is working or not

    it("filter button is redirection to its page or not", () => {
      cy.visit(url);
      cy.get("button").should("be.visible").first().click({ force: true });
      cy.wait(100);
      cy.location("pathname").should("eq", "/filter.html");
      cy.then(() => {
        acc_score += 1;
      });
    });

    // filter.html test cases starting

    it("check whether able to see matches of 2013 on selecting", () => {
      cy.intercept(`**/api/football_matches**`).as("search2013");
      cy.visit(url + "filter.html");
      cy.wait("@search2013");
      cy.get("#year").should("be.visible").select("2013");
      cy.wait(1000);
      cy.wait("@search2013");
      cy.then(() => {
        cy.get("tbody tr").each(($row, index) => {
          expect($row.text()).to.include(y2013[index].competition);
          expect($row.text()).to.include(y2013[index].year);
          expect($row.text()).to.include(y2013[index].round);
          expect($row.text()).to.include(y2013[index].team1);
          expect($row.text()).to.include(y2013[index].team2);
          expect($row.text()).to.include(y2013[index].team1goals);
          expect($row.text()).to.include(y2013[index].team2goals);
        });
      });
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("check showing matches of 2011 on selecting", () => {
      cy.intercept(`**/api/football_matches**`).as("search2011");
      cy.visit(url + "filter.html");
      cy.wait("@search2011");
      cy.wait(1000);
      cy.get("#year").should("be.visible").select("2013");
      cy.wait("@search2011");
      cy.get("#year").should("be.visible").select("2011");
      cy.wait("@search2011");
      cy.then(() => {
        cy.get("tbody tr").each(($row, index) => {
          expect($row.text()).to.include(page1Data[index].competition);
          expect($row.text()).to.include(page1Data[index].year);
          expect($row.text()).to.include(page1Data[index].round);
          expect($row.text()).to.include(page1Data[index].team1);
          expect($row.text()).to.include(page1Data[index].team2);
          expect($row.text()).to.include(page1Data[index].team1goals);
          expect($row.text()).to.include(page1Data[index].team2goals);
        });
      });
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("check showing matches of specific team1 or specific team2 along with year", () => {
      cy.intercept(`**/api/football_matches**`).as("search2011");
      cy.visit(url + "filter.html");
      cy.wait("@search2011");
      cy.wait(1000);
      cy.get("#year").should("be.visible").select("2011");
      cy.wait("@search2011");
      cy.get("#team1").should("be.visible").select("APOEL Nikosia");

      cy.wait("@search2011");
      cy.then(() => {
        cy.get("tbody tr").each(($row, index) => {
          expect($row.text()).to.include(y2011T1APOEL[index].competition);
          expect($row.text()).to.include(y2011T1APOEL[index].year);
          expect($row.text()).to.include(y2011T1APOEL[index].round);
          expect($row.text()).to.include(y2011T1APOEL[index].team1);
          expect($row.text()).to.include(y2011T1APOEL[index].team2);
          expect($row.text()).to.include(y2011T1APOEL[index].team1goals);
          expect($row.text()).to.include(y2011T1APOEL[index].team2goals);
        });
      });
      cy.reload();
      cy.wait("@search2011");
      cy.get("#year").should("be.visible").select("2013");
      cy.wait("@search2011");
      cy.get("#team2").should("be.visible").select("Zenit St. Petersburg");
      cy.wait("@search2011");
      cy.wait(1000);
      cy.then(() => {
        cy.get("tbody tr").each(($row, index) => {
          expect($row.text()).to.include(
            y2013T2ZenitStPetersburg[index].competition
          );
          expect($row.text()).to.include(y2013T2ZenitStPetersburg[index].year);
          expect($row.text()).to.include(y2013T2ZenitStPetersburg[index].round);
          expect($row.text()).to.include(y2013T2ZenitStPetersburg[index].team1);
          expect($row.text()).to.include(y2013T2ZenitStPetersburg[index].team2);
          expect($row.text()).to.include(
            y2013T2ZenitStPetersburg[index].team1goals
          );
          expect($row.text()).to.include(
            y2013T2ZenitStPetersburg[index].team2goals
          );
        });
      });

      cy.then(() => {
        acc_score += 6;
      });
    });

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: acc_score,
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
