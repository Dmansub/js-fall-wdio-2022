const { expect } = require("chai");
const { it } = require("mocha");

describe('TC1', () => {
    

    it('tc1', async () => {
        
       
        await browser.url('https://www.facebook.com')
    await browser.pause(10000)
        //click on oculus
        it('Click on oculus ', async () => {
            await browser.url('/');
            const clickOnOculus = await $('=Oculus');
            clickOnOculus.click();
             await browser.pause(10000);
        })
        
        
        
        

    });

});