const utility=require("../Utility/Utility2")
class MoveQuestion{
    get bulid(){
        return $("li[title='Builder']")
    }
    get bulidServryLogo(){
        return $(".sidenav-view.collapsible")
    }
    get typesOfQuestion(){
        return $$("span[class='listText']")
    }
    get copyP(){
        return $("#editQuestion")
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get errorMessage(){
        return $("(//tbody//span[@class='err'])[1]")
    }
    get newQuestion(){
        return $("(//div[@data-rte='title'])[1]")
    }
    get bulidText(){
        return $("//a[text()='BUILD']")
    }
    get positiveSign(){
        return $("//span[@data-icon='+']")
    }
    get style(){
        return $("//span[text()='Style']");
    }
    get copyAndPast(){
        return $(".add-bulk-questions.zero-state-show")
    }
    get cancle(){
        return $("(//div[@class='buttons-wrapper']//a)[3]")
    }
    get dragQuestion(){
        return $("#editQuestion")
    }
    get dragLocation(){
        return $(".page-title-wrapper.clearfix")
    }
    get footerValues(){
        return $(".survey-footer")
    }
    get standardFotter(){
        return $(".standard-footer.notranslate")
    }
    async buildAndDrag(ElementName){
        await this.buildTheSurvey();
        await this.dragAQuestion(ElementName)
    }
    async buildTheSurvey(){
        await browser.pause(9000)
        // await this.style.waitForDisplayed()
        // await this.bulid.waitForDisplayed({timeout:1000})
        // await this.bulid.click();
        await this.bulid.waitForEnabled();
        await utility.performClick(this.bulid);
        
    }
    async dragAQuestion(ElementName){
        await browser.pause(9000);
        await this.copyAndPast.waitForDisplayed()
        await this.positiveSign.waitForClickable()
        // await browser.pause(9000);
        const element= await this.typesOfQuestion
        
        // await this.bulidText.waitForDisplayed()
        element.forEach(async element=>
        {
            const button=await element.getText()
            if(button==ElementName)
            {
                await browser.pause(5000)
                await element.waitForClickable();
                await element.dragAndDrop(await this.copyP)
                const questionText= await element.getText()
                return questionText
            }
        })
       const text= await this.dragQuestion.isDisplayed();//await
       return text;
    }
    async dragQuestionAtFooter(ElementName){
        await browser.pause(9000);
        await this.copyAndPast.waitForDisplayed()
        await this.positiveSign.waitForClickable()
        // await browser.pause(9000);
        const element= await this.typesOfQuestion
        
        // await this.bulidText.waitForDisplayed()
        element.forEach(async element=>
        {
            const button=await element.getText()
            if(button==ElementName)
            {
                await browser.pause(5000)
                await element.waitForClickable();
                await element.dragAndDrop(await this.footerValues)
                const questionText= await element.getText()
                return questionText
            }
        })
        const text= await this.standardFotter.isDisplayed();//await
        return text;
    }

}
module.exports=new MoveQuestion();