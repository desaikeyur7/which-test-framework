import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import televisionReviews from "../pageObjects/TelevisionReviews";
import productPage from "../pageObjects/ProductPage";

const homePage = require("../../wdio.conf");
const chai = require("chai"); 
chai.use(require("chai-sorted"));

Given(/^I am on television reviews page$/, () => {
  browser.url(homePage.config.baseUrl);
 
});

Then(/^the title of the page should be displayed as "([^"]*)"$/, (pagetitle) => {
  const title = browser.getTitle();
  expect(title).to.equal(pagetitle);
}
); 

Then(/I should land on "All Televisions" tab by default$/, () => {
  expect(televisionReviews.getActiveTabText()).to.equal("All Televisions");
});

Then(/^the "Member exclusive" option should be default selected under reommendations dropdown$/, () => {
  expect(televisionReviews.getMemberExclusiveOptionText()).to.equal("Member exclusive");
});

Then(/^the test scores are member locked$/, () => {
  expect(televisionReviews.verifyTestScores()).to.be.true;
});

When(/^I select price high to low from sort by dropdown$/, () => {
  televisionReviews.selectPriceHighToLowFromDropdwn();
});

Then(/^the products should be displayed in descending order by price$/, () => {
  expect(televisionReviews.verifyPriceHighToLow()).to.be.sorted({descending: true});

});

When(/^I click on a product card$/, () => {
  televisionReviews.clickRandomProduct();
});

Then(/^the heading on product page should display the product name$/, () => {
  expect(productPage.getHeadingText()).to.equal(televisionReviews.productName);
});