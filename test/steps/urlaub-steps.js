const { When } = require("cucumber");

When("I select {string} as destination", async function (destination) {
	await this.page.selectDestination(destination);
});

When("click Angebote suchen button", async function () {
	await this.page.searchOffers();
});
