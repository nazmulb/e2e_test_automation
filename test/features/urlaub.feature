@urlaub
Feature: Find the best hotel and try to book
  
  @mute
  Scenario: Find
    Given I navigate to the "urlaub" page
    When select some options to find best fit
      | departureTime       | 04:00       |
      | arrivalTime         | 21:00       |
      | returnDepartureTime | 00:00       |
      | returnArrivalTime   | 12:00       |
      | dateOfArrival       | 2019-11-13  |
  
  Scenario: Find the best hotel
    Given I navigate to the "urlaub" page
    When I fill the search offer form
      | destination | Sizilien        |
      | startDate   | 2019-11-06      |
      | returnDate  | 2019-11-13      |
      | noOfAdults  | 2               |
      | clickButton | Angebote suchen |
    Then I expect "Hotelauswahl" page should be shown
    When I change selections and find the best hotel
      | startDate       | 2019-11-13     |
      | returnDate      | 2019-11-20     |
      | clickButton     | Suche anpassen |
      | starRating      | 4              |
      | customerReview  | 5              |
      | sortBy          | price desc     |
    Then I expect results should be sorted by "price desc"
    When I select the most expensive hotel
    And select some options to find best fit
      | departureTime       | 04:00       |
      | arrivalTime         | 21:00       |
      | returnDepartureTime | 00:00       |
      | returnArrivalTime   | 12:00       |
      | dateOfArrival       | 2019-11-13  |
    Then I count how many options with direct flights
    And expect flight time of first result falls within desired time range
    When I select the first offer and click "Zur Buchung" button
    Then I expect the hotel name is same as the one I selected earlier
