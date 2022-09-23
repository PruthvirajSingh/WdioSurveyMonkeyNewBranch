const utility=require("../Utility/Utility2")
const multiple=require("../Modal/Multiple");
class DropDown{
    get multipleTypeQuestion(){
        return $("#editTitle")
    }
    get selectDropDownForOptions(){
        return $("(//select[@id='answerBankCategorySelect'])[1]")
    }
    get saveQue(){
        return $("(//div//a[text()='SAVE'])[8]")
    }
    get questionErrorMessage(){
        return $("(//td//span[@class='err'])[1]")
    }
    get opationErrorDisplay(){
        return $("(//table//span[@class='err'])[7]")
    }
    get bulkQuestion(){
        return $("(//a[@id='addBulkAns'])[2]")
    }
    get valueSetForBulkQuestion(){
        return $(".bulk-add-input.sm-input.sm-input--stretch")
    }
    get saveButtonAfterQuestionOpations(){
        return $(".wds-button.wds-button--sm.btn-txt-primary")
    }
    get reverseQuestion(){
        return $("(//a[@class='reverse-answer-options'])[1]")
    }
    get cancelButton(){
        return $("(//a[contains(@class,'wds-button--ghost c')])[1]")
    }
    get editText(){
        return $("(//a[@class='t1'])[1]")
    }
   
   
async dragAnQuestion(ElementName){
    await multiple.dragAQuestion(ElementName)
}
async valuesSet(question){
    
    await this.multipleTypeQuestion.waitForDisplayed();
    await utility.performSetValues(this.multipleTypeQuestion,question)
    await this.selectDropDownForOptions.selectByVisibleText('Likely - Unlikely')
    await this.saveQue.waitForClickable();
    await utility.performClick(this.saveQue)
}
async questionError(){
    // await this.selectDropDownForOptions.waitForClickable();
    await browser.pause(5000)
    await this.selectDropDownForOptions.selectByVisibleText('Likely - Unlikely')
    await this.saveQue.waitForClickable();
    await utility.performClick(this.saveQue)
    const text= await this.questionErrorMessage.getText();
    return text;
}
async opationsError(question){
    // await browser.pause(2000)
    await this.multipleTypeQuestion.waitForDisplayed({timeout:2000});
    await utility.performSetValues(this.multipleTypeQuestion,question)
    await this.saveQue.waitForClickable();
    await utility.performClick(this.saveQue)
    const text= await this.opationErrorDisplay.getText()
    return text;

}
async saveQuestionMethod(){
    await this.saveQue.waitForClickable();
    await this.cancelButton.waitForClickable();
    await utility.performClick(this.saveQue)
}
async bulkQuestionSet(question,value1,values2,values3){
    await this.editText.waitForExist();
    await this.multipleTypeQuestion.waitForDisplayed();
    await utility.performSetValues(this.multipleTypeQuestion,question)
    await utility.performClick(this.bulkQuestion);
    await this.valueSetForBulkQuestion.setValue(value1+"\n"+values2+"\n"+values3)
    await utility.performClick(this.saveButtonAfterQuestionOpations)
    
    }




}
module.exports=new DropDown();