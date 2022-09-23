
const utility=require("../Utility/Utility2")

class Logo{
get surveyName(){
return $("#surveyTitle")
}
get createSurvey(){
return $("#newSurvey")
}
get addLogoHere(){
    return $("//span[contains(@class,'add-l')]")
}
get uploadFile(){
    return $("//input[@title='file input']")
}
get logoAdd(){
    return $(".logo.user-generated")
}
get pageTitle(){
    return $("//span[text()='PAGE TITLE']")
}
get errorAfter2Mb(){
    return $(".status-message.warning")
}
get removeLogo(){
    return $(".removeLogo")
}

// async newServeyCreate()
// {
// //  await createServy.createNewS();
//  await createServy.selectionOfServeyType(properties.ElementName)
// }

async addLogo(){
    await utility.performClick(this.addLogoHere)
    
    
    const path=require('path');
    
    const filePath=await path.resolve("./ImageFile/istockphoto-643843462-170667a.jpg")
   
    console.log("***"+filePath);
    
   
    await this.uploadFile.setValue(filePath);
    await this.pageTitle.waitForEnabled();
    // await browser.pause(9000)
    await this.logoAdd.waitForDisplayed({timeout:10000})
    const text= await this.logoAdd.isDisplayed();
    return text;
}
async negativeLogoAdd(){
    // await utility.performClick(this.removeLogo)

    await utility.performClick(this.addLogoHere)
    // await utility.performClick(this.uploadFile)
    
    const path=require('path');
    
    const filePath=await path.resolve("./ImageFile/pexels-sohail-nachiti-807598.jpg")
   
    console.log("***"+filePath);
    // const remoteFilePath=await browser.uploadFile(filePath);
    // await this.uploadFile.waitForClickable();
   
    await this.uploadFile.setValue(filePath);
    await this.pageTitle.waitForEnabled();
    await browser.pause(5000)
    const text=await this.errorAfter2Mb.getText();
    return text;
}
}
module.exports=new Logo();