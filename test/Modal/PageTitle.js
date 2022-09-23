const utility=require("../Utility/Utility2")
class PageTitle{
    get pageButton(){
        return $("(//span[contains(@class,'page-t')])[1]")
    }
    get pageButton2(){
        return $("//a[@id='add_page']")
    }
    get pageButton3(){
        return $("(//a[@id='add_page'])[2]")
    }
    get pageTitleLable(){
        return $('.pageTitleLabel')
    }
    get pageTitleHeadder(){
        return $(`#pageTitle`)
    }
    get pageDescripation(){
        return $(`#pageSubtitle`)
    }
    get saveButton(){
        return $(`(//a[text()='SAVE'])[9]`)
    }
    get editButton(){
        return $("(//a[text()='EDIT'])[1]")
    }
    get moveToEdit(){
        return $(".page-title.user-generated")
    }
    get textAddVerfiy(){
        return $(".page-title.user-generated")
    }
    get valuesAddedOrNotValidate(){
        return $("span.page-title.user-generated")
    }
    async addtitle(value1,value2){
        await this.pageTitleButtonClick1();
        await this.titleAddForPage(value1,value2);
        
    }
async pageTitleButtonClick1(){
    // await browser.pause(2000)
    await this.pageButton.waitForClickable({timeout:10000})
    await utility.performClick(this.pageButton)
}
async pageTitleButtonClick2(){
    await this.pageButton2.scrollIntoView();
    await this.pageButton2.waitForClickable({timeout:20000})
    await utility.performClick(this.pageButton2)
}
async pageTitleButtonClick3(){
    await this.pageButton3.scrollIntoView()
    await this.pageButton3.waitForClickable({timeout:30000})
    await utility.performClick(this.pageButton3)
}
async titleAddForPage(value1,value2){
    // await this.pageTitleLable.waitForDisplayed();
    await utility.performSetValues(this.pageTitleHeadder,value1)
    await utility.performSetValues(this.pageDescripation,value2)
    await utility.performClick(this.saveButton)
    const text= await this.textAddVerfiy.isDisplayed();
    return text;
}
async clcikOnEditButton(){
    await this.editButton.moveTo();
    await utility.performClick(this.editButton)
}
async maximumTextThan100Characters(value1){
    // await this.pageTitleLable.waitForDisplayed();
    for (let index =value1; index <=101; index++) {
    await this.pageTitleHeadder.addValue(index)
    }
    
    await utility.performClick(this.saveButton);
    await this.valuesAddedOrNotValidate.waitForDisplayed();
    const text= await this.valuesAddedOrNotValidate.getText();
    return text;

}
}
module.exports=new PageTitle();