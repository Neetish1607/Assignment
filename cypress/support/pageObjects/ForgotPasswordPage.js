class ForgotPasswordPage{

getForgotPasswordPage(){
    return cy.get('a[href*=\'/auth/forgot-password\']')
}

getForgotPasswordPageText(){
    return cy.get('div b');
}

// enter your email to restor text
getEmailInputBox(){
    return cy.get('input[name =\'email\']')
}
// email input
// restore link
getEmailRestoreLink(){
    return cy.get('button[type=\'submit\']')
}
// Back to Login Link
getBackToLoginLink(){
    return cy.get('a[href*=\'/auth/login\']')
}

}
export default  ForgotPasswordPage;