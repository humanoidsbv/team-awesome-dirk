describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.viewport(1400, 800);
    cy.visit("http://localhost:4200");

    // team-members page
    cy.get("[data-cy=nav-team-members]").click();
  });
});
