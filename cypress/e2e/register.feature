Feature: Registration functionality

  Scenario: Successful user registration
    Given I open the registration page
    When I register with valid user data
    Then I should see a success message