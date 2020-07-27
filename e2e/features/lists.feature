Feature: TODOs Page tests

  Scenario: Input todo at List One
    Given User visits the todos page
    Given The todoOne input is set to "buy milk"
    Then The todoOne input value should be "buy milk"

  Scenario: Add todo at List One
    Given User visits the todos page
    Given The todoOne input is set to "buy milk"
    Given User hits enter on list todoOne
    And The number "0" on todoOne has value "buy milk"

  Scenario: List one should be in sync with list two
    Given User visits the todos page
    Given The todoOne input is set to "buy milk"
    Given User hits enter on list todoOne
    And The number "0" on todoTwo has value "buy milk"
