import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.js';
import questionRouter from './routes/questions.js';
import answerRoute from './routes/answer.js';
const app=express();
app.use(express.json({limit:'30mb',extented:true}));
app.use(express.urlencoded({limit:'30mb',extented:true}));
app.use(cors());
dotenv.config();

app.use('/user',userRouter)
app.use('/question',questionRouter)
app.use('/answer',answerRoute)

const PORT=process.env.PORT || 5000;
const CONNECTION_URL=process.env.MONGO_URL;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
    console.log('Database is connected successfully');
}))
.catch((err)=>console.log(err))

