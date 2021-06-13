import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from './reducers';
import {decrement, increment} from "./actions";

function Page() {
  
  const counter = useSelector<AppState>(state=> state.counter);
  const isLogged = useSelector<AppState>(state=> state.isLogged);

  const dispatch = useDispatch()

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