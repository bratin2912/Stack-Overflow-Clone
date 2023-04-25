const authReducer=(state={data:null,isLoader:false,success:false},action)=>{
    switch (action.type) {
        case "AUTH":
            localStorage.setItem('profile',JSON.stringify({...action?.data}));
            return {...state,data:action?.data,isLoader:false,success:true}
        case "LOGOUT":
            localStorage.clear();
            alert("Logout successfully")
            return {...state,data:null,isLoader:false,success:false}
        case "MAKING_CALL":
            return {...state,isLoader:true}
        case "ERROR_OCCURED":
            return {...state,isLoader:false}
        default:
            return state
    }
}

export default authReducer;