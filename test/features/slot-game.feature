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
      | 32145 | 0 | 999 |
      | 33145 | 0 | 999 |
      | 33345 | 180 | 1179 |
      | 33335 | 240 | 1239 |
      | 33333 | 300 | 1299 |
      | 43215 | 0 | 999 |
      | 44215 | 0 | 999 |
      | 44415 | 240 | 1239 |
      | 44445 | 320 | 1319 |
      | 44444 | 400 | 1399 |
      | 54321 | 0 | 999 |
      | 55321 | 0 | 999 |
      | 55521 | 300 | 1299 |
      | 55551 | 400 | 1399 |
      | 55555 | 500 | 1499 |

  @dev
  Scenario: Verify the balance
    Given I navigate to the "slot game" page
    When I set the balance 1
    And I set the test data 12345
    And I click Spin button
    Then The balance shoud be 0 
    And Spin button should be disabled