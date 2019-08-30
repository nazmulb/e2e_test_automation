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
        return '/Test_Task.html';
    }

    /**
     * Get page elements
     * @returns {Object} page elements
     */
    get elements() {
        return {
            balanceInput: '#balance-value',
            testDataInput: '#testdata',
            spinButton: '#spinButton',
            winboxDiv: '#winbox'
        };
    }

    /**
     * Set the balance
     * @param {Number} value
     */
    async setBalance(value) {
        if(this.world.debug) console.log('setBalance');

        const balanceInput = this.elements.balanceInput;
        //const username = this.world.data.user.username;

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

        await this.world.sleep(100);
    }

    /**
     * Check the Spin button is disabled or not?
     */
    async isSpinButtonDisabled() {
        if(this.world.debug) console.log('isSpinButtonDisabled');

        const spinButton = this.elements.spinButton;

        const actualValue = await this.world.helper.isEnabled(spinButton);
        if(this.world.debug) console.log(actualValue);

        this.world.expect(actualValue).to.equal(false);
    }

    /**
     * Check the win coins
     * @param {Number} coins
     */
    async checkWinCoins(coins) {
        if(this.world.debug) console.log('checkWinCoins');

        let expectedValue = false;
        const winboxDiv = this.elements.winboxDiv;

        let actualValue = await this.world.helper.isDisplayed(winboxDiv);
        if(this.world.debug) console.log(actualValue);
        
        if(parseInt(coins)>0) expectedValue = true;

        this.world.expect(actualValue).to.equal(expectedValue);

        if(expectedValue) {
            await this.world.sleep(1000);

            expectedValue = "Win "+coins+" coins";
            let actualValue = await this.world.helper.getElementText(winboxDiv);
            if(this.world.debug) console.log(actualValue);

            this.world.expect(actualValue).to.equal(expectedValue);
        }
    }
}

module.exports = SlotGamePage;