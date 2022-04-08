Feature: Sentry Login Page Application

    Application Regression

    Background: Opening the Sentry Login Page
    Given I open Sentry Login Page

    
    Scenario: Negative Scenarios for Email and password
    And I do negative email address validations
    And I do negative password validations

    
    Scenario: Login with Valid Email and Password
    And I enter a valid email address
    And I enter a valid password
    When I click on the login button
    Then I am able to see login error

    Scenario: Click on Forgot Password and Restore the password
    Given I click on the forgot password link
    When I am at the forgot password restore page
    And I enter a valid email address
    Then I click on the restore button
    And I go back to the login page

    Scenario: Click on Terms hyperlink and navigate back to the login page
    Given I click on the terms hyperlink
    And The url contains terms
    Then I navigate back to the Login Page

    Scenario: Click on Contions hyperlink and navigate back to the login page
    Given I click on the conditions hyperlink
    And The url contains conditions
    Then I navigate back to the Login Page
