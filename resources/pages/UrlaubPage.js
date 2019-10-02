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
			hotelSelectionPageFirstResMediaDiv: "#hotelList > div.skeleton-wrapper > article:nth-child(1) > div.media.media-fullscreen.js-media.js-showFullscreenSlider.media-loaded",
			hotelSelectionPageNameSpan: "#bookingProcess > div > ul > li.active > span > span",
			startDateHotelDiv: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-input-wrapper.datepicker-input-wrapper-start > div",
			nextStartMonthHotelSpan: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-layer.start-input > div.datepicker-header > span.month-button.month-button-next.icon-arrow-right-bold",
			selectedStartMonthYearHotelSpan: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-layer.start-input > div.datepicker-header > div > span[class=\"\"]",
			selectDateHotelTd: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div",
			nextReturnMonthHotelSpan: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-layer.end-input > div.datepicker-header > span.month-button.month-button-next.icon-arrow-right-bold",
			selectedReturnMonthYearHotelSpan: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-layer.end-input > div.datepicker-header > div > span[class=\"\"]",
			directFlightHotelInput: "#directFlight",
			starRatingCatInput: "#optCategory{txt}",
			customerReviewSvg: "#hotelFilter > div.filter.filter-kundenbewertung > label:nth-child({txt}) > svg",
		};
	}

	/**
     * Generate Date Selector
	 * @param {String} dateTd - css or xpath selector element
	 * @param {Object} dateObject - Date object
	 * @param {String} input - start / end
	 * @returns {String} - css selector
     */
	generateDateSelector(dateTd, dateObject, input) {
		return `${dateTd} > div.datepicker-layer.${input}-input > div.datepicker-wrapper > div > div > div.month.month-${dateObject.getMonth()}.year-${dateObject.getFullYear()} > table > tbody > tr > td.day.day-${dateObject.getDate()}`;
	}

	/**
     * Click Button
	 * @param {String} buttonToClick - css or xpath selector element for button
	 * @param {String} waitForElement - css or xpath selector element for wait
	 * @param {Boolean} scroll - need scroll or not
	 * @param {String} scrollToElement - css or xpath selector element for scroll
     */
	async clickButton(buttonToClick, waitForElement, scroll = true, scrollToElement = "") {
		if (this.world.debug) console.log("clickButton");

		await this.world.helper.waitFor(buttonToClick);
		const el = await this.world.helper.findElement(buttonToClick);

		if (scroll) {
			const element = (scrollToElement === "") ? el : await this.world.helper.findElement(scrollToElement);
			await this.world.helper.scrollToElement(element);
		}

		await el.click();

		await this.world.helper.waitFor(waitForElement);
		await this.world.sleep(1000);
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
	 * @param {String} pageName - name of the page
     */
	async setDate(dateObject, locatorNextMonth, locatorSelectedMonthYear, input, pageName = "") {
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

		const selectorName = `selectDate${pageName}Td`;
		const dateTd = this.elements[selectorName];

		if (this.world.debug) console.log(dateTd);

		const selectDateTd = this.generateDateSelector(dateTd, dateObject, input);
		if (this.world.debug) console.log(selectDateTd);

		await this.world.helper.waitFor(selectDateTd);
		const el = await this.world.helper.findElement(selectDateTd);
		if (!pageName) await this.world.helper.scrollToElement(el);
		await el.click();
		await this.world.sleep(50);
	}

	/**
     * Set Date Range
     * @param {String} startDate
	 * @param {String} returnDate
	 * @param {String} locatorStartDate
	 * @param {String} locatorNextStartMonth
	 * @param {String} locatorSelectedStartMonthYear
	 * @param {String} locatorNextReturnMonth
	 * @param {String} locatorSelectedReturnMonthYear
	 * @param {String} pageName
     */
	async setDateRange(startDate, returnDate, locatorStartDate, locatorNextStartMonth, locatorSelectedStartMonthYear, locatorNextReturnMonth, locatorSelectedReturnMonthYear, pageName = "") {
		if (this.world.debug) console.log("setDateRange");

		const sDate = new Date(startDate);
		const eDate = new Date(returnDate);
		const today = new Date();
		const lastDate = new Date();

		lastDate.setFullYear(lastDate.getFullYear() + 3, lastDate.getMonth() - 1, lastDate.getDate());

		if (sDate > today) {
			if (eDate >= sDate) {
				if (lastDate >= eDate) {
					// Select start date
					await this.world.helper.waitFor(locatorStartDate);
					const el = await this.world.helper.findElement(locatorStartDate);
					await el.click();
					await this.setDate(sDate, locatorNextStartMonth, locatorSelectedStartMonthYear, "start", pageName);

					// Select return date
					await this.setDate(eDate, locatorNextReturnMonth, locatorSelectedReturnMonthYear, "end", pageName);

					await this.world.sleep(100);
				} else {
					throw new Error("Return date shouldn't be more than 3 years in advance");
				}
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
			const {
				startDateDiv, nextStartMonthSpan, selectedStartMonthYearSpan, nextReturnMonthSpan, selectedReturnMonthYearSpan,
			} = this.elements;

			await this.setDateRange(data.startDate, data.returnDate, startDateDiv, nextStartMonthSpan, selectedStartMonthYearSpan, nextReturnMonthSpan, selectedReturnMonthYearSpan);
		}

		if (data.noOfAdults) {
			await this.setTraveller(data.noOfAdults);
		}

		if (data.clickButton) {
			const { searchOffersBtn, hotelSelectionPageFirstResMediaDiv } = this.elements;

			await this.clickButton(searchOffersBtn, hotelSelectionPageFirstResMediaDiv);
		}
	}

	/**
     * Check Page Name
	 * @param {String} expectedTitle - name of the page
     */
	async checkPageName(expectedTitle) {
		if (this.world.debug) console.log("checkPageName");

		const { hotelSelectionPageNameSpan } = this.elements;

		await this.world.helper.waitFor(hotelSelectionPageNameSpan);
		let actualTitle = await this.world.helper.getElementText(hotelSelectionPageNameSpan);
		actualTitle = actualTitle.replace(". ", "");
		this.world.expect(actualTitle).to.equal(expectedTitle);
	}

	/**
     * Change selections and find the best hotel
     * @param {Object} data - form data
     */
	async findBestHotel(data) {
		if (this.world.debug) console.log("findBestHotel");

		const { hotelSelectionPageFirstResMediaDiv, directFlightHotelInput } = this.elements;

		if (data.startDate && data.returnDate) {
			const {
				startDateHotelDiv, nextStartMonthHotelSpan, selectedStartMonthYearHotelSpan, nextReturnMonthHotelSpan, selectedReturnMonthYearHotelSpan,
			} = this.elements;

			await this.setDateRange(data.startDate, data.returnDate, startDateHotelDiv, nextStartMonthHotelSpan, selectedStartMonthYearHotelSpan, nextReturnMonthHotelSpan, selectedReturnMonthYearHotelSpan, "Hotel");
		}

		if (data.clickButton) {
			const { searchOffersBtn } = this.elements;

			await this.clickButton(searchOffersBtn, hotelSelectionPageFirstResMediaDiv, true, directFlightHotelInput);
		}

		if (data.starRating) {
			const { starRatingCatInput } = this.elements;
			const number = (data.starRating === "beliebig") ? -1 : Math.round(parseInt(data.starRating) / 2);
			const starRateInput = starRatingCatInput.replace("{txt}", number);

			await this.clickButton(starRateInput, hotelSelectionPageFirstResMediaDiv, true, directFlightHotelInput);
			await this.world.sleep(1000);
		}


		if (data.customerReview) {
			const { customerReviewSvg } = this.elements;
			const custReviewSvg = customerReviewSvg.replace("{txt}", data.customerReview);

			await this.clickButton(custReviewSvg, hotelSelectionPageFirstResMediaDiv, true, directFlightHotelInput);
		}

		await this.world.sleep(2000);
	}


	/**
     * Verify Sorted
     * @param {String} expectedSortedBy - sorted by
     */
	async verifySorted(expectedSortedBy) {
		if (this.world.debug) console.log("verifySorted");

		if (expectedSortedBy) {
			// TODO:
		}
	}
}

module.exports = UrlaubPage;
