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
const star=require("../Modal/StarTypes")
describe('Add Star rating type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop Star type question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[11]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that user able to add the star question',async () => {
        allureReporter.startStep("Add question label and save it")
        await star.addQuestionAndSave(properties.labelSet[0]);
      });
      it('Verify that user Add rating label',async () => {
        allureReporter.startStep("Positive test case-Add question and Add rating label and verfiy weight text is display or not")
        const weightValue=await star.ratingLabel(properties.labelSet[0])
        expect(weightValue).toBeTruthy();
      });
      it('Verify that user able to add star type with rating label',async () => {
        allureReporter.startStep("Positive test case-Add question and Add rating label and verfiy it added or not after save")
       const labelVerfiy= await star.ratingLabel2(properties.labelSet[0],properties.labelSet[1])
       expect(labelVerfiy).toBeTruthy();
      });
      it('Verify that user able to add question with Scale Changes and colour shape Test',async () => {
        allureReporter.startStep("Add question and changes the scale emoji and colour and Apply asseration for the scale validation")
       const emojiNumber= await star.shapeAdd(properties.labelSet[0])
       expect(emojiNumber).toEqual(3)
      });
      it('Verify that user able to Add an other options or comment',async () => {
      allureReporter.startStep("Apply the comment on the star question with label and check label is added or not")
      const textOfComment=await star.addComment(properties.labelSet[0],properties.labelSet[1])
      expect(textOfComment).toBeTruthy();
      });
      it('Verify that question save without any question label the error is displayed',async () => {
        allureReporter.startStep("Negative testing-Check the error message is display or not after without question save")
       const errorMessage= await star.negativeTest();
       expect(errorMessage).toEqual(properties.errorSet[0]);
      });

});