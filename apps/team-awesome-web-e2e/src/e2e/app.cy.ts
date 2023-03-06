describe("Routing", () => {
  beforeEach(() => cy.visit("/"));

  it("Navigates to other pages", () => {
    cy.viewport(1400, 800);
    cy.visit("http://localhost:4200");

    // team-members page
    cy.get("[data-cy=nav-team-members]").click();

    cy.get("[data-cy=nav-timesheets]").click();
  });

  it("Navigates to other pages on mobile", () => {
    cy.viewport(550, 750);
    cy.get("[data-cy=nav-button]").click();

    cy.get("[data-cy=nav-team-members]").click();

    cy.wait(1000);

    cy.get("[data-cy=nav-button]").click();

    cy.get("[data-cy=nav-timesheets]").click();
  });
});
