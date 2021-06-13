interface IAction{
    type: "SIGN_IN";
}

function loggedReducer(state = false, action: IAction){
    switch(action.type){
        case "SIGN_IN":
                        return !state; 
        default:
                        return  state;
    }
}

export default loggedReducer;