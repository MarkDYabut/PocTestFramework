@ui
Feature: YouTube Test

  @oneUi @success
  Scenario: Verify YouTube channel name
    When I go to page "https://www.youtube.com/c/techwithbeskat"
    Then I verify YouTube channel name "Tech with Beskat"

  @oneUi @fail
  Scenario: Verify YouTube channel name which will fail
    When I go to page "https://www.youtube.com/c/techwithbeskat"
#    When I go to page "https://www.youtube.com"
    Then I verify YouTube channel name "Tech with Beskat"

  @oneUi @success
  Scenario: Verify YouTube channel name 2
    When I go to page "https://www.youtube.com/c/techwithbeskat"
    Then I verify YouTube channel name "Tech with Beskat"

  @oneUi @fail
  Scenario: Verify YouTube channel name which will fail 2
    When I go to page "https://www.youtube.com/c/techwithbeskat"
#    When I go to page "https://www.youtube.com"
    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name 3
    When I go to page "https://www.youtube.com/c/techwithbeskat"
    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name which will fail 3
    When I go to page "https://www.youtube.com"
#    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name 4
    When I go to page "https://www.youtube.com/c/techwithbeskat"
    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name which will fail 4
    When I go to page "https://www.youtube.com"
#    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name 5
    When I go to page "https://www.youtube.com/c/techwithbeskat"
    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name which will fail 5
    When I go to page "https://www.youtube.com"
#    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name 6
    When I go to page "https://www.youtube.com/c/techwithbeskat"
    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name which will fail 6
    When I go to page "https://www.youtube.com"
#    Then I verify YouTube channel name "Tech with Beskat"

  Scenario: Verify YouTube channel name 7
    When I go to page "https://www.youtube.com/c/techwithbeskat"
    Then I verify YouTube channel name "Tech with Beskat"

  @oneUi
  Scenario Outline: Verify YouTube channel name which will fail 7: "<execution>"
    When I go to page "<url>"
    Then I verify YouTube channel name "<name>"
    Examples:
      | execution   | name             | url                                      |
      | execution 1 | Tech with Beskat | https://www.youtube.com/c/techwithbeskat |
#    |execution 2  | Yolo Tech         | https://www.youtube.com/c/techwithbeskat |