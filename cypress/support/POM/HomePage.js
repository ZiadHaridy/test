class HomePage {
  getTitle() {
    return cy.title();
  }
  getUserMenuLink() {
    return cy.get("#menuUser");
  }
  getSearchBar() {
    return cy.get("input#autoComplete");
  }
  getLogo() {
    return cy.get("svg");
  }
  getSelectedCategoryOption() {
    return cy.get("select#category").find("option:selected");
  }
  getCategoryOptions() {
    return cy.get("select#category").find("option");
  }
}
export default HomePage;
