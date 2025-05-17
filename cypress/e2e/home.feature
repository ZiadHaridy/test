Feature: Advantage Online Shopping Home Page

  Scenario: Home page loads with correct title and elements
    Given I open the Advantage Online Shopping home page
    Then the page title should include "Advantage Shopping"
    And the user menu link should be visible
    And the search bar should exist and be enabled
    And the site logo should be visible

