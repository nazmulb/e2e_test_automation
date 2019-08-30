const Page = require('./Page');

/**
 * Slot Game Page Class Methods
 */
class SlotGamePage extends Page {
    
    /**
     * Get page specific url to navigate
     * @returns {String} page url
     */
    get url() {
        return '/slot_game.html';
    }

    /**
     * Get page elements
     * @returns {Object} page elements
     */
    get elements() {
        return {
            balanceInput: '#balance-value',
            testDataInput: '#testdata',
            spinButton: '#spinButton'
        };
    }

    /**
     * Set the balance
     * @param {Number} value
     */
    async setBalance(value) {
        if(this.world.debug) console.log('setBalance');

        const balanceInput = this.elements.balanceInput;

        await this.world.helper.waitFor(balanceInput);
        const input = await this.world.helper.findElement(balanceInput);

        await input.clear();
        await input.sendKeys(value);
        await this.world.sleep(100);
    }


    /**
     * Set test data
     * @param {Number} value
     */
    async setTestData(value) {
        if(this.world.debug) console.log('setTestData');

        const testDataInput = this.elements.testDataInput;

        await this.world.helper.waitFor(testDataInput);
        const input = await this.world.helper.findElement(testDataInput);

        await input.clear();
        await input.sendKeys(value);
        await this.world.sleep(100);
    }

    /**
     * Click the Spin button
     */
    async clickSpinButton(searchQuery) {
        if(this.world.debug) console.log('clickSpinButton');

        const spinButton = this.elements.spinButton;

        await this.world.helper.waitFor(spinButton);
        const el = await this.world.helper.findElement(spinButton);

        await this.world.helper.scrollToElement(el);
        await el.click();
        await this.world.sleep(100);
    }

    /**
     * Check the balance
     * @param {Number} expectedValue
     */
    async balanceEquals(expectedValue) {
        if(this.world.debug) console.log('balanceEquals');

        const balanceInput = this.elements.balanceInput;
        const actualValue = await this.world.helper.getElementAttribute(balanceInput, 'value');

        this.world.expect(parseInt(actualValue)).to.equal(expectedValue);
    }
}

module.exports = SlotGamePage;