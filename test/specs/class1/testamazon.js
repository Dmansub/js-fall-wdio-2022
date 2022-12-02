const { expect } = require("chai");

describe('Mouse Hover Tests', () => {
    

    it('Mouse Hover Test-1', async () => {
        
        /**
         * 1. Launch yahoo.com
         * 2. Move mouse on notifications-icon
         * 3. Verify notifications is displayed
         */

        // 1. Launch yahoo.com
        await browser.url('https://www.amazon.com')

        // 2. Move mouse on notifications-icon
        /**
         * To perform mouse hover on a webElement
         * function: moveTo()
         */
            // a. find webelement
            // b. use moveTo()
        const bellIcon = await $('=Best Sellers');

        await bellIcon.moveTo();

        await browser.pause(10000);

        const bestSellerButton = await $('=Best Sellers');
        bestSellerButton.click();
       await browser.pause(7000)
    
      

        // 3. Verify notifications is displayed
        const isNotificationsDisplayed = await $('#zg_banner_text').isDisplayed();

        expect(isNotificationsDisplayed, 'Notifications pop-up is not displayed').to.be.true;

    });

});