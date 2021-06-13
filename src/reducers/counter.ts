interface IAction{
    type: "INCREMENT" | "DECREMENT";
}

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
