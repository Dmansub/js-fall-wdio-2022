const LoginPage = require('../../pom/facebook/LoginPage')
const Messenger = require('../../pom/facebook/Messenger')
//const LoginErrorPage = require('../../pom/facebook/LoginErrorPage');
const { expect } = require('chai');


describe('Messenger Login Test Suite', () => {
    
    it.only(' Verify user gets error when submit empty login on messenger screen', async () => {
        const loginPage = new LoginPage();
     //  const loginErrorPage = new LoginErrorPage();
        const messenger = new Messenger()

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');
        await browser.pause(3000);
        //click messenger 
    
        await loginPage.clickMessengerButton()
        await browser.pause(3000);
         //verify link displayed
       expect (await messenger.isCheckBoxSelected(), 'check box not selected').to.be.false;
      
        //click log in button
        await loginPage.mLgbButton()
        await browser.pause(3000)  
        // vrtify link is displayed 
      expect (await messenger.isMErrorLinkIsDisplayed(), 'error link displayed').to.be.true
       // Verify "Continue" button is enabled
       expect (await messenger.isContinueEnabled(), 'is continue button enabled' ).to.be.true
     //Verify "Keep me signed in" is NOT selected
    expect (await messenger.isKeepCheckBoxSelected() , 'is error checkbox not selected').to.be.false
   //click CHECK BOX
   await loginPage.clickCheckBoxM()
   await browser.pause(3000)
   //Verify "Keep me signed in" is selected
   expect (await messenger.isErrorCheckBoxSelected2(), 'is keep me signed in selected' ).to.be.true



    });

    it('', () => {
        
    });

    it('', () => {
        
    });
});