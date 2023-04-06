const authReducer=(state={data:null},action)=>{
    switch (action.type) {
        case "AUTH":
            localStorage.setItem('profile',JSON.stringify({...action?.data}));
            return {...state,data:action?.data}
        case "LOGOUT":
            localStorage.clear();
            alert("Logout successfully")
            return {...state,data:null}
        default:
            return state
    }
}

export default authReducer;