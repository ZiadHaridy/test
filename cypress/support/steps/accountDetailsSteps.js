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

When("I click on an account number", () => {
  cy.get(".ng-binding").first().click();
});

Then("I should see recent transactions", () => {
  cy.contains("Transaction Details").should("exist");
});
