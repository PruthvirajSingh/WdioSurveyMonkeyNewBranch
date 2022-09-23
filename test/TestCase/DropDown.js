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
const converstionFormate=require("../Modal/ConverstionFormate")
const checkBox=require("../Modal/CheckBoxQuestion")
const dropDown=require("../Modal/DropDownQuestion")
const allureReporter= require('@wdio/allure-reporter').default
describe('Add dropdown type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop the dropdown type question")
        await dropDown.dragAnQuestion(properties.questionSet[6])
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that user able to set the dropdown type question',async () => {
        allureReporter.startStep("After the drag the dropdown question set the question value")
       await dropDown.valuesSet(properties.headerSet[1])
      });
      it('Verify that when the user save the question without add question and answer choice question error displayed',async () => {
       allureReporter.startStep("Drag the dropdown question and save it")
        const questionError= await dropDown.questionError();
        allureReporter.startStep("Verify that error displyed under the question-'You must enter question text.'")
       expect(questionError).toEqual(properties.errorSet[0]);
      });
      it('Verify that when the user save the question without add question and answer choice error displayed Options type error',async () => {
        allureReporter.startStep("Drag the dropdown question and save it")
       const answerChoice= await dropDown.opationsError(properties.headerSet[1])
       allureReporter.startStep("Verify that error displyed under the answer choice:'You are required to have at least 2 choices.'")
       expect(answerChoice).toEqual(properties.errorSet[3])
      });
      it('Verify that user able to add the bulk type question',async () => {
        allureReporter.startStep("Add the question label and click on the bulk and add answer choice in bulk")
        await dropDown.bulkQuestionSet(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      });

});