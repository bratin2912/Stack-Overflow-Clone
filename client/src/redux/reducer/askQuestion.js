export const askQuestionReducer=(state={data:null},action)=>{
    switch (action.type) {
        case "POST_QUESTION":
            return({...state});
        case "GET_ALL_QUESTION":
            return({...state,data:action.payload});
        default:
            return state;
    }
}