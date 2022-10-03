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

#  Scenario: Verify YouTube channel name 3
#    When I go to page "https://www.youtube.com/c/techwithbeskat"
#    Then I verify YouTube channel name "Tech with Beskat"
#
#  Scenario: Verify YouTube channel name which will fail 3
#    When I go to page "https://www.youtube.com"
#    Then I verify YouTube channel name "Tech with Beskat"
#
#  Scenario: Verify YouTube channel name 4
#    When I go to page "https://www.youtube.com/c/techwithbeskat"
#    Then I verify YouTube channel name "Tech with Beskat"
#
#  Scenario: Verify YouTube channel name which will fail 4
#    When I go to page "https://www.youtube.com"
#    Then I verify YouTube channel name "Tech with Beskat"