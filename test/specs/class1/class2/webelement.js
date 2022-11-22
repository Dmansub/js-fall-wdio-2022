describe('WebElements Test cases', ( ) =>{

    it('testcaae using id-indicator',async () => {

await browser.url('/')

const loginEmailInputBox =  await $('#email')     
loginEmailInputBox.setValue('deepak@gmail.com')

const loginPwdInputBox = await $('#pass');
loginPwdInputBox.setValue('abcd@1234')

await browser.pause(10000)

const loginButton = await $('button[name=login]');
loginButton.click();

await browser.pause(10000)


})

})

it.only('Click Create new Account button - using linkText', async () => {
        
    /**
     * 1. Launch facebook.com
     * 2. Click Create New Account button
     */

    // 1. Launch facebook.com
    await browser.url('/');

    // 2. Click Create New Account button
    const createNewAccountButton = await $('=Create new account');
    createNewAccountButton.click();

     await browser.pause(7000);


});

