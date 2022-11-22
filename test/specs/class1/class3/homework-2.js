const { expect } = require("chai");
   const { it } = require("mocha");
   
   //LAUNCING FB
   describe('WebElements Test cases', () => {
    it('Launch Facebook', async() => {
        await browser.url('/')
    })
    
    //CREATE NEW ACCOUNT BUTTON
    it('Click Create new Account button - using partial Link-text', async () => {
        await browser.url('/');
        const createNewAccountButton = await $('*=te N');
        createNewAccountButton.click();
         await browser.pause(10000);
    })
   
   //verify current date
   it('verify current date is displayed in date of birth dropdowns' , async () => {
    await browser.url('/');
    const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();
        await browser.pause(10000)
        const monthDropdown = await $('#month');
        await monthDropdown.selectByVisibleText('Nov');

        const dayDropdown = await $('#day');
        dayDropdown.selectByAttribute('value', '');

        const yearDropdown = await $('#year');
        yearDropdown.selectByIndex(0);

        await browser.pause(10000);


   } )
      //tc-2
     it('Verify user gets error when submits empty login form' , async () => {
        await browser.url('/');
        const loginButton = await $('<button>');
        loginButton.click();
         await browser.pause(7000)
         const loginErrorLink = await $('*=Find');
         const isLoginErrorDisplayed = await loginErrorLink.isDisplayed();
         expect( isLoginErrorDisplayed, 'The email address or mobile number you entered not connected to an account').to.be.true;
       })

      //tc-3
      //fb login
      it('Verify user gets error when submit empty login on messenger screen' , async () => { 
        await browser.url('/');
        const loginButton = await $('<button>');
       
        loginButton.click();
         await browser.pause(5000)
       //click on messenger  
         const selectMessenger = await $('=Messenger')
        selectMessenger.click();
         await browser.pause(5000)
       
         const keepSigNotSel = await $('#default_persistent')
          const isKeepSigNotSel = await keepSigNotSel.isEnabled()
         expect(isKeepSigNotSel , 'keep me signed is not selected ').to.be.true;
           await browser.pause(3000)

       
         const selectLoginButton = await $('#loginbutton')
              selectLoginButton.click();
              await browser.pause(3000)
               
              const findAccount = await $('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]')
              const isFindAccount = await findAccount.isDisplayed()
              expect(isFindAccount , 'find your account and log in is displayed' ).to.be.true
              await browser.pause(3000)

              const continButton = await $('#loginbutton')
              const isContinButton = await continButton.isEnabled()
                expect(isContinButton , 'continue button is enable').to.be.true
                await browser.pause(3000)
  
                const keepMeSignedIn = await $('//body/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/label[1]/span[1]')
                const isKeepMeSignedIn = await keepMeSignedIn.isSelected()
                expect(isKeepMeSignedIn , 'Keep me signed in is NOT selected').to.be.false
                await browser.pause(3000)
            

           
          const keepMeSignedInBt = await $('//body/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/label[1]/span[1]') 
            keepMeSignedInBt.click()
            await browser.pause(2000)


            })

     
})



//tc4 i need more time to work on it 

