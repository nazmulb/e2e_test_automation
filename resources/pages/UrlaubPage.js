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
			nextStartMonthSpan: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.start-input > div.datepicker-header > span.month-button.month-button-next.icon-arrow-right-bold",
			selectedStartMonthYearSpan: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.start-input > div.datepicker-header > div > span[class=\"\"]",
			selectDateTd: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div",
			nextReturnMonthSpan: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.end-input > div.datepicker-header > span.month-button.month-button-next.icon-arrow-right-bold",
			selectedReturnMonthYearSpan: "#flattrip > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.end-input > div.datepicker-header > div > span[class=\"\"]",
			travellerSummaryInput: "#travellerSummary",
			travellerLayerDiv: "div[id=\"travellerLayer\"][style=\"\"]",
			adultCountDiv: "#adult > div",
			adultPlusButton: "#adult > button.plusButton",
			adultMinusButton: "#adult > button.minusButton",
			travellerApplyButton: "#travellerLayer > div.submit > button",
			searchOffersBtn: "#submit",
			HotelSelectionPageFirstResMediaDiv: "#hotelList > div.skeleton-wrapper > article:nth-child(1) > div.media.media-fullscreen.js-media.js-showFullscreenSlider.media-loaded",
		};
	}

	/**
     * Generate Date Selector
	 * @param {Object} dateObject - Date object
	 * @param {String} input - start / end
	 * @returns {String} - css selector
     */
	generateDateSelector(dateObject, input) {
		const { selectDateTd } = this.elements;

		return `${selectDateTd} > div.datepicker-layer.${input}-input > div.datepicker-wrapper > div > div > div.month.month-${dateObject.getMonth()}.year-${dateObject.getFullYear()} > table > tbody > tr > td.day.day-${dateObject.getDate()}`;
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
     * Set Date
	 * @param {Object} dateObject - Date object
	 * @param {String} locatorNextMonth - css or xpath selector element for next month
	 * @param {String} locatorSelectedMonthYear - css or xpath selector element for selected month year
	 * @param {String} input - start / end
     */
	async setDate(dateObject, locatorNextMonth, locatorSelectedMonthYear, input) {
		await this.world.helper.waitFor(locatorNextMonth);
		let { selectedMonth, selectedYear } = await this.getSelectedMonthYear(locatorSelectedMonthYear);

		if (this.world.debug) console.log(`${selectedMonth}/${selectedYear}`);

		while (dateObject.getFullYear() > selectedYear) {
			await this.clickNextMonth(locatorNextMonth);
			const selected = await this.getSelectedMonthYear(locatorSelectedMonthYear);
			selectedMonth = selected.selectedMonth;
			selectedYear = selected.selectedYear;

			if (this.world.debug) console.log(`${selectedMonth}/${selectedYear}`);
		}

		while (dateObject.getMonth() > selectedMonth) {
			await this.clickNextMonth(locatorNextMonth);
			const selected = await this.getSelectedMonthYear(locatorSelectedMonthYear);
			selectedMonth = selected.selectedMonth;

			if (this.world.debug) console.log(`${selectedMonth}/${selectedYear}`);
		}

		const selectDateTd = this.generateDateSelector(dateObject, input);
		if (this.world.debug) console.log(selectDateTd);

		await this.world.helper.waitFor(selectDateTd);
		const el = await this.world.helper.findElement(selectDateTd);
		await this.world.helper.scrollToElement(el);
		await el.click();
		await this.world.sleep(50);
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
				const {
					startDateDiv, nextStartMonthSpan, selectedStartMonthYearSpan, nextReturnMonthSpan, selectedReturnMonthYearSpan,
				} = this.elements;

				// Select start date
				await this.world.helper.waitFor(startDateDiv);
				const el = await this.world.helper.findElement(startDateDiv);
				await el.click();
				await this.setDate(sDate, nextStartMonthSpan, selectedStartMonthYearSpan, "start");

				// Select return date
				await this.setDate(eDate, nextReturnMonthSpan, selectedReturnMonthYearSpan, "end");

				await this.world.sleep(100);
			} else {
				throw new Error("Start date shouldn't be past from the return date");
			}
		} else {
			throw new Error("Start date shouldn't be today or previous");
		}
	}

	/**
     * Set Adults
	 * @param {String} locator - css or xpath selector element
     */
	async setAdults(locator) {
		if (this.world.debug) console.log("setAdults");

		await this.world.sleep(50);
		const el = await this.world.helper.findElement(locator);
		await this.world.helper.scrollToElement(el);
		await el.click();
		await this.world.sleep(50);
	}

	/**
     * Set Traveller
     * @param {Number} noOfAdults - # of adults
	 * @param {Number} noOfChildren - # of children
     */
	async setTraveller(noOfAdults, noOfChildren = 0) {
		if (this.world.debug) console.log("setTraveller");

		const adults = parseInt(noOfAdults);
		const children = parseInt(noOfChildren);
		let el;
		const {
			travellerSummaryInput, travellerLayerDiv, adultCountDiv, adultPlusButton, adultMinusButton, travellerApplyButton,
		} = this.elements;

		if (adults > 0 && adults <= 4) {
			await this.world.helper.waitFor(travellerSummaryInput);
			el = await this.world.helper.findElement(travellerSummaryInput);
			await el.click();

			await this.world.helper.waitFor(travellerLayerDiv);
			let adultCount = await this.world.helper.getElementText(adultCountDiv);

			if (this.world.debug) console.log(`${adultCount}`);

			while (adults > adultCount) {
				await this.setAdults(adultPlusButton);
				adultCount = await this.world.helper.getElementText(adultCountDiv);

				if (this.world.debug) console.log(`${adultCount}`);
			}

			while (adults < adultCount) {
				await this.setAdults(adultMinusButton);
				adultCount = await this.world.helper.getElementText(adultCountDiv);

				if (this.world.debug) console.log(`${adultCount}`);
			}

			await this.world.sleep(100);
			await this.world.helper.waitFor(travellerApplyButton);
			el = await this.world.helper.findElement(travellerApplyButton);
			await el.click();

			await this.world.sleep(500);
		} else {
			throw new Error("No of adults should be within 1 to 4");
		}

		if (children > 0) {
			// TODO: Do nothing now :)
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
			await this.setTraveller(data.noOfAdults);
		}
	}

	/**
     * Search Offers
     */
	async searchOffers() {
		if (this.world.debug) console.log("searchOffers");

		const { searchOffersBtn, HotelSelectionPageFirstResMediaDiv } = this.elements;

		await this.world.helper.waitFor(searchOffersBtn);
		const el = await this.world.helper.findElement(searchOffersBtn);
		await this.world.helper.scrollToElement(el);
		await el.click();

		await this.world.helper.waitFor(HotelSelectionPageFirstResMediaDiv);
		await this.world.sleep(1000);
	}
}

module.exports = UrlaubPage;
