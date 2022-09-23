const utility=require("../Utility/Utility2")
class DeleteQuestion{
    get newQuestion(){
        return $("(//div[@data-rte='title'])[1]")
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get deleteQuestion(){
        return $("(//a[text()='DELETE'])[5]");
    }
    get dot(){
        return $(".question-dot")
    }
    get deleteQuestion(){
        return $("(//a[@name='Delete'])[1]");
    }
    get deleteLogo(){
        return $("#deletedQuestionsNum");
    }
    get hedderQuestion(){
        return $(".question-number.notranslate")
    }
    get deleteQ(){
        return $("//span[@class='user-generated notranslate']")
    }
    get questionDeleteVerify(){
        return $('.question-number.notranslate')
    }
    get buttonSaveLocation(){
        return $("(//div[@class='buttons-wrapper'])[1]")
    }
    async deleteQuestionAfterAdd(){
    // await this.newQuestion.waitForClickable();
    // await utility.performSetValues(this.newQuestion,value);
    // await browser.pause(5000)
    // await this.buttonSaveLocation.waitForDisplayed();
    // await browser.pause(6000)
    await this.saveQue.waitForDisplayed({timeout:20000})
    await utility.performClick(this.saveQue);
    // await browser.pause(4000)
    // await browser.pause(1000)
    await this.dot.moveTo();
    await utility.performClick(this.deleteQuestion)
    await utility.performClick(this.deleteLogo)

    }
    async deleteQuestionVerifaction(){
    //  await browser.pause(9000)
     const text= await this.questionDeleteVerify.isDisplayed();
     return text;
    }
}
module.exports=new DeleteQuestion();