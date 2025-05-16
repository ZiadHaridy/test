import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "I am logged in as {string} with password {string}",
  (username, password) => {
    cy.visit("/parabank/index.htm");
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"]').click();
    cy.contains("Accounts Overview").should("be.visible");
  }
);

When("I click the logout link", () => {
  cy.contains("Log Out").click();
});

Then("I should be redirected to the homepage", () => {
  cy.url().should("include", "index.htm");
});
