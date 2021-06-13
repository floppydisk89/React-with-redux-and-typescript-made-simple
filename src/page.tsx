import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from './reducers';
import {decrement, increment} from "./actions";

function Page() {
  
  //Gets into const the a reducer state (eg. counter or isLogged).
  //AppState is an TS interface to make typescript know the type of the reducer.
  const counter = useSelector<AppState>(state=> state.counter);
  const isLogged = useSelector<AppState>(state=> state.isLogged);

  //Creates a dispatch from the useDispatch hook from react-redux.
  const dispatch = useDispatch()

  //Please note that dispatch know where are the reducers and gets as argument the action name.
  //The functions called inside dispatch return an object containing the action name, so redux knows what it will be executing.
  return (
        <div className="App">
            <h1>Counter: {counter}</h1>    
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            {isLogged ? <h3>You are not logged in</h3>: ""}
        </div>
  );
}

export default Page;