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
const matrixMenus=require("../Modal/MatrixDropdownMenus")
const allureReporter= require('@wdio/allure-reporter').default
describe('Add matrix of dropdown menus type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        await matrixQuestion.dragAnQuestion(properties.questionSet2[3]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that user able to add the question and its row and coloum value',async () => {
      allureReporter.startStep("Add the question and row label and coloum label")
      const dropdownSet=  await matrixMenus.addQuestionMatrixMenus(properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      allureReporter.startStep("Add the question and save it")
      expect(dropdownSet).toBeTruthy();
      });
      it('Verify that user when click the save button without add question label question error should be displayed',async () => {
        allureReporter.startStep("Without add the question label save the question")
       const errorMessage= await matrixMenus.errorInQuestion()
       allureReporter.startStep("Verfiy that the error should be display:'You must enter question text.'")
       expect(errorMessage).toEqual(properties.errorSet[0])
      });
      it('Verify that when user add the save button without add the row label error displayed',async () => {
        allureReporter.startStep("Without add the question label save the question")
       const errorInRowLabel= await matrixMenus.errorInRowLabel()
       allureReporter.startStep("Verfiy that the row error should be display")
       expect(errorInRowLabel).toEqual(properties.errorSet[5])
      });
      it('Verify that when user add the save button without add coloum choice the error displayed',async () => {
        allureReporter.startStep("With add the question label and row label save the question")
      const errorColumeLabel=await matrixMenus.errorLabelInColoum(properties.labelSet[0],properties.labelSet[1])
      allureReporter.startStep("Verify that the coloum error should be displayed")
      expect(errorColumeLabel).toEqual(properties.errorSet[2])
     });
      it('Verify that if user add coloum choice more than 200 then the error is displayed',async () => {
        allureReporter.startStep("Add the coloum question more than the 200 choice")
       const dropdownOnlyLimitedChoice= await matrixMenus.errorMessageInDropDownAnswerChoice(properties.labelSet[0],properties.labelSet[1],properties.labelSet[8])
       allureReporter.startStep("validate the error should be displayed after that")
       expect(dropdownOnlyLimitedChoice).toEqual(properties.errorSet2[0])
      });
      it('Verify that when user click on the coloum choice and save the pop up without add text error should be display',async () => {
        allureReporter.startStep("Without adding the dropdown choice save the question")
        const errorInColoumLabel=await matrixMenus.enterOneMoreChoice(properties.labelSet[0],properties.labelSet[1])
        allureReporter.startStep("Verify that the error should be displayed ")
        expect(errorInColoumLabel).toEqual(properties.errorSet2[1])
      });
      it('Verify that when the user click on the bulk check-box the bulk question pop up displayed',async () => {
        allureReporter.startStep("Click on the bulk question button")
        const addAnswerBulk=await matrixMenus.bulkLabel(properties.labelSet[0])
        allureReporter.startStep("Verify that the bulk question text pop up is displayed")
        expect(addAnswerBulk).toEqual(properties.labelSet2[0])
      });
      it('Verify that when the user add the bulk question its accepts the text in bulk pop up',async () => {
        allureReporter.startStep("Click on the bulk question button")
        await matrixMenus.bulkLabelAccepctsValues(properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
        allureReporter.startStep("Add the question in the bulk and verfiy that its accpecting that")
        await matrixMenus.saveQuestion();
      });
      it('Verify that if user add bulk choice more than 200 then the error is displayed',async () => {
      allureReporter.startStep("Add the bulk question more than the 200 choice")
      const errorInBulkAfter200Text=await matrixMenus.bulkAddQuestionMoreThan200Choice(properties.labelSet[0],properties.labelSet[8])
      allureReporter.startStep("Verify that the error is should be displayed after the adding 200 choice")
      expect(errorInBulkAfter200Text).toEqual(properties.errorSet2[0])
     });
    //  it('Error verifaction after set the validation upto 5 charaters',async () => {
    //   await matrixMenus.addLabel(properties.labelSet[0],properties.labelSet[1],properties.labelSet[2],properties.labelSet2[1],properties.labelSet2[2])
    //  });




});