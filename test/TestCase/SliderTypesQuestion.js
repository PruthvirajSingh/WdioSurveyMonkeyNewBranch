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
const silderType=require("../Modal/SliderType")
const SliderType = require('../Modal/SliderType')
describe('add slider type question',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop Slider type question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[15]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      it('Verify that when the user add the slider question its should be accepts the question headder',async () => {
        allureReporter.startStep("Save question with the add question hedder")
         await silderType.addQuestionSlider(properties.headerSet[1])
      });
      it('Verify that when user add Slider type question Error displayed without add slider values',async () => {
        allureReporter.startStep("Negative test-Validate the without add the scale its shown error")
        const errorWithoutSlider=await silderType.addNegativeSlider(properties.headerSet[1])
        expect(errorWithoutSlider).toEqual(properties.errorSet[6])
      });
});