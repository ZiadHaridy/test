Feature: Login functionality

  Scenario: Successful login
    Given I open the login page
    When I login with username "john" and password "demo"
    Then I should see the account overview page

  Scenario: Invalid login
    Given I open the login page
    When I login with username "wronguser" and password "wrongpass"
    Then I should see an error message
