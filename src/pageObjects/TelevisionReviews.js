class TelevisionReviews {
    /*
      define page locators
    */
  
    // "Member exclusive" option under Which? recommendations dropdown
    get memberExclusiveOption() {
    return browser.$('[data-test-element="member-exclusive-badge"]');
    }

    // "All Televisions" tab which should be active when user lanns on tv reviews page
    get activeTab() {
      return browser.$('[data-which-id="active-true"] > a')
    }

    // Ppadlock icon" besides test score text in product card
    get testScores() {
      return browser.$$('[data-test-element="product-score-value"] > svg');
    }

    // Ssort by" dropdown
    get sortByDropdwn() {
      return browser.$('div:first-child>div:first-child>div>div>label>div>div>div>select');
    }

    // "High to low" option under sort by dropdown
    get highToLow(){
      return browser.$('div:first-child>div:first-child>div>div>label>div>div>div>select>option:nth-child(4)');
    }

    // "Product amount" in product card 
    get productAmount() {
      return browser.$$('[data-test-element="product-amount"]');
    }

    // "Prodict name and model" on product card
    get productDetailOnProductCard() {
      return browser.$$('[data-which-id="manufacturer-model"]')
    }

    /** 
     * Define getter & setter
     * Getters and Setters are used to get value from an element (example text, attribute etc...) 
     * This value is then used in a different stepdef where required 
    */

  get productName() {
    return this.productCardManufacturer;

  }

  set productName(name) {
    this.productCardManufacturer = name;
  }


  /**
      define functions()
  */

  getMemberExclusiveOptionText() {
    this.memberExclusiveOption.waitForExist(5000);
    return this.memberExclusiveOption.getText();
  }

  getActiveTabText() {
    this.activeTab.waitForDisplayed(5000);
    return this.activeTab.getText();
  }

   verifyTestScores() {
     const testScores = this.testScores;
     for (let i = 0; i < testScores.length; i++) {
       const testScoreValue = testScores[i].getAttribute('name');
       if (testScoreValue === "padlockInCircle") {
         return true;
       }
       return false;
     }
   }

  selectPriceHighToLowFromDropdwn(){
    this.sortByDropdwn.waitForExist(5000);
    this.sortByDropdwn.click();
    this.highToLow.click();
  }

  verifyPriceHighToLow(){
    this.productAmount[0].waitForExist(5000);
    const productPrice=this.productAmount;
    const productCardPrice = productPrice.map(cardPrice =>
    cardPrice.getText().slice(1)
    );
  return productCardPrice;
  }

  clickRandomProduct() {
    const product = Math.floor(Math.random() * this.productDetailOnProductCard.length);
    this.productName = this.productDetailOnProductCard[product].getText();
    this.productDetailOnProductCard[product].click();
    return this.productName;
    }
  }

  export default new TelevisionReviews();
