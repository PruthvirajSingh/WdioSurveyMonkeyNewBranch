
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
const oneQuestion=require("../Modal/OneTimeAtATime")
const wrapperClass=require("./WrapperClass")
const converstionFormate=require("../Modal/ConverstionFormate")
const allureReporter= require('@wdio/allure-reporter').default
const defaultLang=require("../Modal/DefaultLanguage")


describe('verify that user is able to move question from one position to other',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
    it('Verify that user able to drag the question at the drag location',async () => {
        await moveQuestion.buildTheSurvey();
        allureReporter.startStep("Bulid the servey")
        const dragQuestion= await moveQuestion.dragAQuestion(properties.questionSet[0])
        allureReporter.startStep("Question add by using the drag and drop")
        expect(dragQuestion).toBeTruthy();
        allureReporter.startStep("verify the question the display after the drag and drop")
    });
    it('Verify that user not able to drag the question at footer selection',async () => {
        await moveQuestion.buildTheSurvey();
        allureReporter.startStep("Bulid the servey")
        const dragQuestion= await moveQuestion.dragQuestionAtFooter(properties.questionSet[0])
        allureReporter.startStep("Question add by using the drag and drop at footer")
        expect(dragQuestion).toBeTruthy();
        allureReporter.startStep("verify the question is not drag at footer")
    });
});