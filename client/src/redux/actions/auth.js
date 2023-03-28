import * as api from '../api';

export const signup=(authdata,navigate)=> async(dispatch)=>{
    try{
        const {data}=await api.signup(authdata)
        dispatch({type:"AUTH",data})
        navigate('/')
    }catch(err){
        console.log("err")
    }
} 

export const login=(authdata,navigate)=> async(dispatch)=>{
    try{
        const {data}=await api.login(authdata)
        dispatch({type:"AUTH",data})
        navigate('/')
    }catch(err){
        console.log("err")
    }
}
