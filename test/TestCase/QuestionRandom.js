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
const wrapperClass=require("../TestCase/WrapperClass")

const allureReporter= require('@wdio/allure-reporter').default
describe('verify that user is able to apply question randomization',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that when user apply the question randomiztion logic in the privew page its randomized',async () => {
        allureReporter.startStep("Add the question number 1")
        await questionRandomized.questiontype(properties.headerSet[1]);
        allureReporter.startStep("Add question number 2")
        await questionRandomized.questiontype2();
        allureReporter.startStep("Apply the page randomiztion logic")
        await questionRandomized.randmaziedQuestion();
        allureReporter.startStep("Clcik on the privew page")
        const question=await questionRandomized.verifyQuestionOnReview();
        
        const question2= await questionRandomized.verifyQuestion2();
        console.log(question+"{{{{{{{{{")
        console.log(question2+"}}}}}}}}")
        allureReporter.startStep("After refresh page the question is to be randomized")
        expect(question).toEqual(question2)
        
        
      });
});