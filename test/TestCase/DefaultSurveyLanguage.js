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
const defaultLang=require("../Modal/DefaultLanguage")


describe('Verify that user is able to update default survey language',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
    it('Add default Langues',async () => {
        allureReporter.startStep("Add the qustion and change the langues of question")
       await defaultLang.languageSelction(properties.languesSelection);
       allureReporter.startStep("After add lagauges verify that langues should be change")
       const languesChangeText=await defaultLang.bulidQuestion();
       console.log(languesChangeText)
       expect(languesChangeText).toHaveValue(properties.NewTextLangues)
    });
});