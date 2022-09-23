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
describe('Add matrix rating type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop the Matrix rating question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[3]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that when the add the matrix rating its accepts the questions',async () => {
        allureReporter.startStep("Add the question with the choice label")
        await matrixQuestion.importAQuestion(properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      });
      it('Verify that when the save the question without add it error displayed',async () => {
        allureReporter.startStep("Without the add the question save the question")
       const errorText=await matrixQuestion.addQuestionWithoutRow(properties.labelSet[0],properties.labelSet[1]);
       allureReporter.startStep("Verify that the error should be dispalyed")
       expect(errorText).toEqual(properties.errorSet[5]);
      });
      
});