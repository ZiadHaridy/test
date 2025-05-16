import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("/parabank/index.htm");
});

When(
  "I login with username {string} and password {string}",
  (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"]').click();
  }
);

Then("I should see the account overview page", () => {
  cy.contains("Accounts Overview").should("be.visible");
});

Then("I should see an error message", () => {
  cy.contains("The username and password could not be verified.").should(
    "be.visible"
  );
});
