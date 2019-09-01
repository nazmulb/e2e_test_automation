const webdriver = require("selenium-webdriver");
const Driver = require("../Driver");

/**
 * Android Driver Related Methods
 */
class AndroidDriver extends Driver {
	/**
     * Build the driver with capabilities
     * @returns {WebDriver} Driver object
     */
	build() {
		return new webdriver.Builder()
			.usingServer("http://localhost:4723/wd/hub")
			.withCapabilities({
				platformName: "Android",
				platformVersion: "4.4",
				deviceName: "Android Emulator",
				browserName: "Chrome",
			})
			.build();
	}
}

module.exports = AndroidDriver;
