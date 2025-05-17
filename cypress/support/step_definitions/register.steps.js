import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the registration page", () => {
  cy.visit("https://parabank.parasoft.com/parabank/register.htm");
});

When("I register with the following details:", (dataTable) => {
  const user = dataTable.rowsHash();
  if (!user.repeatedPassword) {
    user.repeatedPassword = user.password;
  }
  cy.register(user);
});

Then("I should see the registration confirmation", () => {
  cy.contains(
    "Your account was created successfully. You are now logged in."
  ).should("be.visible");
});

Then("I should see a registration error", () => {
  cy.get(".error, .title, .ng-binding, .errorMessage").should("be.visible");
});
