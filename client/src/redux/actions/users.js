import * as api from '../api';

export const fetchAllUsers=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchAllUsers();
        dispatch({type:'FETCH_ALL_USERS',payload:data})
    } catch (error) {
        alert('Somthing wrong')
    }
}