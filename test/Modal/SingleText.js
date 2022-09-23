const utility=require("../Utility/Utility2")
class SingleText{
    get multipleTypeQuestion(){
        return $("#editTitle")
    }
    get saveQue(){
        return $("(//div//a[text()='SAVE'])[8]")
    }
    get questionErrorMessage(){
        return $("(//td//span[@class='err'])[1]")
    }
    get cancelButton(){
        return $("(//a[contains(@class,'wds-button--ghost c')])[1]")
    }
    get singleTextQuestion(){
        return $("(//a[@class='sm-input']//span)[1]")
    }
    async setValuesForSingleText(question){
        await this.singleTextQuestion.waitForDisplayed();
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question)
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
    }
    async withoutSetValue(){
        // await this.cancelButton.waitForClickable();
        // await browser.pause(3000)
        await this.saveQue.waitForEnabled({timeout:2000});
        await utility.performClick(this.saveQue)
        const text= await this.questionErrorMessage.getText();
        return text;
    }
}

module.exports=new SingleText();