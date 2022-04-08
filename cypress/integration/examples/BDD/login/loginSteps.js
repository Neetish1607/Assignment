/// <reference types="Cypress" />

import LoginPage from "../../../../support/pageObjects/LoginPage";
import ForgotPasswordPage from '../../../../support/pageObjects/ForgotPasswordPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome

const loginPage = new LoginPage();
const forgotPasswordPage = new ForgotPasswordPage();


Given("I open Sentry Login Page", () => {
  cy.visit(Cypress.env("url") + "/auth/login");
});

And("I enter a valid email address", function () {
  loginPage.getEmailInputBox().type(this.data.validEmail);
});

And("I do negative email address validations", function () {
    loginPage.getEmailInputBox().type(this.data.invalidEmail);
    loginPage.getInvalidEmailFormatError().should("be.visible").and("contain", "invalid");
    loginPage.getEmailFieldClear();
    loginPage.getEmailRequiredError().should("be.visible").and("contain","required");
  });

  And("I do negative password validations", function () {

    loginPage.getPasswordInputBox().type(this.data.invalidPasswordlessThan8Chars);
    loginPage.getInvalidPasswordLessThan8CharError().should("be.visible").and("contain", "least 8 characters");
    loginPage.getPasswordClearAndValidateFieldRequiredError().should("be.visible").and("contain", "required");
    loginPage.getPasswordInputBox().type(this.data.invalidPasswordEqualTo8CharsWithoutCapitalAndSpecialChar);
    loginPage.getPasswordCapitalAndSpecialCharacterError().should("be.visible").and("contain", "1 capital and 1 special symbol");

  });

  Then("I validate Login Button to be disabled", function () {
    loginPage.getLoginButtonDisabled();
    loginPage.getPasswordInputFieldClear();
    loginPage.getEmailFieldClear();
  });


And("I enter a valid password", function () {
  loginPage.getPasswordInputBox().type(this.data.validPassword);
});

When("I click on the login button", () => {
  loginPage.getLoginButton().click();
  // Cypress.config("defaultCommandTimeout", 14000);
    
});

//
Then("I am able to see login error", () => {
  loginPage.getInvalidCredentialsError()
  
});

Given("I click on the forgot password link", () => {
  forgotPasswordPage.getForgotPasswordPage().click();
});

When("I am at the forgot password restore page", function () {
  forgotPasswordPage.getForgotPasswordPageText();

});

And("I enter a valid email address", () => {
  forgotPasswordPage.getEmailInputBox().type(this.data.validEmail);
});

Then("I click on the restore button", () => {
  forgotPasswordPage.getEmailRestoreLink().click()
});

And("I go back to the login page",() =>{
    forgotPasswordPage.getBackToLoginLink()
})


Given('I click on the terms hyperlink',() =>{
  loginPage.getTermsHyperLink().click();
})

And('The url contains terms',()=>{
  loginPage.getTermsFromUrl();
})

Then('I navigate back to the Login Page', () =>{
  loginPage.goBackToLoginPage();
})

Given('I click on the conditions hyperlink',() =>{
  loginPage.getConditionsHyperLink().click()
})

And('The url contains conditions',()=>{
  loginPage.getConditionsFromUrl()
})


