import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/user.js';
const app=express();
app.use(express.json({limit:'30mb',extented:true}));
app.use(express.urlencoded({limit:'30mb',extented:true}));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("This is a api")
})

app.use('/user',userRouter)

const PORT=process.env.PORT || 5000;
const CONNECTION_URL='mongodb+srv://admin:admin@stack-overflow-clone.3f9r40t.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
}))
.catch((err)=>console.log(err))

