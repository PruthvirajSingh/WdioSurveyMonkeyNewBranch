const utility=require("../Utility/Utility2")
const pageTitle=require('../Modal/PageTitle')
const questionRandom=require("../Modal/QuestionRandomized")
class SkipLogic{
    get pageLogic(){
        return $("(//a[text()='Page Logic'])[1]")
    }
    get pageSkipLogic(){
        return $("//a[text()='Page skip logic']")
    }
    get selectionPage(){
        return $("#pageSkipTarget")
    }
    get endOfSurvey(){
        return $("//option[text()='End of Survey']")
    }
    get apply(){
        return $("(//a[text()='APPLY'])[4]")
    }
    get logoSkip(){
        return $("(//span[text()='«'])[1]")
    }
    get skipText(){
        return $(".skip-text")
    }
    get newPage1(){
        return $(`(//a[@id='add_page'])[1]`)
    }
    get newPage2(){
        return $(`(//a[@id='add_page'])[2]`)
    }
    get newPage3(){
        return $(`(//a[@id='add_page'])[3]`)
    }
    get privewPage(){
        return $("//li//a[text()='PREVIEW & SCORE']")
    }
    async  skipPageLogic(value1,value2,value3,value4){
        await utility.performClick(this.pageLogic);
        await utility.performClick(this.pageSkipLogic);
        await utility.performClick(this.selectionPage)
        await this.selectionPage.selectByVisibleText("End of Survey")
        await utility.performClick(this.apply)
        await utility.performClick(this.logoSkip);
        // await browser.pause(1000);
        // await utility.performGetText(this.skipText)


        await pageTitle.addtitle(value1,value2);
        await utility.performClick(this.newPage1);
        await pageTitle.pageTitleButtonClick2();
        await pageTitle.titleAddForPage(value3,value2)
        await utility.performClick(this.newPage2);
        await pageTitle.pageTitleButtonClick3();
        await pageTitle.titleAddForPage(value4,value2)

     }
     async privewAndVerfiyQuestion(){
        // await utility.performClick(this.privewPage);
        // await browser.switchToFrame(await $('iframe#surveyPreview'))
        // await this.questionNo1.scrollIntoView();
        // const text= await this.questionNo1.getText();
        // return text;
        await questionRandom.verifyQuestionOnReview();
        
     }
}
module.exports=new SkipLogic();