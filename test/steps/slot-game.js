const { Given, When, Then } = require('cucumber');

When('I set the balance {int}', async function (value) {
    await this.page.setBalance(value);
});

When('I click Spin button', async function () {
    await this.page.clickSpinButton();
});