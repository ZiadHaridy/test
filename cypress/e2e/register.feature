Feature: Parabank Registration

  Scenario: Register a new user with valid data
    Given I open the registration page
    When I register with the following details:
      | firstName | John      |
      | lastName  | Doe       |
      | address   | 123 Main  |
      | city      | Testville |
      | state     | TX        |
      | zip       | 12345     |
      | phone     | 5551234   |
      | ssn       | 123-45-6789 |
      | username  | s  |
      | password  | demo123   |
    Then I should see the registration confirmation

  Scenario: Register with an existing username
    Given I open the registration page
    When I register with the following details:
      | firstName | Jane      |
      | lastName  | Smith     |
      | address   | 456 Elm   |
      | city      | Sampleton |
      | state     | CA        |
      | zip       | 67890     |
      | phone     | 5556789   |
      | ssn       | 987-65-4321 |
      | username  | test1     |
      | password  | demo123   |
    Then I should see a registration error

  Scenario: Register with invalid zip code
    Given I open the registration page
    When I register with the following details:
      | firstName | Alice     |
      | lastName  | Brown     |
      | address   | 789 Oak   |
      | city      | Cityville |
      | state     | NY        |
      | zip       | abcde     |
      | phone     | 5554321   |
      | ssn       | 111-22-3333 |
      | username  | aliceb    |
      | password  | demo123   |
    Then I should see a registration error

  Scenario: Register with password mismatch
    Given I open the registration page
    When I register with the following details:
      | firstName | Bob       |
      | lastName  | White     |
      | address   | 321 Pine  |
      | city      | Pineville |
      | state     | FL        |
      | zip       | 24680     |
      | phone     | 5552468   |
      | ssn       | 222-33-4444 |
      | username  | bobwhite  |
      | password  | demo123   |
      | repeatedPassword | demo124 |
    Then I should see a registration error

  Scenario: Register with special characters in username
    Given I open the registration page
    When I register with the following details:
      | firstName | Carol     |
      | lastName  | Black     |
      | address   | 654 Maple |
      | city      | Blacktown |
      | state     | WA        |
      | zip       | 13579     |
      | phone     | 5551357   |
      | ssn       | 333-44-5555 |
      | username  | carol!@#  |
      | password  | demo123   |
    Then I should see a registration error