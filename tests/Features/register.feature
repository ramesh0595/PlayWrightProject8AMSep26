@register @E2E
Feature: To validate the login functionallity of facebook application

Background:
Given The User should be in login page

@regression
Scenario: Register-Invalid To validate the registration functionallity

When The user has to click the create new account button
And The user has to fill the firstname,lastname and other details 
And The user has to click the submit button
Then The user should be get successfully registered message

@retest @regression
Scenario: Register-Vaild To validate the registration functionallity

When The user has to click the create new account button
And The user has to fill the firstname,lastname and other details 
And The user has to click the submit button
Then The user should be get successfully registered message