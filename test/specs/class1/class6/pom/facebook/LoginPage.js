const Commands = require('../Commands');

class LoginPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginPage (variables)
    loginEmailLocator = '#email';
    loginPassLocator = '#pass';
    

    // functions to interact with the web-Elements on the LoginPage
    async enterLoginEmail(userEmail) {
        await this.commands.typeInWebElement(this.loginEmailLocator, userEmail);
    }

    async enterLoginPassword(userPwd) {
        await this.commands.typeInWebElement(this.loginPassLocator, userPwd);
    }

    async clickLoginInButton() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    }




}
module.exports = LoginPage;