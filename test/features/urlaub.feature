@urlaub
Feature: Search offers for holiday destination from home page

  Scenario: Select holiday destination and search offers
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
    | sortBy          | Höchster Preis |
    Then I expect results should be sorted by "Höchster Preis"