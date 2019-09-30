@urlaub
Feature: Search offers for holiday destination from home page

  Scenario: Select holiday destination and search offers
    Given I navigate to the "home urlaub" page
    When I select "Sizilien" as destination
    #And set "2019-11-06" as earliest arrival date
    #And set "2019-11-13" as latest departure date
    #And set no of adults "2" 
    And click Angebote suchen button
    #Then I expect "Hotelauswahl" page should be shown