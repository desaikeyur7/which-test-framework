Feature: Television Reviews page

    As a user I would like to view and compare television reviews,
    so that I can buy an appropriate television that suits my purpose

    Background:
        Given I am on television reviews page

    Scenario Outline: Verify page title 
        Then the title of the page should be displayed as <pageTitle>
        And I should land on "All Televisions" tab by default
        Examples:
        | pageTitle |
        | "Television reviews - Which?"  |

    Scenario: Verify "Member Exclusive" option defaulted under recommendations dropdown
        Then the "Member exclusive" option should be default selected under reommendations dropdown 

    Scenario: Verify test scores are member locked on tv reviews page
        Then the test scores are member locked   

    Scenario: Verify televisions are sorted by Price high to low
        When I select price high to low from sort by dropdown
        Then the products should be displayed in descending order by price

    Scenario: Verify navigation to product page
        When I click on a product card
        And the heading on product page should display the product name