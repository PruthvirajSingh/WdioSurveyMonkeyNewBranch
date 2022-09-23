// const { default: basePage } = require("../TestCase/Ttt");
// const BasePage=require("../TestCase/Ttt")

const utility=require("../Utility/Utility2")
class LoginPage{
    get signUpForFree(){
        return $("//a[text()='Sign up free']");
    }
    get loginButtonFirstPage(){
        return $("//a[normalize-space()='Log in']")
    }
    get enterEmail(){
        return $("(//input[@id='username'])[2]")
    }
    get nextButton(){
        return $("//div[text()='Next']")
    }
    get enterPassword(){
    return $("//input[@aria-label='Password']")
    }
    get loginTextOnNextPage(){
        return $(".style-scope.wds-title");
    }
    get emailIdText(){
        return $("(//label[@for='username'])[2]")
    }
    get loginButton(){
    return $("//div[text()='Log in']")
    }
    get dropdown(){
        return $(".mm-menu__nav-button")
    }
    get signOut(){
        return $("(//span[text()='Sign Out'])[2]")
    }
    get mySurvey(){
        return $("//a[text()='My Surveys']")
    }
    get threeDot(){
        return $("(//span[@class='action-icon']//span)[1]")
    }
    get deletFiles(){
        return $("(//span[text()='Delete'])[2]")
    }
    get textDeletFile(){
        return $("(//span[text()='survey'])[2]")
    }
    get deleteFinal(){
        return $("(//a[text()='DELETE'])[3]")
    }
    get surveyDeletedMessage(){
        return $("(//span[contains(text(),'Survey ')])[8]")
    }
    get iframe(){
        return $("#survey-action-notification-template span");
    }
    get myServeyHedder(){
        return $(".mm-header__navbar-box")
    }
    // get hedderSelection(){
    //     return $(".mm-header.mm-header--elevate")
    // }
    async loginMethod(email,password){
        // await this.loginButtonFirstPage.waitForClickable({timeout:20000});
        // await browser.pause(5000);
        await this.signUpForFree.waitForDisplayed();
        // await this.loginButtonFirstPage.waitForClickable();
        // await this.loginButtonFirstPage.click();
        await utility.performClick(this.loginButtonFirstPage)
        // await browser.pause(2000)
        // expect(await this.loginTextOnNextPage).toHaveText("Log in")
        await this.emailIdText.waitForDisplayed({timeout:20000});
        // await this.enterEmail.waitForEnabled({timeout:20000});
        
        // await this.enterEmail.addValue(email);
        await utility.performSetValues(this.enterEmail,email);
        // await this.nextButton.click();
        await utility.performClick(this.nextButton)
        // await this.enterPassword.waitForDisplayed({timeout:20000})
        // await this.enterPassword.setValue(password);
        await utility.performSetValues(this.enterPassword,password)
        // await this.loginButton.click();
        await utility.performClick(this.loginButton)
    }
    async logout(){
        // await this.dropdown.click();
        // await this.signOut.click();
        await utility.performClick(this.dropdown)
        await utility.performClick(this.signOut)
    }
    async deleteFile(){
        // await this.hedderSelection.scrollIntoView();
        // await this.tryOut.waitForDisplayed();
        // await this.tryOut.scrollIntoView();
        // await browser.pause(6000)

        // await this.hedderSelection.scrollIntoView();
        await this.mySurvey.scrollIntoView();
        // await this.mySurvey.waitForClickable();
        // await this.mySurvey.click();
        await utility.performClick(this.mySurvey)
        // await this.threeDot.click()
        // await this.deletFiles.click();
        await utility.performClick(this.threeDot)
        await utility.performClick(this.deletFiles)
        await this.textDeletFile.waitForDisplayed();
        // await this.deleteFinal.waitForDisplayed()
        // await this.deleteFinal.click();
        await utility.performClick(this.deleteFinal)
        // await browser.pause(000)
   
    }
}
module.exports=new LoginPage();