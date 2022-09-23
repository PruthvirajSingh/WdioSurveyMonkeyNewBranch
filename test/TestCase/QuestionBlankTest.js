const questionBlank=require("../Modal/QuestionBlank")
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
describe('verify that user is able to add question from question bank',async () => {
  before(async() => {
    await wrapperClass.beforeMethod();
   });
  beforeEach(async() => {
    await wrapperClass.beforeEachMethod();
  });
  afterEach(async() => {
      await wrapperClass.afterEachMethod()
  });
    it('Verify that user able to add question using question blank',async () => {
      const text= await questionBlank.addQuestionFromQuestionBlank(properties.headerSet[2])
      console.log(text+"}}}}}}}}}}}}}}")
      expect(text).toEqual(properties.addedQuestionsVerifaction[1])
    });
    it('Verify that when user user not add the question then add question button is disable',async () => {
      const booleanValues=await questionBlank.negativeSenrioForQuestionBlank();
      expect(booleanValues).toBeFalsy();
    });
});