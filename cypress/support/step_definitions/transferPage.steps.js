import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(
  "I transfer {string} from account {string} to account {string}",
  (amount, from, to) => {
    cy.transfer(amount, from, to);
  }
);

Then("I should see a successful transfer message", () => {
  cy.contains("Transfer Complete!").should("be.visible");
});

Then("I should see a transfer error", () => {
  cy.get(".error, .ng-binding, .title").should("be.visible");
});
