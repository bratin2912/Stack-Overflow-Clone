import Questions from "../models/questions.js"
export const askQuestion=async(req,res)=>{
    const postQuestionData=req.body;
    const postQuestion=new Questions(postQuestionData)
    try{
        await postQuestion.save();
        res.status(200).send({
            message:"Question posted successfully"
        })
    }catch(err){
        res.status(409).send({
            message:"Falied to post"
        })
    }
}

export const getAllQuestion=async(req,res)=>{
    try{
        const questionList=await Questions.find();
        res.status(200).send(questionList)
    }catch(err){
        res.status(404).send({
            message:err.message
        })
    }
}