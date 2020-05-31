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

> Locators are defined in the first half of a page object file in **src > pageObject > pageObjectFileName.js** file

> Functions are defined in the second half of a page object file in **src > pageObject > pageObjectFileName.js** file

## Features and Scenarios
> Features and Scenarios are defined in **src > features > FeatureName.feature** file

## Step Definitions
> Step Definitions are defined in **src > stepDefs > stepDefinitionFileName.StepDefs.feature** file

> Step Definitions allow reusability of code and makes the framework less complicated to read

> I have not used any selectors directly in Step-definition as this diminishes the whole purpose of enhances readability. Instead, I have called functions in step definitions for efficient code structuring

## Reports
> I have used Allure Reporting as this is an efficient way of degugging failed tests

> Allure reports enables to determine the step a test has failed, provides screenshots and also displays a comparasion of tests run to tests passed percentage

## Screenshots for allure report
![Allure_Report Overview](https://user-images.githubusercontent.com/30195677/83359384-d5186880-a371-11ea-9067-1663ab6b2394.png)

![Allure_Report Graphs](https://user-images.githubusercontent.com/30195677/83359394-e3668480-a371-11ea-9325-753efea9c6f7.png)
