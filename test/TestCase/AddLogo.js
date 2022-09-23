const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")
const logoAdd=require("../Modal/LogoAdd")

const allureReporter= require('@wdio/allure-reporter').default
const wrapperClass=require("../TestCase/WrapperClass")

describe('verify that user is able to add logo from computer',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
    it('Verfiy that when the user add logo below 2 mb its should be accepted',async () => {
        allureReporter.startStep("Click on the logo verify that 'Drag and drop a file here.' pop up displayed upload image")
        const imageAddVerfication= await logoAdd.addLogo();
        allureReporter.startStep("validates its added")
        expect(imageAddVerfication).toBeTruthy();
    });
    it('Verfiy that when the user add logo above 2 mb error should be displayed',async () => {
        
        allureReporter.startStep("Click on the logo verify that 'Drag and drop a file here.' pop up displayed")
        const errorVerifaction= await logoAdd.negativeLogoAdd();
        allureReporter.startStep(" Validate that upload image more than 2mb error is displayed")
        expect(errorVerifaction).toHaveText(properties.errorSet2[3]);
    });

});