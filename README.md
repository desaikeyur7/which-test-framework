# Usage

## Installation

**npm install**

## Run tests

**npm run tests**

## Generate reports

**npm run allure:report**

# Framework Structure

## Design

> The framework is designed in Page Object - Page Factory Model to enable readability and clear coding
> Page Object - Page factory model allows efficient refactoring of code as the code base for each page is in the relevant page object
> It is in BDD style using (Given, When,Then format) to enable enhanced readability and debugging of test failures  

## Locators and functions

> Locators are defined in the first half of a page object file in src > pageObject > pageObjectFileName.js file
> Functions are defined in the second half of a page object file in src > pageObject > pageObjectFileName.js file

## Features and Scenarios
> Features and Scenarios are defined in src > features > FeatureName.js file

## Step Definitions
> Step Definitions are defined in src > stepDefs > stepDefinitionFileName.feature
> Step Definitions allow reusability of code and makes the framework less complicated to read
> I have not used any selectors directly in Step-definition as this diminishes the whole purpose of enhances readability. Instead, I have called functions in step definitions for efficient code structuring

## Reports
> I have used Allure Reporting as this is an efficient way of degugging failed tests
> Allure reports enables to determine the step a test has failed, provides screenshots and also displays a comparasion of tests run to tests passed percentage