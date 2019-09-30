# E2E Test Automation Framework 

[![CircleCI Build Status](https://badgen.net/circleci/github/nazmulb/e2e_test_automation)](https://circleci.com/gh/nazmulb/e2e_test_automation)
[![GitHub Last commit](https://badgen.net/github/last-commit/nazmulb/e2e_test_automation)](https://github.com/nazmulb/e2e_test_automation)
[![GitHub commits](https://badgen.net/github/commits/nazmulb/e2e_test_automation)](https://github.com/nazmulb/e2e_test_automation/commits/master)
[![GitHub stars](https://badgen.net/github/stars/nazmulb/e2e_test_automation)](https://github.com/nazmulb/e2e_test_automation)

This is an e2e test automation framework using using Cucumber and Selenium.

### Overview:

We need the following to have a browser based e2e testing using Cucumber JS:

- [Cucumber JS](https://github.com/nazmulb/cucumber) - ([Video Workshop](https://www.youtube.com/playlist?list=PLU0B5opOZ_Dv6t8iKhE4GRkjk9CKJAnJ9))
- [Chai](https://www.npmjs.com/package/chai)
- [Selenium-Webdriver](https://docs.seleniumhq.org/docs/03_webdriver.jsp#setting-up-a-selenium-webdriver-project)
- [Cucumber-Html-Reporter](https://www.npmjs.com/package/chai)
- [Circle CI](https://github.com/nazmulb/circleci) - ([Video Workshop](https://www.youtube.com/playlist?list=PLU0B5opOZ_DsP7m6mFCl3R9H_NvdfVWNF))

### Quick Reference Guide:

A short and easy <a href="https://github.com/nazmulb/cucumber">Document for Cucumber</a>.

### Setup:

Please clone this repo and run the following commands:

```
git clone https://github.com/nazmulb/e2e_test_automation.git
cd e2e_test_automation
npm i
```

### Environment Variables:

- **ENVIRONMENT** - (string) test environment to target - `local` or `prod`.
- **PLATFORM** - (string) browser name - `chrome` or `firefox` or `chromeheadless` or `firefoxheadless`.
- **DEFAULT_TIMEOUT** - (int) timeout after milliseconds.
- **DEBUG** - (bool) if you need to see the logs - `true` or `false`.

### Running Tests:

Environment variables are a big part of the configuration on how to run the tests.

Examples:

```cmd
PLATFORM=chromeheadless DEBUG=true npm test
```

or

```cmd
npm test
```

### Test Report:

<img alt="Report" src="https://raw.githubusercontent.com/nazmulb/cucumber/master/images/report.png" width="900px" />

### CI/CD using Circle CI:

<img alt="CI/CD using Circle CI" src="https://raw.githubusercontent.com/nazmulb/cucumber/master/images/circleci1.png" width="900px" />

<img alt="CI/CD using Circle CI" src="https://raw.githubusercontent.com/nazmulb/cucumber/master/images/circleci2.png" width="900px" />