const utility=require("../Utility/Utility2")
const dragAnQuestion=require("./MoveQuestion");
const pageTitle=require('../Modal/PageTitle')
const questionRandom=require("../Modal/QuestionRandomized")
class PageRandomized{
    get bulid(){
        return $("li[title='Builder']")
    }
    get newPage(){
        return $('#add_page')
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get pageSelection(){
        return $("(//div[@class='pageName'])[2]")
    }
    get nextPageSelection(){
        return $("(//li[@class='dropdownItem'])[2]")
    }
    get arrowSelection(){
        return $("(//a[contains(@class,'wds-button--arrow-on')])[2]")
    }
    get npsSelection(){
        return $("//a[text()='Net Promoter® Score']")
    }
    get newQ(){
        return $("(//div[@data-rte='title'])[1]")
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get pageRandom(){
        return $(`//a[text()='Page randomization']`)
    }
    get pageLogic(){
        return $("(//a[text()='Page Logic'])[1]")
    }
    get buttonPageRandom(){
        return $(`label[for="randomPageRandom"]`)
    }
    get apply(){
        return $("(//a[text()='APPLY'])[4]")
    }
    get privewPage(){
        return $("//div//a[text()='PREVIEW & SCORE']")
    }
    get questionNo1(){
        return $("(//span[contains(@class,'user-')])[1]")
    }
    // async dragQuestion(ElementName,value){
    //     await utility.performClick(this.bulid)
    //     await dragAnQuestion.dragAQuestion(ElementName)
    //     await browser.pause(2000)
    //     await questionRandomized.questiontype(value);
    //     await utility.performClick(this.newPage);
    // }
    async newQuestion(value1,value2,value3){
        await utility.performClick(this.pageLogic);
        await utility.performClick(this.pageRandom);
        await utility.performClick(this.buttonPageRandom)
        await utility.performClick(this.apply)
        // await utility.performClick(this.bulid)
        // await browser.pause(5000)
        await pageTitle.addtitle(value1,value2);
        await utility.performClick(this.newPage);
        await pageTitle.pageTitleButtonClick2();
        await pageTitle.titleAddForPage(value3,value2)
        // await utility.performClick(this.newPage);
        // await pageTitle.pageTitleButtonClick3();
        // await pageTitle.titleAddForPage(value4,value2)
    }
    async privewGivenPages(){
        // await browser.pause(5000)
        await this.privewPage.click()
        await browser.pause(3000)
        await browser.switchToFrame(await $('iframe#surveyPreview'))
        const text= await this.questionNo1.getText();
        return text;
    }
    async privewPage2(){
        await questionRandom.titleVerifaction();
    }
}
module.exports=new PageRandomized();