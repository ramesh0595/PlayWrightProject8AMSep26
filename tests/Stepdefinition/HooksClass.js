const { Before, After } = require("@cucumber/cucumber");
const utils = require("../Utility/BaseClass");

Before(async function () {
  this.browser = await utils.launchBrowser("chromium", false);
  this.context = await utils.launchContext(this.browser);
  this.page = await utils.launchPage(this.context);
  await utils.launchUrl(this.page, "https://www.facebook.com/");
});

After(async function (Scenario) {
  await this.page.screenshot({
    path:`tests/Screenshots/"+Date.now()+".png`,
    fullPage:true
  })

  //Take Screenshot all Passed and Failed Scenarios
  const scenarioName = Scenario.pickle.name
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "_");
  const filePath = `tests/Screenshots/${scenarioName}.png`;

  const scenarioScreeshot=await this.page.screenshot({
    path: filePath,
    fullPage: true,
  });

  await this.attach(scenarioScreeshot,'image/png')

  if(Scenario.result.status==='FAILED'){
    //Take Screenshot all Failed Scenarios
  const scenarioName = Scenario.pickle.name
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "_");
  const filePath = `tests/Screenshots/${scenarioName}.png`;

  const scenarioScreeshot=await this.page.screenshot({
    path: filePath,
    fullPage: true,
  });

  await this.attach(scenarioScreeshot,'image/png')
  }
  await utils.pageClose(this.page);
});
