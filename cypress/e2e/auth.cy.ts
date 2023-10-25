describe("auth page", () => {
  const baseURL = "http://localhost:3000";
  const email = Cypress.env("EMAIL");
  const password = Cypress.env("PASSWORD");

  beforeEach(() => {
    cy.visit(baseURL);
  });

  it("auth form should be visible", () => {
    cy.get('[data-cy="auth-form"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });

  it("should NOT login without any credentials", () => {
    cy.get('button[type="submit"]').click();
    cy.url().should("not.eq", `${baseURL}/users`);
  });

  it("should NOT login with email alone", () => {
    cy.get("#email").type(email);
    cy.get('button[type="submit"]').click();
    cy.url().should("not.eq", `${baseURL}/users`);
  });

  it("should NOT login with password alone", () => {
    cy.get("#password").type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should("not.eq", `${baseURL}/users`);
  });

  it("should NOT login with invalid credentials", () => {
    cy.get("#email").type("WRONG_EMAIL@example.com");
    cy.get("#password").type("WRONG_PASSWORD");
    cy.get('button[type="submit"]').click();
    cy.url().should("not.eq", `${baseURL}/users`);
  });

  it("should login with valid credentials", () => {
    cy.login(email, password);

    cy.url().should("eq", `${baseURL}/users`);
  });
});
