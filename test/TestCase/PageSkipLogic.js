const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")

const createServy=require('../Modal/CreateNewServey')

const skipLogic=require("../Modal/SkipLogic")
const questionRandomized=require("../Modal/QuestionRandomized")
const allureReporter= require('@wdio/allure-reporter').default
describe('verify that user is able to apply page skip logic (skip to end of survey)',async () => {
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
    it('verify that user is able to apply page skip logic (skip to end of survey)',async () => {
        allureReporter.startStep("Click on the page logic(skip to end of survey)")
        await skipLogic.skipPageLogic(properties.ElementName[2],properties.SurveyName[0],properties.ElementName[3],properties.ElementName[4]);
        allureReporter.startStep("Verfiy that logo is added or not")
        const text=await questionRandomized.titleVerifaction();
        expect(text).toEqual(properties.ElementName[2])
        
       
    });
});