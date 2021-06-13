import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//All reducers are combined. Please note that we import them with a name and they are saved with a different key.
//Eg. counter (key) and counterReducer(value)
//From the moment reducers are combined, they are known by Redux.
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

//This type will allow us to get an "interface" that tells us the type of the reducers, so when they are selected by useSelector on page.tsx
export type AppState = ReturnType<typeof allReducers>

export default allReducers;