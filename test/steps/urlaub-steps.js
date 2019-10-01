const { When } = require("cucumber");

When("I select {string} as destination", async function (destination) {
	await this.page.selectDestination(destination);
});

When("set dates from {string} to {string}", async function (startDate, returnDate) {
	await this.page.setDateRange(startDate, returnDate);
});

When("click Angebote suchen button", async function () {
	await this.page.searchOffers();
});
