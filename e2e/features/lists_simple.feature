Feature: TODOs Page simple tests

  Background:
    Given User visits the todos page

  Scenario: Input todo at List One
    Given The todoOne input is set to "buy milk"
    Then The todoOne input value should be "buy milk"

  Scenario: Add todo at List One
    Given The todoOne input is set to "buy milk"
    Given User hits enter on list todoOne
    And The number "0" on todoOne has value "buy milk"

  Scenario: List one should be in sync with list two
    Given The todoOne input is set to "buy milk"
    Given User hits enter on list todoOne
    And The number "0" on todoTwo has value "buy milk"

  Scenario: List two should be in sync with list one
    Given The todoTwo input is set to "buy milk"
    Given User hits enter on list todoTwo
    And The number "0" on todoOne has value "buy milk"
