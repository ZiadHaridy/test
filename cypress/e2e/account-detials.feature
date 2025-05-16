Feature: Account Transaction Details

  Scenario: View transaction history for an account
    Given I am logged in as "john" with password "demo"
    When I click on an account number
    Then I should see recent transactions
