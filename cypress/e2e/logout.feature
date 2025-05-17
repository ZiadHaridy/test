Feature: Parabank Logout

  Scenario: Logout after login
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    And I logout
    Then I should be redirected to the login page