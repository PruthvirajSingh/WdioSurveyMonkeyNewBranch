const mutiple=require("../Modal/Multiple")
const utility=require("../Utility/Utility2")
const dropDown=require("../Modal/DropDownQuestion")
class MutipleTextBox{
    get saveQue(){
        return $("(//div//a[text()='SAVE'])[8]")
    }
    get questionErrorMessage(){
        return $("(//td//span[@class='err'])[1]")
    }
    get opationErrorDisplay(){
        return $("(//table//span[@class='err'])[7]")
    }
    get buttonWrapper(){
        return $("(//div[@class='buttons-wrapper'])[1]")
    }
    get newQuestion(){
        return $("(//div[@class='editor-buttons']//a)[3]")
    }
    get onlyAllowNumericalData(){
        return $("(//label[@for='toggleNumerical'])[1]")
    }
    get textAreaToWrite(){
        return $("(//textarea[@class='sm-input sm-input--stretch'])[1]")
    }
    get numericalValidationText(){
        return $("(//label[@class='label-only switch'])[1]")
    }
    get previewButton(){
        return $("//a[text()='PREVIEW & SCORE']")
    }
    get textForTheValidate(){
        return $(".text-input-container.clearfix input")
    }
    get errorDisplayedOrNot(){
        return $("//span[@class='user-generated']")
    }
    get doneQuestion(){
        return $(".survey-page-button.user-generated.notranslate")
    }
    get numericalMessageText(){
        return $(".block.error span")
    }
    get requireFixedSumButton(){
        return $("(//label[@for='toggleConstantSum'])[1]")
    }
    get addNumericalValues(){
        return $("(//input[@data-id='editSumAmount'])[1]")
    }
    get whenAnswerNotCorrect(){
        return $("#editSumError")
    }
    get endOfPrivewText(){
        return $(".design-preview-end-page")
    }
    get questionValidateTheme(){
        return $(".question-validation-icon")
    }
async setValuesForMutipleText(question,opation1,opation2,opation3){
    
    await mutiple.addNewQuestion(question,opation1,opation2,opation3)
}
async questionErrorMultipleTextBox(){
    //    await browser.pause(1500)
       
       await this.newQuestion.waitForExist();
       await this.buttonWrapper.waitForDisplayed();
       await browser.pause(3000)
       await this.saveQue.scrollIntoView()
       await this.saveQue.waitForExist();
       await utility.performClick(this.saveQue)
       const text= await this.questionErrorMessage.getText();
       return text;

}
async opationErrorMultipleTextBox(){
    // await browser.pause(1500)
    
    await this.newQuestion.waitForExist();
    await this.buttonWrapper.waitForDisplayed();
    await browser.pause(3000)
    await this.saveQue.waitForExist();
    await this.saveQue.scrollIntoView()
    await utility.performClick(this.saveQue)
    const text= await this.opationErrorDisplay.getText();
    return text;
}
async bulkQuestions(question,value1,values2,values3){
    await dropDown.bulkQuestionSet(question,value1,values2,values3)
    await dropDown.saveQuestionMethod()
}
async checkBoxAllowNumercalDataTextValidate(question,value1,values2,values3){
    await dropDown.bulkQuestionSet(question,value1,values2,values3)
    await utility.performClick(this.onlyAllowNumericalData)
    await this.numericalValidationText.waitForDisplayed();
    const text= await this.numericalValidationText.isDisplayed();
    return text;

}
async errorMessageForNumerical(question,value1,values2,values3){
    await dropDown.bulkQuestionSet(question,value1,values2,values3)
    await utility.performClick(this.onlyAllowNumericalData)
    await this.numericalValidationText.waitForDisplayed()
    await this.textAreaToWrite.clearValue();
    await dropDown.saveQuestionMethod();
    await this.numericalMessageText.waitForDisplayed();
    const text= await this.numericalMessageText.getText();
    return text;
}
async allowNumericalData(question,value1,values2,values3,value4){
    await dropDown.bulkQuestionSet(question,value1,values2,values3)
    await utility.performClick(this.onlyAllowNumericalData)
    await this.numericalValidationText.waitForDisplayed()
    await this.textAreaToWrite.clearValue();
    await utility.performSetValues(this.textAreaToWrite,value4)
    await dropDown.saveQuestionMethod()
    await utility.performClick(this.previewButton)
    await browser.switchToFrame(await $('iframe#surveyPreview'))
    await utility.performSetValues(this.textForTheValidate,value1);
    await utility.performClick(this.doneQuestion)
    await this.errorDisplayedOrNot.waitForExist();
    const text= await this.errorDisplayedOrNot.getText();
    return text;
}
async urlHit(){
    const url= await browser.getUrl();
    return url;
}
async iframeShift(value1){
    await browser.switchToFrame(await $('iframe#surveyPreview'))
    await utility.performSetValues(this.textForTheValidate,value1);
    await utility.performClick(this.doneQuestion)
}
async requireFixedSum(question,value1,values2,values3,value4,value5,value6){
    await dropDown.bulkQuestionSet(question,value1,values2,values3)
    await utility.performClick(this.onlyAllowNumericalData)
    await utility.performClick(this.requireFixedSumButton)
    
    
    await this.numericalValidationText.waitForDisplayed()
    await this.textAreaToWrite.clearValue();
    await utility.performSetValues(this.textAreaToWrite,value4)
    await this.whenAnswerNotCorrect.clearValue();
    await utility.performSetValues(this.whenAnswerNotCorrect,value6)
    await utility.performSetValues(this.addNumericalValues,value5)
    await dropDown.saveQuestionMethod()
    await utility.performClick(this.previewButton)
    // await this.iframeShift(value5)
  
    
}
async wrongNumberError(){
  await this.questionValidateTheme.waitForExist();
  const text= await this.questionValidateTheme.isDisplayed();
  return text;


}
}
module.exports=new MutipleTextBox();