const { setWorldConstructor } = require("cucumber");
const selenium = require("selenium-webdriver");
const { expect, assert } = require("chai");
const _ = require("lodash");
const requireDir = require("require-dir");
const Promise = require("bluebird");
const Driver = require("./Driver");
const Screenshot = require("./Screenshot");
const Helper = require("./Helper");
const PageFactory = require("../../resources/PageFactory");

// Use dotenv to read .env vars into Node
require("dotenv").config();

/**
 * Sharing code and Data between steps.
 * Using world we can add helper methods, or logging.
 */
class World {
	/**
     * Instantiate the object
     * @param {JSON} attach - attach anything
     * @param {Command} parameters - sets the parameters as command
     */
	constructor({ attach, parameters }) {
		this.attach = attach; // attaching screenshots to report
		this.parameters = parameters;
		this.pf = process.env.PLATFORM || "chrome";
		this.env = process.env.ENVIRONMENT || "local";
		this.timeout = parseInt(process.env.DEFAULT_TIMEOUT) || 60000;
		this.debug = (process.env.DEBUG === "true") || false;

		// browser driver instance
		this.driver = Driver.create(this.pf).build();
		this.driver.manage().window().setRect({
			width: 1440, height: 900, x: 0, y: 0,
		});

		this.selenium = selenium;
		this.expect = expect;
		this.assert = assert;

		this.screenshot = new Screenshot(this);

		this.helper = new Helper(this);
		this.pageFactory = new PageFactory(this);
		this.data = requireDir("../../resources/data", { recurse: true });
	}

	get isBrowser() {
		return _.isFunction(this.driver.manage);
	}

	get platform() {
		return this.pf;
	}

	get environment() {
		return this.env;
	}

	get defaultTimeout() {
		return this.timeout;
	}

	get appUrl() {
		return this.helper.getAppUrlForEnv(this.env);
	}

	/**
	 * Easy switch browser tabs
	 * @param {Number} tabNum
	 * @return {TargetLocator}
	 */
	async switchTab(tabNum = "0") {
		if (!this.isBrowser) {
			throw new Error("Platform set to NONE, no browser no tabs");
		}

		const allWindowHandels = await this.driver.getAllWindowHandles();
		return this.driver.switchTo().window(allWindowHandels[tabNum]);
	}

	/**
     * Sleep
     * @param {String} milliseconds - milli seconds
     * @returns {Bluebird} return promise
     */
	sleep(milliseconds) {
		return Promise.delay(milliseconds);
	}
}

setWorldConstructor(World);
