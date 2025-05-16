Feature: Account Overview

  Scenario: View account overview after login
    Given I am logged in as "john" with password "demo"
    Then I should see account summary information
