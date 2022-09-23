const utility=require("../Utility/Utility2")
class WalnutTheame{
    get apperaces(){
        return $("li[data-sidebar='accThemes']")
    }
    get theams(){
        return $("//a[text()='THEMES']")
    }
    get typesOfTheams(){
        return $$(".themeName")
    }
    get theamsVerify(){
        return $(".theme-inner-wrapper")
    }
    async applyThems(ElementName)
    {
        await utility.performClick(this.apperaces);
        await browser.pause(5000);
        await utility.performClick(this.theams);
        
        const element= await this.typesOfTheams
        element.forEach(async element=>
        {
            const button=await element.getText()
            if(button==ElementName)
            {
                await element.scrollIntoView();
                await element.waitForClickable();
                await element.click()
                
            }
        })
        await browser.pause(3000)
        const text= await this.theamsVerify.isDisplayed();
        return text;
    }
    
    
}
module.exports=new WalnutTheame();