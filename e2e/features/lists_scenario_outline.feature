Feature: List one is filled with multiple values

  Background:
    Given User visits the todos page
    And The todoOne input is set to "item1"
    And User hits enter on list todoOne
    And The todoOne input is set to "item2"
    And User hits enter on list todoOne
    And The todoOne input is set to "item3"
    And User hits enter on list todoOne

  Scenario Outline: Test multiple entries on list one
    Then The number "<index>" on todoOne has value "<value>"
    Examples:
      | index | value |
      | 0     | item1 |
      | 1     | item2 |
      | 2     | item3 |

