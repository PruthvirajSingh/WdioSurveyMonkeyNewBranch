const singleTextBox=require("../Modal/SingleText")
const utility=require("../Utility/Utility2")
class CommentBox{
    get multipleTypeQuestion(){
        return $("#editTitle")
    }
    get titleSelect(){
        return $(".mce-edit-focus")
    }
    get boldButton(){
        return $(".mce-ico.mce-i-bold")
    }
    get saveQue(){
        return $("(//div//a[text()='SAVE'])[8]")
    }
    get underLine(){
        return $(".mce-ico.mce-i-underline")
    }
    get underLineTextAfterSave(){
        return $("span[style='text-decoration: underline;']")
    }
    get italic(){
        return $(".mce-ico.mce-i-italic")
    }

    get linkAttach(){
        return $(".mce-ico.mce-i-link")
    }
    get urlText(){
        return $("#mceu_447-title")
    }
    get setLink(){
        return $("(//div[@class='mce-reset']//input)[1]")
    }
    get okButtonAfterLinkSet(){
        return $("(//div[@class='mce-reset']//button)[4]")
    }
    get okButtonPopUp(){
        return $("(//span[@class='mce-txt'])[2]")
    }
    get preFixtext(){
        return $(".mce-multiline")
    }
    get linkAddedValidation(){
        return $("//span[@class='user-generated notranslate']//a")
    }
    get colourChange(){
        return $(".mce-caret")
    }
    get yellowColour(){
        return $("#mcearia0-26")
    }
    get colourValidation(){
        return $("span[style='color: #ffff00;']")
    }
    get imageAdd(){
        return $(".mce-ico.mce-i-image")
    }
    get uploadImageButton(){
        return $("#imageUploaderMCE-browse")
    }
    get okButtonAfterImage(){
        return $("//span[text()='OK']")
    }
    get commentBoxText(){
        return $("(//span[@class='qType'])[1]")
    }
    get imageValidate(){
        return $("//span[@class='user-generated notranslate']//img")
    }
    get textQuestionAddedAfterSave(){
        return $("//span[@class='user-generated notranslate']")
    }
    get toolTip(){
        return $("//div//i[@class='mce-ico mce-i-bubble']")
    }
    get toolTipPopUpTitle(){
        return $("#mceu_41-title")
    }
    get addTitleInToolTip(){
        return $("//div[contains(@class,'mc')]//textarea")
    }
    get saveButtonToolTip(){
        return $("(//div[contains(@class,'mc')]//span)[7]")
    }
    get addToolTipToText(){
        return $(`//span[text()='Add a tooltip to ""']`)
    }
    get toolTipValidate(){
        return $("(//h4//span//span)[2]")
    }
    get clickArea(){
        return $("(//a[@class='wds-button wds-button--sm edit'])[1]")
    }
    get moveToAreaToClickEdit(){
        return $(".question-number.notranslate")
    }
    get commentQuestionText(){
        return $("(//span[@class='changeQTypeContainer']//span)[1]")
    }
    async saveQuestion(question){
        await this.commentBoxText.waitForDisplayed({timeout:20000})
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question)
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
    }
    async setQue(question){
        await this.commentBoxText.waitForDisplayed({timeout:20000})
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question)
        await browser.keys(["Control", "A"])
        await utility.performClick(this.boldButton);
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
     }
    async saveQuestionInUnderLine(question){
        await this.commentQuestionText.waitForDisplayed({timeout:20000})
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question)
        await browser.keys(["Control", "A"])
        await utility.performClick(this.underLine);
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
        const text= await this.underLineTextAfterSave.isDisplayed();
        return text;
    }
    async saveQuestionInItalic(question){
        await this.commentQuestionText.waitForDisplayed({timeout:20000})
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question)
        await browser.keys(["Control", "A"])
        await utility.performClick(this.italic);
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
       
    }
    async saveQuestionWithLink(question,values){
        // await browser.pause(1000)
        await this.commentQuestionText.waitForDisplayed({timeout:20000})
        await this.multipleTypeQuestion.waitForExist();
        await utility.performSetValues(this.multipleTypeQuestion,question)

        await utility.performClick(this.linkAttach);
        
        await this.setLink.setValue(values)
        await utility.performClick(this.okButtonAfterLinkSet)
       
        await this.preFixtext.waitForDisplayed();
        await utility.performClick(this.okButtonPopUp)
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
        await this.linkAddedValidation.waitForClickable();
        const text=await this.linkAddedValidation.isDisplayed();
        return text;
    }
    async saveQuestionWithcolour(question){
        await this.commentQuestionText.waitForDisplayed({timeout:20000})
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question)
        await browser.keys(["Control", "A"])
        await utility.performClick(this.colourChange);
        await utility.performClick(this.yellowColour)
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
        await  this.colourValidation.waitForClickable();
        const text=await this.colourValidation.isDisplayed();
        return text;
    }
    async saveQuestionWithImage(question){
        await this.commentQuestionText.waitForDisplayed({timeout:20000})
        await this.commentBoxText.waitForDisplayed();
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question)
        await utility.performClick(this.imageAdd)
        
        
        const path=require('path');
    
        const filePath=await path.resolve("./ImageFile/istockphoto-643843462-170667a.jpg")
   
    // const remoteFilePath=await browser.uploadFile(filePath);
    // await this.uploadFile.waitForClickable();
        await this.uploadImageButton.waitForEnabled();
        await this.uploadImageButton.addValue(filePath);
        await this.okButtonAfterImage.click();
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
        // await browser.pause(20000)
    //Above timeOut needed for the saving
        await this.textQuestionAddedAfterSave.waitForDisplayed();
        await this.imageValidate.waitForDisplayed({timeout:50000})
        const text=await this.imageValidate.isDisplayed();
        return text;
    }
    async saveQuestionWithToolTip(question,value){
        await this.commentBoxText.waitForDisplayed();
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,question);
        await this.toolTip.waitForClickable({timeout:1000})
        await utility.performClick(this.toolTip);
        // await this.toolTipPopUpTitle.waitForDisplayed();
        await this.addToolTipToText.waitForEnabled();
        await utility.performSetValues(this.addTitleInToolTip,value)
        await utility.performClick(this.saveButtonToolTip);
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
        await this.moveToAreaToClickEdit.waitForDisplayed();
        await this.moveToAreaToClickEdit.moveTo();
        await this.clickArea.waitForClickable({timeout:1000})
        await utility.performClick(this.clickArea)

        await utility.performClick(this.toolTip);
        // await this.toolTipPopUpTitle.waitForDisplayed();
        // await this.addToolTipToText.waitForEnabled();
        
        await utility.performSetValues(this.addTitleInToolTip,value)
        await utility.performClick(this.saveButtonToolTip);
        await utility.performClick(this.saveQue)
        const text= await this.toolTipValidate.getAttribute('data-tooltip')
        return text;


    }

}
module.exports=new CommentBox();