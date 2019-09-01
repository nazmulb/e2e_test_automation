const { When, Then } = require("cucumber");

When("I set the test data {int}", async function (value) {
	await this.page.setTestData(value);
});

When("I click Spin button", async function () {
	await this.page.clickSpinButton();
});

When("I set the balance {int}", async function (value) {
	await this.page.setBalance(value);
});

Then("Win {int} coins", async function (value) {
	await this.page.checkWinCoins(value);
});

Then("The balance shoud be {int}", async function (value) {
	await this.page.balanceEquals(value);
});

Then("Spin button should be disabled", async function () {
	await this.page.isSpinButtonDisabled();
});
