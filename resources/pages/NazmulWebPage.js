const Page = require("./Page");

/**
 * Nazmul Web Page Class Methods
 */
class NazmulWebPage extends Page {
	/**
     * Get page elements
     * @returns {Object} page elements
     */
	get elements() {
		return {
			myProfileMenu: "#pagebar > li.page_item.page-item-8 > a",
			searchInput: "#s",
		};
	}

	/**
   * Enters a search term into search box and presses enter
   * @param {string} searchQuery - search query text
   */
	async preformSearch(searchQuery) {
		if (this.world.debug) console.log("preformSearch");
		let sq = searchQuery;
		const { searchInput } = this.elements;
		const { username } = this.world.data.user;

		if (username === sq) sq = "Test";

		await this.world.helper.waitFor(searchInput);
		const el = await this.world.helper.findElement(searchInput);

		await this.world.helper.scrollToElement(el);
		await el.sendKeys(sq);
		await el.sendKeys(this.world.selenium.Key.ENTER);
		await this.world.sleep(2000);
	}
}

module.exports = NazmulWebPage;
