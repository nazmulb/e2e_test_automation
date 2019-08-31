const _ = require('lodash');

/**
 * Helper Related Methods
 */
class Helper {

    /**
     * Instantiate the object
     * @param {World} world - world object instance
     */
    constructor(world) {
        this.world = world;

        if(this.world.debug) console.log('Helper:constructor');
    }

    /**
     * This will return world object instance
     * @returns {World} world object
     * @example
     *      helper.getWorld();
     */
    getWorld() {
        return this.world;
    }

    /**
     * This will return driver object instance
     * @returns {WebDriver} Driver object
     * @example
     *      helper.getDriver();
     */
    getDriver() {
        return this.world.driver;
    }

    /**
     * Get app url for environment
     * @param  {String} env - Environment
     * @return {String} root url
     */
    getAppUrlForEnv(env) {
        switch (env.toLowerCase()) {
        case 'local':
            return "file:///Volumes/MyComputer/projects/htdocs/e2e_test_automation/";
        case 'prod':
            return "https://nazmulb.wordpress.com";
        default:
            return "https://nazmulb.wordpress.com";
        }
    }

    /**
     * Load or navigate to a page with the url and check the body element is present
     * @param {string} url - url to load
     * @param {integer} waitInSeconds - number of seconds to wait for page to load
     * @example
     *      helper.loadPage('http://www.google.com');
     */
    async loadPage(url) {
        await this.world.driver.get(url);

        if(this.world.debug) console.log('loadPage: '+url);
        
        // now wait for the body element to be present
        await this.waitFor('body');
    }

    /**
     * Wait for any element to be found
     * @param {string} locator - css or xpath selector element
     * @param {integer} waitInSeconds - number of seconds to wait for the element to load
     * @example
     *      helper.waitFor('body', 15);
     */
    async waitFor(locator, waitInSeconds) {

        // use either passed in timeout or global default
        const timeout = (waitInSeconds) ? (waitInSeconds * 1000) : this.world.defaultTimeout;

        if (!this.world.isBrowser) {
			throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }
        
        const selector = (locator.indexOf('//') === 0) ? "xpath" : "css";

        if(this.world.debug) console.log('waitFor: '+locator);

        await this.world.driver.wait(this.world.selenium.until.elementLocated(this.world.selenium.By[selector](locator)), timeout);
    }

    /**
     * To find an element on the page
     * @param {string} locator - css or xpath selector element
     * @returns {WebElementPromise} an element that can be used to issue commands against the located element
     * @example
     *      helper.findElement('body');
     */
    async findElement(locator) {

        if (!this.world.isBrowser) {
			throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }
        
        const selector = (locator.indexOf('//') === 0) ? "xpath" : "css";

        if(this.world.debug) console.log('findElement: '+locator);

        return this.world.driver.findElement(this.world.selenium.By[selector](locator));
    }

    /**
     * Get Element Text
     * @param {string} locator - css or xpath selector element
     * @return {string}
     * @example
     *      helper.getElementText('#divid');
     */
    async getElementText(locator) {

        await this.world.helper.waitFor(locator);
        const input = await this.world.helper.findElement(locator);

        return await input.getText();
    }

     /**
     * Get Element Attribute
     * @param {string} locator - css or xpath selector element
     * @param {string} attribute - name, value, class, etc
     * @return {string}
     * @example
     *      helper.getElementAttribute('#divid', 'class');
     */
    async getElementAttribute(locator, attribute) {

        await this.world.helper.waitFor(locator);
        const input = await this.world.helper.findElement(locator);

        return await input.getAttribute(attribute);
    }

    /**
     * Get Element Css Value
     * @param {string} locator - css or xpath selector element
     * @param {string} attribute - width, height, position, visibility, etc
     * @return {string}
     * @example
     *      helper.getCssValue('#divid', 'width');
     */
    async getCssValue(locator, attribute) {

        await this.world.helper.waitFor(locator);
        const input = await this.world.helper.findElement(locator);

        return await input.getCssValue(attribute);
    }

    /**
     * Is displayed
     * @param {string} locator - css or xpath selector element
     * @return {boolean}
     * @example
     *      helper.isDisplayed('#divid');
     */
    async isDisplayed(locator) {

        await this.world.helper.waitFor(locator);
        const input = await this.world.helper.findElement(locator);

        return await input.isDisplayed();
    }

    /**
     * Is enabled
     * @param {string} locator - css or xpath selector element
     * @return {boolean}
     * @example
     *      helper.isEnabled('#divid');
     */
    async isEnabled(locator) {

        await this.world.helper.waitFor(locator);
        const input = await this.world.helper.findElement(locator);

        return await input.isEnabled();
    }

    /**
     * Is selected
     * @param {string} locator - css or xpath selector element
     * @return {boolean}
     * @example
     *      helper.isSelected('#divid');
     */
    async isSelected(locator) {

        await this.world.helper.waitFor(locator);
        const input = await this.world.helper.findElement(locator);

        return await input.isSelected();
    }

    /**
     * Scroll to the element
     * @param {WebElement} element - the element
     * @example
     *      helper.scrollToElement(el);
     */
    async scrollToElement(element) {
        if(this.world.debug) console.log('scrollToElement');

        await this.world.driver.executeScript('arguments[0].scrollIntoView()', element);
        await this.world.sleep(1000);
    }

    /**
     * Reload or refresh page
     * @example
     *      helper.refresh();
     */
    async refresh() {
        if(this.world.debug) console.log('refresh');

        await this.world.driver.navigate().refresh();
        await this.world.sleep(2000);
    }
}


module.exports = Helper;