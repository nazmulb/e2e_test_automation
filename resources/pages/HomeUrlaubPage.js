const Page = require("./Page");

/**
 * Ab In Den Urlaub Home Page Class Methods
 */
class HomeUrlaubPage extends Page {
	/**
     * Get page elements
     * @returns {Object} page elements
     */
	get elements() {
		return {
			destinationInput: "#idestflat",
			locationLayerDiv: "div.location-layer.show-layer-on",
			aiduacWrapperDiv: "#ac_old > div.ac-box > div.ac-item.location.layer-version > div.aiduac-wrapper.destinations.aiduac-open",
			searchOffersBtn: "#submit",
		};
	}

	/**
     * Select destination
     * @param {String} destination
     */
	async selectDestination(destination) {
		if (this.world.debug) console.log("selectDestination");

		const { destinationInput, locationLayerDiv, aiduacWrapperDiv } = this.elements;

		await this.world.helper.waitFor(destinationInput);
		const input = await this.world.helper.findElement(destinationInput);

		await input.click();
		await this.world.helper.waitFor(locationLayerDiv);
		await input.sendKeys(destination);
		await this.world.helper.waitFor(aiduacWrapperDiv);
		await this.world.sleep(5000);
		await input.sendKeys(this.world.selenium.Key.ENTER);
		await this.world.sleep(1000);
	}

	/**
     * Search Offers
     */
	async searchOffers() {
		if (this.world.debug) console.log("searchOffers");
		const { searchOffersBtn } = this.elements;

		await this.world.helper.waitFor(searchOffersBtn);
		const el = await this.world.helper.findElement(searchOffersBtn);
		await el.click();
		await this.world.sleep(2000);
	}
}

module.exports = HomeUrlaubPage;
