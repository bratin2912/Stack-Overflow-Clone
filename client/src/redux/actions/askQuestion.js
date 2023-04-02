import * as api from '../api'

export const askQuestion=(questionData,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.postQuestion(questionData);
        dispatch({type:"POST_QUESTION",payload:data});
        dispatch(getQuestions());
        navigate("/")
    }catch(err){
        console.log(err);
    }
}

export const getQuestions=()=>async(dispatch)=>{
    try{
        const {data}=await api.getAllQuestion();
        console.log(data);
        dispatch({type:"GET_ALL_QUESTION",payload:data});
    }catch(err){
        console.log(err);
    }
}

export const postAnswer=(id,ansdata)=>async(dispatch)=>{
    try{
        await api.postAnswer(id,ansdata);
        dispatch(getQuestions());
    }catch(err){
        console.log(err);
    }
}

