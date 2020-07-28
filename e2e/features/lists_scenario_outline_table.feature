Feature: List two is filled with multiple values from a table

  Background:
    Given User visits the todos page
    And the list two is filled with the following items:
      | index | value |
      | 0     | item1 |
      | 1     | item2 |
      | 2     | item3 |

  Scenario Outline: Test multiple entries on list two
    Then The number "<index>" on todoTwo has value "<value>"
    Examples:
      | index | value |
      | 0     | item1 |
      | 1     | item2 |
      | 2     | item3 |

