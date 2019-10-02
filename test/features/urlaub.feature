@urlaub
Feature: Find the best hotel and try to book

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