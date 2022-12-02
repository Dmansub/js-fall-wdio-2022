
const { expect } = require('chai');
const LoginPage = require('../../pom/facebook/LoginPage')
const SignUpPage = require('../../pom/facebook/SignUpPage')
const Dates = require('../utils/dates')

describe('Login Test Suite', () => {
    
    it.only('Verify current date is displayed on Sign-Up form', async () => {
        
        const loginPage = new LoginPage();
        const signUpPage = new SignUpPage();

      // 1. Launch facebook.com
               
        await browser.url('https://www.facebook.com');
       await browser.pause(8000)
        // 2.  CLICK CREATE BUTTON
       
         loginPage.clickCreateNewAccountButton()
        await browser.pause(8000)

        
        //verify current date is displayed in Date of birth dropdowns

        const actualSelectedDate = await signUpPage.getDefaultSelectedDate();   
        const expectedSelectedDate = Dates.getCurrentDate();

        const actualSelectedMonth = await signUpPage.getDefaultSelectedMonth();
        const expectedSelectedMonth = Dates.getCurrentMonthNameInShort();

        const actualSelectedYear = await signUpPage.getDefaultSelectedYear();
        const expectedSelectedYear = Dates.getCurrentYearInYYYY();

       expect(actualSelectedDate, 'Default date in dropdown is NOT current date').to.be.equal(expectedSelectedDate);
       expect(actualSelectedMonth, 'Default month in dropdown is NOT current month').to.be.equal(expectedSelectedMonth);
       expect(actualSelectedYear, 'Default year in dropdown is NOT current year').to.be.equal(expectedSelectedYear);




        
        
        
       });

      it('', () => {
        
     });

       it('', () => {
        
    });
});


