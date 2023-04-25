import mongoose from "mongoose";
import Users from '../models/auth.js'


export const users=async(req,res)=>{
    try {
        const getAllUsers=await Users.find();
        const allsUserDetails=[];
        getAllUsers.forEach(users=>{
            allsUserDetails.push({_id:users._id,name:users.name,tags:users.tags,joinedOn:users.joinedOn,about:users.about})
        })
        res.status(200).json(allsUserDetails);
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}