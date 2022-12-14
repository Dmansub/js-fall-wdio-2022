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
   
   //VERIFY FEMALE  GENDER
    it('Verify female gender button is not selected on Sign up page', async () => {
       await browser.url('/');
       const createNewAccountButton = await $('=Create new account');
           createNewAccountButton.click();
           await browser.pause(10000)
           const femaleRadioButton = await $('input[value="1"]');
           const isFemaleGenderSelected = await femaleRadioButton.isSelected();
           expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;
   })
   
   //VERIFY MALE GENDER
   it('Verify male gender button is not selected on Sign up page', async () => {
             await browser.url('/');
             const createNewAccountButton = await $('=Create new account');
             createNewAccountButton.click();
           await browser.pause(10000)
           const maleRadioButton = await $('input[value="2"]');
           const isMaleGenderSelected = await maleRadioButton.isSelected();
           expect(isMaleGenderSelected, 'Male gender is already selected').to.be.false;
   })
   
   //VERIFY CUSTOM GENDER 
   it('Verify custom gender button is not selected on Sign up page', async () => {
       await browser.url('/');
       const createNewAccountButton = await $('=Create new account');
           createNewAccountButton.click();
           await browser.pause(10000)
   const customRadioButton = await $('input[value="-1"]');
   const isCustomGenderSelected = await customRadioButton.isSelected();
   expect(isCustomGenderSelected, 'Custom gender is already selected').to.be.false;
   })
  
  //  IF FEMALE GENDER NOT SELECTED 
   it('If female gender is NOT selected, then click on female gender radio button', async () => {
    await browser.url('/')
    const createNewAccountButton = await $('=Create new account');
    createNewAccountButton.click();
    await browser.pause(10000)
     const femaleRadioButton = await $('input[value="1"]');
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, femaleRadioButton.click()).to.be.false;
        await browser.pause(4000)
})


//VERIFY FEMALE GENDER IS SELECTED 
it('Verify female gender button is selected', async () => {
    await browser.url('/')
    const createNewAccountButton = await $('=Create new account');
    createNewAccountButton.click();
    await browser.pause(10000)
     const femaleRadioButton = await $('input[value="1"]');
     const clicked = femaleRadioButton.click()
     await browser.pause(10000)
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, 'female-gender button is notselected' ).to.be.true;
        await browser.pause(10000)
})
})