const utility=require("../Utility/Utility2")
class CopyAQuestion{
get dropDownForQuestion(){
    return $("(//a[@data-id='changeQType'])[1]")
}
get multipleQuestion(){
    return $$(".option.add-q-item")
}
get newQuestion(){
    return $("(//div[@data-rte='title'])[1]")
}
get copyAndPaste(){
    return $("(//a[text()='Copy and paste questions'])[2]")
}
get importAQuestion(){
    return $(".draft-title")
}
get addNewQuestionName(){
    return $(`//span[text()='Red']`)
}
get addQuestion(){
    return $("//textarea[@placeholder='Paste your questions here']")
}
get addButton(){
    return $("#addBulkQuestions")
}
get questionNoAdded(){
    return $("(//span[@class='question-number notranslate'])[2]")
}
get addNewQuestion(){
    return $(".wds-button.btn-large.disabled.wds-button--util-light")
}
get previewText(){
    return $(".draft-section-heading")
}
async clickOnDropdown(ElementName){
    await browser.pause(3000)
    await this.dropDownForQuestion.waitForEnabled();
    await utility.performClick(this.dropDownForQuestion);
    const elements=await this.multipleQuestion
        elements.forEach(async element=>
        {
            const button=await element.getText()
            if(button==ElementName)
            {
                await browser.pause(5000)
                await element.waitForExist({timeout:30000});
                await element.click();
            }
        })
    
}
async addNewQ(value){
    await utility.performSetValues(this.newQuestion,value)
    await utility.performClick(this.copyAndPaste)

}
async afterCopyNewQuestion(value){
    // await browser.pause(3000)
    await this.importAQuestion.waitForDisplayed({timeout:3000});
    await utility.performClick(this.addNewQuestionName)
    await utility.performSetValues(this.addQuestion,value)
    await utility.performClick(this.addButton)
    // await browser.pause(3000)
    await this.questionNoAdded.scrollIntoView();
    await this.questionNoAdded.waitForDisplayed({timeout:10000})
    const text= await this.questionNoAdded.isDisplayed();
    return text;
}
async negativeCopyQuestion(){
    await this.importAQuestion.waitForDisplayed();
    await this.previewText.waitForDisplayed();
    const text= await this.addNewQuestion.isClickable();
    return text;
}
}
module.exports=new CopyAQuestion();