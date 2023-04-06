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

export const deleteQuestion=(id,navigate)=>async(dispatch)=>{
    try {
        await api.deleteQuestion(id);
        dispatch(getQuestions());
        alert('Deleted successfully');
        navigate('/')
    } catch (error) {
        alert('You are not author of this question')
    }
}

export const deleteAnswer=(id,answerId,noOfans)=>async(dispatch)=>{
    try {
        await api.deleteAnswer(id,answerId,noOfans);
        dispatch(getQuestions());
    } catch (error) {
        console.log(error)
    }
}

