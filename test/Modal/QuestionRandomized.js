const utility=require("../Utility/Utility2")
const dragAnQuestion=require("./MoveQuestion");
// const wrapper=require("../TestCase/WrapperClass")
class QuestionRandomzied{
    get bulid(){
        return $("li[title='Builder']")
    }
    get newQuestion(){
        return $("(//div[@data-rte='title'])[1]")
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get pageLogic(){
        return $("(//a[text()='Page Logic'])[1]")
    }
    get questionRandom(){
        return $("//a[text()='Question randomization']")
    }
    get formatText(){
        return $("(//h4[text()='Format:'])[1]")
    }
    get randomQuestionSelection(){
        return $("label[for='questionRandomRandom']")
    }
    get apply(){
        return $("(//a[text()='APPLY'])[4]")
    }
    get arrowSelection(){
        return $(".wds-button--arrow-only.notranslate")
    }
    get npsSelection(){
        return $("//a[text()='Net Promoter® Score']")
    }
    get privewPage(){
        return $("//div//a[text()='PREVIEW & SCORE']")
    }
    get questionNo1(){
        return $("(//span[contains(@class,'user-')])[1]")
    }
    get number(){
        return $(".survey-page-body")
    }
    get doneButton(){
        return $(".btn.small.done-button")
    }
    get prviewAgain(){
        return $("//a[text()=' PREVIEW AGAIN ']")
    }
    get scroll(){
        return $(".center-text.clearfix")
    }
    get footerTitle(){
        return $(".survey-footer-title")
    }
    get iframeValue(){
        return $("#iframeWrapper")
    }
    get footerBase(){
        return $(".title-text")
    }
    get endOfPrivew(){
        return $("(//div[@class='message'])[4]")
    }
    get pageTitle(){
        return $(".page-title.user-generated")
    }
async dragQuestion(ElementName){
    
    await utility.performClick(this.bulid)
    await dragAnQuestion.dragAQuestion(ElementName)

}
async questiontype(value){
    
    await this.newQuestion.waitForDisplayed();
    await utility.performSetValues(this.newQuestion,value);
    // await browser.pause(1000)
    await utility.performClick(this.saveQue);
}
async questiontype2(){
    await utility.performClick(this.arrowSelection);
    await utility.performClick(this.npsSelection);
    await browser.pause(2000)
    await utility.performClick(this.saveQue);
}
async randmaziedQuestion(){
    await utility.performClick(this.pageLogic);
    await utility.performClick(this.questionRandom)
    await this.formatText.waitForDisplayed();
    await utility.performClick(this.randomQuestionSelection)
    await utility.performClick(this.apply)
}
async verifyQuestionOnReview(){
    // await browser.pause(5000)
    await this.privewPage.click()
    await browser.pause(3000)
    await browser.switchToFrame(await $('iframe#surveyPreview'))
    // await this.questionNo1.scrollIntoView();
    const text= await this.questionNo1.getText();
    return text;

}
async titleVerifaction(){
    await browser.pause(2000)
    await this.privewPage.click()
    // await browser.refresh();
    await browser.switchToFrame(await $('iframe#surveyPreview'))
    await this.pageTitle.scrollIntoView()
    const text=await this.pageTitle.getText();
    return text;
}
async verifyQuestion2(){
    
    const text= await this.questionNo1.getText();
    return text;
}

async doneQuestion(){
    
    // await this.footerTitle.scrollIntoView();
    // await utility.performClick(this.doneButton)
    
    // await browser.switchToFrame(await $('iframe#surveyPreview'))
    // await this.endOfPrivew.waitForDisplayed();
    // await utility.performClick(this.prviewAgain)
    await browser.refresh();
    // await browser.pause(5000)
    await browser.switchToFrame(await $('iframe#surveyPreview'))
    const text2= await this.questionNo1.getText();
    return text2;
}
}
module.exports=new QuestionRandomzied();