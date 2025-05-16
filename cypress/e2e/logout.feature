Feature: Logout functionality

  Scenario: Log out after login
    Given I am logged in as "john" with password "demo"
    When I click the logout link
    Then I should be redirected to the homepage
