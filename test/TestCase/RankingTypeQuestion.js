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
const matrixQuestion=require("../Modal/MatrixType")
const allureReporter= require('@wdio/allure-reporter').default
const ranking=require("../Modal/Ranking")
describe('Add ranking-type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop Ranking type question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[5]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that when the user add the ranking question its accepts the question header and its answer choice',async () => {
        allureReporter.startStep("Add the ranking types question and save it")
        await ranking.addQuestion(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      });
      it('Verify that when the user add the bulk question its accpets the question',async () => {
        allureReporter.startStep("Add the ranking types question Apply the bulk answer type for the store the opations")
        await ranking.bulkQue(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      });
      it('Verify that when the user add the question with N/A check box its displayed',async () => {
        allureReporter.startStep("Click on the N/A checkBox and after save it check that it's add or not")
      const NAText=  await ranking.nAColoum(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      expect(NAText).toBeTruthy();
      });
      it('Verify that when user click the save button without add question error displayed for the question',async () => {
        allureReporter.startStep("Negative test-Validate the error message in the question without question add")
       const questionError= await ranking.negativeSenrioQuestion();
       expect(questionError).toEqual(properties.errorSet[0]);
      });
      it('Verify that when user click the save button without add question error displayed for the options',async () => {
        allureReporter.startStep("Negative test-Validate the error messages on options i.e-2 choice answer")
       const choiceEroor= await ranking.negativeSenrioOpationSet();
       expect(choiceEroor).toEqual(properties.errorSet[3])
      });

});