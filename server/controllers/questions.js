import Questions from "../models/questions.js";
import mongoose from "mongoose";
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

export const deleteQuestion=async(req,res)=>{
    const {id:_id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send({
            message:"Question unavailable.."
        })
    }
    try {
        await Questions.findByIdAndRemove(_id);
        res.status(200).send({
            message:"Successfully deleted"
        })
    } catch (error) {
        res.status(404).send({
            message:error.message
        })
    }
}