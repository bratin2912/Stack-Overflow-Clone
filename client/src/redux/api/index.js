import axios from 'axios';

const API=axios.create({baseURL:"http://localhost:5000"});

export const login=(authdata)=>API.post('/user/login',authdata);
export const signup=(authdata)=>API.post('/user/signup',authdata);
export const postQuestion=(questionData)=>API.post('/question/Ask',questionData);
export const getAllQuestion=()=>API.get('/question/get');
export const postAnswer=(id,ansdata)=>API.patch(`/answer/post/${id}`,ansdata);
export const deleteQuestion=(id)=>API.delete(`/question/delete/${id}`);


