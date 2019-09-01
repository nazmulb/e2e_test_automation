const chromedriver = require("chromedriver");
const webdriver = require("selenium-webdriver");
const Driver = require("../Driver");

/**
 * Chrome Driver Related Methods
 */
class ChromeDriver extends Driver {
	/**
     * Build the driver with capabilities
     * @returns {WebDriver} Driver object
     */
	build() {
		return new webdriver.Builder()
			.withCapabilities({
				browserName: "chrome",
				javascriptEnabled: true,
				acceptSslCerts: true,
				chromeOptions: {
					args: ["start-maximized", "disable-extensions"],
				},
				path: chromedriver.path,
			}).build();
	}
}

module.exports = ChromeDriver;
