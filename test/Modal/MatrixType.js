const utility=require("../Utility/Utility2")
const multiple=require("../Modal/Multiple");
class Matrix{
    get questionValue(){
        return $("#editTitle")
    }
    get rowValue(){
        return $("(//div[@data-rte='answer'])[3]")
    }
    get columnValue(){
        return $("(//div[@data-rte='column'])[2]")
    }
    get checkBox(){
        return $(`(//table//label[@for='editWeighted'])[1]`)
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    
    get questionErrorMessage(){
        return $("(//tr[@class='choice new']//span)[2]")
    }
    get nAtypesBoxSelction(){
        return $("(//label[@for='editNA'])[1]")
    }
    get nATextVerifaction(){
        return $("(//td[contains(text(),'N/A')])[2]")
    }
    get removeRowChoice(){
        return $("(//label[@for='switchToSRRS']//strong)[1]")
    }
    async dragAnQuestion(ElementName){
        // await browser.pause(3000)
        await multiple.dragAQuestion(ElementName)
        
    }
    async importAQuestion(value1,value2,value3){
        await this.removeRowChoice.waitForDisplayed();
        await this.questionValue.waitForEnabled();
        await utility.performSetValues(this.questionValue,value1)
       
        await utility.performSetValues(this.rowValue,value2)
        
        // await browser.pause(4000);
        await utility.performSetValues(this.columnValue,value3)
        await this.checkBox.waitForDisplayed()
        const value= await this.checkBox.isClickable();
        
        if (value==true) {
            console.log("&&&&&"+await this.checkBox.isSelected()); 
            // await this.checkBox.click();
            await utility.performClick(this.checkBox)
            
        }
        
        // await this.saveQue.click();
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)

    }
    async addQuestionWithoutRow(value1,value3){
        await browser.pause(2000)
        await this.questionValue.waitForEnabled();
        await utility.performSetValues(this.questionValue,value1)
        await utility.performSetValues(this.columnValue,value3)
        await this.checkBox.waitForDisplayed()
        const value= await this.checkBox.isClickable();
        if (value==true) {
            console.log("&&&&&"+await this.checkBox.isSelected()); 
            // await this.checkBox.click();
            await utility.performClick(this.checkBox)
            
        }
        
        // await this.saveQue.click();
        await this.saveQue.waitForEnabled();
        await utility.performClick(this.saveQue)
        const text= await this.questionErrorMessage.getText();
        return text;
    }
    
    // async nAColoumeAdd(value1,value3,value2){
    //     await this.questionValue.waitForEnabled();
    //     await utility.performSetValues(this.questionValue,value1)
    //     await this.nAtypesBoxSelction.waitForClickable();
    //     await this.nAtypesBoxSelction.click();
    //     await utility.performSetValues(this.rowValue,value2)
    //     await utility.performSetValues(this.columnValue,value3)
    //     await this.checkBox.waitForDisplayed()
    //     const value= await this.checkBox.isClickable();
    //     if (value==true) {
    //         console.log("&&&&&"+await this.checkBox.isSelected()); 
    //         // await this.checkBox.click();
    //         await utility.performClick(this.checkBox)
            
    //     }
       
        
        // await this.saveQue.click();
    //     await this.saveQue.waitForEnabled();
    //     await this.nATextVerifaction.waitForDisplayed();


    // }
}
module.exports=new Matrix();