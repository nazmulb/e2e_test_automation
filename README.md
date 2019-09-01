# E2E Test Automation Framework

### Overview:

We need the following to have a browser based e2e testing using Cucumber JS:

- <a href="https://github.com/cucumber/cucumber-js">Cucumber JS</a>
- <a href="https://www.npmjs.com/package/chai">Chai</a>
- <a href="https://docs.seleniumhq.org/docs/03_webdriver.jsp#setting-up-a-selenium-webdriver-project">Selenium-Webdriver</a>
- <a href="https://www.npmjs.com/package/cucumber-html-reporter">Cucumber-Html-Reporter</a>

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

### Test report:

<img alt="Report" src="https://raw.githubusercontent.com/nazmulb/cucumber/master/images/report.png" width="900px" />