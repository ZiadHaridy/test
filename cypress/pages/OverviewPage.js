class OverviewPage {
  verifyLoaded() {
    cy.contains("Accounts Overview").should("be.visible");
  }
  clickFirstAccount() {
    cy.get(".ng-binding").first().click();
  }
}
