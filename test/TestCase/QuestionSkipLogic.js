const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")

const createServy=require('../Modal/CreateNewServey')

const questionRandomized=require("../Modal/QuestionRandomized")

const allureReporter= require('@wdio/allure-reporter').default
describe('verify that user is able to apply question randomization',async () => {
    before(async() => {
        allureReporter.startStep("maximized the windows");
        await browser.maximizeWindow();
        allureReporter.startStep("'https://www.surveymonkey.com/' -URL open");
        await browser.url(properties.Url)
        await expect(browser).toHaveUrl('https://www.surveymonkey.com/')
        allureReporter.startStep("Valid Login and password");
        await loginPage.loginMethod(properties.email,properties.passwordValue);
     });
    beforeEach(async() => {
        allureReporter.startStep("User click on the Create Survey button")
        expect(browser).toHaveUrl("https://www.surveymonkey.com/dashboard/")
        await createServy.createNewS();
        allureReporter.startStep("Create a new survey logo is display");
        const text=await createServy.createServeyTextVerifcation();
        expect(text).toHaveText("Create a new survey")
        allureReporter.startStep("click on 'Start from scratch'")
        await createServy.selectionOfServeyType(properties.ElementName[0])
        allureReporter.startStep("User after click start from scatch able redirect to 'Name your survey' pop up")
        const text2= await createServy.startFromScrach()
        expect(text2).toHaveText("Name your survey");
        await createServy.sCreate(properties.SurveyName[0]);
    });
    afterEach(async() => {
        allureReporter.startStep("Refresh page");
        await browser.refresh();
        allureReporter.startStep("Delete Surevy");
        await loginPage.deleteFile();
    });
    it('Positive Senrio for the question Skip',async () => {
        await questionRandomized.questiontype(properties.headerSet[1])
        await questionRandomized.questiontype2();
        await questionRandomized.randmaziedQuestion();
        const text=await questionRandomized.verifyQuestionOnReview();
        await browser.refresh();
        const text2= await questionRandomized.doneQuestion();

        expect(text).not.toEqual(text2);
        console.log(text+"$$$$$$$$$101010")
        console.log(text2+"&&&&&&&&456")

        
    });
    
});