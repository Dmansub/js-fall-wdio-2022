it.only('TC - 3', async () => {
        
    await browser.url('https://www.facebook.com');

    await $('=Messenger').click();

    await browser.pause(3000);

    const messengerCheckBox = await $('//input[@type="checkbox"]').isSelected();
    console.log(`messengerCheckBox -> ${messengerCheckBox}\n`);

    await $('#loginbutton').click();

    await browser.pause(3000);

    const errorLinkDisplayed = await $('=Find your account and log in.').isDisplayed();
    console.log(`errorLinkDisplayed -> ${errorLinkDisplayed}\n`);

    await browser.pause(3000);

    const isContinueEnabled = await $('#loginbutton').isEnabled();
    console.log(`isContinueEnabled -> ${isContinueEnabled}\n`);

    const errorCheckBox = await $('//input[@type="checkbox"]');
    const isErrorCheckBoxSelected = await errorCheckBox.isSelected();
    console.log(`isErrorCheckBoxSelected -> ${isErrorCheckBoxSelected}\n`);

    // await browser.pause(10000);

    await $('//label[@class="uiInputLabelInput"]').click();

    // await browser.pause(10000);

    const errorCheckBox2 = await $('//input[@type="checkbox"]');
    const isErrorCheckBoxSelected2 = await errorCheckBox2.isSelected();
    console.log(`isErrorCheckBoxSelected2 -> ${isErrorCheckBoxSelected2}\n`);

});