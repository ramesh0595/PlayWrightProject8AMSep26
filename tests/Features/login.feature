@login @E2E
Feature: To validate the login functionallity of facebook application

Background:
Given The User should be in login page

@smoke @regression
Scenario: Login-Invalid To validate the login functionallity with Invalid Credentials

When The User has to fill username "ramesh@gmail.com" and password "12345678"
And The User has to click the login button
Then The User should be navigated to Invalid login page

@sanity @regression
Scenario: Login-Vaild To validate the login functionallity with Invalid Credentials

When The User has to fill username "kumar@gmail.com" and password "513425523"
And The User has to click the login button
Then The User should be navigated to Invalid login page
