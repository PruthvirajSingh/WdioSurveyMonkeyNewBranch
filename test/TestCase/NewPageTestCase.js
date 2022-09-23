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
const newPage=require("../Modal/NewPage")
const wrapperClass=require("../TestCase/WrapperClass")
const allureReporter= require('@wdio/allure-reporter').default
describe('verify that user is able to add new page',async () => {
     before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
    it('Verfiy that new page is able to add or not',async () => {
        allureReporter.startStep("click on the new page button")
        await newPage.newPageAdd(properties.ElementName[2],properties.SurveyName[0],properties.ElementName[3])
    });
});