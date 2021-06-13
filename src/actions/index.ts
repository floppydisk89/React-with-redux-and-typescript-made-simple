//Actions is where you create functions that return an object containing action type.
//When used on useDispatch (page.tsx), redux will automatically through the type, know what type of action should be executed. 
//Please note all this does is tell us the name of the action and nothing more.

export const increment = () => {
    return{
        type: "INCREMENT"
    }
}


export const decrement = () => {
    return{
        type: "DECREMENT"
    }
}
