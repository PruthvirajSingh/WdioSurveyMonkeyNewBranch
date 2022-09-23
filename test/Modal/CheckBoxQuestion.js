const utility=require("../Utility/Utility2")
const multiple=require("../Modal/Multiple");

class CheckBox{
async dragAndDropQuestionF(ElementName){
    await multiple.dragAQuestion(ElementName)
}
async addQuestion(question,opation1,opation2,opation3){
    await multiple.addNewQuestion(question,opation1,opation2,opation3);
}
async oopsError(ElementName){
   const errorText= await multiple.saveQuestionWithoutValuesSet(ElementName);
   return errorText;
}
async qustionError(ElementName){
    const questionError= await multiple.questionError(ElementName);
    return questionError;
}
async opationsError(ElementName){
 const opationsError=await multiple. opationError(ElementName)
 return opationsError;
}
}
module.exports=new CheckBox();