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
			cookieButton: "#CybotCookiebotDialogBodyButtonAccept",
			destinationInput: "#idestflat",
			locationLayerDiv: "div[class=\"location-layer show-layer-on\"]",
			locationLayerHiddenDiv: "div[class=\"location-layer show-layer-on hidden\"]",
			aiduacWrapperDiv: "#ac_old > div.ac-box > div.ac-item.location.layer-version > div.aiduac-wrapper.destinations.aiduac-open",
			aiduacContentDestinationsLink: "#ac_old div[class=\"aiduac-content destinations\"] a[data-name=\"{txt}\"]",
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
			hotelSelectionPageLoaderSection: "section[id=\"ajaxLoadSkeleton\"][style=\"display: none;\"]",
			currentPageNameSpan: "#bookingProcess > div > ul > li.active > span > span",
			startDateHotelDiv: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-input-wrapper.datepicker-input-wrapper-start > div",
			nextStartMonthHotelSpan: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-layer.start-input > div.datepicker-header > span.month-button.month-button-next.icon-arrow-right-bold",
			selectedStartMonthYearHotelSpan: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-layer.start-input > div.datepicker-header > div > span[class=\"\"]",
			selectDateHotelTd: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div",
			nextReturnMonthHotelSpan: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-layer.end-input > div.datepicker-header > span.month-button.month-button-next.icon-arrow-right-bold",
			selectedReturnMonthYearHotelSpan: "#flattrip > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-formfilter > div > div > div.datepicker-layer.end-input > div.datepicker-header > div > span[class=\"\"]",
			directFlightHotelInput: "#directFlight",
			priceRangeDiv: "#priceRange",
			starRatingCatInput: "#optCategory{txt}",
			customerReviewSvg: "#hotelFilter > div.filter.filter-kundenbewertung > label:nth-child({txt}) > svg",
			hotelsortingSelect: "#hotelsorting > option[value=\"{txt}\"]",
			priceBoxStrong: "#hotelList > div.skeleton-wrapper > article > div.content > div.priceBox > div > a > div > strong",
			aboutOffersDiv: "#hotelList > div.skeleton-wrapper > article:nth-child(1) > div.content > div.priceBox > a > div",
			hotelListHeadSection: "#hotelListHeadSkeleton",
			dateOfArrivalLabel: "#offerFilter-arrival div.offerFilter-list label.offerFilter-listItem.checkbox",
			hotelDetailsPageAjaxLoadSection: "section[id=\"ajaxLoad\"][class=\"section_ajaxLoad hidden\"]",
			offerFilterDiv: "#offerFilter",
			skeletonOffersSection: "section[id=\"skeletonOffers\"][class=\"section_skeletonOffers\"]",
			hotelDetailsPageFirstOfferSpan: "#skeletonOffers > section.skeleton-offers > article.success:nth-child(1) > div > div.price.js-priceBlock > a > span.text",
			hotelDetailsPageHotelNameDiv: "#hotelInfoBox > div.hotel-info-head.has-bookmarks > div.hotel-name-wrapper > div._styling-h1.hotel-name > div",
			hotelDetailsPageDurationDeparture: "#skeletonOffers > section.skeleton-offers > article > div > div.duration > div.duration-departure > div > span:nth-child(3)",
			hotelDetailsPageDurationReturn: "#skeletonOffers > section.skeleton-offers > article > div > div.duration > div.duration-return > div > span:nth-child(3)",
			hotelDetailsPageDurationDepartureTime: "#skeletonOffers > section.skeleton-offers > article:nth-child(1) > div > div.duration > div.duration-departure > div > span:nth-child(1)",
			hotelDetailsPageDurationReturnTime: "#skeletonOffers > section.skeleton-offers > article:nth-child(1) > div > div.duration > div.duration-return > div > span:nth-child(1)",
			bookingPageHotelNameSpan: "#vacationSummary > ul > ol.content-left > li.hotel-name > span.value",
			departureTimeRangeDiv: "#departureTimeRange > div > div:nth-child(1) > div",
			arrivalTimeRangeDiv: "#departureTimeRange > div > div:nth-child(3) > div",
			returnDepartureTimeRangeDiv: "#returnTimeRange > div > div:nth-child(1) > div",
			returnArrivalTimeRangeDiv: "#returnTimeRange > div > div:nth-child(3) > div",
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
		if (this.world.debug) console.log("generateDateSelector");

		return `${dateTd} > div.datepicker-layer.${input}-input > div.datepicker-wrapper > div > div > div.month.month-${dateObject.getMonth()}.year-${dateObject.getFullYear()} > table > tbody > tr > td.day.day-${dateObject.getDate()}`;
	}

	/**
     * Generate Offset
	 * @param {String} time
	 * @returns {Number}
     */
	generateOffset(time, from = 0) {
		let offset = ((from > 0) ? ((from - parseInt(time)) * 10) : (parseInt(time) * 10));
		offset = (offset > 110) ? 110 : offset;

		return offset;
	}

	/**
     * Check the range
	 * @param {String} a
	 * @param {String} b
	 * @param {String} x
	 * @param {String} y
	 * @returns {Boolean}
     */
	checkRange(a, b, x, y) {
		const x1 = parseInt(a.replace(":", ""));
		const y1 = parseInt(b.replace(":", ""));

		const x2 = parseInt(x.replace(":", ""));
		const y2 = parseInt(y.replace(":", ""));

		if (x2 <= x1 && y2 >= y1) {
			return true;
		}

		return false;
	}

	/**
     * Click Button
	 * @param {String} buttonToClick - css or xpath selector element for button
	 * @param {String} waitForElement - css or xpath selector element for wait
	 * @param {Boolean} scroll - need scroll or not
	 * @param {String} scrollToElement - css or xpath selector element for scroll
     */
	async clickButton(buttonToClick, waitForElement = "", scroll = true, scrollToElement = "") {
		if (this.world.debug) console.log("clickButton");

		await this.world.helper.waitFor(buttonToClick);
		const el = await this.world.helper.findElement(buttonToClick);

		if (scroll) {
			const element = (scrollToElement === "") ? el : await this.world.helper.findElement(scrollToElement);
			await this.world.helper.scrollToElement(element);
		}

		await el.click();

		if (waitForElement) {
			await this.world.helper.waitFor(waitForElement);
		}

		await this.world.sleep(1000);
	}

	/**
     * Check And Click Or Enter
	 * @param {String} destination
	 * @param {WebElement} element - the element
	 */
	async checkAndClickOrEnter(destination, elementInput) {
		if (this.world.debug) console.log("checkAndClickOrEnter");

		const { aiduacContentDestinationsLink, aiduacWrapperDiv, locationLayerHiddenDiv } = this.elements;

		const link = aiduacContentDestinationsLink.replace("{txt}", destination);
		await this.world.helper.waitFor(aiduacWrapperDiv);
		await this.world.sleep(2000);

		if (this.world.debug) console.log(link);

		const els = await this.world.helper.findElements(link);
		if (els[0]) {
			if (this.world.debug) console.log(els);
			await this.clickButton(link, "", false);
		} else {
			await elementInput.sendKeys(this.world.selenium.Key.ENTER);
		}

		await this.world.helper.waitFor(locationLayerHiddenDiv);
		await this.world.sleep(1000);
	}

	/**
     * Select destination
     * @param {String} destination
     */
	async selectDestination(destination) {
		if (this.world.debug) console.log("selectDestination");

		const { destinationInput, locationLayerDiv } = this.elements;

		await this.world.helper.waitFor(destinationInput);
		const input = await this.world.helper.findElement(destinationInput);

		await input.click();
		await this.world.helper.waitFor(locationLayerDiv);
		await input.sendKeys(destination);
		await this.world.sleep(2000);

		await this.checkAndClickOrEnter(destination, input);
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
		if (this.world.debug) console.log("setDate");

		await this.world.sleep(50);
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
     * Check and Click Cookie Box
	 */
	async checkAndClickCookieBox() {
		if (this.world.debug) console.log("checkAndClickCookieBox");

		const { cookieButton } = this.elements;
		await this.world.sleep(1000);

		const els = await this.world.helper.findElements(cookieButton);
		if (els[0]) {
			await this.clickButton(cookieButton, "", false);
		}

		await this.world.sleep(500);
	}

	/**
     * Fill Search Offer Form
     * @param {Object} data - form data
     */
	async fillSearchOfferForm(data) {
		if (this.world.debug) console.log("fillSearchOfferForm");

		await this.checkAndClickCookieBox();

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

		const { currentPageNameSpan } = this.elements;

		await this.world.helper.waitFor(currentPageNameSpan);
		let actualTitle = await this.world.helper.getElementText(currentPageNameSpan);
		actualTitle = actualTitle.replace(". ", "");
		this.world.expect(actualTitle).to.equal(expectedTitle);
	}

	/**
     * Change selections and find the best hotel
     * @param {Object} data - form data
     */
	async findBestHotel(data) {
		if (this.world.debug) console.log("findBestHotel");

		await this.checkAndClickCookieBox();

		const { hotelSelectionPageFirstResMediaDiv, hotelSelectionPageLoaderSection, directFlightHotelInput } = this.elements;

		if (data.startDate && data.returnDate) {
			const {
				startDateHotelDiv, nextStartMonthHotelSpan, selectedStartMonthYearHotelSpan, nextReturnMonthHotelSpan, selectedReturnMonthYearHotelSpan,
			} = this.elements;

			await this.world.helper.waitFor(hotelSelectionPageLoaderSection);
			await this.setDateRange(data.startDate, data.returnDate, startDateHotelDiv, nextStartMonthHotelSpan, selectedStartMonthYearHotelSpan, nextReturnMonthHotelSpan, selectedReturnMonthYearHotelSpan, "Hotel");
		}

		if (data.clickButton) {
			const { searchOffersBtn } = this.elements;

			await this.world.helper.waitFor(hotelSelectionPageLoaderSection);
			await this.clickButton(searchOffersBtn, hotelSelectionPageFirstResMediaDiv, true, directFlightHotelInput);
		}

		if (data.starRating) {
			const { starRatingCatInput } = this.elements;
			const number = (data.starRating === "beliebig") ? -1 : Math.round(parseInt(data.starRating) / 2);
			const starRateInput = starRatingCatInput.replace("{txt}", number);

			await this.world.helper.waitFor(hotelSelectionPageLoaderSection);
			await this.clickButton(starRateInput, hotelSelectionPageFirstResMediaDiv, true, directFlightHotelInput);
			await this.world.sleep(1000);
		}

		if (data.customerReview) {
			const { customerReviewSvg, priceRangeDiv } = this.elements;
			const custReviewSvg = customerReviewSvg.replace("{txt}", data.customerReview);

			await this.world.helper.waitFor(hotelSelectionPageLoaderSection);
			await this.clickButton(custReviewSvg, hotelSelectionPageFirstResMediaDiv, true, priceRangeDiv);
			await this.world.sleep(1000);
		}

		if (data.sortBy) {
			const { hotelsortingSelect } = this.elements;
			const sortingSelect = hotelsortingSelect.replace("{txt}", data.sortBy.replace(" ", "_"));

			await this.world.helper.waitFor(hotelSelectionPageLoaderSection);
			await this.clickButton(sortingSelect, hotelSelectionPageFirstResMediaDiv);
			await this.world.sleep(1000);
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
			const { priceBoxStrong, hotelSelectionPageLoaderSection } = this.elements;

			await this.world.helper.waitFor(hotelSelectionPageLoaderSection);
			let actualSort = [];

			await this.world.helper.waitFor(priceBoxStrong);
			const priceElements = await this.world.helper.findElements(priceBoxStrong);

			if (priceElements) {
				actualSort = await Promise.all(priceElements.map(async function (priceElement) {
					const priceText = await priceElement.getText();
					const price = parseInt(priceText.match(/([0-9])+/g).join(""));
					return price;
				}));
			}

			const expectedSort = actualSort;
			expectedSort.sort(function (a, b) { return b - a; });

			this.world.expect(actualSort[0]).to.equal(expectedSort[0]);
			await this.world.sleep(100);
		}
	}

	/**
     * Select The Most Expensive Hotel
     */
	async selectMostExpensiveHotel() {
		if (this.world.debug) console.log("selectMostExpensiveHotel");

		const {
			aboutOffersDiv, hotelDetailsPageFirstOfferSpan, hotelDetailsPageAjaxLoadSection, hotelListHeadSection,
		} = this.elements;

		await this.clickButton(aboutOffersDiv, "", true, hotelListHeadSection);
		await this.world.switchTab(1);
		await this.world.helper.waitFor(hotelDetailsPageAjaxLoadSection);
		await this.world.helper.waitFor(hotelDetailsPageFirstOfferSpan);

		await this.world.sleep(2000);
	}

	/**
     * Find Best Fit
     * @param {Object} data - form data
     */
	async findBestFit(data) {
		if (this.world.debug) console.log("findBestFit");

		await this.world.sleep(1000);

		await this.checkAndClickCookieBox();

		const { hotelDetailsPageAjaxLoadSection, skeletonOffersSection, offerFilterDiv } = this.elements;

		await this.world.helper.waitFor(hotelDetailsPageAjaxLoadSection);
		const element = await this.world.helper.findElement(offerFilterDiv);
		await this.world.helper.scrollToElement(element);
		await this.world.sleep(1000);

		this.dataInputFindBestFit = data;

		if (data.departureTime) {
			const { departureTimeRangeDiv } = this.elements;

			const xOffset = this.generateOffset(data.departureTime);

			if (xOffset > 0) {
				await this.world.helper.moveSlider(departureTimeRangeDiv, xOffset, 0);

				await this.world.helper.waitFor(skeletonOffersSection);
				await this.world.sleep(1000);
			}
		}

		if (data.arrivalTime) {
			const { arrivalTimeRangeDiv } = this.elements;

			const xOffset = this.generateOffset(data.arrivalTime, 24);

			if (xOffset > 0) {
				await this.world.helper.moveSlider(arrivalTimeRangeDiv, -xOffset, 0);

				await this.world.helper.waitFor(skeletonOffersSection);
				await this.world.sleep(1000);
			}
		}

		if (data.returnDepartureTime) {
			const { returnDepartureTimeRangeDiv } = this.elements;

			const xOffset = this.generateOffset(data.returnDepartureTime);

			if (xOffset > 0) {
				await this.world.helper.moveSlider(returnDepartureTimeRangeDiv, xOffset, 0);

				await this.world.helper.waitFor(skeletonOffersSection);
				await this.world.sleep(1000);
			}
		}

		if (data.returnArrivalTime) {
			const { returnArrivalTimeRangeDiv } = this.elements;

			const xOffset = this.generateOffset(data.returnArrivalTime, 24);

			if (xOffset > 0) {
				await this.world.helper.moveSlider(returnArrivalTimeRangeDiv, -xOffset, 0);

				await this.world.helper.waitFor(skeletonOffersSection);
				await this.world.sleep(1000);
			}
		}

		if (data.dateOfArrival) {
			const { dateOfArrivalLabel } = this.elements;

			await this.world.sleep(2000);

			if (data.dateOfArrival) {
				let date = data.dateOfArrival.split("-");
				date = `${date[2]}.${date[1]}.${date[0]}`;
				console.log(date);
				let ids;
				const elements = await this.world.helper.findElements(dateOfArrivalLabel);
				if (elements) {
					ids = await Promise.all(elements.map(async function (el) {
						const text = await el.getText();
						let isMatched = text.match(new RegExp(date, "g"));
						isMatched = (isMatched) ? isMatched.toString() : isMatched;
						console.dir(isMatched);
						if (isMatched === date) {
							const id = await el.getAttribute("for");
							return id;
						}

						return null;
					}));
				}

				ids = ids.filter((i) => i); // removing null
				console.dir(ids);
				const eId = (ids) ? `#${ids[0]}` : null;

				if (eId) {
					await this.clickButton(eId, skeletonOffersSection, false);
				}

				await this.world.sleep(1000);
			} else {
				throw new Error("Date of arrival shouldn't be empty");
			}
		}

		await this.world.sleep(2000);
	}

	/**
     * Count Direct Flights
	 * @param {Number} count
     */
	async countDirectFlights(count) {
		if (this.world.debug) console.log("countDirectFlights");

		const {
			hotelDetailsPageDurationDeparture, hotelDetailsPageDurationReturn, hotelDetailsPageAjaxLoadSection, hotelDetailsPageHotelNameDiv,
		} = this.elements;

		let departureDirectFlights; let returnDirectFlights;

		await this.world.helper.waitFor(hotelDetailsPageAjaxLoadSection);
		await this.world.helper.waitFor(hotelDetailsPageHotelNameDiv);
		await this.world.sleep(1000);

		await this.world.helper.waitFor(hotelDetailsPageDurationDeparture);
		let flightElements = await this.world.helper.findElements(hotelDetailsPageDurationDeparture);

		if (flightElements) {
			departureDirectFlights = await Promise.all(flightElements.map(async function (flightElement) {
				const flightText = await flightElement.getText();
				const flight = flightText.match(/Direktflug/g);
				return flight;
			}));
		}

		departureDirectFlights = departureDirectFlights.filter((i) => i); // removing null
		if (this.world.debug) console.log(departureDirectFlights.length);

		await this.world.helper.waitFor(hotelDetailsPageDurationReturn);
		flightElements = await this.world.helper.findElements(hotelDetailsPageDurationReturn);

		if (flightElements) {
			returnDirectFlights = await Promise.all(flightElements.map(async function (flightElement) {
				const flightText = await flightElement.getText();
				const flight = flightText.match(/Direktflug/g);
				return flight;
			}));
		}

		returnDirectFlights = returnDirectFlights.filter((i) => i); // removing null
		if (this.world.debug) console.log(returnDirectFlights.length);

		const totalDirectFlights = departureDirectFlights.length > returnDirectFlights.length ? returnDirectFlights.length : departureDirectFlights.length;
		if (this.world.debug) console.log(totalDirectFlights);

		try {
			this.world.expect(totalDirectFlights).to.be.above(count);
		} catch (e) {
			await this.world.helper.takeScreenshot();
		} finally {
			await this.world.attach(`Total direct flights: ${totalDirectFlights}`);
		}

		await this.world.sleep(2000);
	}

	/**
     * Verify Flight Time Of First Result
     */
	async verifyFlightTimeOfFirstResult() {
		if (this.world.debug) console.log("verifyFlightTimeOfFirstResult");

		const {
			hotelDetailsPageDurationDepartureTime, hotelDetailsPageDurationReturnTime, hotelDetailsPageAjaxLoadSection, hotelDetailsPageHotelNameDiv,
		} = this.elements;

		let departureTimeRange; let returnTimeRange;

		await this.world.helper.waitFor(hotelDetailsPageAjaxLoadSection);
		await this.world.helper.waitFor(hotelDetailsPageHotelNameDiv);
		await this.world.sleep(1000);

		await this.world.helper.waitFor(hotelDetailsPageDurationDepartureTime);
		departureTimeRange = await this.world.helper.getElementText(hotelDetailsPageDurationDepartureTime);
		departureTimeRange = departureTimeRange.match(/[+-]?([0-9]*[:])?[0-9]+/g);
		if (this.world.debug) console.dir(departureTimeRange);

		let actual = this.checkRange(departureTimeRange[0], departureTimeRange[1], this.dataInputFindBestFit.departureTime, this.dataInputFindBestFit.arrivalTime);

		try {
			this.world.expect(actual).to.equal(true);
		} catch (e) {
			await this.world.attach(`Departure time range (${departureTimeRange[0]} - ${departureTimeRange[1]}) doesn't fall within the desired time range`);
			await this.world.helper.takeScreenshot();
		}

		await this.world.helper.waitFor(hotelDetailsPageDurationReturnTime);
		returnTimeRange = await this.world.helper.getElementText(hotelDetailsPageDurationReturnTime);
		returnTimeRange = returnTimeRange.match(/[+-]?([0-9]*[:])?[0-9]+/g);
		if (this.world.debug) console.dir(returnTimeRange);

		actual = this.checkRange(returnTimeRange[0], returnTimeRange[1], this.dataInputFindBestFit.returnDepartureTime, this.dataInputFindBestFit.returnArrivalTime);

		try {
			this.world.expect(actual).to.equal(true);
		} catch (e) {
			await this.world.attach(`Return time range (${returnTimeRange[0]} - ${returnTimeRange[1]}) doesn't fall within the desired time range`);
			await this.world.helper.takeScreenshot();
		}

		await this.world.sleep(2000);
	}

	/**
     * Select The First Offer
     */
	async selectFirstOffer() {
		if (this.world.debug) console.log("selectFirstOffer");

		const {
			hotelDetailsPageHotelNameDiv, hotelDetailsPageFirstOfferSpan, bookingPageHotelNameSpan, offerFilterDiv,
		} = this.elements;

		await this.world.helper.waitFor(hotelDetailsPageHotelNameDiv);
		this.expectedHotelName = await this.world.helper.getElementText(hotelDetailsPageHotelNameDiv);
		if (this.world.debug) console.log(this.expectedHotelName);

		await this.clickButton(hotelDetailsPageFirstOfferSpan, "", true, offerFilterDiv);
		await this.world.switchTab(2);
		await this.world.helper.waitFor(bookingPageHotelNameSpan);

		await this.world.sleep(2000);
	}

	/**
     * Verify the name of the hotel
     */
	async verifyHotelName() {
		if (this.world.debug) console.log("verifyHotelName");

		if (this.expectedHotelName) {
			const { bookingPageHotelNameSpan } = this.elements;

			await this.world.helper.waitFor(bookingPageHotelNameSpan);
			let actualHotelName = await this.world.helper.getElementText(bookingPageHotelNameSpan);
			actualHotelName = actualHotelName.replace("Hotelbeschreibung", "").trim();
			if (this.world.debug) console.log(actualHotelName);

			this.world.expect(actualHotelName).to.equal(this.expectedHotelName);
			await this.world.sleep(2000);
		} else {
			throw new Error("Couldn't find the hotel name");
		}
	}
}

module.exports = UrlaubPage;
