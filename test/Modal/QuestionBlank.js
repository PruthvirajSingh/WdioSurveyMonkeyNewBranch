const utility=require("../Utility/Utility2")
class QuestionBank{
    get questionBlankClick(){
        return $(".nav-tabs-select-style")
    }
    get quBank(){
        return $("//li//span[text()='Customer Satisfaction']")
    }
    get dropDownForQuestion(){
        return $("#qbl-hero-dropdown-button")
    }
    get custmerSatfactory(){
        return $("#qbl-hero-dropdown-tag-customer_satisfaction")
    }
    get questionEnter(){
        return $("#qbl-modal-hero-search-input")
    }
    get questionSelection(){
        return $("#qbl-results-question-card-2065998")
    }
    get addValue(){
        return $("#qbl-preview-add-question-button")
    }
    get textVerifaction(){
        return $("//span[@class='user-generated notranslate']")
    }
    async addQuestionFromQuestionBlank(value){
        await utility.performClick(this.questionBlankClick);
        await utility.performClick(this.quBank);
        await utility.performClick(this.dropDownForQuestion)
        await utility.performClick(this.custmerSatfactory)
        await utility.performSetValues(this.questionEnter,value);
        await utility.performClick(this.questionSelection)
        await utility.performClick(this.addValue)
        const text= await this.textVerifaction.getText();
        return text;
    }
    async negativeSenrioForQuestionBlank(){
        await utility.performClick(this.questionBlankClick);
        await utility.performClick(this.quBank);
        const text= await this.addValue.isEnabled();
        return text;
    }
}
module.exports=new QuestionBank();