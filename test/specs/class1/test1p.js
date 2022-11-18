const { expect } = require("chai");


describe('sample testcases', () => {
it('testcase-1' , () => {

    const res = 2+2;

    expect(res, '').to.equal(4)
  });


  it('launch facebook.com', async () => {

await browser.url('https://www.facebook.com/');

await browser.pause(10000)
})




it.only('Misc functions from browser' , async ( ) => {
  
    await browser.url('/');
    
    
    const windowHandle = await browser.getWindowHandle();
    
    console.log('\n windowHandle \n')
    console.log(windowHandle);
    console.log('\n windowHandle \n')
    
    
    await browser.pause(10000)

    });
    
    });
    
  