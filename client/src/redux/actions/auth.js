import * as api from '../api';
import { currentUser } from './currentUser';

export const signup=(authdata,navigate)=> async(dispatch)=>{
    try{
        const {data}=await api.signup(authdata)
        dispatch({type:"AUTH",data})
        dispatch(currentUser(JSON.parse(localStorage.getItem('profile'))));
        navigate('/')
    }catch(err){
        console.log("err")
    }
} 

export const login=(authdata,navigate)=> async(dispatch)=>{
    try{
        const {data}=await api.login(authdata);
        dispatch({type:"AUTH",data});
        dispatch(currentUser(JSON.parse(localStorage.getItem('profile'))));
        navigate('/')
    }catch(err){
        console.log("err")
    }
}
