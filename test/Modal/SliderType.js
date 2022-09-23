const utility=require("../Utility/Utility2")
class SliderType{
    get multipleTypeQuestion(){
        return $("#editTitle")
    }
    get saveQue(){
        return $("(//div//a[text()='SAVE'])[8]")
    }
    get minBoundary(){
        return $("#minLabel")
    }
    get maxBoundary(){
        return $("#maxLabel")
    }
    get errorSlider(){
        return $("(//th[@class='error'])[1]//span")
    }
    get textSlider(){
        return $("(//span[text()='Scale Range Labels'])[1]")
    }
    async addQuestionSlider(values1){
        await this.textSlider.waitForDisplayed({timeout:20000})
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,values1)
        await utility.performClick(this.saveQue)
    }
    async addNegativeSlider(values1){
        await this.multipleTypeQuestion.waitForDisplayed();
        await utility.performSetValues(this.multipleTypeQuestion,values1)
        await this.minBoundary.clearValue();
        await this.maxBoundary.clearValue();
        await utility.performClick(this.saveQue)
        const text =await this.errorSlider.getText();
        return text
    }
}
module.exports=new SliderType();