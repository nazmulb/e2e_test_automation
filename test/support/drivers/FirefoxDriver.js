const firefox = require("geckodriver");
const webdriver = require("selenium-webdriver");
const Driver = require("../Driver");

/**
 * Firefox Driver Related Methods
 */
class FirefoxDriver extends Driver {
	/**
     * Build the driver with capabilities
     * @returns {WebDriver} Driver object
     */
	build() {
		return new webdriver.Builder()
			.withCapabilities({
				browserName: "firefox",
				javascriptEnabled: true,
				acceptSslCerts: true,
				"webdriver.firefox.bin": firefox.path,
			}).build();
	}
}

module.exports = FirefoxDriver;
