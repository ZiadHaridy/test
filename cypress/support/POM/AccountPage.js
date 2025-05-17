class AccountPage {
  logout() {
    cy.contains("Log Out").click();
  }
  goToTransfer() {
    cy.contains("Transfer Funds").click();
  }
}
export default AccountPage;
