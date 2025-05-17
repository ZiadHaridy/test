Feature: Parabank Transfer Funds

  Scenario: Transfer funds between accounts
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    And I transfer "100" from account "12345" to account "54321"
    Then I should see a successful transfer message

  Scenario: Transfer fails with insufficient funds
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    And I transfer "1000000" from account "12345" to account "54321"
    Then I should see a transfer error

  Scenario: Transfer with zero amount
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    And I transfer "0" from account "12345" to account "54321"
    Then I should see a transfer error

  Scenario: Transfer with negative amount
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    And I transfer "-50" from account "12345" to account "54321"
    Then I should see a transfer error

  Scenario: Transfer between the same account
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    And I transfer "50" from account "12345" to account "12345"
    Then I should see a transfer error

  Scenario: Transfer with non-numeric amount
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    And I transfer "abc" from account "12345" to account "54321"
    Then I should see a transfer error