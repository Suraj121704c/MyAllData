describe("Counter testing", () => {

  // beforeEach
  // afterEach
  // afterAll
  // beforeAll

  beforeEach(()=>{
    cy.visit("http://localhost:3000/")
  })

  // it("Check if counter loads or not", () => {
  //   cy.visit("http://localhost:3000/");
  // });

  it("Counter is present or not", () => {
    cy.get("h2").should("exist");
    cy.get("button.add").should("exist");
    cy.get("button.reduce").should("exist");
  });

  it("Counter value should be 0",() => {
    cy.get("[data-testId=counter]").should("have.text","Counter : 0")
  });

  it("On Clicking add button the counter should increase",() => {
    cy.get("button.add").click();
    cy.get("[data-testId=counter]").should("have.text","Counter : 1")
  })

  it("On Clicking reduce button the counter should decrease",()=>{
    cy.get("button.reduce").click();
    cy.get("[data-testId=counter]").should("have.text","Counter : -1")
  })
});
