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
const matrixQuestion=require("../Modal/MatrixType")
const checkBox=require("../Modal/CheckBoxQuestion")

const allureReporter= require('@wdio/allure-reporter').default
describe('add checkbox type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
       
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop the checkbox question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[12]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that when the user drag the checkbox question it is accepts the question and its answer choice',async () => {
        allureReporter.startStep("Drag the question and add its question value and answer choice and save it")
        await checkBox.addQuestion(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      });
      it('Verify that when the user add checkbox question and save it without add the question and answer choice the opps error is displayed ',async () => {
        allureReporter.startStep("Drag the question and save question And verify that opps error is displayed")
      const errorOpps=  await checkBox.oopsError(properties.questionSet[12]);
      allureReporter.startStep("Verify opps error")
      expect(errorOpps).toEqual(properties.errorSet[2])
      });
      it('Verify that when the user add checkbox question and save it without add the question and answer choice the question error is displayed',async () => {
        allureReporter.startStep("Drag the question and save question And verify that question error is displayed")
        const questionError= await checkBox.qustionError(properties.questionSet[12])
        allureReporter.startStep("Verify the question error")
       expect(questionError).toEqual(properties.errorSet[0]);
      });
      it('Verify that when the user add checkbox question and save it without add the question and answer choice the Answer choice error should be displayed',async () => {
        allureReporter.startStep("Drag the question and save question And verify that answer choice error is displayed")
        const opationError= await checkBox.opationsError(properties.questionSet[12])
        allureReporter.startStep("Verify the answer choice error")
       expect(opationError).toEqual(properties.errorSet[5])
      });
});
