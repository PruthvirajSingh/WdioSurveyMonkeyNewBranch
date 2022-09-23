const multiple=require("../Modal/Multiple")
const dropDown=require("../Modal/DropDownQuestion")
const utility=require("../Utility/Utility2")
class Ranking{
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
    get nAButton(){
        return $("(//label[@for='editNA'])[1]")
    }
    get saveQue(){
        return $("(//div//a[text()='SAVE'])[8]")
    }
    get nATextVerify(){
        return $("(//span[contains(@class,'question-ranking-n')])[1]")
    }
    get questionErrorMessage(){
        return $("(//td//span[@class='err'])[1]")
    }
    get opationErrorDisplay(){
        return $("(//table//span[@class='err'])[7]")
    }
    get rankingText(){
        return $("(//a[@class='sm-input']//span)[1]")
    }
async addQuestion(question,opation1,opation2,opation3){
    await multiple.addNewQuestion(question,opation1,opation2,opation3)
}
async bulkQue(question,value1,values2,values3){
    await dropDown.bulkQuestionSet(question,value1,values2,values3);
}
async nAColoum(question,opation1,opation2,opation3){
    await this.rankingText.waitForDisplayed({timeout:20000})
    await this.multipleTypeQuestion.waitForDisplayed();
    await utility.performSetValues(this.multipleTypeQuestion,question)
   
    await utility.performSetValues(this.opationNo1,opation1)
    
    await utility.performSetValues(this.opationNo2,opation2)
  
    await utility.performSetValues(this.opationNo3,opation3)
    await utility.performClick(this.nAButton)
    await this.saveQue.waitForEnabled();
   
    await utility.performClick(this.saveQue)
    // await browser.pause(1000)
    await this.nATextVerify.waitForDisplayed({timeout:20000})
    const text= await this.nATextVerify.isDisplayed();
    return text;
}
async negativeSenrioQuestion(){
    // await browser.pause(3000)
    await this.saveQue.waitForEnabled({timeout:20000});
    await utility.performClick(this.saveQue)
    const text= await this.questionErrorMessage.getText();
    return text;
}
async negativeSenrioOpationSet(){
    await this.saveQue.waitForEnabled();
    await utility.performClick(this.saveQue)
    const text= await this.opationErrorDisplay.getText();
    return text;
}
}
module.exports=new Ranking();