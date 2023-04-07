import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import Users from '../models/auth.js'
export const signup=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const existingUser=await Users.findOne({email});
        if(!existingUser){
            const hashedPassword=await bcrypt.hash(password,12);
            const newUser=await Users.create({name,email,password:hashedPassword});
            const token=jwt.sign({email:newUser.email,id:newUser._id},'bkfeskvafa',{expiresIn:'1h'})
            res.status(200).send({
                result:newUser,
                token
            })
        }
        else{
            res.status(404).send({
                message:"User already exist"
            })
        }
    }catch(err){
        res.status(500).send({
            message:err.message
        })
    }
}

export const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const exisistingUser=await Users.findOne({email});
        if(!exisistingUser){
            res.status(404).send({
                message:"User doesn't exist"
            })
        }
        else{
            const matchedPassword=await bcrypt.compare(password,exisistingUser.password);
            if(!matchedPassword){
                res.status(400).send({
                    message:"Invalid credentials"
                })
            }
            else{
                const token=jwt.sign({email:email.exisistingUser,id:exisistingUser._id},'bkfeskvafa',{expiresIn:'1h'})
                res.status(200).send({
                    result:exisistingUser,
                    token
                })
            }
        }    
    }catch(err){
        res.status(500).send({
            message:"Something went wrong.."
        })
    }
}