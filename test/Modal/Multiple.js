const utility=require("../Utility/Utility2")
class MultipleTypes{
    get copyAndPast(){
        return $(".add-bulk-questions.zero-state-show")
    }
    get positiveSign(){
        return $("//span[@data-icon='+']")
    }
    get typesOfQuestion(){
        return $$("span[class='listText']")
    }
    get dragAndDropQuestionHere(){
        return $("#editQuestion")
    }
    get bulid(){
        return $("nav li[title='Builder']")
    }
    get multipleTypeQuestion(){
        return $("#editTitle")
    }
    get opationNo1(){
        return $("(//div[@class='rte input'])[2]")
    }
    get opationNo2(){
        return $("(//div[@tabindex='1'])[7]")
    }
    get opationNo3(){
        return $("(//div[@data-rte='answer'])[5]")
    }
    get saveQue(){
        return $("(//div//a[text()='SAVE'])[8]")
    }
    get oopsError(){
        return $("(//section[@class='warnings']//p)[2]")
    }
    get questionErrorMessage(){
        return $("(//td//span[@class='err'])[1]")
    }
    get opationErrorDisplay(){
        return $("(//table//span[@class='err'])[7]")
    }
    get strip(){
        return $("//a[text()='QUESTION BANK']")
    }
    get questionSetHere(){
        return $("(//span[text()='Enter your question'])[1]")
    }
    async addNewQuestion(question,opation1,opation2,opation3){
        // await browser.pause(1000)
        // await this.multipleTypeQuestion.waitForDisplayed();
        // await this.multipleTypeQuestion.setValue(question)
        await this.questionSetHere.waitForClickable();
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question)
        // await this.opationNo1.waitForDisplayed();
        // await this.opationNo1.setValue(opation1);
        await utility.performSetValues(this.opationNo1,opation1)
        // await this.opationNo2.waitForDisplayed();
        // await this.opationNo2.setValue(opation2);
        await utility.performSetValues(this.opationNo2,opation2)
        // expect(await this.numberQuestion).toBeDisabled()
        // await this.opationNo3.waitForExist()
        
        // await this.opationNo3.setValue(opation3)
        await utility.performSetValues(this.opationNo3,opation3)
        // await browser.pause(5000);
        await this.saveQue.waitForEnabled({timeout:30000});
        // await this.cancle.waitForDisplayed();
        // await this.cancle.waitForClickable();
        // await this.cancle.scrollIntoView();
        // await this.saveQue.click();
        // await browser.pause(10000)
        // await this.saveQue.waitForDisplayed();
        await utility.performClick(this.saveQue)

    }
    async saveQuestion(ElementName){
        // await browser.refresh();
    //    await browser.pause(000);
       
       await this.dragAQuestion(ElementName);
       await browser.pause(10000)
       await this.saveQue.waitForClickable({timeout:30000});
    
       await utility.performClick(this.saveQue)
    }
    async saveQuestionWithoutValuesSet(ElementName){
       await this.saveQuestion(ElementName)
       const text=await this.oopsError.getText();
       return text;
        
    }
    async questionError(ElementName){
       await this.saveQuestion(ElementName)
       const text= await this.questionErrorMessage.getText();
       return text;
    }
    async opationError(ElementName){
        await this.saveQuestion(ElementName)
        const text= await this.opationErrorDisplay.getText();
        return text;
    }
    async dragAQuestion(ElementName){
        // await browser.pause(000);
        // await this.strip.waitForExist();
        // await browser.pause(2000)
        await this.bulid.waitForEnabled({timeout:50000});
        await utility.performClick(this.bulid);
        // await this.copyAndPast.waitForDisplayed({timeout:20000})
        await this.positiveSign.waitForDisplayed()
        // await browser.pause(1000);
        const element= await this.typesOfQuestion
        
        // await this.bulidText.waitForDisplayed()
        element.forEach(async element=>
        {
            const button=await element.getText()
            if(button==ElementName)
            {
                // await browser.pause(5000)
                await element.waitForDisplayed();
                await this.dragAndDropQuestionHere.waitForEnabled({timeout:50000});
                await element.dragAndDrop(await this.dragAndDropQuestionHere)
                // await browser.pause(3000)
                const questionText= await element.getText()
                return questionText

            }
        })
      
    }
}
module.exports=new MultipleTypes();