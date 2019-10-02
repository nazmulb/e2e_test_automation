const { When, Then } = require("cucumber");

When("I fill the search offer form", async function (table) {
	await this.page.fillSearchOfferForm(table.rowsHash());
});

Then("I expect {string} page should be shown", async function (expectedTitle) {
	await this.page.checkPageName(expectedTitle);
});

When("I change selections and find the best hotel", async function (table) {
	await this.page.findBestHotel(table.rowsHash());
});

Then("I expect results should be sorted by {string}", async function (expectedSortedBy) {
	await this.page.verifySorted(expectedSortedBy);
});

When("I select the most expensive hotel", async function () {
	await this.page.selectMostExpensiveHotel();
});
