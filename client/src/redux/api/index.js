import axios from 'axios';

const API=axios.create({baseURL:"http://localhost:5000"});

export const login=(authdata)=>API.post('/user/login',authdata);
export const signup=(authdata)=>API.post('/user/signup',authdata);

