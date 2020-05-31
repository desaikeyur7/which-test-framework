class ProductPage {
    /*
      define page locators
   */

   get heading() {
      return browser.$('[data-test-element="name"]');
   }

   /*
      define functions()
   */

   getHeadingText() {
       this.heading.waitForExist();
       return this.heading.getText(); 
   }
}

export default new ProductPage();