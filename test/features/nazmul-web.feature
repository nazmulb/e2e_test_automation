@nazmulweb @mute
Feature: Nazmul Web

  Scenario: View home page and search
    Given I navigate to the "nazmul web" page
    When I search for "Mac"
    Then I see title "Mac | Search Results | Nazmul Website"