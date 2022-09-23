
const pageTitle=require("../Modal/PageTitle")



const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")
const logoAdd=require("../Modal/LogoAdd")
const createServy=require('../Modal/CreateNewServey')
// const pageTitle=require("../Modal/PageTitle")
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
const allureReporter= require('@wdio/allure-reporter').default
describe('verify that user is able to add page title',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
    it('Verify that user able to add the title When click on the Page title',async () => {
        allureReporter.startStep("Click on the button add title")
        await pageTitle.pageTitleButtonClick1()
        allureReporter.startStep("Set the values for the title and discripation save the question")
        const titleAddedVerfiaction=await pageTitle.titleAddForPage(properties.ElementName[0],properties.SurveyName[0]);
        allureReporter.startStep("Verify that title is added")
        expect(titleAddedVerfiaction).toBeTruthy();
    });
    it('Verify that when the user click on the page title its should not accepts the more than 100 charaters',async () => {
        allureReporter.startStep("Click on the button add title")
        await pageTitle.pageTitleButtonClick1();
        allureReporter.startStep("Add the title length more than 100 charaters");
        const hundredValuesPresent=await pageTitle.maximumTextThan100Characters(properties.labelSet[8]);
        allureReporter.startStep("Verify that the title should not contains 100 value")
        expect(hundredValuesPresent).toHaveTextContaining(properties.labelSet2[3])
        

    });
   
});

