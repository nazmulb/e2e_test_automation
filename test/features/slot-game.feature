@smoke

Feature: Slot Game
  Try to check that the game works correctly or not?

  Scenario Outline: Verify the win combination
    Given I navigate to the "slot game" page
    And I set the test data <combination>
    And I click Spin button
    Then Win <coins> coins
    And The balance shoud be <balance>

    Examples:
      | combination | coins | balance |
      | 12345 | 0 | 999 |
      | 11145 | 60 | 1059 |

  Scenario: Verify the balance
    Given I navigate to the "slot game" page
    When I set the balance 1
    And I set the test data 12345
    And I click Spin button
    Then The balance shoud be 0 
    And Spin button should be disabled