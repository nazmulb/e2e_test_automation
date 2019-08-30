@smoke

Feature: Slot Game
  Try to check that the game works correctly or not?

  Scenario: Verify the win combination
    Given I navigate to the "slot game" page
    And I set the test data 11145
    And I click Spin button
    Then Win 60 coins
    And The balance shoud be 1059

  @dev
  Scenario: Verify the balance
    Given I navigate to the "slot game" page
    When I set the balance 1
    And I set the test data 12345
    And I click Spin button
    Then The balance shoud be 0 
    And Spin button should be disabled