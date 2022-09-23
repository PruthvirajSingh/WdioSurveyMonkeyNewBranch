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

const allureReporter= require('@wdio/allure-reporter').default
describe('verify that user is able to apply `one question at a time` format',async () => {
    before(async() => {
      await wrapperClass.beforeMethod();
     });
    beforeEach(async() => {
      await wrapperClass.beforeEachMethod();
    });
    afterEach(async() => {
        await wrapperClass.afterEachMethod()
    });
    it('Verify that when user click on the one question at a time then question formate changes in privew page',async () => {
        allureReporter.startStep("Add the question and set question")
        await oneQuestion.questionAdd(properties.headerSet[1]);
        allureReporter.startStep("Click on the privew page and click on the one question formate")
        const oneQustionAtATime= await oneQuestion.oneQustionsAtOnce();
        allureReporter.startStep("Check the question formate change")
        expect(oneQustionAtATime).toEqual(properties.questionSet2[1])
    });
});