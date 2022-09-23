const utility=require("../Utility/Utility2")
class CreateNewServey{
    get createS(){
        return $(".mm-header__action.mm-header__action-create")
    }
    get startSurveyFrom(){
        return $("//strong[text()='Start from scratch']")
    }
    get surveyName(){
        return $("#surveyTitle")
    }
    get createNewServ(){
        return $("//div[contains(@class,'wds-type--l')]")
    }
    get createSurvey(){
        return $("#newSurvey")
    }
    get createNewSurey(){
        return $$(".wds-button")
    }
    get howToStartServey(){
        return $("h2.wds-type--body")
    }
    get superChargesCloseButton(){
        return $("span[class='wds-close__icon']");
    }
    get textForVerfication(){
        return $(".wds-type--left")
    }
   get popUptest(){
    return $("(//li[@class='tab']//a)[1]")
   }
   get upgrad(){
    return $("//a[text()='Upgrade']")
   }
   get img(){
    return $("(//img[@class='mm-header__icon'])[1]")
   }
   get plan(){
    return $("//a[@title='Plans & Pricing']")
   }
   get logo(){
    return $("(//img[@id='svg_logo'])[2]");
   }
   get upgradButton(){
    return $("//div//a[text()='Upgrade']")
   }
    get nameYourServey(){
    return $(".wds-modal__text")
    }
    get tryOut(){
        return $(".mm-header__navbar")
    }
    
    async createNewSurveyFromStart()
    {
       
        await this.plan.waitForDisplayed({timeout:30000})
        await utility.scrollInto(this.plan)
        await this.img.waitForClickable();
       
        await this.createS.waitForExist();
        await this.createS.waitForDisplayed({timeout:30000})
        await utility.performClick(this.createS)
    }

    async createServeyTextVerifcation(){
        await utility.performGetText(this.createNewServ)
    }
    async selectionOfServeyType(ElementName){
        if(await this.textForVerfication.getText()=="Create a new survey"){
        const elements=await this.createNewSurey
        elements.forEach(async element=>
        {
            const button=await element.getText()
            if(button==ElementName)
            {
                
                await element.waitForExist({timeout:50000});
                await element.click();
            }
        })
        }
        else
            {
        //  await this.superChargesCloseButton.waitForDisplayed({timeout:20000})
        //     await this.superChargesCloseButton.click()
            await utility.performClick(this.superChargesCloseButton)
            // await this.startSurveyFrom.click();
        // await browser.pause(5000)
            await utility.performClick(this.startSurveyFrom)
            }
        
        // await this.surveyName.waitForClickable()
        // await this.surveyName.setValue(SurveyName)
        // await utility.performSetValues(this.surveyName,SurveyName)
        // // await this.createSurvey.waitForDisplayed()
        // // await this.createSurvey.click();
        // await utility.performClick(this.createSurvey)
        
    }
    async startFromScrach(){
        await utility.performGetText(this.nameYourServey)
    }
    async surveyNameDefine(SurveyName){
        await this.surveyName.waitForEnabled();
        await utility.performSetValues(this.surveyName,SurveyName)
        await utility.performClick(this.createSurvey)
    }
}
module.exports=new CreateNewServey();