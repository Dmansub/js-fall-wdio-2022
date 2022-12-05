const OculusHomepage = require('../pom/facebook/OculusHomepage');
const multipleWindows = require('../utils/multipleWindows') 
const Instagram = require('../pom/facebook/instagram')
const Portal = require('../pom/facebook/portal')
const MetaPay = require('../pom/facebook/metaPay')
const { expect } = require('chai');
const { it } = require("mocha");

describe('TC1 hw4', () => {
    
    it.only('tc1', async () => {
        const oculusHomepage = new OculusHomepage();
        const instagram = new Instagram
        const portal = new Portal
        const metaPay = new MetaPay 

         //launceh facebook
         await browser.url('https://www.facebook.com')
         await browser.pause(3000)
        
             //click on oculus
        await  oculusHomepage.clickOculus() 
         await browser.pause(7000)
        // connect browser
 
         const fbLoginHandle = await browser.getWindowHandle();
         console.log(` \n fbLoginHandle -> ${fbLoginHandle} \n`);
 
 
         const allHandles = await browser.getWindowHandles();
         console.log(` \n allHandles -> ${allHandles} \n`);
 
         for (const handle of allHandles) {
             if (handle !== fbLoginHandle) {
                 browser.switchToWindow(handle);
                 break;
             }
         }
 
         await browser.pause(2000);
 
 
 
 
         //Verify Support tab is displayed
     expect (await oculusHomepage.isSupportDisplayed() ,'support tab is displayed' ).to.be.true
 
 
 
      //Verify the Oculus page is launched in new window
     expect(allHandles.length, '').to.equal(2);
 
      
     // tc-2



          // 1. Launch facebook.com
          await browser.url('https://www.facebook.com')

          // 2. Click on Instagram
          await instagram.clickInstagram()
          await browser.pause(3000)
                     
          // 3. Click on Portal
          await portal.clickPortal()
          await browser.pause(3000)
          // 4. Click on Oculus
          
          await  oculusHomepage.clickOculus() 
          await browser.pause(7000)

         // 5. Click on Meta Pay
          
          await metaPay.metaPaySite();
          await browser.pause(4000)
        
      
          await browser.url('https://pay.facebook.com/')
    await browser.pause(7000);



       //7. Verify 'Using Meta Pay' is displayed
           expect (await metaPay.isMetaPayDisplayed() ,'meta pay is displayed').to.be.true

    //8  Move mouse on 'Using Meta Pay'
           await metaPay.mouseOverMeta()
           await browser.pause(7000);

      // onlice checkout displayed 
        expect (metaPay.metaCheckoutDisplayed() , 'meta online checkout displayed').to.be.true
    
        });


});