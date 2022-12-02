//const Commands = require('../commands');

class Messenger {

 


mgrCheckBoxLocator = '//input[@type="checkbox"]'
MErrorLinkIsDisplayedLocator = '=Find your account and log in.'
isContinueEnabledLocator = '#loginbutton'
isKeepCheckBoxSelectedLocator = '//input[@type="checkbox"]'
isErrorCheckBoxSelected2Locator = '//input[@type="checkbox"]'




async isErrorCheckBoxSelected2() {
  return await $(this.isErrorCheckBoxSelected2Locator).isSelected()
}


async isKeepCheckBoxSelected() {
  return await $(this.isKeepCheckBoxSelectedLocator).isSelected()

}

async isContinueEnabled() {
  return await $(this.isContinueEnabledLocator).isEnabled()
}


async isMErrorLinkIsDisplayed() {
  return await $(this.MErrorLinkIsDisplayedLocator).isDisplayed()
}

async isCheckBoxSelected() {
  return   await $(this.mgrCheckBoxLocator).isSelected()

}

}
module.exports = Messenger;