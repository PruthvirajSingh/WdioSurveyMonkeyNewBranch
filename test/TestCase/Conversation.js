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
const allureReporter= require('@wdio/allure-reporter').default
describe('verify that user is able to apply conversation format',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verfiy that the when the click the conversation format the question is change to normal to conversation format ',async () => {
        allureReporter.startStep("Add the title and question")
        await converstionFormate.questionSet(properties.headerSet[1]);
        allureReporter.startStep("Click on the PREVIEW & SCORE and click on the converstion ")
        const conversation= await converstionFormate.converstionFormateFormateSelection();
        allureReporter.startStep("Verify that question is to be displayed in the converstion Formate")
        expect(conversation).toEqual(properties.questionSet2[2])
      });
});