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
      | 11345 | 0 | 999 |
      | 11145 | 60 | 1059 |
      | 11115 | 80 | 1079 |
      | 11111 | 100 | 1099 |
      | 21345 | 0 | 999 |
      | 22345 | 0 | 999 |
      | 22245 | 120 | 1119 |
      | 22225 | 160 | 1159 |
      | 22222 | 200 | 1199 |

  @dev
  Scenario: Verify the balance
    Given I navigate to the "slot game" page
    When I set the balance 1
    And I set the test data 12345
    And I click Spin button
    Then The balance shoud be 0 
    And Spin button should be disabled