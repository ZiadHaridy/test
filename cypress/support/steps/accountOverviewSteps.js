import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

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

Then("I should see account summary information", () => {
  cy.contains("Account Number").should("exist");
});
