const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")
const logoAdd=require("../Modal/LogoAdd")
const createServy=require('../Modal/CreateNewServey')
const pageTitle=require("../Modal/PageTitle")


const moveQuestion=require("../Modal/MoveQuestion")
const deleteQuestion=require("../Modal/DeleteQuestion")
const walnut=require("../Modal/WalnutTheme")
const skipLogic=require("../Modal/SkipLogic")
const questionRandomized=require("../Modal/QuestionRandomized")
const pageRandomization=require('../Modal/PageRandomized')
const oneQuestion=require("../Modal/OneTimeAtATime")
const wrapperClass=require("../TestCase/WrapperClass")
const converstionFormate=require("../Modal/ConverstionFormate")
const matrixQuestion=require("../Modal/MatrixType")
const checkBox=require("../Modal/CheckBoxQuestion")

const allureReporter= require('@wdio/allure-reporter').default
const copyAndPaste=require("../Modal/CopyAQuestion")



describe('verify that user is able to copy question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
    it.only('Postive test case for the add question and copy it',async () => {
        await pageTitle.addtitle(properties.ElementName[0],properties.SurveyName[0])
        allureReporter.startStep("Add the question type and click on copy and paste")
        await copyAndPaste.clickOnDropdown(properties.questionSet[1])
        allureReporter.startStep("Click on copy and add question title")
        await copyAndPaste.addNewQ(properties.headerSet[1]);
        allureReporter.startStep("new question descripation")
        const newQuestion= await copyAndPaste.afterCopyNewQuestion(properties.headerSet[0])
        expect(newQuestion).toBeTruthy();
    });
    it('Neagative test case for the ',async () => {
        await pageTitle.addtitle(properties.ElementName[0],properties.SurveyName[0])
        allureReporter.startStep("Add the question type and click on copy and paste")
        await copyAndPaste.clickOnDropdown(properties.questionSet[1])
        allureReporter.startStep("Click on copy and add question title")
        await copyAndPaste.addNewQ(properties.headerSet[1]);
        allureReporter.startStep("new question descripation")
        const buttonIsEnablewithoutQuestion=await copyAndPaste.negativeCopyQuestion();
        allureReporter.startStep("without adding question verify that question is clickable or not")
        expect(buttonIsEnablewithoutQuestion).toBeFalsy();
    });
});