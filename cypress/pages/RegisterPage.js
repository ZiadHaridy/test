class RegisterPage {
  visit() {
    cy.visit("/parabank/register.htm");
  }
  fillForm(user) {
    cy.get("#customer.firstName").type(user.firstName);
    cy.get("#customer.lastName").type(user.lastName);
    cy.get("#customer.address.street").type(user.address);
    cy.get("#customer.address.city").type(user.city);
    cy.get("#customer.address.state").type(user.state);
    cy.get("#customer.address.zipCode").type(user.zip);
    cy.get("#customer.phoneNumber").type(user.phone);
    cy.get("#customer.ssn").type(user.ssn);
    cy.get("#customer.username").type(user.username);
    cy.get("#customer.password").type(user.password);
    cy.get("#repeatedPassword").type(user.password);
    cy.get('input[value="Register"]').click();
  }
}
export default new RegisterPage();
