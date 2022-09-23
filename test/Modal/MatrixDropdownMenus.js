const matrix=require("../Modal/MatrixType")

const utility=require("../Utility/Utility2")
class MatrixDropdownMenus{
    get questionValue(){
        return $("#editTitle")
    }
    get rowValue(){
        return $("(//div[@data-rte='answer'])[3]")
    }
    get columnValue(){
        return $("(//div[@data-rte='column'])[2]")
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get textQuestion(){
        return $("(//span[@class='columnChoices'])[1]")
    }
    get enterAnsChoice(){
        return $("(//span[@class='addNew'])[2]")
    }
    get enterChoice(){
        return $("//textarea[@class='menu-options-input textarea']")
    }
    get saveButtonAfterText(){
        return $(".confirm-btn.btn.default.btn-txt-primary")
    }
    get dropDown(){
        return $("(//div//tbody//select)[7]")
    }
    get questionErrorMessage(){
        return $("(//td//span[@class='err'])[1]")
    }
    get opationErrorDisplay(){
        return $("(//table//span[@class='err'])[7]")
    }
    get oopsError(){
        return $("(//section[@class='warnings']//p)[2]")
    }
    get TextErrorOnly200(){
      return $("(//div[@class='dialog dialog-a open']//span[@class='err'])[1]")
    }
    get pleaseEnterOneOrMoreChoice(){
        return $("(//div[@class='dialog dialog-a open']//span)[3]")
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
    get addAnswerInBulkText(){
        return $("//div[@id='bulk-add-dialog']//h5")
    }
    get bulkQuestionMoreThan200(){
        return $("(//div[@id='bulk-add-dialog']//span)[6]")
    }
    get clickOnLabel(){
        return $("(//label[@for='toggleOtherField'])[1]")
    }
    get addCommnetForTheLabel(){
        return $("#otherLabel")
    }
    get sizeSelection(){
        return $("#otherWide")
    }
    get selectionOfValidation(){
        return $("#validateFormatOther")
    }
    get validationInBetween(){
        return $("#validateMaxOther")
    }
    get errorMessageForValidation(){
        return $("#validateTextOther")
    }
    async questionSetAndRowLabel(value1,value2){
    await this.textQuestion.waitForDisplayed({timeout:10000});
        
    await utility.performSetValues(this.questionValue,value1)
       
    await utility.performSetValues(this.rowValue,value2)
    }
    async coloumQuestionDropDown(value1,value2,value3){
    await this.questionSetAndRowLabel(value1,value2)
    await utility.performSetValues(this.columnValue,value3)
    await utility.performClick(this.enterAnsChoice)
    await utility.performSetValues(this.enterChoice,value3+'\n'+value2)
    await utility.performClick(this.saveButtonAfterText)
    await this.saveQue.waitForEnabled();

    await utility.performClick(this.saveQue)
    }
async addQuestionMatrixMenus(value1,value2,value3){
    await this.coloumQuestionDropDown(value1,value2,value3)
    await this.dropDown.waitForDisplayed({timeout:20000})
    const text= await this.dropDown.isDisplayed();
    return text;

}
async saveQuestion(){
    await this.textQuestion.waitForDisplayed({timeout:10000});
    await this.saveQue.waitForEnabled({timeout:20000});
    await utility.performClick(this.saveQue)
}
async errorInQuestion(){
    await this.saveQuestion();
    const text=await this.questionErrorMessage.getText();
    return text;
}
async errorInRowLabel(){
    await this.saveQuestion();
    const text =await this.opationErrorDisplay.getText();
    return text;
}
async errorLabelInColoum(value1,value2){
    await this.questionSetAndRowLabel(value1,value2)
    await this.saveQuestion();
    const text= await this.oopsError.getText()
    return text;
}
async errorMessageInDropDownAnswerChoice(value1,value2,value3){
    await this.questionSetAndRowLabel(value1,value2)
    await utility.performSetValues(this.columnValue,value2)
    await utility.performClick(this.enterAnsChoice)
    for (let index =value3; index <=210; index++) {
       await this.enterChoice.addValue(index+'\n')
     }
    await this.saveButtonAfterText.waitForExist({timeout:20000})
    await utility.performClick(this.saveButtonAfterText)
    await this.TextErrorOnly200.waitForDisplayed({timeout:30000})
    const text=await this.TextErrorOnly200.getText();
    return text;
}
async enterOneMoreChoice(value1,value2){
    await this.questionSetAndRowLabel(value1,value2)
    await utility.performSetValues(this.columnValue,value2)
    await utility.performClick(this.enterAnsChoice)
    await this.saveButtonAfterText.waitForExist({timeout:20000})
    await utility.performClick(this.saveButtonAfterText)
    const text= await this.pleaseEnterOneOrMoreChoice.getText();
    return text;
}
async bulkLabel(value1){
    await this.textQuestion.waitForDisplayed({timeout:10000});
        
    await utility.performSetValues(this.questionValue,value1)
    await utility.performClick(this.bulkQuestion)
    const text=await this.addAnswerInBulkText.getText();
    return text;
    
}
async bulkLabelAccepctsValues(value1,value2,value3){
    await this.textQuestion.waitForDisplayed({timeout:30000});
    await utility.performSetValues(this.questionValue,value1)
    await utility.performClick(this.bulkQuestion)
    await this.addAnswerInBulkText.waitForDisplayed();
    await this.valueSetForBulkQuestion.setValue(value1+"\n"+value2+"\n"+value3)
    await utility.performClick(this.saveButtonAfterQuestionOpations)
    await utility.performSetValues(this.columnValue,value3)
    await utility.performClick(this.enterAnsChoice)
    this.enterChoice.addValue(value1+'\n'+value2+'\n'+value3)
    await this.saveButtonAfterText.waitForExist({timeout:20000})
    await utility.performClick(this.saveButtonAfterText)
    
}
async bulkAddQuestionMoreThan200Choice(value1,value3){
    await this.textQuestion.waitForDisplayed({timeout:10000});
    await utility.performSetValues(this.questionValue,value1)
    await utility.performClick(this.bulkQuestion)
    await this.addAnswerInBulkText.waitForDisplayed();
    for (let index =value3; index <=210; index++) {
        await this.valueSetForBulkQuestion.addValue(index+'\n')
     }
     await utility.performClick(this.saveButtonAfterQuestionOpations)
     const text=await this.bulkQuestionMoreThan200.getText();
     return text;
}
async addLabel(value1,value2,value3,value4,value5){
    await this.bulkLabelAccepctsValues(value1,value2,value3)
    await this.clickOnLabel.click();
    await this.addCommnetForTheLabel.clearValue();
    await this.addCommnetForTheLabel.setValue(value2);
    await this.sizeSelection.selectByVisibleText('5 characters')
    await this.selectionOfValidation.selectByVisibleText("Make sure it's a specific length")
    
    await this.validationInBetween.clearValue();
    await this.validationInBetween.clearValue();
    // await browser.keys(['Ctrl','a',"BACKSPACE"])
    // await this.validationInBetween.waitForClickable({timeout:1000})
    // await this.validationInBetween.setValue(Keys.BACKSPACE)
    // await browser.debug();
    await this.validationInBetween.setValue(value4);
    await this.errorMessageForValidation.clearValue();
    await this.errorMessageForValidation.setValue(value5)
    await this.saveQue.waitForEnabled({timeout:20000});
    await this.saveQue.click()
}

}
module.exports=new MatrixDropdownMenus();