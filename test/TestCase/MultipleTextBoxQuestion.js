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
const multipleTextBox=require("../Modal/MultipleTextBox")
describe('Add multiple textbox type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop multiple text box question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[4]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that the when the multiple text box question add its accepte the question',async () => {
        allureReporter.startStep("Add the question multiple text box and save it")
        await multipleTextBox.setValuesForMutipleText(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      });
      it('Verify that question error its to be displayed after the save question without the question label',async () => {
        allureReporter.startStep("Add the question multiple text box save it without add the question label")
       const questionError= await multipleTextBox.questionErrorMultipleTextBox();
       allureReporter.startStep("Error should be displayed after the save question")
       expect(questionError).toEqual(properties.errorSet[0]);
      });
      it('Verify that option error its to be display when user save it without the answer choice',async () => {
        allureReporter.startStep("Add the question multiple text box save it with add the question label")
        const errorOpations=await multipleTextBox.opationErrorMultipleTextBox();
        allureReporter.startStep("Save the question and Verify that options error should be displayed")
        expect(errorOpations).toEqual(properties.errorSet[5]);
      });
      it('Verify that user able to add the bulk type question',async () => {
        allureReporter.startStep("Add the question multiple text box save it with add the question label and add bulk type of options")
        await multipleTextBox.bulkQuestions(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      });
      it('Verify that when user click on the numerical validation user not add that error for the validation so error message should be displayed',async () => {
        allureReporter.startStep("Add the question and click on the numercial validation")
      const youMustEnterErrorMassage=  await multipleTextBox.errorMessageForNumerical(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      allureReporter.startStep("After that go to the privew page add the non numerical values and verfiy that error should be displayed ")
      expect(youMustEnterErrorMassage).toEqual(properties.newerror[0])
      });
      it('Verify that when user click on the check box of `numerical validation` the text should be displayed',async () => {
        allureReporter.startStep("Add the question and click on the numercial validation")
       const numericalText= await multipleTextBox.checkBoxAllowNumercalDataTextValidate(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
       allureReporter.startStep("Check the numerical validation is displayed")
       expect(numericalText).toBeTruthy();
      });
      it('Verify that when user select the numerical validation checkbox its only accepts the numerical values',async () => {
        allureReporter.startStep("Add the questions and click on Only Allow Numerical Data checkbox and Require a Fixed Sum checkbox and the display this error message if the text not correctly")
       const messageWithText= await multipleTextBox.allowNumericalData(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2],properties.labelSet[3])
       allureReporter.startStep("Click on preview button and add the wrong values and verfiy that error displayed")
       expect(messageWithText).toEqual(properties.labelSet[3])
      });
      it('Verify when the Sum of all Answers and value at privew page is same the URL is change ',async () => {
      await multipleTextBox.requireFixedSum(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2],properties.labelSet[3],properties.labelSet[4],properties.labelSet[5]);
      allureReporter.startStep("After click of the Only Allow Numerical Data and Require a Fixed Sum")
      await multipleTextBox.iframeShift(properties.labelSet[4])
      allureReporter.startStep("Add the values of the numercial")
      const url=await multipleTextBox.urlHit();
      allureReporter.startStep("Add the similar sum value and verify that URL is to be change")
      expect(url).toHaveTextContaining("https://www.surveymonkey.com/create/preview/")
      });
      it('Verify that when user enter Sum of all checkbox text and privew page text then error is displayed ',async () => {
      allureReporter.startStep("Add the question with the  Only Allow Numerical Data")
      await multipleTextBox.requireFixedSum(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2],properties.labelSet[3],properties.labelSet[4],properties.labelSet[5])
      allureReporter.startStep("After click of the Only Allow Numerical Data and Require a Fixed Sum")
      await multipleTextBox.iframeShift(properties.labelSet[7]);
      allureReporter.startStep("Add the error message if the wrong value enter")
      const wrongValue= await multipleTextBox.wrongNumberError()
      allureReporter.startStep("Validate the error message is displayed as per the enter previously")
      expect(wrongValue).toBeTruthy();
    });

});