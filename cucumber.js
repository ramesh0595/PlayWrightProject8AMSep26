const { format } = require("node:path");

module.exports = {
  default: {
    paths: ["tests/Features/*.feature"],
    require: ["tests/stepdefinition/*.js"],
    format: [
      "progress",
      "json:report/cucumberReport.json",
      "html:report/cucumberReport.html",
      "junit:report/cucumberReport.xml",
      "allure-cucumberjs/reporter",
    ],
    formatOptions: {
      resultsDir: "allure-results",
    },
  },
};
