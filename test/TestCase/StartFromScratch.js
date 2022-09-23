const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")
const logoAdd=require("../Modal/LogoAdd")
const createServy=require('../Modal/CreateNewServey')
const pageTitle=require("../Modal/PageTitle")
const copyAndPaste=require("../Modal/CopyAQuestion")

const moveQuestion=require("../Modal/MoveQuestion")
const deleteQuestion=require("../Modal/DeleteQuestion")
const walnut=require("../Modal/WalnutTheme")
const skipLogic=require("../Modal/SkipLogic")
const questionRandomized=require("../Modal/QuestionRandomized")
const pageRandomization=require('../Modal/PageRandomized')
const allureReporter= require('@wdio/allure-reporter').default
describe('Servey moneky test cases',async function() {
    this.timeout(0);
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
    it('verify that user is able to add logo from computer',async () => {
        allureReporter.startStep("click on logo button and 'Drag and drop a file here.'pop up displayed upload file form computer")
        const imageAddVerfication= await logoAdd.addLogo();
        expect(imageAddVerfication).toBeTruthy();
    });
    it('verify that user is able to add page title',async () => {
        allureReporter.startStep("Click on the button add title")
        await pageTitle.pageTitleButtonClick()
        allureReporter.startStep("set the values for the title and discripation save the question")
        const titleAddedVerfiaction=await pageTitle.titleAddForPage(properties.ElementName[0],properties.SurveyName[0]);
        expect(titleAddedVerfiaction).toBeTruthy();
    });
    it('verify that user is able to copy question',async () => {
        await pageTitle.addtitle(properties.ElementName[0],properties.SurveyName[0])
        allureReporter.startStep("Add the question type and click on copy and paste")
        await copyAndPaste.clickOnDropdown(properties.questionSet[1])
        allureReporter.startStep("Click on copy and add question title")
        await copyAndPaste.addNewQ(properties.headerSet[1]);
        allureReporter.startStep("new question descripation")
        const newQuestion= await copyAndPaste.afterCopyNewQuestion(properties.headerSet[0])
        expect(newQuestion).toBeTruthy();

    });
    it('verify that user is able to move question from one position to other',async () => {
        await moveQuestion.buildTheSurvey();
        allureReporter.startStep("Bulid the servey")
        const dragQuestion= await moveQuestion.dragAQuestion(properties.questionSet[0])
        allureReporter.startStep("Question add by using the drag and drop")
        expect(dragQuestion).toBeTruthy();
        allureReporter.startStep("verify the question the display after the drag and drop")
    });
    it('verify that user is able to delete any question',async () => {
        await browser.pause(3000)
        await moveQuestion.buildTheSurvey();
        allureReporter.startStep("build new servey")
        await moveQuestion.dragAQuestion(properties.questionSet[13])
        allureReporter.startStep("drag and drop a question")
        await deleteQuestion.deleteQuestionAfterAdd()
        allureReporter.startStep("Delete question")
        const deleteAddQuestion=await deleteQuestion.deleteQuestionVerifaction();
        allureReporter.startStep("verfiy the question delete is display or not")
        expect(deleteAddQuestion).toBeFalsy();
        
    });
    it('Verify that user is able to apply different theme Walnut under standard theme section',async () => {
        allureReporter.startStep("Click on the apperances ")
        const theamsApply= await walnut.applyThems(properties.headerSet[3]);
        allureReporter.startStep("Click on the theams and Walunt theams and verfiy that is able to dispaly or not")
       expect(theamsApply).toBeTruthy();

    });
    it('verify that user is able to apply page skip logic (skip to end of survey)',async () => {
      allureReporter.startStep("Click on the page logic(skip to end of survey)")
      const text= await skipLogic.skipPageLogic();
      allureReporter.startStep("Verfiy that logo is added or not")
      expect(text).toHaveText("After the current page is completed, skip to this page...")
      
    });
    it.only('verify that user is able to apply question randomization',async () => {
        await questionRandomized.dragQuestion(properties.questionSet[0])
        await questionRandomized.questiontype(properties.headerSet[1])
        await questionRandomized.questiontype2();
        await questionRandomized.randmaziedQuestion();
        const text=await questionRandomized.verifyQuestionOnReview();
        console.log(text+"&&&&&&&&&&&");
        const text2= await questionRandomized.doneQuestion();
        console.log(text2+"###########")
    });
    it.skip('verify that user is able to apply page randomization',async () => {
        await pageRandomization.dragQuestion(properties.questionSet[0],properties.headerSet[0]);
        await pageRandomization.newQuestion()

    });
    afterEach(async() => {
        allureReporter.startStep("Refresh page");
        await browser.refresh();
        allureReporter.startStep("Delete Surevy");
       
        await loginPage.deleteFile();
 });
});