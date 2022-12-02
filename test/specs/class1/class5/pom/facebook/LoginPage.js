const Commands = require('../Commands');

class LoginPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginPage (variables)
    loginEmailLocator = '#email';
    loginPassLocator = '#pass';
    createNewAccountButtonLocator = '//a[text()="Create New Account" or text()="Create new account"]';
    loginButtonLocator = '<button>'
    messengerButtonLocator = '=Messenger'
    mLgbButtonLocator = '#loginbutton'
    clickCheckBoxMLocator = '//label[@class="uiInputLabelInput"]'
    
    
    // functions to interact with the web-Elements on the LoginPage
    
    async clickCheckBoxM(){
        await this.commands.clickWebElement(this.clickCheckBoxMLocator);
      }
      
        
    async enterLoginEmail(userEmail) {
        await this.commands.typeInWebElement(this.loginEmailLocator, userEmail);
    }

    async enterLoginPassword(userPwd) {
        await this.commands.typeInWebElement(this.loginPassLocator, userPwd);
    }

    async clickLoginInButton() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    }

    async clickCreateNewAccountButton() {
        await this.commands.clickWebElement(this.createNewAccountButtonLocator);
    }

    async clickMessengerButton() {
        await this.commands.clickWebElement(this.messengerButtonLocator);
    }

    async mLgbButton(){
        await this.commands.clickWebElement(this.mLgbButtonLocator)
    }

}
module.exports = LoginPage;