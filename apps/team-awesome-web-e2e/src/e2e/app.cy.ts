describe("Routing", () => {
  beforeEach(() => cy.visit("/"));

  it("navigates to other pages", () => {
    cy.viewport(1400, 800);
    cy.visit("http://localhost:4200");

    cy.get("[data-cy=nav-team-members]").click();
    cy.get("[data-cy=nav-timesheets]").click();
  });

  it("navigates to other pages on mobile", () => {
    cy.viewport(550, 750);
    cy.get("[data-cy=nav-button]").click();
    cy.get("[data-cy=nav-team-members]").click();
    cy.url().should("include", "team-members");
    cy.get("[data-cy=nav-button]").click();
    cy.get("[data-cy=nav-timesheets]").click();
  });
});
