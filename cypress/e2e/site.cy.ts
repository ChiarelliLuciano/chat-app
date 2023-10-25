describe("site", () => {
  const email = Cypress.env("EMAIL");
  const password = Cypress.env("PASSWORD");

  beforeEach(() => {
    cy.visit("/");
    cy.login(email, password);
  });

  it("user should log in into users list", () => {
    cy.url().should("eq", "http://localhost:3000/users");
  });

  it("user should be able to navigate to conversations list", () => {
    cy.get('[data-cy="/conversations"]').click();
    cy.url().should("eq", "http://localhost:3000/conversations");
  });
  it("user should be able to log out", () => {
    cy.get('[data-cy="#"]').click();
    cy.get('[data-cy="auth-form"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });
});
