const utility=require("../Utility/Utility2")
const pageTitle=require('../Modal/PageTitle')
class NewPage{
    get newPage(){
        return $('#add_page')
    }
    async newPageAdd(value1,value2,value3){
        await pageTitle.addtitle(value1,value2);
        await utility.performClick(this.newPage);
        await pageTitle.pageTitleButtonClick2();
        await pageTitle.titleAddForPage(value3,value2)
    }

}
module.exports=new NewPage();