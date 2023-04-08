import axios from 'axios';

const API=axios.create({baseURL:"https://stack-overflow-clone-bratin.onrender.com"});
API.interceptors.request.use(req=>{
    if(localStorage.getItem('profile')){
        req.headers.auth=JSON.parse(localStorage.getItem('profile')).token;
        console.log(JSON.parse(localStorage.getItem('profile')).token);
    }
    return req;
})

export const login=(authdata)=>API.post('/user/login',authdata);
export const signup=(authdata)=>API.post('/user/signup',authdata);

export const postQuestion=(questionData)=>API.post('/question/Ask',questionData);
export const getAllQuestion=()=>API.get('/question/get');
export const postAnswer=(id,ansdata)=>API.patch(`/answer/post/${id}`,ansdata);

export const deleteQuestion=(id)=>API.delete(`/question/delete/${id}`);
export const deleteAnswer=(id,answerId,noOfans)=>API.patch(`/answer/delete/${id}`,{answerId,noOfans});

export const fetchAllUsers=()=>API.get('/user/getAllUsers');


