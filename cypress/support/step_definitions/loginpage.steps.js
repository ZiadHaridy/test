import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Parabank login page", () => {
  cy.visit("https://parabank.parasoft.com/");
});

When(
  "I login with username {string} and password {string}",
  (username, password) => {
    cy.login(username, password);
  }
);

Then("I should see the account overview", () => {
  cy.contains("Accounts Overview").should("be.visible");
});

Then("I should see a login error", () => {
  cy.get(".error, .title, .ng-binding, .errorMessage").should("be.visible");
});
