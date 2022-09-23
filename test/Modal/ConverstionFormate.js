const oneQuestionAtOnce=require("../Modal/OneTimeAtATime")
class ConversationFormat{
    get privewPage(){
        return $("//div//a[text()='PREVIEW & SCORE']")
    }
    get converstionFor(){
        return $(".conversation.survey-format")
    }
    get saveFormate(){
        return $(".save-format-change")
    }
    get verifyText(){
        return $(".tool-tip-top")
    }
    async questionSet(value){
        await oneQuestionAtOnce.questionAdd(value)
    }
    async converstionFormateFormateSelection(){
        await this.privewPage.click();
        await this.converstionFor.click();
        await this.saveFormate.click();
        await this.converstionFor.moveTo();
        const text= await this.verifyText.getText();
        return text;

    }
}
module.exports=new ConversationFormat();