const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")

const createServy=require('../Modal/CreateNewServey')

const allureReporter= require('@wdio/allure-reporter').default
class WrapperClass {

async beforeMethod(){

        allureReporter.startStep("maximized the windows");
        console.log("maximized the windows");
        await browser.maximizeWindow();
        allureReporter.startStep("Lanch the ='https://www.surveymonkey.com/' -URL open");
        await browser.url(properties.Url)
        allureReporter.startStep("Valid Login and password");
        await loginPage.loginMethod(properties.email,properties.passwordValue);
     
    }
    async beforeEachMethod(){
    
        allureReporter.startStep("User click on the Create Survey button")
        // expect(browser).toHaveUrl("https://www.surveymonkey.com/dashboard/")
        await createServy.createNewSurveyFromStart();
        allureReporter.startStep("Create a new survey logo is display");
        await createServy.createServeyTextVerifcation();
        // expect(text).toHaveText("Create a new survey")
        allureReporter.startStep("click on 'Start from scratch'")
        await createServy.selectionOfServeyType(properties.ElementName[0])
        allureReporter.startStep("User after click start from scatch able redirect to 'Name your survey' pop up")
         await createServy.startFromScrach()
        // expect(text2).toHaveText("Name your survey");
        await createServy.surveyNameDefine(properties.SurveyName[0]);
    
    }
    async afterEachMethod(){
    
        allureReporter.startStep("Refresh page");
        await browser.refresh();
        allureReporter.startStep("Delete Surevy");
        await loginPage.deleteFile();
    

}
}
module.exports=new WrapperClass();