export const currentUser=(data)=>{
    return{
        type:'FETCH_CURRENT_USER',
        payload:data
    }
}