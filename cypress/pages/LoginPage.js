class LoginPage {
  visit() {
    cy.visit("/parabank/index.htm");
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }
}

export default new LoginPage();
