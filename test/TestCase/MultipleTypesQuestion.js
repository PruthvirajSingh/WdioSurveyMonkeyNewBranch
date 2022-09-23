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
const multiple=require("../Modal/Multiple")
const wrapperClass=require("../TestCase/WrapperClass")
const allureReporter= require('@wdio/allure-reporter').default
describe('Add multiple choice type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
    it('Verify user able to add the multiple type question and its values',async () => {
        allureReporter.startStep("Drag the multiple type question")
        await multiple.dragAQuestion(properties.questionSet[10])
        allureReporter.startStep("add the question header and its options text")
        await multiple.addNewQuestion(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
    });
    it('Verify that if user dont add the question then opps error displayed',async () => {
       allureReporter.startStep("Click on the save button")
      const oppsError= await multiple.saveQuestionWithoutValuesSet(properties.questionSet[10])
       allureReporter.startStep("opps error message verify")
      expect(oppsError).toEqual(properties.errorSet[2])
    });
    it('Verify that if the user dont add question label then question error displayed',async () => {
      allureReporter.startStep("Clcik on the save button")
      const questionError= await multiple.questionError(properties.questionSet[10]);
      allureReporter.startStep("error message of the question:`You must enter question text.` verify")
      expect(questionError).toEqual(properties.errorSet[0]);

    });
    it('Verify that when user not add the opations choice then At least one choice Error Displayed',async () => {
     allureReporter.startStep("Click on save button")
     const choiceEroor= await multiple.opationError(properties.questionSet[10])
     allureReporter.startStep("Error message verify that are show below the options")
     expect(choiceEroor).toEqual(properties.errorSet[5])
    });
});