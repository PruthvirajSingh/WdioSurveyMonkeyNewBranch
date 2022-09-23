const questionRandom=require("../Modal/QuestionRandomized")
class OneQuestionAtATime{
    get privewPage(){
        return $("//div//a[text()='PREVIEW & SCORE']")
    }
    get oneQuestionAtOne(){
        return $("#Rectangle-path")
    }
    get saveFormate(){
        return $(".save-format-change")
    }
    get textOneQuestion(){
        return $(".tool-tip.tool-tip-top")
    }
    async questionAdd(value){
        await questionRandom.questiontype(value);
        await questionRandom.questiontype2();
    }
    async oneQustionsAtOnce(){
        await this.privewPage.click();
        // await browser.switchToFrame(await $('iframe#surveyPreview'))
        await this.oneQuestionAtOne.click();
        await this.saveFormate.click();
        await this.oneQuestionAtOne.moveTo();
        
        // await browser.switchToFrame(await $('iframe#universal_pixel_l2ue7qf'))
        
        
        // await this.textOneQuestion.waitForDisplayed();
        const text= await this.textOneQuestion.getText();
        return text;
    }
}
module.exports=new OneQuestionAtATime();