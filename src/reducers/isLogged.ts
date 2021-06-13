//This interface will only allow actions of type "SIGN_IN", other types wont be working unless you add them to this interface.
interface IAction{
    type: "SIGN_IN";
}

//This function starts with a state of type false (implicit boolean) and receives action as an argument of type IAction.
//action.type will determine what to do.
function loggedReducer(state = false, action: IAction){
    switch(action.type){
        case "SIGN_IN":
                        return !state; 
        default:
                        return  state;
    }
}

export default loggedReducer;