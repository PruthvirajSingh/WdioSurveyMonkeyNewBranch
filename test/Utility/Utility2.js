class Utility2{
    async performClick(element){
        // await browser.pause(3000);
        await element.waitForClickable()
        await element.click();
    }
    async performSetValues(element,value){
    await element.waitForDisplayed({timeout:20000})
    // await element.waitForClickable();
      await element.setValue(value);
    }
    async performGetText(element){
        await element.waitForDisplayed()
        return await element.getText();
    }
  
    async performIsSelected(element){
       await element.waitForDisplayed();
       return await element.isSelected();
    }
    async scrollInto(element){
        await element.waitForClickable();
        return await element.scrollIntoView();
    }
   

}

module.exports=new Utility2();