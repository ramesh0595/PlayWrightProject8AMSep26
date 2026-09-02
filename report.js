const reporter=require("cucumber-html-reporter")


const options={
    theme:'bootstrap',
    jsonFile:'report/cucumberReport.json',
    output:'report/custom-report.html',
    reportSuiteAsScenarios:true,
    launchReport:true,
    metadata:{
        "Tester Name":"Ramesh",
        "Test Environment":"QA",
        "Browser":"Chrome",
        "PlatForm":"Windows",
        "Execution":"Local",
        "Sprint":"12"
    }
}

reporter.generate(options);