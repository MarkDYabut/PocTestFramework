@ui
Feature: Other YouTube Test

  @mvp1
  Scenario Outline: Verify YouTube channel name "<execution>"
    When I go to page "<url>"
    Then I verify YouTube channel name "<name>"
    Examples:
      | execution    | name                      | url                                                      |
      | execution 1  | Tiff In Tech              | https://www.youtube.com/c/TiffInTech                     |
      | execution 2  | Jimmy Zhang               | https://www.youtube.com/c/JimmyZhang                     |
      | execution 3  | NEVER TOO SMALL           | https://www.youtube.com/c/NEVERTOOSMALL                  |
      | execution 4  | Code with Ania Kubów      | https://www.youtube.com/c/AniaKub%C3%B3w                 |
      | execution 5  | Jordan B Peterson Clips   | https://www.youtube.com/c/JordanBPetersonClips           |
      | execution 6  | Ali Abdaal                | https://www.youtube.com/c/aliabdaal                      |
      | execution 7  | devaslife                 | https://www.youtube.com/c/devaslife                      |
      | execution 8  | CS Jackie                 | https://www.youtube.com/c/CSJackie                       |
      | execution 9  | Fireship                  | https://www.youtube.com/c/Fireship                       |
      | execution 10 | Fredrik Christenson       | https://www.youtube.com/c/FredrikChristenson             |
      | execution 11 | Coding Garden             | https://www.youtube.com/c/CodingGarden                   |
      | execution 12 | Software Testing Material | https://www.youtube.com/c/SoftwareTestingMaterialWebsite |