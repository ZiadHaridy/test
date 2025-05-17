import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I logout", () => {
  cy.logout();
});

Then("I should be redirected to the login page", () => {
  cy.url().should("include", "/parabank/index.htm");
  cy.contains("Customer Login").should("be.visible");
});
