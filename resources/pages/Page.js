/**
 * Page Class Methods
 */
class Page {
	/**
     * Instantiate the object
     */
	constructor(world) {
		this.world = world;
	}

	get elements() {
		return {};
	}

	get url() {
		return "/iberl/offers/adult/2/area/77/children/0/depAirport/5000%2C5001%2C5002%2C5003/depDate/13.11.2019/dest/77/duration/6_7-14/hotelAttributes/-1/hotelAttributesSport/-1/optCategory/2/port/654/retDate/20.11.2019/switchAction/process/switchController/service-layer/switchDestinationField/input/ibeHotelPort/654/ibeHotelSorting/price%3Bdesc/mdAttributeGroups/rating5/nofollow/1/hotelId/12650/topHotelSelected/0/alternativeHotelSelected/0/hotelIdType/iff/page/1/departureTimeFilter/240%2C1260/returnTimeFilter/0%2C720?asdd=aj2bb7bo1bp1lc1nt3or1rc0si3tm3ts0tz1vw0";
	}

	/**
     * Match the title
     * @param {string} expectedTitle - expected title to match
     */
	async titleEquals(expectedTitle) {
		if (this.world.debug) console.log("titleEquals");

		const actualTitle = await this.world.driver.getTitle();
		this.world.expect(actualTitle).to.equal(expectedTitle);
	}
}

module.exports = Page;
