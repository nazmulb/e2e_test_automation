const Driver = require("../Driver");
const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

/**
 * Firefox Headless Driver Related Methods
 */
class FirefoxheadlessDriver extends Driver {
    /**
     * Instantiate the object
     */
    constructor() {
        super();
    }

    /**
     * Build the driver with capabilities 
     * @returns {WebDriver} Driver object
     */
    build() {
        return new webdriver
                .Builder()
                .forBrowser('firefox')
                .setFirefoxOptions(new firefox.Options().headless())
                .build();
    }
}

module.exports = FirefoxheadlessDriver;