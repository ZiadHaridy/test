class LoginPage {
  visit() {
    cy.visit("https://parabank.parasoft.com/");
  }
  getUsernameInput() {
    return cy.get('input[name="username"]');
  }
  getPasswordInput() {
    return cy.get('input[name="password"]');
  }
  getLoginButton() {
    return cy.get('input[value="Log In"]');
  }
  login(username, password) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
}
export default LoginPage;
