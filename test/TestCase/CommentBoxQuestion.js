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
const commentBox=require("../Modal/CommentBox")
const matrixQuestion=require("../Modal/MatrixType")
const allureReporter= require('@wdio/allure-reporter').default
describe('add comment box type question',async () => {
     before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop Comment box question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[7]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that add the question with the bold format',async () => {
        allureReporter.startStep("Add question for comment box and save it with the Bold formate")
        await commentBox.setQue(properties.headerSet[0])
      });
      it('Verify that add the question with the underline format',async () => {
        allureReporter.startStep("Add question with the underline formate")
        const underLineText=await commentBox.saveQuestionInUnderLine(properties.headerSet[0])
        allureReporter.startStep("Verfiy that the underline is added")
        expect(underLineText).toBeTruthy();
      });
      it('Verify that add the question with the Italic Format',async () => {
        allureReporter.startStep("Add the question and apply the italic formate")
        await commentBox.saveQuestionInItalic(properties.headerSet[0])
      });
      it('Verify that add the question with the attached URL/Link',async () => {
       allureReporter.startStep("Add question Attached link with question")
       const link= await commentBox.saveQuestionWithLink(properties.headerSet[4],properties.headerSet[5])
       allureReporter.startStep("Verfiy that link is added the the question")
       expect(link).toBeTruthy();
      });
      it('Verify that add the question with the different colour',async () => {
      allureReporter.startStep("Add question Change color ")
      const yellowColour=  await commentBox.saveQuestionWithcolour(properties.headerSet[0])
      allureReporter.startStep("Validate colour id")
      expect(yellowColour).toBeTruthy();
      });
      it('Verify that add the question with the Image',async () => {
        allureReporter.startStep("Add question with the image")
       await commentBox.saveQuestionWithImage(properties.headerSet[0])
       allureReporter.startStep("Verify that the question added image after tha save it")
       expect(imageValidate).toBeTruthy();
      });
      it('Verify that add the question with the toolTip',async () => {
       allureReporter.startStep("Add question with the tool-Tip")
       const toolTipValue= await commentBox.saveQuestionWithToolTip(properties.headerSet[0],properties.headerSet[2])
       allureReporter.startStep("Verfiy that the toolTip is added")
       expect(toolTipValue).toEqual(properties.headerSet[2])
      });

});
