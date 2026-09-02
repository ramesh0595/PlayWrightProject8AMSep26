const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const utils = require("../Utility/BaseClass");
const LoginPage = require("../Pages/LoginPage");
const assert = require("assert");
const RegistrationPage = require("../Pages/RegistrationPage");

let login;
let register;

When(
  "The User has to fill username {string} and password {string}",
  async function (user, pass) {
    login = new LoginPage(this.page);
    await login.enterUsername(user);
    await login.enterPassword(pass);
  },
);

When("The User has to click the login button", async function () {
  await login.clickLogin();
});

Then("The User should be navigated to Invalid login page", async function () {
  await utils.waitForPage(this.page, 3000);
  const pageUrl = await utils.getPageURL(this.page);
  assert.ok(pageUrl.includes("Facebook"));
  console.log("User in Invalid Page");
});

Given("The User should be in login page", async function () {
  console.log("launching browser we Maintained in Hooks Class-----");
});

When("The user has to click the create new account button", async function () {
  register = new RegistrationPage(this.page);
  await register.clickCreateAccount();
});

When(
  "The user has to fill the firstname,lastname and other details",
  async function () {
    await register.enterFirstName("Ramesh");
    await register.enterLastName("Kumar");
  },
);

When("The user has to click the submit button", async function () {
  await register.clickSubmit();
});

Then(
  "The user should be get successfully registered message",
  async function () {
    console.log("---User Successfully Registered-----");
  },
);
