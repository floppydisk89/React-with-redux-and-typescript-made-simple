
//This interface will tell that type should be only "INCREMENT" or "DECREMENT".
//If there was other types more would be added to this interface.
interface IAction{
    type: "INCREMENT" | "DECREMENT";
}


//This function will initialize with a 0 state and receive an action that will determine what to do.
function counterReducer(state:number =  0, action: IAction){
    switch(action.type){
        case "INCREMENT":
                        return state + 1; 
        case "DECREMENT":
                        return state - 1;
        default:
                return state;

    }
}

export default counterReducer;
