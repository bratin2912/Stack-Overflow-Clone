import Questions from "../models/questions.js";
import mongoose from "mongoose";
export const postAnswer=async(req,res)=>{
    const {id:_id}=req.params;
    console.log(_id)
    const {noOfans,answerBody,userAnswered,userId}=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send({
            message:"Question unavailable.."
        })
    }
    updateNoofans(_id,noOfans)
    try {
        const updateQuestion=await Questions.findByIdAndUpdate(_id,{$addToSet:{'answer':[{answerBody,userAnswered,userId}]}})
        console.log(updateQuestion)
        res.status(200).send(updateQuestion)
    } catch (error) {
        res.status(400).send({
            message:"Failed",
            error
        })
    }
}

const updateNoofans=async(_id,noOfans)=>{
    try {
        await Questions.findByIdAndUpdate(_id,{$set:{'noOfans':noOfans}})
    } catch (error) {
        console.log(err)
    }
}