// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// import {protractor} from "protractor";
//
//
// const {SpecReporter} = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './features/**/*.feature'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    format: 'json:tmp/cucumber_report.json',
    require: [
      './steps/**/*.steps.ts'
    ]
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    protractor.By.addLocator('e2eLocator', (value, parentElement) => {
      parentElement = parentElement || document;
      const nodes = parentElement.querySelectorAll('[e2eLocator]');
      return Array.prototype.filter.call(nodes, function (node) {
        return (node.getAttribute('e2eLocator') === value);
      });
    })
  },

  onComplete: () => {
    const reporter = require('cucumber-html-reporter');
    const options = {
      theme: 'bootstrap',
      jsonFile: 'tmp/cucumber_report.json',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  84.0.4147.89",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      },
      output: 'tmp/cucumber_report.html',
    };
    reporter.generate(options);
  }
};
