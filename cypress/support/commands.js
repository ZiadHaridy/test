import LoginPage from "./POM/LoginPage";
import RegisterPage from "./POM/RegisterPage";
import AccountPage from "./POM/AccountPage";
import TransferPage from "./POM/TransferPage";

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const accountPage = new AccountPage();
const transferPage = new TransferPage();

Cypress.Commands.add("login", (username, password) => {
  loginPage.visit();
  loginPage.login(username, password);
});

Cypress.Commands.add("register", (user) => {
  registerPage.visit();
  registerPage.fillRegistrationForm(user);
  registerPage.submit();
});

Cypress.Commands.add("logout", () => {
  accountPage.logout();
});

Cypress.Commands.add("transfer", (amount, from, to) => {
  accountPage.goToTransfer();
  transferPage.fillTransferForm(amount, from, to);
  transferPage.submit();
});
