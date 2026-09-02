const { Before, After } = require("@cucumber/cucumber");
const utils = require("../Utility/BaseClass");

Before(async function () {
  this.browser = await utils.launchBrowser("chromium", false);
  this.context = await utils.launchContext(this.browser);
  this.page = await utils.launchPage(this.context);
  await utils.launchUrl(this.page, "https://www.facebook.com/");
});

After(async function (Scenario) {
  // await this.page.screenshot({
  //   path:`tests/Screenshots/"+Date.now()+".png`,
  //   fullPage:true
  // })

  // //Take Screenshot all Passed and Failed Scenarios
  // const scenarioName = Scenario.pickle.name
  //   .trim()
  //   .replace(/[^a-zA-Z0-9]/g, "_");
  // const filePath = `tests/Screenshots/${scenarioName}.png`;

  // const scenarioScreeshot=await this.page.screenshot({
  //   path: filePath,
  //   fullPage: true,
  // });

  // await this.attach(scenarioScreeshot,'image/png')

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

//Ordered Hooks
// Before({order:0},async function () {
//  console.log("--------Before Scenario----------1")
// });

// After({order:1},async function () {
//   console.log("--------After Scenario----------1")
// });

// Before({order:1},async function () {
//  console.log("--------Before Scenario----------2")
// });

// After({order:0},async function () {
//   console.log("--------After Scenario----------2")
// });

//Tagged Hooks
// Before({tags:"@smoke"},async function () {
//  console.log("--------Before Scenario----------1")
// });

// After({tags:"@smoke"},async function () {
//   console.log("--------After Scenario----------1")
// });

// Before({tags:"@retest"},async function () {
//  console.log("--------Before Scenario----------2")
// });

// After({tags:"@retest"},async function () {
//   console.log("--------After Scenario----------2")
// });

// //Ordered and Tagged Hooks
// Before({tags:"@smoke",order:0},async function () {
//  console.log("--------Before Scenario----------1")
// });

// After({tags:"@smoke",order:0},async function () {
//   console.log("--------After Scenario----------1")
// });

// Before({order:1},async function () {
//  console.log("--------Before Scenario----------2")
// });

// After({order:1},async function () {
//   console.log("--------After Scenario----------2")
// });

//Ordered and Multiple Tagged Hooks
// Before({tags:"@smoke or @retest",order:0},async function () {
//  console.log("--------Before Scenario----------1")
// });

// After({tags:"@smoke or @retest",order:0},async function () {
//   console.log("--------After Scenario----------1")
// });

// Before({order:1},async function () {
//  console.log("--------Before Scenario----------2")
// });

// After({order:1},async function () {
//   console.log("--------After Scenario----------2")
// });
