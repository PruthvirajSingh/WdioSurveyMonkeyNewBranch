const utility=require("../Utility/Utility2")
const questionRandomized=require("../Modal/QuestionRandomized")
class DefaultLanguage{
    get option(){
        return $("li[title='Options']")
    }
    get language(){
        return $("//span[text()='Language']")
    }
    get defalultLangText(){
        return $("//h4[text()='Default Survey Language']")
    }
    get langSelection(){
        return $("#surveyLanguage")
    }
    get bulider(){
        return $("li[title='Builder']")
    }
    get textVerifaction(){
        return $("//span[@class='user-generated notranslate']")
    }
    async languageSelction(text){
    await utility.performClick(this.option)
    await utility.performClick(this.language);
    await this.defalultLangText.waitForDisplayed();
    await this.langSelection.selectByVisibleText(text);
    }
    async bulidQuestion(){
    await utility.performClick(this.bulider);
    await questionRandomized.questiontype2();
    const text= await this.textVerifaction.getText();
    return text;
    
    }
}
module.exports=new DefaultLanguage();