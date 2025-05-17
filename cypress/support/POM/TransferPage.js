class TransferPage {
  fillTransferForm(amount) {
    cy.get("input#amount").type(amount);
    cy.get("select#fromAccountId")
      .find("option")
      .first()
      .then((option) => {
        cy.get("select#fromAccountId").select(option.text());
      });
    cy.get("select#toAccountId")
      .find("option")
      .first()
      .then((option) => {
        cy.get("select#toAccountId").select(option.text());
      });
  }
  submit() {
    cy.get('input[type="submit"][value="Transfer"]').click();
  }
}
export default TransferPage;
