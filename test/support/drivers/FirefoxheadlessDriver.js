const webdriver = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const Driver = require("../Driver");

/**
 * Firefox Headless Driver Related Methods
 */
class FirefoxheadlessDriver extends Driver {
	/**
     * Build the driver with capabilities
     * @returns {WebDriver} Driver object
     */
	build() {
		return new webdriver
			.Builder()
			.forBrowser("firefox")
			.setFirefoxOptions(new firefox.Options().headless())
			.build();
	}
}

module.exports = FirefoxheadlessDriver;
