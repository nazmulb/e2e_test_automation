@urlaub
Feature: Search offers for holiday destination from home page

  Scenario: Select holiday destination and search offers
    Given I navigate to the "urlaub" page
    When I fill the search offer form
    | destination | Sizilien    |
    | startDate   | 2019-11-06  |
    | returnDate  | 2019-11-13  |
    | noOfAdults  | 2           |
    And click Angebote suchen button
    #Then I expect "Hotelauswahl" page should be shown