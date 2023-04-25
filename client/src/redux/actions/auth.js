import * as api from '../api';
import { currentUser } from './currentUser';

export const signup=(authdata,navigate)=> async(dispatch)=>{
    dispatch({type:"MAKING_CALL"})
    try{
        const {data}=await api.signup(authdata)
        dispatch({type:"AUTH",data})
        dispatch(currentUser(JSON.parse(localStorage.getItem('profile'))));
        alert('Successfully sign up');
        navigate('/')
    }catch(err){
        dispatch({type:"ERROR_OCCURED"})
        alert(err.response.data.message);
    }
} 

export const login=(authdata,navigate)=> async(dispatch)=>{
    dispatch({type:"MAKING_CALL"})
    try{
        const {data}=await api.login(authdata);
        dispatch({type:"AUTH",data});
        dispatch(currentUser(JSON.parse(localStorage.getItem('profile'))));
        alert("Successfully loged in")
        navigate('/')
    }catch(err){
        dispatch({type:"ERROR_OCCURED"})
        alert(err.response?.data?.message);
    }
}
