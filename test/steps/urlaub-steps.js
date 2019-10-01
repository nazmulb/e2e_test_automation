const { When } = require("cucumber");

When("I fill the search offer form", async function (table) {
	await this.page.fillSearchOfferForm(table.rowsHash());
});

When("click Angebote suchen button", async function () {
	await this.page.searchOffers();
});
