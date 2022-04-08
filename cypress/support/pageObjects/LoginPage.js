class LoginPage {
  // Welcome to SentryC text
  // Email input field

  getEmailInputBox() {
    return cy.get("input[name='email']");
  }

  // password input field
  getPasswordInputBox() {
    return cy.get("input[name='password']");
  }

  getInvalidEmailFormatError(){
    cy.get("input[name='password']").click()
    return cy.get('li[title=\'The email format is invalid.\']')
  }

  getEmailFieldClear(){
    cy.get("input[name='email']").clear();
  }

  getEmailRequiredError(){
      return cy.get('li[title=\'The email field is required.\']');
  }

  getPasswordCapitalAndSpecialCharacterError(){
      return cy.get('li[title=\'Password must contains 1 capital and 1 special symbol\']')
  }

  getPasswordClearAndValidateFieldRequiredError(){
    cy.get("input[name='password']").clear()
    return cy.get('li[title=\'The password field is required.\']')
  }

  getInvalidPasswordLessThan8CharError(){
    cy.get("input[name='email']").click()
    return cy.get('li[title=\'The password must be at least 8 characters.\']')
  }

  getLoginButtonDisabled(){
      return cy.get('button p').should('be.disabled')
  }

  getPasswordInputFieldClear(){
    cy.get("input[name='password']").clear()
  }



  // login button click
  getLoginButton() {
    return cy.get("button p");
  }

  getInvalidCredentialsError() {
    cy.wait(4000)
    return cy
      .get(".notification-message")
      .should("be.visible")
      .and("contain", "invalid");
  }
 
  getTermsHyperLink(){
    return cy.get('a[href*=\'terms\']')
  }

  getConditionsHyperLink(){
    return cy.get('a[href*=\'conditions\']')
  }
  goBackToLoginPage(){
    cy.go('back')
  }

  getTermsFromUrl(){
    cy.url().should('include','terms')
  }

  getConditionsFromUrl(){
    cy.url().should('include','conditions')
  }
}

export default LoginPage;
