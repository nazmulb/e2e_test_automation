const Page = require("./Page");

/**
 * Ab In Den Urlaub Page Class Methods
 */
class UrlaubPage extends Page {
	/**
     * Get page elements
     * @returns {Object} - page elements
     */
	get elements() {
		return {
			destinationInput: "#idestflat",
			locationLayerDiv: "div.location-layer.show-layer-on",
			aiduacWrapperDiv: "#ac_old > div.ac-box > div.ac-item.location.layer-version > div.aiduac-wrapper.destinations.aiduac-open",
			startDateDiv: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-input-wrapper.datepicker-input-wrapper-start > div",
			nextMonthDiv: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.start-input > div.datepicker-header > span.month-button.month-button-next.icon-arrow-right-bold",
			selectedMonthYearSpan: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.start-input > div.datepicker-header > div > span[class=\"\"]",
			selectDateTd: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.start-input > div.datepicker-wrapper > div > div",
			searchOffersBtn: "#submit",
		};
	}

	/**
     * Generate Date Selector
	 * @param {Object} - Date object
	 * @returns {String} - css selector
     */
	generateDateSelector(dateObject) {
		const { selectDateTd } = this.elements;

		return `${selectDateTd} > div.month.month-${dateObject.getMonth()}.year-${dateObject.getFullYear()} > table > tbody > tr > td.day.day-${dateObject.getDate()}`;
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
     * Click Next Month
	 * @param {String} locator - css or xpath selector element
     */
	async clickNextMonth(locator) {
		if (this.world.debug) console.log("clickNextMonth");

		await this.world.sleep(50);
		const el = await this.world.helper.findElement(locator);
		await el.click();
		await this.world.sleep(50);
	}

	/**
     * Get Selected Month and Year
	 * @param {String} locator - css or xpath selector element
	 * @returns {Object} - selected month and year
     */
	async getSelectedMonthYear(locator) {
		if (this.world.debug) console.log("getSelectedMonthYear");

		const selectedMonth = await this.world.helper.getElementAttribute(locator, "data-month");
		const selectedYear = await this.world.helper.getElementAttribute(locator, "data-year");

		return {
			selectedMonth,
			selectedYear,
		};
	}

	/**
     * Set Date Range
     * @param {String} startDate - start date
	 * @param {String} returnDate - return date
     */
	async setDateRange(startDate, returnDate) {
		if (this.world.debug) console.log("setDateRange");

		const sDate = new Date(startDate);
		const eDate = new Date(returnDate);
		const today = new Date();

		if (sDate > today) {
			if (eDate >= sDate) {
				const { startDateDiv, nextMonthDiv, selectedMonthYearSpan } = this.elements;
				let el;

				await this.world.helper.waitFor(startDateDiv);
				el = await this.world.helper.findElement(startDateDiv);
				await el.click();

				await this.world.helper.waitFor(nextMonthDiv);

				let { selectedMonth, selectedYear } = await this.getSelectedMonthYear(selectedMonthYearSpan);

				console.log(`${selectedMonth}/${selectedYear}`);

				while (sDate.getFullYear() > selectedYear) {
					await this.clickNextMonth(nextMonthDiv);
					const selected = await this.getSelectedMonthYear(selectedMonthYearSpan);
					selectedMonth = selected.selectedMonth;
					selectedYear = selected.selectedYear;

					console.log(`${selectedMonth}/${selectedYear}`);
				}

				while (sDate.getMonth() > selectedMonth) {
					await this.clickNextMonth(nextMonthDiv);
					const selected = await this.getSelectedMonthYear(selectedMonthYearSpan);
					selectedMonth = selected.selectedMonth;

					console.log(`${selectedMonth}/${selectedYear}`);
				}

				const selectDateTd = this.generateDateSelector(sDate);
				console.log(selectDateTd);

				await this.world.helper.waitFor(selectDateTd);
				el = await this.world.helper.findElement(selectDateTd);
				await el.click();

				await this.world.sleep(2000);
			} else {
				throw new Error("Start date shouldn't be past from the return date");
			}
		} else {
			throw new Error("Start date shouldn't be today or previous");
		}
	}


	/**
     * Fill Search Offer Form
     * @param {Object} data - form data
     */
	async fillSearchOfferForm(data) {
		if (this.world.debug) console.log("fillSearchOfferForm");

		if (data.destination) {
			await this.selectDestination(data.destination);
		}

		if (data.startDate && data.returnDate) {
			await this.setDateRange(data.startDate, data.returnDate);
		}

		if (data.noOfAdults) {
			// TODO:
		}
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

module.exports = UrlaubPage;
