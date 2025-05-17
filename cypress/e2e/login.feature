Feature: Parabank Login

  Scenario: Successful login
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    Then I should see the account overview

  Scenario: Login fails with invalid credentials
    Given I open the Parabank login page
    When I login with username "invalidUser" and password "wrongPass"
    Then I should see a login error

  Scenario: Login with empty password
    Given I open the Parabank login page
    When I login with username "john" and password "    "
    Then I should see a login error

  Scenario: Login with both fields empty
    Given I open the Parabank login page
    When I login with username "  " and password "  "
    Then I should see a login error

  Scenario: Login with special characters in username
    Given I open the Parabank login page
    When I login with username "!@#$%" and password "demo"
    Then I should see a login error
