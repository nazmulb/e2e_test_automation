const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const Driver = require("../Driver");

/**
 * Chrome Headless Driver Related Methods
 */
class ChromeheadlessDriver extends Driver {
	/**
     * Build the driver with capabilities
     * @returns {WebDriver} Driver object
     */
	build() {
		return new webdriver
			.Builder()
			.forBrowser("chrome")
			.setChromeOptions(new chrome.Options().addArguments("--window-size=1400x1000").headless())
			.build();
	}
}

module.exports = ChromeheadlessDriver;
