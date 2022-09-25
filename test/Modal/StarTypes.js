const utility=require("../Utility/Utility2")
class StarType{
    get questionValue(){
        return $("#editTitle")
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get addRating(){
        return $("(//label[@for='ratingLabel'])[1]")
    }
    get weight(){
        return $("(//th[text()=' Weight '])[1]")
    }
    get oneStar(){
        return $("(//div[@class='rte input'])[2]")
    }
    get firstStar(){
        return $("(//div[@class='plural-star'])[1]")
    }
    get labelVerifaction(){
        return $("(//thead//td)[6]")
    }
    get starScaler(){
        return $("#star-scale")
    }
    get threeNumberClick(){
        return $("//a[@data-action='3']")
    }
    get shapeSelection(){
        return $("#star-shape")
    }
    get smilyShape(){
        return $("//a[@data-action='smiley']")
    }
    get colourChanges(){
        return $("(//div[@class='sp-preview-inner'])[10]")
    }
    get colourSelection(){
        return $("//span[@style='background-color:rgb(245, 166, 35);']")
    }
    get numberOFEmoji(){
        return $$(".smf-icon.emoji-color.smiley")
    }
    get addNewCommentBox(){
        return $("(//label[@for='toggleOtherField'])[1]")
    }
    get labelText(){
        return $("(//b[text()='Label'])[1]")
    }
    get addCommnetForTheLabel(){
        return $("#otherLabel")
    }
    get commentLabel(){
        return $(".question-body-font-theme.answer-label")
    }
    get questionErrorMessage(){
        return $("(//td//span[@class='err'])[1]")
    }
    get cancelButton(){
        return $("(//a[contains(@class,'wds-button--ghost c')])[1]")
    }
    async addQuestionAndSave(value1){
        await this.questionValue.waitForEnabled();
        await utility.performSetValues(this.questionValue,value1)
        await utility.performClick(this.saveQue)
    }
    async ratingLabel(value1){
        await this.questionValue.waitForEnabled();
        await utility.performSetValues(this.questionValue,value1)
        await utility.performClick(this.addRating)
        const booleanValues= await this.weight.isDisplayed();
        return booleanValues;
        
    }
    async ratingLabel2(value1,value2){
        await this.questionValue.waitForEnabled();
        await utility.performSetValues(this.questionValue,value1);
        await utility.performClick(this.addRating);
        await this.firstStar.waitForDisplayed();
        await this.oneStar.waitForClickable();
        await browser.pause(2000)
        await utility.performSetValues(this.oneStar,value2)
        await utility.performClick(this.saveQue);
        await browser.pause(2000)
        const text=await this.labelVerifaction.isDisplayed();
        return text;
    }
    async shapeAdd(value1){
        await this.questionValue.waitForEnabled();
        await utility.performSetValues(this.questionValue,value1);
        await utility.performClick(this.starScaler)
        await utility.performClick(this.threeNumberClick)
        await utility.performClick(this.shapeSelection);
        await utility.performClick(this.smilyShape);
        await utility.performClick(this.colourChanges)
        await utility.performClick(this.colourSelection);
        // await browser.pause(2000)
        await utility.performClick(this.saveQue)
        await browser.pause(1500)
        return await this.numberOFEmoji.length;
        }
     async addComment(value1,value2){
        await this.questionValue.waitForEnabled();
        await utility.performSetValues(this.questionValue,value1);
        await utility.performClick(this.addNewCommentBox);
        await this.labelText.waitForDisplayed();
        await this.addCommnetForTheLabel.clearValue();
        await this.addCommnetForTheLabel.setValue(value2)
        await utility.performClick(this.saveQue)
        // await browser.pause(1000)
        await this.commentLabel.waitForDisplayed({timeout:20000})
        const text=await this.commentLabel.isDisplayed();
        return text;
        }
    async negativeTest(){
            
            await browser.pause(3000)
            await utility.performClick(this.saveQue);
            const text= await this.questionErrorMessage.getText();
            return text;
        }
}
module.exports=new StarType();