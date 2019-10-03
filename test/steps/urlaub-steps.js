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

When("select some options to find best fit", async function (table) {
	await this.page.findBestFit(table.rowsHash());
});

Then("I count how many options with direct flights", async function () {
	await this.page.countDirectFlights();
});

Then("expect flight time of first result falls within desired time range", async function () {
	// TODO:
});

When("I select the first offer and click {string} button", async function (buttonName) {
	await this.page.selectFirstOffer(buttonName);
});

Then("I expect the hotel name is same as the one I selected earlier", async function () {
	await this.page.verifyHotelName();
});
