import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the registration page", () => {
  cy.visit("/parabank/register.htm");
});

When("I register with valid user data", () => {
  cy.get("#customer.firstName").type("John");
  cy.get("#customer.lastName").type("Doe");
  cy.get("#customer.address.street").type("123 Street");
  cy.get("#customer.address.city").type("Cairo");
  cy.get("#customer.address.state").type("CA");
  cy.get("#customer.address.zipCode").type("12345");
  cy.get("#customer.phoneNumber").type("1234567890");
  cy.get("#customer.ssn").type("123-45-6789");
  cy.get("#customer.username").type("john_doe");
  cy.get("#customer.password").type("demo");
  cy.get("#repeatedPassword").type("demo");
  cy.get('input[value="Register"]').click();
});

Then("I should see a success message", () => {
  cy.contains("Your account was created successfully.").should("be.visible");
});
