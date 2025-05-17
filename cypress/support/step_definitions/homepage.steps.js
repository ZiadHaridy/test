import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/POM/HomePage";
const homePage = new HomePage();

Given("I open the Advantage Online Shopping home page", () => {
  cy.visit("https://advantageonlineshopping.com/#/");
});

Then("the page title should include {string}", (expectedTitle) => {
  homePage.getTitle().should("include", expectedTitle);
});

Then("the user menu link should be visible", () => {
  homePage.getUserMenuLink().should("be.visible");
});

Then("the search bar should exist and be enabled", () => {
  homePage.getSearchBar().should("exist").and("be.enabled");
});

Then("the site logo should be visible", () => {
  homePage.getLogo().should("be.visible");
});
